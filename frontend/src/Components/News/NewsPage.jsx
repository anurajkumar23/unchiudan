import { Link } from "react-router-dom";

import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { SocialMedia } from "../../consstant/socialmedia";

function NewsPage() {
  const { id } = useParams();
  const [news, setNews] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/news/${id}`
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
                src={`${import.meta.env.VITE_BACKEND_URL_IMAGE}/img/news/${news.photo}`}
                className="w-full mx-auto rounded-lg"
              />
            </div>
            <SocialMedia />

            <p className="mt-4 text-justify text-lg">{news.article}</p>
          </div>
        </div>
        <SocialMedia />
      </Link>
    </>
  );
}

export default NewsPage;
