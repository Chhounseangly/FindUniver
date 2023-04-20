import { motion } from "framer-motion";
import Image from "next/image";
import accounting from "../images/majors/accounting.jpg";
import cs from "../images/majors/CS.png";
import interiorDesign from "../images/majors/interiorDesign.jpg";
import ite from "../images/majors/ite.jpg";
import hrm from "../images/majors/hrm.jpg";
import architectural from "../images/majors/architectural.jpg";
import Link from "next/link";
import { toggleContent } from "@/components/togglecontent";
import React, { useState } from "react";

//list of majors
const majors = [
  {
    img: ite,
    majorstypeKH: "បរិញ្ញាបត្រវិស្វកម្មេព៍ត័មានវិទ្យា",
    majorstypeEN: "Bachelor of IT Engineering",
  },
  {
    img: cs,
    majorstypeKH: "បរិញ្ញាបត្រវិទ្យាសាស្ត្រ​កុំព្យូទ័រ",
    majorstypeEN: "Bachelor of Computer Science",
  },
  {
    img: accounting,
    majorstypeKH: "បរិញ្ញាបត្រគណនេយ្យ",
    majorstypeEN: "Bachelor of Accounting",
  },
  {
    img: interiorDesign,
    majorstypeKH: "បរិញ្ញាបត្ររចនាផ្ទៃខាងក្នុង",
    majorstypeEN: "Bachelor of Interior Design",
  },
  {
    img: hrm,
    majorstypeKH: "បរិញ្ញាបត្រគ្រប់គ្រងធនធានមនុស្ស",
    majorstypeEN: "Bachelor of Human Resource Management",
  },
  {
    img: architectural,
    majorstypeKH: "បរិញ្ញាបត្ររចនាផ្ទៃខាងក្នុង",
    majorstypeEN: "Bachelor of Architectural Design",
  },
];

export default function Majors() {
  const [filterValue, setFilterValue] = useState("");

  // filter list by name
  const filteredList = majors.filter((item) =>
    item.majorstypeKH.toLowerCase().includes(filterValue.toLowerCase())
  );
  const FilterValue = (e) => {
    setFilterValue(e.target.value);
  };

  return (
      <div className="w-full">
        <div className="py-5 bg-background w-full h-40">
        <form className="p-7 sm:w-11/12 md:w-9/12 hover:scale-100 transition-all m-auto ">
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
              className="block w-full p-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 font-kh"
              placeholder="ស្វែងរក​ជំនាញ..."
              required
              value={filterValue}
              onChange={FilterValue}
            />
            {/* <button
                type="submit"
                className="text-white absolute right-1.5 bottom-1 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 font-kh">
                ស្វែងរក​
              </button> */}
          </div>
        </form>
        </div>
        
        <div className="px-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:px-16 -top-10 relative ">
          {filteredList.filterValue === "" ? (
            ""
          ) : !filteredList.length ? (
            <div className="font-kh text-2xl text-white">មិនមាទិន្នន័យ</div>
          ) : (
            filteredList.map((item, index) => (
              <Link key={index} href={"university"}>
                <div
                  className=" shadow-md 
                transition-all duration-200
                cursor-pointer hover:scale-105 rounded-lg h-full bg-white border border-gray-200 dark:bg-gray-800 dark:border-gray-700 "
                >
                  <Image
                    className="h-70percent w-full rounded-t-lg"
                    src={item.img}
                    alt={item.img}
                    priority={true}
                  />
                  <div className="h-30percent flex flex-col justify-center ml-3 py-2">
                    <h5 className="text-base tracking-wider text-gray-900 dark:text-white font-khBtB">
                      {item.majorstypeKH}
                    </h5>
                    <h5 className="text-base tracking-wide text-gray-900 dark:text-white font-khBtB">
                      {item.majorstypeEN}
                    </h5>
                  </div>
                </div>
              </Link>
            ))
          )}
        </div>
      </div>
  );
}

// function Major({ major }) {
//   return (
//     <>
//       {major.map((majors, index) => (
//         <Link key={index} href={"university"}>
//           <div
//             className=" shadow-md
//                   transition-all duration-200
//                   cursor-pointer hover:scale-105 rounded-lg h-full bg-white border border-gray-200 dark:bg-gray-800 dark:border-gray-700 "
//           >
//             <Image
//               className="h-70percent w-full rounded-t-lg"
//               src={majors.img}
//               alt={majors.img}
//               priority={true}
//             />
//             <div className="h-30percent flex flex-col justify-center ml-3 py-2">
//               <h5 className="text-base tracking-wider text-gray-900 dark:text-white font-khBtB">
//                 {majors.majorstypeKH}
//               </h5>
//               <h5 className="text-base tracking-wide text-gray-900 dark:text-white font-khBtB">
//                 {majors.majorstypeEN}
//               </h5>
//             </div>
//           </div>
//         </Link>
//       ))}
//     </>
//   );
// }
