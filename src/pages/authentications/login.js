import Link from "next/link";
import Router from "next/router";
import React, { useState } from "react";

import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { BiPhone, BiUserCircle } from "react-icons/bi";
export default function Login() {
  //show and hide password
  const [isShowPass, setShowPass] = useState(false);
  const [passwordType, setPasswordType] = useState("password");
  const togglePassword = () => {
    setShowPass(!isShowPass);
    if (passwordType === "password") {
      setPasswordType("text");
      setTimeout(() => {
        setPasswordType("password"), setShowPass(isShowPass);
      }, 3000);
    }
    setPasswordType("password");
  };
  return (
    <section class=" font-poppins">
      <div class="relative z-10 flex items-center h-screen py-16 overflow-hidden lg:bg-blue-900 lg:dark:bg-gray-800 2xl:py-44">
        <div class="absolute top-0 left-0 w-full h-full lg:bg-blue-900 dark:bg-bg-gray-700 lg:bottom-0 lg:h-auto lg:w-4/12">
          <img
            src="https://i.postimg.cc/XJBZvxHp/first.jpg"
            alt="background"
            className="hidden object-cover w-full h-full lg:block"
          />
        </div>
        <div class="relative max-w-6xl px-4 mx-auto">
          <div class="justify-center max-w-xl mx-auto lg:max-w-5xl">
            <div class="flex flex-wrap items-center -mx-4">
              <div class="w-full px-4 lg:w-2/5">
                <div class="z-10 w-full p-12 shadow-md bg-gray-50 dark:bg-gray-900 rounded-lg ">
                  <h2 class="text-xl font-bold leading-tight mb-7 md:text-2xl dark:text-gray-300">
                    Login to your account
                  </h2>
                  <form action="" class="mt-4">
                    <div>
                      <label
                        for=""
                        class="block text-gray-700 dark:text-gray-300"
                      >
                        Email:
                      </label>
                      <input
                        type="email"
                        class="w-full px-4 py-3 mt-2 bg-gray-200 rounded-lg dark:text-gray-100 dark:bg-gray-800"
                        name=""
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                    <div class="mt-4">
                      <div>
                        <label for="" class="text-gray-700 dark:text-gray-300 ">
                          Password:
                        </label>
                        <div class="relative flex items-center mt-2">
                          <input
                            type={passwordType}
                            className="w-full px-4 py-3 bg-gray-200 rounded-lg dark:text-gray-400 dark:bg-gray-800 "
                            name="password"
                            placeholder="Enter password"
                            required
                            minLength={8}
                            maxLength={30}
                          />
                          <div className="absolute right-0 mr-3 dark:text-gray-100 cursor-pointer">
                            {!isShowPass ? (
                              <AiOutlineEye
                                size={24}
                                onClick={togglePassword}
                              />
                            ) : (
                              <AiOutlineEyeInvisible size={24} />
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 text-right">
                      <a
                        href="#"
                        className="text-sm font-semibold text-blue-700 hover:underline"
                      >
                        forgot password?
                      </a>
                    </div>

                    <button
                      className="w-full px-4 py-3 mt-4 font-semibold text-gray-700 bg-yellow-400 rounded-lg hover:text-gray-700 hover:bg-blue-200 "
                      type="submit"
                    >
                      LOGIN
                    </button>
                    <div className="py-5 text-base text-center text-gray-600 dark:text-gray-400">
                      Or login with
                    </div>
                    <div className="flex justify-center gap-3">
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
                    </div>
                    <div className="mt-4 text-gray-700  dark:text-gray-300">
                      Need an account?
                      <Link
                        href={"signup"}
                        className="font-semibold text-blue-700 hover:underline"
                      >
                        Sign Up
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
              <div className="hidden w-full px-6 mb-16 lg:w-3/5 lg:mb-0 lg:block">
                <span className="flex items-center justify-center w-20 h-20 mx-auto text-gray-900 bg-yellow-400 rounded-lg dark:bg-yellow-300 mb-9">
                  <BiUserCircle size={38} />
                </span>
                <h2 class="text-4xl font-bold text-center text-gray-100 dark:text-gray-400 mb-9 lg:text-6xl ">
                  Are you ready to login our account?
                </h2>
                <p class="text-xl font-semibold text-center text-gray-200 dark:text-gray-500 ">
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

Login.getLayout = function () {
  return <>{Login()}</>;
};
