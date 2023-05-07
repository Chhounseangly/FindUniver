import Link from "next/link";
import Router from "next/router";
import React, { useEffect, useState } from "react";
//icons
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { BiPhone, BiUserCircle } from "react-icons/bi";
import usePasswordToggle from "@/components/togglepassword";
import { getSession } from "next-auth/react";
function SignUp() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    cfPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [correct, setCorrect] = useState({});

  // Validate form data when it changes
  useEffect(() => {
    let newError = {};
    let newCorrect = {};
    if (formData.fullName.length > 2) {
      newCorrect.name = "Correct";
    }
    if (isValidEmail(formData.email)) {
      newCorrect.email = "Correct";
    }
    if (formData.cfPassword && formData.password) {
      if (formData.cfPassword != formData.password) {
        newError.cfPassword = "Please make sure your password match.";
      } else if (formData.cfPassword === formData.password)
        newCorrect.cfPassword = "Passwords match!";
    }
    setErrors(newError);
    setCorrect(newCorrect);
  }, [formData]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Check for errors before submitting
    let newError = {};
    if (!formData.fullName) {
      newError.name = "fullName is require!";
    }
    if (!formData.email) {
      newError.email = "email is requier!";
    }
    if (!formData.password) {
      newError.password = "password is requier!";
    }
    if (!formData.cfPassword) {
      newError.cfPassword = "confirm password is requier!";
    }
    setErrors(newError);

    if (
      formData.fullName &&
      formData.email &&
      formData.password &&
      formData.cfPassword
    ) {
      const data = {
        fullName: formData.fullName,
        email: formData.email,
        password: formData.password,
        cfPassword: formData.cfPassword,
      };
      await fetch("http://127.0.0.1:8000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((res) => {
          console.log(res.body);
          Router.push("/").then((r) => console.log("success", r));
        });
    }
  };
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const { isShowPassword, passwordType, togglePassword } = usePasswordToggle();

  return (
    <>
      <section className="font-poppins">
        <div className="relative z-10  flex items-center h-screen  overflow-hidden lg:bg-blue-900 lg:dark:bg-gray-800 2xl:py-44">
          <div className="absolute top-0 left-0 w-full h-full lg:bg-blue-900 dark:bg-bg-gray-700 lg:bottom-0 lg:h-auto lg:w-4/12">
            <img
              src="https://i.postimg.cc/XJBZvxHp/first.jpg"
              alt=""
              className="hidden object-cover w-full h-full lg:block"
            />
          </div>
          <div className="relative max-w-6xl px-4 mx-auto">
            <div className="justify-center max-w-xl mx-auto lg:max-w-5xl">
              <div className="flex flex-wrap items-center -mx-4">
                <div className="px-4 lg:w-2/5">
                  <div className=" w-fit p-5 shadow-md bg-gray-50 dark:bg-gray-900 rounded-lg ">
                    <h2 className="text-xl font-bold leading-tight mb-7 md:text-2xl dark:text-gray-300 select-none">
                      Sign Up to your account
                    </h2>
                    <form onSubmit={handleSubmit} className="mt-4 w-72">
                      <div>
                        <label
                          htmlFor="fullName"
                          className="block text-gray-700 dark:text-gray-300 select-none"
                        >
                          Full name *
                        </label>
                        <input
                          type="text"
                          value={formData.fullName}
                          onChange={handleChange}
                          id="fullName"
                          className="w-full px-4 py-3 mt-2 bg-gray-200 rounded-lg dark:text-gray-100 dark:bg-gray-800"
                          name="fullName"
                          placeholder="Enter full name"
                          maxLength="20"
                        />
                        <div className="h-2">
                          {errors.name && (
                            <span className="text-red-500 text-xs select-none">
                              {errors.name}
                            </span>
                          )}
                          {correct.name && (
                            <span className="text-green-500 text-xs select-none">
                              {correct.name}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="mt-4">
                        <label className="block text-gray-700 dark:text-gray-300 select-none">
                          Email *
                        </label>
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
                            // type={passwordType}
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
                            {/* {!isShowPassword ? (
                              <AiOutlineEyeInvisible
                                size={24}
                                onClick={togglePassword}
                                color="gray"
                              />
                            ) : (
                              <AiOutlineEye size={24} color="gray" />
                            )} */}
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
                      <div className="mt-5">
                        <div>
                          <label className="text-gray-700 dark:text-gray-300 select-none ">
                            Confirm password *
                          </label>
                          <div className="relative flex items-center mt-2">
                            <input
                              // type={passwordType}
                              className="w-full px-4 py-3 bg-gray-200 rounded-lg dark:text-gray-400 dark:bg-gray-800 "
                              name="cfPassword"
                              value={formData.cfPassword}
                              onChange={handleChange}
                              placeholder="Confirm password"
                              minLength={8}
                              maxLength={30}
                              pattern="[a-z0-9]{1,15}"
                              title="Password should be digits (0 to 9) or alphabets (a to z)."
                            />
                            <div className="absolute right-0 mr-3 dark:text-gray-100 cursor-pointer">
                              {/* {!isShowPassword ? (
                                <AiOutlineEyeInvisible
                                  size={24}
                                  onClick={togglePassword}
                                  color="gray"
                                />
                              ) : (
                                <AiOutlineEye size={24} color="gray" />
                              )} */}
                            </div>
                          </div>
                          <div className="h-4">
                            {errors.cfPassword && (
                              <span className="text-red-500 text-xs select-none">
                                {errors.cfPassword}
                              </span>
                            )}
                            {correct.cfPassword && (
                              <span className="text-green-500 text-xs select-none">
                                {correct.cfPassword}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                      <button
                        className="w-full px-4 py-3 mt-4 font-semibold text-gray-700 bg-yellow-400 rounded-lg hover:text-gray-700 hover:bg-blue-200 select-none "
                        type="submit"
                      >
                        Sign Up
                      </button>
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
                          href="login"
                          className="font-semibold text-blue-700 hover:underline"
                        >
                          Login
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
    </>
  );
}

export default SignUp;

function isValidEmail(email) {
  // Use a regular expression to validate email format
  return /^\S+@\S+\.\S+$/.test(email);
}

SignUp.getLayout = function () {
  return <>{SignUp()}</>;
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
