'use client';
import Image from 'next/image';
import Button from '../ui/Button';
import { useEffect, useState } from 'react';
import { CommonEndPoints } from '@/lib/service/CommonEndPoints';

// const bannerData = {
//   title: {
//     line1: 'Explore Our Comprehensive',
//     line2: 'Petcare Solutions',
//   },
//   image: {
//     src: '/images/Webp/footer-cta-animal.webp',
//     alt: 'Pets',
//   },
//   button: {
//     label: 'Book a Demo Now !',
//     href: '',
//   },
// };

const ExplorePetcareBanner = () => {
  const [bannerResp, setBannerResp] = useState(null);
  const { button, image, heading, subHeading }: any = bannerResp || {};

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await CommonEndPoints.footerBannerSection();
        setBannerResp(data);
      } catch (error) {
        console.error('Error fetching Pet Care Solutions Banner Data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <section className="relative bg-[#0B5D3B] pb-10">
      <div className="inner-wrapper mx-auto px-4">
        <div
          className="
            relative
            flex
            flex-col
            md:flex-row
            items-center
            justify-between
            gap-6
            bg-white
            rounded-b-3xl
            p-6
            md:px-10
          "
        >
          <div className="flex ">
            {/* LEFT CONTENT */}
            {heading && subHeading && (
              <h2 className="text-xl md:text-[2rem] font-semibold text-[#02000F] leading-snug fredoka">
                {heading}
                <br />
                {subHeading}
              </h2>
            )}
            {/* CENTER IMAGE */}
            <div className="absolute lg:-bottom-6.5 md:-bottom-10 translate-x-full hidden md:block">
              <div className="relative w-[140px] md:w-[280px] h-[140px] md:h-[100px]">
                {image?.src && (
                  <Image
                    src={image?.src}
                    alt={image?.alt}
                    fill
                    className="object-contain "
                    priority
                  />
                )}
              </div>
            </div>
          </div>
          {/* CTA BUTTON */}
          {button && <Button href={button?.href} label={button?.label} showIcon={true} />}
        </div>
      </div>
    </section>
  );
};

export default ExplorePetcareBanner;
