
import { useNavigate } from "react-router-dom";
import { ForgotPasswordSchema } from "./formvalidator";
import { useFormik } from "formik";
import axios from "axios";


const forgotpassword =async (userData) => {
    console.log("🚀😀😀 ~ file: forgotpassword.jsx:9 ~ forgotpassword ~ userData:", userData)
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/user/forgotPassword`,
        // "http://localhost:3000/api/user/forgotPassword",
        userData
      );
  
      console.log("🚀 ~ file: forgotpassword.jsx:22 ~ forgotpassword ~ response.data.message:", response.data)
      if (response.data.status === "success"){
        return window.location.href = "/login";
      }
      else{
        alert("something went wrong")
      }
    } catch (error) {
      console.error("Error logging in:", error);
    //   toast.error("Login failed. Please check your credentials.");
      throw error;
    }
  };


const initialValues = { email: "" };


const ForgotPassword = () => {
    const navigate = useNavigate();

    const {
        errors,
        handleBlur,
        handleSubmit,
        values,
        isValid,
        handleChange,
        touched,
      } = useFormik({
        initialValues,
        validationSchema: ForgotPasswordSchema,
        onSubmit: async (values, action) => {
          await forgotpassword({
            email: values.email,
          }).then(() => {
             navigate("/login"); // Redirect to /user on successful signup
           });
        },
      });

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-1/3">
        <h2 className="text-2xl mb-6">Forgot Your Password</h2>
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="w-full">
          <p className="mb-1 text-[0.875rem] leading-[1.375rem]">
            Email Address <sup className="text-pink-200">*</sup>
          </p>
          <input
            type="email"
            id="email"
            placeholder="Email"
            autoComplete="on"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className="w-full rounded-[0.5rem] p-[12px] bg-[#E6E6E6]"
          />
          {errors.email && touched.email && (
            <p className="text-[#b40e0e] font-semibold">{errors.email}</p>
          )}
        </label>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              disabled={!isValid}
            >
              {isValid ? "Submit" : "❌Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
