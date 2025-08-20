import React from "react";

const Feature = () => {
  return (
    <div>
      <div className="flex flex-wrap gap-3 mt-8 justify-center">
        <div className="inline-flex items-center gap-2 bg-black/5 backdrop-blur-sm rounded-full px-4 py-2 border border-black/10">
          <span className="text-lg">🤖</span>
          <span className="text-sm text-black/80 font-medium">
            AI-Powered Analysis
          </span>
        </div>

        <div className="inline-flex items-center gap-2 bg-black/5 backdrop-blur-sm rounded-full px-4 py-2 border border-black/10">
          <span className="text-lg">⚡</span>
          <span className="text-sm text-black/80 font-medium">
            Real-time Processing
          </span>
        </div>

        <div className="inline-flex items-center gap-2 bg-black/5 backdrop-blur-sm rounded-full px-4 py-2 border border-black/10">
          <span className="text-lg">📈</span>
          <span className="text-sm text-black/80 font-medium">
            Sentiment Analytics
          </span>
        </div>

        <div className="inline-flex items-center gap-2 bg-black/5 backdrop-blur-sm rounded-full px-4 py-2 border border-black/10">
          <span className="text-lg">🔒</span>
          <span className="text-sm text-black/80 font-medium">
            Secure & Private
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        <div className="bg-black/5 b rounded-2xl p-6 border-2 border-[#5F0F40] text-center">
          <div className="text-3xl font-bold bg-gradient-to-r from-[#5F0F40] to-[#310E68]  bg-clip-text text-transparent mb-2">
            10K+
          </div>
          <div className="text-black/70 text-sm font-medium">
            Reviews Analyzed
          </div>
        </div>

        <div className="bg-black/5 b rounded-2xl p-6 border-2 border-[#5F0F40] text-center">
          <div className="text-3xl font-bold bg-gradient-to-r from-[#5F0F40] to-[#310E68]  bg-clip-text text-transparent mb-2">
            1K+
          </div>
          <div className="text-black/70 text-sm font-medium">
            Companies Tracked
          </div>
        </div>

        <div className="bg-black/5 b rounded-2xl p-6 border-2 border-[#5F0F40] text-center">
          <div className="text-3xl font-bold bg-gradient-to-r from-[#5F0F40] to-[#310E68]  bg-clip-text text-transparent mb-2">
            90%
          </div>
          <div className="text-black/70 text-sm font-medium">Accuracy Rate</div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
