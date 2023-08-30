import React from "react";
import {
  FaFileAlt,
  FaUserGraduate,
  FaLanguage,
  FaUserTie,
} from "react-icons/fa";

function ServicesOverview() {
  return (
    <div className="mx-auto">
      <h1 className="text-center text-[1.5rem] md:text-[2rem] mb-6 ">
        Our Services
      </h1>
      <div class="flex flex-wrap items-center">
        <div class="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-78">
          <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6  rounded-lg bg-pink-500">
            <img
              alt="meow"
              src="/uchiudan.png"
              class="w-full align-middle rounded-t-lg"
            />
          </div>
        </div>

        <div class="w-full md:w-6/12 px-4">
          <div class="flex flex-wrap">
            <div class="w-full md:w-6/12 px-4">
              <div class="relative flex flex-col mt-4">
                <div class="px-4 py-5 flex-auto">
                  <div class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center  w-fit h-fit mb-5 shadow-lg rounded-full bg-white">
                    <FaUserTie className="w-10 h-10" />
                  </div>
                  <h6 class="text-xl mb-1 font-semibold">Daily Quiz</h6>
                  <p class="mb-4 text-blueGray-500">meow</p>
                </div>
              </div>
              <div class="relative flex flex-col min-w-0">
                <div class="px-4 py-5 flex-auto">
                  <div class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center  w-fit h-fit mb-5 shadow-lg rounded-full bg-white">
                    <FaUserGraduate className=" w-10 h-10" />
                  </div>
                  <h6 class="text-xl mb-1 font-semibold">
                    latest Current affair
                  </h6>
                  <p class="mb-4 text-blueGray-500">meow</p>
                </div>
              </div>
            </div>
            <div class="w-full md:w-6/12 px-4">
              <div class="relative flex flex-col min-w-0 mt-4">
                <div class="px-4 py-5 flex-auto">
                  <div class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center  w-fit h-fit mb-5 shadow-lg rounded-full bg-white">
                    <FaLanguage className=" w-10 h-10" />
                  </div>
                  <h6 class="text-xl mb-1 font-semibold">problem solving</h6>
                  <p class="mb-4 text-blueGray-500">meow</p>
                </div>
              </div>
              <div class="relative flex flex-col min-w-0">
                <div class="px-4 py-5 flex-auto">
                  <div class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center  w-fit h-fit mb-5 shadow-lg rounded-full bg-white">
                    <FaFileAlt className=" w-10 h-10" />
                  </div>
                  <h6 class="text-xl mb-1 font-semibold">free PDFs</h6>
                  <p class="mb-4 text-blueGray-500">meow</p>
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
