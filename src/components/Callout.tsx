import { ReactNode } from 'react'
import { AlertTriangle, Info, CheckCircle, XCircle } from 'lucide-react'
import { cn } from '../lib/utils'

interface CalloutProps {
  children: ReactNode
  type?: 'info' | 'warning' | 'success' | 'error'
  title?: string
  className?: string
}

export function Callout({ children, type = 'info', title, className }: CalloutProps) {
  const styles = {
    info: {
      bg: 'bg-primary-500/10 border-primary-500/30',
      icon: <Info className="w-5 h-5" />,
      iconColor: 'text-primary-400',
    },
    warning: {
      bg: 'bg-yellow-500/10 border-yellow-500/30',
      icon: <AlertTriangle className="w-5 h-5" />,
      iconColor: 'text-yellow-400',
    },
    success: {
      bg: 'bg-green-500/10 border-green-500/30',
      icon: <CheckCircle className="w-5 h-5" />,
      iconColor: 'text-green-400',
    },
    error: {
      bg: 'bg-red-500/10 border-red-500/30',
      icon: <XCircle className="w-5 h-5" />,
      iconColor: 'text-red-400',
    },
  }

  const style = styles[type]

  return (
    <div className={cn('rounded-lg border p-4 flex gap-3', style.bg, className)}>
      <div className={cn('flex-shrink-0 mt-0.5', style.iconColor)}>{style.icon}</div>
      <div>
        {title && <p className="font-medium text-foreground mb-1">{title}</p>}
        <div className="text-sm text-muted-foreground">{children}</div>
      </div>
    </div>
  )
}
