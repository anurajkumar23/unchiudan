import React from "react";

function Hero() {
  return (
    <div>
      <div className="bg-white   overflow-hidden relative lg:flex lg:items-center">
        <div className="w-full py-12 ">
          <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
            <span className="block">ऊँची उड़ान में आपका स्वागत है!</span>
          </h2>
          <p className="text-md mt-4 text-gray-600">
            Current Affairs for BPSC, UPPSC, MPPSC, JPSC, BSSC, RPSC, SSC, और
            अन्य Competitive और&nbsp;Government Job Examinations के लिए ऊँची
            उड़ान वेबसाइट और फेसबुक पेज को Follow करें।
          </p>
          <div className="lg:mt-0 lg:flex-shrink-0">
            <div className="mt-12 inline-flex ">
              <button
                type="button"
                className="bg-blue-500 text-[18px] text-white rounded-lg px-4 py-1 hover:scale-110 duration-500 "
              >
                Start Learning & Fly High
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-8 p-8 lg:p-24">
          <img
            src="/Images/bpsc.jpeg"
            className="w-1/2 rounded-lg"
            alt="Meow"
          />
          <div>
            <img
              src="/Images/upsc.jpeg"
              className="mb-8 rounded-lg"
              alt="Meow"
            />
            <img src="/Images/ssc.jpeg" className="rounded-lg" alt="Meow" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
