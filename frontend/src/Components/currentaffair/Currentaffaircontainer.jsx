/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import axios from 'axios';
import { BlogComps } from './AffairsContainer';
import Sidebar from '../Sidebar/Sidebar';
import { RiMenu3Fill, RiCloseFill } from 'react-icons/ri';

function Currentaffairs({ userData }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const postsPerPage = 10;

  const [affairs, setAffairs] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [filter, setFilter] = useState(false);
  const isSmallScreen = window.innerWidth <= 680;

  const togglefilter = () => {
    setFilter(!filter);
  };

  useEffect(() => {
    let apiUrl = `http://localhost:3000/api/currentaffairs`;
  
    if (selectedCategory) {
      setCurrentPage(1); // Reset currentPage to 1 when a category is selected
      apiUrl += `?category=${selectedCategory}&page=1`; // Set page to 1
    } else {
      apiUrl += `?page=${currentPage}`;
    }

    axios
  .get(apiUrl)
  .then((response) => {
    const { affairs } = response.data.data;
    const { totallength } = response.data;
    console.log("Total Length:", totallength);
    setAffairs(affairs);
    setTotalPages(Math.ceil(parseInt(totallength) / postsPerPage));
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

  }, [selectedCategory, currentPage]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
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
                userData={userData}
              />
            );
          })}
        </div>

        <div
          className={`z-1 flex-1 ${
            filter ? "block" : "hidden"
          } lg:flex sm:block`}
        >
          <Sidebar
            setSelectedCategory={setSelectedCategory}
            togglefilter={togglefilter}
          />
        </div>
      </div>

      <div className="flex justify-center my-4">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="mr-2"
        >
          Previous Page
        </button>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next Page
        </button>
      </div>
      <div className="text-center">
        Page {currentPage} of {totalPages}
      </div>
    </div>
  );
}

export default Currentaffairs;
