'use client';

import Image from 'next/image';
import { FiArrowUpRight } from 'react-icons/fi';
import SwiperContainer from '../ui/Swiper';
import SectionHeading from '../common/SectionHeading';
import SectionBadge from '../common/SectionBadge';

const servicesData = [
  {
    id: 1,
    title: 'Hair Styling',
    description: 'Experience the ultimate shedding solution with our Bath & Deshed service',
    image: '/images/service1.jpg',
    link: '#',
  },
  {
    id: 2,
    title: 'Nail Trimming',
    description: 'Safe and gentle nail care to keep your pet comfortable and healthy',
    image: '/images/service2.jpg',
    link: '#',
  },
  {
    id: 3,
    title: 'Hair Styling',
    description: 'Experience the ultimate shedding solution with our Bath & Deshed service',
    image: '/images/service3.jpg',
    link: '#',
  },
  {
    id: 4,
    title: 'Nail Trimming',
    description: 'Safe and gentle nail care to keep your pet comfortable and healthy',
    image: '/images/service4.jpg',
    link: '#',
  },
  {
    id: 5,
    title: 'Hair Styling',
    description: 'Experience the ultimate shedding solution with our Bath & Deshed service',
    image: '/images/service3.jpg',
    link: '#',
  },
  {
    id: 6,
    title: 'Nail Trimming',
    description: 'Safe and gentle nail care to keep your pet comfortable and healthy',
    image: '/images/service4.jpg',
    link: '#',
  },
];

export default function OurServices() {
  return (
    <div className="wrapper m-auto py-14">
      <div className="flex justify-center">
        <SectionBadge label={'Our Services'} />
      </div>
      <div>
        <SectionHeading
          cssClass={'text-center pb-10'}
          title={'Our All Grooming Services Includes'}
          subTitle={
            'Read the heartwarming stories of those who gave a second chance to animals in need.'
          }
        />
      </div>
      <SwiperContainer
        breakpoints={{
          0: { slidesPerView: 1, spaceBetween: 12 },
          640: { slidesPerView: 2, spaceBetween: 15 },
          768: { slidesPerView: 4, spaceBetween: 20 },
          1024: { slidesPerView: 4, spaceBetween: 24 },
        }}
      >
        {servicesData.map((item) => (
          <div
            key={item.id}
            className="relative rounded-3xl overflow-hidden bg-[#F9F6F1] group/card  figtree"
          >
            <div className="relative h-105 w-full">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover/card:scale-105 "
              />
              <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />
            </div>
            <div className="absolute top-4 right-4 w-12 h-12 bg-[#F9F6F1] rounded-full flex items-center justify-center shadow-md cursor-pointer">
              <FiArrowUpRight className="text-xl text-gray-800" />
            </div>

            <div className="absolute bottom-4 left-4 right-4 rounded-2xl px-6 py-5  transition-all duration-300  group-hover/card:bg-white   group-hover/card:shadow-lg">
              <h3 className="text-xl font-semibold text-white  group-hover/card:text-black mb-2 transition-colors fredoka ">
                {item.title}
              </h3>
              <p className="text-gray-200 group-hover/card:text-gray-600 leading-relaxed transition-colors line-clamp-2">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </SwiperContainer>
    </div>
  );
}
