'use client';
import { useState, useRef, useEffect } from 'react';

type SelectData = {
  name: string;
  placeholder: string;
  options: string[];
};

type DropdownSelectProps = {
  data: SelectData;
  value: string;
  onChange: (value: string) => void;
};

export default function DropdownSelect({ data, value, onChange }: DropdownSelectProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <div ref={ref} className="relative w-full">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={`
          flex w-full items-center justify-between
          rounded-full px-6 py-4 text-left
          transition bg-gray-50
          ${open ? 'border border-[#0B5D3B]' : 'border border-gray-200'}
        `}
      >
        <span className={value ? 'text-gray-900' : 'text-gray-400'}>
          {value || data.placeholder}
        </span>
        <svg
          className={`h-5 w-5 transform transition ${open ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {/* Dropdown */}
      {open && (
        <div className="absolute z-20 mt-2 w-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg">
          {data.options.map((option, index) => (
            <button
              key={index}
              type="button"
              onClick={() => {
                onChange(option);
                setOpen(false);
              }}
              className="
                block w-full px-6 py-3 text-left text-sm
                text-gray-700 hover:bg-[#0B5D3B]/10 hover:text-[#0B5D3B] transition cursor-pointer
             "
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
