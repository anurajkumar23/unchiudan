import { BlogComps } from "./AffairsContainer";

import Sidebar from "../Sidebar/Sidebar";
import axios from "axios";
import { useState, useEffect } from "react";
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";

function Currentaffairs() {
  const [affairs, setAffairs] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [filter, setFilter] = useState(false);
  const isSmallScreen = window.innerWidth <= 680; 
  const togglefilter = () => {
    setFilter(!filter);
  };

  useEffect(() => {
    let apiUrl = "https://ucchi-urran-backend.vercel.app/api/currentaffairs";
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

  return (
    <div className="mx-auto py-[7rem]">
      <div className="p-2">
      {isSmallScreen && (
        <button
          onClick={togglefilter}
          className="text-black hover:text-gray-300 focus:outline-none md:hidden "
        >
          {filter ? (
            <RiCloseFill className="text-2xl" />
          ) : (
            <RiMenu3Fill className="text-2xl" />
          )}
        </button>
      )}
      </div>
      <div className="flex">
        <div
          className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 w-full mx-10 md:mx-0 ${
            filter ? "hidden" : "block"
          } `}
        >
          {affairs.map((blog, index) => {
            const createdAt = new Date(blog.createdAt);
            const updatedAt = new Date(blog.updatedAt);
            const formattedDate = createdAt.toLocaleString("default", {
              day: "numeric",
              month: "long",
            });
            const updatedDate = updatedAt.toLocaleString("default", {
              day: "numeric",
              month: "long",
            });

            return (
              <BlogComps
                key={index}
                date={formattedDate}
                title={blog.topic}
                imageSrc={blog.photo}
                updatedDate={updatedDate}
                category={blog.category}
                id={blog._id}
              
              />
            );
          })}
        </div>
        <div
          className={`z-1 flex-1 ${
            filter ? "block" : "hidden"
          } lg:flex sm:block`}
        >
          <Sidebar setSelectedCategory={setSelectedCategory} 
          togglefilter={togglefilter}
           />
        </div>
      </div>
    </div>
  );
}

export default Currentaffairs;
