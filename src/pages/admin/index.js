import React, { useEffect, useState } from "react";
import { Inter } from "next/font/google";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import Modal from "react-modal";
import Link from "next/link";

import { FaSort } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { RiErrorWarningLine } from "react-icons/ri";
import { MdOutlineAdd, MdOutlineKeyboardArrowDown } from "react-icons/md";

export default function Home({ universities, api }) {
  //toggle lang
  const [lang, setLang] = useState(true);

  const toggleLang = () => {
    setLang(!lang);
  };
  const router = useRouter();

  //resfresh Data
  const refreshData = () => {
    router.replace(router.asPath);
  };

  // const [universities, setUniversities] = useState([]);
  const [isModalDelete, setIsModalDelete] = useState(false);
  const [universityId, setUniversityId] = useState();

  const modalStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.6)",
    },
    content: {
      border: null,
      backgroundColor: "rgba(0, 0, 0, 0)",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      padding: 0,
      borderRadius: 10,
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  function deleteUniversity() {
    fetch(api + "/universities/" + universityId, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((res) => {
        refreshData();
        setIsModalDelete(false);
      })
      .catch((err) => console.log(err));
  }
  useEffect(() => {}, [universities]);

  return (
    <div className="bg-gray-300">
      <Head>
        <title>អ្នកគ្រប់គ្រង</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <header>
        <nav className="navbar font-khBtB">
          <div className="container flex justify-between w-[90%] m-auto py-2">
            <a className="navbar-brand text-success" href="#">
              <Image
                src="/logo.png"
                alt="Logo"
                width="200"
                height="200"
                className="d-inline-block align-text-top"
              />
              <span className="ms-2">អ្នកគ្រប់គ្រង</span>
            </a>
            <ul className="nav">
              <button
                onClick={toggleLang}
                className="text-white bg-blue-700 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center "
              >
                ភាសា
                <MdOutlineKeyboardArrowDown size={14} className="ml-2" />
              </button>

              <ul
                className={` rounded-lg text-center   dark:bg-gray-700 text-sm  text-gray-700 dark:text-gray-200 ${
                  lang ? "hidden" : "block"
                }`}
              >
                <li>
                  <a
                    className="block py-2 hover:rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white disabled"
                    href="#"
                  >
                    ខ្មែរ
                  </a>
                </li>
                <li>
                  <a
                    className="block hover:rounded-lg  py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    href="#"
                  >
                    English
                  </a>
                </li>
              </ul>
            </ul>
          </div>
        </nav>
      </header>
      <main className="container font-kh w-[90%] m-auto">
        <h2 className="text-base m-2 text-gray-900">បញ្ជីសកលវិទ្យាល័យ</h2>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className=" uppercase bg-gray-200 dark:bg-gray-700 dark:text-white">
              <tr>
                <th scope="col" className="px-6 py-3">
                  #
                </th>
                <th scope="col" className="px-6 py-3">
                  រូបសញ្ញា
                </th>
                <th scope="col" className="px-6 py-3">
                  <div className="flex items-center">
                    ឈ្មោះ
                    <a href="#">
                      <FaSort size={13} className="ml-1" />
                    </a>
                  </div>
                </th>
                <th scope="col" className="px-6 py-3">
                  <div className="flex items-center">
                    ប្រភេទ
                    <a href="#">
                      <FaSort size={13} className="ml-1" />
                    </a>
                  </div>
                </th>
                <th scope="col" className="px-6 py-3 w-24">
                  <button
                    onClick={() => router.push("../admin/addUniversity")}
                    type="button"
                    className="focus:outline-none text-white bg-green-500 hover:bg-green-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                  >
                    បន្ថែមសកលវិទ្យាល័យ
                    <MdOutlineAdd size={18} className="mx-auto" />
                  </button>
                </th>
              </tr>
            </thead>
            <tbody>
              {universities.length ? (
                universities?.map((university) => {
                  return (
                    <tr
                      className="dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600"
                      key={university.id}
                    >
                      <td
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {university.id}
                      </td>
                      <td className="px-6 py-4">
                        <img
                          src={
                            "http://localhost:8000/api/images/" +
                            university.logo
                          }
                          alt="university_logo"
                          className="h-16"
                        />
                      </td>
                      <td className="px-6 py-4">{university.name_km}</td>
                      <td className="px-6 py-4">
                        {university.university_type.type_km}
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="btn-group" role="group">
                          <button
                            className="text-danger hover:underline me-4"
                            onClick={() => {
                              setIsModalDelete(true);
                              setUniversityId(university.id);
                            }}
                          >
                            លុប
                          </button>
                          <Link href={`/admin/adminDetail/${university.id}`}>
                            <button className="text-success hover:underline">
                              លម្អិត
                            </button>
                          </Link>
                        </div>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr className="h-24 text-center">
                  <td className="font-bold"></td>
                  <td className="font-bold"></td>
                  <td className="font-bold">No University</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </main>
      <Modal
        isOpen={isModalDelete}
        onRequestClose={() => setIsModalDelete(false)}
        style={modalStyles}
        ariaHideApp={false}
      >
        <div className="relative bg-gray-50 rounded-lg shadow dark:bg-gray-700">
          <button
            type="button"
            onClick={() => setIsModalDelete(false)}
            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
            data-modal-hide="popup-modal"
          >
            <AiOutlineClose size={20} />
            <span className="sr-only">Close modal</span>
          </button>
          <div className="p-6 text-center">
            <RiErrorWarningLine
              size={56}
              className="mx-auto mb-4 text-gray-400  dark:text-gray-200"
            />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to delete this product?
            </h3>
            <button
              data-modal-hide="popup-modal"
              type="button"
              onClick={deleteUniversity}
              className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
            >
              Yes, I'm sure
            </button>
            <button
              data-modal-hide="popup-modal"
              type="button"
              onClick={() => setIsModalDelete(false)}
              className="text-gray-500 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
            >
              No, cancel
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

//static fetch Data
export async function getStaticProps() {
  let universitiesData = [];

  const api = "http://127.0.0.1:8000/api";

  //fetch data of university
  await fetch(`${api}/universities`)
    .then((res) => res.json())
    .then((res) => {
      universitiesData = res.data;
    })
    .catch((error) => console.log(error));

  return {
    props: {
      universities: universitiesData,
      api,
    },
  };
}