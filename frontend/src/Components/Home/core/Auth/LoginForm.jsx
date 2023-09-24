import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { GoogleSvg } from "../../../../consstant/svgfile";
import { LogInSchema } from "./formvalidator";
import { FaArrowRight } from "react-icons/fa";
import axios from "axios"; // Import Axios

const initialValues = { email: "", password: "" };

const login = async (userData) => {
  try {
    const response = await axios.post(
      "https://ucchi-urran-backend.vercel.app/api/user/login",
      userData,
      { withCredentials: true } ,
      
    );
    
   // Get the token from the response header
   const token = response.data.token;
   document.cookie = `jwt=${token}; max-age=${60 * 60 * 24 * 7}; path=/`; // This sets a cookie named 'jwt' that expires in 7 days
   console.log("🚀 ~ file: LoginForm.jsx:23 ~ login ~ response.headers:", response.data.token)

   

   // Set the token in local storage
   localStorage.setItem('jwt_token', token);
    
    return response.data;
  } catch (error) {
    console.error("Error logging in:", error);
    throw error;
  }
};

function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
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
    validationSchema: LogInSchema,
    onSubmit: async (values, action) => {
      login({
        email: values.email,
        password: values.password,
      }).then(() => {
        navigate("/user"); // Redirect to /user on successful signup
      });
      // action.resetForm();
    },
  });

  return (
    <div>
      <div className="flex justify-end">
        <Link
          to="/user/signup"
          className="text-[#3856ea] font-semibold text-[18px]"
        >
          signup
          <FaArrowRight className="ml-2" />
        </Link>
      </div>
      <form
        onSubmit={handleSubmit}
        className="mt-6 flex w-full flex-col gap-y-4"
      >
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

        <label className="relative">
          <p className="mb-1 text-[0.875rem] leading-[1.375rem]">
            Password <sup className="text-pink-200">*</sup>
          </p>
          <input
            type="password"
            name="password"
            id="password"
            autoComplete="off"
            placeholder="Your Password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            className="w-full rounded-[0.1rem] bg-[#E6E6E6] p-[12px] pr-12"
          />
          {errors.password && touched.password && (
            <p className="text-[#b40e0e] font-semibold">{errors.password}</p>
          )}
          <br />
          <span
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-3 top-[38px] z-[10] cursor-pointer"
          >
            {showPassword ? (
              <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
            ) : (
              <AiOutlineEye fontSize={24} fill="#AFB2BF" />
            )}
          </span>
          <Link to="/forgot-password">
            <p className="mt-1 ml-auto max-w-max text-xs text-blue-100">
              Forgot Password
            </p>
          </Link>
        </label>
        <button
          type="submit"
          className="mt-6 rounded-[8px] bg-yellow-50 py-[9px] px-[12px] font-medium text-richblack-900 duration-500 hover:scale-[1.1]"
          disabled={!isValid}
        >
          {isValid ? "LogIn" : "❌LogIn"}
        </button>
        <button className="flex bg-yellow-50 rounded-[8px] items-center justify-center cursor-pointer mt-6  mt-6 font-medium text-richblack-900 py-[8px] px-[12px] duration-500 hover:scale-[1.1]">
          Continue with Google <span className="ml-[11px]">{GoogleSvg}</span>
        </button>
        <Link
          className="mt-6 rounded-[8px] bg-blue-300 hover:bg-blue-500 "
          to="/Signup"
        >
          {/* <button
        type="submit"
        className="py-[8px] px-[200px] font-medium text-richblack-900 "
      >
        Signup
      </button> */}
        </Link>
      </form>
    </div>
  );
}

export default LoginForm;
