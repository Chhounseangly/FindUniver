import Layout from "@/components/layout";
import Image from "next/image";
import accounting from "../../../images/majors/accounting.jpg";
import cs from "../../../images/majors/CS.png";
import interiorDesign from "../../../images/majors/interiorDesign.jpg";
import ite from "../../../images/majors/ite.jpg";
import hrm from "../../../images/majors/hrm.jpg";
import architectural from "../../../images/majors/architectural.jpg";
import Link from "next/link";
import { useState } from "react";
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

export default function Home() {
  return (
    <Layout icon={`/icon.png`} title={"ទំព័រដើម"}>
      <div className="h-screen w-full bg-contain ">
        <div className="px-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:px-16 -top-10 ">
          {majors.map((item, index) => (
            <Link key={index} href={`majors`}>
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
          ))}
        </div>
      </div>
    </Layout>
  );
}
