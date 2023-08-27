import React from "react";

function Hero() {
  return (
    <div>
      <div className="bg-white   overflow-hidden relative lg:flex lg:items-center">
        <div className="w-full py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
          <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
            <span className="block">ऊँची उड़ान में आपका स्वागत है!</span>
          </h2>
          <p className="text-md mt-4 text-gray-400">
            Current Affairs for BPSC, UPPSC, MPPSC, JPSC, BSSC, RPSC, SSC, और
            अन्य Competitive और&nbsp;Government Job Examinations के लिए ऊँची
            उड़ान वेबसाइट और फेसबुक पेज को Follow करें।
          </p>
          <div className="lg:mt-0 lg:flex-shrink-0">
            <div className="mt-12 inline-flex ">
              <button
                type="button"
                className="py-2 px-4 shadow-xl bg-green-500 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
              >
                Get started
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
