import Link from 'next/link';

export default function Button({
  href,
  label,
  variant = 'primary',
  className = '',
  ...props
}: any) {
  const variants = {
    primary: 'bg-[#00603A] hover:bg-[#004d2e] text-white',
    secondary: 'bg-[#003366] hover:bg-[#002244] text-white',
    outline: 'border border-[#fff] text-white  hover:text-white',
  };

  return (
    <Link
      href={href}
      className={`
        onesta
        inline-block
        rounded-full 
        px-6 
        py-2.5 
        text-base 
        transition-all 
        duration-300 
        text-center
        ${variants[variant] || variants.primary} 
        ${className}
      `}
      {...props}
    >
      {label}
    </Link>
  );
}
