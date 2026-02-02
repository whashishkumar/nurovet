'use client';

import React from 'react';
import Image from 'next/image';
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

const emergencyData = {
  image: '/images/emergencybanner.jpg',
  heading: 'Emergency Contact',
  subHeading:
    'If your pet needs urgent care, please reach out to one of our emergency centers below.',
  centers: [
    {
      id: 1,
      name: 'Downtown Pet Care Center',
      address: '123 Main Street, Downtown, City, 110001',
      phone: '+91 98765 43210',
      email: 'downtown@petcare.com',
    },
    {
      id: 2,
      name: 'North Side Animal Hospital',
      address: '45 North Avenue, North City, 110045',
      phone: '+91 91234 56789',
      email: 'northside@petcare.com',
    },
    {
      id: 3,
      name: '24/7 Emergency Vet Clinic',
      address: '78 Emergency Road, South City, 110078',
      phone: '+91 99887 77665',
      email: 'emergency@petcare.com',
    },
  ],
};

export default function EmergencyContact() {
  return (
    <section className="py-16 px-6 lg:px-0">
      <div className="inner-wrapper mx-auto  grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center">
          <div className="relative w-full aspect-[20/12] rounded-xl overflow-hidden ">
            <Image
              src={emergencyData.image}
              alt="Emergency Pet Care"
              fill
              className="object-cover h-full w-full"
              priority
            />
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-3 fredoka">{emergencyData.heading}</h2>
          <p className="text-gray-600 mb-10 figtree">{emergencyData.subHeading}</p>
          <div className="space-y-4 ">
            {emergencyData.centers.map((center) => (
              <div
                key={center.id}
                className="bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition "
              >
                <h3 className="text-xl font-semibold mb-4 text-black">{center.name}</h3>

                <div className="space-y-3 text-gray-700 ">
                  <div className="flex items-center gap-3">
                    <FaMapMarkerAlt className="text-[#00603a]" />
                    <span>{center.address}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <FaPhoneAlt className="text-[#00603a]" />
                    <a href={`tel:${center.phone}`} className="hover:underline">
                      {center.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaEnvelope className="text-[#00603a]" />
                    <a href={`mailto:${center.email}`} className="hover:underline">
                      {center.email}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
