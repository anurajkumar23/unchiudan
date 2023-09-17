import React from "react";
import NewsComp from "./NewsComp";
import Sidebar from "../Sidebar/Sidebar";
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
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
      <div className="mx-0 col-span-2 xl:mx-0 p-4 md:mx-0 overflow-y-auto hid lg:my-0">
        <NewsComp newsItems={newsData} />
      </div>
      <Sidebar/>
    </div>
    </div>
  );
}

export default News;
