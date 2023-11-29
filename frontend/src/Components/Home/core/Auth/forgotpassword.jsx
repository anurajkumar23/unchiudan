import { useState } from "react";

import { ForgotPasswordSchema } from "./formvalidator";
import { useFormik } from "formik";
import axios from "axios";

const ForgotPassword = () => {
  const [successMessage, setSuccessMessage] = useState(null);


  const {
    errors,
    handleBlur,
    handleSubmit,
    values,
    isValid,
    handleChange,
    touched,
  } = useFormik({
    initialValues: { email: "" },
    validationSchema: ForgotPasswordSchema,
    onSubmit: async (values) => {
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_BACKEND_URL}/user/forgotPassword`,
          values
        );

        if (response.data.status === "success") {
          setSuccessMessage(
            "Password reset link sent! Check your email or spam folder. Only valid for 10 minutes!"
          );
          // Optional: You can redirect after a delay or let the user manually navigate
          // setTimeout(() => navigate("/login"), 5000);
        } else {
          alert("Something went wrong");
        }
      } catch (error) {
        console.error("Error sending forgot password request:", error);
      }
    },
  });

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md px-4">
        <h2 className="text-2xl mb-6 text-center">Forgot Your Password</h2>
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label className="block mb-1 text-[0.875rem] font-bold">
              Email Address <span className="text-pink-200">*</span>
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              autoComplete="on"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-full rounded p-3 bg-[#E6E6E6] text-gray-800"
            />
            {errors.email && touched.email && (
              <p className="text-red-500 text-sm font-semibold mt-1">
                {errors.email}
              </p>
            )}
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full md:w-auto"
              type="submit"
              disabled={!isValid}
            >
              {isValid ? "Submit" : "❌ Submit"}
            </button>
          </div>
        </form>
        {successMessage && (
          <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mt-4">
            <p className="font-bold">Success!</p>
            <p>{successMessage}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
