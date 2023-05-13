import { useSession, signIn, signOut } from "next-auth/react";
import { useState } from "react";

import Link from "next/link";
import { toggleContent } from "../togglecontent";

//icons and images
import Image from "next/image";
import profile from "../../images/pf.png";
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from "react-icons/md";
import { HiOutlineArrowLeftOnRectangle } from "react-icons/hi2";
import { AiOutlineUser } from "react-icons/ai";

export default function Form({ session }) {
  const { status } = useSession();
  const [isDropdownProfile, setDropdownProfile] = useState(false);
  const ToggleProfile = () => {
    setDropdownProfile(!isDropdownProfile);
    toggleContent("search");
  };

  console.log(status)
  return (
    <>
      {status == "unauthenticated" && (
        <>
          <Link href="/account/signup">
            <div className="item-center justify-center text-center m-auto ">
              <button className="m-auto ">
                <div className="relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500">
                  <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] group-hover:translate-y-0 group-hover:translate-x-0"></span>
                  <span className="relative block w-20 py-2 bg-[#1A2238] border border-current">
                    Sign up
                  </span>
                </div>
              </button>
            </div>
          </Link>

          <div className="item-center justify-center text-center m-auto">
            <button className="m-auto " onClick={() => signIn()}>
              <div className="relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500">
                <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] group-hover:translate-y-0 group-hover:translate-x-0"></span>
                <span className="relative block w-20 py-2 bg-[#1A2238] border border-current">
                  Log in
                </span>
              </div>
            </button>
          </div>
        </>
      )}
      {status === "authenticated" && (
        <>
          <div className="flex items-center md:order-2 relative ">
            <button
              onClick={ToggleProfile}
              type="button"
              className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-gray-300 dark:focus:ring-gray-600"
              aria-expanded="false"
            >
              <Image
                className="w-9 h-9 rounded-full"
                src={profile}
                alt="userphoto"
              />
            </button>
            {isDropdownProfile && (
              <div
                className="min-w-[12rem] transition ease-out duration-100  dropdown absolute z-50 top-10 right-0 text-base divide-y divide-gray-100 rounded-lg  bg-gray-900 border-2 border-gray-600 "
                id="user-dropdown"
              >
                <div className="px-4 py-3 rounded-t-lg">
                  <span className="block text-sm  font-bold text-white pb-1">
                    {!session ? (
                      <span className="font-khBtB">ទិន្ន័យមិនទាន់មាន</span>
                    ) : (
                      session.name
                    )}
                  </span>
                  <span className="block text-sm text-gray-200">
                    {!session ? (
                      <span className="font-khBtB">ទិន្ន័យមិនទាន់មាន</span>
                    ) : (
                      session.email
                    )}
                  </span>
                </div>
                <ul className="py-2 px-4 ">
                  <li className="flex m-auto items-center  w-full hover:border-r-2 border-red-300">
                    <AiOutlineUser />
                    <Link
                      href={`../account/${
                        !session ? null : session.id
                      }/profile`}
                    >
                      <div className="font-kh block px-4 py-2 text-sm  text-gray-200 ">
                        គណនី
                      </div>
                    </Link>
                  </li>
                  <li className="flex m-auto items-center  w-full hover:border-r-2 border-red-400">
                    <MdOutlineFavoriteBorder />
                    <span className="font-kh block px-4 py-2 text-sm text-gray-200 hover:text-red-400 ">
                      រក្សាទុក
                    </span>
                  </li>
                  <li className="flex m-auto items-center  w-full hover:border-r-2 border-red-400">
                    <HiOutlineArrowLeftOnRectangle />
                    <a
                      href="#"
                      onClick={() => signOut()}
                      className="font-kh block px-4 py-2 text-sm text-gray-200 hover:text-red-400 "
                    >
                      ចាកចេញ
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
}
