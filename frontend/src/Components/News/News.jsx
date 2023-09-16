import React from "react";
import NewsComp from "./NewsComp";
const newsData = [
  {
    category: "UPSC",
    title: "UPSC Notes 1",
    content: "meow meow meow",
    image: "/Images/upsc.jpeg",
  },
  {
    category: "BPSC",
    title: "BPSC Notes 1",
    content: "meow meow meow",
    image: "/Images/bpsc.jpeg",
  },
  {
    category: "UPSC",
    title: "UPSC Notes 1",
    content: "meow meow meow",
    image: "/Images/upsc.jpeg",
  },
  // Add more news items here
];
function News() {
  return (
    <div className="mx-auto pt-[8rem]">
      <div className="grid grid-cols-1 mx-auto">
        <NewsComp newsItems={newsData} />
      </div>
    </div>
  );
}

export default News;
