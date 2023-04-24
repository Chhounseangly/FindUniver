import { React, useState } from "react";
import Pagination from "./pagination";
import Image from "next/image";
import rupp from "../images/rupp.png";
// import ReactStars from "react-stars";


const ReactStars = dynamic(() => import('react-stars'), { ssr : false });

// icons
import { GrLocation } from "react-icons/gr";
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from "react-icons/md";
import dynamic from "next/dynamic";

export default function Body() {
  return (
    <div className="w-11/12 sm:w-4/5 flex flex-col m-auto">
      <div className="flex flex-col">
        <span className="font-kh text-lg font-bold pt-5">សាកលវិទ្យាល័យ</span>
        <span className="font-kh pb-4">មានចំនួន</span>
      </div>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 sm:gap-x-10 md:grid-cols-3 lg:grid-cols-4 m-auto">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      {Pagination()}
    </div>
  );
}

function Card() {
  const [isClickFav, setClickFav] = useState(false);
  const toggleClick = () => {
    setClickFav(!isClickFav);
  };

  return (
    <section
      className="justify-start flex flex-col shadow-md w-fit 
                  transition-all duration-150 cursor-pointer hover:scale-105 rounded-md "
    >
      <div className="h-64 w-60 rounded-md flex flex-col shadow-lg shadow-indigo-500/40">
        <div className="h-3/5 relative">
          <div className="rounded-t h-full w-full flex">
            <Image className="h-32 w-32 m-auto" src={rupp} alt="logo_sala" />
          </div>
          <div onClick={toggleClick} className="group/txtshow ">
            {!isClickFav ? (
              <MdOutlineFavoriteBorder
                size={22}
                className="absolute right-3 top-3"
              />
            ) : (
              <MdOutlineFavorite
                size={22}
                color="red"
                className="absolute right-3 top-3 "
              />
            )}

            <div className="hidden group-hover/txtshow:block absolute top-9 right-3 text-txtFav text-white font-bold bg-gray-700 p-2 rounded-md transition-all duration-150 select-none">
              Add to favorite
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full h-2/5 text-center  justify-center bg-slate-500 rounded-b-md">
          <span className="font-kh font-semibold tracking-wider select-none ">
            សាកលវិទ្យាល័យភូមិន្ទភ្នំពេញ
          </span>
          {/* rating star */}
          <div className="flex justify-center">
            <ReactStars count={5} size={18} />
          </div>
          {/* location */}
          <div className="flex justify-center items-center gap-1">
            <GrLocation size={18} />
            <span className="font-kh  select-none">ភ្នំពេញ</span>
          </div>
        </div>
      </div>
    </section>
  );
}
