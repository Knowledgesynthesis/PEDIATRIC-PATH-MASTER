import { Pill, Microscope, Dna, Target } from 'lucide-react'
import { PageHeader } from '../components/PageHeader'
import { ContentSection } from '../components/ContentSection'
import { DiagramBox, IconDiagram } from '../components/DiagramBox'
import { Accordion, AccordionItem } from '../components/ui/Accordion'
import { InfoTable } from '../components/InfoTable'
import { Callout } from '../components/Callout'
import { Badge } from '../components/ui/Badge'

export default function PillTumors() {
  return (
    <div>
      <PageHeader
        title="Pediatric Pill Tumors"
        description="Hepatoblastoma and other hepatic neoplasms in children"
        icon={<Pill className="w-6 h-6" />}
      />

      <div className="container mx-auto px-4 py-8">
        <Callout type="info" title="Pediatric Pill Tumors">
          Hepatoblastoma is the most common primary hepatic malignancy in children.
          Age at presentation, AFP levels, and histologic subtype are important for prognosis.
        </Callout>

        <div className="mt-8 space-y-6">
          <ContentSection title="Hepatoblastoma" icon={<Pill className="w-5 h-5" />}>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="primary">Age &lt;3 years</Badge>
              <Badge variant="warning">AFP elevated</Badge>
              <Badge variant="secondary">WNT pathway</Badge>
            </div>

            <Accordion>
              <AccordionItem title="Epithelial Types" icon={<Microscope className="w-4 h-4" />} defaultOpen>
                <div className="space-y-4">
                  <IconDiagram
                    icon={<Pill className="w-5 h-5" />}
                    label="Fetal Pattern"
                    description="Small uniform cells in cords/trabeculae; low N:C ratio; glycogen/fat; best prognosis"
                    color="bg-green-500/20 text-green-400"
                  />
                  <IconDiagram
                    icon={<Pill className="w-5 h-5" />}
                    label="Embryonal Pattern"
                    description="Higher N:C ratio, angulated nuclei, less cytoplasm; sheets and rosettes"
                    color="bg-yellow-500/20 text-yellow-400"
                  />
                  <IconDiagram
                    icon={<Pill className="w-5 h-5" />}
                    label="Pleomorphic/Anaplastic"
                    description="Marked nuclear pleomorphism, high mitotic rate; worst prognosis"
                    color="bg-red-500/20 text-red-400"
                  />
                  <IconDiagram
                    icon={<Pill className="w-5 h-5" />}
                    label="Small Cell Undifferentiated"
                    description="Small round blue cells; INI1 loss common; poor prognosis"
                    color="bg-red-500/20 text-red-400"
                  />
                </div>
              </AccordionItem>

              <AccordionItem title="Mixed Epithelial-Mesenchymal" icon={<Microscope className="w-4 h-4" />}>
                <p className="mb-3">Contains both epithelial and mesenchymal elements:</p>
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li><strong>With teratoid features:</strong> Neural, melanocytic, squamous elements</li>
                  <li><strong>Without teratoid features:</strong> Spindle cell, osteoid-like matrix</li>
                </ul>
              </AccordionItem>

              <AccordionItem title="Syndromic Associations" icon={<Dna className="w-4 h-4" />}>
                <InfoTable
                  headers={['Syndrome', 'Gene/Locus', 'Other Features']}
                  rows={[
                    ['Beckwith-Wiedemann', '11p15.5 (IGF2)', 'Macroglossia, omphalocele, hemihypertrophy'],
                    ['FAP', 'APC', 'Gardner syndrome; 800x increased risk'],
                    ['Trisomy 18', 'Chromosome 18', 'Edwards syndrome'],
                    ['Prematurity/Low birth weight', 'Non-syndromic', 'Independent risk factor'],
                  ]}
                />
              </AccordionItem>

              <AccordionItem title="Molecular Features" icon={<Dna className="w-4 h-4" />}>
                <DiagramBox title="Key Molecular Alterations">
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-primary-500"></span>
                      <span><strong>β-catenin (CTNNB1):</strong> Most common mutation (~80%)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-primary-500"></span>
                      <span><strong>NFE2L2:</strong> Associated with aggressive phenotype</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-primary-500"></span>
                      <span><strong>TERT promoter:</strong> Poor prognosis marker</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                      <span><strong>Nuclear β-catenin:</strong> IHC marker for WNT activation</span>
                    </li>
                  </ul>
                </DiagramBox>
              </AccordionItem>

              <AccordionItem title="Prognosis and Staging" icon={<Target className="w-4 h-4" />}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-3 bg-green-500/10 rounded-lg">
                    <h4 className="font-medium text-green-400 mb-2">Favorable Factors</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Pure fetal histology</li>
                      <li>• Low mitotic rate</li>
                      <li>• Complete resection</li>
                      <li>• AFP response to therapy</li>
                      <li>• Localized disease</li>
                    </ul>
                  </div>
                  <div className="p-3 bg-red-500/10 rounded-lg">
                    <h4 className="font-medium text-red-400 mb-2">Unfavorable Factors</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Small cell undifferentiated</li>
                      <li>• Anaplasia</li>
                      <li>• Metastatic disease</li>
                      <li>• Vascular invasion</li>
                      <li>• Low/normal AFP</li>
                    </ul>
                  </div>
                </div>
              </AccordionItem>
            </Accordion>
          </ContentSection>

          <ContentSection title="Hepatocellular Carcinoma in Children" icon={<Pill className="w-5 h-5" />}>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="warning">Rare in children</Badge>
              <Badge variant="danger">Aggressive</Badge>
            </div>

            <p className="mb-4">
              HCC is rare in children and typically arises in setting of underlying liver disease
              or metabolic conditions.
            </p>

            <InfoTable
              headers={['Risk Factor', 'Examples', 'Notes']}
              rows={[
                ['Chronic liver disease', 'Hepatitis B, cirrhosis', 'Usually adolescents'],
                ['Metabolic diseases', 'Tyrosinemia type I, glycogen storage', 'Screen with AFP/imaging'],
                ['Biliary atresia', 'Post-Kasai cirrhosis', 'Long-term survivors'],
                ['Fibrolamellar HCC', 'No underlying disease', 'DNAJB1-PRKACA fusion; better prognosis'],
              ]}
            />

            <Callout type="info" title="Fibrolamellar HCC" className="mt-4">
              Distinct entity in adolescents/young adults without underlying liver disease.
              Characterized by large cells with eosinophilic cytoplasm in lamellar fibrous stroma.
              DNAJB1-PRKACA fusion is pathognomonic.
            </Callout>
          </ContentSection>

          <ContentSection title="Other Pediatric Pill Tumors" icon={<Pill className="w-5 h-5" />}>
            <Accordion>
              <AccordionItem title="Undifferentiated Embryonal Sarcoma" icon={<Pill className="w-4 h-4" />}>
                <div className="space-y-3">
                  <IconDiagram
                    icon={<Pill className="w-5 h-5" />}
                    label="Age Group"
                    description="6-10 years; older than hepatoblastoma"
                  />
                  <IconDiagram
                    icon={<Pill className="w-5 h-5" />}
                    label="Morphology"
                    description="Pleomorphic spindle and stellate cells in myxoid stroma"
                    color="bg-yellow-500/20 text-yellow-400"
                  />
                  <IconDiagram
                    icon={<Pill className="w-5 h-5" />}
                    label="PAS+ Globules"
                    description="Cytoplasmic hyaline globules; characteristic finding"
                  />
                </div>
                <p className="mt-3 text-sm text-muted-foreground">
                  May appear cystic on imaging. Despite aggressive histology, prognosis
                  improving with multimodality therapy.
                </p>
              </AccordionItem>

              <AccordionItem title="Infantile Hemangioma" icon={<Pill className="w-4 h-4" />}>
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li>Most common benign liver tumor in infancy</li>
                  <li>GLUT1 positive (distinguishes from vascular malformations)</li>
                  <li>May cause high-output cardiac failure</li>
                  <li>Often involutes spontaneously</li>
                  <li>Consider hypothyroidism (type 3 deiodinase)</li>
                </ul>
              </AccordionItem>

              <AccordionItem title="Mesenchymal Hamartoma" icon={<Pill className="w-4 h-4" />}>
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li>Benign developmental lesion; presents &lt;2 years</li>
                  <li>Large cystic mass with solid areas</li>
                  <li>Loose mesenchyme with bile ducts and hepatocytes</li>
                  <li>May have 19q13 abnormalities</li>
                  <li>Rare association with undifferentiated embryonal sarcoma</li>
                </ul>
              </AccordionItem>
            </Accordion>
          </ContentSection>

          <ContentSection title="Differential Diagnosis Approach" icon={<Target className="w-5 h-5" />}>
            <DiagramBox title="Pediatric Pill Mass - Age-Based Approach">
              <div className="space-y-4">
                <div className="p-3 bg-primary-500/10 rounded-lg">
                  <h4 className="font-medium text-primary-400 mb-2">Infant (&lt;1 year)</h4>
                  <p className="text-sm text-muted-foreground">
                    Hepatoblastoma, infantile hemangioma, mesenchymal hamartoma
                  </p>
                </div>
                <div className="p-3 bg-accent-500/10 rounded-lg">
                  <h4 className="font-medium text-accent-400 mb-2">Toddler (1-3 years)</h4>
                  <p className="text-sm text-muted-foreground">
                    Hepatoblastoma (most common)
                  </p>
                </div>
                <div className="p-3 bg-yellow-500/10 rounded-lg">
                  <h4 className="font-medium text-yellow-400 mb-2">Child (4-10 years)</h4>
                  <p className="text-sm text-muted-foreground">
                    Undifferentiated embryonal sarcoma, hepatoblastoma (less common)
                  </p>
                </div>
                <div className="p-3 bg-red-500/10 rounded-lg">
                  <h4 className="font-medium text-red-400 mb-2">Adolescent</h4>
                  <p className="text-sm text-muted-foreground">
                    Fibrolamellar HCC, HCC (if underlying disease), metastases
                  </p>
                </div>
              </div>
            </DiagramBox>
          </ContentSection>
        </div>
      </div>
    </div>
  )
}
