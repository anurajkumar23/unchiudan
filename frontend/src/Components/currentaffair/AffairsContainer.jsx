/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineAccessTimeFilled, MdOutlineDelete } from "react-icons/md";
import "./AffairsContainer.css";
import axios from "axios";

export function BlogComps({
  date,
  id,
  imageSrc,
  updatedDate,
  category,
  title,
}) {
  const handleDeleteClick = async (event) => {
    event.stopPropagation(); // Prevent the click event from propagating to the parent link element
    if (window.confirm("Are you sure you want to delete this item?")) {
      const token = localStorage.getItem("jwt_token");
      console.log("🚀 ~ file: FormPDF.jsx:9 ~ postpdf ~ token:", token);
      try {
        const response = await axios.delete(
          // `${import.meta.env.VITE_BACKEND_URL}/currentaffairs/${id}`,
          `http://localhost:3000/api/currentaffairs/${id}`,
          {
            headers: {
              //   "Content-Type": "application/json",
              Authorization: token, // Replace YOUR_AUTH_TOKEN_HERE with the actual token
            },
          }
        );

        if (response.status === 200) {
          // The item was deleted successfully
          // Perform any additional actions you need here
          console.log("Item deleted successfully");
        } else {
          console.error("Error deleting item:", response);
        }
      } catch (error) {
        console.error("Error deleting item:", error);
      }
    }
  };
  return (
    <div className="border border-2 bg-white p-4 rounded-xl shadow-lg transition duration-500 relative">
      <button
        className="absolute top-0 right-0 text-red-600 cursor-pointer bg-red-500 rounded-full p-2"
        style={{ zIndex: 1 }}
        onClick={handleDeleteClick}
      >
        <MdOutlineDelete size={32} color="#fff" />
      </button>

      <Link to={`/currentaffairs/${id}`} className="w-full h-full">
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
        <div className="card__data">
          <h1 className="text-gray-800 text-lg font-bold cursor-pointer overflow-hidden">
            <MdOutlineAccessTimeFilled className="card__icon" />
          </h1>
          <p className="text-lg">updated at: {updatedDate}</p>
        </div>
        <div className="my-2 mx-6 flex justify-between"></div>
        <button className="mt-4 text-md hover-bg-indigo-600 w-full text-white bg-indigo-400 py-1 px-3 rounded-xl hover:shadow-xl">
          Read More
        </button>
      </Link>
    </div>
  );
}
