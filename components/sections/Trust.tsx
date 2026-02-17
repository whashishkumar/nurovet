'use client';

import Image from 'next/image';
export default function TrustAuthoritySection({ heroBanner }: any) {
  const { featuresLeft, featuresRight, heading, subHeading } = heroBanner || {};

  return (
    <section className="py-16 bg-color">
      <div className="inner-wrapper m-auto px-6 lg:px-0">
        <div className="grid lg:grid-cols-[35%_63%] gap-[2%] items-center">
          <div>
            <h2 className="text-[1.875rem] font-semibold text-black fredoka">{heading}</h2>
            <p className="mt-4 text-black leading-relaxed text-[1.125rem] fredoka">{subHeading}</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-end">
            {featuresLeft?.map((item: any, i: number) => {
              const Icon = item.icon;
              return (
                <div key={i} className="flex flex-col items-center gap-3">
                  {item.icon && (
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={30}
                      height={30}
                      className="object-contain"
                      priority
                    />
                  )}
                  <p className="text-base font-medium text-black leading-snug text-center fredoka">
                    {item.title}
                  </p>
                </div>
              );
            })}
            {featuresRight?.map((item: any, i: number) => {
              const Icon = item.icon;
              return (
                <div key={i} className="flex flex-col items-center gap-3">
                  {item.icon && (
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={30}
                      height={30}
                      className="object-contain"
                      priority
                    />
                  )}
                  <p className="text-base font-medium text-black leading-snug text-center fredoka">
                    {item.title}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
