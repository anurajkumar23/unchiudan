import axios from "axios";
import { useState, useRef } from "react";
import { Toaster, toast } from "react-hot-toast";
import JoditEditor from 'jodit-react';

const postnews = async (newsData) => {
  const token = localStorage.getItem("jwt_token");
  let loadingToast;

  try {
    loadingToast = toast.loading("Posting News...");

    const formData = new FormData();
    formData.append("heading", newsData.heading);
    formData.append("article", newsData.article);
    formData.append("highlight", newsData.highlight);
    formData.append("photo", newsData.photo);

    await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/news`,
      formData,
      {
        headers: {
          Authorization: token,
          "Content-Type": "multipart/form-data", // Important for file uploads
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
    photo: null, // Initialize as null
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
        photo: null,
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
