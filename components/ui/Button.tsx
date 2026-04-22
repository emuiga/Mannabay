import Link from 'next/link'

interface ButtonProps {
  href?: string
  external?: boolean
  variant?: 'primary' | 'ghost' | 'outline-white'
  children: React.ReactNode
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

export default function Button({
  href,
  external,
  variant = 'primary',
  children,
  className = '',
  onClick,
  type = 'button',
  disabled,
}: ButtonProps) {
  const base =
    'inline-block font-body font-medium text-sm uppercase tracking-wider px-7 py-3.5 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2'

  const variants = {
    primary: 'bg-green text-white hover:bg-green-dark',
    ghost: 'border border-white text-white hover:bg-white hover:text-charcoal',
    'outline-white': 'border border-crimson text-crimson hover:bg-crimson hover:text-white',
  }

  const classes = `${base} ${variants[variant]} ${className}`

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {children}
        </a>
      )
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${classes} disabled:opacity-50 disabled:cursor-not-allowed`}
    >
      {children}
    </button>
  )
}
