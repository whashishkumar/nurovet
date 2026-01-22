'use client';
import Image from 'next/image';
import Button from '../ui/Button';
import { BsCheck2All } from 'react-icons/bs';

export default function HeroBanner({ heroBanner }: any) {
  const { heroContent, featuresLeft, featuresRight } = heroBanner || {};
  return (
    <div className="bg-color w-full relative">
      <div className="sm:px-6 mx-auto p-4 sm:py-6  ">
        <div
          className="relative w-full min-h-165 md:min-h-185 lg:h-dvh bg-cover  bg-center bg-no-repeat rounded-2xl overflow-hidden flex flex-col"
          style={{ backgroundImage: `url('${heroContent?.backgroundImage}')` }}
        >
          <div className="absolute inset-0 bg-linear-to-b from-[#0b5d3b]/80 via-[#0b5d3b]/0 to-transparent z-0" />
          <div className="relative lg:absolute inset-0 z-20 flex items-center md:grow py-12 lg:py-0">
            <div className="px-6 sm:px-10 md:px-16 w-full mt-10 lg:mt-0">
              <div className="inner-wrapper m-auto">
                <h1 className="text-[2rem] lg:text-[4.125rem] font-bold leading-[1.2] lg:leading-19 text-[#003366] fredoka">
                  {heroContent?.title?.first}
                  <span className="text-[#00603A] block">{heroContent?.title?.highlight}</span>
                  {heroContent?.title?.last}
                </h1>
                <ul className="mt-6 space-y-2">
                  {heroContent?.features?.map((feature: any, index: any) => (
                    <li
                      key={index}
                      className="text-[#003366] font-bold text-base lg:text-[1.5rem] flex items-center"
                    >
                      <span className="mr-2 shrink-0">
                        <BsCheck2All className="w-5 h-5 sm:w-6 sm:h-6" />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="pt-8 pb-4 flex flex-wrap gap-4">
                  <Button
                    href={heroContent.cta.href}
                    label={heroContent.cta.label}
                    variant="primary"
                    className="shadow-lg transform hover:scale-105 w-full sm:w-auto text-center justify-center"
                  />
                  <Button
                    href={heroContent.demobtn.href}
                    label={heroContent.demobtn.label}
                    variant="outline"
                    className="shadow-lg transform hover:scale-105 w-full sm:w-auto text-center justify-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Features Section */}
      <div className="pb-12 lg:relative lg:-translate-y-30 z-28">
        <div className="inner-wrapper mx-auto flex flex-col gap-8 md:flex-row md:justify-center md:items-start lg:gap-12 lg:justify-between">
          {/* Left Feature Map */}
          <div className="flex flex-row justify-center gap-6 sm:gap-10">
            {featuresLeft?.map((item: any) => (
              <div
                key={item.id}
                className="max-w-40 sm:max-w-40 flex flex-col items-center text-center gap-3 fredoka"
              >
                <div>
                  {item.icon && (
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={24}
                      height={24}
                      className="object-contain"
                    />
                  )}
                </div>
                <p className="text-black font-semibold text-lg sm:text-sm leading-snug">
                  {item.title}
                </p>
              </div>
            ))}
          </div>

          {/* Right Feature Map */}
          <div className="flex flex-row justify-center gap-6 sm:gap-10">
            {featuresRight?.map((item: any) => (
              <div
                key={item.id}
                className="max-w-40 sm:max-w-47.5 flex flex-col items-center text-center gap-3 fredoka"
              >
                <div>
                  {item.icon && (
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={24}
                      height={24}
                      className="object-contain"
                    />
                  )}
                </div>
                <p className="text-black font-semibold text-lg sm:text-sm leading-snug">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
