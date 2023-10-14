import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Pagination from '../Pagination/Pagination'; 
import { BlogComps } from './AffairsContainer';
import Sidebar from '../Sidebar/Sidebar';
import { RiMenu3Fill, RiCloseFill } from 'react-icons/ri';

function Currentaffairs() {
  const [affairs, setAffairs] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [filter, setFilter] = useState(false);
  const isSmallScreen = window.innerWidth <= 680;
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(40); // Number of posts per page

  const togglefilter = () => {
    setFilter(!filter);
  };

  useEffect(() => {
    let apiUrl = `${import.meta.env.VITE_BACKEND_URL}/currentaffairs`;
    if (selectedCategory !== null) {
      apiUrl += `/?category=${selectedCategory}`;
    }

    axios
      .get(apiUrl)
      .then((response) => {
        setAffairs(response.data.data.affairs);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [selectedCategory]);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentAffairs = affairs.slice(indexOfFirstPost, indexOfLastPost);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="mx-auto py-[7rem]">
      <div className="p-2">
        {isSmallScreen && (
          <button
            onClick={togglefilter}
            className="text-black hover:text-gray-300 focus:outline-none md:hidden"
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
          }`}
        >
          {currentAffairs.map((blog, index) => {
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
        
        <div className={`z-1 flex-1 ${filter ? "block" : "hidden"} lg:flex sm:block`}>
          <Sidebar setSelectedCategory={setSelectedCategory} togglefilter={togglefilter} />
        </div>
        
      </div>
      <div className='sm:padding-top'>
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(affairs.length / postsPerPage)}
        onPageChange={handlePageChange}
      />
      </div>
    </div>
    
  );
}

export default Currentaffairs;
