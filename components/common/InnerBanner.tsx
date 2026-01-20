import React from 'react';
import Breadcrumbs from '../ui/Breadcrumbs';

export default function InnerBanner({ bannerInfo, className }: any) {
  return (
    <div className={`${className ? className : 'bg-white'}  p-4 sm:p-6 relative`}>
      <div
        className="relative w-full min-h-87.5 sm:min-h-100 md:min-h-112.5 rounded-[1.3125rem] overflow-hidden bg-no-repeat bg-cover bg-center flex flex-col"
        style={{ backgroundImage: `url('${bannerInfo.background.image}')` }}
      >
        <div className={`absolute inset-0 bg-[#0b5d3b]/30 `} />
        <div className="relative z-20 grow flex items-center justify-center px-4 fredoka">
          <h1 className="text-white text-5xl sm:text-5xl md:text-6xl font-bold text-center drop-shadow-md">
            {bannerInfo.title}
          </h1>
        </div>

        {/* Breadcrumb */}
        <div className="relative z-20 flex justify-center fredoka">
          <div
            className={`${className ? className : 'bg-white'}  px-20 sm:px-52 py-3 sm:py-4 rounded-t-[30px] flex items-center gap-2 text-sm sm:text-2xl font-semibold shadow-2xl`}
          >
            <Breadcrumbs />
          </div>
        </div>
      </div>
    </div>
  );
}
