import SectionBadge from '../common/SectionBadge';
import SectionHeading from '../common/SectionHeading';
import AppointmentForm from '../common/AppointmentForm';
import Image from 'next/image';

export default function BookDemo() {
  return (
    <div className="bg-color">
      <div className="inner-wrapper m-auto lg:py:16 py-12  lg:px-0 px-6">
        <div className="flex justify-left">
          <SectionBadge label="Book a Demo" icon="/icons/bone.svg" />
        </div>
        <SectionHeading
          cssClass="text-left"
          title={'Please Book a Demo Now!'}
          subTitle={
            'Need some advice or have any questions about our services? Contact us in any convenient way'
          }
          subHeadingCss="lg:width-[38rem]"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 items-center">
          <div className="relative w-full h-[220px] sm:h-[280px] md:h-[340px] lg:h-[490px]">
            <Image
              src="/images/Webp/demo-img.webp"
              alt="banner"
              fill
              className="object-fill rounded-2xl"
              priority
            />
          </div>
          <AppointmentForm />
        </div>
      </div>
    </div>
  );
}
