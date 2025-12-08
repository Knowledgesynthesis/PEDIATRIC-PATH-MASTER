import { Microscope, ClipboardCheck, Heart, Wind, Activity, Brain } from 'lucide-react'
import { PageHeader } from '../components/PageHeader'
import { ContentSection } from '../components/ContentSection'
import { DiagramBox, DiagramFlow, IconDiagram } from '../components/DiagramBox'
import { Accordion, AccordionItem } from '../components/ui/Accordion'
import { InfoTable } from '../components/InfoTable'
import { Callout } from '../components/Callout'

export default function Autopsy() {
  return (
    <div>
      <PageHeader
        title="Pediatric Autopsy"
        description="Non-forensic autopsy considerations and evaluation"
        icon={<Microscope className="w-6 h-6" />}
      />

      <div className="container mx-auto px-4 py-8">
        <Callout type="warning" title="Educational Content Only">
          This module covers conceptual approaches to pediatric autopsy for educational purposes.
          All content is synthetic and non-clinical.
        </Callout>

        <div className="mt-8 space-y-6">
          <ContentSection title="Autopsy Flow Overview" icon={<ClipboardCheck className="w-5 h-5" />}>
            <DiagramBox title="Systematic Approach">
              <DiagramFlow items={['External exam', 'Documentation', 'In situ exam', 'Evisceration', 'Organ exam', 'Histology', 'Synthesis']} />
            </DiagramBox>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-secondary/50 rounded-lg">
                <h4 className="font-medium text-foreground mb-2">Pre-Autopsy Review</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Clinical history and records</li>
                  <li>• Imaging studies</li>
                  <li>• Laboratory results</li>
                  <li>• Prenatal history (perinatal cases)</li>
                  <li>• Consents and special requests</li>
                </ul>
              </div>
              <div className="p-4 bg-secondary/50 rounded-lg">
                <h4 className="font-medium text-foreground mb-2">Special Considerations</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Genetic testing needs</li>
                  <li>• Photography requirements</li>
                  <li>• Tissue banking</li>
                  <li>• Cultures (if infection suspected)</li>
                  <li>• Metabolic studies</li>
                </ul>
              </div>
            </div>
          </ContentSection>

          <ContentSection title="External Examination" icon={<ClipboardCheck className="w-5 h-5" />}>
            <Accordion>
              <AccordionItem title="Measurements and Documentation" icon={<ClipboardCheck className="w-4 h-4" />} defaultOpen>
                <div className="space-y-3">
                  <IconDiagram
                    icon={<ClipboardCheck className="w-5 h-5" />}
                    label="Body Measurements"
                    description="Weight, crown-heel length, crown-rump length, head circumference, foot length"
                  />
                  <IconDiagram
                    icon={<ClipboardCheck className="w-5 h-5" />}
                    label="Growth Parameters"
                    description="Compare to gestational age charts; identify growth restriction or macrosomia"
                    color="bg-yellow-500/20 text-yellow-400"
                  />
                  <IconDiagram
                    icon={<ClipboardCheck className="w-5 h-5" />}
                    label="Dysmorphology"
                    description="Document facial features, limbs, digits, genitalia; consider syndromes"
                  />
                </div>
              </AccordionItem>

              <AccordionItem title="Signs of Maceration (Stillbirth)" icon={<ClipboardCheck className="w-4 h-4" />}>
                <InfoTable
                  headers={['Grade', 'Features', 'Estimated Duration']}
                  rows={[
                    ['0', 'Fresh stillbirth, no maceration', 'Death near delivery'],
                    ['1', 'Skin slippage, desquamation, red discoloration', '6-12 hours'],
                    ['2', 'Extensive skin loss, bullae formation', '12-24 hours'],
                    ['3', 'Brown discoloration, mummification, organ liquefaction', '>24 hours'],
                  ]}
                />
              </AccordionItem>

              <AccordionItem title="Gestational Age Assessment" icon={<ClipboardCheck className="w-4 h-4" />}>
                <p className="mb-3">External features for gestational age estimation:</p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Skin texture and opacity</li>
                  <li>Lanugo distribution</li>
                  <li>Ear cartilage development</li>
                  <li>Breast tissue</li>
                  <li>Genitalia maturation</li>
                  <li>Sole creases</li>
                </ul>
              </AccordionItem>
            </Accordion>
          </ContentSection>

          <ContentSection title="Internal Examination" icon={<Microscope className="w-5 h-5" />}>
            <Accordion>
              <AccordionItem title="Heart and Great Vessels" icon={<Heart className="w-4 h-4" />}>
                <div className="space-y-3">
                  <IconDiagram
                    icon={<Heart className="w-5 h-5" />}
                    label="Sequential Analysis"
                    description="Atrial situs → AV connections → Ventriculoarterial connections"
                  />
                  <IconDiagram
                    icon={<Heart className="w-5 h-5" />}
                    label="Weight and Measurements"
                    description="Heart weight, chamber dimensions; compare to standards"
                    color="bg-primary-500/20 text-primary-400"
                  />
                </div>
                <div className="mt-3 p-3 bg-secondary/50 rounded-lg">
                  <h5 className="font-medium text-foreground mb-2">Common Findings</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Patent foramen ovale (normal in fetuses/neonates)</li>
                    <li>• Patent ductus arteriosus (normal in fetuses/neonates)</li>
                    <li>• Ventricular septal defects</li>
                    <li>• Atrioventricular canal defects</li>
                  </ul>
                </div>
              </AccordionItem>

              <AccordionItem title="Lungs and Airways" icon={<Wind className="w-4 h-4" />}>
                <div className="space-y-3">
                  <IconDiagram
                    icon={<Wind className="w-5 h-5" />}
                    label="Lung Maturation"
                    description="Assess stage of development; document hypoplasia if present"
                  />
                  <IconDiagram
                    icon={<Wind className="w-5 h-5" />}
                    label="Float Test"
                    description="Lungs that floated indicate prior respiration; stillbirth vs live birth"
                    color="bg-yellow-500/20 text-yellow-400"
                  />
                </div>
                <p className="mt-3 text-sm text-muted-foreground">
                  Assess for hyaline membranes, pneumonia, aspiration, congenital malformations.
                </p>
              </AccordionItem>

              <AccordionItem title="Gastrointestinal Tract" icon={<Activity className="w-4 h-4" />}>
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li>Check for atresias and stenoses</li>
                  <li>Document malrotation</li>
                  <li>Evaluate for NEC in premature infants</li>
                  <li>Assess meconium distribution</li>
                  <li>Liver: document size, color, texture</li>
                </ul>
              </AccordionItem>

              <AccordionItem title="Central Nervous System" icon={<Brain className="w-4 h-4" />}>
                <div className="space-y-3">
                  <IconDiagram
                    icon={<Brain className="w-5 h-5" />}
                    label="Brain Fixation"
                    description="Consider fixation before sectioning in fragile/immature brains"
                  />
                  <IconDiagram
                    icon={<Brain className="w-5 h-5" />}
                    label="Gyral Pattern"
                    description="Assess sulcation for gestational age; document lissencephaly"
                    color="bg-primary-500/20 text-primary-400"
                  />
                </div>
                <ul className="mt-3 list-disc list-inside space-y-1 text-sm">
                  <li>Hemorrhage (germinal matrix in prematures)</li>
                  <li>White matter injury (PVL)</li>
                  <li>Neural tube defects</li>
                  <li>Holoprosencephaly spectrum</li>
                </ul>
              </AccordionItem>
            </Accordion>
          </ContentSection>

          <ContentSection title="Congenital Anomaly Documentation" icon={<ClipboardCheck className="w-5 h-5" />}>
            <DiagramBox title="Systematic Approach to Malformations">
              <div className="space-y-3">
                <div className="p-3 bg-primary-500/10 rounded-lg">
                  <h4 className="font-medium text-primary-400">Malformation</h4>
                  <p className="text-sm text-muted-foreground">
                    Intrinsic abnormality of development (e.g., VSD, cleft palate)
                  </p>
                </div>
                <div className="p-3 bg-accent-500/10 rounded-lg">
                  <h4 className="font-medium text-accent-400">Deformation</h4>
                  <p className="text-sm text-muted-foreground">
                    Extrinsic mechanical forces on normal tissue (e.g., clubfoot from oligohydramnios)
                  </p>
                </div>
                <div className="p-3 bg-yellow-500/10 rounded-lg">
                  <h4 className="font-medium text-yellow-400">Disruption</h4>
                  <p className="text-sm text-muted-foreground">
                    Destruction of previously normal tissue (e.g., amniotic band sequence)
                  </p>
                </div>
                <div className="p-3 bg-red-500/10 rounded-lg">
                  <h4 className="font-medium text-red-400">Sequence</h4>
                  <p className="text-sm text-muted-foreground">
                    Cascade from single primary anomaly (e.g., Potter sequence from renal agenesis)
                  </p>
                </div>
              </div>
            </DiagramBox>
          </ContentSection>

          <ContentSection title="Interpretation of Organ Immaturity" icon={<Microscope className="w-5 h-5" />}>
            <Callout type="info" title="Key Principle">
              Distinguish normal immaturity for gestational age from pathologic underdevelopment
              or disease. Always correlate with clinical context and growth parameters.
            </Callout>

            <div className="mt-4">
              <InfoTable
                headers={['Organ', 'Immature Features', 'Pathologic Considerations']}
                rows={[
                  ['Lung', 'Canalicular/saccular stage', 'Hypoplasia, developmental disorders'],
                  ['Kidney', 'Nephrogenic zone present', 'Dysplasia, cystic disease'],
                  ['Liver', 'EMH present', 'Persistent EMH (hemolysis, marrow failure)'],
                  ['Brain', 'Incomplete sulcation', 'Lissencephaly, migration disorders'],
                  ['Adrenal', 'Fetal cortex large', 'Hypoplasia, hemorrhage'],
                ]}
              />
            </div>
          </ContentSection>

          <ContentSection title="Perinatal Autopsy Pearls" icon={<ClipboardCheck className="w-5 h-5" />}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-primary-500/10 border border-primary-500/30 rounded-lg">
                <h4 className="font-medium text-primary-400 mb-2">Always Check</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Umbilical cord (length, coiling, insertion)</li>
                  <li>• Placenta (always submit with fetus)</li>
                  <li>• Membranes (chorioamnionitis)</li>
                  <li>• Cord vessels (single umbilical artery)</li>
                </ul>
              </div>
              <div className="p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
                <h4 className="font-medium text-yellow-400 mb-2">Common Pitfalls</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Missing minor anomalies</li>
                  <li>• Inadequate photography</li>
                  <li>• Forgetting metabolic samples</li>
                  <li>• Not considering genetic testing</li>
                </ul>
              </div>
            </div>
          </ContentSection>
        </div>
      </div>
    </div>
  )
}
