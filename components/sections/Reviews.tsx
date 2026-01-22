'use client';

import ReviewCard from '../common/ReviewCard';
import SectionBadge from '../common/SectionBadge';
import SectionHeading from '../common/SectionHeading';
import SwiperContainer from '../ui/Swiper';

// const reviewsData = [
//   {
//     id: 1,
//     name: 'Mary Douglas',
//     role: 'Pet Lover',
//     avatar: '/images/Webp/Testimoinals4.webp',
//     rating: 5,
//     review:
//       'The staff were incredibly friendly and professional. My dog came back clean, happy, and stress-free. Highly recommended!',
//   },
//   {
//     id: 2,
//     name: 'John Carter',
//     role: 'Dog Owner',
//     avatar: '/images/Webp/Testimoinals4.webp',
//     rating: 4,
//     review:
//       'The staff were incredibly friendly and professional. My dog came back clean, happy, and stress-free. Highly recommended!',
//   },
//   {
//     id: 3,
//     name: 'Mary Douglas',
//     role: 'Pet Lover',
//     avatar: '/images/Webp/Testimoinals4.webp',
//     rating: 5,
//     review:
//       'The staff were incredibly friendly and professional. My dog came back clean, happy, and stress-free. Highly recommended!',
//   },
//   {
//     id: 4,
//     name: 'John Carter',
//     role: 'Dog Owner',
//     avatar: '/images/Webp/Testimoinals4.webp',
//     rating: 4,
//     review:
//       'The staff were incredibly friendly and professional. My dog came back clean, happy, and stress-free. Highly recommended!',
//   },
// ];

export default function Reviews({ reviewsData }: any) {
  const { heading, subHeading, reviews, tag, tagicon } = reviewsData || {};
  return (
    <div className="relative">
      <div
        className="
    absolute
    hidden
    lg:block
    bottom-0
    left-0
    lg:w-[15vw] xl:w-[20vw]
    lg:h-45
    bg-[url('/images/Webp/FAQRabit.webp')]
    bg-no-repeat
    bg-contain
    bg-bottom-left
    pointer-events-none
  "
      />
      <div className="wrapper m-auto py-16 ">
        <div className="flex justify-center">
          <SectionBadge label={tag} icon={tagicon} />
        </div>
        <div>
          <SectionHeading cssClass={'text-center mb-10'} title={heading} subTitle={subHeading} />
        </div>
        <SwiperContainer
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 12 },
            640: { slidesPerView: 2, spaceBetween: 15 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 2, spaceBetween: 24 },
          }}
        >
          {reviews?.map((item: any) => (
            <div className="py-4">
              <ReviewCard
                key={item.id}
                name={item.name}
                role={item.role}
                avatar={item.avatar}
                rating={item.rating}
                review={item.review}
              />
            </div>
          ))}
        </SwiperContainer>
      </div>
    </div>
  );
}
