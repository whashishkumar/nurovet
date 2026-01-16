'use client';

import ReviewCard from '../common/ReviewCard';
import SectionHeading from '../common/SectionHeading';
import SwiperContainer from '../ui/Swiper';

// JSON Data
const reviewsData = [
  {
    id: 1,
    name: 'Mary Douglas',
    role: 'Pet Lover',
    avatar: '/images/Webp/Testimoinals4.webp',
    rating: 5,
    review:
      'The staff were incredibly friendly and professional. My dog came back clean, happy, and stress-free. Highly recommended!',
  },
  {
    id: 2,
    name: 'John Carter',
    role: 'Dog Owner',
    avatar: '/images/Webp/Testimoinals4.webp',
    rating: 4,
    review:
      'The staff were incredibly friendly and professional. My dog came back clean, happy, and stress-free. Highly recommended!',
  },
  {
    id: 3,
    name: 'Mary Douglas',
    role: 'Pet Lover',
    avatar: '/images/Webp/Testimoinals4.webp',
    rating: 5,
    review:
      'The staff were incredibly friendly and professional. My dog came back clean, happy, and stress-free. Highly recommended!',
  },
  {
    id: 4,
    name: 'John Carter',
    role: 'Dog Owner',
    avatar: '/images/Webp/Testimoinals4.webp',
    rating: 4,
    review:
      'The staff were incredibly friendly and professional. My dog came back clean, happy, and stress-free. Highly recommended!',
  },
];

export default function Reviews() {
  return (
    <div className="wrapper m-auto py-16">
      <div>
        <SectionHeading
          cssClass={'text-center mb-10'}
          title={'Loyal Hearts, Forever Homes.'}
          subTitle={
            'Read the heartwarming stories of those who gave a second chance to animals in need.'
          }
        />
      </div>
      <SwiperContainer
        breakpoints={{
          0: { slidesPerView: 1, spaceBetween: 12 },
          640: { slidesPerView: 2, spaceBetween: 15 },
          768: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 2, spaceBetween: 24 },
        }}
      >
        {reviewsData.map((item) => (
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
  );
}
