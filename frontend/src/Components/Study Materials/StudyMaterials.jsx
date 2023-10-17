/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { MdOutlineAccessTimeFilled } from "react-icons/md";

function StudyMaterial({
  date,
  title,
  imageSrc,
  updatedDate,
  id,
  status,
  category,
  price
}) {
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
        <h1 className="mt-4 text-gray-800 text-lg font-bold cursor-pointer">
            price: {`₹ ${price}`}
          </h1>
        <div className="card__data">
          <h1 className="text-gray-800 text-lg font-bold cursor-pointer overflow-hidden">
            <MdOutlineAccessTimeFilled className="card__icon" />
          </h1>
          <p className="text-lg ">updated at: {updatedDate}</p>
        </div>
        <div className="my-2 mx-6 flex justify-between"></div>
        <button className="mt-4 text-md hover-bg-indigo-600 w-full text-white bg-indigo-400 py-1 px-3 rounded-xl hover-shadow-xl">
          Read More
        </button>
      </div>
    </Link>
  );
}

function StudyMaterials({ userData }) {
  const [pdfs, setPdfs] = useState([]);

  const pdfid = userData.pdfs; // Assuming this is a valid array of IDs


  const apiUrl = `${import.meta.env.VITE_BACKEND_URL}/pdfs/`;

  useEffect(() => {
    // Define a function to fetch PDF data by ID
    const fetchPdfDataById = async (id) => {
      try {
        const response = await axios.get(apiUrl + id);

        console.log(
          "🚀 ~ file: StudyMaterials.jsx:75 ~ fetchPdfDataById ~ response.data.data.pdf:",
          response.data.data.pdf
        );
        return response.data.data.pdf;
      } catch (error) {
        console.error(`Error fetching data for ID ${id}:`, error);
        return null; // You might want to handle errors differently
      }
    };

    // Use Promise.all to fetch data for all IDs
    const fetchDataForAllIds = async () => {
      const promises = pdfid.map((id) => fetchPdfDataById(id));
      const pdfData = await Promise.all(promises);
      setPdfs(pdfData);
    };

    fetchDataForAllIds();
  }, [pdfid, apiUrl]);



  return (
    <div className="mx-auto py-[7rem]">
      {/* Add your text here */}
      <h1 className="text-2xl font-bold text-gray-800 mb-4 flex items-center justify-center text-center">
  <span className="mr-2">Your Purchased PDFs</span>
  <span className="text-xl">/आपके खरीदे गए PDF🎉</span>
</h1>


      <div className="flex">
        <div
          className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 w-full mx-10 md:mx-0  `}
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
              <StudyMaterial
                key={pdf._id}
                date={formattedDate}
                title={pdf.name}
                imageSrc={pdf.photo}
                updatedDate={updatedDate}
                id={pdf._id}
                status={pdf.status}
                category={pdf.category}
                price={pdf.price}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default StudyMaterials;
