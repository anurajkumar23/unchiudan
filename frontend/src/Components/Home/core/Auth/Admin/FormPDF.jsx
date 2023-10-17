import axios from "axios";
import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";

const postpdf = async (pdfData) => {

  const token = localStorage.getItem("jwt_token");


  const formData = new FormData();
  formData.append("name", pdfData.name);
  formData.append("category", pdfData.category);
  formData.append("description", pdfData.description);
  formData.append("photo", pdfData.photo);
  formData.append("pdf", pdfData.pdf);
  formData.append("status", pdfData.status);
  formData.append("price", pdfData.price);

  try {
 await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/pdfs`,

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

const FormPDF = () => {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    photo: null,
    price: "",
    description: "",
    pdf: null,
    comments: [],
    status: "free",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      [e.target.name]: file,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();


    try {
      await postpdf({
        name: formData.name,
        category: formData.category,
        description: formData.description,
        photo: formData.photo,
        pdf: formData.pdf,
        status: formData.status,
        price: formData.price,
      });
      toast.success("PDF posted successfully!");
    } catch (error) {
      console.error(error);

      // Show an error toast when an error occurs
      toast.error("Error posting PDF. Please try again.");
    }
  };

  return (
    <div className=" mx-auto mt-8">
      <form onSubmit={handleSubmit} className=" mx-auto">
        <div className="mb-4">
          <label className="block mb-2 text-gray-800">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="border p-2 w-full text-black"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-gray-800">Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="border p-2 w-full text-black"
            required
          >
            <option value="" disabled>
              Select Category
            </option>
            <option value="BiharDaroga">Bihar Daroga</option>
            <option value="BPSC">BPSC</option>
            <option value="Railway">Railway</option>
            <option value="UPSC">UPSC</option>
            <option value="SSC">SSC</option>
          </select>
        </div>
        <div className="mb-4 text-black">
          <label className="block mb-2 text-gray-800">Status</label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="border p-2 w-full"
            required
          >
            <option value="free">Free</option>
            <option value="paid">Paid</option>
          </select>
        </div>
        {formData.status === "paid" && (
          <div className="mb-4 text-black">
            <label className="block mb-2 text-gray-800">Price</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="border p-2 w-full"
              required={formData.status === "paid"}
            />
          </div>
        )}
        <div className="mb-4 text-black">
          <label className="block mb-2 text-gray-800">Photo</label>
          <input
            type="file"
            accept="image/*"
            name="photo"
            onChange={handleFileChange}
            className="border p-2 w-full"
          />
        </div>
        <div className="mb-4 text-black">
          <label className="block mb-2 text-gray-800">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="border p-2 w-full h-32"
          ></textarea>
        </div>
        <div className="mb-4 text-black">
          <label className="block mb-2 text-gray-800">PDF</label>
          <input
            type="file"
            accept=".pdf"
            name="pdf"
            onChange={handleFileChange}
            className="border p-2 w-full"
          />
        </div>
        <div className="mt-6 text-black">
          <button type="submit" className="bg-blue-500 text-white p-2">
            Submit
          </button>
        </div>
      </form>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default FormPDF;
