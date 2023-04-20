import { React, useState } from "react";
import Pagination from "./pagination";
import Image from "next/image";
import rupp from "../images/rupp.png";
import ReactStars from "react-stars";

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
    <>
      <section
        className="justify-start flex flex-col shadow-md w-fit 
                  transition-all duration-150 cursor-pointer hover:scale-105 rounded-md "
      >
        <div className="h-64 w-60 rounded-md flex flex-col shadow-lg shadow-indigo-500/40">
          <div className="h-3/5 relative">
            <div className="rounded-t h-full w-full flex">
              <Image className="h-32 w-32 m-auto" src={rupp} alt="logo_sala" />
            </div>
            <div
              className={
                !isClickFav
                  ? "p-0.5 w-fit rounded-md absolute border-2 outline-none right-2 top-2 hover:bg-slate-400 "
                  : "p-0.5 w-fit rounded-md border-2 outline-none  bg-black absolute right-2 top-2"
              }
              onClick={toggleClick}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke={!isClickFav ? "black" : "white"}
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
            </div>
          </div>
          <div className="flex flex-col w-full h-2/5 text-center  justify-center bg-slate-500 rounded-b-md">
            <span className="font-kh font-semibold tracking-wider">
              សាកលវិទ្យាល័យភូមិន្ទភ្នំពេញ
            </span>
            {/* rating star */}
            <div className="flex justify-center">
              <ReactStars count={5} size={18} />
              {/* <svg
                aria-hidden="true"
                className="w-4 h-4 text-yellow-300"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <title>First star</title>
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg
                aria-hidden="true"
                className="w-4 h-4 text-yellow-300"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <title>Second star</title>
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg
                aria-hidden="true"
                className="w-4 h-4 text-yellow-300"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <title>Third star</title>
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg
                aria-hidden="true"
                className="w-4 h-4 text-yellow-300"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <title>Fourth star</title>
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg
                aria-hidden="true"
                className="w-4 h-4 text-yellow-300"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <title>Fifth star</title>
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg> */}
            </div>
            {/* location */}
            <div className="flex justify-center">
              <svg
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
              <span className="font-kh">ភ្នំពេញ</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
