import React from 'react';
import SectionBadge from '../common/SectionBadge';
import SectionHeading from '../common/SectionHeading';
import Image from 'next/image';
  
const PetServicesSection = ({ services, centerImage }: any) => {
  const leftServices = services.filter((_: any, idx: number) => idx % 2 === 0);
  const rightServices = services.filter((_: any, idx: number) => idx % 2 !== 0);

  return (
    <section className="relative pt-18">
      <div className="wrapper mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
        <div className="space-y-16">
          {leftServices.map((item: any) => (
            <ServiceCard key={item.id} data={item} align="left" />
          ))}
        </div>
        <div className="flex justify-center">
          <div className="relative w-[300px] h-[420px]">
            <Image src={centerImage} alt="Pet" fill className="object-contain" priority />
          </div>
        </div>
        <div className="space-y-16">
          {rightServices.map((item: any) => (
            <ServiceCard key={item.id} data={item} align="right" />
          ))}
        </div>
      </div>
    </section>
  );
};

function ServiceCard({ data, align }: { data: any; align: 'left' | 'right' }) {
  return (
    <div className={`flex gap-6 ${align === 'right' ? 'text-left' : ''}`}>
      <div className="text-[64px] font-bold text-[#b1976b] leading-none">{data.id}</div>

      <div className="max-w-sm">
        <h3 className="text-xl font-bold mb-3 text-black fredoka">{data.title}</h3>
        <p className="text-gray-600 mb-5 figtree">{data.description}</p>

        <button className="bg-[#00603a] transition px-6 py-3 font-semibold text-sm rounded-md text-white fredoka">
          {data.buttonText}
        </button>
      </div>
    </div>
  );
}

export default function HelpCenterServices({ services }: any) {
  const {tag,tagicon, background, subHeading, heading, centerImage,services:serviceList
 } = services || {};

  return (
    <>
      <div
        className="relative"
        style={{
          backgroundImage: `url('${background?.image}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="inner-wrapper py-16 m-auto relative z-10 px-6 lg:px-0">
          <div className="flex justify-center">
            <SectionBadge label={tag} icon={tagicon} />
          </div>
          <SectionHeading title={heading} subTitle={subHeading} />
          <PetServicesSection services={serviceList} centerImage={centerImage} />
        </div>
      </div>
    </>
  );
}
