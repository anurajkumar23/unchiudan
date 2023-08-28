import React from "react";
import BlogComp from "./BlogComp";
export default function Blogs() {
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
    // dummy test blogs
  ];

  return (
    <div className="mx-6 md:mx-10">
      <h1 className="text-center text-1.8rem md:text-[2rem] mb-6 ">
        Current Affairs
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-6">
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
    </div>
  );
}
