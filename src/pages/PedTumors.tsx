import { Activity, Brain, Circle, Bone } from 'lucide-react'
import { PageHeader } from '../components/PageHeader'
import { ContentSection } from '../components/ContentSection'
import { IconDiagram } from '../components/DiagramBox'
import { Accordion, AccordionItem } from '../components/ui/Accordion'
import { InfoTable } from '../components/InfoTable'
import { Callout } from '../components/Callout'
import { Badge } from '../components/ui/Badge'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../components/ui/Tabs'

export default function PedTumors() {
  return (
    <div>
      <PageHeader
        title="Pediatric Tumors"
        description="CNS tumors, germ cell tumors, and bone tumors in children"
        icon={<Activity className="w-6 h-6" />}
      />

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="cns">
          <TabsList className="w-full flex-wrap">
            <TabsTrigger value="cns">CNS Tumors</TabsTrigger>
            <TabsTrigger value="germ">Germ Cell Tumors</TabsTrigger>
            <TabsTrigger value="bone">Bone Tumors</TabsTrigger>
          </TabsList>

          <TabsContent value="cns">
            <div className="space-y-6">
              <Callout type="info" title="Pediatric CNS Tumors">
                Most common solid tumors in children. Location and molecular features
                are increasingly important for classification and prognosis.
              </Callout>

              <ContentSection title="Medulloblastoma" icon={<Brain className="w-5 h-5" />}>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="primary">Posterior fossa</Badge>
                  <Badge variant="secondary">Peak 5-10 years</Badge>
                  <Badge variant="warning">Embryonal tumor</Badge>
                </div>

                <Accordion>
                  <AccordionItem title="Histologic Variants" icon={<Brain className="w-4 h-4" />}>
                    <div className="space-y-3">
                      <IconDiagram
                        icon={<Brain className="w-5 h-5" />}
                        label="Classic"
                        description="Sheets of small round cells, high N:C ratio, Homer-Wright rosettes"
                      />
                      <IconDiagram
                        icon={<Brain className="w-5 h-5" />}
                        label="Desmoplastic/Nodular"
                        description="Pale nodular islands in reticulin-rich desmoplastic areas"
                        color="bg-green-500/20 text-green-400"
                      />
                      <IconDiagram
                        icon={<Brain className="w-5 h-5" />}
                        label="Large Cell/Anaplastic"
                        description="Large cells, marked pleomorphism, apoptosis, cell wrapping"
                        color="bg-red-500/20 text-red-400"
                      />
                      <IconDiagram
                        icon={<Brain className="w-5 h-5" />}
                        label="Extensive Nodularity"
                        description="Expanded nodular architecture; seen in infants"
                        color="bg-green-500/20 text-green-400"
                      />
                    </div>
                  </AccordionItem>

                  <AccordionItem title="Molecular Groups (WHO 2021)" icon={<Activity className="w-4 h-4" />}>
                    <InfoTable
                      headers={['Group', 'Pathway', 'Prognosis', 'Key Features']}
                      rows={[
                        ['WNT-activated', 'WNT/β-catenin', 'Excellent (>95%)', 'Nuclear β-catenin, monosomy 6'],
                        ['SHH-activated', 'Sonic hedgehog', 'Intermediate', 'Desmoplastic morphology common'],
                        ['Group 3', 'MYC amplification', 'Poor', 'Classic/LCA morphology, metastatic'],
                        ['Group 4', 'Various', 'Intermediate', 'Most common group, isochromosome 17q'],
                      ]}
                    />
                  </AccordionItem>
                </Accordion>
              </ContentSection>

              <ContentSection title="Pilocytic Astrocytoma" icon={<Brain className="w-5 h-5" />}>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="success">WHO Grade 1</Badge>
                  <Badge variant="primary">Most common pediatric brain tumor</Badge>
                </div>

                <div className="space-y-3">
                  <IconDiagram
                    icon={<Brain className="w-5 h-5" />}
                    label="Biphasic Pattern"
                    description="Alternating compact piloid and loose microcystic areas"
                  />
                  <IconDiagram
                    icon={<Brain className="w-5 h-5" />}
                    label="Rosenthal Fibers"
                    description="Eosinophilic corkscrew-shaped structures in piloid areas"
                    color="bg-yellow-500/20 text-yellow-400"
                  />
                  <IconDiagram
                    icon={<Brain className="w-5 h-5" />}
                    label="Eosinophilic Granular Bodies"
                    description="Pale eosinophilic droplets; seen in microcystic areas"
                  />
                  <IconDiagram
                    icon={<Brain className="w-5 h-5" />}
                    label="BRAF Alterations"
                    description="KIAA1549-BRAF fusion most common; BRAF V600E in some"
                    color="bg-primary-500/20 text-primary-400"
                  />
                </div>

                <Callout type="success" title="Excellent Prognosis" className="mt-4">
                  Surgical resection often curative. Location (hypothalamic, optic pathway)
                  may limit resection. Associated with NF1.
                </Callout>
              </ContentSection>

              <ContentSection title="Other Pediatric CNS Tumors" icon={<Brain className="w-5 h-5" />}>
                <InfoTable
                  headers={['Tumor', 'Location', 'Age', 'Key Features']}
                  rows={[
                    ['Ependymoma', 'Posterior fossa, spinal', 'Children', 'Perivascular pseudorosettes, ZFTA or YAP1 fusions'],
                    ['Atypical teratoid/rhabdoid', 'Cerebellum, cerebrum', '<3 years', 'INI1/SMARCB1 loss, rhabdoid cells'],
                    ['Craniopharyngioma', 'Sellar/suprasellar', 'Bimodal', 'Adamantinomatous (children) vs papillary (adults)'],
                    ['DIPG/DMG', 'Pons/midline', 'Children', 'H3K27M mutation, diffuse infiltration'],
                    ['Choroid plexus tumors', 'Ventricles', 'Infants', 'Papillary, TP53 (carcinoma)'],
                  ]}
                />
              </ContentSection>
            </div>
          </TabsContent>

          <TabsContent value="germ">
            <div className="space-y-6">
              <Callout type="info" title="Pediatric Germ Cell Tumors">
                May arise in gonadal or extragonadal sites. Age and location affect
                tumor types and behavior. Serum markers (AFP, hCG) helpful.
              </Callout>

              <ContentSection title="Yolk Sac Tumor (Endodermal Sinus Tumor)" icon={<Circle className="w-5 h-5" />}>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="primary">Most common malignant GCT in children</Badge>
                  <Badge variant="warning">AFP elevated</Badge>
                </div>

                <div className="space-y-3">
                  <IconDiagram
                    icon={<Circle className="w-5 h-5" />}
                    label="Schiller-Duval Bodies"
                    description="Perivascular structures with central vessel (glomeruloid)"
                  />
                  <IconDiagram
                    icon={<Circle className="w-5 h-5" />}
                    label="Reticular/Microcystic Pattern"
                    description="Most common pattern; honeycomb appearance"
                    color="bg-yellow-500/20 text-yellow-400"
                  />
                  <IconDiagram
                    icon={<Circle className="w-5 h-5" />}
                    label="Hyaline Globules"
                    description="PAS-positive eosinophilic globules (AFP)"
                  />
                </div>

                <div className="mt-4 p-4 bg-secondary/50 rounded-lg">
                  <h4 className="font-medium text-foreground mb-2">IHC Profile</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• AFP: positive</li>
                    <li>• Glypican-3: positive</li>
                    <li>• SALL4: positive (all GCTs)</li>
                    <li>• Cytokeratins: positive</li>
                  </ul>
                </div>
              </ContentSection>

              <ContentSection title="Teratoma" icon={<Circle className="w-5 h-5" />}>
                <Accordion>
                  <AccordionItem title="Mature Teratoma" icon={<Circle className="w-4 h-4" />}>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Contains mature tissues from multiple germ layers</li>
                      <li>Ectoderm: skin, neural tissue</li>
                      <li>Mesoderm: bone, cartilage, muscle</li>
                      <li>Endoderm: respiratory, GI epithelium</li>
                      <li>Benign in children (different from adults)</li>
                    </ul>
                  </AccordionItem>
                  <AccordionItem title="Immature Teratoma" icon={<Circle className="w-4 h-4" />}>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Contains immature/embryonal tissue (usually neuroepithelium)</li>
                      <li>Graded 0-3 based on immature neuroepithelium</li>
                      <li>Grade affects prognosis in adults; less clear in children</li>
                      <li>May require adjuvant therapy in older children</li>
                    </ul>
                  </AccordionItem>
                </Accordion>
              </ContentSection>

              <ContentSection title="Other Germ Cell Tumors" icon={<Circle className="w-5 h-5" />}>
                <InfoTable
                  headers={['Type', 'Age', 'Markers', 'Key Features']}
                  rows={[
                    ['Germinoma/Seminoma', 'Older children/adolescents', 'PLAP, OCT4', 'Rare in young children'],
                    ['Embryonal carcinoma', 'Adolescents', 'CD30, OCT4', 'Rare in prepubertal'],
                    ['Choriocarcinoma', 'Adolescents', 'hCG', 'Very rare in children'],
                    ['Mixed GCT', 'Variable', 'Depends on components', 'Sample extensively'],
                  ]}
                />
              </ContentSection>
            </div>
          </TabsContent>

          <TabsContent value="bone">
            <div className="space-y-6">
              <ContentSection title="Osteosarcoma" icon={<Bone className="w-5 h-5" />}>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="primary">Most common primary bone tumor in children</Badge>
                  <Badge variant="secondary">Adolescents</Badge>
                  <Badge variant="warning">Metaphysis of long bones</Badge>
                </div>

                <Accordion>
                  <AccordionItem title="Conventional (High-Grade)" icon={<Bone className="w-4 h-4" />}>
                    <div className="space-y-3">
                      <IconDiagram
                        icon={<Bone className="w-5 h-5" />}
                        label="Osteoid Production"
                        description="Malignant osteoid production by tumor cells; defining feature"
                      />
                      <IconDiagram
                        icon={<Bone className="w-5 h-5" />}
                        label="Osteoblastic Subtype"
                        description="Most common; abundant osteoid"
                        color="bg-primary-500/20 text-primary-400"
                      />
                      <IconDiagram
                        icon={<Bone className="w-5 h-5" />}
                        label="Chondroblastic Subtype"
                        description="Malignant cartilage present"
                      />
                      <IconDiagram
                        icon={<Bone className="w-5 h-5" />}
                        label="Fibroblastic Subtype"
                        description="Spindle cell predominant"
                      />
                    </div>
                  </AccordionItem>

                  <AccordionItem title="Genetic Associations" icon={<Activity className="w-4 h-4" />}>
                    <ul className="list-disc list-inside space-y-2">
                      <li><strong>Li-Fraumeni syndrome:</strong> TP53 mutations</li>
                      <li><strong>Retinoblastoma:</strong> RB1 mutations (secondary OS)</li>
                      <li><strong>Rothmund-Thomson:</strong> RECQL4 mutations</li>
                      <li><strong>Paget disease:</strong> Rare in children</li>
                    </ul>
                  </AccordionItem>
                </Accordion>
              </ContentSection>

              <ContentSection title="Ewing Sarcoma (Bone)" icon={<Bone className="w-5 h-5" />}>
                <p className="mb-4">
                  See SRBCT module for detailed discussion. Key bone-specific points:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Second most common bone tumor in children</li>
                  <li>Diaphysis of long bones, pelvis common</li>
                  <li>"Onion-skin" periosteal reaction on imaging</li>
                  <li>Permeative, destructive pattern</li>
                  <li>EWSR1 rearrangements diagnostic</li>
                </ul>
              </ContentSection>

              <ContentSection title="Other Pediatric Bone Tumors" icon={<Bone className="w-5 h-5" />}>
                <InfoTable
                  headers={['Tumor', 'Age', 'Location', 'Key Features']}
                  rows={[
                    ['Osteochondroma', 'Children/adolescents', 'Metaphysis', 'Most common benign; cartilage cap'],
                    ['Osteoid osteoma', 'Adolescents', 'Cortex, femur/tibia', 'Pain relieved by NSAIDs; nidus'],
                    ['Aneurysmal bone cyst', 'Adolescents', 'Metaphysis', 'Blood-filled spaces; USP6 fusions'],
                    ['Langerhans cell histiocytosis', 'Children', 'Skull, long bones', 'CD1a+, Langerin+, BRAF mutations'],
                    ['Chondroblastoma', 'Adolescents', 'Epiphysis', 'H3F3B K36M mutation'],
                  ]}
                />
              </ContentSection>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
