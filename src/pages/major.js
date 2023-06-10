import Image from "next/image";
import Link from "next/link";
// import { toggleContent } from "@/pages/components/togglecontent";
import React, { useEffect, useState } from "react";

//icons
import { BsSearch } from "react-icons/bs";
import Layout from "@/components/layout";
//list of majors
const majors = [
  {
    img: "/majors/ite.jpg",
    majorstypeKH: "បរិញ្ញាបត្រវិស្វកម្មេព៍ត័មានវិទ្យា",
    majorstypeEN: "Bachelor of IT Engineering",
  },
  {
    img: "/CS.png",
    majorstypeKH: "បរិញ្ញាបត្រវិទ្យាសាស្ត្រ​កុំព្យូទ័រ",
    majorstypeEN: "Bachelor of Computer Science",
  },
  {
    img: "/majors/accounting.jpg",
    majorstypeKH: "បរិញ្ញាបត្រគណនេយ្យ",
    majorstypeEN: "Bachelor of Accounting",
  },
  {
    img: "/majors/interiorDesign.jpg",
    majorstypeKH: "បរិញ្ញាបត្ររចនាផ្ទៃខាងក្នុង",
    majorstypeEN: "Bachelor of Interior Design",
  },
  {
    img: "/majors/hrm.jpg",
    majorstypeKH: "បរិញ្ញាបត្រគ្រប់គ្រងធនធានមនុស្ស",
    majorstypeEN: "Bachelor of Human Resource Management",
  },
  {
    img: "/majors/architectural.jpg",
    majorstypeKH: "បរិញ្ញាបត្ររចនាផ្ទៃខាងក្នុង",
    majorstypeEN: "Bachelor of Architectural Design",
  },
];
const imageStyle = {
  borderRadius: ".5rem .5rem 0  0",
};

function Majors() {
  const [resultSearch, setResultSearch] = useState("");
  const [majorFound, setMajorFound] = useState([]);

  // filter list by name
  function majorSeach() {
    if (majors) {
      if (resultSearch.length >= 2) {
        var majorSearch = new RegExp(resultSearch.split("").join(".*"), "i");
        return majors?.filter((data) => {
          if (
            data.majorstypeEN.match(majorSearch) ||
            data.majorstypeKH.match(majorSearch)
          ) {
            return data;
          }
        });
      }
      return majors;
    }
  }

  const FilterValue = (e) => {
    setResultSearch(e.target.value);
  };

  useEffect(() => {
    setMajorFound(majorSeach());
  }, [FilterValue]);

  return (
    <div className="w-full">
      <div className="py-5 bg-background w-full h-40">
        <form className="form p-7 sm:w-11/12 md:w-9/12 hover:scale-100 transition-all m-auto ">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <BsSearch size={18} color="gray" />
            </div>
            <input
              type="search"
              className="font-khBtB block w-full p-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  font-kh"
              placeholder="ស្វែងរក​ជំនាញ..."
              required
              value={resultSearch}
              onChange={FilterValue}
            />
          </div>
        </form>
      </div>

      <div className="px-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:px-16 -top-10 relative majorBody">
        {majorFound.map((item, index) => (
          <Link key={index} href={`majors/${1}`}>
            <div
              className=" shadow-md 
                transition-all duration-200 
                cursor-pointer hover:scale-105 rounded-lg h-full bg-white border border-gray-200 dark:bg-gray-800 dark:border-gray-700 "
            >
              <Image
                style={imageStyle}
                width={500}
                height={200}
                src={item.img}
                alt={item.img}
                priority
              />
              <div className="h-30percent flex flex-col ml-3 py-2">
                <h5 className="text-base tracking-wide text-gray-900 dark:text-white font-khBtB">
                  {item.majorstypeKH}
                </h5>
                <h5 className="text-base tracking-wide text-gray-900 dark:text-white font-khBtB">
                  {item.majorstypeEN}
                </h5>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
export default () => (
  <Layout title={"មុខជំនាញ"} icon={`/icon.png`}>
    <Majors />
  </Layout>
);
