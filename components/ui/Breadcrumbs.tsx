'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiChevronRight } from 'react-icons/fi';

interface BreadcrumbProps {
  homeElement?: React.ReactNode;
  separator?: React.ReactNode;
  containerClasses?: string;
  listClasses?: string;
  activeClasses?: string;
  capitalizeLinks?: boolean;
}

const Breadcrumbs = ({
  homeElement = <span className="font-medium">Home</span>,
  separator = <FiChevronRight size={16} />,
  containerClasses = 'flex py-2',
  listClasses = 'hover:text-[#0b5d3b] transition-colors flex items-center gap-1',
  activeClasses = 'text-[#0a5e3b] font-semibold',
  capitalizeLinks = true,
}: BreadcrumbProps) => {
  const pathname = usePathname();
  const pathNames = pathname.split('/').filter((path) => path);

  return (
    <nav aria-label="Breadcrumb" className={containerClasses}>
      <ul className="flex items-center gap-2  sm:text-base text-gray-600 text-xl font-semibold">
        <li className={listClasses}>
          <Link href="/" className="text-xl">
            {homeElement}
          </Link>
        </li>
        {pathNames.length > 0 && <li className="text-gray-400">{separator}</li>}
        {/* Dynamic Paths */}
        {pathNames.map((link, index) => {
          const href = `/${pathNames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathNames.length - 1;
          // Formatting the label (e.g., 'about-us' becomes 'ABOUT US')
          const label = capitalizeLinks
            ? link
                .replace(/-/g, ' ') // Replace hyphens with spaces
                .split(' ') // Split into words
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitalize each word
                .join(' ') // Join back together
            : link;

          return (
            <React.Fragment key={index}>
              <li className={`text-xl font-semibold ${isLast ? activeClasses : listClasses}`}>
                {isLast ? <span>{label}</span> : <Link href={href}>{label}</Link>}
              </li>
              {!isLast && <li className="text-gray-400">{separator}</li>}
            </React.Fragment>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumbs;
