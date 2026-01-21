import Image from 'next/image';

// const mobileHeroData = {
//   title: `Manage Your Entire Veterinary Practice From One Mobile Platform`,
//   description:
//     'Download the app to manage your veterinary operations, track patient progress, and complete daily tasks efficiently. Stay organized and deliver care on time!',
//   stores: [
//     {
//       src: '/images/SVG/IOS.svg',
//       alt: 'Get it on Google Play',
//     },
//     {
//       src: '/images/SVG/google.svg',
//       alt: 'Download on App Store',
//     },
//   ],

//   phones: {
//     left: {
//       src: '/images/Webp/app-download.webp',
//     },
//   },
// };

const MobilePlatform = ({ mobileSection }: any) => {
  const { description, stores, phones, heading } = mobileSection || {};
  return (
    <section className="relative bg-[#00603A] overflow-hidden">
      <div className="inner-wrapper mx-auto grid grid-cols-1 lg:grid-cols-2  items-center lg:gap-12 px-6 lg:px-0">
        <div className=" text-white py-10 lg:py-12 text-center lg:text-left ">
          <h1 className="text-[2rem] lg:text-[3rem] font-medium lg:leading-15 whitespace-pre-line onesta">
            {heading}
          </h1>
          <p className="mt-6 text-white text-lg leading-relaxed onesta">{description}</p>
          <div className="mt-4">
            <p className="mb-4 font-medium onesta text-lg lg:leading-7">Get the App</p>
            <div className="flex gap-4 justify-center lg:justify-start">
              {stores?.map((store: any, i: number) => (
                <Image
                  key={i}
                  {...store}
                  height={40}
                  width={135}
                  alt="playstore"
                  className="object-contain"
                />
              ))}
            </div>
          </div>
        </div>
        <div className="relative hidden lg:flex justify-center items-center h-full">
          {phones?.left?.src && (
            <Image
              src={phones?.left?.src}
              alt="banner-img"
              width={520}
              height={558}
              className="relative object-contain w-full h-full"
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default MobilePlatform;
