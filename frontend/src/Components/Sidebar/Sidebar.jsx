/* eslint-disable react/prop-types */
import { FaSearch } from "react-icons/fa";


const Sidebar = ({setSelectedCategory}) => {

  // const [affairs, setAffairs] = useState([]);
  // const [selectedCategory, setSelectedCategory] = useState(null);
  // useEffect(() => {
  //   axios
  //     .get(`/api/currentaffairs/?${selectedCategory}`)
  //     .then((response) => {
  //       setAffairs(response.data.data.affairs);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching data:", error);
  //     });
  // }, [selectedCategory]);
  


  return (
    <div className="p-4 space-y-10">
    <div className="flex items-center mx-4">
      <input
        type="text"
        placeholder="Search..."
        className="px-4 py-2 w-full rounded-md border border-gray-500 focus:outline-none focus:border-indigo-500"
      />
      <button className="absolute right-10 bg-indigo-500 text-white p-3 rounded-md flex items-center md:right-4 hover:bg-indigo-600 focus:outline-none">
        <FaSearch className="mx-2" />
      </button>
    </div>
    <div className="my-10">
      <h1 className="text-center text-xl">Download By Category</h1>
      <ul className="flex flex-col space-y-2 m-4">
        <li className="flex space-x-2">
          <span className="h-2 w-2 bg-black rounded-md my-auto"></span>
          <button onClick={()=>setSelectedCategory("UPSC")} className="text-purple-300 hover:text-purple-500">
              UPSC
            </button>
        </li>
        <a href="">
          <li className="flex space-x-2">
            <span className="h-2 w-2 bg-black rounded-md my-auto"></span>
            <span className="text-purple-300 hover:text-purple-500">
              BPSC
            </span>
          </li>
        </a>
        <a href="">
          <li className="flex space-x-2">
            <span className="h-2 w-2 bg-black rounded-md my-auto"></span>
            <span className="text-purple-300 hover:text-purple-500">
              SSC
            </span>
          </li>
        </a>
        <a href="">
          <li className="flex space-x-2">
            <span className="h-2 w-2 bg-black rounded-md my-auto"></span>
            <span className="text-purple-300 hover:text-purple-500">
              meow
            </span>
          </li>
        </a>
        <a href="">
          <li className="flex space-x-2">
            <span className="h-2 w-2 bg-black rounded-md my-auto"></span>
            <span className="text-purple-300 hover:text-purple-500">
              UPSC
            </span>
          </li>
        </a>
      </ul>
    </div>

    <div className="my-10">
      <h1 className="text-center text-xl">Latest Posts</h1>
      <ul className="flex flex-col space-y-3 m-4">
        <a href="">
          <li className="flex flex-col space-y-2 rounded-lg border-2 px-3 py-1 ">
            <span className="text-lg">UPSC Notes Pdfs 2</span>
            <span className="justify-between flex">
              <span>31 August</span>
              <span>125 Views</span>
            </span>
          </li>
        </a>
        <a href="">
          <li className="flex flex-col space-y-2 rounded-lg border-2 px-3 py-1 ">
            <span className="text-lg">UPSC Notes Pdfs 3</span>
            <span className="justify-between flex">
              <span>31 August</span>
              <span>125 Views</span>
            </span>
          </li>
        </a>
        <a href="">
          <li className="flex flex-col space-y-2 rounded-lg border-2 px-3 py-1 ">
            <span className="text-lg">BPSC Notes Pdfs 2</span>
            <span className="justify-between flex">
              <span>31 August</span>
              <span>125 Views</span>
            </span>
          </li>
        </a>
        <a href="">
          <li className="flex flex-col space-y-2 rounded-lg border-2 px-3 py-1 ">
            <span className="text-lg">SSC Notes Pdfs 2</span>
            <span className="justify-between flex">
              <span>31 August</span>
              <span>125 Views</span>
            </span>
          </li>
        </a>
      </ul>
    </div>
  </div>
  )
}

export default Sidebar
