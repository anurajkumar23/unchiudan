/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Sidebar_pdf from "../Sidebar/Sidebar_pdf";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";

function BlogComps({
  date,
  title,
  imageSrc,
  updatedDate,
  id,
  status,
  category,
})
 {
  return (
    <Link to={`/pdfs/${id}`}>
      <div className="border border-2 bg-white p-4 rounded-xl shadow-lg transition duration-500 ">
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
        <button className="mt-4 text-md hover:bg-indigo-600 w-full text-white bg-indigo-400 py-1 px-3 rounded-xl hover:shadow-xl">
          Read More
        </button>
      </div>
    </Link>
  );
}

function Downloads() {
  const [pdfs, setPdfs] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState(null);
  const [filter, setFilter] = useState(false);
  const isSmallScreen = window.innerWidth <= 680; 
  const togglefilter = () => {
    setFilter(!filter);
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
              />
            );
          })}
        </div>
        <div
          className={`z-1 flex-1 ${
            filter ? "block" : "hidden"
          } lg:flex sm:block`}
        >
          <Sidebar_pdf
            setSelectedCategory={setSelectedCategory}
            setSelectedStatus={setSelectedStatus}
            togglefilter ={togglefilter}
          />
        </div>
      </div>
    </div>
  );
}

export default Downloads;
