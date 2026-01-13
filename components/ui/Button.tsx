import Image from 'next/image';
import Link from 'next/link';

type ButtonVariant = 'primary' | 'secondary' | 'outline';

interface ButtonProps {
  href: string;
  label: string;
  variant?: ButtonVariant;
  className?: string;
  showICon?: boolean;
  [key: string]: any; // For the rest of the props (...props)
}

export default function Button({
  href,
  label,
  variant = 'primary',
  className = '',
  showICon,
  ...props
}: ButtonProps) {
  const variants: Record<ButtonVariant, string> = {
    primary: 'bg-[#00603A] hover:bg-[#004d2e] text-white',
    secondary: 'bg-[#003366] hover:bg-[#002244] text-white',
    outline: 'border border-[#fff] text-white hover:text-white',
  };

  return (
    <Link
      href={href}
      className={`
        onesta
        rounded-full 
        px-6 
        py-2.5 
        text-base 
        transition-all 
        duration-300 
        text-center
        flex 
        justify-center
        items-center
        gap-2
        ${variants[variant]} 
        ${className}
      `}
      {...props}
    >
      <span>{label}</span>
      {showICon && (
        <Image
          src={'/icons/btnIcon.svg'}
          alt="icon"
          height={20}
          width={20}
          className="object-contain "
        />
      )}
    </Link>
  );
}
