import Navbar from '../layout/NavBar';

const heroContent = {
  title: {
    first: 'Smart Veterinary',
    highlight: ' Management, All in',
    last: ' One Platform',
  },
  features: ['Real-time patient tracking', 'Role-based staff management', 'AI-powered insights'],
};

export default function HeroBanner() {
  return (
    <div className="bg-[#F7F2ED] w-full">
      <div className="px-4 sm:px-6 mx-auto py-4 sm:py-6 max-w-[1536px]">
        <div
          className="
            relative w-full
            min-h-[400px]
            sm:aspect-[16/9]
            lg:h-[702px] 
            bg-[url('/images/bannerbg.svg')]
            bg-cover        
            bg-center       
            bg-no-repeat
            rounded-2xl
            sm:rounded-3xl
            overflow-hidden
          "
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/0 to-transparent z-10 pointer-events-none" />

          <div className="absolute top-0 left-0 w-full z-50 pt-4 sm:pt-6 lg:pt-10">
            <Navbar />
          </div>

          {/* --- FIXED INNER WRAPPER SECTION --- */}
          <div className="absolute inset-0 z-20 flex items-center">
            <div className="px-4 sm:px-10 md:px-16 w-full">
              <div className="inner-wrapper m-auto ">
                <h1 className="text-[2.5rem] sm:text-[3.5rem] lg:text-[4.2rem] font-bold leading-tight lg:leading-[4.75rem] text-[#003366] fredoka">
                  {heroContent.title.first}{' '}
                  <span className="text-[#00603A] block">{heroContent.title.highlight}</span>
                  {heroContent.title.last}
                </h1>

                <ul className="mt-6 space-y-2">
                  {heroContent.features.map((feature, index) => (
                    <li
                      key={index}
                      className="text-[#00603A] font-bold text-lg sm:text-xl lg:text-[1.5rem] flex items-center"
                    >
                      <span className="mr-2">•</span> {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
