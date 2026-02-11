'use client';
import Image from 'next/image';
import SectionBadge from '../common/SectionBadge';
import SectionHeading from '../common/SectionHeading';
import Button from '../ui/Button';
import { FaPlay } from "react-icons/fa";
import { FaPauseCircle } from "react-icons/fa";




import { useRef, useState } from 'react';

const VideoSection = ({ data }: any) => {
  const { floatingImage, background } = data || {};

  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section className="relative lg:pt-0 pt-10">
      <div className="wrapper mx-auto relative">
        <div className="relative rounded-3xl overflow-hidden">

          {/* VIDEO */}
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-[260px] sm:h-[420px] lg:h-[520px] object-cover"
          >
            <source src={background?.src || '/video/video.mp4'} type="video/mp4" />
          </video>

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-black/30 z-10 pointer-events-none" />

          {/* PLAY / PAUSE BUTTON */}
          <button
            onClick={togglePlay}
            className="
              absolute bottom-4
               right-6 z-20
              px-4 py-2 rounded-full
              text-sm font-medium
              shadow-lg
              transition
              h-20
              w-20
              border
              border-white
              text-white
              text-center
              flex
              items-center
              justify-center
            "
          >
            {isPlaying ? <FaPauseCircle className='text-white' size={18} /> : <FaPlay className='text-white' size={18} />}
          </button>

        </div>
      </div>
    </section>
  );
};



const ArcFeaturesSection = ({ data }: any) => {
  const { cta, items } = data || {};
  const positions = [
    'md:left-[-2%] md:top-[180px] lg:left-0 lg:top-[220px]',
    'md:left-[8%] md:top-[50px] lg:left-[12%] lg:top-[60px]',
    'md:left-1/2 md:-translate-x-1/2 md:-top-[30px] lg:-top-[20px]',
    'md:right-[8%] md:top-[50px] lg:right-[12%] lg:top-[60px]',
    'md:right-[-2%] md:top-[180px] lg:right-0 lg:top-[220px]',
  ];

  return (
    <section className="relative pt-10 md:pt-20 lg:pt-24 overflow-hidden px-6">
      <div className="inner-wrapper mx-auto relative">
        <div className="relative flex justify-center">
          <div className="relative w-full flex flex-col items-center gap-10 md:block md:h-[350px] lg:h-[400px]">
            {/* Arc Line */}
            <div className="hidden md:block absolute inset-0 rounded-t-full border-t border-white" />
            {items?.map((item: any, index: any) => (
              <div
                key={item.id}
                className={`
                  flex flex-col items-center text-center max-w-[160px] lg:max-w-[200px]
                  md:absolute ${positions[index]}
                `}
              >
                <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white shadow-md flex items-center justify-center font-bold text-gray-900 border border-gray-100 shrink-0">
                  {item.id}
                </div>
                <p className="mt-2 lg:mt-3 text-xs lg:text-sm font-semibold text-gray-800 whitespace-pre-line leading-snug w-[10rem]">
                  {item.text}
                </p>
              </div>
            ))}
            {/* CTA */}
            <div className="mt-4 md:absolute md:left-1/2 md:-translate-x-1/2 md:top-40 lg:top-48 md:mt-0">
              <Button href={cta.href} label={cta.label} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// const VideoSection = ({ data }: any) => {
//   const { floatingImage, background } = data || {};
//   return (
//     <section className="relative lg:pt-0 pt-10">
//       <div className="wrapper mx-auto relative">
//         <div className="relative rounded-3xl overflow-hidden">
//           <video
//             autoPlay
//             muted
//             loop
//             playsInline
//             className="w-full h-[260px] sm:h-[420px] lg:h-[520px] object-cover"
//           >
//             <source src={background.src || '/video/video.mp4'} type="video/mp4" />
//             Your browser does not support the video tag.
//           </video>
//           <div className="absolute inset-0 bg-black/30 z-10 pointer-events-none" />
//         </div>
//       </div>
//     </section>
//   );
// };

export default function WhyChooseUs({ chooseSection }: any) {
  const { arcFeatures, video, tag, heading, subHeading, tagicon } = chooseSection || {};


  return (
    <div className="bg-color relative">
      <div
        className="
          absolute inset-0 hidden md:block
          bg-[url('/images/whybg.svg')]
          bg-no-repeat bg-contain
          pointer-events-none
        "
      />

      <div className="inner-wrapper m-auto lg:pt-16 pt-12 px-6 lg:px-0">
        <div className="flex justify-center">
          <SectionBadge label={tag} icon={tagicon} />
        </div>
        <SectionHeading title={heading} subTitle={subHeading} />
        <ArcFeaturesSection data={arcFeatures} />
      </div>
      <VideoSection data={video} />
    </div>
  );
}
