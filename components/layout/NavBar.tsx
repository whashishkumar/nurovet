'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiMenu, FiX, FiPhoneCall } from 'react-icons/fi';

export default function Header({ headerResp = {} }: any) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { logo = {}, menu = [], phone = {}, cta = {} } = headerResp || {};
  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (typeof window === 'undefined') return false;
    return window.location.pathname === href;
  };

  return (
    <header
      className={`w-full z-50 transition-all duration-300 
        ${
          scrolled
            ? 'fixed top-0 bg-[#00603A] py-4 shadow-lg'
            : 'absolute top-5 lg:top-10 bg-transparent py-6 px-4'
        }
      `}
    >
      <nav className="mx-auto wrapper px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src={logo?.src || '/logo/logoh.svg'}
              alt={logo?.alt || 'Nuro Vet Logo'}
              width={270}
              height={60}
              priority
              className={`object-contain transition-all duration-300
                ${scrolled ? 'w-32 sm:w-40 md:w-44' : 'w-35 sm:w-45 md:w-55 lg:w-67.5'}
              `}
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8 text-white/90">
            {menu?.map((item: any) => (
              <Link
                key={item.label}
                href={item.href}
                className={`text-base transition
                  ${isActive(item.href) ? 'text-[#22c55e] font-bold' : 'hover:text-white'}
                `}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Desktop Right */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-2 text-white">
              <span className="h-12 w-12 flex items-center justify-center rounded-full bg-[#00603A]">
                <FiPhoneCall size={20} />
              </span>
              <div className="text-sm leading-tight">
                <span className="fredoka font-medium block">{phone?.label || ''}</span>
                <a
                  href={`tel:${(phone?.number || '').replace(/\s|\(|\)|-/g, '')}`}
                  className="font-normal hover:text-green-400 transition"
                >
                  {phone?.number || ''}
                </a>
              </div>
            </div>

            <Link
              href={cta?.href || '#'}
              className="rounded-full bg-[#00603A] px-5 py-3 text-sm text-white hover:bg-green-800 transition border border-white"
            >
              {cta?.label || ''}
            </Link>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(true)}
            className="lg:hidden text-white p-2"
            aria-label="Open Menu"
          >
            <FiMenu size={32} />
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 bg-black/50 transition-opacity lg:hidden
          ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        `}
        onClick={() => setOpen(false)}
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-[70%] bg-[#00603A]/95 text-white shadow-2xl transform transition-transform z-50 lg:hidden
          ${open ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <div className="flex flex-col h-full p-8">
          <div className="flex justify-end mb-8">
            <button onClick={() => setOpen(false)}>
              <FiX size={32} />
            </button>
          </div>

          <div className="flex flex-col space-y-6">
            {menu?.map((item: any) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`text-xl border-b border-white/10 pb-3 transition
                  ${
                    isActive(item.href)
                      ? 'text-[#22c55e] font-bold'
                      : 'font-light hover:text-green-400'
                  }
                `}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Footer */}
          <div className="mt-auto pb-10 space-y-6">
            <div className="flex items-center gap-4">
              <span className="h-10 w-10 flex items-center justify-center rounded-full bg-[#00603A]">
                <FiPhoneCall size={18} />
              </span>

              <div>
                <p className="text-xs text-gray-400">{phone?.label || ''}</p>
                <a
                  href={`tel:${(phone?.number || '').replace(/\s|\(|\)|-/g, '')}`}
                  className="text-lg font-medium hover:text-green-400 transition"
                >
                  {phone?.number || ''}
                </a>
              </div>
            </div>

            <Link
              href={cta?.href || '#'}
              onClick={() => setOpen(false)}
              className="block w-full rounded-full bg-[#00603A] py-4 text-center text-white font-semibold border border-white/20 hover:bg-green-800 transition"
            >
              {cta?.label || ''}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
