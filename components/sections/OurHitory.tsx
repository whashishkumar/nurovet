'use client';

import HistoryCard from '../common/HistoryCard';
import SectionBadge from '../common/SectionBadge';
import SectionHeading from '../common/SectionHeading';
import SwiperContainer from '../ui/Swiper';

// const historyData = [
//   {
//     id: 1,
//     year: '2011',
//     image: '/images/container1.png',
//     alt: 'Pet grooming professional',
//     description:
//       'In 2011, we launched our grooming services, catering to the needs of pet owners who seek professional care for their furry friends.',
//   },
//   {
//     id: 2,
//     year: '2015',
//     image: '/images/container1.png',
//     alt: 'Clinic expansion',
//     description:
//       'In 2015, we expanded our clinic with modern facilities and specialized staff to serve more pets and their families.',
//   },
//   {
//     id: 3,
//     year: '2020',
//     image: '/images/container1.png',
//     alt: 'Online booking',
//     description:
//       'In 2020, we introduced online booking and virtual consultations to make pet care more accessible for everyone.',
//   },
//   {
//     id: 4,
//     year: '2011',
//     image: '/images/container1.png',
//     alt: 'Pet grooming professional',
//     description:
//       'In 2011, we launched our grooming services, catering to the needs of pet owners who seek professional care for their furry friends.',
//   },
//   {
//     id: 5,
//     year: '2015',
//     image: '/images/container1.png',
//     alt: 'Clinic expansion',
//     description:
//       'In 2015, we expanded our clinic with modern facilities and specialized staff to serve more pets and their families.',
//   },
//   {
//     id: 6,
//     year: '2020',
//     image: '/images/container1.png',
//     alt: 'Online booking',
//     description:
//       'In 2020, we introduced online booking and virtual consultations to make pet care more accessible for everyone.',
//   },
// ];

export default function OurHistory({ ourHistoryData }: any) {
  const { heading, subHeading, history, tag, tagicon } = ourHistoryData || {};
  return (
    <div className="wrapper m-auto py-16">
      <div className="flex justify-center">
        <SectionBadge label={tag} icon={tagicon} />
      </div>
      <div>
        <SectionHeading cssClass={'text-center mb-4'} title={heading} subTitle={subHeading} />
      </div>
      <SwiperContainer
        breakpoints={{
          0: { slidesPerView: 1, spaceBetween: 12 },
          640: { slidesPerView: 2, spaceBetween: 10 },
          768: { slidesPerView: 3, spaceBetween: 15 },
          1024: { slidesPerView: 4, spaceBetween: 20 },
        }}
      >
        {history?.map((item: any) => (
          <HistoryCard
            key={item.id}
            year={item.year}
            image={item.image}
            alt={item.alt}
            description={item.description}
          />
        ))}
      </SwiperContainer>
    </div>
  );
}
