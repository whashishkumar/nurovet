'use client';

import React from 'react';
import SectionHeading from '../common/SectionHeading';
import { FiCheckCircle } from 'react-icons/fi';
import Image from 'next/image';
import SectionBadge from '../common/SectionBadge';

export const howWeWorkData = {
  section: {
    title: 'How We Help Your Pet',
    subTitle: 'Easily find and book trusted Pet Caregivers near you',
    bgImage: '/images/weHelpBg.png',
    sideImage: '/images/howbgImg.png',
  },
  steps: [
    {
      id: '01',
      title: 'Schedule a consultation',
      description:
        'Choose us for grooming excellence! Our team of skilled groomers brings expertise and a passion for perfection to every pet pampering session.',
      icon: 'check',
    },
    {
      id: '02',
      title: 'Meet our experts',
      description:
        'Our specialists assess your pet’s needs and create a personalized grooming plan for comfort and care.',
      icon: 'check',
    },
    {
      id: '03',
      title: 'Personalized care plan',
      description:
        'We craft a grooming and wellness plan tailored specifically for your pet’s breed, lifestyle, and comfort.',
      icon: 'check',
    },
  ],
};

function ConsultationCards({ steps }: any) {
  return (
    <div className="space-y-6">
      {steps.map((item: any, index: any) => (
        <div key={index} className="relative bg-[#F9F6F1] rounded-3xl px-8 py-8 overflow-hidden">
          <div className="absolute top-0 right-0 bg-white w-14 h-14 rounded-2xl flex items-center justify-center ">
            <span className="text-2xl font-bold text-black">{item.id}</span>
          </div>
          <div className="flex flex-col sm:flex-row items-start gap-4 max-w-3xl">
            <div className="text-black mt-1">
              {item.icon === 'check' && <FiCheckCircle size={28} />}
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-black mb-2 fredoka">{item.title}</h3>
              <p className="text-black leading-relaxed text-base">{item.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function HowWeWork() {
  const { section, steps } = howWeWorkData;

  return (
    <div className="wrapper m-auto py-14">
      <div className="flex justify-center">
        <SectionBadge label={'How we work'} />
      </div>
      <div
        className="rounded-3xl"
        style={{
          backgroundImage: `url(${section.bgImage})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <div className="">
          <SectionHeading
            cssClass="text-center"
            title={section.title}
            subTitle={section.subTitle}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-16 px-4 ">
          <div className="bg-[#f6f2ed] flex justify-center items-center rounded-2xl p-6">
            <Image
              src={section.sideImage}
              height={340}
              width={420}
              alt="How we help"
              className="object-contain"
            />
          </div>
          <ConsultationCards steps={steps} />
        </div>
      </div>
    </div>
  );
}
