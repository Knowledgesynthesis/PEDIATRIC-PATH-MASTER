import { Bone, Activity, Dna } from 'lucide-react'
import { PageHeader } from '../components/PageHeader'
import { ContentSection } from '../components/ContentSection'
import { DiagramBox, IconDiagram } from '../components/DiagramBox'
import { Accordion, AccordionItem } from '../components/ui/Accordion'
import { InfoTable } from '../components/InfoTable'
import { Callout } from '../components/Callout'
import { Badge } from '../components/ui/Badge'

export default function SoftTissue() {
  return (
    <div>
      <PageHeader
        title="Pediatric Soft Tissue Tumors"
        description="Infantile fibrosarcoma, lipoblastoma, myofibroma, and more"
        icon={<Bone className="w-6 h-6" />}
      />

      <div className="container mx-auto px-4 py-8">
        <Callout type="info" title="Pediatric Soft Tissue Tumors">
          Many pediatric soft tissue tumors differ from their adult counterparts in behavior
          and molecular features. Some tumors are unique to childhood.
        </Callout>

        <div className="mt-8 space-y-6">
          <ContentSection title="Infantile Fibrosarcoma" icon={<Bone className="w-5 h-5" />}>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="primary">Age &lt;2 years</Badge>
              <Badge variant="success">Excellent prognosis</Badge>
              <Badge variant="secondary">ETV6-NTRK3 fusion</Badge>
            </div>

            <div className="space-y-3">
              <IconDiagram
                icon={<Bone className="w-5 h-5" />}
                label="Herringbone Pattern"
                description="Fascicles of spindle cells; resembles adult fibrosarcoma"
              />
              <IconDiagram
                icon={<Bone className="w-5 h-5" />}
                label="High Mitotic Rate"
                description="Active mitoses present; does NOT indicate poor prognosis"
                color="bg-yellow-500/20 text-yellow-400"
              />
              <IconDiagram
                icon={<Bone className="w-5 h-5" />}
                label="Hemorrhage/Necrosis"
                description="May be present; common in larger tumors"
              />
            </div>

            <DiagramBox title="Key Points" className="mt-4">
              <ul className="space-y-2 text-sm">
                <li>• Despite aggressive morphology, &gt;90% cure rate with surgery alone</li>
                <li>• ETV6-NTRK3 fusion pathognomonic t(12;15)(p13;q25)</li>
                <li>• NTRK inhibitors (larotrectinib) effective for unresectable cases</li>
                <li>• Must distinguish from adult-type fibrosarcoma in older children</li>
              </ul>
            </DiagramBox>
          </ContentSection>

          <ContentSection title="Lipoblastoma" icon={<Activity className="w-5 h-5" />}>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="primary">Age &lt;3 years</Badge>
              <Badge variant="success">Benign</Badge>
              <Badge variant="secondary">PLAG1 rearrangement</Badge>
            </div>

            <Accordion>
              <AccordionItem title="Morphologic Features" icon={<Activity className="w-4 h-4" />}>
                <div className="space-y-3">
                  <IconDiagram
                    icon={<Activity className="w-5 h-5" />}
                    label="Lipoblasts"
                    description="Cells with cytoplasmic fat vacuoles indenting nucleus"
                  />
                  <IconDiagram
                    icon={<Activity className="w-5 h-5" />}
                    label="Myxoid Stroma"
                    description="Prominent myxoid background with delicate vessels"
                    color="bg-yellow-500/20 text-yellow-400"
                  />
                  <IconDiagram
                    icon={<Activity className="w-5 h-5" />}
                    label="Lobular Architecture"
                    description="Well-circumscribed with fibrous septa"
                  />
                </div>
              </AccordionItem>
              <AccordionItem title="Differential Diagnosis" icon={<Activity className="w-4 h-4" />}>
                <InfoTable
                  headers={['Entity', 'Age', 'PLAG1', 'Behavior']}
                  rows={[
                    ['Lipoblastoma', 'Infants/children', 'Positive', 'Benign'],
                    ['Myxoid liposarcoma', 'Adults', 'Negative (DDIT3)', 'Malignant'],
                    ['Lipoma', 'Adults', 'Variable', 'Benign'],
                    ['Hibernoma', 'Adults', 'Negative', 'Benign'],
                  ]}
                />
              </AccordionItem>
            </Accordion>
          </ContentSection>

          <ContentSection title="Myofibroma / Myofibromatosis" icon={<Bone className="w-5 h-5" />}>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="primary">Infants/children</Badge>
              <Badge variant="success">Usually benign</Badge>
            </div>

            <div className="space-y-3">
              <IconDiagram
                icon={<Bone className="w-5 h-5" />}
                label="Biphasic Pattern"
                description="Peripheral myoid zone surrounding central hemangiopericytoma-like zone"
              />
              <IconDiagram
                icon={<Bone className="w-5 h-5" />}
                label="Myoid Component"
                description="Smooth muscle-like cells in fascicles"
                color="bg-primary-500/20 text-primary-400"
              />
              <IconDiagram
                icon={<Bone className="w-5 h-5" />}
                label="Primitive Zone"
                description="Small round cells with staghorn vessels centrally"
                color="bg-yellow-500/20 text-yellow-400"
              />
            </div>

            <Callout type="warning" title="Myofibromatosis" className="mt-4">
              Multiple lesions define myofibromatosis. Solitary lesions regress spontaneously.
              Visceral involvement (especially GI) may cause complications.
            </Callout>
          </ContentSection>

          <ContentSection title="Desmoplastic Small Round Cell Tumor (DSRCT)" icon={<Bone className="w-5 h-5" />}>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="warning">Adolescents/young adults</Badge>
              <Badge variant="danger">Highly aggressive</Badge>
              <Badge variant="secondary">EWSR1-WT1 fusion</Badge>
            </div>

            <Accordion>
              <AccordionItem title="Morphology" icon={<Bone className="w-4 h-4" />}>
                <div className="space-y-3">
                  <IconDiagram
                    icon={<Bone className="w-5 h-5" />}
                    label="Desmoplastic Stroma"
                    description="Nests and cords of tumor cells in dense fibrous stroma"
                  />
                  <IconDiagram
                    icon={<Bone className="w-5 h-5" />}
                    label="Small Round Cells"
                    description="High N:C ratio, hyperchromatic nuclei, scant cytoplasm"
                    color="bg-red-500/20 text-red-400"
                  />
                </div>
              </AccordionItem>
              <AccordionItem title="Immunohistochemistry" icon={<Dna className="w-4 h-4" />}>
                <p className="mb-3">Characteristic multi-phenotypic differentiation:</p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Cytokeratin: positive (epithelial)</li>
                  <li>Desmin: positive (dot-like paranuclear)</li>
                  <li>WT1: positive (C-terminus)</li>
                  <li>NSE: may be positive</li>
                </ul>
              </AccordionItem>
              <AccordionItem title="Molecular" icon={<Dna className="w-4 h-4" />}>
                <p className="text-sm">
                  <strong>EWSR1-WT1 fusion</strong> t(11;22)(p13;q12) is pathognomonic.
                  Creates chimeric transcription factor with EWSR1 activation domain
                  and WT1 DNA-binding domain.
                </p>
              </AccordionItem>
            </Accordion>
          </ContentSection>

          <ContentSection title="Other Pediatric Soft Tissue Tumors" icon={<Bone className="w-5 h-5" />}>
            <InfoTable
              headers={['Tumor', 'Age', 'Molecular', 'Key Features']}
              rows={[
                ['Inflammatory myofibroblastic tumor', 'Children/young adults', 'ALK rearrangements', 'Plasma cells, myofibroblasts; may recur'],
                ['Dermatofibrosarcoma protuberans', 'Young adults', 'COL1A1-PDGFB', 'Storiform pattern, CD34+, slow growing'],
                ['Synovial sarcoma', 'Adolescents', 'SS18-SSX', 'Biphasic or monophasic; TLE1+'],
                ['Fibrous hamartoma of infancy', 'Infants', 'None specific', 'Triphasic: fat, fibrous, primitive'],
                ['Kaposiform hemangioendothelioma', 'Infants', 'None specific', 'Kasabach-Merritt phenomenon'],
              ]}
            />
          </ContentSection>

          <ContentSection title="Molecular Summary" icon={<Dna className="w-5 h-5" />}>
            <DiagramBox title="Key Fusions in Pediatric Soft Tissue Tumors">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex justify-between items-center p-2 bg-secondary/50 rounded">
                    <span className="font-medium">Infantile fibrosarcoma</span>
                    <Badge variant="primary">ETV6-NTRK3</Badge>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-secondary/50 rounded">
                    <span className="font-medium">DSRCT</span>
                    <Badge variant="primary">EWSR1-WT1</Badge>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-secondary/50 rounded">
                    <span className="font-medium">Synovial sarcoma</span>
                    <Badge variant="primary">SS18-SSX</Badge>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center p-2 bg-secondary/50 rounded">
                    <span className="font-medium">Lipoblastoma</span>
                    <Badge variant="primary">PLAG1</Badge>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-secondary/50 rounded">
                    <span className="font-medium">IMT</span>
                    <Badge variant="primary">ALK fusions</Badge>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-secondary/50 rounded">
                    <span className="font-medium">DFSP</span>
                    <Badge variant="primary">COL1A1-PDGFB</Badge>
                  </div>
                </div>
              </div>
            </DiagramBox>
          </ContentSection>
        </div>
      </div>
    </div>
  )
}
