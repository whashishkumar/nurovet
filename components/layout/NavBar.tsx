'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FiPhoneCall } from 'react-icons/fi';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navbarData = {
    logo: {
      src: '/logo/logoh.svg',
      alt: 'Nuro Vet Logo',
    },
    menu: [
      { label: 'Home', href: '/' },
      { label: 'About Us', href: '/about' },
      { label: 'Gallery', href: '/gallery' },
      { label: 'Blog', href: '/blog' },
      { label: 'Contact Us', href: '/contact' },
    ],
    phone: {
      label: 'Call us:',
      number: '+1 (424) 323 3268',
    },
    cta: {
      label: 'Request Demo',
      href: '/request-demo',
    },
  };

  return (
    <header>
      <nav className="mx-auto wrapper px-6">
        <div className="mt-4  ">
          <div className="flex items-center justify-between ">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src={navbarData.logo.src}
                alt={navbarData.logo.alt}
                width={270}
                height={60}
                priority
                className="object-contain w-[140px] sm:w-[180px] md:w-[220px] lg:w-[270px] "
              />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8 text-white/90">
              {navbarData.menu.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="hover:text-white transition text-base"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Right Actions */}
            <div className="hidden md:flex items-center gap-4">
              <div className="flex items-center gap-2 text-white">
                <span className="h-12 w-12 flex items-center justify-center rounded-full bg-[#00603A]">
                  <FiPhoneCall size={20} />
                </span>
                <p className="text-2xl  leading-tight text-base">
                  <span className="fredoka font-medium"> {navbarData.phone.label}</span>
                  <br />
                  <span className="font-normal"> {navbarData.phone.number}</span>
                </p>
              </div>

              <Link
                href={navbarData.cta.href}
                className="rounded-full bg-[#00603A] px-5 py-3 text-sm  text-white hover:bg-green-800 transition text-base border border-white text-base
"
              >
                {navbarData.cta.label}
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden text-white text-xl"
              aria-label="Toggle Menu"
            >
              ☰
            </button>
          </div>

          {/* Mobile Menu */}
          {open && (
            <div className="md:hidden px-6 pb-4 pt-2 text-white space-y-3">
              {navbarData.menu.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block"
                >
                  {item.label}
                </Link>
              ))}

              <Link
                href={navbarData.cta.href}
                className="block w-full mt-2 rounded-full bg-green-700 px-4 py-2 text-center text-sm font-semibold"
              >
                {navbarData.cta.label}
              </Link>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
