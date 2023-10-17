import axios from "axios";
import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";

const postnews = async (newsData) => {

  const token = localStorage.getItem("jwt_token");


  const formData = new FormData();
  formData.append("heading", newsData.heading);
  formData.append("article", newsData.article);
  formData.append("highlight", newsData.highlight);
  formData.append("photo", newsData.photo);
  

  try {
 await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/news`,

        formData,
      {
        headers: {

          Authorization: token, // Replace YOUR_AUTH_TOKEN_HERE with the actual token
        },
      }
    );


  } catch (error) {
    console.log(error);
  }
};

const FormNews = () => {
  const [formData, setFormData] = useState({
    heading: "",
    article: "",
    highlight: false,
    photo: "uchiudan.png",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      photo: file,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

try{
    await postnews({
      heading: formData.heading,
      article: formData.article,
      highlight: formData.highlight,
      photo: formData.photo,
    });
    toast.success("News posted successfully!");
  } catch (error) {
    console.error(error);

    // Show an error toast when an error occurs
    toast.error("Error posting news. Please try again.");
  }
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="heading"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Heading:
          </label>
          <input
            type="text"
            id="heading"
            name="heading"
            value={formData.heading}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="article"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Article:
          </label>
          <textarea
            id="article"
            name="article"
            value={formData.article}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="photo"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Photo:
          </label>
          <input
            type="file"
            id="photo"
            name="photo"
            accept="image/*"
            onChange={handleFileChange}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
       
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default FormNews;
