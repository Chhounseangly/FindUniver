import Link from "next/link";
import Router from "next/router";

export default function Login() {
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
          {/* btn return */}
          <button
            onClick={() => Router.back()}
            type="button"
            className="m-2 absolute text-white bg-blue-700 hover:bg-blue-800  focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              ></path>
            </svg>
          </button>
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
                      />
                    </div>
                    <div class="mt-4">
                      <div>
                        <label for="" class="text-gray-700 dark:text-gray-300 ">
                          Password:
                        </label>
                        <div class="relative flex items-center mt-2">
                          <input
                            type="password"
                            className="w-full px-4 py-3 bg-gray-200 rounded-lg dark:text-gray-400 dark:bg-gray-800 "
                            name=""
                            placeholder="Enter password"
                          />
                          <svg
                            width="16"
                            height="16"
                            className="absolute right-0 mr-3 dark:text-gray-300"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                          >
                            <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"></path>
                            <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"></path>
                            <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"></path>
                          </svg>
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
                      <Link href={""}>
                        <svg
                          width="20"
                          height="30"
                          fill="currentColor"
                          className=" text-blue-700 dark:text-blue-400 bi bi-facebook"
                          viewBox="0 0 16 16"
                        >
                          <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                        </svg>
                      </Link>
                      <Link href={""}>
                        <svg
                          width="20"
                          height="30"
                          fill="currentColor"
                          className=" text-blue-700 dark:text-blue-400 bi bi-facebook"
                          viewBox="0 0 256 262"
                          id="google"
                        >
                          <path
                            fill="#4285F4"
                            d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
                          ></path>
                          <path
                            fill="#34A853"
                            d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                          ></path>
                          <path
                            fill="#FBBC05"
                            d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
                          ></path>
                          <path
                            fill="#EB4335"
                            d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
                          ></path>
                        </svg>
                      </Link>
                      <Link href={""}>
                        <svg
                          className=" text-blue-700 dark:text-blue-400"
                          width="20"
                          height="30"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="1.5"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                          ></path>
                        </svg>
                      </Link>
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
                  <svg
                    width="40"
                    height="40"
                    fill="currentColor"
                    className="bi bi-person-circle"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                    <path
                      fill-rule="evenodd"
                      d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                    />
                  </svg>
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
