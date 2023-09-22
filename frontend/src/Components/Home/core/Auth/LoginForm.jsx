import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { GoogleSvg } from "../../../../consstant/svgfile";
import { LogInSchema } from './formvalidator';

const initialValues = { email: "", password: "" };

function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

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
    onSubmit: (values, action) => {
      action.resetForm();
    },
  });

  return (
    <form onSubmit={handleSubmit} className="mt-6 flex w-full flex-col gap-y-4">
      <label className="w-full">
        <p className="mb-1 text-[0.875rem] leading-[1.375rem] ">
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
          id='password'
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
          onClick={() => setShowPassword(prev => !prev)}
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
        {isValid? "LogIn" : "❌LogIn"}
        
      </button>
      <button
        className="flex bg-yellow-50 rounded-[8px] items-center justify-center cursor-pointer mt-6  mt-6 font-medium text-richblack-900 py-[8px] px-[12px] duration-500 hover:scale-[1.1]"
      >
        Continue with Google <span className="ml-[11px]">{GoogleSvg}</span>
      </button>
    </form>
  );
}

export default LoginForm;
