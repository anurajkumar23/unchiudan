/* eslint-disable react/prop-types */
import axios from "axios";
import { useState ,useRef } from "react";
import { Toaster, toast } from "react-hot-toast";
import he from 'he';
import JoditEditor from "jodit-react";

const patchpdf = async (pdfData, id) => {
  

  const token = localStorage.getItem("jwt_token");


  const formData = new FormData();
  formData.append("name", pdfData.name);
  formData.append("category", pdfData.category);
  formData.append("description", pdfData.description);
  formData.append("photo", pdfData.photo);
  formData.append("pdf", pdfData.pdf);
  formData.append("status", pdfData.status);
  formData.append("price", pdfData.price);
  let loadingToast
  try {
    loadingToast = toast.loading("Updating PDF...");
 await axios.patch(
        `${import.meta.env.VITE_BACKEND_URL}/pdfs/${id}`,

      formData,
      {
        headers: {
          
          Authorization: token, // Replace YOUR_AUTH_TOKEN_HERE with the actual token
        },
      }
    );
    toast.dismiss(loadingToast);

  } catch (error) {
    console.log(error);
    // Dismiss the loading toast if an error occurs
    toast.dismiss(loadingToast);
  }
};

const PdfForm = ({ details }) => {
  const editor = useRef(null);
  const [formData, setFormData] = useState({
    name: details.name ? he.decode(details.name) : "",
    category: details.category || "",
    photo: null,
    price: details.price || "",
    description: details.description ? he.decode(details.description)  : "",
    pdf: null,
    comments: [],
    status: details.status || "free",
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

  try{
    await patchpdf(
      {
        name: formData.name,
        category: formData.category,
        description: formData.description,
        photo: formData.photo,
        pdf: formData.pdf,
        status: formData.status,
        price: formData.price,
      },
      details._id);
      if (!details._id) {
        toast.success("PDF posted successfully!");
      } else {
        // It's a re-edit
        toast.success("PDF updated successfully!");
      }
    } catch (error) {
      console.error(error);
  
      // Show an error toast when an error occurs
      toast.error("Error posting PDF. Please try again.");
    }
    
  };
  const handleEditorChange = (field, newContent) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: newContent,
    }));
  };

  return (
    <div className="p-4  ">
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <div className="mb-4">
          <label className="block mb-2 text-gray-800">Name</label>
          <JoditEditor
          ref={editor}
            type="text"
            name="name"
            value={formData.name}
            onChange={(newContent) => handleEditorChange("name", newContent)}
            // onChange={handleChange}
            className="border p-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-gray-800">Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="border p-2 w-full"
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
        <div className="mb-4">
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
          <div className="mb-4">
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
        <div className="mb-4">
          <label className="block mb-2 text-gray-800">Photo</label>
          <input
            type="file"
            accept="image/*"
            name="photo"
            onChange={handleFileChange}
            className="border p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-gray-800">Description</label>
          <JoditEditor
           ref={editor}
            name="description"
            value={formData.description}
            // onChange={handleChange}
            onChange={(newContent) => handleEditorChange("description", newContent)}
            className="border p-2 w-full h-32"
          ></JoditEditor>
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-gray-800">PDF</label>
          <input
            type="file"
            accept=".pdf"
            name="pdf"
            onChange={handleFileChange}
            className="border p-2 w-full"
          />
        </div>
        <div className="mt-6">
          <button type="submit" className="bg-blue-500 text-white p-2">
            Submit
          </button>
        </div>
      </form>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default PdfForm;
