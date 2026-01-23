'use client';
import React from 'react';
import Image from 'next/image';

// const mapData = {
//   mapSrc:
//     'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.5404230554!2d-0.121953!3d51.503324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604b900d26973%3A0x421f600f51391b0!2sLondon%20Eye!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk',
//   decoration: {
//     image: '/images/contactusbg.png',
//     alt: 'Decorative',
//   },
// };

export default function MapLoaction({ location }: any) {
  const { mapSrc, mapImage } = location || {};

  return (
    <div className="bg-color">
      <section className="inner-wrapper mx-auto px-6 py-16 lg:px-0 relative">
        <div className="items-start">
          <div className="relative rounded-[2.5rem] h-full min-h-125">
            <div className="absolute inset-0 bg-gray-50 rounded-[2.5rem] overflow-hidden">
              <iframe
                src={mapSrc}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale contrast-55 opacity-90"
              />
            </div>
          </div>
          <div
            className="
              hidden
              md:block
              absolute
              bottom-0
              left-30
              -translate-x-1/2
              w-[350px]
              lg:h-[380px]
              pointer-events-none
              z-20
            "
          >
            <Image src={mapImage} alt={'mapimage'} className="object-contain" fill priority />
          </div>
        </div>
      </section>
    </div>
  );
}
