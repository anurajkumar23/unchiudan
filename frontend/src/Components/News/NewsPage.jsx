/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { SocialMedia } from "../../consstant/socialmedia";
import PatchNewsForm from "../Home/core/Auth/Admin/PatchNewsForm";

// Function to decode HTML entities
function decodeHtml(html) {
  var txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
}

// Component for rendering news content
function NewsContent({ heading, article, photo }) {
  return (
    <div className="py-[8rem]">
      <div className="mx-6">
        <h1 className="text-center font-bold text-[2rem] md:text-[2.5rem] mb-6" dangerouslySetInnerHTML={{__html:heading}}>
        
        </h1>
        <div className="md:mx-12 my-12">
          <img
            alt="meow"
            src={`${import.meta.env.VITE_BACKEND_URL_IMAGE}/img/news/${photo}`}
            className="w-full mx-auto rounded-lg"
          />
        </div>
        <SocialMedia />
        <p className="mt-4 text-justify text-lg " dangerouslySetInnerHTML={{ __html: article }} />
      </div>
    </div>
  );
}

function NewsPage({ userData }) {
  const { id } = useParams();
  const [news, setNews] = useState(null);

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/news/${id}`
        );
        setNews(response.data.data.news);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  if (!news) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div
          className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-info motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status"
        >
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
      </div>
    );
  }

  return (
    <>
      <Link to="">
      
        <NewsContent
          heading={decodeHtml(news.heading)}
          article={decodeHtml(news.article)}
          photo={news.photo}
        />
      </Link>
      {role && <PatchNewsForm details={news} />}
    </>
  );
}

export default NewsPage;
