import NewsComp from "./NewsComp";
import Sidebar from "../Sidebar/Sidebar";
import { useEffect, useState } from "react";
import axios from "axios";


function News() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    axios
      .get("/api/news")
      .then((response) => {
        setNews(response.data.data.news);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);


  return (
    <div className="mx-auto pt-[8rem]">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
      <div className="mx-0 col-span-2 xl:mx-0 p-4 md:mx-0 overflow-y-auto hid lg:my-0">
        <NewsComp newsItems={news} />
      </div>
      <Sidebar/>
    </div>
    </div>
  );
}

export default News;
