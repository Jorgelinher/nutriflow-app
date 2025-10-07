import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export default function Card({ children, className, hover = false }: CardProps) {
  return (
    <div
      className={cn(
        'bg-white rounded-xl shadow-lg p-6 border border-gray-100',
        hover && 'hover:shadow-2xl transition-all duration-300 hover:-translate-y-2',
        className
      )}
    >
      {children}
    </div>
  )
}
