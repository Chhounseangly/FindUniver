import { GrLocation } from "react-icons/gr";
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from "react-icons/md";
import Link from "next/link";
import dynamic from "next/dynamic";
import { signIn, useSession } from "next-auth/react";
import { useState } from "react";

// import ReactStars from "react-stars";

const ReactStars = dynamic(() => import("react-stars"), { ssr: false });

export default function Card({ university }) {
  const { data: session } = useSession();
  let api = "http://127.0.0.1:8000/api";

  const [isClickFav, setClickFav] = useState(false);

  //check for favorite
  const toggleClick = () => {
    if (!session) {
      signIn();
    } else setClickFav(!isClickFav);
  };

  return (
    <section
      className="justify-start bg-white flex flex-col shadow-md w-fit h-fit
  transition-all duration-150 cursor-pointer hover:scale-105 rounded-md"
      key={university.id}
    >
      <Link href={`/detail/${university.id}`}>
        <div className="h-64 w-60 rounded-md flex flex-col shadow-lg shadow-indigo-500/40">
          <div className="h-3/5 relative">
            <div className="rounded-t h-full w-full flex">
              <img
                className="h-32 max-w-[8rem]  m-auto"
                src={api + "/images/" + university?.logo}
                alt={university?.name_km}
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
            <div className="flex justify-center w-full h-7">
              <ReactStars count={5} size={18} />
            </div>
            {/* provinces or city */}
            <div className="flex justify-center items-center gap-1">
              <GrLocation size={18} />
              {university.university_branches.map((location) => {
                if (!location) {
                  return (
                    <span className="font-kh  select-none">
                      ទិន្ន័យមិនទាន់មាន
                    </span>
                  );
                }
                return (
                  <span className="font-kh  select-none" key={location.id}>
                    {location.address_km}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </Link>
    </section>
  );
}
