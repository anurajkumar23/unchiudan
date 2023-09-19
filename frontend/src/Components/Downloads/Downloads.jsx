import React, { useState } from "react";
import { FaSearch, FaEye, FaThumbsUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";

const blogs = [
  {
    date: "29 August",
    title: "UPSC Training Meow Meow Meow",
    views: 125,
    likes: 36,
    imageSrc: "/uchiudan.png",
  },
  {
    date: "29 August",
    title: "UPSC Training Meow Meow Meow",
    views: 125,
    likes: 36,
    imageSrc: "/uchiudan.png",
  },
  {
    date: "29 August",
    title: "UPSC Training Meow Meow Meow",
    views: 125,
    likes: 36,
    imageSrc: "/uchiudan.png",
  },
  {
    date: "29 August",
    title: "UPSC Training Meow Meow Meow",
    views: 125,
    likes: 36,
    imageSrc: "/uchiudan.png",
  },
  {
    date: "29 August",
    title: "UPSC Training Meow Meow Meow",
    views: 125,
    likes: 36,
    imageSrc: "/uchiudan.png",
  },
  {
    date: "29 August",
    title: "UPSC Training Meow Meow Meow",
    views: 125,
    likes: 36,
    imageSrc: "/uchiudan.png",
  },
  {
    date: "29 August",
    title: "UPSC Training Meow Meow Meow",
    views: 125,
    likes: 36,
    imageSrc: "/uchiudan.png",
  },
];

function BlogComps({ date, title, views, likes, imageSrc }) {
  return (
    <Link to="/downloadpdf">
      <div className="bg-white p-6 w-[18rem] md:w-[14rem] rounded-xl shadow-lg transition duration-500">
        <div className="relative">
          <img className="w-full rounded-xl" src={imageSrc} alt="Blog Cover" />
          <p className="absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">
            {date}
          </p>
        </div>
        <h1 className="mt-4 text-gray-800 text-lg font-bold cursor-pointer">
          {title}
        </h1>
        <div className="my-2 mx-6 flex justify-between">
          <div className="flex space-x-1 items-center">
            <span>
              <FaEye />
            </span>
            <p>{views}</p>
          </div>
          <div className="flex space-x-1 items-center">
            <span>
              <FaThumbsUp />
            </span>
            <p>{likes}</p>
          </div>
        </div>
        <button className="mt-4 text-md hover:bg-indigo-600 w-full text-white bg-indigo-400 py-1 px-3 rounded-xl hover:shadow-xl">
          Read More
        </button>
      </div>
    </Link>
  );
}

function Downloads() {
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const visibleBlogs = blogs.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="mx-auto py-[8rem]">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="col-span-3 p-4 md:mx-0 overflow-y-auto lg:my-0">
          <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 mx-10 md:mx-0 gap-6">
            {visibleBlogs.map((blog, index) => (
              <BlogComps key={index} {...blog} />
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-4 flex justify-center">
            {Array.from(
              { length: Math.ceil(blogs.length / itemsPerPage) },
              (_, i) => (
                <button
                  key={i}
                  className={`mx-2 p-2 ${
                    i + 1 === currentPage
                      ? "bg-indigo-500 text-white"
                      : "bg-gray-200 text-gray-800"
                  } rounded-md hover:bg-indigo-600 focus:outline-none`}
                  onClick={() => handlePageChange(i + 1)}
                >
                  {i + 1}
                </button>
              )
            )}
          </div>
        </div>

        <Sidebar />
      </div>
    </div>
  );
}

export default Downloads;
