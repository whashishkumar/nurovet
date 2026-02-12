import React from 'react'
import SectionBadge from '../common/SectionBadge'
import SectionHeading from '../common/SectionHeading'
import Image from 'next/image';


const appointmentData = [
  {
    id: "appointment-management",
    title: "Appointment Management",
    imgSrc: '/images/service2.jpg',
    description:
      "An effective health center needs efficient scheduling as a basic requirement. This module enables you to distribute work among team members while providing pet owners with a convenient booking method. The system connects to the customer database for direct integration, helping eliminate double bookings and reducing no-show rates.",
    sections: [
      {
        heading: "How to Use",
        items: [
          "Users have to open the master calendar and select an unoccupied time slot.",
        ]
      },
      {
        heading: "Process",
        items: [
          `The appointment desires to be related to a selected "Pet Profile," which calls for the challenge of a veterinarian and the dedication of visit reason through selected options (Surgery Consultation, Vaccination)`,

        ]
      },
      {
        heading: "Using Criteria",
        items: [
          ` The device capabilities are first-class, whilst it controls the affected person's well-being during the day, sending automatic SMS and Email notifications for appointment reminders.`
        ]
      }
    ]
  },
  {
    id: "appointment-management",
    title: "Pet Profiles & CRM Records",
    imgSrc: '/images/service2.jpg',
    description:
      "A Pet Profile is more than just a name; it's a far more comprehensive virtual identification. The system enables you to store important biological facts together with behavioral observations, which the team of workers will use to supply custom designed care while pets arrive at the facility.",
    sections: [
      {
        heading: "How to Use",
        items: [
          ` Locate existing patients or add new patients by selecting "New Patient" from CRM.`,
        ]
      },
      {
        heading: "Process",
        items: [
          `Add all pertinent information (e.g., species, breed, microchip number, allergies, prior history).`
        ]
      },
      {
        heading: "Using Criteria",
        items: [
          `It allows you to collect data consistently during each future interaction with this particular patient.`
        ]
      }
    ]
  }
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

const AppointmentInfo = ({ data }: { data: Item[] }) => {
  return (
    <>
      <div className=" mx-auto px-6 lg:px-0 space-y-4">
        {data?.map((block, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={block.id}
              className={`
                ${index === 0 ? "bg-white" : "bg-color"}
              `}
            >
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 items-center
                p-6 lg:p-10 rounded-2xl inner-wrapper m-auto'>
                <div
                  className={`
                  w-full 
                  ${isEven ? "lg:order-1 wrapper m-auto" : "lg:order-2 wrapper m-auto"}
                `}
                >
                  <div className="relative w-full h-[420px] lg:h-[460px]">
                    {block.imgSrc && (
                      <Image
                        src={block.imgSrc}
                        alt={block.title}
                        fill
                        className="object-contain h-full w-full rounded-2xl"
                      />
                    )}
                  </div>
                </div>

                {/* CONTENT */}
                <div className={`${isEven ? "lg:order-2" : "lg:order-1"}`}>
                  <h2 className="text-3xl font-semibold mb-2 fredoka">
                    {block.title}
                  </h2>
                  <p className="text-black mb-4 leading-relaxed onesta">
                    {block.description}
                  </p>
                  <div className="space-y-4">
                    {block.sections.map((section, i) => (
                      <div key={i}>
                        <h3 className="text-xl font-medium mb-0 fredoka">
                          {section.heading}
                        </h3>
                        <ul className="list-disc pl-5 text-black onesta">
                          {section.items.map((item, idx) => (
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
}


export default function FeatureGuide() {
  return (
    <div className='bg-white'>
      <div className='inner-wrapper m-auto py-16 px-6 lg:px-0'>
        <SectionBadge label='Feature Giude' />
        <SectionHeading title="Detailed CRM Feature Guide" cssClass='text-left' />
      </div>
      <AppointmentInfo data={appointmentData} />
    </div>
  )
}
