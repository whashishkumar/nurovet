import Image from 'next/image';
import Button from '../ui/Button';

const AiPowerPetCare = ({ aiSection }: any) => {
  const { heading, subHeading, features, cta, images } = aiSection || {};

  return (
    // <section className="lg:py-16  lg:px-0 px-6">
    //   <div
    //     className="relative
    //     w-full
    //     min-h-100
    //     bg-no-repeat
    //     bg-size-[300px_220px]
    //     bg-position-[right_0rem_bottom_1.5rem]
    //     "
    //      style={
    //       images?.bgImage?.src && {
    //         backgroundImage: `url(${images.bgImage.src})`,
    //       }
    //     }
    //   >
    //     <div className="wrapper mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-12 ">
    //       <div className="relative flex justify-start">
    //         <Image
    //           {...images.dashboard}
    //           className="object-contain max-w-70 sm:max-w-90 md:max-w-120 lg:max-w-170 w-full"
    //           priority
    //           width={680}
    //           height={420}
    //         />
    //       </div>

    //       {/* RIGHT — Content */}
    //       <div className="text-left">
    //         <h1 className="text-[2rem] lg:text-[2.4rem] font-medium text-[#1F2021] onesta">
    //           {heading}
    //         </h1>
    //         <p className="mt-2 text-black text-lg  figtree">{subHeading}</p>
    //         <ul className="mt-6 space-y-3">
    //           {features?.map((item: any, index: number) => (
    //             <li key={index} className="flex items-center gap-3  justify-start">
    //               <Image
    //                 src={images?.icon?.src}
    //                 alt={'paw icon'}
    //                 width={20}
    //                 height={20}
    //                 className="object-contain"
    //               />
    //               <span className="text-black onesta font-medium text-xl">{item}</span>
    //             </li>
    //           ))}
    //         </ul>

    //         <div className="mt-8 flex justify-start">
    //           <Button href={cta.href} label={cta.label} variant={'primary'} showICon={true} />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <section className="lg:py-16 lg:px-0 px-6">
      <div
        className="
      relative
      w-full
      min-h-100
      bg-no-repeat
      bg-none
      lg:bg-[image:var(--bg-img)]
      bg-[length:300px_220px]
      bg-[position:right_0rem_bottom_1.5rem]
    "
        style={
          images?.bgImage?.src
            ? ({ '--bg-img': `url(${images.bgImage.src})` } as React.CSSProperties)
            : undefined
        }
      >
        <div className="wrapper mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-12">
          {/* LEFT */}
          <div className="relative flex justify-start">
            {/* <Image
              {...images.dashboard}
              className="object-contain max-w-70 sm:max-w-90 md:max-w-120 lg:max-w-170 w-full"
              priority
              width={680}
              height={420}
            /> */}
            <div className="relative w-full h-[240px] lg:h-[420px] overflow-hidden ">
              <Image
                {...images.dashboard}
                fill
                sizes="(max-width: 1024px) 100vw, 520px"
                className="object-contain object-center"
                priority={false}
              />
            </div>
          </div>

          {/* RIGHT */}
          <div className="text-left">
            <h1 className="text-[2rem] lg:text-[2.4rem] font-medium text-[#1F2021] onesta">
              {heading}
            </h1>
            <p className="mt-2 text-black text-lg figtree">{subHeading}</p>
            <ul className="mt-6 space-y-3">
              {features?.map((item: any, index: number) => (
                <li key={index} className="flex items-center gap-3 justify-start">
                  <Image
                    src={images?.icon?.src}
                    alt="paw icon"
                    width={20}
                    height={20}
                    className="object-contain"
                  />
                  <span className="text-black onesta font-medium text-xl">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex justify-start">
              <Button href={cta.href} label={cta.label} variant="primary" showICon={true} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const RemoteConsultaions = ({ remoteSection }: any) => {
  const { heading, subHeading, features, cta, images } = remoteSection || {};
  return (
    <section className="px-6 sm:px-10 lg:px-0 mt-8">
      <div className="wrapper mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-12">
        <div className="text-left order-2 md:order-1">
          <h1 className="text-[2rem] lg:text-[2.4rem] font-medium text-[#1F2021] onesta">
            {heading}
          </h1>

          <p className="mt-2 text-black text-lg figtree">{subHeading}</p>

          <ul className="mt-6 space-y-3">
            {features?.map((item: any, index: number) => (
              <li key={index} className="flex items-start gap-3 justify-start">
                <Image
                  // src="/images/SVG/paw-icon.svg"
                  src={images?.icon?.src}
                  alt="paw icon"
                  width={20}
                  height={20}
                  className="object-contain mt-1"
                />
                <span className="text-black onesta font-medium text-xl">{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex justify-start">
            <Button href={cta.href} label={cta.label} variant="primary" showICon />
          </div>
        </div>

        {/* IMAGE — FIRST on mobile, SECOND on md+ */}
        <div className="relative flex justify-start order-1 md:order-2">
          <Image
            {...images.dashboard}
            priority
            width={680}
            height={420}
            className="
          object-contain
          w-full
          max-w-70
          sm:max-w-90
          md:max-w-120
          lg:max-w-170
        "
          />
        </div>
      </div>
    </section>
  );
};

export default function CustomizedDashboard({ customSection, aiSection, remoteSection }: any) {
  const { backgroundImage, left, center, right, btn } = customSection || {};

  return (
    <section className="relative w-full bg-color py-12">
      <div className="wrapper m-auto">
        <div className="relative w-full flex flex-col lg:flex-row rounded-3xl overflow-visible ">
          <div
            className="absolute inset-0 z-0 bg-contain lg:bg-cover bg-bottom bg-no-repeat rounded-3xl hidden lg:block"
            style={{ backgroundImage: `url(${backgroundImage})` }}
            aria-hidden="true"
          />

          <div className="relative z-10 w-full flex flex-col lg:flex-row ">
            <div className="w-full lg:w-[50%] flex items-end justify-start px-6 lg:px-12 ">
              <Image
                {...left.image}
                className="object-cover hidden lg:block w-full h-full"
                width={450}
                height={200}
              />
            </div>
            <div className="w-full lg:w-[30%] flex items-center  lg:py-0 text-center lg:text-left">
              <div className="lg:py-14 w-full">
                <h2 className="text-[1rem] md:text-[1.875rem] font-medium onesta text-black">
                  {center?.title}
                </h2>
                <p className="font-medium md:text-base text-black leading-relaxed mt-2 figtree text-lg">
                  {center?.description}
                </p>
              </div>
            </div>
            <div className="hidden lg:flex lg:w-[15%] items-end justify-end pr-6">
              <Image {...right?.image} className="object-contain" width={300} height={250} />
            </div>
          </div>
        </div>
        <div className="flex justify-center py-6">
          <Button href={btn?.href} label={btn?.label} variant={'primary'} showICon={true} />
        </div>
      </div>
      <AiPowerPetCare aiSection={aiSection} />
      <RemoteConsultaions remoteSection={remoteSection} />
    </section>
  );
}
