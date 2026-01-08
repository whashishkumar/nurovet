'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navbarData = {
    logo: {
      src: '/logo/logoh.svg',
      alt: 'Nuro Vet Logo',
      width: 270,
      height: 60,
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
                width={navbarData.logo.width}
                height={navbarData.logo.height}
                priority
                className="object-contain w-[140px] sm:w-[180px] md:w-[220px] lg:w-[270px] h-auto"
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
                <span className="h-8 w-8 flex items-center justify-center rounded-full bg-green-600">
                  📞
                </span>
                <span
                  className="text-sm font-medium leading-tight text-base
"
                >
                  {navbarData.phone.label}
                  <br />
                  {navbarData.phone.number}
                </span>
              </div>

              <Link
                href={navbarData.cta.href}
                className="rounded-full bg-green-700 px-5 py-2 text-sm font-semibold text-white hover:bg-green-800 transition text-base"
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
