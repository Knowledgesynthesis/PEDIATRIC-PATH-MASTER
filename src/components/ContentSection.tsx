import { ReactNode } from 'react'
import { Card } from './ui/Card'

interface ContentSectionProps {
  title: string
  children: ReactNode
  icon?: ReactNode
}

export function ContentSection({ title, children, icon }: ContentSectionProps) {
  return (
    <Card className="mb-6">
      <div className="p-6">
        <div className="flex items-center gap-3 mb-4">
          {icon && <span className="text-primary-500">{icon}</span>}
          <h2 className="text-xl font-semibold text-foreground">{title}</h2>
        </div>
        <div className="text-muted-foreground space-y-4">
          {children}
        </div>
      </div>
    </Card>
  )
}
