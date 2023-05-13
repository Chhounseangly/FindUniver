import { useState } from "react";

const locationOptions = [
  { value: "", text: "ទាំងអស់" },
  { value: "PhnomPenh", text: "ភ្នំពេញ" },
  { value: "Kandal", text: "កណ្ដាល" },
  { value: "KampongCham", text: "កំពង់ចាម" },
  { value: "KampongChhnang", text: "កំពង់ឆ្នាំង" },
  { value: "KampongThom", text: "កំពង់ធំ" },

  { value: "KampongSpeu", text: "កំពង់ស្ពឺ" },
  { value: "Kampot", text: "កំពត" },
  { value: "Kep", text: "កែប" },
  { value: "KohKong", text: "កោះកុង" },

  { value: "Kratie", text: "ក្រចេះ" },
  { value: "Takeo", text: "តាកែវ" },
  { value: "TboungKhmom", text: "ត្បូងឃ្មុំ" },
  { value: "BanteayMeanchey", text: "បន្ទាយមានជ័យ" },

  { value: "Battambang", text: "បាត់ដំបង" },
  { value: "Pailin", text: "ប៉ៃលិន" },
  { value: "Pursat", text: "ពោធិ៍សាត់" },

  { value: "PreahVihear", text: "ព្រះវិហារ" },
  { value: "PreahSihanouk", text: "ព្រះសីហនុ" },
  { value: "PreyVeng", text: "ព្រៃវែង" },

  { value: "Mondulkiri", text: "មណ្ឌលគីរី" },
  { value: "Ratanakiri", text: "រតនគីរី" },
  { value: "SiemReap", text: "សៀមរាប" },

  { value: "StungTreng", text: "ស្ទឹងត្រែង" },
  { value: "SvayRieng", text: "ស្វាយរៀង" },
  { value: "OddarMeanchey", text: "ឧត្តរមានជ័យ" },
];

const typesOpetions = [
  { value: "", text: "ទាំងអស់" },
  { value: "Public", text: "រដ្ឋ" },
  { value: "Private", text: "ឯកជន" },
];
export default function Seletes({ universitiesData }) {
  const [selected, setSelected] = useState(
    locationOptions[0].value,
    typesOpetions[0].value
  );

  const handleChange = (e) => {
    setSelected(e.target.value);
  };

  // Function to get filtered list
  function getFilteredList() {
    // Avoid filter when selectedCategory is null
    if (!universitiesData) {
      return null;
    }
    return universitiesData?.filter((data) => {
      // console.log(data.university_type.type_en)
      if (
        data.university_type.type_en.toLowerCase() === selected.toLowerCase()
      ) {
        return data;
      }
    });
  }
  const test =  getFilteredList();

  return (
    <>
      <div className="w-fit flex flex-wrap gap-2 p-2 bg-opacity-20 justify-center m-auto rounded shadow-gray-500 shadow-sm">
        <div className="flex flex-col bg-location-color gap-1 rounded p-2">
          <h5 className="text-h5 font-bold text-black font-kh">ទីតាំង</h5>
          <select
            value={selected}
            onChange={handleChange}
            className="select-locations font-kh  py-2 px-4 w-48 cursor-pointer rounded"
          >
            {locationOptions.map((localOption) => (
              <option key={localOption.value} value={localOption.value}>
                {localOption.text}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col bg-location-color gap-1 rounded p-2">
          <h5 className="text-h5 font-bold text-black font-kh">ប្រភេទ</h5>
          <select
            value={selected}
            onChange={handleChange}
            className="select-types font-kh py-2 px-4 w-48 cursor-pointer rounded"
          >
            {typesOpetions.map((typeOption) => (
              <option key={typeOption.value} value={typeOption.value}>
                {typeOption.text}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
}
