import { useState } from "react";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";

const postaffairs = async (affairsData) => {

  const token = localStorage.getItem("jwt_token");

  const formData = new FormData();

  formData.append("topic", affairsData.topic);
  formData.append("category", affairsData.category);
  formData.append("description", affairsData.description);
  formData.append("data", JSON.stringify(affairsData.data));
  formData.append("photo", affairsData.photo);

  try {
     await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/currentaffairs`,
      formData,
      {
        headers: {
          Authorization: token,
        },
      }
    );


  } catch (error) {
    console.log(error);
  }
};

const FormCurrentAffairs = () => {
  const [formData, setFormData] = useState({
    topic: "",
    category: "",
    description: "",
    photo: null,
    data: [{ ques: "", options: ["", "", "", ""], ans: "" }],
  });

  const handleChange = (e, index) => {
    const { name, value } = e.target;

    if (name === "description") {
      // Handle the description field separately
      setFormData({
        ...formData,
        description: value,
      });
    } else {
      // Handle other text input changes
      const newFormData = [...formData.data];
      newFormData[index][name] = value;

      setFormData({
        ...formData,
        data: newFormData,
      });
    }
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
      await postaffairs({
        topic: formData.topic,
        category: formData.category,
        data: formData.data,
        photo: formData.photo,
        description: formData.description,
      });
      toast.success("CurrentAffairs posted successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Error posting CurrentAffairs. Please try again.");
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      photo: file,
    });
  };

  return (
    <div>
      <form className="mx-auto mt-8" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="topic"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Topic
          </label>
          <input
            type="text"
            id="topic"
            name="topic"
            value={formData.topic}
            onChange={(e) =>
              setFormData({ ...formData, topic: e.target.value })
            }
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
        <div className="mb-4 text-black">
          <label className="block mb-2 text-gray-700">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={(e) => handleChange(e, 0)} 
            className="border p-2 w-full h-32"
          ></textarea>
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

        {/* Questions Section */}
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
                <label>Option: {optionIndex + 1}</label>
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
        <span className="flex space-x-6">
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
            className="bg-blue-500 hover-bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
          >
            Add Question
          </button>
          <button
            type="submit"
            className="bg-green-500 hover-bg-green-700 text-white font-bold py-2 px-4 rounded-lg"
          >
            Submit
          </button>
        </span>
      </form>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default FormCurrentAffairs;
