// 'use client';

// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination } from 'swiper/modules';
// import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
// import React from 'react';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// export default function SwiperContainer({ children, breakpoints }: any) {
//   return (
//     <div className="relative w-full mx-auto px-4 sm:px-8 lg:px-12 group">
//       <Swiper
//         modules={[Navigation, Pagination]}
//         spaceBetween={15}
//         navigation={{
//           nextEl: '.button-next',
//           prevEl: '.button-prev',
//         }}
//         pagination={{
//           clickable: true,
//           el: '.custom-pagination',
//         }}
//         className="pb-16"
//         breakpoints={breakpoints}
//       >
//         {React.Children.map(children, (child, index) => (
//           <SwiperSlide key={index}>{child}</SwiperSlide>
//         ))}
//       </Swiper>
//       <div className="inner-wrapper m-auto">
//         <div className="flex items-center justify-center gap-4 mt-6">
//           <button className="button-prev p-2 rounded-full bg-white shadow-md border border-gray-100 text-gray-800 hover:bg-[#0a5e3b] hover:text-white transition-all">
//             <HiChevronLeft size={24} />
//           </button>
//           {/* Pagination Dots */}
//           <div className="custom-pagination flex justify-center"></div>
//           <button className="button-next p-2 rounded-full bg-white shadow-md border border-gray-100 text-gray-800 hover:bg-[#0a5e3b] hover:text-white transition-all">
//             <HiChevronRight size={24} />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

'use client';

import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function SwiperContainer({
  children,
  breakpoints,
  autoPlay = false,
  delay = 3000,
  showDots = true,
}: any) {
  const [_, setInit] = useState(false);

  const paginationRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="relative w-full mx-auto px-4 sm:px-8 lg:px-12">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={15}
        autoplay={
          autoPlay
            ? {
                delay,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }
            : false
        }
        // Direct assignment to the refs
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        pagination={
          showDots
            ? {
                clickable: true,
                el: paginationRef.current,
              }
            : false
        }
        // This is the key: force initialization after the component mounts
        onInit={(swiper) => {
          setInit(true);
        }}
        className="pb-16"
        breakpoints={breakpoints}
      >
        {React.Children.map(children, (child, index) => (
          <SwiperSlide key={index}>{child}</SwiperSlide>
        ))}
      </Swiper>

      {/* Controls */}
      <div className="inner-wrapper m-auto">
        <div className="flex items-center  gap-4 mt-6 justify-around pt-8">
          <button
            ref={prevRef}
            className="p-2 rounded-full bg-white shadow-md border border-gray-100 text-gray-800 hover:bg-[#0a5e3b] hover:text-white transition-all disabled:opacity-50"
          >
            <HiChevronLeft size={24} />
          </button>

          {showDots && (
            <div
              ref={paginationRef}
              className="custom-pagination flex justify-between static! w-auto!"
            />
          )}

          <button
            ref={nextRef}
            className="p-2 rounded-full bg-white shadow-md border border-gray-100 text-gray-800 hover:bg-[#0a5e3b] hover:text-white transition-all disabled:opacity-50"
          >
            <HiChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}
