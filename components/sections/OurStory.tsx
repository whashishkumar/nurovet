import React from 'react';
import SectionBadge from '../common/SectionBadge';
import SectionHeading from '../common/SectionHeading';
import Image from 'next/image';
import { FiPhoneCall } from 'react-icons/fi';
import Button from '../ui/Button';
import { BsCheck } from 'react-icons/bs';

// const data = {
//   badge: {
//     label: 'Our Story',
//     icon: '/icons/bone.svg',
//   },
//   heading: {
//     title: 'We are fully committed to your pet’s well-being',
//     subTitle:
//       'For over 12 years, we’ve been dedicated to making pets look fabulous and feel loved. Because to us, your pet isn’t just a client – they’re family.',
//     align: 'text-left',
//     subHeadingCss: 'lg:width-[2rem]',
//   },
//   features: [
//     'Skilled personnel',
//     'Nutrition and Diet',
//     'Grooming Tips',
//     'Best Veterinarians',
//     'Quality Foods',
//     'Emergency Care',
//   ],
//   cta: {
//     buttonText: 'Get Started Now',
//     buttonHref: '/contact',
//     phoneLabel: 'Call for Consultation',
//     phone: '+1 (234) 567-890',
//   },
//   image: {
//     src: '/images/ourStory.jpg',
//     alt: 'Our Story',
//   },
// };

export default function OurStory({ ourStoryData }: any) {
  const { heading, features, cta, image, tag, tagicon, subHeading } = ourStoryData || {};
  return (
    <div className="bg-white">
      <div className="inner-wrapper m-auto lg:py-16 py-12 lg:px-0 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex justify-left">
              <SectionBadge label={tag} icon={tagicon} />
            </div>
            <SectionHeading
              cssClass={'text-left'}
              title={heading}
              subTitle={subHeading}
              subHeadingCss={'lg:width-[2rem] '}
            />

            <div className="max-w-4xl">
              {/* FEATURES GRID */}
              <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                {features?.map((item: any, index: any) => (
                  <li key={index} className="flex items-start gap-3 group">
                    <span className="flex h-6 w-6 mt-0.5 items-center justify-center rounded-md border border-[#00603A] bg-[#00603A]/5 text-[#00603A] shrink-0 transition-color">
                      <BsCheck size={20} />
                    </span>
                    <span className="text-[#333333] text-base font-medium leading-tight">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              {/* CTA SECTION */}
              <div className="mt-12 flex flex-col lg:flex-row items-center gap-8">
                <Button
                  href={cta.buttonHref}
                  label={cta.buttonText}
                  variant="primary"
                  className="shadow-xl transform hover:scale-105 w-full sm:w-auto px-10 py-5 rounded-full font-bold transition-all"
                />
                <div className="hidden lg:block w-px h-12 bg-gray-200" />
                <div className="flex items-center gap-4 group cursor-pointer">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#A1A4B1] text-[#00603A] transition-all group-hover:bg-[#00603A] group-hover:border-[#00603A] group-hover:text-white shadow-md">
                    <FiPhoneCall size={22} />
                  </span>
                  <div className="flex flex-col">
                    <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">
                      {cta.phoneLabel}
                    </p>
                    <a
                      href={`tel:${cta.phone}`}
                      className="font-bold text-xl sm:text-2xl text-[#02000F] hover:text-[#00603A] transition-colors"
                    >
                      {cta.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative w-full h-55 sm:h-70 md:h-85 lg:h-122.5">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover rounded-2xl"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
