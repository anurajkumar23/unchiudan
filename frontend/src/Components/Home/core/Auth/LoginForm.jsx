import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";

import { LogInSchema } from "./formvalidator";
import { FaArrowRight } from "react-icons/fa";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";

const initialValues = { email: "", password: "" };

const login = async (userData) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/user/login`,
      userData,
      { withCredentials: true }
    );

    const token = response.data.token;
    document.cookie = `jwt=${token}; max-age=${60 * 60 * 24 * 7}; path=/`;
    if (response.status === 200) {
      toast.success("Login successful!");
    }

    localStorage.setItem("jwt_token", token);
    const redirectUrl = localStorage.getItem("redirectUrl");

    if (redirectUrl) {
      window.location.href = redirectUrl;
    } else {
      window.location.href = "/user";
    }

    return response.data;
  } catch (error) {
    console.error("Error logging in:", error);
    toast.error("Login failed. Please check your credentials.");
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
    onSubmit: async (values) => {
      await login({
        email: values.email,
        password: values.password,
      }).then(() => {
        navigate("/user"); // Redirect to /user on successful signup
      });
    },
  });

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div>
      <div className="flex justify-end">
        <Link
          to="/signup"
          className="text-[#3856ea] font-semibold text-[18px]"
        >
          signup
          <FaArrowRight className="ml-2" />
        </Link>
      </div>
      <form onSubmit={handleSubmit} className="mt-6 flex w-full flex-col gap-y-4">
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
            type={showPassword ? "text" : "password"} // Toggle input type
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
            onClick={togglePasswordVisibility}
            className="absolute right-3 top-[38px] z-[10] cursor-pointer"
          >
            {showPassword ? (
              <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
            ) : (
              <AiOutlineEye fontSize={24} fill="#AFB2BF" />
            )}
          </span>
          <Link to="/forgotpassword">
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
        
        <Link
          className="mt-6 rounded-[8px] bg-blue-300 hover:bg-blue-500 "
          to="/Signup"
        >
         
        </Link>
      </form>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}

export default LoginForm;
