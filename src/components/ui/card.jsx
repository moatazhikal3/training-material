import React from 'react'

export function Card({ className = '', children, ...props }) {
  return (
    <div className={`bg-white border rounded-2xl ${className}`} {...props}>
      {children}
    </div>
  )
}

export function CardContent({ className = '', children, ...props }) {
  return (
    <div className={`p-6 ${className}`} {...props}>
      {children}
    </div>
  )
}
