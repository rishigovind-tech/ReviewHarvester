const g2ScraperService = require('../services/g2ScraperServices');

const getG2Reviews = async (req, res) => {
  const { companyName, startDate, endDate } = req.query;

  if (!companyName || !startDate || !endDate) {
    return res.status(400).json({ success: false, message: 'Missing required parameters' });
  }

  try {
    const reviews = await g2ScraperService.fetchReviews(companyName, startDate, endDate);
    res.json({ success: true, data: reviews });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = { getG2Reviews };
