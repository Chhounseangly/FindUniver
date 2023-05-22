import { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import useSWR from "swr";
import Card from "../indexpage/card";

//Universities Data fetching
const fetcher = async (url) => {
  const datas = await fetch(url).then((res) => res.json());
  return datas.data;
};

export default function SearchBar() {
  const { data: dataSearch } = useSWR(
    `http://127.0.0.1:8000/api/universities`,
    fetcher
  );
  const [search, setSearch] = useState("");
  const [foundedData, setFoundedData] = useState([]);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  //seaching university
  function getSearching() {
    if (dataSearch) {
      if (search.length >= 2) {
        var charSearch = new RegExp(search.split("").join(".*"), "i");
        return dataSearch?.filter((data) => {
          if (data.name_km.match(charSearch)) {
            return data;
          }
        });
      }
      return [];
    }
  }

  useEffect(() => {
    setFoundedData(getSearching());
  }, [search]);
  return (
    <div className="flex flex-col w-full items-center">
      <form className="w-full p-7 md:w-80percent hover:scale-100 transition-all ">
        <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <BsSearch size={18} color="gray" />
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 font-kh"
            placeholder="ស្វែងរក..."
            required
            onChange={handleChange}
          />
          <button
            type="submit"
            className="text-white absolute right-1.5 bottom-1 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 font-kh"
          >
            ស្វែងរក
          </button>
        </div>
      </form>
      {/* display searchData */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 sm:gap-x-10 md:grid-cols-3 lg:grid-cols-4 m-auto min-h-screen   w-80percent ">
        {foundedData?.map((university) => {
          return <Card university={university} />;
        })}
      </div>
    </div>
  );
}
