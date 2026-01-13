import Image from 'next/image';
import Button from '../ui/Button';

/* ---------- BANNER DATA (JSON) ---------- */
const bannerData = {
  title: {
    line1: 'Explore Our Comprehensive',
    line2: 'Petcare Solutions',
  },
  image: {
    src: '/images/Webp/footer-cta-animal.webp',
    alt: 'Pets',
  },
  button: {
    label: 'Book a Demo Now !',
    href: '',
  },
};

/* ---------- COMPONENT ---------- */
const ExplorePetcareBanner = () => {
  return (
    <section className="relative bg-[#0B5D3B] pb-10">
      <div className="inner-wrapper mx-auto px-4">
        <div
          className="
            relative
            flex
            flex-col
            md:flex-row
            items-center
            justify-between
            gap-6
            bg-white
            rounded-b-3xl
            p-6
            md:px-10
          "
        >
          <div className="flex ">
            {/* LEFT CONTENT */}
            <h2 className="text-xl md:text-[2rem] font-semibold text-[#02000F] leading-snug fredoka">
              {bannerData.title.line1}
              <br />
              {bannerData.title.line2}
            </h2>

            {/* CENTER IMAGE */}
            <div className="absolute -bottom-6.5  translate-x-[100%] hidden lg:block">
              <div className="relative w-[140px] md:w-[280px] h-[140px] md:h-[100px]">
                <Image
                  src={bannerData.image.src}
                  alt={bannerData.image.alt}
                  fill
                  className="object-contain "
                  priority
                />
              </div>
            </div>
          </div>
          {/* CTA BUTTON */}
          <Button href={bannerData.button.href} label={bannerData.button.label} showIcon={true} />
        </div>
      </div>
    </section>
  );
};

export default ExplorePetcareBanner;
