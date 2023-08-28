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
    // dummy test blogs
  ];

  return (
    <div>
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
