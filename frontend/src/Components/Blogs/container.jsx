/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import { MdOutlineAccessTimeFilled } from 'react-icons/md';

function BlogComp({ date, title, imageSrc ,id ,category, updatedDate}) {
  return (
   <Link to={`/currentaffairs/${id}`}>
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
          <h3 className="heading-tertirary ">
          <span>{category}</span>
        </h3>
       
        </div>
        
        <h1 className="mt-4 text-gray-800 text-lg font-bold cursor-pointer overflow-hidden mb-[1rem]">
          {title}
        </h1>

        <div className="card__data flex mb-[1rem]">
        <h1 className=" text-gray-800 text-lg font-bold cursor-pointer overflow-hidden">
        <p><MdOutlineAccessTimeFilled className="card__icon" /></p>
        </h1>
        <p className="text-xl">updated at: {updatedDate}</p>
        </div>
        
        <Link to={`/currentaffairs/${id}`} className="mt-4 text-md hover:bg-indigo-600 w-full text-white bg-indigo-400 py-1 px-3 rounded-xl hover:shadow-xl">
          Read More
        </Link>
      </div>
    </Link>
  );
}

export default BlogComp;
