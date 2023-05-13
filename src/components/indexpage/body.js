import { React, useState } from "react";
import Pagination from "./pagination";

import Card from "./card";
import Seletes from "./selete";

function Body({ universitiesData }) {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 12;

  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  let paginatedDatas = [];
  if (universitiesData) {
    paginatedDatas = paginate(universitiesData, currentPage, pageSize);
  }

  return (
    <>
      <Seletes universitiesData={universitiesData} />
      <div className="w-11/12 sm:w-4/5 flex flex-col m-auto body">
        <div className="flex flex-col">
          <span className="font-kh text-lg font-bold pt-5">សាកលវិទ្យាល័យ</span>
          <span className="font-kh pb-4">
            មានចំនួន: {universitiesData?.length}
          </span>
        </div>
        {!universitiesData?.length ? (
          <div className="flex justify-center items-center  min-h-screen w-full">
            <p className="text-red-500 text-xl font-bold font-khBtB">
              ទិន្ន័យមិនទាន់មាន
            </p>
          </div>
        ) : (
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 sm:gap-x-10 md:grid-cols-3 lg:grid-cols-4 m-auto min-h-screen ">
            {paginatedDatas?.map((university) => {
              return <Card university={university} key={university.id} />;
            })}
          </div>
        )}
        <Pagination
          items={universitiesData?.length} // 100
          currentPage={currentPage} // 1
          pageSize={pageSize} // 10
          onPageChange={onPageChange}
        />
      </div>
    </>
  );
}

export const paginate = (items, currentPage, pageSize) => {
  const startIndex = (currentPage - 1) * pageSize;
  return items.slice(startIndex, startIndex + pageSize);
};

export default Body;
