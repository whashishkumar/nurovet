import Image from 'next/image';
import SectionBadge from '../common/SectionBadge';
import SectionHeading from '../common/SectionHeading';
import Button from '../ui/Button';

// const whyChooseUsData = {
//   badge: {
//     label: 'Our Specialities',
//     icon: '/icons/bone.svg',
//   },
//   heading: {
//     title: 'Why Choose Us?',
//     subTitle: 'Easily find and book trusted Pet Caregivers near you',
//   },
//   arcFeatures: {
//     cta: {
//       label: 'Book a Demo Now!',
//       href: '/demo',
//     },
//     items: [
//       { id: '01', text: 'Smart Veterinary\nSystem Excellence' },
//       { id: '02', text: 'Secure & Reliable\nClinic Platform' },
//       { id: '03', text: 'Customizable for Every\nPractice' },
//       { id: '04', text: 'Simplified Daily\nOperations' },
//       { id: '05', text: 'Performance-\nDriven Efficiency' },
//     ],
//   },
//   video: {
//     floatingImage: {
//       src: '/images/Webp/whychooseanimals.webp',
//       alt: 'animals',
//     },
//     background: {
//       src: '/images/vdoContainer.png',
//       alt: 'video background',
//     },
//   },
// };

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
            <div className="hidden md:block absolute inset-0 rounded-t-full border-t border-gray-200" />
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

/* =========================
   VIDEO
========================= */
const VideoSection = ({ data }: any) => {
  const { floatingImage, background } = data || {};

  return (
    <section className="relative lg:pt-0 pt-10">
      <div className="wrapper mx-auto relative">
        <div className="absolute -top-36 left-1/2 -translate-x-1/2 z-20">
          <Image
            src={floatingImage?.src}
            alt={floatingImage.alt}
            width={600}
            height={140}
            className="object-contain hidden md:block"
            priority
          />
        </div>

        <div className="relative rounded-3xl overflow-hidden">
          <Image
            src={background?.src}
            alt={background.alt}
            width={1856}
            height={750}
            className="w-full h-[260px] sm:h-[420px] lg:h-[520px] object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default function WhyChooseUs({ chooseSection }: any) {
  const { arcFeatures, video, tag, heading, subHeading, tagIcon } = chooseSection || {};

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

      <div className="inner-wrapper m-auto lg:py-16 py-12 px-6 lg:px-0">
        <div className="flex justify-center">
          <SectionBadge label={tag} icon={tagIcon} />
        </div>

        <SectionHeading title={heading} subTitle={subHeading} />

        <ArcFeaturesSection data={arcFeatures} />
      </div>

      <VideoSection data={video} />
    </div>
  );
}
