import { useState } from "react";
import React from "react";

export default function RecommendationMajor() {
  const [activeSubMenuIndex, setActiveSubMenuIndex] = useState(0);
  // Define the click handler function
  const handleSubMenuClick = (index) => {
    setActiveSubMenuIndex(index);
  };
  const SubMenu = [{ name: "វិទ្យាសាស្រ្ត" }, { name: "សង្គម" }];
  return (
    <div className="w-full h/ bg-gray-200 p-5">
      <div className="w-4/5 h-fit shadow-lg mx-auto  bg-white">
        {/* sub navbar */}
        <div className="p-2 border-b-2 border-black border-opacity-50 item-center">
          <ul className="flex gap-5 font-kh cursor-pointer flex-wrap">
            {SubMenu.map((name, index) => (
              <li
                key={index}
                className={
                  activeSubMenuIndex === index
                    ? "border-b-2  border-red-500 pb-2 text-red-500 font-semibold"
                    : "pb-2 border-b-2 bg-opacity-0 transition cursor-pointer hover:border-b-2 hover:border-red-400"
                }
                onClick={() => handleSubMenuClick(index)}
              >
                {name.name}
              </li>
            ))}
          </ul>
        </div>
        {/* BodyRecommentdation */}
        <div className="flex flex-col gap-5 w-full h-fit mt-5 pb-10">
          <h1 className="font-khBtB text-xl lg:pl-5">
            សូមធ្វើការបំពេញព័ត៌មានខាងក្រោមតាមរយៈនិទ្ទេសរបស់មុខវិជ្ជា៖
          </h1>
          <form action="/">
            <RecommendationContent activeSubMenuIndex={activeSubMenuIndex} />
            <button
              className="float-right mr-10 w-fit font-khBtB px-4 py-3 mt-4 font-semibold text-gray-700 bg-blue-500 rounded-lg hover:text-gray-700 hover:bg-blue-200 "
              type="submit"
            >
              បញ្ចូន
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

const Grade = [
  {
    subject: "អក្សរសិស្ប៍ខ្មែរ",
    grade: ["A", "B", "C", "D", "E", "F"],
  },
  {
    subject: "គណិតវិទ្យា",
    grade: ["A", "B", "C", "D", "E", "F"],
  },
  {
    subject: "រូបវិទ្យា",
    grade: ["A", "B", "C", "D", "E", "F"],
  },
  {
    subject: "គីមីវិទ្យា",
    grade: ["A", "B", "C", "D", "E", "F"],
  },
  {
    subject: "ជីវវិទ្យា",
    grade: ["A", "B", "C", "D", "E", "F"],
  },
  {
    subject: "ប្រវត្តវិទ្យា",
    grade: ["A", "B", "C", "D", "E", "F"],
  },
  {
    subject: "ភាសាបរទេស",
    grade: ["A", "B", "C", "D", "E", "F"],
  },
];

// Define your body content component
const RecommendationContent = ({ activeSubMenuIndex }) => {
  switch (activeSubMenuIndex) {
    // វិទ្យាសាស្រ្ត
    case 0:
      return (
        <>
          {Grade.map((Subject, index) => (
            <div className="w-fit h-fit m-auto py-1.5" key={index}>
              <h3 className="font-semibold text-gray-900 font-khBtB">
                {Subject.subject}*
              </h3>
              <ListRadioGroup options={Grade} groupName={index} />
            </div>
          ))}
        </>
      );
    // សង្គម
    case 1:
      return (
        <>
          {Grade.map((Subject, index) => (
            <div className="w-fit h-fit m-auto py-1.5" key={index}>
              <h3 className="font-semibold text-gray-900 font-khBtB">
                {Subject.subject}*
              </h3>
              <ListRadioGroup options={Grade} groupName={index} />
            </div>
          ))}
        </>
      );
  }
};

const ListRadioGroup = ({ options, groupName }) => {
  const [selected, setSelected] = useState(null);

  const handleChange = (e) => {
    setSelected(e.target.value);
  };

  return (
    <div className="flex flex-wrap gap-5 font-kh m-auto ">
      {options.map((option, index) => (
        <div
          key={index}
          className="w-20 flex flex-row p-2 m-2 h-fit items-center border border-gray-200 rounded  last:hidden"
        >
          <input
            type="radio"
            name={groupName}
            value={option.grade[index]}
            onChange={handleChange}
            className="w-4 h-4 text-blue-600 dark:bg-gray-700 dark:border-gray-600"
            required
          />
          <label className="w-fit flex flex-row justify-center m-auto text-sm font-medium text-black text-center">
            {option.grade[index]}
          </label>
        </div>
      ))}
    </div>
  );
};
