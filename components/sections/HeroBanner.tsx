'use client';
import Image from 'next/image';
import Button from '../ui/Button';
import { BsCheck2All } from 'react-icons/bs';

export default function HeroBanner({ heroBanner }: any) {
  const { heroContent, featuresLeft, featuresRight } = heroBanner || {};
 
  
  return (
    <div className="bg-color w-full ">
      <div className="mx-auto sm:px-6 p-4 sm:py-6">
        <div className="relative w-full bg-[#0b5d3b] rounded-2xl overflow-hidden min-h-[500px] flex items-stretch">
          <div className="innerWrappr mx-auto grid  items-">
            <div className="text-white py-12 lg:py-20 z-10">
              <h1 className="text-[2.5rem] lg:text-[4rem] font-bold leading-tight fredoka">
                {heroContent?.title?.first}
                <span className="block">{heroContent?.title?.highlight}</span>
                {heroContent?.title?.last}
              </h1>
              <ul className="mt-8 space-y-4">
                {heroContent?.features?.map((feature: any, index: number) => (
                  <li key={index} className="font-semibold text-lg lg:text-xl flex items-center">
                    <BsCheck2All className="w-6 h-6 mr-3 text-green-300" />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex flex-wrap gap-4">
                <Button
                  href={heroContent.cta.href}
                  label={heroContent.cta.label}
                  className="bg-white !text-black hover:bg-opacity-90 px-8 py-3 rounded-full font-normal transition-all hover:!text-white"
                />
                <Button
                  href={heroContent.demobtn.href}
                  label={heroContent.demobtn.label}
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:!text-[#000] px-8 py-3 rounded-full font-normal transition-all"
                />
              </div>
            </div>

          </div>
          <div className="relative h-full min-h-[300px] md:min-h-[700px]">
            <div
              className="absolute inset-0 bg-no-repeat bg-contain bg-center bottom md:bg-right-bottom h-full"
              style={{
                backgroundImage: "url('/images/herobanner.png')",
                backgroundPosition: 'bottom right'
              }}
            />
          </div>
        </div>


        {/* Bottom Features Section */}
        {/* <div className="pb-12 lg:relative lg:-translate-y-30 z-28"> */}
        {/* <div className="inner-wrapper mx-auto flex flex-col gap-8 md:flex-row md:justify-center md:items-start lg:gap-12 lg:justify-between">
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
        </div> */}
      </div>
    </div>
  );
}
