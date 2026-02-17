import React from 'react';
import SectionBadge from '../common/SectionBadge';
import SectionHeading from '../common/SectionHeading';
import Image from 'next/image';

export default function HelpCenterBanner({ bannerSection }: any) {
  const { tag, tagicon, title, subTitle, image } = bannerSection || {};

  if (!bannerSection) {
    return null;
  }

  return (
    <div className="bg-color">
      <div className="inner-wrapper m-auto py-16 px-6 lg:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <SectionBadge label={tag} icon={tagicon} />
            <SectionHeading title={title} subTitle={subTitle} cssClass="text-left" />
          </div>
          <div className="w-full max-w-[550px] m-auto md:ml-auto">
            {image && (
              <Image
                src={image}
                height={420}
                width={550}
                alt="help center"
                className="object-contain h-auto w-full"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
