import Link from 'next/link'

interface ButtonProps {
  href?: string
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

export default function Button({
  href,
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  onClick,
  type = 'button',
  disabled = false,
}: ButtonProps) {
  const baseClasses =
    'inline-flex items-center justify-center font-medium rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 group'

  const variantClasses = {
    primary:
      'bg-purple-600 hover:bg-purple-700 text-white focus:ring-purple-500',
    secondary:
      'bg-gray-100 hover:bg-gray-200 text-gray-900 focus:ring-gray-500',
    outline:
      'border border-gray-500 text-white hover:bg-gray-800 hover:border-gray-400 focus:ring-gray-500',
  }

  const sizeClasses = {
    sm: 'px-3 py-2 text-xs sm:text-sm',
    md: 'px-4 py-2 sm:px-5 sm:py-2.5 text-sm sm:text-base',
    lg: 'px-6 py-3 sm:px-8 sm:py-3 text-sm sm:text-base',
  }

  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : ''

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${className}`

  if (href && !disabled) {
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
    >
      {children}
    </button>
  )
}
