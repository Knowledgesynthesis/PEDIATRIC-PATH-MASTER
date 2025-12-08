import { Heart, Circle, Baby, Brain } from 'lucide-react'
import { PageHeader } from '../components/PageHeader'
import { ContentSection } from '../components/ContentSection'
import { DiagramBox, DiagramFlow, IconDiagram } from '../components/DiagramBox'
import { Accordion, AccordionItem } from '../components/ui/Accordion'
import { InfoTable } from '../components/InfoTable'
import { Callout } from '../components/Callout'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../components/ui/Tabs'

export default function Perinatal() {
  return (
    <div>
      <PageHeader
        title="Perinatal Pathology"
        description="Placenta, stillbirth evaluation, and congenital anomalies"
        icon={<Heart className="w-6 h-6" />}
      />

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="placenta">
          <TabsList className="w-full flex-wrap">
            <TabsTrigger value="placenta">Placenta</TabsTrigger>
            <TabsTrigger value="stillbirth">Stillbirth</TabsTrigger>
            <TabsTrigger value="anomalies">Congenital Anomalies</TabsTrigger>
          </TabsList>

          <TabsContent value="placenta">
            <div className="space-y-6">
              <ContentSection title="Placental Pathology Overview" icon={<Circle className="w-5 h-5" />}>
                <p className="mb-4">
                  The placenta reflects maternal-fetal health and provides crucial diagnostic information.
                  Lesions are categorized by vascular compartment affected.
                </p>

                <DiagramBox title="Vascular Compartments" className="mb-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-3 bg-primary-500/10 rounded-lg">
                      <h4 className="font-medium text-primary-400 mb-2">Maternal Side</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Decidual vessels</li>
                        <li>• Intervillous space</li>
                        <li>• Spiral arteries</li>
                      </ul>
                    </div>
                    <div className="p-3 bg-accent-500/10 rounded-lg">
                      <h4 className="font-medium text-accent-400 mb-2">Fetal Side</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Chorionic vessels</li>
                        <li>• Stem villous vessels</li>
                        <li>• Terminal villous capillaries</li>
                      </ul>
                    </div>
                  </div>
                </DiagramBox>
              </ContentSection>

              <ContentSection title="Maternal Vascular Malperfusion (MVM)" icon={<Circle className="w-5 h-5" />}>
                <p className="mb-4">
                  Results from inadequate maternal blood flow to the intervillous space.
                </p>

                <InfoTable
                  headers={['Finding', 'Description', 'Clinical Association']}
                  rows={[
                    ['Accelerated villous maturation', 'Small hypermature villi', 'IUGR, preeclampsia'],
                    ['Distal villous hypoplasia', 'Decreased villous branching', 'Severe IUGR'],
                    ['Infarcts', 'Coagulative necrosis of villi', 'Preeclampsia, thrombophilia'],
                    ['Decidual arteriopathy', 'Fibrinoid necrosis, atherosis', 'Hypertensive disorders'],
                    ['Retroplacental hemorrhage', 'Blood behind placenta', 'Abruption'],
                  ]}
                />
              </ContentSection>

              <ContentSection title="Fetal Vascular Malperfusion (FVM)" icon={<Circle className="w-5 h-5" />}>
                <p className="mb-4">
                  Results from impaired blood flow within the fetal circulation of the placenta.
                </p>

                <InfoTable
                  headers={['Finding', 'Description', 'Significance']}
                  rows={[
                    ['Avascular villi', 'Loss of villous capillaries', 'Distal obstruction'],
                    ['Thrombosis', 'Fetal vessel thrombi', 'Hypercoagulable state'],
                    ['Villous stromal-vascular karyorrhexis', 'Nuclear debris in stroma', 'Acute obstruction'],
                    ['Intramural fibrin deposition', 'Fibrin in vessel walls', 'Chronic injury'],
                  ]}
                />

                <Callout type="warning" title="Clinical Impact" className="mt-4">
                  Extensive FVM is associated with neonatal neurologic injury and may have
                  medicolegal implications. Thorough documentation is essential.
                </Callout>
              </ContentSection>
            </div>
          </TabsContent>

          <TabsContent value="stillbirth">
            <div className="space-y-6">
              <ContentSection title="Stillbirth Evaluation" icon={<Baby className="w-5 h-5" />}>
                <p className="mb-4">
                  Systematic evaluation of stillbirth requires examination of placenta, cord, membranes, and fetus.
                </p>

                <DiagramBox title="Stillbirth Workup Flow" className="mb-4">
                  <DiagramFlow items={['Placenta exam', 'External exam', 'Imaging', 'Autopsy', 'Labs/genetics']} />
                </DiagramBox>

                <Accordion className="mt-4">
                  <AccordionItem title="Common Findings" icon={<Baby className="w-4 h-4" />}>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium text-foreground mb-2">Placental Causes (~25-35%)</h4>
                        <ul className="list-disc list-inside text-sm space-y-1">
                          <li>Abruption</li>
                          <li>Cord accident (prolapse, knot, stricture)</li>
                          <li>Fetal vascular malperfusion</li>
                          <li>Infection (chorioamnionitis)</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground mb-2">Fetal Causes (~25-30%)</h4>
                        <ul className="list-disc list-inside text-sm space-y-1">
                          <li>Chromosomal abnormalities</li>
                          <li>Structural malformations</li>
                          <li>Infections (TORCH)</li>
                          <li>Hydrops fetalis</li>
                        </ul>
                      </div>
                    </div>
                  </AccordionItem>
                  <AccordionItem title="Maceration Staging" icon={<Baby className="w-4 h-4" />}>
                    <p className="mb-2">Helps estimate time from death to delivery:</p>
                    <ul className="list-disc list-inside text-sm space-y-1">
                      <li><strong>Grade 0:</strong> No maceration, fresh stillbirth</li>
                      <li><strong>Grade 1:</strong> Skin slippage, red discoloration (6-12 hours)</li>
                      <li><strong>Grade 2:</strong> Skin peeling, bullae (12-24 hours)</li>
                      <li><strong>Grade 3:</strong> Extensive skin loss, brown discoloration (&gt;24 hours)</li>
                    </ul>
                  </AccordionItem>
                </Accordion>
              </ContentSection>
            </div>
          </TabsContent>

          <TabsContent value="anomalies">
            <div className="space-y-6">
              <ContentSection title="Congenital Anomalies" icon={<Brain className="w-5 h-5" />}>
                <p className="mb-4">
                  Understanding patterns of malformation helps identify underlying causes and sequences.
                </p>

                <Accordion>
                  <AccordionItem title="Neural Tube Defects" icon={<Brain className="w-4 h-4" />}>
                    <div className="space-y-3">
                      <IconDiagram
                        icon={<Brain className="w-5 h-5" />}
                        label="Anencephaly"
                        description="Absence of calvarium and cerebral hemispheres; incompatible with life"
                        color="bg-red-500/20 text-red-400"
                      />
                      <IconDiagram
                        icon={<Brain className="w-5 h-5" />}
                        label="Myelomeningocele"
                        description="Spinal cord and meninges protrude through vertebral defect"
                        color="bg-yellow-500/20 text-yellow-400"
                      />
                      <IconDiagram
                        icon={<Brain className="w-5 h-5" />}
                        label="Encephalocele"
                        description="Herniation of brain through skull defect; often occipital"
                      />
                    </div>
                  </AccordionItem>

                  <AccordionItem title="Potter Sequence (Oligohydramnios Sequence)" icon={<Baby className="w-4 h-4" />}>
                    <p className="mb-3">Results from severe oligohydramnios, regardless of cause:</p>
                    <ul className="list-disc list-inside text-sm space-y-1">
                      <li>Pulmonary hypoplasia (major cause of death)</li>
                      <li>Flattened facies (Potter facies)</li>
                      <li>Limb positioning defects</li>
                      <li>Growth restriction</li>
                    </ul>
                    <Callout type="info" title="Causes" className="mt-3">
                      Bilateral renal agenesis, ARPKD, posterior urethral valves,
                      prolonged rupture of membranes
                    </Callout>
                  </AccordionItem>

                  <AccordionItem title="Cardiac Anomalies" icon={<Heart className="w-4 h-4" />}>
                    <InfoTable
                      headers={['Defect', 'Key Features', 'Associations']}
                      rows={[
                        ['VSD', 'Most common CHD', 'Down syndrome'],
                        ['ASD', 'Secundum most common', 'Often isolated'],
                        ['Tetralogy of Fallot', 'VSD, overriding aorta, PS, RVH', '22q11 deletion'],
                        ['Transposition', 'Aorta from RV, PA from LV', 'Maternal diabetes'],
                        ['Hypoplastic left heart', 'Underdeveloped LV, aorta', 'Turner syndrome'],
                      ]}
                    />
                  </AccordionItem>

                  <AccordionItem title="Renal Anomalies" icon={<Circle className="w-4 h-4" />}>
                    <div className="space-y-3">
                      <IconDiagram
                        icon={<Circle className="w-5 h-5" />}
                        label="Bilateral Renal Agenesis"
                        description="Complete absence of kidneys; Potter sequence; incompatible with life"
                        color="bg-red-500/20 text-red-400"
                      />
                      <IconDiagram
                        icon={<Circle className="w-5 h-5" />}
                        label="Multicystic Dysplastic Kidney"
                        description="Non-functional kidney with multiple cysts; often unilateral"
                      />
                      <IconDiagram
                        icon={<Circle className="w-5 h-5" />}
                        label="Horseshoe Kidney"
                        description="Fusion at lower poles; associated with Turner syndrome"
                      />
                    </div>
                  </AccordionItem>

                  <AccordionItem title="Limb Malformations" icon={<Baby className="w-4 h-4" />}>
                    <ul className="list-disc list-inside text-sm space-y-1">
                      <li><strong>Polydactyly:</strong> Extra digits; preaxial or postaxial</li>
                      <li><strong>Syndactyly:</strong> Fused digits; cutaneous or osseous</li>
                      <li><strong>Limb reduction:</strong> Amelia, phocomelia, hemimelia</li>
                      <li><strong>Clubfoot:</strong> Talipes equinovarus; isolated or syndromic</li>
                    </ul>
                  </AccordionItem>
                </Accordion>
              </ContentSection>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
