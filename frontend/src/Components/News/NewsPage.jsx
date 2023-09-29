import { Link } from "react-router-dom";

import {
  FaArrowAltCircleLeft,
  FaArrowAltCircleRight,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";

function NewsPage() {
  const { id } = useParams();
  const [news, setNews] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://ucchi-urran-backend.vercel.app/api/news/${id}`
        );
        setNews(response.data.data.news);
        // console.log("🚀 ~ file: BlogsPage.jsx:29 ~ fetchData ~ response.data.affairs:", response.data.data.affairs)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);
  if (!news) {
    return <div>Loading...</div>;
  }
  return (
    <>
    <Link to="">
      <div className=" py-[8rem] ">
        <div className=" mx-6 ">
          <h1 className="text-center font-bold text-[2rem] md:text-[2.5rem] mb-6 ">
            {news.heading}
          </h1>
          <div className="md:mx-12 my-12">
            <img
              alt="meow"
              src={`https://ucchi-urran-backend.vercel.app/img/news/${news.photo}`}
              className="w-full mx-auto rounded-lg"
            />
          </div>
          <div className="flex justify-between mt-6 ">
            <span className="text-center text-md  ">Share with Friends :</span>
            <span className="flex text-gray-400 justify-center space-x-4">
              <a className=" " href="" target="_blank" rel="noreferrer">
                <FaFacebook className="text-blue-500 w-7 h-7" />
              </a>

              <a className=" " href="" target="_blank" rel="noreferrer">
                <FaTwitter className="text-blue-400 w-7 h-7" />
              </a>

              <a className=" " href="" target="_blank" rel="noreferrer">
                <FaInstagram className="text-pink-500 w-7 h-7" />
              </a>

              <a className=" " href="" target="_blank" rel="noreferrer">
                <FaLinkedin className="text-blue-600 w-7 h-7" />
              </a>
              <a className=" " href="" target="_blank" rel="noreferrer">
                <FaWhatsapp className="text-green-500 w-7 h-7" />
              </a>
            </span>
          </div>

          <p className="mt-4 text-justify text-lg">
           {news.article}
          </p>
        </div>
      </div>
      <div className="flex justify-between mt-10 ">
        <span className="text-center text-md ">Share with Friends :</span>
        <span className="flex text-gray-400 justify-center space-x-4">
          <a className=" " href="" target="_blank" rel="noreferrer">
            <FaFacebook className="text-blue-500 w-7 h-7" />
          </a>

          <a className=" " href="" target="_blank" rel="noreferrer">
            <FaTwitter className="text-blue-400 w-7 h-7" />
          </a>

          <a className=" " href="" target="_blank" rel="noreferrer">
            <FaInstagram className="text-pink-500 w-7 h-7" />
          </a>

          <a className=" " href="" target="_blank" rel="noreferrer">
            <FaLinkedin className="text-blue-600 w-7 h-7" />
          </a>
          <a className=" " href="" target="_blank" rel="noreferrer">
            <FaWhatsapp className="text-green-500 w-7 h-7" />
          </a>
        </span>
      </div>

     
    </Link>

    </>
  );
}

export default NewsPage;
