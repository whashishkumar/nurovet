import React from 'react';
import SectionBadge from '../common/SectionBadge';
import SectionHeading from '../common/SectionHeading';
import Image from 'next/image';

const appointmentData = [
  {
    id: 'appointment-management',
    title: 'Appointment Management',
    imgSrc: '/images/service2.jpg',
    description:
      'An effective health center needs efficient scheduling as a basic requirement. This module enables you to distribute work among team members while providing pet owners with a convenient booking method. The system connects to the customer database for direct integration, helping eliminate double bookings and reducing no-show rates.',
    sections: [
      {
        heading: 'How to Use',
        items: ['Users have to open the master calendar and select an unoccupied time slot.'],
      },
      {
        heading: 'Process',
        items: [
          `The appointment desires to be related to a selected "Pet Profile," which calls for the challenge of a veterinarian and the dedication of visit reason through selected options (Surgery Consultation, Vaccination)`,
        ],
      },
      {
        heading: 'Using Criteria',
        items: [
          ` The device capabilities are first-class, whilst it controls the affected person's well-being during the day, sending automatic SMS and Email notifications for appointment reminders.`,
        ],
      },
    ],
  },
  {
    id: 'appointment-management',
    title: 'Pet Profiles & CRM Records',
    imgSrc: '/images/service2.jpg',
    description:
      "A Pet Profile is more than just a name; it's a far more comprehensive virtual identification. The system enables you to store important biological facts together with behavioral observations, which the team of workers will use to supply custom designed care while pets arrive at the facility.",
    sections: [
      {
        heading: 'How to Use',
        items: [
          ` Locate existing patients or add new patients by selecting "New Patient" from CRM.`,
        ],
      },
      {
        heading: 'Process',
        items: [
          `Add all pertinent information (e.g., species, breed, microchip number, allergies, prior history).`,
        ],
      },
      {
        heading: 'Using Criteria',
        items: [
          `It allows you to collect data consistently during each future interaction with this particular patient.`,
        ],
      },
    ],
  },
  {
    id: 'management',
    title: 'Appointment Management',
    imgSrc: '/images/service2.jpg',
    description:
      'An effective health center needs efficient scheduling as a basic requirement. This module enables you to distribute work among team members while providing pet owners with a convenient booking method. The system connects to the customer database for direct integration, helping eliminate double bookings and reducing no-show rates.',
    sections: [
      {
        heading: 'How to Use',
        items: ['Users have to open the master calendar and select an unoccupied time slot.'],
      },
      {
        heading: 'Process',
        items: [
          `The appointment desires to be related to a selected "Pet Profile," which calls for the challenge of a veterinarian and the dedication of visit reason through selected options (Surgery Consultation, Vaccination)`,
        ],
      },
      {
        heading: 'Using Criteria',
        items: [
          ` The device capabilities are first-class, whilst it controls the affected person's well-being during the day, sending automatic SMS and Email notifications for appointment reminders.`,
        ],
      },
    ],
  },
  {
    id: 'management',
    title: 'Appointment Management',
    imgSrc: '/images/service2.jpg',
    description:
      'An effective health center needs efficient scheduling as a basic requirement. This module enables you to distribute work among team members while providing pet owners with a convenient booking method. The system connects to the customer database for direct integration, helping eliminate double bookings and reducing no-show rates.',
    sections: [
      {
        heading: 'How to Use',
        items: ['Users have to open the master calendar and select an unoccupied time slot.'],
      },
      {
        heading: 'Process',
        items: [
          `The appointment desires to be related to a selected "Pet Profile," which calls for the challenge of a veterinarian and the dedication of visit reason through selected options (Surgery Consultation, Vaccination)`,
        ],
      },
      {
        heading: 'Using Criteria',
        items: [
          ` The device capabilities are first-class, whilst it controls the affected person's well-being during the day, sending automatic SMS and Email notifications for appointment reminders.`,
        ],
      },
    ],
  },
];

type Section = {
  heading: string;
  items: string[];
};

type Item = {
  id: string;
  title: string;
  description: string;
  sections: Section[];
  imgSrc?: string;
};

const AppointmentInfo = ({ data }: any) => {
  return (
    <>
      <div className="m-auto px-6 lg:px-0 space-y-4">
        {data?.map((block: any, index: number) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={block.id}
              className={`
                ${isEven ? 'bg-white' : 'bg-color'}
              `}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center rounded-2xl inner-wrapper m-auto py-12 px-6 lg:px-0">
                <div
                  className={`
                  w-full 
                  ${isEven ? 'lg:order-1 wrapper m-auto' : 'md:order-2 wrapper m-auto'}
                `}
                >
                  <div className="relative w-full h-[240px] lg:h-[420px] overflow-hidden rounded-3xl">
                    {block.imgSrc && (
                      <Image
                        src={block?.imgSrc}
                        alt={block.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 520px"
                        className="object-cover object-center"
                        priority={false}
                      />
                    )}
                  </div>
                </div>
                <div className={`${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <h2 className="text-3xl font-semibold mb-2 fredoka">{block.title}</h2>
                  <p className="text-black mb-2 leading-relaxed onesta text-base">
                    {block.description}
                  </p>
                  <div className="space-y-2">
                    {block?.sections.map((section: any, i: number) => (
                      <div key={i}>
                        <h3 className="text-lg font-medium mb-0 fredoka">{section?.heading}</h3>
                        <ul className="list-disc pl-5 text-black onesta">
                          {section?.items?.map((item: any, idx: number) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default function FeatureGuide({ featuresData }: any) {
  const { tag, tagicon, heading, features } = featuresData || {};
  return (
    <div className="bg-white">
      <div className="inner-wrapper m-auto  px-6 lg:px-0 pt-12">
        <SectionBadge label={tag} icon={tagicon} />
        <SectionHeading title={heading} cssClass="text-left" />
      </div>
      <AppointmentInfo data={features} />
    </div>
  );
}
