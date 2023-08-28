import React from "react";
import { FaEye, FaThumbsUp } from "react-icons/fa";

function BlogComp({ date, title, views, likes }) {
  return (
    <div className="bg-white p-6 w-[10rem] rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
      <div className="relative">
        <img className="w-full rounded-xl" src={imageSrc} alt={title} />
        <p className="absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">
          {date}
        </p>
      </div>
      <h1 className="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">
        {title}
      </h1>
      <div className="my-4 flex justify-between">
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
      <button className="mt-4 text-xl w-full text-white bg-indigo-600 py-2 rounded-xl shadow-lg">
        Read More
      </button>
    </div>
  );
}

export default function BlogList() {
  const blogs = [
    {
      date: "29 August",
      title: "UPSC Training Meow Meow Meow",
      views: 125,
      likes: 36,
      imageSrc: "/uchiudan.png",
    },
    //  dummy test blogs
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-6">
      {blogs.map((blog, index) => (
        <BlogComp
          key={index}
          date={blog.date}
          title={blog.title}
          views={blog.views}
          likes={blog.likes}
          imageSrc={blog.imageSrc}
        />
      ))}
    </div>
  );
}
