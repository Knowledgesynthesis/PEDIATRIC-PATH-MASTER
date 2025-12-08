import { Link } from 'react-router-dom'
import { LucideIcon } from 'lucide-react'
import { Card } from './ui/Card'
import { cn } from '../lib/utils'

interface ModuleCardProps {
  title: string
  description: string
  path: string
  icon: LucideIcon
  color: string
}

export function ModuleCard({ title, description, path, icon: Icon, color }: ModuleCardProps) {
  return (
    <Link to={path}>
      <Card className="h-full hover:border-primary-500/50 transition-all hover:-translate-y-1">
        <div className="p-6">
          <div
            className={cn(
              'w-12 h-12 rounded-lg flex items-center justify-center mb-4',
              color
            )}
          >
            <Icon className="w-6 h-6 text-white" />
          </div>
          <h3 className="font-semibold text-foreground mb-2">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </Card>
    </Link>
  )
}
