import Image from 'next/image';
import SectionBadge from '../common/SectionBadge';
import SectionHeading from '../common/SectionHeading';

import Button from '../ui/Button';
const arcFeatures = {
  cta: {
    label: 'Book a Demo Now!',
    href: '/demo',
  },
  items: [
    { id: '01', text: 'Smart Veterinary\nSystem Excellence' },
    { id: '02', text: 'Secure & Reliable\nClinic Platform' },
    { id: '03', text: 'Customizable for Every\nPractice' },
    { id: '04', text: 'Simplified Daily\nOperations' },
    { id: '05', text: 'Performance-\nDriven Efficiency' },
  ],
};

const ArcFeaturesSection = () => {
  const { cta, items } = arcFeatures;
  return (
    <section className="relative py-15 overflow-hidden">
      <div className="wrapper mx-auto relative">
        <div className="relative flex justify-center">
          <div className="relative w-full h-95">
            <div className="absolute inset-0 rounded-t-full border-t border-[#FFFFFF]" />
            {/* ITEMS */}
            {items.map((item, index) => {
              const positions = [
                'left-0 top-[220px]',
                'left-[10%] top-[70px]',
                'left-1/2 -translate-x-1/2 top-[-20px]',
                'right-[10%] top-[70px]',
                'right-0 top-[220px]',
              ];

              return (
                <div key={item.id} className={`absolute text-center ${positions[index]}`}>
                  <div className="mx-auto w-10 h-10 rounded-full bg-white shadow flex items-center justify-center font-semibold">
                    {item.id}
                  </div>
                  <p className="mt-3 text-sm font-medium whitespace-pre-line">{item.text}</p>
                </div>
              );
            })}
            {/* CENTER CONTENT */}
            <div className="absolute left-1/2 -translate-x-1/2 top-40 text-center">
              <Button href={cta.href} label={cta.label} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const VideoSection = () => {
  return (
    <div className="wrapper m-auto">
      <Image src={'/images/vdoContainer.png'} alt="bg-movie" height={750} width={1856} />
    </div>
  );
};

export default function WhyChooseUs() {
  return (
    <div className="bg-color">
      <div className="inner-wrapper m-auto lg:py:16 py-12">
        <div className="flex justify-center">
          <SectionBadge label="Our Specialities" icon="/icons/bone.svg" />
        </div>
        <SectionHeading
          title={'Our Veterinarian Success Stories'}
          subTitle={'Easily find and book trusted Pet Caregivers near you '}
        />
        <ArcFeaturesSection />
      </div>
      <VideoSection />
    </div>
  );
}
