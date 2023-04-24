import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { toggleContent } from "./togglecontent";

import Image from "next/image";
import logo from "../images/logo.png";
import profile from "../images/profile.png";

//icons
import { BsSearch } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from "react-icons/md";
import { HiOutlineArrowLeftOnRectangle } from "react-icons/hi2";

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
    toggleContent("form");
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
                  <Menu menuList={menuList} />
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
                  {!isSearchOpen ? (
                    <BsSearch size={24} />
                  ) : (
                    <AiOutlineClose size={24} />
                  )}
                </a>

                {/* Sign In / Register   */}
                {!isMenuOpen && (
                  <div className="space-x-2 hidden sm:flex">
                    {Authentication()}
                  </div>
                )}
                {/* {Profile()} */}
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
              <Menu menuList={menuList} />
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

//sign in and sign up
function Authentication() {
  const authentication = [
    { name: "Sign Up", href: "/authentications/signup" },
    { name: "Log in", href: "/authentications/login " },
  ];
  return (
    <>
      {authentication.map(( name,index ) => (
        <Link href={name.href} key={index}>
          <div className="item-center justify-center text-center m-auto">
            <button className="  m-auto inline-flex p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
              <span className=" m-auto  w-24 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                {name.name}
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
              <MdOutlineFavoriteBorder />
              <a
                href="#"
                className="font-kh block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >
                រក្សាទុក
              </a>
            </li>
            <li className="flex m-auto items-center">
              <HiOutlineArrowLeftOnRectangle />
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
