import { signIn } from "next-auth/react";

import { React, useEffect, useState } from "react";
import Pagination from "./pagination";

// import ReactStars from "react-stars";

const ReactStars = dynamic(() => import("react-stars"), { ssr: false });

// icons
import { GrLocation } from "react-icons/gr";
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from "react-icons/md";
import dynamic from "next/dynamic";

function Body({ session, universitiesData }) {
  const [isClickFav, setClickFav] = useState(false);

  //check for favorite
  const toggleClick = () => {
    if (!session) {
      signIn();
    } else setClickFav(!isClickFav);
  };
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 12;

  const onPageChange = (page) => {
    setCurrentPage(page);
  };
  const paginatedPosts = paginate(universitiesData, currentPage, pageSize);

  return (
    <div className="w-11/12 sm:w-4/5 flex flex-col m-auto">
      <div className="flex flex-col">
        <span className="font-kh text-lg font-bold pt-5">សាកលវិទ្យាល័យ</span>
        <span className="font-kh pb-4">
          មានចំនួន: {universitiesData.length}
        </span>
      </div>
      {!universitiesData.length ? (
        <div className="flex justify-center items-center  min-h-screen w-full">
          <p className="text-red-500 text-xl font-bold">Empty Data</p>
        </div>
      ) : (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 sm:gap-x-10 md:grid-cols-3 lg:grid-cols-4 m-auto min-h-screen">
          {paginatedPosts.map((university) => {
            return (
              <section
                className="justify-start flex flex-col shadow-md w-fit  h-fit
                          transition-all duration-150 cursor-pointer hover:scale-105 rounded-md"
                key={university.id}
              >
                <div className="h-64 w-60 rounded-md flex flex-col shadow-lg shadow-indigo-500/40">
                  <div className="h-3/5 relative">
                    <div className="rounded-t h-full w-full flex">
                      <img
                        className="h-32 w-32 m-auto"
                        src={university.logo}
                        alt={university.name_km}
                      />
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

                      <span className="hidden group-hover/txtshow:block absolute top-9 right-3  text-white bg-gray-900 p-2 text-xs rounded-md transition-all duration-150 select-none font-kh">
                        រក្សាទុក
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col w-full h-2/5 text-center  justify-center bg-slate-500 rounded-b-md">
                    <span className="font-kh font-semibold tracking-wider select-none ">
                      {university.name_km}
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
          })}
        </div>
      )}
      {/* <Pagination universityItems={universitiesData} /> */}
      <Pagination
        items={universitiesData.length} // 100
        currentPage={currentPage} // 1
        pageSize={pageSize} // 10
        onPageChange={onPageChange}
      />
    </div>
  );
}

export const paginate = (items, currentPage, pageSize) => {
  const startIndex = (currentPage - 1) * pageSize;
  return items.slice(startIndex, startIndex + pageSize);
};

export default Body;
