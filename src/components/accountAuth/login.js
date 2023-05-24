import React, { useEffect, useState } from "react";

import Router from "next/router";
import { Alert } from "@mui/material";

// icons
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { signIn } from "next-auth/react";
import usePasswordToggle from "@/components/togglepassword";

export default function Login({ OpenSignUp }) {
  //show and hide password
  const { isShowPassword, passwordType, togglePassword } = usePasswordToggle();
  const [isLoading, setIsLoading] = useState(false);

  //switch to Sign Up
  const switchToSignUp = (e) => {
    OpenSignUp(e);
  };

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [pageState, setPageState] = useState({
    err: "",
    processing: false,
  });
  const [errors, setErrors] = useState({});
  const [correct, setCorrect] = useState({});

  // Validate form data when it changes
  useEffect(() => {
    let newCorrect = {};
    if (isValidEmail(formData.email)) {
      newCorrect.email = "Correct";
    }
    setCorrect(newCorrect);
  }, [formData]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Check for errors before submitting
    let newError = {};
    if (!formData.email) {
      newError.email = "email is requier!";
    }
    if (!formData.password) {
      newError.password = "password is requier!";
    }
    setErrors(newError);

    if (formData.email && formData.password) {
      setIsLoading(true);

      setPageState((old) => ({ ...old, processing: true, err: "" }));
      signIn("credentials", {
        ...formData,
        redirect: false,
      }).then((res) => {
        if (res.ok) {
          Router.push("/");
          setIsLoading(false);
        } else
          setPageState((old) => ({
            ...old,
            processing: false,
            err: "Invalid email or password",
          }));
        setIsLoading(false);
      });
    }
  };
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <form className="mt-4 w-[100%] mx-auto" onSubmit={handleSubmit}>
      {pageState.err ? <Alert severity="error">{pageState.err}</Alert> : ""}
      <div className="mt-4">
        <label className="block text-gray-700 dark:text-gray-300 select-none">
          Email *
        </label>
        <label className="text-white"></label>
        <input
          type="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 mt-2 bg-gray-200 rounded-lg dark:text-gray-100 dark:bg-gray-800"
          name="email"
          placeholder="Enter your email"
        />
        <div className="h-2">
          {errors.email && (
            <span className="text-red-500 text-xs select-none">
              {errors.email}
            </span>
          )}
          {correct.email && (
            <span className="text-green-500 text-xs select-none">
              {correct.email}
            </span>
          )}
        </div>
      </div>
      <div className="mt-4">
        <label className="text-gray-700 dark:text-gray-300 select-none ">
          Password *
        </label>
        <div className="relative flex items-center mt-2">
          <input
            type={passwordType}
            className="w-full px-4 py-3 bg-gray-200 rounded-lg dark:text-gray-400 dark:bg-gray-800 "
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter password"
            minLength={8}
            maxLength={30}
            pattern="[a-z0-9]{1,15}"
            title="Password should be digits (0 to 9) or alphabets (a to z)."
          />
          <div className="absolute right-0 mr-3 dark:text-gray-100 cursor-pointer">
            {!isShowPassword ? (
              <AiOutlineEyeInvisible
                size={24}
                onClick={togglePassword}
                color="gray"
              />
            ) : (
              <AiOutlineEye size={24} color="gray" />
            )}
          </div>
        </div>
        <span className="text-xs float-right text-gray-400 select-none">
          Minimum length is 8 characters
        </span>

        <div className="h-2 mt-4 text-10">
          {errors.password && (
            <span className="text-red-500 text-xs select-none">
              {errors.password}
            </span>
          )}
        </div>
      </div>
      <button
        disabled={pageState.processing}
        type="submit"
        class="w-full relative inline-flex items-center justify-start px-6 py-3 mt-4  overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group"
      >
        <span class="w-72 h-56  rounded rotate-[-40deg] bg-yellow-400  absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
        <span class="text-center relative w-full font-semibold  text-black transition-colors duration-300 ease-in-out ">
          Log in
        </span>
      </button>
      <div className="py-5 text-base text-center text-gray-600 dark:text-gray-400 select-none">
        Or Login with
      </div>
      <div className="flex justify-center gap-2">
        <div className="inline-flex overflow-hidden text-white bg-white rounded group w-full cursor-pointer">
          <span className="px-3.5 py-2 text-white  flex items-center justify-center">
            <FaFacebook size={24} color="#4267B2" />
          </span>
          <span className="pl-4 pr-5 py-2.5 text-white text-center  bg-[#3b5998] hover:bg-[#3b5998]/90 w-full select-none">
            Facebook
          </span>
        </div>
        <div className="inline-flex overflow-hidden text-white bg-white rounded  group w-full cursor-pointer ">
          <span className="px-3.5 py-2 text-whit flex items-center justify-center">
            <FcGoogle size={26} />
          </span>
          <span className="pl-4 pr-5 py-2.5 text-white text-center bg-[#4285F4] hover:bg-[#4285F4]/90  w-full select-none">
            Google
          </span>
        </div>
      </div>

      <div className="mt-4 text-gray-700  dark:text-gray-300 select-none flex justify-center">
        Already have an account?
        <div
          onClick={() => switchToSignUp(true)}
          className="font-semibold text-[#4285F4] hover:underline"
        >
          Sign up
        </div>
      </div>
      {isLoading && (
        <div
          role="status"
          className="absolute backdrop-blur-[1px] -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2 w-full h-full items-center flex justify-center "
        >
          <svg
            aria-hidden="true"
            class="w-10 h-10  animate-spin dark:text-gray-600 fill-green-500"
            viewBox="0 0 100 101"
            fill="none"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
        </div>
      )}
    </form>
  );
}

function isValidEmail(email) {
  // Use a regular expression to validate email format
  return /^\S+@\S+\.\S+$/.test(email);
}
