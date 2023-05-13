import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

export default function Pagination({
  items,
  pageSize,
  currentPage,
  onPageChange,
}) {

  const pagesCount = Math.ceil(items / pageSize);
  const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);
  
  function prev() {
    if (currentPage != 1) {
      onPageChange(currentPage - 1);
    }
  }
  function nextBtn() {
    if (currentPage != pagesCount) {
      onPageChange(currentPage + 1);
    }
  }

  return (
    <div className="flex items-center justify-center py-10 lg:px-0 sm:px-6 px-4">
      <div className="lg:w-9/12 w-full  flex items-center justify-between border-t border-gray-400">
        <div
          onClick={prev}
          className={`flex items-center pt-3 text-black ${
            currentPage <= 1 || pagesCount <= 1
              ? "select-none text-gray-400 "
              : "hover:text-indigo-700 cursor-pointer select-none"
          } `}
        >
          <AiOutlineArrowLeft size={14} />

          <p className="text-base ml-2 leading-none  font-bold font-khBtB">
            ថយក្រោយ
          </p>
        </div>
        <div className="sm:flex hidden flex-wrap gap-2">
          {pages?.map((page) => {
            return (
              <p
                key={page}
                onClick={() => onPageChange(page)}
                className={
                  page === currentPage
                    ? "select-none text-base font-medium leading-none cursor-pointer text-[#FF6A3D]   border-t-2 border-[#FF6A3D]  pt-3 mr-4 px-2"
                    : "select-none text-base font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2"
                }
              >
                {page}
              </p>
            );
          })}
        </div>
        <div
          onClick={nextBtn}
          className={`flex items-center pt-3 text-black ${
            currentPage === pagesCount || pagesCount <= 1
              ? "select-none text-gray-400 "
              : "hover:text-indigo-700 cursor-pointer select-none "
          } `}
        >
          <p className="text-base  leading-none mr-3 font-bold font-khBtB">
            បន្ទាប់
          </p>
          <AiOutlineArrowRight size={14} />
        </div>
      </div>
    </div>
  );
}
