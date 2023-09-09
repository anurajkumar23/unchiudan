import React from "react";
import { FaSearch } from "react-icons/fa";

import { FaEye, FaThumbsUp } from "react-icons/fa";

function Downloads() {
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
    // dummy test blogs
  ];

  function BlogComps({ date, title, views, likes, imageSrc }) {
    return (
      <div className="bg-white p-6 w-[18rem]  md:w-[14rem] rounded-xl shadow-lg  transition duration-500">
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
    );
  }

  return (
    <div className="mx-auto py-[8rem] ">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
        <div className="mx-0 col-span-2 xl:mx-0 p-4 md:mx-0 overflow-y-auto lg:my-0">
          <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 mx-10 md:mx-0 gap-6">
            {blogs.map((blog, index) => (
              <BlogComps
                key={index}
                date={blog.date}
                title={blog.title}
                views={blog.views}
                likes={blog.likes}
                imageSrc={blog.imageSrc}
              />
            ))}
          </div>
        </div>

        <div className=" p-4 space-y-10">
          <div className="flex md:mx-0 items-center mx-4">
            <input
              type="text"
              placeholder="Search..."
              className="px-4 py-2 w-full rounded-md border border-gray-500 focus:outline-none focus:border-indigo-500"
            />
            <button className="absolute right-10  bg-indigo-500 text-white p-3 rounded-md  flex items-center md:right-4 hover:bg-indigo-600 focus:outline-none">
              <FaSearch className="mx-2" />
            </button>
          </div>
          <div className="my-10">
            <h1 className="text-center text-xl">Download By Category</h1>
            <ul className="flex flex-col space-y-2 m-4">
              <a href="">
                <li className="flex space-x-2">
                  <span className="h-2 w-2 bg-black rounded-md my-auto"></span>
                  <span className="text-purple-300 hover:text-purple-500">
                    UPSC
                  </span>
                </li>
              </a>
              <a href="">
                <li className="flex space-x-2">
                  <span className="h-2 w-2 bg-black rounded-md my-auto"></span>
                  <span className="text-purple-300 hover:text-purple-500">
                    BPSC
                  </span>
                </li>
              </a>
              <a href="">
                <li className="flex space-x-2">
                  <span className="h-2 w-2 bg-black rounded-md my-auto"></span>
                  <span className="text-purple-300 hover:text-purple-500">
                    SSC
                  </span>
                </li>
              </a>
              <a href="">
                <li className="flex space-x-2">
                  <span className="h-2 w-2 bg-black rounded-md my-auto"></span>
                  <span className="text-purple-300 hover:text-purple-500">
                    meow
                  </span>
                </li>
              </a>
              <a href="">
                <li className="flex space-x-2">
                  <span className="h-2 w-2 bg-black rounded-md my-auto"></span>
                  <span className="text-purple-300 hover:text-purple-500">
                    UPSC
                  </span>
                </li>
              </a>
            </ul>
          </div>

          <div className="my-10">
            <h1 className="text-center text-xl">Latest Posts</h1>
            <ul className="flex flex-col space-y-3 m-4">
              <a href="">
                <li className="flex flex-col space-y-2 rounded-lg border-2 px-3 py-1 ">
                  <span className="text-lg">UPSC Notes Pdfs 2</span>
                  <span className="justify-between flex">
                    <span>31 August</span>
                    <span>125 Views</span>
                  </span>
                </li>
              </a>
              <a href="">
                <li className="flex flex-col space-y-2 rounded-lg border-2 px-3 py-1 ">
                  <span className="text-lg">UPSC Notes Pdfs 3</span>
                  <span className="justify-between flex">
                    <span>31 August</span>
                    <span>125 Views</span>
                  </span>
                </li>
              </a>
              <a href="">
                <li className="flex flex-col space-y-2 rounded-lg border-2 px-3 py-1 ">
                  <span className="text-lg">BPSC Notes Pdfs 2</span>
                  <span className="justify-between flex">
                    <span>31 August</span>
                    <span>125 Views</span>
                  </span>
                </li>
              </a>
              <a href="">
                <li className="flex flex-col space-y-2 rounded-lg border-2 px-3 py-1 ">
                  <span className="text-lg">SSC Notes Pdfs 2</span>
                  <span className="justify-between flex">
                    <span>31 August</span>
                    <span>125 Views</span>
                  </span>
                </li>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Downloads;
