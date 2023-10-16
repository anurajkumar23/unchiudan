/* eslint-disable react/prop-types */

import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { MdOutlineAccessTimeFilled, MdOutlineDelete } from "react-icons/md";
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";
import Sidebar_pdf from "../Sidebar/Sidebar_pdf";
import { Toaster, toast } from "react-hot-toast";
function BlogComps({
  date,
  title,
  imageSrc,
  updatedDate,
  id,
  status,
  category,
  userData,
}) {
  let role;

  if (userData) {
    if (userData.user.role === "admin") {
      role = true;
    } else {
      role = false;
    }
  } else {
    role = false;
  }
  const handleDeleteClick = async (event) => {
    event.stopPropagation(); // Prevent the click event from propagating to the parent link element
    if (window.confirm("Are you sure you want to delete this item?")) {
      // Perform the delete action here, e.g., call an API to delete the item
      // You may want to pass the `id` or some identifier to delete the specific item
      // Example: deleteItem(id);
      const token = localStorage.getItem("jwt_token");
      console.log("🚀 ~ file: FormPDF.jsx:9 ~ postpdf ~ token:", token);
      try {
        const response = await axios.delete(
          `${import.meta.env.VITE_BACKEND_URL}/pdfs/${id}`,
          {
            headers: {
              Authorization: token, // Replace YOUR_AUTH_TOKEN_HERE with the actual token
            },
          }
        );

        if (response.status === 200) {
          // The item was deleted successfully
          // Perform any additional actions you need here
          console.log("Item deleted successfully");
          toast.success("Item deleted successfully")
        } else {
          console.error("Error deleting item:", response);
        }
      } catch (error) {
        console.error("Error deleting item:", error);
        toast.error("Error in deleting item")
      }
    }
  };
  return (
    <div className="border border-2 bg-white p-4 rounded-xl shadow-lg transition duration-500 relative">
      {role ? (
        <button
          className="absolute top-0 right-0 text-red-600 cursor-pointer bg-red-500 rounded-full p-2"
          style={{ zIndex: 1 }}
          onClick={handleDeleteClick}
        >
          <MdOutlineDelete size={32} color="#fff" />
        </button>
      ) : (
        ""
      )}
      <Link to={`/pdfs/${id}`} className="w-full h-full">
        <div className="card__header">
          <div className="card__picture">
            <div className="card__picture-overlay">&nbsp;</div>
            <div className="relative">
              <img
                className="w-full rounded-xl"
                src={imageSrc}
                alt="Blog Cover"
              />
              <p className="absolute top-0 bg-[#ffef39] text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">
                {date}
              </p>
            </div>
          </div>
          <h3 className="heading-tertirary">
            <span>{category}</span>
          </h3>
        </div>
        <h1 className="mt-4 text-gray-800 text-lg font-bold cursor-pointer overflow-hidden mb-[1rem]">
          {title}
        </h1>
        <h1 className="mt-4 text-gray-800 text-lg font-bold cursor-pointer">
          status: {status}
        </h1>
        <div className="card__data">
          <h1 className="text-gray-800 text-lg font-bold cursor-pointer overflow-hidden">
            <MdOutlineAccessTimeFilled className="card__icon" />
          </h1>
          <p className="text-lg ">updated at: {updatedDate}</p>
        </div>
        <div className="my-2 mx-6 flex justify-between"></div>
        <button className="mt-4 text-md hover-bg-indigo-600 w-full text-white bg-indigo-400 py-1 px-3 rounded-xl hover:shadow-xl">
          Read More
        </button>
      </Link>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}

function Downloads({ userData }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(12); // Added state for posts per page

  const [pdfs, setPdfs] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState(null);
  const [filter, setFilter] = useState(false);
  const isSmallScreen = window.innerWidth <= 680;

  const togglefilter = () => {
    setFilter(!filter);
  };

  const fetchData = (page, category) => {
    let apiUrl = `${import.meta.env.VITE_BACKEND_URL}/pdfs?page=${page}&limit=${postsPerPage}`; // Include limit in API request

    if (category) {
      apiUrl += `&category=${category}`;
    }

    if (selectedStatus !== null) {
      apiUrl += `&status=${selectedStatus}`;
    }

    axios
      .get(apiUrl)
      .then((response) => {
        const { pdf } = response.data.data;
        const { totallength } = response.data;
        console.log('Total Length:', totallength);
        setPdfs(pdf);
        setTotalPages(Math.ceil(parseInt(totallength) / postsPerPage));
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  useEffect(() => {
    let apiUrl = `${import.meta.env.VITE_BACKEND_URL}/pdfs`;

    if (selectedCategory !== null) {
      apiUrl += `/?category=${selectedCategory}`;
    }

    if (selectedStatus !== null) {
      apiUrl += `${selectedCategory ? "&" : "/?"}status=${selectedStatus}`;
    }

    axios
      .get(apiUrl)
      .then((response) => {
        setPdfs(response.data.data.pdf);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [selectedCategory, selectedStatus]);

  useEffect(() => {
    fetchData(currentPage, selectedCategory);
  }, [selectedCategory, currentPage, postsPerPage]); // Include postsPerPage as a dependency

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
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset page number to 1 when category changes
  };

  const handleLimitChange = (event) => {
    const newLimit = parseInt(event.target.value, 10);
    setPostsPerPage(newLimit);
    setCurrentPage(1); // Reset page number to 1 when limit changes
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
          {pdfs.map((pdf) => {
            const createdAt = new Date(pdf.createdAt);
            const updatedAt = new Date(pdf.updatedAt);
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
                key={pdf._id}
                date={formattedDate}
                title={pdf.name}
                imageSrc={pdf.photo}
                updatedDate={updatedDate}
                id={pdf._id}
                status={pdf.status}
                category={pdf.category}
                userData={userData}
              />
            );
          })}
        </div>
        <div
          className={`z-1 flex-1 ${filter ? "block" : "hidden"} lg:flex sm:block`}
        >
          <Sidebar_pdf
            setSelectedCategory={handleCategoryChange}
            setSelectedStatus={setSelectedStatus}
            togglefilter={togglefilter}
          />
        </div>
      </div>
      <div className="flex justify-center my-4">
        <div className="flex items-center mr-4">
          <span className="mr-2">Show:</span>
          <select value={postsPerPage} onChange={handleLimitChange}>
            <option value={12}>12</option>
            <option value={24}>24</option>
            <option value={48}>48</option>
            <option value={60}>60</option>
          </select>
        </div>
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className={`
            px-4 py-2 mx-2 rounded-full
            ${currentPage === 1 ? 'bg-gray-300 cursor-not-allowed text-gray-500' : 'bg-indigo-500 hover:bg-indigo-600 text-white'}
          `}
        >
          <i className="fas fa-chevron-left mr-2"></i> Previous
        </button>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className={`
            px-4 py-2 mx-2 rounded-full
            ${currentPage === totalPages ? 'bg-gray-300 cursor-not-allowed text-gray-500' : 'bg-indigo-500 hover:bg-indigo-600 text-white'}
          `}
        >
          Next <i className="fas fa-chevron-right ml-2"></i>
        </button>
      </div>
      <div className="text-center text-gray-500">
        Page {currentPage} of {totalPages}
      </div>
      
    </div>
  );
}

export default Downloads;