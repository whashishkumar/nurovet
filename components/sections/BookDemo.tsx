import SectionBadge from '../common/SectionBadge';
import SectionHeading from '../common/SectionHeading';
import AppointmentForm from '../common/AppointmentForm';
import Image from 'next/image';

// const bookDemoData = {
//   badge: {
//     label: 'Book a Demo',
//     icon: '/icons/bone.svg',
//   },
//   heading: {
//     title: 'Please Book a Demo Now!',
//     subTitle:
//       'Need some advice or have any questions about our services? Contact us in any convenient way',
//   },
//   image: {
//     src: '/images/Webp/demo-img.webp',
//     alt: 'Book a demo banner',
//   },
// };

export default function BookDemo({ bookDemoSection }: any) {
  const { heading, image, tag, tagicon, subHeading } = bookDemoSection || {};

  return (
    <div className="bg-color" id="demo">
      <div className="inner-wrapper m-auto lg:py-16 py-12 lg:px-0 px-6">
        <div className="flex justify-left">
          <SectionBadge label={tag} icon={tagicon} />
        </div>
        <SectionHeading
          cssClass="text-left"
          title={heading}
          subTitle={subHeading}
          subHeadingCss="lg:width-[38rem]"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 items-center">
          <div className="relative w-full h-[220px] sm:h-[280px] md:h-[340px] lg:h-[490px]">
            {image.src && (
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-fill rounded-2xl"
                priority
              />
            )}
          </div>
          <AppointmentForm />
        </div>
      </div>
    </div>
  );
}
