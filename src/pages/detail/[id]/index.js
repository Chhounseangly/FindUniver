import React, { useEffect, useState } from "react";
import SliderPrograms from "@/components/university/sliderprograms";
import SliderCurriculum from "@/components/university/sildercurriculum";
import Layout from "@/components/layout";
import Banner from "@/components/banner";

import { BsTelephone, BsLink45Deg } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { TbMap2 } from "react-icons/tb";
import Image from "next/image";

//Read More and Less for ព័ត៍មានទូទៅ
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

// const Images = [
//   {
//     img: "https://amateurphotographer.com/wp-content/uploads/sites/7/2022/09/google-pixel-6a-cameras-photo-joshua-waller-2560-P9150514.jpg",
//   },
//   {
//     img: "https://amateurphotographer.com/wp-content/uploads/sites/7/2022/09/google-pixel-6a-cameras-photo-joshua-waller-2560-P9150514.jpg",
//   },
//   {
//     img: "https://amateurphotographer.com/wp-content/uploads/sites/7/2022/09/google-pixel-6a-cameras-photo-joshua-waller-2560-P9150514.jpg",
//   },
//   {
//     img: "https://cdn.shopify.com/s/files/1/0428/9455/7352/collections/Categoria_Pixel_x600_e5557e9e-3e64-47fd-9bc9-460ecbfc44e8_grande.webp?v=1659455872",
//   },
//   {
//     img: "https://amateurphotographer.com/wp-content/uploads/sites/7/2022/09/google-pixel-6a-cameras-photo-joshua-waller-2560-P9150514.jpg",
//   },
//   {
//     img: "https://amateurphotographer.com/wp-content/uploads/sites/7/2022/09/google-pixel-6a-cameras-photo-joshua-waller-2560-P9150514.jpg",
//   },
//   {
//     img: "https://amateurphotographer.com/wp-content/uploads/sites/7/2022/09/google-pixel-6a-cameras-photo-joshua-waller-2560-P9150514.jpg",
//   },
// ];

const faculties = [
  {
    facultiesName: "ថ្នាក់បរិញ្ញាបត្រ",
    departments: ["1", "2", "3", "1", "2", "3", "1", "2", "3"],
  },
  { facultiesName: "a", departments: ["2", "3", "4"] },
  { facultiesName: "b", departments: ["5", "4", "5"] },
];
// Define your body content component
const BodyContent = ({ activeSubMenuIndex, universitiesData, onChange }) => {
  const [curriculum, setCurriculum] = useState();
  let curriculumId = (e) => {
    setCurriculum(e);
    onChange(e);
  };

  switch (activeSubMenuIndex) {
    // ថ្នាក់បរិញ្ញាបត្រ
    case 0:
      return (
        <>
          <div className="p-2 md:p-2 m-auto">
            <SliderPrograms
              facultiesData={universitiesData}
              curriculumId={curriculumId}
            />
          </div>
        </>
      );
    // កម្មវិធីសិក្សា
    case 1:
      return (
        <div>
          <SliderCurriculum
            carriculumData={universitiesData}
            departmentId={curriculum}
          />
        </div>
      );

    // តម្លៃសិក្សារ
    case 2:
      return (
        <div className="grid grid-cols-5 gap-7 p-5">
          {/* {Images.map((img, index) => (
            <img
              className="h-auto transition ease-in-out delay-150   hover:-translate-y-1 hover:scale-110 duration-100 cursor-pointer"
              src={img.img}
              key={index}
              alt={img.img}
            />
          ))} */}
        </div>
      );
  }
};

function University({ universitiesData, api }) {
  const SubMenu = [
    { name: "ថ្នាក់បរិញ្ញាបត្រ" },
    { name: "កម្មវិធីសិក្សា" },
    { name: "រូបភាព" },
  ];
  const [activeSubMenuIndex, setActiveSubMenuIndex] = useState(0);
  // Define the click handler function
  const handleSubMenuClick = (index) => {
    setActiveSubMenuIndex(index);
  };

  const onChange = () => {
    setActiveSubMenuIndex(1);
  };

  return (
    <main className="content">
      <section>
        <Banner
          text={universitiesData.name_km}
          logo={
            <Image
              width={300}
              quality={100}
              height={0}
              className="max-w-[13vw] w-fit h-[13vw] m-auto "
              src={api + "/image/" + universitiesData.logo}
              alt= {`${universitiesData}`}
            />
          }
        >
          <Image
            width={1000}
            height={300}
            quality={100}
            priority
            className="rounded-md"
            src={api + "/image/" + universitiesData.images}
            alt= {`${universitiesData}`}

          />
        </Banner>
      </section>
      {/* ព័ត៍មានទូទៅ */}
      <div className="py-4 px-5 min-h-[14vw]">
        <h1 className="font-khBtB text-white w-fit text-xl border-y-2 py-2 px-2">
          ព័ត៍មានទូទៅ
        </h1>
        <div className="h-fit py-5">
          <span className="font-khBtB text-base text-white py-4 -tracking-wide">
            <ReadMore>{universitiesData.about_km}</ReadMore>
          </span>
        </div>
      </div>
      {/* sub navbar */}
      <div className="p-2 m-2 border-y-2 item-center">
        <ul className="flex gap-2 font-khBtB cursor-pointer flex-wrap">
          {SubMenu.map((name, index) => (
            <li
              key={index}
              className={
                activeSubMenuIndex === index
                  ? "border-y-2  border-red-500 p-2 text-red-500 "
                  : "p-2 border-y-2 bg-opacity-0 transition cursor-pointer hover:border-y-2 hover:border-red-400"
              }
              onClick={() => handleSubMenuClick(index)}
            >
              {name.name}
            </li>
          ))}
        </ul>
      </div>
      {/* body */}
      <div className=" flex flex-col h-fit gap-2 ">
        {/* content */}
        <div className="w-full lg:w-full h-82vh">
          <BodyContent
            activeSubMenuIndex={activeSubMenuIndex}
            universitiesData={universitiesData}
            onChange={onChange}
          />
        </div>
        {/* contact */}
        <div className="h-fit mt-5 font-khBtB rounded bg-footer pb-5 ">
          <h2 className="text-center text-2xl py-2 border-b-2">ទំនាក់ទំនង</h2>

          <div className=" flex flex-row flex-wrap justify-evenly py-5 gap-2 md:justify-around">
            {/* number phone */}
            <div className="md:flex-col">
              <div className="flex items-center justify-center gap-2 pb-2">
                <BsTelephone size={24} />
                <span className="text-center font-bold">លេខទូរស័ព្ច</span>
              </div>
              <div className="flex flex-col divide-y divide-slate-500">
                <span className="p-2 text-center">
                  <a href={"tel:" + universitiesData.phone}>
                    {universitiesData.phone}
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
                  <a href={"mailto:" + universitiesData.email}>
                    {universitiesData.email}
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
                    href={"http://" + universitiesData.website}
                    target="_blank"
                  >
                    {universitiesData.website}
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
                    src={universitiesData?.university_branches?.location}
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
export default ({ userData, universitiesData, api }) => {
  return (
    <Layout
      icon={api + "/images/" + universitiesData.logo}
      title={universitiesData.name_km}
      session={userData}
    >
      <University universitiesData={universitiesData} api={api} />
    </Layout>
  );
};

export async function getStaticPaths() {
  let data = [];
  // Call an external API endpoint to get posts
  await fetch("http://127.0.0.1:8000/api/universities")
    .then((res) => res.json())
    .then((res) => {
      data = res.data;
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

  let api = "http://127.0.0.1:8000/api";
  let universitiesData = [];

  //fetch data of university
  await fetch(`${api}/universities/${id}`)
    .then((res) => res.json())
    .then((res) => {
      universitiesData = res.data;
    })
    .catch((error) => console.log(error));

  return {
    props: {
      universitiesData: universitiesData,
      api: api,
    },
  };
}
