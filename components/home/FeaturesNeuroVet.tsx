import Image from 'next/image';
import FeaturesCards from '../common/FeaturesCards';

const featuresHeaderData = {
  avatars: ['/icons/d1.png', '/icons/d2.png', '/icons/d3.png'],
  title: 'Core Features of the Nurovet Veterinary Management System',
  subtitle: "For 18 years, we've made pets look and feel their best.",
};
const data = [
  {
    id: 1,
    icon: '/icons/cal.svg',
    title: 'Appointment Management',
    description:
      'A gentle cleanse designed to brighten, soothe, and refresh your pet’s face, getting rid of tear stains.',
  },
  {
    id: 2,
    icon: '/icons/pet.svg',
    title: 'Medical Records',
    description:
      'Centralized patient history with fast access to diagnostics, treatments, and prescriptions.',
  },
  {
    id: 3,
    icon: '/icons/labs.svg',
    title: 'Billing & Invoicing',
    description: 'Simple, transparent billing workflows that reduce errors and save staff time.',
  },
  {
    id: 4,
    icon: '/icons/labs.svg',
    title: 'Billing & Invoicing',
    description: 'Simple, transparent billing workflows that reduce errors and save staff time.',
  },
  {
    id: 1,
    icon: '/icons/cal.svg',
    title: 'Appointment Management',
    description:
      'A gentle cleanse designed to brighten, soothe, and refresh your pet’s face, getting rid of tear stains.',
  },
  {
    id: 2,
    icon: '/icons/pet.svg',
    title: 'Medical Records',
    description:
      'Centralized patient history with fast access to diagnostics, treatments, and prescriptions.',
  },
  {
    id: 3,
    icon: '/icons/labs.svg',
    title: 'Billing & Invoicing',
    description: 'Simple, transparent billing workflows that reduce errors and save staff time.',
  },
  {
    id: 4,
    icon: '/icons/labs.svg',
    title: 'Billing & Invoicing',
    description: 'Simple, transparent billing workflows that reduce errors and save staff time.',
  },
  {
    id: 1,
    icon: '/icons/cal.svg',
    title: 'Appointment Management',
    description:
      'A gentle cleanse designed to brighten, soothe, and refresh your pet’s face, getting rid of tear stains.',
  },
  {
    id: 2,
    icon: '/icons/pet.svg',
    title: 'Medical Records',
    description:
      'Centralized patient history with fast access to diagnostics, treatments, and prescriptions.',
  },
  {
    id: 3,
    icon: '/icons/labs.svg',
    title: 'Billing & Invoicing',
    description: 'Simple, transparent billing workflows that reduce errors and save staff time.',
  },
  {
    id: 4,
    icon: '/icons/labs.svg',
    title: 'Billing & Invoicing',
    description: 'Simple, transparent billing workflows that reduce errors and save staff time.',
  },
];

export default function FeaturesNeuroVet() {
  return (
    <section className="bg-color py-12 px-4">
      <div className="inner-wrapper mx-auto text-center">
        <div className="flex justify-center mb-6">
          <div className="flex space-x-1">
            {featuresHeaderData.avatars.map((src, index) => (
              <div
                key={index}
                className="w-12 h-12 rounded-full border-3 border-white overflow-hidden bg-gray-200"
              >
                <Image
                  src={src}
                  alt="Pet avatar"
                  width={55}
                  height={55}
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>
        <h2 className="text-[1.5rem] sm:text-[2rem] lg:text-[2.5rem] font-semibold text-[#1F2021] leading-tight lg:w-[39.438rem] m-auto">
          {featuresHeaderData.title}
        </h2>
        <p className="mt-4 text-lg sm:text-base text-[#475569] font-normal">
          {featuresHeaderData.subtitle}
        </p>
      </div>
      <FeaturesCards featuresData={data} />
    </section>
  );
}
