import { ResetSchema } from "./formvalidator";
import { useFormik } from "formik";
import axios from "axios";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import { useParams } from "react-router-dom";

const initialValues = { password: "" };

const resetPassword =async (userData,token) => {
   

    try {
      const response = await axios.patch(
        `${import.meta.env.VITE_BACKEND_URL}/user/resetPassword/${token}`,

        userData
      );
  
    
      if (response.data.status === "success"){
        return window.location.href = "/";
      }
      else{
        alert("something went wrong")
      }
    } catch (error) {
      console.error("Error logging in:", error);
   
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
    onSubmit: (values) => {
        resetPassword({
        password: values.password,
        },token).then(() => {
        window.location.href = "/login"; // Redirect to /user on successful signup
      });

    },
  });

  return (
    <div className="flex items-center justify-center min-h-screen">
  <div className="w-full max-w-md px-4">
    <h2 className="text-2xl mb-6 text-center">Reset Password</h2>
    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
    onClick={handleSubmit}>
      <div className="mb-4">
        <label className="relative block mb-1 text-sm font-bold">
          New Password <span className="text-pink-200">*</span>
        </label>
        <div className="relative rounded-[0.5rem] bg-[#E6E6E6]">
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
            className="w-full p-3 pr-10"
          />
          <span
            onClick={() => setShowPassword(prev => !prev)}
            className="absolute right-3 top-2/4 transform -translate-y-2/4 z-10 cursor-pointer"
          >
            {showPassword ? (
              <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
            ) : (
              <AiOutlineEye fontSize={24} fill="#AFB2BF" />
            )}
          </span>
        </div>
        {errors.password && touched.password && (
          <p className="font-semibold text-red-500 mt-1">{errors.password}</p>
        )}
      </div>
      <div className="mb-4">
        <label className="relative block mb-1 text-sm font-bold">
          Confirm Password <span className="text-pink-200">*</span>
        </label>
        <div className="relative rounded-[0.5rem] bg-[#E6E6E6]">
          <input
            type={showsetPassword ? "text" : "password"}
            id="confirmPassword"
            autoComplete="off"
            name="confirmpassword"
            value={values.confirmpassword}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Confirm Your Password"
            className="w-full p-3 pr-10"
          />
          <span
            onClick={() => SetshowsetPassword(prev => !prev)}
            className="absolute right-3 top-2/4 transform -translate-y-2/4 z-10 cursor-pointer"
          >
            {showsetPassword ? (
              <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
            ) : (
              <AiOutlineEye fontSize={24} fill="#AFB2BF" />
            )}
          </span>
        </div>
        {errors.confirmpassword && touched.confirmpassword && (
          <p className="font-semibold text-red-500 mt-1">
            {errors.confirmpassword}
          </p>
        )}
      </div>
      <div className="flex items-center justify-center">
        <button
          type="submit"
          disabled={!isValid}
          className="w-full md:w-auto bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
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
