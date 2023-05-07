import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Keyboard, EffectCoverflow, Pagination, Navigation } from "swiper";

export default function CarouselPrograms({ facultiesData }) {
  return (
    <Swiper
      slidesPerView={3}
      slidesPerGroup={1}
      speed={300}
      spaceBetween={50}
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      keyboard={{
        enabled: true,
      }}
      breakpoints={{
        0: {
          slidesPerView: 1,
          spaceBetween: 50,
        },
        640: {
          slidesPerView: 1.5,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 25,
        modifier: 2.5,
        slideShadows: false,
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
      modules={[Keyboard, EffectCoverflow, Pagination, Navigation]}
      className="swiper_container"
    >
      {facultiesData.map((faculties, index) => (
        <SwiperSlide key={index}>
          <div className="h-80vh border-2 border-gray-800 rounded-md text-black  bg-white shadow-sm shadow-gray-800 font-kh">
            <h1 className="border-2 border-gray-300 bg-gray-800 text-white  rounded-t-md  text-center p-3 swiper-no-swiping ">
              {faculties.facultiesName}
            </h1>
            <ul className="w-full h-ful font-kh list-none cursor-pointer">
              {faculties.departments.map((department, index) => (
                <li
                  className="border-b-2 p-2 hover:border-b-2 hover:border-b-black"
                  key={index}
                >
                  {department[0]}
                </li>
              ))}
            </ul>
          </div>
        </SwiperSlide>
      ))}
      <div className="slider-controler hidden md:block ">
        <div className="swiper-button-prev "></div>
        <div className="swiper-button-next "></div>
      </div>
      <div className="swiper-pagination"></div>
    </Swiper>
  );
}
