/* eslint-disable react/prop-types */
import { FaFileAlt, FaSearch } from "react-icons/fa";
import axios from "axios";
import { useEffect, useState } from "react";

const Sidebar = ({ setSelectedCategory }) => {
  const [searchTerm, setSearchTerm] = useState(null);
  const handleSearch = () => {
    // Perform search action
    setSelectedCategory(searchTerm);
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };
  const [pdfs, setPdfs] = useState([]);
  useEffect(() => {
    axios
      .get("https://ucchi-urran-backend.vercel.app/api/pdfs/lastestPdfs")
      .then((response) => {
        setPdfs(response.data.data.pdf);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="p-4 space-y-10">
      <div className="flex items-center mx-4">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleKeyDown}
          className="px-4 py-2 w-full rounded-md border border-gray-500 focus:outline-none focus:border-indigo-500"
        />
        <button onClick={() => setSelectedCategory(handleSearch)} className="absolute right-10 bg-indigo-500 text-white p-3 rounded-md flex items-center md:right-4 hover:bg-indigo-600 focus:outline-none">
          <FaSearch className="mx-2" />
        </button>
      </div>
      <div className="my-10">
        <h1 className="text-center text-xl">Search By Category</h1>
        <ul className="flex flex-col space-y-2 m-4">
          <li className="flex space-x-2">
            <span className="h-2 w-2 bg-black rounded-md my-auto"></span>
            <button
              onClick={() => setSelectedCategory("UPSC")}
              className="text-purple-300 hover:text-purple-500"
            >
              UPSC
            </button>
          </li>

          <li className="flex space-x-2">
            <span className="h-2 w-2 bg-black rounded-md my-auto"></span>
            <button
              onClick={() => setSelectedCategory("BPSC")}
              className="text-purple-300 hover:text-purple-500"
            >
              BPSC
            </button>
          </li>

          <li className="flex space-x-2">
            <span className="h-2 w-2 bg-black rounded-md my-auto"></span>
            <button
              onClick={() => setSelectedCategory("SSC-Bass")}
              className="text-purple-300 hover:text-purple-500"
            >
              SSC-Bass
            </button>
          </li>

          <li className="flex space-x-2">
            <span className="h-2 w-2 bg-black rounded-md my-auto"></span>
            <button
              onClick={() => setSelectedCategory("BiharDaroga")}
              className="text-purple-300 hover:text-purple-500"
            >
              BiharDaroga
            </button>
          </li>

          <li className="flex space-x-2">
            <span className="h-2 w-2 bg-black rounded-md my-auto"></span>
            <button
              onClick={() => setSelectedCategory("Railway")}
              className="text-purple-300 hover:text-purple-500"
            >
              Railway
            </button>
          </li>
          <li className="flex space-x-2">
            <span className="h-2 w-2 bg-black rounded-md my-auto"></span>
            <button
              onClick={() => setSelectedCategory(null)}
              className="text-purple-300 hover:text-purple-500"
            >
              All Category
            </button>
          </li>
        </ul>
      </div>

      <div className="my-10">
        <h1 className="text-center text-xl">Latest Pdf</h1>
        <ul className="flex flex-col space-y-3 m-4">
          {pdfs.map((pdf) => {
            const createdAt = new Date(pdf.createdAt);
            const formattedDate = createdAt.toLocaleString("default", {
              day: "numeric",
              month: "long",
            });
            return (
              <a href={"#"} key={pdf.id}>
                
                <li className="flex flex-col space-y-2 rounded-lg border-2 px-3 py-1 ">
                <FaFileAlt className="w-12 h-12" />
                  <span className="text-lg">{pdf.name}</span>
                  <span className="justify-between flex">
                    <span>{formattedDate}</span>
                    
                  </span>
                </li>
              </a>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
