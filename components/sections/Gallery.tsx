'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { FiZoomIn, FiX } from 'react-icons/fi';
import SectionHeading from '../common/SectionHeading';

const galleryData = [
  { id: 1, src: '/images/ourStory.jpg', alt: 'Cat grooming', span: 'small' },
  { id: 2, src: '/images/ourStory.jpg', alt: 'Rabbit care', span: 'small' },
  { id: 3, src: '/images/ourStory.jpg', alt: 'Dog grooming', span: 'tall' },
  { id: 4, src: '/images/ourStory.jpg', alt: 'Vet consultation', span: 'wide' },
  { id: 5, src: '/images/ourStory.jpg', alt: 'Dog haircut', span: 'small' },
  { id: 6, src: '/images/ourStory.jpg', alt: 'Dog drying', span: 'small' },
  { id: 7, src: '/images/ourStory.jpg', alt: 'Dog grooming', span: 'small' },
  { id: 8, src: '/images/ourStory.jpg', alt: 'Vet consultation', span: 'tall' },
  { id: 9, src: '/images/ourStory.jpg', alt: 'Dog haircut', span: 'wide' },
  { id: 10, src: '/images/ourStory.jpg', alt: 'Dog drying', span: 'small' },
];

const spanClasses: Record<string, string> = {
  small: '',
  tall: 'md:row-span-2',
  wide: 'md:row-span-2 lg:col-span-2',
};

export default function Gallery() {
  const [activeImage, setActiveImage] = useState<string | null>(null);
  return (
    <div className="bg-white">
      {/* GRID */}
      <div className="inner-wrapper mx-auto lg:px-0 px-4 pb-10 ">
        <SectionHeading
          cssClass={'text-left'}
          title={'Our Gallery of Pet Care'}
          subTitle={'Easily find and book trusted Pet Caregivers near you '}
        />
        <div
          className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          auto-rows-[180px]
          sm:auto-rows-[200px]
          lg:auto-rows-[220px]
          gap-6
          mt-6
        "
        >
          {galleryData.map((item) => (
            <div
              key={item.id}
              className={`relative overflow-hidden rounded-2xl group ${spanClasses[item.span]}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <button
                  onClick={() => setActiveImage(item.src)}
                  className="h-14 w-14 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition"
                >
                  <FiZoomIn size={26} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* MODAL */}
      {activeImage && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <button
            onClick={() => setActiveImage(null)}
            className="absolute top-25 right-100 text-white z-10"
          >
            <FiX size={24} />
          </button>

          <div className="relative max-w-4xl w-full">
            <Image
              src={activeImage}
              alt="Gallery preview"
              width={1200}
              height={800}
              className="w-full h-auto rounded-xl object-cover"
            />
          </div>
        </div>
      )}
    </div>
  );
}
