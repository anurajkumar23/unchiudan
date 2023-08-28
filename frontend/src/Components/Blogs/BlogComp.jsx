import React from "react";
import { FaEye, FaThumbsUp } from "react-icons/fa";

function BlogComp() {
  return (
    <div>
      <div class="bg-white p-6 w-[10rem] rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
        <div class="relative">
          <img class="w-full rounded-xl" src="/uchiudan.png" alt="Colors" />
          <p class="absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">
            29 August
          </p>
        </div>
        <h1 class="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">
          UPSC Training Meow Meow Meow
        </h1>
        <div class="my-4 flex justify-between">
          <div class="flex space-x-1 items-center">
            <span>
              <FaEye />
            </span>
            <p>125</p>
          </div>
          <div class="flex space-x-1 items-center">
            <span>
              <FaThumbsUp />
            </span>
            <p>36</p>
          </div>
        </div>
        <button class="mt-4 text-xl w-full text-white bg-indigo-600 py-2 rounded-xl shadow-lg">
          Read More
        </button>
      </div>
    </div>
  );
}

export default BlogComp;
