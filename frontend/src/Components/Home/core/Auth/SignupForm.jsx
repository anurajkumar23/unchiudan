/* eslint-disable no-undef */
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { SignUpSchema } from "./formvalidator";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";

const signup = async (userData) => {
  let loadingToast
  try {
    // Show a loading toast while signing up
    loadingToast = toast.loading("Creating account...");

    const response = await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/user/signup`,
      userData,
      { withCredentials: true }
    );

    const token = response.data.token;
    document.cookie = `jwt=${token}; max-age=${60 * 60 * 24 * 7}; path=/`;

    localStorage.setItem("jwt_token", token);

    // Dismiss the loading toast and show a success toast
    toast.dismiss(loadingToast);
    toast.success("Sign up successful!");

    const redirectUrl = localStorage.getItem("redirectUrl");
    if (redirectUrl) {
      // Redirect to the originally requested URL
      window.location.href = redirectUrl;
    } else {
      // If there's no redirect URL, go to a default page
      window.location.href = "/user";
    }

    return response.data;
  } catch (error) {
    console.error("Error signing up:", error);

    // Dismiss the loading toast and show an error toast
    toast.dismiss(loadingToast);
    toast.error("Sign up failed. Please try again.");
    throw error;
  }
};

const initialValues = {
  email: "",
  password: "",
  firstname: "",
  lastname: "",
  confirmpassword: "",
  phone: "", // Added phone field
};

function SignupForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showsetPassword, SetshowsetPassword] = useState(false);

  const {
    errors,
    handleBlur,
    handleSubmit,
    values,
    handleChange,
    isValid,
    touched,
  } = useFormik({
    initialValues,
    validationSchema: SignUpSchema,
    onSubmit: (values, action) => {
      signup({
        firstname: values.firstname,
        lastname: values.lastname,
        password: values.password,
        email: values.email,
        phone: values.phone,
      }).then(() => {
        window.location.href = "/user"; // Redirect to /user on successful signup
      });

      action.resetForm();
    },
  });

  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex justify-end">
        <Link to="/login" className="text-[#3856ea] font-semibold text-[18px]">
          login
          <FaArrowLeft className="ml-2" />
        </Link>
      </div>
      <form onSubmit={handleSubmit} className="flex w-full flex-col">
        <div className="flex gap-x-4">
          <label>
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] ">
              First Name <sup className="text-pink-200">*</sup>
            </p>
            <input
              type="text"
              id="firstname"
              name="firstname"
              value={values.firstname}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="First Name"
              className="w-full rounded-[0.5rem] bg-[#E6E6E6] p-[12px]"
            />
            {errors.firstname && touched.firstname && (
              <p className="font-semibold text-[#b40e0e]">{errors.firstname}</p>
            )}
          </label>
          <label>
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] ">
              Last Name <sup className="text-pink-200">*</sup>
            </p>
            <input
              type="text"
              id="lastname"
              name="lastname"
              value={values.lastname}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Last Name"
              className="w-full rounded-[0.5rem] bg-[#E6E6E6] p-[12px]"
            />
            {errors.lastname && touched.lastname && (
              <p className="font-semibold text-[#b40e0e]">{errors.lastname}</p>
            )}
          </label>
        </div>
        <label className="w-full">
          <p className="mb-1 text-[0.875rem] leading-[1.375rem] ">
            Email Address <sup className="text-pink-200">*</sup>
          </p>
          <input
            type="email"
            id="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Your Email"
            className="w-full rounded-[0.5rem] bg-[#E6E6E6] p-[12px]"
          />
          {errors.email && touched.email && (
            <p className="font-semibold text-[#b40e0e]">{errors.email}</p>
          )}
        </label>
        <label className="w-full">
          <p className="mb-1 text-[0.875rem] leading-[1.375rem] ">
            Phone Number <sup className="text-pink-200">*</sup>
          </p>
          <input
            type="phone"
            id="phone"
            name="phone"
            value={values.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Phone Number"
            className="w-full rounded-[0.5rem] bg-[#E6E6E6] p-[12px]"
          />
          {errors.phone && touched.phone && (
            <p className="font-semibold text-[#b40e0e]">{errors.phone}</p>
          )}
        </label>
        <div className="flex gap-x-4">
          <label className="relative">
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] ">
              Create Password <sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              autoComplete="off"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Your Password"
              className="w-full rounded-[0.5rem] bg-[#E6E6E6] p-[12px] pr-10"
            />

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
            {errors.password && touched.password && (
              <p className="font-semibold text-[#b40e0e]">{errors.password}</p>
            )}
          </label>
          <label className="relative">
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] ">
              Confirm Password <sup className="text-pink-200">*</sup>
            </p>
            <input
              type={showsetPassword ? "text" : "password"}
              id="confirmpassword"
              autoComplete="off"
              name="confirmpassword"
              value={values.confirmpassword}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Confirm Your Password"
              className="w-full rounded-[0.5rem] bg-[#E6E6E6] p-[12px] pr-10"
            />
            <span
              onClick={() => SetshowsetPassword((prev) => !prev)}
              className="absolute right-3 top-[38px] z-[10] cursor-pointer"
            >
              {showsetPassword ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>

            {errors.confirmpassword && touched.confirmpassword && (
              <p className="font-semibold text-[#b40e0e]">
                {errors.confirmpassword}
              </p>
            )}
          </label>
        </div>
        <button
          type="submit"
          className="mt-6 rounded-[8px] bg-yellow-50 py-[8px] px-[12px] font-medium text-richblack-900 duration-500 hover:scale-[1.1]"
          disabled={!isValid}
        >
          {isValid ? "SignUp" : "❌SignUp"}
        </button>
      </form>
    </div>
  );
}

export default SignupForm;
