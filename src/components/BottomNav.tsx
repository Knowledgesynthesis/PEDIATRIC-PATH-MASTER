import { Link, useLocation } from 'react-router-dom'
import { Home, BookOpen, Stethoscope, FileText, Settings } from 'lucide-react'
import { cn } from '../lib/utils'

const navItems = [
  { path: '/', label: 'Home', icon: Home },
  { path: '/srbct', label: 'SRBCT', icon: BookOpen },
  { path: '/cases', label: 'Cases', icon: FileText },
  { path: '/assessment', label: 'Assess', icon: Stethoscope },
  { path: '/settings', label: 'Settings', icon: Settings },
]

export default function BottomNav() {
  const location = useLocation()

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-background/95 backdrop-blur border-t border-border">
      <div className="flex items-center justify-around h-16">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = location.pathname === item.path

          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                'flex flex-col items-center justify-center flex-1 h-full px-2 transition-colors',
                isActive
                  ? 'text-primary-500'
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              <Icon size={20} />
              <span className="text-xs mt-1">{item.label}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
