/* eslint-disable react/prop-types */
import axios from "axios";
import { useState, useRef } from "react";
import { Toaster, toast } from "react-hot-toast";
import JoditEditor from 'jodit-react';
import he from 'he';

const postnews = async (newsData, id) => {
  const token = localStorage.getItem("jwt_token");

  let loadingToast;
  try {
    loadingToast = toast.loading(id ? "Updating News..." : "Posting News...");
    
    const formData = new FormData();
    formData.append("heading", he.encode(newsData.heading));
    formData.append("article", he.encode(newsData.article));
    formData.append("highlight", newsData.highlight);
    formData.append("photo", newsData.photo);

    const config = {
      headers: {
        Authorization: token,
        "Content-Type": "multipart/form-data",
      },
    };

    if (id) {
      await axios.patch(
        `${import.meta.env.VITE_BACKEND_URL}/news/${id}`,
        formData,
        config
      );
    } else {
      await axios.post(`${import.meta.env.VITE_BACKEND_URL}/news`, formData, config);
    }

    toast.dismiss(loadingToast);
    if (id) {
      toast.success("News updated successfully!");
    } else {
      toast.success("News posted successfully!");
    }
  } catch (error) {
    console.log(error);
    toast.dismiss(loadingToast);
    toast.error("Error posting/updating news. Please try again.");
  }
};

const FormNews = ({ details, }) => {
  const editor = useRef(null);
  const [formData, setFormData] = useState({
    heading: details.heading ? he.decode(details.heading) : "",
    article: details.article ? he.decode(details.article) : "",
    highlight: details.highlight || false,
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

  const handleEditorChange = (field, newContent) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: newContent,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await postnews(
        {
          heading: formData.heading,
          article: formData.article,
          highlight: formData.highlight,
          photo: formData.photo,
        },
        details._id
      );
    } catch (error) {
      console.error(error);
      toast.error("Error posting/updating news. Please try again.");
    }
  };

  return (
    <div className="p-4  ">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="heading"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Heading:
          </label>
          <JoditEditor
            ref={editor}
            id="heading"
            name="heading"
            value={formData.heading}
            onChange={(newContent) => handleEditorChange("heading", newContent)}
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
          <JoditEditor
            ref={editor}
            id="article"
            name="article"
            value={formData.article}
            onChange={(newContent) => handleEditorChange("article", newContent)}
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
        <div className="mb-4">
          <label
            htmlFor="highlight"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Highlight:
            <input
              type="checkbox"
              id="highlight"
              name="highlight"
              checked={formData.highlight}
              onChange={handleChange}
              className="ml-2"
            />
          </label>
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
