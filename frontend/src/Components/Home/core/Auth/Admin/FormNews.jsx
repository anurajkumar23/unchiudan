import axios from "axios";
import { useState, useRef } from "react";
import { Toaster, toast } from "react-hot-toast";
import JoditEditor from 'jodit-react';

const postnews = async (newsData) => {
  const token = localStorage.getItem("jwt_token");
  let loadingToast
  
  try {
    const loadingToast = toast.loading("Posting News...");
    await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/news`,
      newsData,
      {
        headers: {
          Authorization: token,
        },
      }
    );
    toast.dismiss(loadingToast);
    toast.success("News posted successfully!");
  } catch (error) {
    console.error(error);
    if (loadingToast) {
      toast.dismiss(loadingToast);
    }
    toast.error("Error posting news. Please try again.");
  }
};

const FormNews = () => {
  const editorHeading = useRef(null);
  const editorArticle = useRef(null);

  const [formData, setFormData] = useState({
    heading: "",
    article: "",
    highlight: false,
    photo: "uchiudan.png",
  });

  const handleEditorChange = (field, newContent) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: newContent,
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

    try {
      await postnews({
        heading: formData.heading,
        article: formData.article,
        highlight: formData.highlight,
        photo: formData.photo,
      });

      // Reset form fields to their initial values after submitting
      setFormData({
        heading: "",
        article: "",
        highlight: false,
        photo: "uchiudan.png",
      });

      // Optionally, you can clear the JoditEditor content
      if (editorHeading.current) {
        editorHeading.current.value = "";
      }
      if (editorArticle.current) {
        editorArticle.current.value = "";
      }

    } catch (error) {
      console.error(error);
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
          <JoditEditor
            ref={editorHeading}
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
            ref={editorArticle}
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
