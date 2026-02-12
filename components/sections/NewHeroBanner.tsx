import Button from '../ui/Button';
import { BsCheck2All } from 'react-icons/bs';

export default function NewHeroBanner({ heroBanner }: any) {
  // const heroData = {
  //   description:
  //     "All-in-One Brain for Your Hospital Where CRM, PIMS, iPaaS and AI Become One",

  //   features: [
  //     "Real-time patient tracking",
  //     "Role-based staff management",
  //     "AI-powered insights",
  //   ],

  //   cta: {
  //     buttonText: "Book a Demo",
  //     buttonHref: "/contact",
  //   },

  //   ctademo: {
  //     buttonText: "View Demo",
  //     buttonHref: "/",
  //   },
  //   bannerImage: "/images/herobanner.png",
  // };

  const { heroContent } = heroBanner || {}
  const { cta, backgroundImage,
    demobtn, features, title

  } = heroContent || {}


  return (
    <div className="mx-auto sm:px-6 p-4 sm:py-6 bg-color">
      <section className="relative overflow-hidden bg-[#00603A] min-h-auto lg:min-h-[90vh] flex items-center  rounded-2xl">
        {/* <div
          className="absolute hidden md:block right-0 top-0 h-full   aspect-[16/9]
    max-w-[60vw] bg-no-repeat bg-contain bg-right-bottom"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        /> */}
        <div
          className="
    absolute hidden md:block right-0 top-0 h-full
    md:w-[calc(55vw)]
    lg:min-w-[calc(50vw)]
    xl:min-w-[calc(60vw)]
    bg-no-repeat bg-contain bg-right-bottom
  "
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
        <div className="relative z-10 inner-wrapper mx-auto px-6 lg:px-0 w-full  py-20">
          <div className="max-w-3xl text-white ">
            {title && <p className="mt-15 md:mt-25  text-white text-[2rem] lg:text-[3.125rem] font-bold leading-tight fredoka ">
              {title?.first}
            </p>}
            <ul className="mt-8 space-y-4">
              {features?.map((feature: string, index: number) => (
                <li
                  key={index}
                  className="font-semibold text-lg lg:text-[1.5rem] flex items-center fredoka"
                >
                  <BsCheck2All className="w-6 h-6 mr-3 text-white" />
                  {feature}
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap gap-4 onesta">
              <Button
                href={cta?.
                  href
                }
                label={cta?.label}
                className="onesta bg-white !text-[#00603A]  px-8 py-4 rounded-full font-normal transition-all hover:!text-white font-normal text-base"
              />
              <Button
                href={demobtn?.href}
                label={demobtn?.label}
                variant="outline"
                className=" onesta border-white text-white hover:bg-white hover:!text-[#00603A] px-8 py-4 rounded-full font-normal transition-all text-base
"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
