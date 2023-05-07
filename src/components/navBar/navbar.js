import React, { useState } from "react";
import { motion } from "framer-motion";
// import { toggleContent } from ".components/togglecontent";

import Image from "next/image";
import logo from "../../images/logo.png";

//icons
import { BsSearch } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import Form from "../accountAuth/profile";
import { toggleContent } from "../togglecontent";
import Menu from "./menuList";
const menuList = [
  { name: "ទំព័រដើម", href: "/" },
  { name: "មុខជំនាញ", href: "/major" },
  { name: "ណែនាំមុខជំនាញ", href: "/recommendation" },
  { name: "អំពីយើង", href: "/aboutus" },
];
//main NavBar
export default function NavBar({ session }) {
  const [isSearchOpen, setSearchOpen] = useState(false);
  const toggleSearch = () => {
    setSearchOpen(!isSearchOpen);
    // toggleContent("bannerLogo");
    toggleContent("dropdown");
    toggleContent("moeys");
    toggleContent("form");
    // toggleContent("text-banner");
  };

  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
    toggleContent("content");
    toggleContent("footer");
    toggleContent("search");
  };

  return (
    <>
      {/* Header Bar  */}
      <div className="flex-col flex-wrap border-b-2 border-slate-600">
        <section className="relative mx-auto">
          {/* navbar  */}
          <nav className="flex justify-between bg-banner-color text-white ">
            <div className="px-5 xl:px-10 py-1.5 flex w-full items-center justify-between">
              <a className="text-3xl font-bold font-heading" href="#">
                <Image className="h-8vh w-15vh" src={logo} alt="logo" />
              </a>
              {/* Nav Links  */}
              {!isMenuOpen && (
                <ul className="hidden xl:flex px-4 mx-auto font-heading space-x-12 ">
                  <Menu menuList={menuList} />
                </ul>
              )}

              {/* Header Icons  */}
              <div className=" flex items-center space-x-4 ">
                <div className="space-x-2 hidden sm:flex xl:w-44 justify-end">
                  <Form session={session} />
                </div>
                {/* Search Icon */}
                <a
                  className="hover:text-gray-200 hover:scale-150 transition-all"
                  href="#"
                  onClick={toggleSearch}
                >
                  {!isSearchOpen ? (
                    <BsSearch size={24} />
                  ) : (
                    <AiOutlineClose size={24} />
                  )}
                </a>
              </div>
            </div>
            {/* Responsive navbar  */}
            <a
              className="navbar-burger self-center mr-12 xl:hidden"
              href="#"
              onClick={toggleMenu}
            >
              {!isMenuOpen ? (
                <FiMenu size={24} />
              ) : (
                <AiOutlineClose size={24} />
              )}
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
          <div className="search bg-banner-color justify-center flex absolute w-full">
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
              <div className="gap-10 m-10 flex flex-col ">
                <Menu menuList={menuList} />
              </div>
              <div className="sm:hidden gap-3 flex flex-col items-center ">
                <Form session={session} />
              </div>
            </ul>
          </div>
        </motion.div>
      )}
    </>
  );
}

//function of Searching
function SearchBar() {
  return (
    <>
      <form className="w-full p-7 md:w-80percent hover:scale-100 transition-all ">
        <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <BsSearch size={18} color="gray" />
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
