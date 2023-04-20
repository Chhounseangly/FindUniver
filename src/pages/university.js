import React, { useState } from "react";
import Image from "next/image";
import Rupp from "../images/rupp.jpg";
import RuppLogo from "../images/rupp.png";
import Moeys from "../images/moeys.png";
import CarouselPrograms from "@/components/universitycomponents/carouselprograms";
import CarouselCarriculum from "@/components/universitycomponents/caouselcurriculum";

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

const Images = [
  {
    img: "https://amateurphotographer.com/wp-content/uploads/sites/7/2022/09/google-pixel-6a-cameras-photo-joshua-waller-2560-P9150514.jpg",
  },
  {
    img: "https://amateurphotographer.com/wp-content/uploads/sites/7/2022/09/google-pixel-6a-cameras-photo-joshua-waller-2560-P9150514.jpg",
  },
  {
    img: "https://amateurphotographer.com/wp-content/uploads/sites/7/2022/09/google-pixel-6a-cameras-photo-joshua-waller-2560-P9150514.jpg",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0428/9455/7352/collections/Categoria_Pixel_x600_e5557e9e-3e64-47fd-9bc9-460ecbfc44e8_grande.webp?v=1659455872",
  },
  {
    img: "https://amateurphotographer.com/wp-content/uploads/sites/7/2022/09/google-pixel-6a-cameras-photo-joshua-waller-2560-P9150514.jpg",
  },
  {
    img: "https://amateurphotographer.com/wp-content/uploads/sites/7/2022/09/google-pixel-6a-cameras-photo-joshua-waller-2560-P9150514.jpg",
  },
  {
    img: "https://amateurphotographer.com/wp-content/uploads/sites/7/2022/09/google-pixel-6a-cameras-photo-joshua-waller-2560-P9150514.jpg",
  },
];

const faculties = [
  {
    facultiesName: "ថ្នាក់បរិញ្ញាបត្រ",
    departments: ["1", "2", "3", "1", "2", "3", "1", "2", "3"],
  },
  { facultiesName: "a", departments: ["2", "3", "4"] },
  { facultiesName: "b", departments: ["5", "4", "5"] },
];
// Define your body content component
const BodyContent = ({ activeSubMenuIndex }) => {
  switch (activeSubMenuIndex) {
    // ថ្នាក់បរិញ្ញាបត្រ
    case 0:
      return (
        <>
          <div className="p-2 md:p-2 m-auto">
            <CarouselPrograms facultiesData={faculties} />
          </div>
        </>
      );
    // កម្មវិធីសិក្សា
    case 1:
      return (
        <div>
          <CarouselCarriculum carriculumData={faculties} />
        </div>
      );
    // តម្លៃសិក្សារ
    case 2:
      return (
        <div className="grid grid-cols-5 gap-7 p-5">
          {Images.map((img, index) => (
            <img
              className="h-auto transition ease-in-out delay-150   hover:-translate-y-1 hover:scale-110 duration-100 cursor-pointer"
              src={img.img}
              key={index}
              alt={img.img}
            />
          ))}
        </div>
      );
  }
};

const SubMenu = [
  { name: "ថ្នាក់បរិញ្ញាបត្រ" },
  { name: "កម្មវិធីសិក្សា" },
  { name: "រូបភាព" },
];
export default function University() {
  const [activeSubMenuIndex, setActiveSubMenuIndex] = useState(0);
  // Define the click handler function
  const handleSubMenuClick = (index) => {
    setActiveSubMenuIndex(index);
  };


  return (
    <main className="content">
      {/* banner */}
      <section>
        <div className="flex py-2 px-2 gap-1 ">
          <div className="w-1/2 ">
            <Image className="rounded-md" src={Rupp} alt="banner" />
          </div>
          <div className="w-1/2 bg-banner-color rounded-md">
            <div className="relative h-full">
              <Image
                className="moeys w-10percent h-1/4 absolute top-2 right-4"
                src={Moeys}
                alt="Moeys"
              />
              <div className="w-1/2 text-white font-kh text-banner flex flex-col text-center absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4 ">
                <Image
                  className="w-1/2 m-auto"
                  src={RuppLogo}
                  alt="logouniversity"
                />
                <span className="tracking-wide ">
                  សាកលវិទ្យាល័យភូមិន្ទភ្នំពេញ
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ព័ត៍មានទូទៅ */}
      <div className="py-4 px-5">
        <h1 className="font-kh font-bold text-xl border-y-2 text-center py-2 px-2">
          ព័ត៍មានទូទៅ
        </h1>
        <div className="h-fit py-5  ">
          <span className="font-khBtB text-paragraph py-4 -tracking-wide">
            <ReadMore>
              សកលវិទ្យាល័យភូមិន្ទភ្នំពេញត្រួវបានបង្កើតឡើងដំបូងនៅឆ្នាំ១៩៦០
              អំឡុងពេលដែលប្រទេសកម្ពុជាមានការរីកចម្រើនយ៉ាងខ្លាំងក្លា
              ដោយមានឈ្មោះដើមថា សាកលវិទ្យាល័យភូមិន្ទ។
              នៅពេលនោះភាសាដែលត្រូវបានគេប្រើប្រាស់ជាភាសាបារាំង។
              នៅសម័យសាធារណរដ្ឋខ្មែរ
              សាកលវិទ្យាល័យបានត្រូវប្តូរឈ្មោះជាសាកលវិទ្យាល័យភ្នំពេញ។
              នៅសម័យខ្មែរក្រហម សាកលវិទ្យាល័យនៅទូទាំងប្រទេស​ត្រូវបានបិទទ្វារ
              ហើយសាស្ត្រាចារ្យទាំងអស់បានក្លាយជាមុខសញ្ញានៃការសម្លាប់របស់ពួកខ្មែរក្រហម។
              នៅឆ្នាំ១៩៨១ វិទ្យាស្ថានភាសាបរទេសIFL
              ត្រូវបានបើកនិងធ្វើការបណ្តុះបណ្តាលសាស្រ្តាចារ្យ​ ភាសារុស៊ី និង​​
              ភាសាវៀតណាម។
              ្រោយមកមានការបញ្ចូលគ្នានូវវិទ្យាស្ថាននេះនិងសាលាគរុវិជ្ជាជាន់ខ្ពស់ដើម្បីបង្កើតជាសាកលវិទ្យាល័យភ្នំពេញ
              ដែលត្រូវប្តួរឈ្មោះមកដូចបច្ចុប្បន្ននៅឆ្នាំ ១៩៩៦។
              នៅក្នុងទសវត្សរ៍ចុងក្រោយនេះ សាកលវិទ្យាល័យ បានបែងចែកជា៣គ្រឹះស្ថានគឺ
              មហាវិទ្យាល័យវិទ្យាសាស្ត្រ មហាវិទ្យាល័យសង្គមសាស្ត្រនិងមនុស្សសាស្ត្រ
              និង វិទ្យាស្ថានភាសាបរទេសIFL។ នៅឆ្នាំ ២០០១
              សាកលវិទ្យាល័យបានបើកការបណ្តុះបណ្តាលថ្នាក់ក្រោយបរិញ្ញាបត្រ
            </ReadMore>
          </span>
        </div>
      </div>
      {/* sub navbar */}
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
      </div>
      {/* body */}
      <div className=" flex flex-col h-fit gap-2 ">
        {/* content */}
        <div className="w-full lg:w-full h-82vh">
          <BodyContent activeSubMenuIndex={activeSubMenuIndex} />
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
                <svg
                  className="h-8 w-8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  ></path>
                </svg>
                <span className="text-center font-bold">លេខទូរស័ព្ច</span>
              </div>
              <div className="flex flex-col divide-y divide-slate-500">
                <span className="p-2 text-center">+855 123 123 123</span>
              </div>
            </div>

            {/* email */}
            <div className="md:flex-col">
              <div className="flex items-center justify-center pb-2 gap-2">
                <svg
                  className="h-8 w-8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  ></path>
                </svg>
                <span className="text-center font-bold">អ៊ីមែល</span>
              </div>
              <div className="flex flex-col divide-y divide-slate-500">
                <span className="p-2 text-center">+855 123 123 123</span>
              </div>
            </div>

            {/* website */}
            <div className="md:flex-col">
              <div className="flex items-center justify-center gap-2 pb-2">
                <svg
                  className="h-8 w-8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                  ></path>
                </svg>
                <span className="text-center font-bold">វេបសាយ</span>
              </div>
              <div className="flex flex-col divide-y divide-slate-500">
                <span className="p-2 text-center">+855 123 123 123</span>
              </div>
            </div>

            {/* location */}
            <div className="md:flex-col">
              <div className="flex items-center pb-2 gap-2 justify-center">
                <svg
                  className="h-8 w-8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z"
                  ></path>
                </svg>
                <span className="text-center font-bold">ទីតាំង</span>
              </div>
              <div className="flex flex-col flex-wrap divide-y divide-slate-500 ">
                <span className="p-2  text-center ">ទីតាំង</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
