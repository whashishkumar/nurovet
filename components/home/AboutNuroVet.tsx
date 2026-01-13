// app/components/Hero.tsx
import Image from 'next/image';
import Button from '../ui/Button';
import { BsCheck } from 'react-icons/bs';
import { FiPhoneCall } from 'react-icons/fi';
import SectionBadge from '../common/SectionBadge';

const heroData = {
  badge: 'About Nurovet',
  title: {
    text: 'Committed to smarter veterinary management and healthier pets.',
  },
  description:
    'Nurovet is an AI-driven veterinary intelligence platform designed to augment—not replace—clinical judgment. It functions as a digital specialist, continuously analyzing data, recognizing patterns, and delivering insights that improve diagnostic accuracy, workflow efficiency, and patient outcomes.',
  features: [
    'Nurovet is not software.',
    'Reduced diagnostic oversight',
    'Earlier disease detection',
    'Nurovet is clinical cognition at scale.',
    'Automated documentation',
    'Higher client trust & retention',
  ],
  cta: {
    buttonText: 'Learn More',
    phoneLabel: 'Call us:',
    phone: '+1 (424) 323 3268',
  },
  image: {
    src: '/images/about.svg',
    alt: 'Nurovet Dashboard',
  },
};

export default function Hero() {
  return (
    <section className="bg-color overflow-hidden">
      <div
        className="
    absolute
    hidden
    lg:block
    bg-bottom-left
    lg:w-[30vw] xl:w-[30vw]
    lg:h-175
    bg-[url('/images/Webp/aboutcat.webp')]
    bg-no-repeat
    bg-contain
    overflow-hidden
      "
      />

      <div
        className="
    absolute
    hidden
    lg:block
    right-0
    lg:w-[50vw] xl:w-[50vw]
    lg:h-175
    bg-[url('/images/about.svg')]
    bg-no-repeat
    bg-contain
    bg-right
    overflow-hidden
  "
      />

      <div className="wrapper m-auto lg:px-0 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-0 ">
          {/* LEFT CONTENT */}
          <div className=" sm:px-10 md:px-16 lg:px-0 lg:pl-22 order-2 lg:order-1 z-1">
            <SectionBadge label="About Nurovet" icon="/icons/bone.svg" />
            <div className="inner-wrapper mx-auto ">
              <h1 className="text-[1.85rem] sm:text-[3rem] lg:text-[3.5rem] font-semibold text-[#02000F] leading-[1.2] lg:leading-tight fredoka">
                {heroData.title.text}
              </h1>
              <p className="mt-6 text-[#000000] leading-relaxed onesta font-normal text-base sm:text-lg lg:text-xl">
                {heroData.description}
              </p>
              {/* FEATURES */}
              <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
                {heroData.features.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 onesta">
                    <span className="flex h-5 w-5 mt-1 items-center justify-center rounded-md border border-[#00603A] text-[#00603A] shrink-0">
                      <BsCheck size={18} />
                    </span>
                    <span className="text-[#000000] text-sm sm:text-base">{item}</span>
                  </li>
                ))}
              </ul>

              {/* CTA SECTION */}
              <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-8">
                <Button
                  href={'/'}
                  label={heroData.cta.buttonText}
                  variant="primary"
                  className="shadow-lg transform hover:scale-105 w-full sm:w-auto px-10 py-4 flex justify-center items-center"
                />

                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[#A1A4B1] text-[#02000F]">
                    <FiPhoneCall size={20} />
                  </span>
                  <div>
                    <p className="font-semibold fredoka text-lg sm:text-xl text-[#02000F] leading-tight">
                      {heroData.cta.phoneLabel}
                    </p>
                    <p className="font-normal text-[#02000F] text-base sm:text-lg">
                      {heroData.cta.phone}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
