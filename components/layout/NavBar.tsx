// 'use client';

// import Image from 'next/image';
// import Link from 'next/link';
// import { useState } from 'react';
// import { FiPhoneCall } from 'react-icons/fi';

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const navbarData = {
//     logo: {
//       src: '/logo/logoh.svg',
//       alt: 'Nuro Vet Logo',
//     },
//     menu: [
//       { label: 'Home', href: '/' },
//       { label: 'About Us', href: '/about' },
//       { label: 'Gallery', href: '/gallery' },
//       { label: 'Blog', href: '/blog' },
//       { label: 'Contact Us', href: '/contact' },
//     ],
//     phone: {
//       label: 'Call us:',
//       number: '+1 (424) 323 3268',
//     },
//     cta: {
//       label: 'Request Demo',
//       href: '/request-demo',
//     },
//   };

//   return (
//     <header>
//       <nav className="mx-auto wrapper px-6">
//         <div className="mt-4  ">
//           <div className="flex items-center justify-between ">
//             {/* Logo */}
//             <Link href="/" className="flex items-center">
//               <Image
//                 src={navbarData.logo.src}
//                 alt={navbarData.logo.alt}
//                 width={270}
//                 height={60}
//                 priority
//                 className="object-contain w-[140px] sm:w-[180px] md:w-[220px] lg:w-[270px] "
//               />
//             </Link>

//             {/* Desktop Menu */}
//             <div className="hidden md:flex items-center gap-8 text-white/90">
//               {navbarData.menu.map((item) => (
//                 <Link
//                   key={item.label}
//                   href={item.href}
//                   className="hover:text-white transition text-base"
//                 >
//                   {item.label}
//                 </Link>
//               ))}
//             </div>

//             {/* Right Actions */}
//             <div className="hidden md:flex items-center gap-4">
//               <div className="flex items-center gap-2 text-white">
//                 <span className="h-12 w-12 flex items-center justify-center rounded-full bg-[#00603A]">
//                   <FiPhoneCall size={20} />
//                 </span>
//                 <p className="text-2xl  leading-tight text-base">
//                   <span className="fredoka font-medium"> {navbarData.phone.label}</span>
//                   <br />
//                   <span className="font-normal"> {navbarData.phone.number}</span>
//                 </p>
//               </div>

//               <Link
//                 href={navbarData.cta.href}
//                 className="rounded-full bg-[#00603A] px-5 py-3 text-sm  text-white hover:bg-green-800 transition text-base border border-white text-base
// "
//               >
//                 {navbarData.cta.label}
//               </Link>
//             </div>

//             {/* Mobile Menu Button */}
//             <button
//               onClick={() => setOpen(!open)}
//               className="md:hidden text-white text-xl"
//               aria-label="Toggle Menu"
//             >
//               ☰
//             </button>
//           </div>

//           {/* Mobile Menu */}
//           {open && (
//             <div className="md:hidden px-6 pb-4 pt-2 text-white space-y-3">
//               {navbarData.menu.map((item) => (
//                 <Link
//                   key={item.label}
//                   href={item.href}
//                   onClick={() => setOpen(false)}
//                   className="block"
//                 >
//                   {item.label}
//                 </Link>
//               ))}

//               <Link
//                 href={navbarData.cta.href}
//                 className="block w-full mt-2 rounded-full bg-green-700  py-2 text-center text-sm font-semibold"
//               >
//                 {navbarData.cta.label}
//               </Link>
//             </div>
//           )}
//         </div>
//       </nav>
//     </header>
//   );
// }

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FiPhoneCall, FiMenu, FiX } from 'react-icons/fi';

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
    cta: { label: 'Request Demo', href: '/request-demo' },
  };

  return (
    <header className="relative z-50">
      <nav className="mx-auto wrapper px-6">
        <div className="mt-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src={navbarData.logo.src}
                alt={navbarData.logo.alt}
                width={270}
                height={60}
                priority
                className="object-contain w-[140px] sm:w-[180px] md:w-[220px] lg:w-[270px]"
              />
            </Link>

            {/* Desktop Menu (Laptops and up) */}
            <div className="hidden lg:flex items-center gap-8 text-white/90">
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

            {/* Right Actions (Laptops and up) */}
            <div className="hidden lg:flex items-center gap-4">
              <div className="flex items-center gap-2 text-white">
                <span className="h-12 w-12 flex items-center justify-center rounded-full bg-[#00603A]">
                  <FiPhoneCall size={20} />
                </span>
                <div className="text-sm leading-tight">
                  <span className="fredoka font-medium block">{navbarData.phone.label}</span>
                  <span className="font-normal">{navbarData.phone.number}</span>
                </div>
              </div>
              <Link
                href={navbarData.cta.href}
                className="rounded-full bg-[#00603A] px-5 py-3 text-sm text-white hover:bg-green-800 transition border border-white"
              >
                {navbarData.cta.label}
              </Link>
            </div>

            {/* Mobile/Tablet Menu Button */}
            <button
              onClick={() => setOpen(true)}
              className="lg:hidden text-white p-2 focus:outline-none"
              aria-label="Open Menu"
            >
              <FiMenu size={32} />
            </button>
          </div>

          {/* SIDEBAR OVERLAY (Dims the background) */}
          <div
            className={`fixed inset-0 bg-black/50 transition-opacity duration-300 lg:hidden ${
              open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
            }`}
            onClick={() => setOpen(false)}
          />

          {/* SIDEBAR MENU (70% Width, Full Height) */}
          <div
            className={`fixed top-0 right-0 h-full w-[70%] bg-[#00603A]/95 text-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 lg:hidden ${
              open ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <div className="flex flex-col h-full p-8">
              {/* Close Button Inside Sidebar */}
              <div className="flex justify-end mb-8">
                <button onClick={() => setOpen(false)} className="text-white">
                  <FiX size={32} />
                </button>
              </div>

              {/* Menu Links */}
              <div className="flex flex-col space-y-6">
                {navbarData.menu.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="text-xl font-light border-b border-white/10 pb-3 hover:text-green-400 transition"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              {/* Contact Info & CTA at the bottom */}
              <div className="mt-auto pb-10 space-y-6">
                <div className="flex items-center gap-4">
                  <span className="h-10 w-10 flex items-center justify-center rounded-full bg-[#00603A]">
                    <FiPhoneCall size={18} />
                  </span>
                  <div>
                    <p className="text-xs text-gray-400">{navbarData.phone.label}</p>
                    <p className="text-lg font-medium">{navbarData.phone.number}</p>
                  </div>
                </div>
                <Link
                  href={navbarData.cta.href}
                  onClick={() => setOpen(false)}
                  className="block w-full rounded-full bg-[#00603A] py-4 text-center text-white font-semibold border border-white/20 hover:bg-green-800 transition"
                >
                  {navbarData.cta.label}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
