import React from 'react';
import SectionBadge from '../common/SectionBadge';
import SectionHeading from '../common/SectionHeading';
import Accordion from '../ui/Accordian';
import Image from 'next/image';

const quickAnswersData = {
  badge: {
    label: 'Quick Answers',
    icon: '/icons/bone.svg',
  },
  heading: {
    title: 'Questions Asked by Veterinarians',
  },
  image: {
    src: '/images/Webp/faq-img.webp',
    alt: 'FAQ banner',
  },
  faqs: [
    {
      id: 1,
      question: 'How can I track critical and emergency patients in real time?',
      answer:
        'You can track critical and emergency patients in real time through Nurovet’s centralized dashboard, which highlights urgent cases with priority alerts, live status updates, and detailed patient profiles—ensuring faster decisions and timely care.',
    },
    {
      id: 2,
      question: 'Does the system provide alerts for urgent cases?',
      answer:
        'Yes, the system provides real-time alerts and notifications for all urgent and high-priority cases.',
    },
    {
      id: 3,
      question: 'How can I track critical and emergency patients in real time?',
      answer:
        'You can track critical and emergency patients in real time through Nurovet’s centralized dashboard, which highlights urgent cases with priority alerts, live status updates, and detailed patient profiles—ensuring faster decisions and timely care.',
    },
    {
      id: 4,
      question: 'Does the system provide alerts for urgent cases?',
      answer:
        'Yes, the system provides real-time alerts and notifications for all urgent and high-priority cases.',
    },
    {
      id: 5,
      question: 'How can I track critical and emergency patients in real time?',
      answer:
        'You can track critical and emergency patients in real time through Nurovet’s centralized dashboard, which highlights urgent cases with priority alerts, live status updates, and detailed patient profiles—ensuring faster decisions and timely care.',
    },
  ],
};

export default function QuickAnswers({ faqSection }: any) {
  const { image, faq, tag, tagicon, heading, bgImage } = faqSection || {};

  return (
    <div className="bg-color relative">
      <div
        className="
          absolute hidden lg:block
          lg:w-[15vw] xl:w-[20vw]
          lg:h-45
          bg-no-repeat
          bg-contain
          overflow-hidden
        "
        style={
          bgImage?.src && {
            backgroundImage: `url(${bgImage.src})`,
          }
        }
      />

      <div className="inner-wrapper m-auto lg:py-16 py-12 lg:px-0 px-6">
        <div className="flex justify-left">
          <SectionBadge label={tag} icon={tagicon} />
        </div>
        <SectionHeading cssClass="text-left" title={heading} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="pt-6">
            <Accordion data={faq} />
          </div>
          <div className="relative w-full h-[260px] sm:h-[300px] md:h-[380px] lg:h-[490px]">
            {image?.src && (
              <Image
                src={image?.src}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 100vw,
                (max-width: 1024px) 80vw,
                644px"
                className="rounded-3xl object-fill sm:object-contain"
                priority
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
