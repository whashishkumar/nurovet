// app/components/SectionBadge.tsx
import Image from 'next/image';

type SectionBadgeProps = {
  label: string;
  icon?: string;
};

export default function SectionBadge({ label, icon = '/icons/bone.svg' }: SectionBadgeProps) {
  return (
    <div className="inline-flex flex-col items-start gap-2 py-4">
      {/* Top wave */}
      <svg width="160" height="8" viewBox="0 0 160 8" className="text-gray-400" aria-hidden>
        <path
          d="M0 4 Q20 0 40 4 T80 4 T120 4 T160 4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray="4 6"
          strokeLinecap="round"
        />
      </svg>

      {/* Content */}
      <div className="flex items-center gap-2 text-[#00603A] font-semibold text-lg leading-[1.5rem] fredoka">
        <Image src={icon} alt={label} width={24} height={24} className="object-contain" />
        <span>{label}</span>
      </div>

      {/* Bottom wave */}
      <svg width="160" height="8" viewBox="0 0 160 8" className="text-gray-400" aria-hidden>
        <path
          d="M0 4 Q20 8 40 4 T80 4 T120 4 T160 4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray="4 6"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
