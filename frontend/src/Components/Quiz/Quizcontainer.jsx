import { BlogComps } from "./container";

import Sidebar from "../Sidebar/Sidebar";
import axios from "axios";
import { useState, useEffect } from "react";

function Quizcontainer() {
  const [affairs, setAffairs] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);


  console.log(selectedCategory)

  useEffect(() => {
    let apiUrl = '/api/currentaffairs';
   if (selectedCategory !== null) {
      apiUrl += `/?category=${selectedCategory}`;
    }
    // const apiUrl = `/api/currentaffairs/?category=${selectedCategory}`;
    // console.log(apiUrl); // Check if this URL is correct
    axios
      .get(apiUrl)
      .then((response) => {
        setAffairs(response.data.data.affairs);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [selectedCategory]);

  console.log(affairs)
  
  return (
    <div className="mx-auto py-[8rem]">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="col-span-3 p-4 md:mx-0 overflow-y-auto lg:my-0">
          <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 mx-10 md:mx-0 gap-6">
            {affairs.map((blog, index) => {
              const createdAt = new Date(blog.createdAt);
              const formattedDate = createdAt.toLocaleString("default", {
                day: "numeric",
                month: "long",
              });

              return (
                <BlogComps
                  key={index}
                  date={formattedDate}
                  title={blog.topic}
                  imageSrc={blog.photo}
                />
              );
            })}
          </div>
        </div>

        <Sidebar setSelectedCategory={setSelectedCategory} />
      </div>
    </div>
  );
}

export default Quizcontainer;
