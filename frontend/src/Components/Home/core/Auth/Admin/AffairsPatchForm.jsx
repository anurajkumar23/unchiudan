/* eslint-disable react/prop-types */
import { useState, useRef } from "react";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";
import he from "he";
import JoditEditor from "jodit-react";

const patchAffairs = async (affairsData, id) => {
  const token = localStorage.getItem("jwt_token");
  const formData = new FormData();

  formData.append("topic", affairsData.topic);
  formData.append("category", affairsData.category);
  formData.append("description", affairsData.description);
  formData.append("data", JSON.stringify(affairsData.data));
  formData.append("photo", affairsData.photo);

  try {
    const loadingToast = toast.loading("Updating CurrentAffairs...");

    await axios.patch(
      `${import.meta.env.VITE_BACKEND_URL}/currentaffairs/${id}`,
      formData,
      {
        headers: {
          Authorization: token,
        },
      }
    );

    toast.dismiss(loadingToast);

    if (!id) {
      toast.success("CurrentAffairs posted successfully!");
    } else {
      toast.success("CurrentAffairs updated successfully!");
    }
  } catch (error) {
    console.error(error);
    toast.error("Error updating CurrentAffairs. Please try again.");
  }
};

const CurrentAffairsForm = ({ details }) => {
  const editor = useRef(null);
  const [formData, setFormData] = useState({
    topic: details.topic ? he.decode(details.topic) : "",
    category: details.category || "",
    description: details.description ? he.decode(details.description) : "",
    photo: null,
    data: details.data || [{ ques: "", options: ["", "", "", ""], ans: "" }],
  });

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const newFormData = [...formData.data];
    newFormData[index][name] = value;

    setFormData({
      ...formData,
      data: newFormData,
    });
  };

  const handleOptionChange = (e, questionIndex, optionIndex) => {
    const { value } = e.target;
    const newFormData = [...formData.data];
    newFormData[questionIndex].options[optionIndex] = value;

    setFormData({
      ...formData,
      data: newFormData,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await patchAffairs(
        {
          topic: formData.topic,
          category: formData.category,
          data: formData.data,
          photo: formData.photo,
          description: formData.description,
        },
        details._id
      );
    } catch (error) {
      console.error(error);
      toast.error("Error updating CurrentAffairs. Please try again.");
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      photo: file,
    });
  };
  const handleEditorChange = (field, newContent) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: newContent,
    }));
  };

  return (
    <div className="p-4  ">
      <form className="max-w-2xl mx-auto mt-8" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="topic"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Topic
          </label>
          <JoditEditor
            ref={editor}
            type="text"
            id="topic"
            name="topic"
            value={formData.topic}
            onChange={(newContent) => handleEditorChange("topic", newContent)}
            // onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="category"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Category
          </label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          >
            <option value="">Select a category</option>
            <option value="BiharDaroga">Bihar Daroga</option>
            <option value="BPSC">BPSC</option>
            <option value="Railway">Railway</option>
            <option value="UPSC">UPSC</option>
            <option value="SSC">SSC</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-gray-800">Description</label>
          <JoditEditor
            ref={editor}
            name="description"
            value={formData.description}
            // onChange={(e) =>
            //   setFormData({ ...formData, description: e.target.value })
            // }
            onChange={(newContent) =>
              handleEditorChange("description", newContent)
            }
            className="border p-2 w-full h-32"
          ></JoditEditor>
        </div>
        <div className="mb-4">
          <label
            htmlFor="photo"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Photo
          </label>
          <input
            type="file"
            id="photo"
            name="photo"
            accept="image/*"
            onChange={handleFileChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        {formData.data.map((question, index) => (
          <div key={index} className="mb-4">
            <label
              htmlFor={`ques${index}`}
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Question {index + 1}
            </label>
            <input
              type="text"
              id={`ques${index}`}
              name="ques"
              value={question.ques}
              onChange={(e) => handleChange(e, index)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {question.options.map((option, optionIndex) => (
              <div key={optionIndex} className="mb-2">
                <label>Option: {optionIndex}</label>
                <input
                  type="text"
                  id={`option${index}-${optionIndex}`}
                  name="option"
                  value={option}
                  onChange={(e) => handleOptionChange(e, index, optionIndex)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
            ))}
            <label
              htmlFor={`ans${index}`}
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Answer {index + 1} <br />
              *please put option Number only
            </label>
            <input
              type="text"
              id={`ans${index}`}
              name="ans"
              value={question.ans}
              onChange={(e) => handleChange(e, index)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
        ))}
        <button
          type="button"
          onClick={() =>
            setFormData({
              ...formData,
              data: [
                ...formData.data,
                { ques: "", options: ["", "", "", ""], ans: "" },
              ],
            })
          }
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add Question
        </button>
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4"
        >
          Submit
        </button>
      </form>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default CurrentAffairsForm;
