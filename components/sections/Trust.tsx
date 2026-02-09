'use client';

import Image from "next/image";
export default function TrustAuthoritySection({ heroBanner }: any) {

  const { featuresLeft, featuresRight, heading, subHeading } = heroBanner || {};

  return (
    <section className="bg-[#e9e6e1] py-10">
      <div className="inner-wrapper mx-auto px-6 lg:px-0">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-[1.875rem] font-semibold text-black fredoka">
              {heading}
            </h2>
            <p className="mt-4 text-black leading-relaxed text-sm">
              {subHeading}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

            {featuresLeft?.map((item: any, i: number) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="flex flex-col items-center gap-3"
                >
                  {item.icon && (
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={24}
                      height={24}
                      className="object-contain"
                    />
                  )}
                  <p className="text-sm font-medium text-black leading-snug text-center">
                    {item.title}
                  </p>
                </div>
              );
            })}
            {featuresRight?.map((item: any, i: number) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="flex flex-col items-center gap-3"
                >
                  {item.icon && (
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={24}
                      height={24}
                      className="object-contain"
                    />
                  )}
                  <p className="text-sm font-medium text-black leading-snug text-center">
                    {item.title}
                  </p>
                </div>
              );
            })}

          </div>
        </div>

      </div>
    </section >
  );
}
