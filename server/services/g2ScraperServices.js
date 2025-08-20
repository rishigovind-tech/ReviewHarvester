const puppeteer = require('puppeteer');
const RobotsParser = require('robots-txt-parser');

const robots = RobotsParser({
  userAgent: '*',
  allowOnNeutral: false,
});

const BASE_URL = 'https://www.g2.com';

const isUrlAllowed = async (url) => {
  try {
    await robots.useRobotsFor('https://www.g2.com/robots.txt');
    return await robots.canCrawl(url);
  } catch (err) {
    console.error('Robots.txt check error:', err);
    return false; // Disallow scraping if error occurs
  }
};

const autoScroll = async (page) => {
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      let totalHeight = 0;
      const distance = 100;
      const timer = setInterval(() => {
        const scrollHeight = document.body.scrollHeight;
        window.scrollBy(0, distance);
        totalHeight += distance;

        if (totalHeight >= scrollHeight) {
          clearInterval(timer);
          resolve();
        }
      }, 100);
    });
  });
};

const fetchReviews = async (companyName, startDate, endDate, maxPages = 5) => {
  const url = `${BASE_URL}/products/${companyName}/reviews`;
  const allowed = await isUrlAllowed(url);

  if (!allowed) {
    throw new Error(`Scraping disallowed by robots.txt for URL: ${url}`);
  }

  const browser = await puppeteer.launch({
    headless: true, // Change to false for debugging
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const page = await browser.newPage();

  await page.setUserAgent(
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36'
  );
  await page.setViewport({ width: 1280, height: 800 });

  let currentPage = 1;
  let allReviews = [];
  const start = new Date(startDate);
  const end = new Date(endDate);

  while (currentPage <= maxPages) {
    const pageUrl = `${url}?page=${currentPage}`;
    await page.goto(pageUrl, { waitUntil: 'networkidle2', timeout: 60000 });
    await autoScroll(page);

    // Check if reviews container exists
    const reviewsOnPage = await page.$$('[data-controller="survey-response"], .review');
    if (reviewsOnPage.length === 0) {
      console.warn(`Reviews not found on page ${currentPage}`);
      break;
    }

    const reviews = await page.evaluate(
      (start, end) => {
        const startDate = new Date(start);
        const endDate = new Date(end);

        // Select all review containers
        const reviewEls = Array.from(
          document.querySelectorAll('[data-controller="survey-response"], .review')
        );

        return reviewEls
          .map((el) => {
            const title = el.querySelector('h3')?.innerText.trim() || '';
            const description =
              el.querySelector('.pre-line, .elv-pre-line, .reviewContent')?.innerText.trim() || '';

            // Reviewer extraction: try meta tag content or visible div text
            const reviewer =
              el.querySelector('[itemprop="author"] meta[itemprop="name"]')?.getAttribute('content') ||
              el.querySelector('[itemprop="author"] > div')?.innerText.trim() ||
              '';

            const dateText =
              el.querySelector('[data-controller="review-date-controller"], time, [data-testid="review-date"]')
                ?.innerText || '';
            const ratingEl = el.querySelector('[data-controller="star-rating-controller"] [aria-label*="out of 5"]');
            const rating = ratingEl ? ratingEl.getAttribute('aria-label')?.match(/^\d+\.?\d*/)?.[0] : null;

            const reviewDate = new Date(dateText);
            if (!reviewDate || reviewDate < startDate || reviewDate > endDate) return null;

            return {
              title,
              description,
              reviewer,
              rating,
              date: reviewDate.toISOString(),
            };
          })
          .filter(Boolean);
      },
      start,
      end
    );

    allReviews = allReviews.concat(reviews);

    // If no reviews returned, stop
    if (reviews.length === 0) break;

    currentPage++;
  }

  await browser.close();
  return allReviews;
};

module.exports = { fetchReviews };
