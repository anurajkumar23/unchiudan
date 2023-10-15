import CurrentAffairsForm from "./FormCurrentAffairs";
import FormNews from "./FormNews";
import SidebarAdmin from "./SidebarAdmin";
import FormPdf from "./FormPDF";
import axios from "axios";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";

const AdminPage = ({ userData }) => {
  const [totalUsers, setTotalUsers] = useState(0);

  const fetchTotalUsers = async () => {
    try {
      const token = localStorage.getItem("jwt_token");
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/user`,
      // `http://localhost:3000/api/user`,
      {
        headers: {
          Authorization: token,
        },
      });
      const {results}  = response.data;
      setTotalUsers(results);
      
    } catch (error) {
      console.error("Error fetching total users:", error);
      toast.error("Error fetching total users");
    }
  };

  useEffect(() => {
    fetchTotalUsers();
  }, []);

  const handleDeleteClick = async (event, newsId) => {
    console.log(
      "🚀 ~ file: NewsComp.jsx:33 ~ handleDeleteClick ~ newsId:",
      newsId
    );
    event.preventDefault(); // Prevent default behavior (e.g., navigation)
    event.stopPropagation(); // Prevent the click event from propagating to the parent link element

    if (window.confirm("Are you sure you want to delete this item?")) {
      const token = localStorage.getItem("jwt_token");

      try {
        const response = await axios.delete(
          `${import.meta.env.VITE_BACKEND_URL}/news/autodelete`,
          // `http://localhost:3000/api/news/autodelete`,
          {
            headers: {
              Authorization: token,
            },
          }
        );
        if (response.status === 200) {
          // The news item was deleted successfully
          // Show a success toast
          toast.success("News item deleted successfully");

          // Perform any additional actions you need here
          console.log("News item deleted successfully");
        } else {
          console.error("Error deleting news item:", response);
          // Show an error toast if needed
          toast.error("Error deleting news item");
        }
      } catch (error) {
        console.error("Error deleting news item:", error);
        // Show an error toast if needed
        toast.error("Error deleting news item");
      }
    }
  };

  return (
    <div className="flex">
      <div className="mt-[7%] flex">
        <SidebarAdmin />
        <FormNews />
        <CurrentAffairsForm />
        <FormPdf />
        <div>
          ❗❗ Delete News that are older than 90 Days ❗❗
          <br />
          <button
            className="bg-[#e10707] text-white rounded p-2"
            onClick={handleDeleteClick}
          >
            Delete News
          </button>
        </div>
        <div>
          <strong>Total Users</strong>
          <br />
          <p className="bg-[#06ca06] text-white rounded p-2">{totalUsers}</p>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
