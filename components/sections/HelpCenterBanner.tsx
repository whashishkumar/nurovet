import React from 'react'
import SectionBadge from '../common/SectionBadge'
import SectionHeading from '../common/SectionHeading'
import Image from 'next/image'


const helpCenterBannerData = {
  badge: "Help Center",
  title: "Core Features of the Nurovet Veterinary Management System",
  subTitle:
    "For 18 years, our organization has supplied veterinary experts with operational tools that improve clinic performance and patient treatment outcomes. The Nurovet CRM serves as the main operational system for your exercise, which mixes genuine scientific solutions with administrative workflow management. Our system unifies all client interactions and scientific information, which allows you to lessen your administrative work and boom time spent with your animals.",
  image: "/images/contactusbg.png",
};


export default function HelpCenterBanner() {
  const data = helpCenterBannerData;
  return (
    <div className='bg-color'>
      <div className='inner-wrapper m-auto py-16 px-6 lg:px-0'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center'>
          <div>
            <SectionBadge label={data.badge} />
            <SectionHeading
              title={data.title}
              subTitle={data.subTitle}
              cssClass='text-left'
            />
          </div>
          <div className="w-full max-w-[550px] mx-auto md:ml-auto">
            <Image
              src={data.image}
              height={420}
              width={550}
              alt="help center"
              className='object-contain h-auto w-full'
            />
          </div>
        </div>
      </div>
    </div>
  )
}
