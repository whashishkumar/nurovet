import Image from 'next/image';
import Button from '../ui/Button';

export default function CustomizedDashboard() {
  return (
    <section className="relative w-full bg-color py-12">
      <div className="wrapper m-auto">
        <div className="relative w-full flex flex-col lg:flex-row rounded-3xl overflow-visible">
          {/* Background */}
          <div
            className="absolute inset-0 z-0 bg-[url('/images/dashboardbg.png')] bg-contain lg:bg-cover bg-bottom bg-no-repeat rounded-3xl"
            aria-hidden="true"
          />

          {/* Content */}
          <div className="relative z-10 w-full flex flex-col lg:flex-row">
            {/* LEFT: Dashboard */}
            <div className="w-full lg:w-[55%] flex items-end justify-start px-6 lg:px-12">
              <Image
                src="/images/dashboard.png"
                alt="Dashboard on Laptop"
                className="object-contain"
                height={200}
                width={450}
                priority
              />
            </div>

            {/* CENTER: Text */}
            <div className="w-full lg:w-[30%] flex items-center px-8 py-12 lg:py-0 text-center lg:text-left">
              <div className="py-8">
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 ">
                  Customized Dashboard
                </h2>
                <p className="text-lg md:text-base text-gray-700 leading-relaxed mt-4 ">
                  A fully customized dashboard offering real-time visibility into patients, staff,
                  appointments, labs, inventory, and clinic performance.
                </p>
              </div>
            </div>

            {/* RIGHT: Pets */}
            <div className="hidden lg:flex lg:w-[15%] items-end justify-end pr-6">
              <Image
                src="/images/dashb-img.png"
                alt="Pets"
                className="object-contain"
                height={250}
                width={300}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
