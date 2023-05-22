import React, { useEffect, useState } from "react";

import Link from "next/link";
import Router from "next/router";
import { Alert } from "@mui/material";

// icons
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { BiPhone, BiUserCircle } from "react-icons/bi";
import { getSession, signIn, useSession } from "next-auth/react";
import usePasswordToggle from "@/components/togglepassword";

export default function Login() {
  //show and hide password
  const { isShowPassword, passwordType, togglePassword } = usePasswordToggle();

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
      setPageState((old) => ({ ...old, processing: true, err: "" }));
      signIn("credentials", {
        ...formData,
        redirect: false,
      }).then((res) => {
        if (res.ok) {
          Router.push("/");
        } else {
          setPageState((old) => ({
            ...old,
            processing: false,
            err: "Invalid email or password",
          }));
        }
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
    <section className="font-poppins">
      <div className="relative z-10  flex items-center h-screen  overflow-hidden lg:bg-blue-900 lg:dark:bg-gray-800 2xl:py-44">
        <div className="absolute top-0 left-0 w-full h-full lg:bg-blue-900 dark:bg-bg-gray-700 lg:bottom-0 lg:h-auto lg:w-4/12">
          <img
            src="/wallpaper.jpg"
            alt="login"
            className="hidden object-cover w-full h-full lg:block"
          />
        </div>
        <div className="relative max-w-6xl px-4 mx-auto">
          <div className="justify-center max-w-xl mx-auto lg:max-w-5xl">
            <div className="flex flex-wrap items-center -mx-4">
              <div className="px-4 lg:w-2/5">
                <div className=" w-fit p-5 shadow-md bg-gray-50 dark:bg-gray-900 rounded-lg ">
                  <h2 className="text-xl font-bold leading-tight mb-7 md:text-2xl dark:text-gray-300 select-none">
                    Log in to your account
                  </h2>
                  <form className="mt-4 w-72" onSubmit={handleSubmit}>
                    {pageState.err ? (
                      <Alert severity="error">{pageState.err}</Alert>
                    ) : (
                      ""
                    )}
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
                      <span class="w-48 h-48 rounded rotate-[-40deg] bg-yellow-400  absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                      <span class="text-center relative w-full font-semibold  text-black transition-colors duration-300 ease-in-out ">
                        Log in
                      </span>
                    </button>
                    {/* <button
                      disabled={pageState.processing}
                      className="w-full px-4 py-3 mt-4 font-semibold text-gray-700 bg-yellow-400 rounded-lg hover:text-gray-700 hover:bg-blue-200 select-none "
                      type="submit"
                    >
                      Log in
                    </button> */}
                    <div className="py-5 text-base text-center text-gray-600 dark:text-gray-400 select-none">
                      Or Sign up with
                    </div>
                    <div className="flex justify-center gap-2">
                      <Link href={""}>
                        <FaFacebook size={24} color="#4267B2" />
                      </Link>
                      <Link href={""}>
                        <FcGoogle size={26} />
                      </Link>
                      {/* <Link href={""}>
                          <BiPhone size={26} color="#4267B2" />
                        </Link> */}
                    </div>

                    <div className="mt-4 text-gray-700  dark:text-gray-300 select-none">
                      Already have an account?
                      <Link
                        href="signup"
                        className="font-semibold text-blue-700 hover:underline"
                      >
                        Sign up
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
              <div className="hidden w-full px-6 mb-16 lg:w-3/5 lg:mb-0 lg:block">
                <span className="flex items-center justify-center w-20 h-20 mx-auto text-gray-900 bg-yellow-400 rounded-lg dark:bg-yellow-300 mb-9">
                  <BiUserCircle size={38} />
                </span>
                <h2 className="text-4xl font-bold text-center text-gray-100 dark:text-gray-400 mb-9 lg:text-6xl select-none">
                  Are you ready to sign up our account?
                </h2>
                <p className="text-xl font-semibold text-center text-gray-200 dark:text-gray-500 select-none">
                  You are welcome here!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function isValidEmail(email) {
  // Use a regular expression to validate email format
  return /^\S+@\S+\.\S+$/.test(email);
}

Login.getLayout = function () {
  return <>{Login()}</>;
};

//check session login
export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
}
