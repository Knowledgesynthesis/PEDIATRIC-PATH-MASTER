import { CircleDot, Target, Dna, Microscope } from 'lucide-react'
import { PageHeader } from '../components/PageHeader'
import { ContentSection } from '../components/ContentSection'
import { DiagramBox, IconDiagram } from '../components/DiagramBox'
import { Accordion, AccordionItem } from '../components/ui/Accordion'
import { InfoTable } from '../components/InfoTable'
import { Callout } from '../components/Callout'
import { Badge } from '../components/ui/Badge'

export default function SRBCT() {
  return (
    <div>
      <PageHeader
        title="Small Round Blue Cell Tumors"
        description="Neuroblastoma, Wilms tumor, Ewing sarcoma, Rhabdomyosarcoma"
        icon={<CircleDot className="w-6 h-6" />}
      />

      <div className="container mx-auto px-4 py-8">
        <Callout type="info" title="SRBCT Overview">
          Small round blue cell tumors are a group of pediatric malignancies characterized by
          sheets of small, round cells with scant cytoplasm and hyperchromatic nuclei.
          Immunohistochemistry and molecular studies are essential for accurate classification.
        </Callout>

        <div className="mt-8 space-y-6">
          <ContentSection title="SRBCT Pattern Navigator" icon={<Target className="w-5 h-5" />}>
            <DiagramBox title="Key Morphologic Clues" className="mb-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-3 bg-secondary/50 rounded-lg">
                  <h4 className="font-medium text-foreground mb-2">Rosettes</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Homer-Wright → Neuroblastoma</li>
                    <li>• Flexner-Wintersteiner → Retinoblastoma</li>
                    <li>• Ependymal → Ependymoma</li>
                  </ul>
                </div>
                <div className="p-3 bg-secondary/50 rounded-lg">
                  <h4 className="font-medium text-foreground mb-2">Patterns</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Triphasic → Wilms tumor</li>
                    <li>• Strap cells → Rhabdomyosarcoma</li>
                    <li>• Monotonous sheets → Ewing/lymphoma</li>
                  </ul>
                </div>
              </div>
            </DiagramBox>

            <InfoTable
              headers={['Tumor', 'Key Features', 'IHC Pattern', 'Molecular']}
              rows={[
                ['Neuroblastoma', 'Homer-Wright rosettes, neuropil', 'Synaptophysin+, Chromogranin+', 'MYCN amplification'],
                ['Wilms tumor', 'Triphasic: blastema, epithelium, stroma', 'WT1+ (blastema)', 'WT1, CTNNB1 mutations'],
                ['Ewing sarcoma', 'Monotonous sheets, clear cytoplasm', 'CD99+, NKX2.2+', 'EWSR1 rearrangements'],
                ['Rhabdomyosarcoma', 'Strap cells, rhabdomyoblasts', 'Desmin+, Myogenin+', 'PAX-FOXO1 (alveolar)'],
                ['Lymphoblastic lymphoma', 'Starry sky, tingible body macrophages', 'TdT+, CD99+', 'Various'],
                ['Desmoplastic SRC tumor', 'Nests in desmoplastic stroma', 'Desmin dot+, WT1+', 'EWSR1-WT1'],
              ]}
            />
          </ContentSection>

          <ContentSection title="Neuroblastoma" icon={<CircleDot className="w-5 h-5" />}>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="primary">Adrenal/Sympathetic chain</Badge>
              <Badge variant="secondary">Ages 0-5 years</Badge>
              <Badge variant="warning">Variable prognosis</Badge>
            </div>

            <Accordion>
              <AccordionItem title="Morphologic Features" icon={<Microscope className="w-4 h-4" />}>
                <div className="space-y-3">
                  <IconDiagram
                    icon={<CircleDot className="w-5 h-5" />}
                    label="Homer-Wright Rosettes"
                    description="Neuroblasts arranged around central neuropil (fibrillary material)"
                  />
                  <IconDiagram
                    icon={<CircleDot className="w-5 h-5" />}
                    label="Neuropil"
                    description="Eosinophilic fibrillary background; characteristic feature"
                    color="bg-yellow-500/20 text-yellow-400"
                  />
                  <IconDiagram
                    icon={<CircleDot className="w-5 h-5" />}
                    label="Schwannian Stroma"
                    description="Schwann cell-rich stroma; indicates differentiation"
                    color="bg-green-500/20 text-green-400"
                  />
                </div>
              </AccordionItem>

              <AccordionItem title="Classification (INPC)" icon={<Target className="w-4 h-4" />}>
                <InfoTable
                  headers={['Category', 'Schwannian Stroma', 'Prognosis']}
                  rows={[
                    ['Neuroblastoma (stroma-poor)', '<50%', 'Variable, depends on MKI and age'],
                    ['Ganglioneuroblastoma, intermixed', '>50%, intermixed', 'Favorable'],
                    ['Ganglioneuroblastoma, nodular', 'Composite', 'Depends on nodule'],
                    ['Ganglioneuroma', '>90%, maturing or mature', 'Excellent'],
                  ]}
                />
              </AccordionItem>

              <AccordionItem title="Prognostic Factors" icon={<Dna className="w-4 h-4" />}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-3 bg-green-500/10 rounded-lg">
                    <h4 className="font-medium text-green-400 mb-2">Favorable</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Age &lt;18 months</li>
                      <li>• Localized disease</li>
                      <li>• Low MKI</li>
                      <li>• Hyperdiploid DNA</li>
                      <li>• No MYCN amplification</li>
                    </ul>
                  </div>
                  <div className="p-3 bg-red-500/10 rounded-lg">
                    <h4 className="font-medium text-red-400 mb-2">Unfavorable</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Age &gt;18 months</li>
                      <li>• Metastatic disease</li>
                      <li>• High MKI</li>
                      <li>• MYCN amplification</li>
                      <li>• 1p deletion, 17q gain</li>
                    </ul>
                  </div>
                </div>
              </AccordionItem>
            </Accordion>
          </ContentSection>

          <ContentSection title="Wilms Tumor (Nephroblastoma)" icon={<CircleDot className="w-5 h-5" />}>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="primary">Kidney</Badge>
              <Badge variant="secondary">Peak 3-4 years</Badge>
              <Badge variant="success">Generally good prognosis</Badge>
            </div>

            <Accordion>
              <AccordionItem title="Classic Triphasic Pattern" icon={<Microscope className="w-4 h-4" />}>
                <div className="space-y-3">
                  <IconDiagram
                    icon={<CircleDot className="w-5 h-5" />}
                    label="Blastemal Component"
                    description="Small blue cells; WT1 positive; most aggressive component"
                    color="bg-red-500/20 text-red-400"
                  />
                  <IconDiagram
                    icon={<CircleDot className="w-5 h-5" />}
                    label="Epithelial Component"
                    description="Tubules, glomeruloid structures; PAX8 positive"
                  />
                  <IconDiagram
                    icon={<CircleDot className="w-5 h-5" />}
                    label="Stromal Component"
                    description="Spindle cells; may show skeletal muscle, cartilage"
                    color="bg-green-500/20 text-green-400"
                  />
                </div>
              </AccordionItem>

              <AccordionItem title="Syndromic Associations" icon={<Dna className="w-4 h-4" />}>
                <InfoTable
                  headers={['Syndrome', 'Gene', 'Other Features']}
                  rows={[
                    ['WAGR', 'WT1 deletion (11p13)', 'Aniridia, GU anomalies, intellectual disability'],
                    ['Denys-Drash', 'WT1 mutation', 'Nephropathy, male pseudohermaphroditism'],
                    ['Beckwith-Wiedemann', '11p15 (IGF2)', 'Macroglossia, omphalocele, hemihypertrophy'],
                    ['Perlman', 'DIS3L2', 'Macrosomia, distinctive facies'],
                  ]}
                />
              </AccordionItem>

              <AccordionItem title="Anaplasia" icon={<Target className="w-4 h-4" />}>
                <Callout type="warning" title="Definition of Anaplasia">
                  Requires ALL THREE: (1) Markedly enlarged nuclei (3x), (2) Hyperchromasia,
                  (3) Abnormal mitoses. Focal vs diffuse affects staging and treatment.
                </Callout>
              </AccordionItem>
            </Accordion>
          </ContentSection>

          <ContentSection title="Ewing Sarcoma" icon={<CircleDot className="w-5 h-5" />}>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="primary">Bone/Soft tissue</Badge>
              <Badge variant="secondary">Ages 10-20 years</Badge>
              <Badge variant="warning">Aggressive</Badge>
            </div>

            <Accordion>
              <AccordionItem title="Morphologic Features" icon={<Microscope className="w-4 h-4" />}>
                <div className="space-y-3">
                  <IconDiagram
                    icon={<CircleDot className="w-5 h-5" />}
                    label="Monotonous Sheets"
                    description="Uniform small round cells with minimal variation"
                  />
                  <IconDiagram
                    icon={<CircleDot className="w-5 h-5" />}
                    label="Clear Cytoplasm"
                    description="Glycogen-rich cytoplasm (PAS positive, diastase sensitive)"
                    color="bg-yellow-500/20 text-yellow-400"
                  />
                  <IconDiagram
                    icon={<CircleDot className="w-5 h-5" />}
                    label="Fine Chromatin"
                    description="Vesicular nuclei with fine chromatin; small nucleoli"
                  />
                </div>
              </AccordionItem>

              <AccordionItem title="Immunohistochemistry" icon={<Target className="w-4 h-4" />}>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>CD99 (MIC2):</strong> Strong membranous staining (not specific!)</li>
                  <li><strong>NKX2.2:</strong> Nuclear, highly specific for Ewing family</li>
                  <li><strong>FLI1:</strong> Nuclear, but also positive in vascular tumors</li>
                  <li><strong>Synaptophysin:</strong> May be focally positive (pitfall)</li>
                </ul>
              </AccordionItem>

              <AccordionItem title="Molecular" icon={<Dna className="w-4 h-4" />}>
                <InfoTable
                  headers={['Fusion', 'Frequency', 'Partners']}
                  rows={[
                    ['EWSR1-FLI1', '85%', 't(11;22)'],
                    ['EWSR1-ERG', '10%', 't(21;22)'],
                    ['EWSR1-ETV1/4, FEV', '<5%', 'Rare variants'],
                    ['CIC-DUX4', 'Distinct entity', 'Round cell sarcoma, not classic Ewing'],
                  ]}
                />
              </AccordionItem>
            </Accordion>
          </ContentSection>

          <ContentSection title="Rhabdomyosarcoma" icon={<CircleDot className="w-5 h-5" />}>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="primary">Soft tissue</Badge>
              <Badge variant="secondary">Most common soft tissue sarcoma in children</Badge>
            </div>

            <Accordion>
              <AccordionItem title="Embryonal RMS" icon={<Microscope className="w-4 h-4" />}>
                <div className="space-y-3">
                  <IconDiagram
                    icon={<CircleDot className="w-5 h-5" />}
                    label="Primitive Cells"
                    description="Variable cellularity, alternating myxoid and cellular areas"
                  />
                  <IconDiagram
                    icon={<CircleDot className="w-5 h-5" />}
                    label="Rhabdomyoblasts"
                    description="Strap cells and tadpole cells with eosinophilic cytoplasm"
                    color="bg-yellow-500/20 text-yellow-400"
                  />
                  <IconDiagram
                    icon={<CircleDot className="w-5 h-5" />}
                    label="Botryoid Variant"
                    description="Polypoid growth, cambium layer beneath epithelium"
                    color="bg-green-500/20 text-green-400"
                  />
                </div>
                <p className="mt-3 text-sm">
                  Common sites: head/neck (orbit, parameningeal), GU tract.
                  Generally better prognosis than alveolar type.
                </p>
              </AccordionItem>

              <AccordionItem title="Alveolar RMS" icon={<Microscope className="w-4 h-4" />}>
                <div className="space-y-3">
                  <IconDiagram
                    icon={<CircleDot className="w-5 h-5" />}
                    label="Alveolar Pattern"
                    description="Tumor cells lining fibrous septa (resembles pulmonary alveoli)"
                    color="bg-red-500/20 text-red-400"
                  />
                  <IconDiagram
                    icon={<CircleDot className="w-5 h-5" />}
                    label="Solid Variant"
                    description="Sheets without alveolar pattern; requires molecular confirmation"
                  />
                  <IconDiagram
                    icon={<CircleDot className="w-5 h-5" />}
                    label="Multinucleated Cells"
                    description="Wreath-like giant cells may be present"
                  />
                </div>
                <Callout type="error" title="Worse Prognosis" className="mt-3">
                  Alveolar RMS with PAX-FOXO1 fusion has significantly worse prognosis.
                  Fusion-negative alveolar RMS behaves more like embryonal type.
                </Callout>
              </AccordionItem>

              <AccordionItem title="IHC & Molecular" icon={<Dna className="w-4 h-4" />}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-3 bg-secondary/50 rounded-lg">
                    <h4 className="font-medium text-foreground mb-2">Immunohistochemistry</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Desmin: sensitive, not specific</li>
                      <li>• Myogenin: nuclear, specific</li>
                      <li>• MyoD1: nuclear, specific</li>
                      <li>• Myoglobin: specific but less sensitive</li>
                    </ul>
                  </div>
                  <div className="p-3 bg-secondary/50 rounded-lg">
                    <h4 className="font-medium text-foreground mb-2">Molecular</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• PAX3-FOXO1: t(2;13)</li>
                      <li>• PAX7-FOXO1: t(1;13)</li>
                      <li>• Fusion status more important than morphology</li>
                    </ul>
                  </div>
                </div>
              </AccordionItem>
            </Accordion>
          </ContentSection>
        </div>
      </div>
    </div>
  )
}
