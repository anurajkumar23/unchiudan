import React from "react";

function NewsComp({ newsItems }) {
  return (
    <div className="flex flex-col justify-center ">
      {newsItems.map((news, index) => (
        <div
          key={index}
          className="relative my-6 flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border border-white bg-white"
        >
          <div className="w-full md:w-1/3 bg-white grid place-items-center">
            <img src={news.image} alt="News Image" className="rounded-xl" />
          </div>
          <div className="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
            <div className="flex justify-between item-center">
              <div className="bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-800 hidden md:block">
                {news.category}
              </div>
            </div>
            <h3 className="font-black text-gray-800 md:text-3xl text-xl">
              {news.title}
            </h3>
            <p className="md:text-lg text-gray-500 text-base">{news.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default NewsComp;
