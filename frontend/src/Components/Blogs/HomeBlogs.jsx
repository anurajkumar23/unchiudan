import { useEffect, useState } from "react";
import BlogComp from "./container";
import axios from "axios";
import { Link } from "react-router-dom";

export default function HomeBlogs() {
 
  const [affairs, setAffairs] = useState([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/currentaffairs/lastestAffairs`)
      .then((response) => {
        setAffairs(response.data.data.affairs);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="mx-10">
      <h1 className="text-center text-[1.5rem] md:text-[2rem] mb-4 font-semibold">
        Latest Current Affairs
      </h1>
      <p className="text-justify text-md mb-16 md:mx-[6rem]">
        Current Affairs for BPSC, UPPSC, MPPSC, JPSC, BSSC, RPSC, SSC, और अन्य
        Competitive और&nbsp;Government Job Examinations के लिए ऊँची उड़ान वेबसाइट
        और फेसबुक पेज को Follow करें।
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-6 mb-[58px]">
        {affairs.map((blog) => {
          const createdAt = new Date(blog.createdAt);
          const updatedAt = new Date(blog.updatedAt);
          const formattedDate = createdAt.toLocaleString("default", {
            day: "numeric",
            month: "long",
          });
          const updatedDate = updatedAt.toLocaleString("default", {
                day: "numeric",
                month: "long",
              });

          return (
            <BlogComp  
              key={blog._id}
              date={formattedDate}
              title={blog.topic}
              imageSrc={blog.photo}
              updatedDate={updatedDate}
              category={blog.category}
              id={blog._id}
            />
          );
        })}
      </div>
      <Link to="/Currentaffairs">
        <div className="text-center hover:bg-purple-500 mt-6 text-xl mx-auto  font-semibold w-fit  px-5 py-1 bg-purple-300 text-white rounded-xl hover:shadow-xl ">
          View More
        </div>
      </Link>
    </div>
  );
}
