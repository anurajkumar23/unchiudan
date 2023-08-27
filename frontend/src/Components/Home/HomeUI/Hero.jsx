import React from "react";

function Hero() {
  return (
    <div>
      <div class="bg-white   overflow-hidden relative lg:flex lg:items-center">
        <div class="w-full py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
          <h2 class="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
            <span class="block">Mother hearth host your travel</span>
          </h2>
          <p class="text-md mt-4 text-gray-400">
            The state of Utah in the united states is home to lots of beautiful
            National parks, Bryce national canion park ranks as three of the
            most magnificient &amp; awe inspiring.
          </p>
          <div class="lg:mt-0 lg:flex-shrink-0">
            <div class="mt-12 inline-flex rounded-md shadow">
              <button
                type="button"
                class="py-2 px-4  bg-green-500 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
              >
                Get started
              </button>
            </div>
          </div>
        </div>
        <div class="flex items-center gap-8 p-8 lg:p-24">
          <img
            src="/images/landscape/3.jpg"
            class="w-1/2 rounded-lg"
            alt="Meow"
          />
          <div>
            <img
              src="/images/landscape/2.jpg"
              class="mb-8 rounded-lg"
              alt="Meow"
            />
            <img src="/images/landscape/4.jpg" class="rounded-lg" alt="Tree" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
