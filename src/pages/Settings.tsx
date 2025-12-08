import { Settings as SettingsIcon, Sun, Moon, Info, AlertTriangle } from 'lucide-react'
import { PageHeader } from '../components/PageHeader'
import { ContentSection } from '../components/ContentSection'
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card'
import { useThemeStore } from '../store/themeStore'
import { cn } from '../lib/utils'

export default function Settings() {
  const { theme, setTheme } = useThemeStore()

  return (
    <div>
      <PageHeader
        title="Settings"
        description="App preferences and information"
        icon={<SettingsIcon className="w-6 h-6" />}
      />

      <div className="container mx-auto px-4 py-8 max-w-2xl">
        {/* Theme Toggle */}
        <ContentSection title="Appearance" icon={<Sun className="w-5 h-5" />}>
          <div className="flex gap-4">
            <button
              onClick={() => setTheme('light')}
              className={cn(
                'flex-1 p-4 rounded-lg border-2 transition-all',
                theme === 'light'
                  ? 'border-primary-500 bg-primary-500/10'
                  : 'border-border hover:border-primary-500/50'
              )}
            >
              <div className="flex items-center justify-center gap-3">
                <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center">
                  <Sun className="w-5 h-5 text-yellow-600" />
                </div>
                <div className="text-left">
                  <p className="font-medium text-foreground">Light Mode</p>
                  <p className="text-sm text-muted-foreground">Bright theme for daytime</p>
                </div>
              </div>
            </button>

            <button
              onClick={() => setTheme('dark')}
              className={cn(
                'flex-1 p-4 rounded-lg border-2 transition-all',
                theme === 'dark'
                  ? 'border-primary-500 bg-primary-500/10'
                  : 'border-border hover:border-primary-500/50'
              )}
            >
              <div className="flex items-center justify-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center">
                  <Moon className="w-5 h-5 text-slate-300" />
                </div>
                <div className="text-left">
                  <p className="font-medium text-foreground">Dark Mode</p>
                  <p className="text-sm text-muted-foreground">Easy on the eyes</p>
                </div>
              </div>
            </button>
          </div>
        </ContentSection>

        {/* About Section */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Info className="w-5 h-5 text-primary-500" />
              About Pediatric Path Master
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Pediatric Path Master is an educational platform designed for pathology residents
              and fellows studying pediatric pathology. The app covers essential topics including:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>Normal pediatric developmental histology</li>
              <li>Perinatal and neonatal pathology</li>
              <li>Pediatric neoplasms and small round blue cell tumors</li>
              <li>Congenital malformations and syndromes</li>
              <li>IHC and molecular markers in pediatric tumors</li>
              <li>Common pitfalls and diagnostic mimics</li>
              <li>Integrated case-based learning</li>
            </ul>
            <div className="pt-4 border-t border-border">
              <p className="text-sm text-muted-foreground">
                <strong>Version:</strong> 1.0.0
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Target Audience:</strong> PGY1-4 Residents, Pediatric Pathology Fellows
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Disclaimers */}
        <Card className="mt-6 border-yellow-500/30">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-yellow-500">
              <AlertTriangle className="w-5 h-5" />
              Disclaimers
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 bg-yellow-500/10 rounded-lg">
              <h4 className="font-medium text-foreground mb-2">Educational Use Only</h4>
              <p className="text-sm text-muted-foreground">
                This application is intended solely for educational purposes. All content,
                including cases, images, and diagnostic information, is synthetic and conceptual.
                This app is NOT intended for clinical diagnosis, patient care decisions, or
                medical practice.
              </p>
            </div>

            <div className="p-4 bg-secondary/50 rounded-lg">
              <h4 className="font-medium text-foreground mb-2">No Patient Data</h4>
              <p className="text-sm text-muted-foreground">
                This application contains no real patient data, no protected health information (PHI),
                and no actual photomicrographs. All diagrams and illustrations are synthetic
                representations for educational purposes only.
              </p>
            </div>

            <div className="p-4 bg-secondary/50 rounded-lg">
              <h4 className="font-medium text-foreground mb-2">Not Medical Advice</h4>
              <p className="text-sm text-muted-foreground">
                The information provided in this app does not constitute medical advice,
                diagnosis, or treatment recommendations. Always consult appropriate medical
                resources and experts for clinical decisions.
              </p>
            </div>

            <div className="p-4 bg-secondary/50 rounded-lg">
              <h4 className="font-medium text-foreground mb-2">Content Accuracy</h4>
              <p className="text-sm text-muted-foreground">
                While every effort has been made to ensure accuracy, medical knowledge evolves.
                Users should verify information with current literature and institutional protocols.
                The creators assume no liability for actions taken based on app content.
              </p>
            </div>

            <div className="p-4 bg-secondary/50 rounded-lg">
              <h4 className="font-medium text-foreground mb-2">No Score Tracking</h4>
              <p className="text-sm text-muted-foreground">
                This application does not save, track, or store any user data, assessment scores,
                or progress information. All session data is temporary and not retained after
                the session ends.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Credits */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Acknowledgments</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm">
              This educational resource was developed with conceptual alignment to standard
              pediatric pathology references and the WHO Classification of Pediatric Tumors.
              It is designed to support learning and does not replace formal textbooks or
              clinical training.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
