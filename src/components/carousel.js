import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Keyboard, EffectCoverflow, Pagination, Navigation } from "swiper";

export default function Carousel() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        slidesPerGroup={1}
        speed={300}
        spaceBetween={100}
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
          depth: 15,
          modifier: 2.5,
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
        <SwiperSlide>
          <div className="h-80vh border-2 rounded-md border-black">
            <h1 className="border-b-2 border-black font-kh text-center p-2 swiper-no-swiping">
              ថ្នាក់បរិញ្ញាបត្រ
            </h1>
            <ul className="w-full h-ful font-kh list-none cursor-pointer">
              <li className="border-b-2 p-2 hover:border-b-2 hover:border-b-black">
                ថ្នាក់បរិញ្ញាបត្រ
              </li>
              <li className="border-b-2 p-2 hover:border-b-2 hover:border-b-black">
                ថ្នាក់បរិញ្ញាបត្រ
              </li>
              <li className="border-b-2 p-2 hover:border-b-2 hover:border-b-black">
                ថ្នាក់បរិញ្ញាបត្រ
              </li>
              <li className="border-b-2 p-2 hover:border-b-2 hover:border-b-black">
                ថ្នាក់បរិញ្ញាបត្រ
              </li>
              <li className="border-b-2 p-2 hover:border-b-2 hover:border-b-black">
                ថ្នាក់បរិញ្ញាបត្រ
              </li>
              <li className="border-b-2 p-2 hover:border-b-2 hover:border-b-black">
                ថ្នាក់បរិញ្ញាបត្រ
              </li>
            </ul>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-80vh border-2 rounded-md border-black">
            <h1 className="border-b-2 border-black font-kh text-center p-2 swiper-no-swiping">
              ថ្នាក់បរិញ្ញាបត្រ
            </h1>
            <ul className="w-full h-ful font-kh list-none">
              <li className="border-b-2 p-2 hover:border-b-2 hover:border-b-black">
                ថ្នាក់បរិញ្ញាបត្រ
              </li>
              <li className="border-b-2 p-2 hover:border-b-2 hover:border-b-black">
                ថ្នាក់បរិញ្ញាបត្រ
              </li>
              <li className="border-b-2 p-2 hover:border-b-2 hover:border-b-black">
                ថ្នាក់បរិញ្ញាបត្រ
              </li>
              <li className="border-b-2 p-2 hover:border-b-2 hover:border-b-black">
                ថ្នាក់បរិញ្ញាបត្រ
              </li>
              <li className="border-b-2 p-2 hover:border-b-2 hover:border-b-black">
                ថ្នាក់បរិញ្ញាបត្រ
              </li>
              <li className="border-b-2 p-2 hover:border-b-2 hover:border-b-black">
                ថ្នាក់បរិញ្ញាបត្រ
              </li>
            </ul>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-80vh border-2 rounded-md border-black">
            <h1 className="border-b-2 border-black font-kh text-center p-2 swiper-no-swiping">
              ថ្នាក់បរិញ្ញាបត្រ
            </h1>
            <ul className="w-full h-ful font-kh list-none">
              <li className="border-b-2 p-2 hover:border-b-2 hover:border-b-black">
                ថ្នាក់បរិញ្ញាបត្រ
              </li>
              <li className="border-b-2 p-2 hover:border-b-2 hover:border-b-black">
                ថ្នាក់បរិញ្ញាបត្រ
              </li>
              <li className="border-b-2 p-2 hover:border-b-2 hover:border-b-black">
                ថ្នាក់បរិញ្ញាបត្រ
              </li>
              <li className="border-b-2 p-2 hover:border-b-2 hover:border-b-black">
                ថ្នាក់បរិញ្ញាបត្រ
              </li>
              <li className="border-b-2 p-2 hover:border-b-2 hover:border-b-black">
                ថ្នាក់បរិញ្ញាបត្រ
              </li>
              <li className="border-b-2 p-2 hover:border-b-2 hover:border-b-black">
                ថ្នាក់បរិញ្ញាបត្រ
              </li>
            </ul>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-80vh border-2 rounded-md border-black">
            <h1 className="border-b-2 border-black font-kh text-center p-2 swiper-no-swiping">
              ថ្នាក់បរិញ្ញាបត្រ
            </h1>
            <ul className="w-full h-ful font-kh list-none">
              <li className="border-b-2 p-2 hover:border-b-2 hover:border-b-black">
                ថ្នាក់បរិញ្ញាបត្រ
              </li>
              <li className="border-b-2 p-2 hover:border-b-2 hover:border-b-black">
                ថ្នាក់បរិញ្ញាបត្រ
              </li>
              <li className="border-b-2 p-2 hover:border-b-2 hover:border-b-black">
                ថ្នាក់បរិញ្ញាបត្រ
              </li>
              <li className="border-b-2 p-2 hover:border-b-2 hover:border-b-black">
                ថ្នាក់បរិញ្ញាបត្រ
              </li>
              <li className="border-b-2 p-2 hover:border-b-2 hover:border-b-black">
                ថ្នាក់បរិញ្ញាបត្រ
              </li>
              <li className="border-b-2 p-2 hover:border-b-2 hover:border-b-black">
                ថ្នាក់បរិញ្ញាបត្រ
              </li>
            </ul>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-80vh border-2 rounded-md border-black">
            <h1 className="border-b-2 border-black font-kh text-center p-2 swiper-no-swiping">
              ថ្នាក់បរិញ្ញាបត្រ
            </h1>
            <ul className="w-full h-ful font-kh list-none">
              <li className="border-b-2 p-2 hover:border-b-2 hover:border-b-black">
                ថ្នាក់បរិញ្ញាបត្រ
              </li>
              <li className="border-b-2 p-2 hover:border-b-2 hover:border-b-black">
                ថ្នាក់បរិញ្ញាបត្រ
              </li>
              <li className="border-b-2 p-2 hover:border-b-2 hover:border-b-black">
                ថ្នាក់បរិញ្ញាបត្រ
              </li>
              <li className="border-b-2 p-2 hover:border-b-2 hover:border-b-black">
                ថ្នាក់បរិញ្ញាបត្រ
              </li>
              <li className="border-b-2 p-2 hover:border-b-2 hover:border-b-black">
                ថ្នាក់បរិញ្ញាបត្រ
              </li>
              <li className="border-b-2 p-2 hover:border-b-2 hover:border-b-black">
                ថ្នាក់បរិញ្ញាបត្រ
              </li>
            </ul>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-80vh border-2 rounded-md border-black">
            <h1 className="border-b-2 border-black font-kh text-center p-2 swiper-no-swiping">
              ថ្នាក់បរិញ្ញាបត្រ
            </h1>
            <ul className="w-full h-ful font-kh list-none">
              <li className="border-b-2 p-2 hover:border-b-2 hover:border-b-black">
                ថ្នាក់បរិញ្ញាបត្រ
              </li>
              <li className="border-b-2 p-2 hover:border-b-2 hover:border-b-black">
                ថ្នាក់បរិញ្ញាបត្រ
              </li>
              <li className="border-b-2 p-2 hover:border-b-2 hover:border-b-black">
                ថ្នាក់បរិញ្ញាបត្រ
              </li>
              <li className="border-b-2 p-2 hover:border-b-2 hover:border-b-black">
                ថ្នាក់បរិញ្ញាបត្រ
              </li>
              <li className="border-b-2 p-2 hover:border-b-2 hover:border-b-black">
                ថ្នាក់បរិញ្ញាបត្រ
              </li>
              <li className="border-b-2 p-2 hover:border-b-2 hover:border-b-black">
                ថ្នាក់បរិញ្ញាបត្រ
              </li>
            </ul>
          </div>
        </SwiperSlide>

        <div className="slider-controler hidden md:block ">
          <div className="swiper-button-prev "></div>
          <div className="swiper-button-next "></div>
        </div>
        <div className="swiper-pagination"></div>
      </Swiper>
    </>
  );
}
