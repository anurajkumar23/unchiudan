import React, { useState } from "react";
import { FaImage } from "react-icons/fa";

const NewsPostComp = ({ onPostSubmit }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [image, setImage] = useState("");
  const [imagePreview, setImagePreview] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleAuthorChange = (event) => {
    setAuthor(event.target.value);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setImage(file);
        setImagePreview(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    const newPost = {
      title,
      content,
      author,
      image,
      date: new Date().toLocaleDateString(),
    };

    onPostSubmit(newPost);

    setTitle("");
    setContent("");
    setAuthor("");
    setImage("");
    setImagePreview("");
  };

  return (
    <div className="border p-4 mb-4 mx-auto w-4/5 rounded-lg bg-richblack-5">
      <h2 className="text-xl font-bold mb-2 text-center">Create a New Post</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={handleTitleChange}
        className="w-full mb-2 p-2 border rounded-lg"
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={handleContentChange}
        className="w-full mb-2 p-2 border rounded-lg"
        rows="4"
      />
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={handleAuthorChange}
        className="w-full mb-2 p-2 border rounded-lg"
      />
      <div className="flex items-center mb-4">
        <label htmlFor="imageUpload" className="cursor-pointer">
          <FaImage className="w-8 h-8 text-blue-500" />
        </label>
        <input
          type="file"
          id="imageUpload"
          accept="image/*"
          onChange={handleImageChange}
          className="hidden"
        />
      </div>
      {imagePreview && (
        <div className="mb-4">
          <img src={imagePreview} alt="Preview" className="max-w-full" />
        </div>
      )}
      <div className="flex justify-center">
        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default NewsPostComp;
