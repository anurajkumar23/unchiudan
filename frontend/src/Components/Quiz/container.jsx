/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./container.css"
import { FaCalendarAlt } from 'react-icons/fa';
export function BlogComps(props) {
  
  return (
    <Link to={`/currentaffairs/${props.id}`}>
      <div className="bg-white p-6 w-[18rem] md:w-[20rem] rounded-xl shadow-lg transition duration-500 h-[30rem]" >
      <div className="card__header">
        <div className="card__picture">
          <div className="card__picture-overlay">&nbsp;</div>
        <div className="relative">
          <img
            className="w-full rounded-xl"
            
            src={props.imageSrc}
            alt="Blog Cover"
          />
          <p className="absolute top-0 bg-[#ffef39] text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">
            {props.date}
          </p>
          </div>
          </div>
          <h3 className="heading-tertirary">
          <span>{props.category}</span>
        </h3>
       
        </div>
        
        <h1 className="mt-4 text-gray-800 text-lg font-bold cursor-pointer overflow-hidden mb-[1rem]">
          {props.title}
        </h1>
       
        <div className="card__data flex mb-[1rem]">
        <h1 className=" text-gray-800 text-lg font-bold cursor-pointer overflow-hidden">
        <p><FaCalendarAlt className="card__icon" /></p>
        </h1>
        <p>{props.updatedDate}</p>
        </div>
        
        <Link to={`/currentaffairs/${props.id}`} className="mt-4 text-md hover:bg-indigo-600 w-full text-white bg-indigo-400 py-1 px-3 rounded-xl hover:shadow-xl">
          Read More
        </Link>
      </div>
    </Link>
  );
}
