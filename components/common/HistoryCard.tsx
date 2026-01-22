'use client';
import Image from 'next/image';

export default function HistoryCard({ year, image, alt, description }: any) {
  return (
    <div className="flex flex-col items-center  mx-auto  mt-12 ">
      <div className="rounded-full border border-gray-300 px-8 py-4 text-3xl font-bold text-black  fredoka">
        {year}
      </div>
      <div className="relative flex flex-col items-center">
        <div className="h-24 w-px bg-gray-300"></div>
        <div className="relative w-48 h-px bg-gray-300">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-orange-500 rounded-full border-2 border-white"></div>
        </div>
      </div>
      <div className="mt-12 space-y-6 text-center">
        <div className="overflow-hidden rounded-3xl ">
          <Image src={image} alt={'alt'} width={250} height={150} className="w-full object-cover" />
        </div>
        <p className="text-black text-lg leading-relaxed px-4 text-left ">{description}</p>
      </div>
    </div>
  );
}
