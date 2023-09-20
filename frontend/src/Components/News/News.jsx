import NewsComp from "./NewsComp";
import { useEffect, useState } from "react";
import axios from "axios";

function News() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    axios
      .get("https://ucchi-urran-backend.vercel.app/api/news")
      .then((response) => {
        setNews(response.data.data.news);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="mx-[10%] pt-[8rem] ">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mx-[5%]">
        {/* <div className="mx-0 col-span-3 xl:mx-0 p-4 md:mx-0 overflow-y-auto hid lg:my-0 w-[100%]"> */}
          <NewsComp newsItems={news}/>
        {/* </div> */}
        {/* <Sidebar /> */}
      </div>
    </div>
  );
}

export default News;
