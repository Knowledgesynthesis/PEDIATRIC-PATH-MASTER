import { Baby, Wind, Droplets, Bone, Shield, Activity } from 'lucide-react'
import { PageHeader } from '../components/PageHeader'
import { ContentSection } from '../components/ContentSection'
import { DiagramBox, DiagramFlow, IconDiagram } from '../components/DiagramBox'
import { Accordion, AccordionItem } from '../components/ui/Accordion'
import { Callout } from '../components/Callout'

export default function Development() {
  return (
    <div>
      <PageHeader
        title="Normal Pediatric Development"
        description="Understanding developmental histology from fetal to childhood stages"
        icon={<Baby className="w-6 h-6" />}
      />

      <div className="container mx-auto px-4 py-8">
        <Callout type="info" title="Key Concept">
          Understanding normal developmental patterns is essential for recognizing pathology.
          Immature tissue can mimic malignancy - context is everything.
        </Callout>

        <div className="mt-8 space-y-6">
          <ContentSection title="Lung Development" icon={<Wind className="w-5 h-5" />}>
            <p className="mb-4">
              The lung undergoes distinct developmental stages, each with characteristic histologic features.
            </p>

            <DiagramBox title="Stages of Lung Development" className="mb-4">
              <DiagramFlow
                items={['Embryonic (3-7 wks)', 'Pseudoglandular (5-17 wks)', 'Canalicular (16-26 wks)', 'Saccular (24-38 wks)', 'Alveolar (36 wks-8 yrs)']}
              />
            </DiagramBox>

            <Accordion className="mt-4">
              <AccordionItem title="Canalicular Stage (16-26 weeks)" icon={<Wind className="w-4 h-4" />}>
                <ul className="list-disc list-inside space-y-2">
                  <li>Respiratory bronchioles begin to form</li>
                  <li>Capillaries approach airway epithelium</li>
                  <li>Type I and II pneumocytes differentiate</li>
                  <li>Surfactant production begins (late)</li>
                  <li>Viability threshold (~24 weeks)</li>
                </ul>
              </AccordionItem>
              <AccordionItem title="Saccular Stage (24-38 weeks)" icon={<Wind className="w-4 h-4" />}>
                <ul className="list-disc list-inside space-y-2">
                  <li>Terminal sacs (primitive alveoli) form</li>
                  <li>Thin air-blood barrier develops</li>
                  <li>Surfactant production increases</li>
                  <li>Elastic fiber deposition begins</li>
                </ul>
              </AccordionItem>
              <AccordionItem title="Alveolar Stage (36 weeks-8 years)" icon={<Wind className="w-4 h-4" />}>
                <ul className="list-disc list-inside space-y-2">
                  <li>True alveoli form through septation</li>
                  <li>Alveolar number increases dramatically</li>
                  <li>At birth: ~50 million alveoli</li>
                  <li>Adult: ~300-500 million alveoli</li>
                </ul>
              </AccordionItem>
            </Accordion>
          </ContentSection>

          <ContentSection title="Kidney Development" icon={<Droplets className="w-5 h-5" />}>
            <p className="mb-4">
              The kidney develops through three successive stages, with nephrogenesis continuing until 36 weeks gestation.
            </p>

            <DiagramBox title="Stages of Kidney Development" className="mb-4">
              <DiagramFlow items={['Pronephros', 'Mesonephros', 'Metanephros']} />
            </DiagramBox>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <IconDiagram
                icon={<Droplets className="w-5 h-5" />}
                label="Nephrogenic Zone"
                description="Subcapsular zone of immature glomeruli; disappears by 36 weeks"
              />
              <IconDiagram
                icon={<Droplets className="w-5 h-5" />}
                label="Nephrogenic Rests"
                description="Persistent embryonal tissue; may precede Wilms tumor"
                color="bg-yellow-500/20 text-yellow-400"
              />
            </div>

            <Callout type="warning" title="Clinical Pearl" className="mt-4">
              Nephrogenic rests are found in ~1% of infant kidneys at autopsy but in
              30-40% of kidneys with Wilms tumor. They represent a precursor lesion.
            </Callout>
          </ContentSection>

          <ContentSection title="Liver Development" icon={<Activity className="w-5 h-5" />}>
            <p className="mb-4">
              The fetal liver is a major site of hematopoiesis and has distinct histologic features.
            </p>

            <div className="space-y-4">
              <IconDiagram
                icon={<Activity className="w-5 h-5" />}
                label="Fetal Hematopoiesis"
                description="Islands of hematopoietic cells between hepatocytes; normal until ~2 weeks postnatal"
              />
              <IconDiagram
                icon={<Activity className="w-5 h-5" />}
                label="Extramedullary Hematopoiesis (EMH)"
                description="Persistence beyond neonatal period suggests hemolytic disease or marrow stress"
                color="bg-yellow-500/20 text-yellow-400"
              />
            </div>

            <Callout type="info" title="Don't Overcall" className="mt-4">
              Fetal liver hematopoiesis is NORMAL. Don't mistake it for leukemic infiltration
              or hepatoblastoma. Context (gestational age, clinical history) is critical.
            </Callout>
          </ContentSection>

          <ContentSection title="Bone and Growth Plate" icon={<Bone className="w-5 h-5" />}>
            <p className="mb-4">
              Understanding normal growth plate anatomy is essential for evaluating pediatric bone lesions.
            </p>

            <DiagramBox title="Growth Plate Zones (Epiphyseal Plate)" className="mb-4">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="w-32 text-sm font-medium text-primary-400">Reserve Zone</span>
                  <span className="text-sm text-muted-foreground">Resting chondrocytes, stem cell reservoir</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-32 text-sm font-medium text-primary-400">Proliferative Zone</span>
                  <span className="text-sm text-muted-foreground">Columnar arrangement, active division</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-32 text-sm font-medium text-primary-400">Hypertrophic Zone</span>
                  <span className="text-sm text-muted-foreground">Enlarged chondrocytes, matrix calcification</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-32 text-sm font-medium text-primary-400">Ossification Zone</span>
                  <span className="text-sm text-muted-foreground">Vascular invasion, bone deposition</span>
                </div>
              </div>
            </DiagramBox>
          </ContentSection>

          <ContentSection title="Immune System Maturation" icon={<Shield className="w-5 h-5" />}>
            <p className="mb-4">
              The pediatric immune system has age-specific characteristics that affect disease susceptibility.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-secondary/50 rounded-lg">
                <h4 className="font-medium text-foreground mb-2">Thymus</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Largest relative to body size in infancy</li>
                  <li>• Cortex: immature T-cells</li>
                  <li>• Medulla: mature T-cells, Hassall corpuscles</li>
                  <li>• Involutes after puberty</li>
                </ul>
              </div>
              <div className="p-4 bg-secondary/50 rounded-lg">
                <h4 className="font-medium text-foreground mb-2">Lymph Nodes</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Follicles develop with antigen exposure</li>
                  <li>• Germinal centers form after ~3 months</li>
                  <li>• Reactive hyperplasia common in children</li>
                  <li>• Paracortex: T-cell zone</li>
                </ul>
              </div>
            </div>
          </ContentSection>

          <ContentSection title="Endocrine Differences" icon={<Activity className="w-5 h-5" />}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-secondary/50 rounded-lg">
                <h4 className="font-medium text-foreground mb-2">Adrenal Gland</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Fetal cortex (large, involutes after birth)</li>
                  <li>• Adult cortex zones develop postnatally</li>
                  <li>• Relatively large at birth (~1/3 kidney size)</li>
                </ul>
              </div>
              <div className="p-4 bg-secondary/50 rounded-lg">
                <h4 className="font-medium text-foreground mb-2">Thyroid</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Functional by 12 weeks gestation</li>
                  <li>• Colloid storage develops progressively</li>
                  <li>• C-cells (calcitonin) scattered in parenchyma</li>
                </ul>
              </div>
            </div>
          </ContentSection>
        </div>
      </div>
    </div>
  )
}
