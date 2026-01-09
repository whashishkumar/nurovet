import Image from 'next/image';
import Navbar from '../layout/NavBar';
import Button from '../ui/Button';
import { BsCheck2All } from 'react-icons/bs';

const heroContent = {
  title: {
    first: 'Smart Veterinary',
    highlight: ' Management, All in',
    last: ' One Platform',
  },
  features: ['Real-time patient tracking', 'Role-based staff management', 'AI-powered insights'],
  cta: {
    label: 'Request Demo',
    href: '/',
  },
  demobtn: {
    label: 'View Demo',
    href: '/',
  },
};

const features = [
  { id: 1, icon: '/icons/nuro1.png', title: 'The Neural Network for Your Practice.' },
  { id: 2, icon: '/icons/brain.png', title: 'Intelligent Insights for Every Patient.' },
];

const featuresRight = [
  { id: 1, icon: '/icons/medical.png', title: 'Where Clinical Data Becomes Medical Intelligence.' },
  { id: 2, icon: '/icons/eye.png', title: 'See the Unseen. Predict the Unpredictable.' },
];

export default function HeroBanner() {
  return (
    <div className="bg-color w-full ">
      <div className="px-4 sm:px-6 mx-auto py-4 sm:py-6 ">
        <div
          className="
            relative w-full
            min-h-[600px] 
            sm:min-h-[500px]
            lg:h-[702px] 
            bg-[url('/images/Webp/Hero.webp')]
            bg-cover        
            bg-center       
            bg-no-repeat
            rounded-2xl
            sm:rounded-3xl
            overflow-hidden
            flex flex-col
          "
        >
          <div className=" inset-0 bg-gradient-to-b from-black/15 via-black/0 to-transparent z-10 pointer-events-none" />
          <div className="relative lg:absolute top-0 left-0 w-full z-50 pt-6 sm:pt-6 lg:pt-10">
            <Navbar />
          </div>
          <div className="relative lg:absolute inset-0 z-20 flex items-center md:flex-grow py-12 lg:py-0 ">
            <div className="px-6 sm:px-10 md:px-16 w-full">
              <div className="inner-wrapper m-auto">
                <h1 className="text-[2rem] sm:text-[3rem] lg:text-[4.125rem] font-bold leading-[1.2] lg:leading-[4.75rem] text-[#003366] fredoka">
                  {heroContent.title.first}
                  <span className="text-[#00603A] block">{heroContent.title.highlight}</span>
                  {heroContent.title.last}
                </h1>
                <ul className="mt-6 space-y-3">
                  {heroContent.features.map((feature, index) => (
                    <li
                      key={index}
                      className="text-[#003366] font-bold text-base sm:text-xl lg:text-[1.5rem] flex items-center"
                    >
                      <span className="mr-2 flex-shrink-0">
                        <BsCheck2All className="w-5 h-5 sm:w-6 sm:h-6" />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="pt-8 pb-4 flex flex-wrap gap-4">
                  <Button
                    href={heroContent.cta.href}
                    label={heroContent.cta.label}
                    variant="primary"
                    className="shadow-lg transform hover:scale-105 w-full sm:w-auto text-center justify-center"
                  />
                  <Button
                    href={heroContent.demobtn.href}
                    label={heroContent.demobtn.label}
                    variant="outline"
                    className="shadow-lg transform hover:scale-105 w-full sm:w-auto text-center justify-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Features: Adjusted negative margin and spacing */}
      <div className="px-4 pb-12 lg:relative lg:-translate-y-30 z-28">
        <div className="inner-wrapper mx-auto flex flex-col gap-8 md:flex-row md:justify-center md:items-start lg:gap-12 lg:justify-between">
          <div className="flex flex-row justify-center gap-6 sm:gap-10">
            {features.map((item) => (
              <div
                key={item.id}
                className="max-w-[160px] sm:max-w-[160px] flex flex-col items-center text-center gap-3 fredoka"
              >
                <div>
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={24}
                    height={24}
                    className="object-contain"
                  />
                </div>
                <p className="text-[#000] font-semibold text-lg sm:text-sm leading-snug">
                  {item.title}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-row justify-center gap-6 sm:gap-10">
            {featuresRight.map((item) => (
              <div
                key={item.id}
                className="max-w-[160px] sm:max-w-[190px] flex flex-col items-center text-center gap-3 fredoka"
              >
                <div>
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={24}
                    height={24}
                    className="object-contain"
                  />
                </div>
                <p className="text-[#000] font-semibold text-lg sm:text-sm leading-snug ">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
