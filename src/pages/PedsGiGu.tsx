import { FlaskConical, Activity, Circle, Droplets } from 'lucide-react'
import { PageHeader } from '../components/PageHeader'
import { ContentSection } from '../components/ContentSection'
import { DiagramBox, IconDiagram } from '../components/DiagramBox'
import { Accordion, AccordionItem } from '../components/ui/Accordion'
import { InfoTable } from '../components/InfoTable'
import { Callout } from '../components/Callout'
import { Badge } from '../components/ui/Badge'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../components/ui/Tabs'

export default function PedsGiGu() {
  return (
    <div>
      <PageHeader
        title="Pediatric GI/GU/Endocrine"
        description="Selected high-yield pediatric organ pathology"
        icon={<FlaskConical className="w-6 h-6" />}
      />

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="gi">
          <TabsList className="w-full flex-wrap">
            <TabsTrigger value="gi">Gastrointestinal</TabsTrigger>
            <TabsTrigger value="renal">Renal</TabsTrigger>
            <TabsTrigger value="gonadal">Gonadal</TabsTrigger>
            <TabsTrigger value="endocrine">Endocrine</TabsTrigger>
          </TabsList>

          <TabsContent value="gi">
            <div className="space-y-6">
              <ContentSection title="Juvenile Polyps" icon={<Activity className="w-5 h-5" />}>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="primary">Most common polyp in children</Badge>
                  <Badge variant="success">Benign (sporadic)</Badge>
                </div>

                <div className="space-y-3">
                  <IconDiagram
                    icon={<Activity className="w-5 h-5" />}
                    label="Histology"
                    description="Dilated, mucin-filled glands in edematous stroma with inflammation"
                  />
                  <IconDiagram
                    icon={<Activity className="w-5 h-5" />}
                    label="Surface Erosion"
                    description="Common; causes bleeding (most common presentation)"
                    color="bg-yellow-500/20 text-yellow-400"
                  />
                </div>

                <Callout type="warning" title="Juvenile Polyposis Syndrome" className="mt-4">
                  Multiple juvenile polyps (≥5 colorectal, any gastric, or family history) suggest
                  JPS. Associated with SMAD4 and BMPR1A mutations. Increased cancer risk.
                </Callout>
              </ContentSection>

              <ContentSection title="Pediatric IBD" icon={<Activity className="w-5 h-5" />}>
                <Accordion>
                  <AccordionItem title="Pediatric Crohn Disease" icon={<Activity className="w-4 h-4" />}>
                    <ul className="list-disc list-inside space-y-2 text-sm">
                      <li>Often more extensive at diagnosis than adults</li>
                      <li>Upper GI involvement more common</li>
                      <li>Growth failure may be presenting feature</li>
                      <li>Granulomas may be less frequent than adults</li>
                      <li>NOD2/CARD15 mutations less common than adult-onset</li>
                    </ul>
                  </AccordionItem>
                  <AccordionItem title="Very Early Onset IBD (VEO-IBD)" icon={<Activity className="w-4 h-4" />}>
                    <p className="mb-3">Onset before age 6 years; often monogenic:</p>
                    <InfoTable
                      headers={['Gene', 'Syndrome', 'Features']}
                      rows={[
                        ['IL10, IL10RA/B', 'IL-10 signaling defects', 'Severe perianal disease, fistulae'],
                        ['XIAP', 'XLP type 2', 'X-linked, EBV susceptibility'],
                        ['FOXP3', 'IPEX', 'Autoimmunity, eczema, enteropathy'],
                        ['Various', 'CGD-associated', 'Granulomatous colitis'],
                      ]}
                    />
                  </AccordionItem>
                </Accordion>
              </ContentSection>

              <ContentSection title="Eosinophilic Esophagitis" icon={<Activity className="w-5 h-5" />}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-secondary/50 rounded-lg">
                    <h4 className="font-medium text-foreground mb-2">Histologic Criteria</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• ≥15 eosinophils per HPF (peak count)</li>
                      <li>• Eosinophilic microabscesses</li>
                      <li>• Superficial layering</li>
                      <li>• Basal zone hyperplasia</li>
                      <li>• Subepithelial fibrosis</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-secondary/50 rounded-lg">
                    <h4 className="font-medium text-foreground mb-2">Clinical Context</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Dysphagia, food impaction</li>
                      <li>• Atopic history common</li>
                      <li>• Exclude GERD (PPI trial)</li>
                      <li>• Multiple biopsies needed</li>
                    </ul>
                  </div>
                </div>
              </ContentSection>
            </div>
          </TabsContent>

          <TabsContent value="renal">
            <div className="space-y-6">
              <ContentSection title="Pediatric Renal Tumors" icon={<Droplets className="w-5 h-5" />}>
                <InfoTable
                  headers={['Tumor', 'Age', 'Key Features', 'Prognosis']}
                  rows={[
                    ['Wilms tumor', '3-4 years', 'Triphasic, WT1+', 'Good (90%)'],
                    ['Clear cell sarcoma', '1-4 years', 'Bone metastases, vascular pattern', 'Intermediate'],
                    ['Rhabdoid tumor', '<2 years', 'INI1 loss, rhabdoid cells', 'Poor'],
                    ['Congenital mesoblastic nephroma', '<3 months', 'Cellular vs classic, ETV6-NTRK3', 'Excellent'],
                    ['Renal cell carcinoma', 'Adolescents', 'MiT family translocation type', 'Variable'],
                  ]}
                />
              </ContentSection>

              <ContentSection title="Congenital Mesoblastic Nephroma" icon={<Droplets className="w-5 h-5" />}>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="primary">Most common renal tumor in infancy</Badge>
                  <Badge variant="success">Excellent prognosis</Badge>
                </div>

                <Accordion>
                  <AccordionItem title="Classic Type" icon={<Droplets className="w-4 h-4" />}>
                    <ul className="list-disc list-inside space-y-2 text-sm">
                      <li>Resembles infantile fibromatosis</li>
                      <li>Intersecting fascicles of fibroblastic cells</li>
                      <li>Low mitotic rate</li>
                      <li>Infiltrative borders</li>
                      <li>No specific molecular alteration</li>
                    </ul>
                  </AccordionItem>
                  <AccordionItem title="Cellular Type" icon={<Droplets className="w-4 h-4" />}>
                    <ul className="list-disc list-inside space-y-2 text-sm">
                      <li>Higher cellularity</li>
                      <li>Increased mitotic activity</li>
                      <li>ETV6-NTRK3 fusion (like infantile fibrosarcoma)</li>
                      <li>Slightly higher recurrence risk</li>
                      <li>Complete resection still curative</li>
                    </ul>
                  </AccordionItem>
                </Accordion>
              </ContentSection>

              <ContentSection title="Rhabdoid Tumor of Kidney" icon={<Droplets className="w-5 h-5" />}>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="danger">Highly aggressive</Badge>
                  <Badge variant="warning">INI1 (SMARCB1) loss</Badge>
                </div>

                <div className="space-y-3">
                  <IconDiagram
                    icon={<Droplets className="w-5 h-5" />}
                    label="Rhabdoid Cells"
                    description="Large cells with eccentric nuclei and eosinophilic cytoplasmic inclusions"
                    color="bg-red-500/20 text-red-400"
                  />
                  <IconDiagram
                    icon={<Droplets className="w-5 h-5" />}
                    label="INI1 Loss"
                    description="Loss of nuclear INI1 (SMARCB1) staining; defining feature"
                  />
                </div>

                <Callout type="error" title="Rhabdoid Tumor Predisposition" className="mt-4">
                  Germline SMARCB1 mutations cause rhabdoid tumor predisposition syndrome.
                  Screen for CNS tumors (AT/RT). Counsel families about 50% risk to offspring.
                </Callout>
              </ContentSection>
            </div>
          </TabsContent>

          <TabsContent value="gonadal">
            <div className="space-y-6">
              <ContentSection title="Pediatric Ovarian Tumors" icon={<Circle className="w-5 h-5" />}>
                <p className="mb-4">
                  Germ cell tumors are most common ovarian neoplasms in children, unlike
                  epithelial tumors in adults.
                </p>

                <InfoTable
                  headers={['Type', 'Age', 'Markers', 'Notes']}
                  rows={[
                    ['Mature teratoma', 'Any', 'None', 'Most common; benign in children'],
                    ['Immature teratoma', 'Children', 'AFP (if YST)', 'Grade by immature neuroepithelium'],
                    ['Yolk sac tumor', 'Young children', 'AFP', 'Most common malignant GCT'],
                    ['Dysgerminoma', 'Adolescents', 'PLAP, OCT4', 'Equivalent to seminoma'],
                    ['Sex cord-stromal', 'Any', 'Inhibin', 'Granulosa cell, Sertoli-Leydig'],
                  ]}
                />

                <Callout type="info" title="Juvenile Granulosa Cell Tumor" className="mt-4">
                  Differs from adult type: younger age, different morphology (follicles with
                  basophilic fluid), lacks Call-Exner bodies, generally better prognosis.
                </Callout>
              </ContentSection>

              <ContentSection title="Testicular GCTs in Children" icon={<Circle className="w-5 h-5" />}>
                <DiagramBox title="Age-Based Distribution">
                  <div className="space-y-3">
                    <div className="p-3 bg-primary-500/10 rounded-lg">
                      <h4 className="font-medium text-primary-400">Infants/Toddlers</h4>
                      <ul className="text-sm text-muted-foreground space-y-1 mt-2">
                        <li>• Yolk sac tumor (most common malignant)</li>
                        <li>• Teratoma (benign in prepubertal)</li>
                        <li>• No GCNIS precursor</li>
                      </ul>
                    </div>
                    <div className="p-3 bg-accent-500/10 rounded-lg">
                      <h4 className="font-medium text-accent-400">Adolescents (Post-pubertal)</h4>
                      <ul className="text-sm text-muted-foreground space-y-1 mt-2">
                        <li>• Behave like adult GCTs</li>
                        <li>• GCNIS present as precursor</li>
                        <li>• Mixed GCTs common</li>
                        <li>• Teratoma can be malignant</li>
                      </ul>
                    </div>
                  </div>
                </DiagramBox>
              </ContentSection>
            </div>
          </TabsContent>

          <TabsContent value="endocrine">
            <div className="space-y-6">
              <ContentSection title="Pediatric Thyroid Lesions" icon={<Activity className="w-5 h-5" />}>
                <Accordion>
                  <AccordionItem title="Pediatric Thyroid Carcinoma" icon={<Activity className="w-4 h-4" />}>
                    <p className="mb-3">Generally excellent prognosis despite advanced presentation:</p>
                    <ul className="list-disc list-inside space-y-2 text-sm">
                      <li>Papillary carcinoma most common (&gt;90%)</li>
                      <li>Often presents with lymph node metastases</li>
                      <li>Pulmonary metastases more common than adults</li>
                      <li>Lower mortality than adults despite stage</li>
                      <li>RET fusions more common than BRAF in children</li>
                    </ul>
                  </AccordionItem>
                  <AccordionItem title="Radiation-Associated Thyroid Cancer" icon={<Activity className="w-4 h-4" />}>
                    <ul className="list-disc list-inside space-y-2 text-sm">
                      <li>Important after radiation exposure (Chernobyl, therapy)</li>
                      <li>Latency 5-20+ years</li>
                      <li>Solid/trabecular variant more common</li>
                      <li>RET/PTC rearrangements frequent</li>
                    </ul>
                  </AccordionItem>
                </Accordion>
              </ContentSection>

              <ContentSection title="Pediatric Adrenal Tumors" icon={<Activity className="w-5 h-5" />}>
                <InfoTable
                  headers={['Tumor', 'Features', 'Molecular', 'Notes']}
                  rows={[
                    ['Neuroblastoma', 'SRBCT, rosettes', 'MYCN, ALK', 'See SRBCT module'],
                    ['Adrenocortical carcinoma', 'Virilization', 'TP53, IGF2', 'Li-Fraumeni; Southern Brazil cluster'],
                    ['Pheochromocytoma', 'Hypertension', 'SDH, VHL, RET', 'Screen for hereditary syndromes'],
                    ['Adrenocortical adenoma', 'Cushings, virilization', 'Various', 'Rare; rule out carcinoma'],
                  ]}
                />

                <Callout type="warning" title="Pediatric Adrenocortical Carcinoma" className="mt-4">
                  Consider TP53 germline testing in all cases. High incidence in Southern
                  Brazil due to founder mutation. Weiss criteria less reliable in children.
                </Callout>
              </ContentSection>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
