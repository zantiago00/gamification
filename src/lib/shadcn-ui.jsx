export function Button({ variant = 'default', className = '', ...props }) {
  const base = 'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50';
  const variants = {
    default: 'bg-primary text-white hover:bg-primary/90',
  }
  return <button className={`${base} ${variants[variant]} ${className}`} {...props} />
}

export function Badge({ className = '', ...props }) {
  return <span className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-semibold ${className}`} {...props} />
}
