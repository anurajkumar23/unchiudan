import React from "react";
import { FaEye } from "react-icons/fa";

function BlogComp() {
  return (
    <div>
      <div class="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
        <div class="relative">
          <img class="w-full rounded-xl" src="/uchiudan.png" alt="Colors" />
          <p class="absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">
            29 August
          </p>
        </div>
        <h1 class="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">
          Javascript Bootcamp for Absolute Beginners
        </h1>
        <div class="my-4">
          <div class="flex space-x-1 items-center">
            <span>
              <FaEye />
            </span>
            <p>125</p>
          </div>
          <div class="flex space-x-1 items-center">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-indigo-600 mb-1.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </span>
            <p>3 Parts</p>
          </div>
          <div class="flex space-x-1 items-center">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-indigo-600 mb-1.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
            </span>
            <p>Vanilla JS</p>
          </div>
          <button class="mt-4 text-xl w-full text-white bg-indigo-600 py-2 rounded-xl shadow-lg">
            Buy Lesson
          </button>
        </div>
      </div>
    </div>
  );
}

export default BlogComp;
