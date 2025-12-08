import { AlertTriangle, Target, XCircle, CheckCircle } from 'lucide-react'
import { PageHeader } from '../components/PageHeader'
import { ContentSection } from '../components/ContentSection'
import { DiagramBox, IconDiagram } from '../components/DiagramBox'
import { Accordion, AccordionItem } from '../components/ui/Accordion'
import { InfoTable } from '../components/InfoTable'
import { Callout } from '../components/Callout'
import { Badge } from '../components/ui/Badge'

export default function Pitfalls() {
  return (
    <div>
      <PageHeader
        title="Pitfalls & Dangerous Mimics"
        description="Common diagnostic pitfalls in pediatric pathology"
        icon={<AlertTriangle className="w-6 h-6" />}
      />

      <div className="container mx-auto px-4 py-8">
        <Callout type="error" title="Critical Learning Points">
          These pitfalls represent common sources of diagnostic error in pediatric pathology.
          Understanding them is essential for accurate diagnosis.
        </Callout>

        <div className="mt-8 space-y-6">
          <ContentSection title="Immature vs Malignant Tissue" icon={<AlertTriangle className="w-5 h-5" />}>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="danger">High-Risk Pitfall</Badge>
            </div>

            <DiagramBox title="Key Principle">
              <p className="text-sm text-muted-foreground">
                Normal immature/developing tissue can appear highly cellular with high N:C ratio
                and mitotic activity - features that would suggest malignancy in adults.
                Always consider gestational age and developmental context.
              </p>
            </DiagramBox>

            <Accordion className="mt-4">
              <AccordionItem title="Fetal Liver Hematopoiesis vs Malignancy" icon={<AlertTriangle className="w-4 h-4" />}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-3 bg-green-500/10 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <h4 className="font-medium text-green-400">Normal EMH</h4>
                    </div>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Scattered islands between hepatocytes</li>
                      <li>• Mixed lineages (erythroid, myeloid, megakaryocytes)</li>
                      <li>• Normal liver architecture preserved</li>
                      <li>• Appropriate for gestational age</li>
                    </ul>
                  </div>
                  <div className="p-3 bg-red-500/10 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <XCircle className="w-4 h-4 text-red-400" />
                      <h4 className="font-medium text-red-400">Concerning Features</h4>
                    </div>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Mass-forming lesion</li>
                      <li>• Monomorphic population</li>
                      <li>• Destruction of liver architecture</li>
                      <li>• EMH persisting beyond neonatal period</li>
                    </ul>
                  </div>
                </div>
              </AccordionItem>

              <AccordionItem title="Immature Kidney vs Wilms Tumor" icon={<AlertTriangle className="w-4 h-4" />}>
                <div className="space-y-3">
                  <IconDiagram
                    icon={<Target className="w-5 h-5" />}
                    label="Nephrogenic Zone"
                    description="Subcapsular basophilic tissue with immature glomeruli - NORMAL before 36 weeks"
                    color="bg-green-500/20 text-green-400"
                  />
                  <IconDiagram
                    icon={<AlertTriangle className="w-5 h-5" />}
                    label="Nephrogenic Rests"
                    description="Persistent embryonal tissue; may be precursor to Wilms - NOT the same as Wilms"
                    color="bg-yellow-500/20 text-yellow-400"
                  />
                  <IconDiagram
                    icon={<XCircle className="w-5 h-5" />}
                    label="Wilms Tumor"
                    description="Mass-forming, triphasic (usually), invasive borders"
                    color="bg-red-500/20 text-red-400"
                  />
                </div>
              </AccordionItem>

              <AccordionItem title="Reactive Lung vs RDS vs Pneumonia" icon={<AlertTriangle className="w-4 h-4" />}>
                <InfoTable
                  headers={['Feature', 'Immature Lung', 'RDS', 'Pneumonia']}
                  rows={[
                    ['Alveolarization', 'Appropriate for GA', 'May be appropriate', 'Usually mature'],
                    ['Hyaline membranes', 'Absent', 'Present (prominent)', 'May be present'],
                    ['Inflammation', 'Absent', 'Minimal early', 'Present'],
                    ['Type II pneumocytes', 'Variable', 'Prominent later', 'May be reactive'],
                    ['Organisms', 'Absent', 'Absent', 'May be identifiable'],
                  ]}
                />
              </AccordionItem>
            </Accordion>
          </ContentSection>

          <ContentSection title="SRBCT Confusion" icon={<Target className="w-5 h-5" />}>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="warning">Requires IHC/Molecular</Badge>
            </div>

            <p className="mb-4 text-muted-foreground">
              Small round blue cell tumors can appear morphologically identical. Never diagnose on H&E alone.
            </p>

            <Accordion>
              <AccordionItem title="Wilms vs Neuroblastoma vs RMS" icon={<Target className="w-4 h-4" />} defaultOpen>
                <InfoTable
                  headers={['Feature', 'Wilms', 'Neuroblastoma', 'RMS']}
                  rows={[
                    ['Location', 'Kidney (intrarenal)', 'Adrenal/paraspinal', 'Soft tissue, H&N'],
                    ['Rosettes', 'No', 'Homer-Wright', 'No'],
                    ['Triphasic', 'Yes (classic)', 'No', 'No'],
                    ['Neuropil', 'No', 'Yes', 'No'],
                    ['Strap cells', 'No', 'No', 'Yes'],
                    ['WT1', 'Positive', 'Negative', 'Negative'],
                    ['Synaptophysin', 'Negative', 'Positive', 'Negative'],
                    ['Desmin/Myogenin', 'Negative', 'Negative', 'Positive'],
                  ]}
                />
              </AccordionItem>

              <AccordionItem title="Ewing vs Lymphoma" icon={<Target className="w-4 h-4" />}>
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    Both can show monotonous sheets of small round cells with CD99 positivity!
                  </p>
                  <IconDiagram
                    icon={<CheckCircle className="w-5 h-5" />}
                    label="Ewing Sarcoma"
                    description="Membranous CD99, NKX2.2+, clear cytoplasm (glycogen), EWSR1 rearrangement"
                    color="bg-primary-500/20 text-primary-400"
                  />
                  <IconDiagram
                    icon={<CheckCircle className="w-5 h-5" />}
                    label="Lymphoblastic Lymphoma"
                    description="CD99+ but also TdT+, CD45+, lacks NKX2.2, no EWSR1 rearrangement"
                    color="bg-accent-500/20 text-accent-400"
                  />
                </div>
                <Callout type="warning" title="CD99 Pitfall" className="mt-3">
                  CD99 is NOT specific for Ewing sarcoma! It is positive in lymphoblastic
                  lymphoma, synovial sarcoma, and other tumors. Always use a panel.
                </Callout>
              </AccordionItem>
            </Accordion>
          </ContentSection>

          <ContentSection title="Nephrogenic Rests vs Wilms Tumor" icon={<AlertTriangle className="w-5 h-5" />}>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="warning">Common Source of Overcall</Badge>
            </div>

            <DiagramBox title="Distinguishing Features">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-3 bg-yellow-500/10 rounded-lg">
                  <h4 className="font-medium text-yellow-400 mb-2">Nephrogenic Rests</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Subcapsular or random (PLNR vs ILNR)</li>
                    <li>• Sharp or irregular borders</li>
                    <li>• May be incidental finding</li>
                    <li>• Usually small (&lt;1 cm)</li>
                    <li>• No significant mass effect</li>
                    <li>• May be sclerotic (regressed)</li>
                  </ul>
                </div>
                <div className="p-3 bg-red-500/10 rounded-lg">
                  <h4 className="font-medium text-red-400 mb-2">Wilms Tumor</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Mass-forming (usually &gt;2 cm)</li>
                    <li>• Distinct pseudocapsule</li>
                    <li>• Clinically detected (mass, hematuria)</li>
                    <li>• Triphasic morphology (usually)</li>
                    <li>• May have hemorrhage/necrosis</li>
                    <li>• Expansile growth pattern</li>
                  </ul>
                </div>
              </div>
            </DiagramBox>

            <Callout type="info" title="Hyperplastic Nephrogenic Rests" className="mt-4">
              Nephrogenic rests may undergo hyperplasia. Enlarging rests (&gt;1.5 cm) or
              multiple bilateral rests (nephroblastomatosis) require close surveillance.
            </Callout>
          </ContentSection>

          <ContentSection title="Hepatoblastoma Mimics" icon={<AlertTriangle className="w-5 h-5" />}>
            <Accordion>
              <AccordionItem title="Hepatoblastoma vs HCC" icon={<AlertTriangle className="w-4 h-4" />}>
                <InfoTable
                  headers={['Feature', 'Hepatoblastoma', 'HCC']}
                  rows={[
                    ['Age', '<3 years', 'Adolescents (if pediatric)'],
                    ['Background liver', 'Normal', 'Often cirrhotic/chronic disease'],
                    ['AFP', 'Usually very high', 'Variable'],
                    ['Morphology', 'Fetal/embryonal patterns', 'Trabecular, pseudoglandular'],
                    ['Bile production', 'Rare', 'Common'],
                    ['Nuclear β-catenin', 'Usually positive', 'Variable'],
                    ['Glypican-3', 'Positive', 'Positive'],
                  ]}
                />
              </AccordionItem>

              <AccordionItem title="Small Cell Hepatoblastoma vs Other SRBCTs" icon={<AlertTriangle className="w-4 h-4" />}>
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground mb-3">
                    Small cell undifferentiated hepatoblastoma can be confused with other
                    small round blue cell tumors metastatic to liver.
                  </p>
                  <IconDiagram
                    icon={<AlertTriangle className="w-5 h-5" />}
                    label="Key Distinguishers"
                    description="Location (liver primary), INI1 loss (common), hepatoblastoma component (may be present)"
                    color="bg-yellow-500/20 text-yellow-400"
                  />
                  <IconDiagram
                    icon={<CheckCircle className="w-5 h-5" />}
                    label="Work-up"
                    description="INI1 IHC, AFP, HepPar1, β-catenin; extensive sampling for epithelial component"
                    color="bg-primary-500/20 text-primary-400"
                  />
                </div>
              </AccordionItem>
            </Accordion>
          </ContentSection>

          <ContentSection title="Alveolar RMS Patterns" icon={<AlertTriangle className="w-5 h-5" />}>
            <div className="space-y-3">
              <IconDiagram
                icon={<AlertTriangle className="w-5 h-5" />}
                label="Solid Variant ARMS"
                description="May lack classic alveolar pattern; looks like sheets of round cells"
                color="bg-red-500/20 text-red-400"
              />
              <IconDiagram
                icon={<CheckCircle className="w-5 h-5" />}
                label="Solution"
                description="Strong diffuse myogenin; PAX-FOXO1 FISH for fusion confirmation"
                color="bg-green-500/20 text-green-400"
              />
            </div>

            <Callout type="warning" title="Fusion Status Matters More Than Pattern" className="mt-4">
              WHO classification emphasizes fusion status. Fusion-negative "alveolar" RMS
              behaves more like embryonal RMS. Fusion-positive solid RMS is still high-risk.
            </Callout>
          </ContentSection>

          <ContentSection title="General Pediatric Pathology Pitfalls" icon={<AlertTriangle className="w-5 h-5" />}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
                <h4 className="font-medium text-red-400 mb-3 flex items-center gap-2">
                  <XCircle className="w-4 h-4" />
                  Don't Do This
                </h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Apply adult criteria to pediatric specimens</li>
                  <li>• Diagnose SRBCT on morphology alone</li>
                  <li>• Ignore developmental context</li>
                  <li>• Miss small cell component in hepatoblastoma</li>
                  <li>• Diagnose Wilms without triphasic pattern workup</li>
                  <li>• Call neuroblastoma without neural markers</li>
                </ul>
              </div>
              <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                <h4 className="font-medium text-green-400 mb-3 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  Do This Instead
                </h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Know normal developmental histology</li>
                  <li>• Use appropriate IHC panels</li>
                  <li>• Confirm with molecular studies</li>
                  <li>• Consider age and clinical context</li>
                  <li>• Sample extensively</li>
                  <li>• Consult when uncertain</li>
                </ul>
              </div>
            </div>
          </ContentSection>
        </div>
      </div>
    </div>
  )
}
