'use client';
import Image from 'next/image';
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

export default function EmergencyContact({ emergency }: any) {
  const { heading, subHeading, centers, image } = emergency || {};

  return (
    <section className="py-16 px-6 lg:px-0">
      <div className="inner-wrapper m-auto items-center">
        <h2 className="text-3xl font-bold mb-3 fredoka ">{heading}</h2>
        <p className="text-gray-600 mb-10 figtree">{subHeading}</p>
      </div>
      <div className="inner-wrapper m-auto  grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center">
          {/* <div className="relative w-full aspect-[20/12] lg:aspect-[10/10] rounded-xl overflow-hidden ">
            <Image
              src={image}
              alt="Emergency Pet Care"
              fill
              className="object-cover h-full w-full"
              priority
            />
          </div> */}
          <div className="relative w-full h-[240px] lg:h-[480px] overflow-hidden rounded-3xl">
            {image && (
              <Image
                src={image}
                alt={'img'}
                fill
                sizes="(max-width: 1024px) 100vw, 520px"
                className="object-cover object-center"
                priority={false}
              />
            )}
          </div>
        </div>
        <div>
          <div className="space-y-4 ">
            {centers?.map((center: any) => (
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
