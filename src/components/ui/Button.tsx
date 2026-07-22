import Link from 'next/link'
import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'ghost' | 'phone'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  external?: boolean
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  fullWidth?: boolean
}

const variants = {
  primary: 'bg-[#C9933A] text-white hover:bg-[#B07F2A] focus-visible:ring-[#C9933A] shadow-[0_4px_24px_0_rgba(201,147,58,0.25)]',
  secondary: 'bg-[#1B2B4B] text-white hover:bg-[#0F1A2E] focus-visible:ring-[#1B2B4B]',
  ghost: 'bg-transparent text-[#1B2B4B] border border-[#1B2B4B] hover:bg-[#1B2B4B] hover:text-white',
  phone: 'bg-[#276749] text-white hover:bg-[#1e5038] focus-visible:ring-[#276749]',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  external,
  disabled,
  type = 'button',
  fullWidth,
}: ButtonProps) {
  const base = `inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`

  if (href) {
    return external ? (
      <a href={href} target="_blank" rel="noopener noreferrer" className={base}>
        {children}
      </a>
    ) : (
      <Link href={href} className={base}>
        {children}
      </Link>
    )
  }
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={base}>
      {children}
    </button>
  )
}
