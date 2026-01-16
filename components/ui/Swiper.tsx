'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import React from 'react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function SwiperContainer({ children, breakpoints }: any) {
  return (
    <div className="relative w-full mx-auto px-4 sm:px-8 lg:px-12 group">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={15}
        navigation={{
          nextEl: '.button-next',
          prevEl: '.button-prev',
        }}
        pagination={{
          clickable: true,
          el: '.custom-pagination',
        }}
        className="pb-16"
        breakpoints={breakpoints}
      >
        {React.Children.map(children, (child, index) => (
          <SwiperSlide key={index}>{child}</SwiperSlide>
        ))}
      </Swiper>

      {/* Footer Controls */}
      <div className="inner-wrapper m-auto">
        <div className="flex items-center justify-center gap-4 mt-6">
          <button className="button-prev p-2 rounded-full bg-white shadow-md border border-gray-100 text-gray-800 hover:bg-[#0a5e3b] hover:text-white transition-all">
            <HiChevronLeft size={24} />
          </button>

          {/* Pagination Dots */}
          <div className="custom-pagination flex justify-center"></div>

          <button className="button-next p-2 rounded-full bg-white shadow-md border border-gray-100 text-gray-800 hover:bg-[#0a5e3b] hover:text-white transition-all">
            <HiChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}
