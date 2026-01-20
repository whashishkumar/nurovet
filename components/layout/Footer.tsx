import Image from 'next/image';
import Link from 'next/link';
import { FiPlus, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import ExplorePetcareBanner from '../common/PetCareSolutions';

const Footer = ({ footerResp }: any) => {
  const { brand, social, quickLinks, services, support } = footerResp || {};

  return (
    <footer className="bg-[#0B5D3B] text-white overflow-hidden relative">
      <ExplorePetcareBanner />

      <div
        className="
    absolute
    hidden
    lg:block
    bottom-0
    left-0
    lg:w-[15vw] xl:w-[20vw]
    lg:h-45
    bg-[url('/images/Webp/footer-animal.webp')]
    bg-no-repeat
    bg-contain
    bg-bottom-left
    pointer-events-none
  "
      />

      <div
        className="
    absolute
    hidden
    lg:block
    right-0
    bottom-0
    lg:w-[50vw] xl:w-[50vw]
    lg:h-[320px]
    bg-[url('/images/Webp/footer-right.webp')]
    bg-no-repeat
    bg-contain
    bg-right-bottom
    pointer-events-none
  "
      />

      <div className="inner-wrapper mx-auto lg:px-0 px-4 py-14">
        <div className="grid grid-cols-1  md:grid-cols-4 gap-14">
          <div>
            {brand.logo && (
              <Image
                src={brand.logo}
                alt="Nuro Vet"
                width={240}
                height={40}
                className="object-fill"
              />
            )}
            <p className="mt-6 text-base text-white leading-relaxed onesta">{brand?.description}</p>
            <ul className="mt-6 space-y-4 text-base">
              <li className="flex items-center gap-3">
                <p className="border border-white rounded-full p-2">
                  <FiMail size={14} />
                </p>
                {brand?.email}
              </li>
              <li className="flex items-center gap-3">
                <p className="border border-white rounded-full p-2">
                  <FiPhone size={14} />
                </p>
                {brand?.phone}
              </li>
              <li className="flex items-center gap-3">
                <p className="border border-white rounded-full p-2">
                  <FiMapPin size={14} />
                </p>
                {brand?.address}
              </li>
            </ul>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-2xl font-semibold mb-6 fredoka">Quick Links</h4>
            <ul className="space-y-3 text-base">
              {quickLinks?.map((item: any, index: number) => (
                <li key={index} className="flex items-center gap-2">
                  <FiPlus className="text-base" />
                  <Link href={item.href}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="text-2xl font-semibold mb-6 fredoka">Services</h4>
            <ul className="space-y-3 text-base">
              {services?.map((item: any, index: number) => (
                <li key={index} className="flex items-center gap-2">
                  <FiPlus className="text-base" />
                  <Link href={item.href}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SUPPORT */}
          <div>
            <h4 className="text-2xl font-semibold mb-6 fredoka">Support</h4>
            <ul className="space-y-3 text-base">
              {support?.map((item: any, index: number) => (
                <li key={index} className="flex items-center gap-2">
                  <FiPlus className="text-base" />
                  <Link href={item.href}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="my-10 h-px bg-white/20" />

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-white">
          <p className="text-base onesta">
            © Copyright 2026 Nurovet. . All Rights Reserved By VMP.
          </p>

          <div className="flex items-center gap-4 text-base onesta">
            <span>Social Media:</span>
            {social?.map((item: any, index: null) => (
              <Link
                target="__blank"
                key={index}
                href={item.href}
                className="w-8 h-8 flex items-center justify-center rounded-full border border-white/40  hover:text-[#0B5D3B] transition"
              >
                {item?.icon && (
                  <Image
                    src={item?.icon}
                    alt="icon"
                    height={50}
                    width={50}
                    className="object-contain"
                  />
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
