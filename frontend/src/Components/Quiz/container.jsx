/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export function BlogComps(props) {
  console.log(props);
  return (
    <Link to="/currentaffairs/id">
      <div className="bg-white p-6 w-[18rem] md:w-[14rem] rounded-xl shadow-lg transition duration-500">
        <div className="relative">
          <img
            className="w-full rounded-xl"
            
            src={props.imageSrc}
            alt="Blog Cover"
          />
          <p className="absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">
            {props.date}
          </p>
        </div>
        <h1 className="mt-4 text-gray-800 text-lg font-bold cursor-pointer overflow-hidden">
          {props.title}
        </h1>
        <button className="mt-4 text-md hover:bg-indigo-600 w-full text-white bg-indigo-400 py-1 px-3 rounded-xl hover:shadow-xl">
          Read More
        </button>
      </div>
    </Link>
  );
}
