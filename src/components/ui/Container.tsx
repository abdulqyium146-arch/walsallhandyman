import { ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
  className?: string
  as?: 'div' | 'section' | 'article' | 'main' | 'header' | 'footer'
  narrow?: boolean
}

export default function Container({ children, className = '', as: Tag = 'div', narrow }: ContainerProps) {
  const width = narrow ? 'max-w-3xl' : 'max-w-7xl'
  return (
    <Tag className={`${width} mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </Tag>
  )
}
