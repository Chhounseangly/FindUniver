export default function Seletes() {
    return (
        <>
        <div className="w-fit flex flex-wrap gap-2 p-2 bg-gray-400 bg-opacity-20 justify-center m-auto rounded shadow-gray-500">
            <div className="flex flex-col bg-location-color gap-1 rounded p-2">
                <h5 className="text-h5 font-bold text-black font-kh">ទីតាំង</h5>
                <select className="select-locations font-kh  py-2 px-4 w-48 cursor-pointer rounded">
                        <option selected value="All">
                            ទាំងអស់
                        </option>
                        <option value="PhnomPenh">ភ្នំពេញ</option>
                        <option value="Kandal">កណ្ដាល</option>
                        <option value="KampongCham">កំពង់ចាម</option>
                        <option value="KampongChhnang">កំពង់ឆ្នាំង</option>
                        <option value="KampongThom">កំពង់ធំ</option>
                        <option value="KampongSpeu">កំពង់ស្ពឺ</option>
                        <option value="Kampot">កំពត</option>
                        <option value="Kep">កែប</option>
                        <option value="KohKong">កោះកុង</option>
                        <option value="Kratie">ក្រចេះ</option>
                        <option value="Takeo">តាកែវ</option>
                        <option value="TboungKhmom">ត្បូងឃ្មុំ</option>
                        <option value="BanteayMeanchey">បន្ទាយមានជ័យ</option>
                        <option value="Battambang">បាត់ដំបង</option>
                        <option value="Pailin">ប៉ៃលិន</option>
                        <option value="Pursat">ពោធិ៍សាត់</option>
                        <option value="PreahVihear">ព្រះវិហារ</option>
                        <option value="PreahSihanouk">ព្រះសីហនុ</option>
                        <option value="PreyVeng">ព្រៃវែង</option>
                        <option value="Mondulkiri">មណ្ឌលគីរី</option>
                        <option value="Ratanakiri">រតនគីរី</option>
                        <option value="SiemReap">សៀមរាប</option>
                        <option value="StungTreng">ស្ទឹងត្រែង</option>
                        <option value="SvayRieng">ស្វាយរៀង</option>
                        <option value="OddarMeanchey">ឧត្តរមានជ័យ</option>
                </select>
            </div>
            <div className="flex flex-col bg-location-color gap-1 rounded p-2">
                            <h5 className="text-h5 font-bold text-black font-kh">ប្រភេទ</h5>
                            <select className="select-types font-kh py-2 px-4 w-48 cursor-pointer rounded">
                                <option value="All">ទាំងអស់</option>
                                <option value="Public">រដ្ឋ</option>
                                <option value="Private">ឯកជន</option>
                            </select>
                        </div>
           

        </div>
        
        </>
      
        // <div className="w-screen">
        //             <div className="itemce w-1/2 space-x-10  m-auto py-5  bg-filter-color flex justify-between shadow-sm">
        //                 <div className="flex flex-col bg-location-color gap-1 px-2 py5 p-4 rounded">
        //                     <h5 className="text-h5 font-bold text-black font-kh">ទីតាំង</h5>
                            // <select id="location" className="select-locations font-kh  py-2 px-4 w-48 cursor-pointer">
                            //     <option selected value="All">
                            //         ទាំងអស់
                            //     </option>
                            //     <option value="PhnomPenh">ភ្នំពេញ</option>
                            //     <option value="Kandal">កណ្ដាល</option>
                            //     <option value="KampongCham">កំពង់ចាម</option>
                            //     <option value="KampongChhnang">កំពង់ឆ្នាំង</option>
                            //     <option value="KampongThom">កំពង់ធំ</option>
                            //     <option value="KampongSpeu">កំពង់ស្ពឺ</option>
                            //     <option value="Kampot">កំពត</option>
                            //     <option value="Kep">កែប</option>
                            //     <option value="KohKong">កោះកុង</option>
                            //     <option value="Kratie">ក្រចេះ</option>
                            //     <option value="Takeo">តាកែវ</option>
                            //     <option value="TboungKhmom">ត្បូងឃ្មុំ</option>
                            //     <option value="BanteayMeanchey">បន្ទាយមានជ័យ</option>
                            //     <option value="Battambang">បាត់ដំបង</option>
                            //     <option value="Pailin">ប៉ៃលិន</option>
                            //     <option value="Pursat">ពោធិ៍សាត់</option>
                            //     <option value="PreahVihear">ព្រះវិហារ</option>
                            //     <option value="PreahSihanouk">ព្រះសីហនុ</option>
                            //     <option value="PreyVeng">ព្រៃវែង</option>
                            //     <option value="Mondulkiri">មណ្ឌលគីរី</option>
                            //     <option value="Ratanakiri">រតនគីរី</option>
                            //     <option value="SiemReap">សៀមរាប</option>
                            //     <option value="StungTreng">ស្ទឹងត្រែង</option>
                            //     <option value="SvayRieng">ស្វាយរៀង</option>
                            //     <option value="OddarMeanchey">ឧត្តរមានជ័យ</option>
                            // </select>
        //                 </div>
                        // <div className="flex flex-col bg-location-color gap-1 px-2 py5 rounded">
                        //     <h5 className="text-h5 font-bold text-black font-kh">ប្រភេទ</h5>
                        //     <select className="select-types font-kh py-2 px-4 w-48 cursor-pointer">
                        //         <option value="All">ទាំងអស់</option>
                        //         <option value="Public">រដ្ឋ</option>
                        //         <option value="Private">ឯកជន</option>
                        //     </select>
                        // </div>
        //             </div>
        //         </div>
    );
}