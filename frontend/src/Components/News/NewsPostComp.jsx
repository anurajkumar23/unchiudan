import React, { useState } from "react";

const NewsPostComp = ({ onPostSubmit }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [image, setImage] = useState("");

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
    setImage(event.target.value);
  };

  const handleSubmit = () => {
    // Create a new post object
    const newPost = {
      title,
      content,
      author,
      image,
      date: new Date().toLocaleDateString(),
    };

    // Pass the new post to the parent component
    onPostSubmit(newPost);

    // Clear the form fields
    setTitle("");
    setContent("");
    setAuthor("");
    setImage("");
  };

  return (
    <div className="border p-4 mb-4 mx-auto w-4/5 rounded-lg  bg-richblack-5">
      <h2 className="text-xl font-bold mb-2">Create a New Post</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={handleTitleChange}
        className="w-full mb-2 p-2 border rounded"
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={handleContentChange}
        className="w-full mb-2 p-2 border rounded"
        rows="4"
      />
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={handleAuthorChange}
        className="w-full mb-2 p-2 border rounded"
      />
      <input
        type="text"
        placeholder="Image URL"
        value={image}
        onChange={handleImageChange}
        className="w-full mb-4 p-2 border rounded"
      />
      <div className="flex justify-center">
        <button
          onClick={handleSubmit}
          className="bg-blue-500  text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default NewsPostComp;
