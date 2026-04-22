interface SectionLabelProps {
  children: React.ReactNode
  light?: boolean
}

export default function SectionLabel({ children, light = false }: SectionLabelProps) {
  return (
    <p
      className={`font-body text-[11px] uppercase tracking-[3px] mb-4 ${
        light ? 'text-orange/80' : 'text-orange'
      }`}
    >
      {children}
    </p>
  )
}
