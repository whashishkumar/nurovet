import Image from 'next/image';

export default function CustomizedDashboard() {
  return (
    <section className="relative w-full overflow-hidden bg-color ">
      <div className="inner-wrapper m-auto flex flex-col lg:flex-row items-center ">
        <div className="relative w-full lg:w-1/2 h-[300px]  flex items-center justify-center">
          <div
            className="
            absolute w-full
            min-h-[200px] 
            sm:min-h-[500px]
            lg:h-[803px] 
            bg-[url('/images/green-bg.svg')]
            bg-contain        
            bg-center       
            bg-no-repeat
            sm:rounded-3xl
            overflow-hidden "
            // className="absolute inset-0 z-0"
            // style={{ clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0% 100%)' }}
          />
          <div className="relative z-10 w-full max-w-md lg:max-w-lg px-4">
            <div className="relative">
              {/* <Image
                src="/laptop-mockup.png"
                alt="Dashboard on Laptop"
                className="w-full drop-shadow-2xl"
              />
              <Image
                src="/tablet-mockup.png"
                alt="Dashboard on Tablet"
                className="absolute -bottom-10 -left-10 w-2/3 drop-shadow-xl hidden md:block"
              /> */}
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/3 px-8 py-12 text-center lg:text-left z-20">
          <h2 className="text-xl md:text-5xl font-bold text-gray-900 mb-6">Customized Dashboard</h2>
          <p className="text-lg md:text-sm text-gray-700 leading-relaxed">
            A fully customized dashboard offering real-time visibility into patients, staff,
            appointments, labs, inventory, and clinic performance.
          </p>
        </div>

        {/* Right Section: Pets Image */}
        <div className="hidden lg:flex lg:w-1/4 items-end justify-end h-full">
          <Image
            src="/images/dashb-img.png"
            alt="Cats"
            className="object-contain"
            height={200}
            width={500}
          />
        </div>
      </div>
    </section>
  );
}
