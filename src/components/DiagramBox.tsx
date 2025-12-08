import { ReactNode } from 'react'
import { cn } from '../lib/utils'

interface DiagramBoxProps {
  title: string
  children: ReactNode
  className?: string
}

export function DiagramBox({ title, children, className }: DiagramBoxProps) {
  return (
    <div className={cn('border border-border rounded-xl p-4 bg-secondary/30', className)}>
      <h4 className="text-sm font-medium text-primary-400 mb-3">{title}</h4>
      <div className="text-foreground">{children}</div>
    </div>
  )
}

interface DiagramFlowProps {
  items: string[]
  className?: string
}

export function DiagramFlow({ items, className }: DiagramFlowProps) {
  return (
    <div className={cn('flex flex-wrap items-center gap-2', className)}>
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          <div className="px-3 py-2 bg-primary-500/20 text-primary-300 rounded-lg text-sm font-medium">
            {item}
          </div>
          {index < items.length - 1 && (
            <span className="text-primary-500">→</span>
          )}
        </div>
      ))}
    </div>
  )
}

interface IconDiagramProps {
  icon: ReactNode
  label: string
  description?: string
  color?: string
}

export function IconDiagram({ icon, label, description, color = 'bg-primary-500/20 text-primary-400' }: IconDiagramProps) {
  return (
    <div className="flex items-start gap-3 p-3 rounded-lg bg-secondary/50">
      <div className={cn('w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0', color)}>
        {icon}
      </div>
      <div>
        <p className="font-medium text-foreground">{label}</p>
        {description && <p className="text-sm text-muted-foreground mt-1">{description}</p>}
      </div>
    </div>
  )
}
