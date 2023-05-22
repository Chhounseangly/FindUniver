import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Moeys from "../../../../images/moeys.png";

import { BsTelephone, BsLink45Deg } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { TbMap2 } from "react-icons/tb";


function ReadMore({ children }) {
  const text = children;
  const [showFullText, setShowFullText] = useState(false);

  if (text.length <= 499) {
    return <p>{text}</p>;
  }

  const truncatedText = showFullText ? text : `${text.slice(0, 300)}`;
  const toggleShowFullText = () => setShowFullText((show) => !show);
  return (
    <>
      <p>
        {truncatedText}
        <button
          className="font-bold font-kh text-red-500"
          onClick={toggleShowFullText}
        >
          {showFullText ? "...Read Less" : "...Read More"}
        </button>
      </p>
    </>
  );
}

export default function detail({ university }) {
  let api = "http://localhost:8000/api";
  // const router = useRouter();
  // const { id } = router.query;

  // const [university, setUniversity] = useState();
  // const [isLoading, setIsLoading] = useState(true);

  // function fetchUniversity(id) {
  //     fetch(api+'/universities/'+id, {})
  //         .then(res => res.json())
  //         .then(res => {
  //             setUniversity(res.data);
  //             setIsLoading(false);
  //             console.log(res.data);
  //         })
  //         .catch(err => console.log(err));
  // }

  // useEffect(() => {
  //     if (router.isReady) {
  //         fetchUniversity(id);
  //     }
  // }, [router.isReady]);

  // if (isLoading) return (
  //     <div className="dark:text-gray-50">Loading....</div>
  // )

  return (
    <main className="content">
      {/* banner */}
      <section>
        <div className="flex py-2 px-2 gap-1 ">
          <div className="flex justify-center w-1/2 h-80">
            <img
              className="object-contain rounded-md"
              src={api + "/images/" + university.images}
              alt="banner"
            />
          </div>
          <div className="relative w-1/2 h-80 bg-gray-600 rounded-md">
            <div className="w-14 absolute top-2 right-4">
              <Image className="object-contain" src={Moeys} alt="Moeys" />
            </div>
            <div className="w-1/2 text-white font-kh text-banner flex flex-col text-center absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4 ">
              <img
                className="w-1/2 m-auto"
                src={api + "/images/" + university.logo}
                alt="logouniversity"
              />
              <span className="tracking-wide dark:text-gray-50">
                {university.name_km}
              </span>
            </div>
          </div>
        </div>
      </section>
       {/* ព័ត៍មានទូទៅ */}
       <div className="py-4 px-5 min-h-[14vw]">
        <h1 className="font-kh font-bold text-xl border-y-2 text-center py-2 px-2">
          ព័ត៍មានទូទៅ
        </h1>
        <div className="h-fit py-5  ">
          <span className="font-khBtB text-base text-paragraph py-4 -tracking-wide">
            <ReadMore>{university.about_km}</ReadMore>
          </span>
        </div>
      </div>
      {/* sub navbar
      <div className="p-2 m-2 border-y-2 item-center">
        <ul className="flex gap-2 font-kh cursor-pointer flex-wrap">
          {SubMenu.map((name, index) => (
            <li
              key={index}
              className={
                activeSubMenuIndex === index
                  ? "border-y-2  border-red-500 p-2 text-red-500 font-semibold"
                  : "p-2 border-y-2 bg-opacity-0 transition cursor-pointer hover:border-y-2 hover:border-red-400"
              }
              onClick={() => handleSubMenuClick(index)}
            >
              {name.name}
            </li>
          ))}
        </ul>
      </div> */}
      {/* body */}
      <div className=" flex flex-col h-fit gap-2 ">
        {/* content */}
        <div className="w-full lg:w-full h-82vh">
          {/* <BodyContent activeSubMenuIndex={activeSubMenuIndex} /> */}
        </div>
        {/* contact */}
        <div className="h-fit mt-5 font-kh rounded bg-footer pb-5 ">
          <h1 className="text-center text-2xl font-bold py-2 border-b-2">
            ទំនាក់ទំនង
          </h1>

          <div className=" flex flex-row flex-wrap justify-evenly py-5 gap-2 md:justify-around">
            {/* number phone */}
            <div className="md:flex-col">
              <div className="flex items-center justify-center gap-2 pb-2">
                <BsTelephone size={24} />
                <span className="text-center font-bold">លេខទូរស័ព្ច</span>
              </div>
              <div className="flex flex-col divide-y divide-slate-500">
                <span className="p-2 text-center">
                  <a href={"tel:" + university.phone}>
                    {university.phone}
                  </a>
                </span>
              </div>
            </div>

            {/* email */}
            <div className="md:flex-col">
              <div className="flex items-center justify-center pb-2 gap-2">
                <HiOutlineMail size={24} />
                <span className="text-center font-bold">អ៊ីមែល</span>
              </div>
              <div className="flex flex-col divide-y divide-slate-500">
                <span className="p-2 text-center">
                  <a href={"mailto:" + university.email}>
                    {university.email}
                  </a>
                </span>
              </div>
            </div>

            {/* website */}
            <div className="md:flex-col">
              <div className="flex items-center justify-center gap-2 pb-2">
                <BsLink45Deg size={24} />
                <span className="text-center font-bold">វេបសាយ</span>
              </div>
              <div className="flex flex-col divide-y divide-slate-500">
                <span className="p-2 text-center font-bold">
                  <a
                    href={"http://" + university.website}
                    target="_blank"
                  >
                    {university.website}
                  </a>
                </span>
              </div>
            </div>

            {/* location */}
            <div className="md:flex-col">
              <div className="flex items-center pb-2 gap-2 justify-center">
                <TbMap2 size={24} />
                <span className="text-center font-bold">ទីតាំង</span>
              </div>
              <div className="flex flex-col flex-wrap divide-y divide-slate-500 ">
                <span className="p-2  text-center ">
                  <iframe
                    className="w-[20rem] h-[20rem]"
                    src={university?.university_branches[0]?.location}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

     
    </main>
  );
}

export async function getStaticPaths() {
  let data = [];
  // Call an external API endpoint to get posts
  await fetch("http://127.0.0.1:8000/api/universities")
    .then((res) => res.json())
    .then(async (res) => {
      data = await res.data;
    })
    .catch((error) => console.log(error));

  // Get the paths we want to prerender based on posts
  const paths = data.map((post) => ({
    params: { id: post.id.toString() },
  }));

  // { fallback: false } means other routes should 404
  return { paths, fallback: false };
}

//getStaticProps fetch Data
export async function getStaticProps(context) {
  const { params } = context;
  const id = params.id;

  let universitiesData = [];

  //fetch data of university
  await fetch(`http://127.0.0.1:8000/api/universities/${id}`)
    .then((res) => res.json())
    .then((res) => {
      universitiesData = res.data;
    })
    .catch((error) => console.log(error));
  return {
    props: {
      university: universitiesData,
    },
  };
}
