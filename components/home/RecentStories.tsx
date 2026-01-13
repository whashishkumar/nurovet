import React from 'react';
import SectionBadge from '../common/SectionBadge';
import SectionHeading from '../common/SectionHeading';
import Button from '../ui/Button';

const vetGalleryData = {
  left: {
    src: '/images/Container.png',
    alt: 'Vet grooming dog',
  },
  centerStack: [
    {
      src: '/images/Container1.png',
      alt: 'Vet with dog',
    },
    {
      src: '/images/Container2.png',
      alt: 'Vet holding dog',
    },
  ],
  highlight: {
    src: '/images/Container3.png',
    alt: 'Doctor holding puppy',
  },
  rightStack: [
    {
      src: '/images/Webp/faq-img.webp',
      alt: 'Vet exam',
    },
    {
      src: '/images/Container4.png',
      alt: 'Vet grooming',
    },
  ],
  button: {
    label: 'View More',
    href: '#',
  },
};

const VetGallery = () => {
  return (
    <section className="wrapper m-auto lg:px-0 px-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
        {/* Left */}
        <div className="lg:col-span-4">
          <div className="h-full overflow-hidden rounded-2xl">
            <img
              src={vetGalleryData.left.src}
              alt={vetGalleryData.left.alt}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Center Stack */}
        <div className="lg:col-span-2 flex flex-col gap-8 h-full">
          {vetGalleryData.centerStack.map((item, index) => (
            <div key={index} className="overflow-hidden rounded-2xl flex-1">
              <img src={item.src} alt={item.alt} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>

        {/* Highlight */}
        <div className="lg:col-span-4">
          <div className="h-full overflow-hidden rounded-2xl">
            <img
              src={vetGalleryData.highlight.src}
              alt={vetGalleryData.highlight.alt}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Stack */}
        <div className="lg:col-span-2 flex flex-col gap-8 h-full">
          {vetGalleryData.rightStack.map((item, index) => (
            <div key={index} className="overflow-hidden rounded-2xl flex-1">
              <img src={item.src} alt={item.alt} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>

      {/* Button from JSON */}
      <div className="mt-12 flex justify-center">
        <Button href={vetGalleryData.button.href} label={vetGalleryData.button.label} />
      </div>
    </section>
  );
};

export default function RecentStories() {
  return (
    <div className="bg-color">
      <div className="inner-wrapper m-auto lg:py:16 py-12 ">
        <div className="flex justify-center">
          <SectionBadge label="Our Specialities" icon="/icons/bone.svg" />
        </div>
        <SectionHeading
          title={'Our Veterinarian Success Stories'}
          subTitle={'Easily find and book trusted Pet Caregivers near you '}
        />
      </div>
      <VetGallery />
    </div>
  );
}
