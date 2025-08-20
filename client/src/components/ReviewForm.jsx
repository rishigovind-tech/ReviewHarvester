import { useState } from "react";
import axios from "axios";
import { Search, Calendar, TrendingUp, Sparkles, Filter } from "lucide-react";

function ReviewForm({ setReviews }) {
  const [loading, setLoading] = useState(false);

  const fetchReviews = async (e) => {
    e.preventDefault();
    setLoading(true);

    const company = e.target.company.value;
    const start = e.target.start.value;
    const end = e.target.end.value;
    const source = e.target.source.value;

    try {
      const res = await axios.get("http://localhost:5000/reviews", {
        params: { company, start, end, source },
      });
      setReviews(res.data);
    } catch (err) {
      console.error(err);
      alert("Error fetching reviews");
    }

    setLoading(false);
  };

  return (
    <div>
      <div className="  py-3 mt-3 rounded-3xl flex-col justify-center   ">
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-3  bg-black/10 backdrop-blur-md rounded-full px-6 py-3 mb-6 border border-black/20">
            <Sparkles className="w-5 h-5 text-yellow-400" />
            <span className="text-sm font-medium text-black">
               Review Analytics
            </span>
          </div>
        </div>
        <div className="flex justify-center">
          <h1 className="text-4xl py-1 font-bold text-center mb-2 bg-gradient-to-r from-[#5F0F40] to-[#310E68] bg-clip-text text-transparent">
            SaaS Review Scraper <br />
            <span className=" text-[20px] text-black font-extralight">
              Extract valuable insights from customer reviews across multiple
              platforms with our advanced scraping technology
            </span>
          </h1>
        </div>
        <div className="bg-white/10 backdrop-blur-2xl rounded-3xl border border-black/20 shadow-2xl p-8">
          <form onSubmit={fetchReviews} className="space-y-8">
            {/* company */}

            <div className="relative">
              <label className="block text-sm font-medium text-black mb-2 ml-1">
                Company Name
              </label>
              <div className="relative">
                <Search className="absolute left-4 top-5 w-5 h-5 text-black/40" />
                <input
                  name="company"
                  placeholder="Company name (e.g., Slack)"
                  className="w-full bg-black/5 border border-black/20 rounded-2xl pl-12 pr-4 py-4 text-black placeholder-black/40 focus:outline-none focus:ring-2 focus:ring-[#5F0F40] focus:border-transparent backdrop-blur-sm"
                  required
                />
              </div>
            </div>

            {/* date range */}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative">
                <label className="block text-sm font-medium text-black/80 mb-2 ml-1">
                  Start Date
                </label>
                <div className="relative">
                  <Calendar className="absolute left-4 top-5 w-5 h-5 text-black/40" />
                  <input
                    type="date"
                    name="start"
                    className="w-full bg-black/5 border border-black/20 rounded-2xl pl-12 pr-4 py-4 text-black placeholder-black/40 focus:outline-none focus:ring-2 focus:ring-[#5F0F40] focus:border-transparent backdrop-blur-sm"
                    required
                  />{" "}
                </div>
              </div>

              <div className="relative">
                <label className="block text-sm font-medium text-black/80 mb-2 ml-1">
                  End Date
                </label>
                <div className="relative">
                  <Calendar className="absolute left-4 top-5 w-5 h-5 text-black/40" />

                  <input
                    type="date"
                    name="end"
                    className="w-full bg-black/5 border border-black/20 rounded-2xl pl-12 pr-4 py-4 text-black placeholder-black/40 focus:outline-none focus:ring-2 focus:ring-[#5F0F40] focus:border-transparent backdrop-blur-sm"
                    required
                  />
                </div>
              </div>
            </div>

            {/* selection */}

            <div className="relative">
              <label className="block text-sm font-medium text-black/80 mb-2 ml-1">
                Review Source
              </label>
              <div className="relative">
                <Filter className="absolute left-4 top-5 w-5 h-5 text-black/40" />
                <select
                  name="source"
                  className="w-full bg-black/5 border border-black/20 rounded-2xl pl-12 pr-4 py-4 text-black placeholder-black/40 focus:outline-none focus:ring-2 focus:ring-[#5F0F40] focus:border-transparent backdrop-blur-sm"
                  required
                >
                  <option className="bg-grey-100 text-black" value="G2">
                    G2
                  </option>
                  <option className="bg-grey-100 text-black" value="Capterra">
                    Capterra
                  </option>
                  <option className="bg-grey-100 text-black" value="Trustpilot">
                    Trustpilot
                  </option>
                </select>
              </div>
            </div>

            {/* submit button */}

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#5F0F40] to-[#310E68] text-white font-semibold py-4 px-8 rounded-2xl shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-purple-400/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
            >
              {loading ? "Extracting..." : "Extract Review Insights"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ReviewForm;
