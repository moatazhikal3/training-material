import React from 'react'

export function Button({ children, className = '', variant = 'default', ...props }) {
  const base = 'inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-md transition focus:outline-none focus:ring';
  const styles = variant === 'outline'
    ? 'border border-gray-300 bg-white hover:bg-gray-50'
    : 'text-white hover:opacity-95';
  return (
    <button className={`${base} ${styles} ${className}`} {...props}>
      {children}
    </button>
  )
}
