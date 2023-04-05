import React, { useState } from "react";
import Link from "next/link";

const navigation = [
  { name: "ទំព័រដើម", href: "/home" },
  { name: "មុខជំនាញ", href: "/major" },
  { name: "ណែនាំមុខជំនាញ", href: "/recommendation-major" },
  { name: "អំពីយើង", href: "/about-us" },
];

const authentication = [
  { name: "Sign In", href: "/signin" },
  { name: "Sign Up", href: "/signup" },
];

export function HeaderBar() {
  const [isSearchOpen, setSearchOpen] = useState(false);
  const toggleSearch = () => setSearchOpen(!isSearchOpen);

  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!isMenuOpen);

  return (
    <>
      {/* Header Bar  */}
      <div className="flex-col flex-wrap border-b-2 border-slate-600">
        <section className="relative mx-auto">
          {/* navbar  */}
          <nav className="flex justify-between bg-gray-900 text-white ">
            <div className="px-5 xl:px-10 py-1.5 flex w-full items-center justify-between">
              <a className="text-3xl font-bold font-heading" href="#">
                <img className="h-16 w-30" src="logo.png" alt="logo" />
              </a>
              {/* Nav Links  */}
              {!isMenuOpen && (
                <ul className="hidden xl:flex px-4 mx-auto font-heading space-x-12">
                  {navigation.map((navItems) => (
                    <li >
                      <a
                        class="hover:text-gray-500  font-kh"
                        href={navItems.href}
                      >
                        {navItems.name}
                      </a>
                    </li>
                  ))}
                </ul>
              )}

              {/* Header Icons  */}
              <div class=" flex items-center space-x-2 ">
                {/* Search Icon */}
                <a
                  className="hover:text-gray-200 hidden xl:flex"
                  href="#"
                  onClick={toggleSearch}
                >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    class="h-6 w-6"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d={
                        !isSearchOpen
                          ? "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                          : "M6 18L18 6M6 6l12 12"
                      }
                    ></path>
                  </svg>
                </a>

                <a class="hover:text-gray-200" href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </a>

                {!isMenuOpen && (
                  <div className="space-x-2 hidden sm:flex">
                    {Authentication()}
                  </div>
                )}

                {/* Sign In / Register   */}
                {/* <a class="items-center hidden sm:flex  hover:text-gray-200" href="#"> */}
                <a className="items-center hidden   hover:text-gray-200" href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 hover:text-gray-200"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </a>
              </div>
            </div>
            {/* Responsive navbar  */}
            <a
              className="navbar-burger self-center mr-12 xl:hidden"
              href="#"
              onClick={toggleMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 hover:text-gray-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d={
                    !isMenuOpen
                      ? "M4 6h16M4 12h16M4 18h16"
                      : "M6 18L18 6M6 6l12 12"
                  }
                />
              </svg>
            </a>
          </nav>
        </section>
      </div>
      {/* if click icon search will show */}
      {isSearchOpen && (
        <div className="w-screen bg-gray-900 justify-center flex ">
          {SearchBar()}
        </div>
      )}
      {/* reposive toggleMenu */}
      {isMenuOpen && (
        <div className="bg-black h-screen flex justify-center">
          <ul className="flex flex-col font-heading text-white text-center space-y-10">
            <div className="w-screen justify-center flex ">{SearchBar()}</div>
            {navigation.map((navItems) => (
              <li >
                <a
                  className="hover:text-gray-500 text-white font-kh"
                  href={navItems.href}
                >
                  {navItems.name}
                </a>
              </li>
            ))}
            <div className="flex flex-col space-y-2">{Authentication()}</div>
          </ul>
        </div>
      )}
    </>
  );
}

//function of Searching
function SearchBar() {
  return (
    <>
      <form className="p-4 max w-9/12 ">
        <label
          for="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 font-kh"
            placeholder="ស្វែងរក..."
            required
          />
          <button
            type="submit"
            className="text-white absolute right-1.5 bottom-1 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 font-kh"
          >
            ស្វែងរក
          </button>
        </div>
      </form>
    </>
  );
}


function Authentication() {
  return (
    <>
    <Link href={"../authentications/signup"}>
    <div className="item-center justify-center text-center m-auto">
        <button className="  m-auto inline-flex p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
          <span className=" m-auto  w-24 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Sign Up
          </span>
        </button>
      </div>
    </Link>
    <Link href={"../authentications/login"}>
      <div className="item-center justify-center text-center m-auto" href="../authentications/signin">
        <button className="  m-auto inline-flex p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
          <span className=" m-auto py-2 w-24 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Login
          </span>
        </button>
      </div>
      </Link>
    </>
  );
}
