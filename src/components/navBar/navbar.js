import React, { useState } from "react";
import Image from "next/image";
import logo from "../../images/logo.png";

//icons
import { BsSearch } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import Form from "../accountAuth/profile";
import { toggleContent } from "../togglecontent";
import Menu from "./menuList";
import SearchBar from "./search";
import { Dialog, Slide } from "@mui/material";

//main NavBar
export default function NavBar() {
  const [isSearchOpen, setSearchOpen] = useState(false);
  const toggleSearch = () => {
    setSearchOpen(!isSearchOpen);
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
      <header className="flex border-b-2 border-slate-600 bg-gray-900 min-h-[5em] w-full items-center">
        <div className="flex-1 xl:flex-none m-1 md:ml-7 w-auto h-auto">
          <Image priority width={130} height={0} src={logo} alt="logo" />
        </div>
        {/* Nav Links  */}
        {!isMenuOpen && (
          <ul className="hidden xl:flex px-4 mx-auto font-heading space-x-12">
            <Menu />
          </ul>
        )}
        {/* Header Icons  */}
        <div className=" flex flex- space-x-4 items-center m-2 md:mr-7 ">
          <div className="space-x-2 flex justify-end  min-w-[11rem]">
            <Form />
          </div>
          {/* Search Icon */}
          <div className="hover:text-gray-200 hover:scale-150 transition-all min-w-[1.5rem]  cursor-pointer">
            {!isSearchOpen ? (
              <BsSearch onClick={toggleSearch} color="white" size={24} />
            ) : (
              <Dialog
                open={isSearchOpen}
                maxWidth={"xl"}
                PaperProps={{
                  style: {
                    backgroundColor: "ButtonFace",
                  },
                  sx: {
                    width: "100%",
                    height: "80%",
                  },
                }}
                sx={{
                  backdropFilter: "blur(1px)",
                }}
              >
                <section className="flex justify-between">
                  <SearchBar />
                  <AiOutlineClose
                    className="mt-3 mr-3 cursor-pointer"
                    onClick={toggleSearch}
                    size={32}
                  />
                </section>
              </Dialog>
            )}
          </div>
          {/* Menu */}
          <button
            className="navbar-burger mr-12 xl:hidden items-end "
            onClick={toggleMenu}
          >
            {!isMenuOpen ? (
              <FiMenu color="white" size={24} />
            ) : (
              <FiMenu color="white" size={24} />
            )}
          </button>
        </div>
      </header>

      {/* reposive toggleMenu */}
      {isMenuOpen && (
        <div className="bg-gray-900 h-screen flex justify-center menuResponsive  ">
          <ul className="w-full flex flex-col font-heading text-white text-center space-y-10">
            <div className="gap-10 m-10 flex flex-col ">
              <Menu />
            </div>
          </ul>
        </div>
      )}
    </>
  );
}
