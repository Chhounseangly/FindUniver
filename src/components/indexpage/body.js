import { React, use, useEffect, useState } from "react";
import Pagination from "./pagination";

import Card from "./card";

const typesOpetions = [
  { value: "", text: "ទាំងអស់" },
  { value: "Public", text: "រដ្ឋ" },
  { value: "Private", text: "ឯកជន" },
];

function Body({ universitiesData, provincesData, universityTypes }) {
  const [locationsSelete, setLocationsSelete] = useState();
  // locationOptions[0].value
  const [typeSelete, setTypeSelete] = useState();
  // typesOpetions[0].value
  const [universityFilter, setUniversityFilter] = useState([]);

  const handleLocations = (e) => {
    setLocationsSelete(e.target.value);
  };
  const handleType = (e) => {
    setTypeSelete(e.target.value);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12; //init size of Universities load per page

  const onPageChange = (page) => {
    setCurrentPage(page);
  };
  // filter By Locations
  function filterLocations() {
    if (universitiesData) {
      if (!locationsSelete) {
        return universitiesData;
      }
      return universitiesData?.filter((data) => {
        if (
          locationsSelete.toLowerCase() ===
          data.university_branches[0]?.address_en.toLowerCase()
        )
          return data;
      });
    }
  }
  // filter By type
  function filterTypes() {
    if (universitiesData) {
      if (!typeSelete) {
        return universitiesData;
      }
      return universitiesData?.filter((data) => {
        if (
          typeSelete.toLowerCase() ===
          data.university_type.type_km.toLowerCase()
        )
          return data;
      });
    }
  }
  useEffect(() => {
    if (locationsSelete) {
      setUniversityFilter(filterLocations());
    } else if (typeSelete) {
      setUniversityFilter(filterTypes());
    } else setUniversityFilter(universitiesData);
  }, [locationsSelete, typeSelete]);

  //pagination
  const paginatedDatas = paginate(universityFilter, currentPage, itemsPerPage);

  return (
    <>
      <div className=" w-fit flex flex-wrap gap-2 p-2 bg-opacity-20 justify-center m-auto rounded shadow-gray-500 shadow-sm">
        <div className="flex flex-col bg-location-color gap-1 rounded p-2">
          <h5 className="text-h5 font-khBtB text-white">ទីតាំង</h5>
          <select
            value={locationsSelete}
            onChange={handleLocations}
            className="select-locations font-khBtB  py-2 px-4 w-48 cursor-pointer rounded"
          >
            {provincesData?.map((localOption) => (
              <option key={localOption.id} value={localOption.id}>
                {localOption.name_km}
              </option>
            ))}
          </select>
          {/* <select
            value={locationsSelete}
            onChange={handleLocations}
            className="select-locations font-kh  py-2 px-4 w-48 cursor-pointer rounded"
          >
            {locationOptions.map((localOption) => (
              <option key={localOption.value} value={localOption.value}>
                {localOption.text}
              </option>
            ))}
          </select> */}
        </div>
        <div className="flex flex-col bg-location-color gap-1 rounded p-2">
          <h5 className="text-h5 font-khBtB text-white">ប្រភេទ</h5>
          <select
            value={typeSelete}
            onChange={handleType}
            className="select-types font-khBtB py-2 px-4 w-48 cursor-pointer rounded"
          >
            {universityTypes?.map((typeOption) => (
              <option key={typeOption.id} value={typeOption.type_km}>
                {typeOption.type_km}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="w-11/12 sm:w-4/5 flex flex-col m-auto body ">
        <div className="flex flex-col text-gray-200">
          <span className="font-khBtB text-lg font-semibold pt-5">សាកលវិទ្យាល័យ</span>
          <span className="font-khBtB pb-4">
            មានចំនួន: {universityFilter?.length}
          </span>
        </div>
        {!universityFilter?.length ? (
          <div className="flex justify-center items-center  min-h-screen w-full">
            <p className="text-red-500 text-xl font-bold font-khBtB">
              ទិន្ន័យមិនមាន
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
          items={universityFilter?.length}
          currentPage={currentPage} // 1
          pageSize={itemsPerPage} // 10
          onPageChange={onPageChange}
        />
      </div>
    </>
  );
}

export const paginate = (items, currentPage, itemsPerPage) => {
  const startIndex = (currentPage - 1) * itemsPerPage;
  return items?.slice(startIndex, startIndex + itemsPerPage);
};

export default Body;
