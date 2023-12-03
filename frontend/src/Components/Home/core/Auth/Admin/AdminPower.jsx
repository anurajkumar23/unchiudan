/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import SidebarAdmin from "./SidebarAdmin";

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

        {
          headers: {
            Authorization: token,
          },
        }
      );
      const { results } = response.data;
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
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <div className="pt-[8rem]">
      <div className="flex flex-col md:flex-row items-center mb-20 md:w-1/3 md:mx-auto">
        <span className="text-center mb-8 md:mb-0 md:mr-4">
          ❗❗ Delete News that are older than 90 Days ❗❗
          <br />
          <button
            className="bg-[#e10707] text-white rounded p-2"
            onClick={handleDeleteClick}
          >
            Delete News
          </button>
        </span>
        <span className="text-center mb-8 md:mb-0 md:order-2 md:mr-8">
          <strong>Total Users 🧑</strong>
          <br />
          <p className="bg-[#06ca06] text-white rounded px-2 py-2 inline-block">
            {totalUsers}
          </p>
        </span>
      </div>

      <SidebarAdmin />
    </div>
  );
};

export default AdminPage;
