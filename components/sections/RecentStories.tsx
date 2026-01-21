import React from 'react';
import SectionBadge from '../common/SectionBadge';
import SectionHeading from '../common/SectionHeading';
import Button from '../ui/Button';
import Image from 'next/image';

// const vetGalleryData = {
//   left: {
//     src: '/images/Container.png',
//     alt: 'Vet grooming dog',
//   },
//   centerStack: [
//     {
//       src: '/images/Container1.png',
//       alt: 'Vet with dog',
//     },
//     {
//       src: '/images/Container2.png',
//       alt: 'Vet holding dog',
//     },
//   ],
//   highlight: {
//     src: '/images/Container3.png',
//     alt: 'Doctor holding puppy',
//   },
//   rightStack: [
//     {
//       src: '/images/Webp/faq-img.webp',
//       alt: 'Vet exam',
//     },
//     {
//       src: '/images/Container4.png',
//       alt: 'Vet grooming',
//     },
//   ],
//   button: {
//     label: 'View More',
//     href: '#',
//   },
// };

const VetGallery = ({ recentStories }: any) => {
  const { left, centerStack, highlight, rightStack, button } = recentStories || {};

  return (
    <section className="wrapper m-auto px-6 md:px-6">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-stretch">
        <div className="md:col-span-4 h-[300px] md:h-auto">
          <div className="h-full overflow-hidden rounded-2xl">
            <img src={left.src} alt={left.alt} className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Center Stack - Spans 2 of 12 on Tablet and Desktop */}
        <div className="md:col-span-2 flex flex-col gap-4 md:gap-8 h-full">
          {centerStack?.map((item: any, index: any) => (
            <div key={index} className="overflow-hidden rounded-2xl flex-1 h-[150px] md:h-auto">
              <img src={item.src} alt={item.alt} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>

        {/* Highlight - Spans 4 of 12 on Tablet and Desktop */}
        <div className="md:col-span-4 h-[300px] md:h-auto">
          <div className="h-full overflow-hidden rounded-2xl">
            <Image src={highlight.src} alt={highlight.alt} className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Right Stack - Spans 2 of 12 on Tablet and Desktop */}
        <div className="md:col-span-2 flex flex-col gap-4 md:gap-8 h-full">
          {rightStack?.map((item: any, index: number) => (
            <div key={index} className="overflow-hidden rounded-2xl flex-1 h-[150px] md:h-auto">
              <img src={item.src} alt={item.alt} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-12 flex justify-center">
        <Button href={button?.href} label={button?.label} />
      </div>
    </section>
  );
};

export default function RecentStories({ recentStories }: any) {
  const { tag, heading, tagicon, subHeading } = recentStories || {};
  return (
    <div className="bg-color">
      <div className="inner-wrapper m-auto lg:py:16 py-12  px-6 lg:px-0">
        <div className="flex justify-center">
          <SectionBadge label={tag} icon={tagicon} />
        </div>
        <SectionHeading title={heading} subTitle={subHeading} />
      </div>
      <VetGallery recentStories={recentStories} />
    </div>
  );
}
