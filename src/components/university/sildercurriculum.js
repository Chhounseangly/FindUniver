import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Keyboard, EffectCreative, Pagination, Navigation } from "swiper";

export default function CarouselCarriculum({ carriculumData }) {
  return (
    <>
      <Swiper
        grabCursor={true}
        effect={"creative"}
        speed={300}
        keyboard={{
          enabled: true,
        }}
        creativeEffect={{
          shadowPerProgress: false,
          prev: {
            shadow: true,
            slideShadows: false,
            translate: [0, 0, -300],
          },
          next: {
            slideShadows: false,
            translate: ["100%", 0, 0],
          },
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
        }}
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[Keyboard, EffectCreative, Pagination, Navigation]}
        className="swiper_container"
      >
        {carriculumData.map((carriculum, index) => (
          <SwiperSlide key={index}>
            <div className="mt-2 font-kh w-10/12 h-80vh border-2 rounded-md m-auto text-black bg-white shadow-sm ">
              <h1 className="border-b-2 border-gray-300 bg-gray-400  rounded-t-md text-center p-2 swiper-no-swiping ">
                ដេប៉ាតឺម៉ង
              </h1>
              <h1 className="border-b-2 border-gray-300 bg-gray-200 text-center p-2 swiper-no-swiping">
                ឆ្នាំទី {carriculum.facultiesName}
              </h1>
              <h1 className="text-center border-b-2 border-gray-300 p-2 swiper-no-swiping">
                តម្លៃសិក្សារ:​​ {carriculum.facultiesName}
              </h1>
              <div className="flex justify-around gap-2">
                <ul className="w-full h-ful font-kh list-none cursor-pointer">
                  <h1 className="text-center border-b-2 border-gray-300 p-2 swiper-no-swiping bg-gray-200 ">
                    ឆមាសទី​១
                  </h1>
                  {carriculum.departments.map((department, index) => (
                    <li
                      className="border-b-2 p-2 hover:border-b-2 hover:border-b-black"
                      key={index}
                    >
                      {department[0]}
                    </li>
                  ))}
                </ul>
                <span className="min-h-full w-2 border-2 "></span>
                <ul className="w-full h-ful font-kh list-none cursor-pointer">
                  <h1 className="text-center border-b-2 border-gray-300 p-2 swiper-no-swiping bg-gray-200 ">
                    ឆមាសទី​២
                  </h1>
                  {carriculum.departments.map((department, index) => (
                    <li
                      className="border-b-2 p-2 hover:border-b-2 hover:border-b-black"
                      key={index}
                    >
                      {department[0]}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <div className="slider-controler hidden md:block ">
          <div className="swiper-button-prev "></div>
          <div className="swiper-button-next "></div>
        </div>
        <div className="swiper-pagination"></div>
      </Swiper>
    </>
  );
}
