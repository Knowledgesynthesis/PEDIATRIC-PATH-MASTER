import {
  Baby,
  Heart,
  Stethoscope,
  CircleDot,
  Activity,
  Bone,
  Microscope,
  AlertTriangle,
  FileText,
  ClipboardCheck,
  FlaskConical,
  Dna,
  Brain,
  Pill,
} from 'lucide-react'
import { ModuleCard } from '../components/ModuleCard'
import { Callout } from '../components/Callout'

const modules = [
  {
    title: 'Normal Development',
    description: 'Pediatric developmental histology from fetal to childhood stages',
    path: '/development',
    icon: Baby,
    color: 'bg-gradient-to-br from-blue-500 to-blue-600',
  },
  {
    title: 'Perinatal Pathology',
    description: 'Placenta, stillbirth evaluation, and congenital anomalies',
    path: '/perinatal',
    icon: Heart,
    color: 'bg-gradient-to-br from-pink-500 to-pink-600',
  },
  {
    title: 'Neonatal Pathology',
    description: 'RDS, NEC, meconium aspiration, and metabolic diseases',
    path: '/neonatal',
    icon: Stethoscope,
    color: 'bg-gradient-to-br from-purple-500 to-purple-600',
  },
  {
    title: 'SRBCT',
    description: 'Small round blue cell tumors: neuroblastoma, Wilms, Ewing, RMS',
    path: '/srbct',
    icon: CircleDot,
    color: 'bg-gradient-to-br from-indigo-500 to-indigo-600',
  },
  {
    title: 'Pediatric Tumors',
    description: 'CNS tumors, germ cell tumors, and bone tumors in children',
    path: '/ped-tumors',
    icon: Activity,
    color: 'bg-gradient-to-br from-red-500 to-red-600',
  },
  {
    title: 'Soft Tissue Tumors',
    description: 'Infantile fibrosarcoma, lipoblastoma, myofibroma, and more',
    path: '/soft-tissue',
    icon: Bone,
    color: 'bg-gradient-to-br from-orange-500 to-orange-600',
  },
  {
    title: 'Liver Tumors',
    description: 'Hepatoblastoma and pediatric hepatic neoplasms',
    path: '/liver-tumors',
    icon: Pill,
    color: 'bg-gradient-to-br from-amber-500 to-amber-600',
  },
  {
    title: 'Pediatric GI/GU',
    description: 'GI, renal, endocrine, and gonadal pathology in children',
    path: '/peds-gi-gu',
    icon: FlaskConical,
    color: 'bg-gradient-to-br from-emerald-500 to-emerald-600',
  },
  {
    title: 'Pediatric Autopsy',
    description: 'Non-forensic autopsy considerations and evaluation',
    path: '/autopsy',
    icon: Microscope,
    color: 'bg-gradient-to-br from-teal-500 to-teal-600',
  },
  {
    title: 'IHC/Molecular',
    description: 'Immunohistochemistry and molecular markers in pediatric tumors',
    path: '/ihc-molecular',
    icon: Dna,
    color: 'bg-gradient-to-br from-cyan-500 to-cyan-600',
  },
  {
    title: 'Pitfalls & Mimics',
    description: 'Common diagnostic pitfalls and dangerous mimics',
    path: '/pitfalls',
    icon: AlertTriangle,
    color: 'bg-gradient-to-br from-yellow-500 to-yellow-600',
  },
  {
    title: 'Case Bank',
    description: 'Integrated synthetic cases for practice',
    path: '/cases',
    icon: FileText,
    color: 'bg-gradient-to-br from-lime-500 to-lime-600',
  },
  {
    title: 'Assessment',
    description: 'Test your knowledge with pattern-based questions',
    path: '/assessment',
    icon: ClipboardCheck,
    color: 'bg-gradient-to-br from-violet-500 to-violet-600',
  },
  {
    title: 'Hematopathology',
    description: 'Pediatric leukemia and lymphoma patterns (conceptual)',
    path: '/srbct',
    icon: Brain,
    color: 'bg-gradient-to-br from-rose-500 to-rose-600',
  },
]

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary-900/40 via-background to-accent-900/20 border-b border-border">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Pediatric Path Master
            </h1>
            <p className="text-lg text-muted-foreground mb-6">
              A comprehensive educational platform for pediatric pathology residents.
              Master developmental histology, perinatal pathology, childhood tumors,
              and more through structured learning modules.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 bg-primary-500/20 text-primary-400 rounded-full text-sm">
                Mobile-First
              </span>
              <span className="px-3 py-1 bg-accent-500/20 text-accent-400 rounded-full text-sm">
                Dark Mode
              </span>
              <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">
                Offline Ready
              </span>
              <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-sm">
                Icons Only
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="container mx-auto px-4 py-6">
        <Callout type="warning" title="Educational Use Only">
          This app is for educational purposes only. All content is synthetic and conceptual.
          Not intended for clinical diagnosis or patient care decisions.
        </Callout>
      </div>

      {/* Modules Grid */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-foreground mb-6">Learning Modules</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {modules.map((module) => (
            <ModuleCard key={module.path + module.title} {...module} />
          ))}
        </div>
      </div>

      {/* Target Audience */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-card border border-border rounded-xl p-6">
          <h2 className="text-xl font-semibold text-foreground mb-4">Target Audience</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-secondary/50 rounded-lg">
              <h3 className="font-medium text-foreground mb-2">PGY-1 Residents</h3>
              <p className="text-sm text-muted-foreground">
                Normal development, neonatal pathology basics, foundational concepts
              </p>
            </div>
            <div className="p-4 bg-secondary/50 rounded-lg">
              <h3 className="font-medium text-foreground mb-2">PGY-3 Residents</h3>
              <p className="text-sm text-muted-foreground">
                Pediatric tumor classification, congenital anomalies, advanced patterns
              </p>
            </div>
            <div className="p-4 bg-secondary/50 rounded-lg">
              <h3 className="font-medium text-foreground mb-2">Pediatric Path Fellows</h3>
              <p className="text-sm text-muted-foreground">
                Rare tumor variants, molecular logic, complex differential diagnosis
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
