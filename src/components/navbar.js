import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { toggleContent } from "./togglecontent";

import Image from "next/image";
import logo from "../images/logo.png";
import profile from "../images/profile.png";


const menuList = [
  { name: "ទំព័រដើម", href: "/" },
  { name: "មុខជំនាញ", href: "/major" },
  { name: "ណែនាំមុខជំនាញ", href: "/recommendation" },
  { name: "អំពីយើង", href: "/aboutus" },
];


//main NavBar
function NavBar() {
  const [isSearchOpen, setSearchOpen] = useState(false);
  const toggleSearch = () => {
    setSearchOpen(!isSearchOpen);
    toggleContent("bannerLogo");
    toggleContent("dropdown");
    toggleContent("moeys");
  };

  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
    toggleContent("content");
    toggleContent("footer");
  };

  return (
    <>
      {/* Header Bar  */}
      <div className="flex-col flex-wrap border-b-2 border-slate-600">
        <section className="relative mx-auto">
          {/* navbar  */}
          <nav className="flex justify-between bg-gray-900 text-white ">
            <div className="px-5 xl:px-10 py-1.5 flex w-full items-center justify-between">
              <a className="text-3xl font-bold font-heading" href="#">
                <Image className="h-8vh w-15vh" src={logo} alt="logo" />
              </a>
              {/* Nav Links  */}
              {!isMenuOpen && (
                <ul className="hidden xl:flex px-4 mx-auto font-heading space-x-12">
                <Menu menuList={menuList}/>
                </ul>
              )}

              {/* Header Icons  */}
              <div className=" flex items-center space-x-2 ">
                {/* Search Icon */}
                <a
                  className="hover:text-gray-200 hidden xl:flex hover:scale-150 transition-all"
                  href="#"
                  onClick={toggleSearch}
                >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    className="h-6 w-6"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d={
                        !isSearchOpen
                          ? "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                          : "M6 18L18 6M6 6l12 12"
                      }
                    ></path>
                  </svg>
                </a>

                {/* Sign In / Register   */}
                {/* {!isMenuOpen && (
                  <div className="space-x-2 hidden sm:flex">
                    {Authentication()}
                  </div>
                )} */}
                {Profile()}
              </div>
            </div>
            {/* Responsive navbar  */}
            <a
              className="navbar-burger self-center mr-12 xl:hidden"
              href="#"
              onClick={toggleMenu}
            >
              <svg
                className="h-6 w-6 hover:text-gray-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
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
        <motion.div
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 0, opacity: 0 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
          }}
        >
          <div className="search bg-gray-900 justify-center flex absolute w-full">
            {SearchBar()}
          </div>
        </motion.div>
      )}
      {/* reposive toggleMenu */}
      {isMenuOpen && (
        <motion.div
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 0, opacity: 0 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
          }}
        >
          <div className="bg-black h-screen flex justify-center menuResponsive">
            <ul className="w-full flex flex-col font-heading text-white text-center space-y-10">
              <div className="w-full justify-center flex ">{SearchBar()}</div>
              <Menu menuList={menuList}/>
              <div className="flex flex-col space-y-2">{Authentication()}</div>
            </ul>
          </div>
        </motion.div>
      )}
    </>
  );
}

// menuList
function Menu({ menuList }) {
  const router = useRouter();
  return (
    <>
      {menuList.map((menuList, index) => (
        <li key={index}>
          <Link
            className={`${
              router.pathname === menuList.href
                ? "text-red-500"
                : "text-white  hover:text-red-500"
            } font-kh`}
            href={menuList.href}
          >
            {menuList.name}
          </Link>
        </li>
      ))}
    </>
  );
}

//function of Searching
function SearchBar() {
  return (
    <>
      <form className="p-7 w-9/12 hover:scale-100 transition-all ">
        <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
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

//sign in and sign up
function Authentication() {
  const authentication = [
    { name: "Sign Up", href: "/authentications/signup" },
    { name: "Log in", href: "/authentications/login " },
  ];
  return (
    <>
      {authentication.map(({ name, href, index }) => (
        <Link href={href} key={index}>
          <div className="item-center justify-center text-center m-auto">
            <button className="  m-auto inline-flex p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
              <span className=" m-auto  w-24 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                {name}
              </span>
            </button>
          </div>
        </Link>
      ))}
    </>
  );
}

function Profile() {
  const [isDropdownProfile, setDropdownProfile] = useState(false);
  const ToggleProfile = () => {
    setDropdownProfile(!isDropdownProfile);
    toggleContent("search");
  };

  return (
    <>
      <div className="flex items-center md:order-2 relative ">
        <button
          onClick={ToggleProfile}
          type="button"
          className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-gray-300 dark:focus:ring-gray-600"
          aria-expanded="false"
        >
          <Image
            className="w-8 h-8 rounded-full"
            src={profile}
            alt="userphoto"
          />
        </button>
      </div>
      {/* Dropdown menu  */}
      {isDropdownProfile && (
        <div
          className="dropdown absolute z-50 top-16 my-3 right-9 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
          id="user-dropdown"
        >
          <div className="px-4 py-3">
            <span className="block text-sm text-gray-900 dark:text-white">
              Bonnie Green
            </span>
            <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">
              name@flowbite.com
            </span>
          </div>
          <ul className="py-2 px-3" aria-labelledby="user-menu-button">
            <li className="flex m-auto items-center">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                ></path>
              </svg>
              <a
                href="#"
                className="font-kh block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >
                រក្សាទុក
              </a>
            </li>
            <li className="flex m-auto items-center">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                ></path>
              </svg>
              <a
                href="#"
                className="font-kh block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >
                ចាកចេញ
              </a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

export default NavBar;
