import { ResetSchema } from "./formvalidator";
import { useFormik } from "formik";
import axios from "axios";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import { useParams } from "react-router-dom";

const initialValues = { password: "" };

const resetPassword =async (userData,token) => {
   

    console.log("🚀😀😀 ~ file: forgotpassword.jsx:9 ~ forgotpassword ~ userData:", userData ,token)
    try {
      const response = await axios.patch(
        `${import.meta.env.VITE_BACKEND_URL}/user/resetPassword/${token}`,
        // `http://localhost:3000/api/user/resetPassword/${token}`,
        userData
      );
  
      console.log("🚀 ~ file: forgotpassword.jsx:22 ~ forgotpassword ~ response.data.message:", response.data)
      if (response.data.status === "success"){
        return window.location.href = "/";
      }
      else{
        alert("something went wrong")
      }
    } catch (error) {
      console.error("Error logging in:", error);
    //   toast.error("Login failed. Please check your credentials.");
      throw error;
    }
}

function ResetPassword() {
    const { token } = useParams();
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
    validationSchema: ResetSchema,
    onSubmit: (values, action) => {
        resetPassword({
        password: values.password,
        },token).then(() => {
        window.location.href = "/login"; // Redirect to /user on successful signup
      });

    //   action.resetForm();
    },
  });

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-1/3">
        <h2 className="text-xl mb-6">Reset Password</h2>
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label className="relative">
              <p className="mb-1 text-[0.875rem] leading-[1.375rem] ">
                New Password <sup className="text-pink-200">*</sup>
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
                <p className="font-semibold text-[#b40e0e]">
                  {errors.password}
                </p>
              )}
            </label>
          </div>
          <div className="mb-4">
            <label className="relative">
              <p className="mb-1 text-[0.875rem] leading-[1.375rem] ">
                Confirm Password <sup className="text-pink-200">*</sup>
              </p>
              <input
                type={showsetPassword ? "text" : "password"}
                id="confirmPassword"
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
          <div className="flex items-center justify-between">
            <button
              type="submit"
              disabled={!isValid}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              {isValid ? "Submit" : "❌Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ResetPassword;
