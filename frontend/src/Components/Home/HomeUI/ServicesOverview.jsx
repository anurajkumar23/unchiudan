import React from "react";
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";

function ServicesOverview() {
  return (
    <div className="mx-auto">
      <div class="flex flex-wrap items-center">
        <div class="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-78">
          <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-pink-500">
            <img
              alt="meow"
              src="/uchiudan.png"
              class="w-full align-middle rounded-t-lg"
            />
            <blockquote class="relative p-8 mb-4">
              <svg
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 583 95"
                class="absolute left-0 w-full block h-95-px -top-94-px"
              >
                <polygon
                  points="-30,95 583,95 583,65"
                  class="text-pink-500 fill-current"
                ></polygon>
              </svg>
              <h4 class="text-xl font-bold text-white">
                Great for your awesome project
              </h4>
              <p class="text-md font-light mt-2 text-white">
                Putting together a page has never been easier than matching
                together pre-made components. From landing pages presentation to
                login areas, you can easily customise and built your pages.
              </p>
            </blockquote>
          </div>
        </div>

        <div class="w-full md:w-6/12 px-4">
          <div class="flex flex-wrap">
            <div class="w-full md:w-6/12 px-4">
              <div class="relative flex flex-col mt-4">
                <div class="px-4 py-5 flex-auto">
                  <div class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white"></div>
                  <h6 class="text-xl mb-1 font-semibold">UPSC</h6>
                  <p class="mb-4 text-blueGray-500">
                    Notus JS comes with a huge number of Fully Coded CSS
                    components.
                  </p>
                </div>
              </div>
              <div class="relative flex flex-col min-w-0">
                <div class="px-4 py-5 flex-auto">
                  <div class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                    <i class="fas fa-drafting-compass"></i>
                  </div>
                  <h6 class="text-xl mb-1 font-semibold">
                    JavaScript Components
                  </h6>
                  <p class="mb-4 text-blueGray-500">
                    We also feature many dynamic components for React, NextJS,
                    Vue and Angular.
                  </p>
                </div>
              </div>
            </div>
            <div class="w-full md:w-6/12 px-4">
              <div class="relative flex flex-col min-w-0 mt-4">
                <div class="px-4 py-5 flex-auto">
                  <div class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                    <i class="fas fa-newspaper"></i>
                  </div>
                  <h6 class="text-xl mb-1 font-semibold">Pages</h6>
                  <p class="mb-4 text-blueGray-500">
                    This extension also comes with 3 sample pages. They are
                    fully coded so you can start working instantly.
                  </p>
                </div>
              </div>
              <div class="relative flex flex-col min-w-0">
                <div class="px-4 py-5 flex-auto">
                  <div class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                    <i class="fas fa-file-alt"></i>
                  </div>
                  <h6 class="text-xl mb-1 font-semibold">Monthly PDFs</h6>
                  <p class="mb-4 text-blueGray-500">
                    Built by developers for developers. You will love how easy
                    is to to work with Notus JS.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesOverview;
