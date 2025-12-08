import { ReactNode, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '../../lib/utils'

interface AccordionItemProps {
  title: string
  children: ReactNode
  defaultOpen?: boolean
  icon?: ReactNode
}

export function AccordionItem({ title, children, defaultOpen = false, icon }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className="border-b border-border">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-4 text-left font-medium transition-all hover:text-primary-500"
      >
        <div className="flex items-center gap-3">
          {icon && <span className="text-primary-500">{icon}</span>}
          <span>{title}</span>
        </div>
        <ChevronDown
          className={cn(
            'h-5 w-5 text-muted-foreground transition-transform duration-200',
            isOpen && 'rotate-180'
          )}
        />
      </button>
      <div
        className={cn(
          'overflow-hidden transition-all duration-300',
          isOpen ? 'max-h-[2000px] pb-4' : 'max-h-0'
        )}
      >
        <div className="text-muted-foreground">{children}</div>
      </div>
    </div>
  )
}

interface AccordionProps {
  children: ReactNode
  className?: string
}

export function Accordion({ children, className }: AccordionProps) {
  return (
    <div className={cn('divide-y divide-border rounded-lg border border-border', className)}>
      {children}
    </div>
  )
}
