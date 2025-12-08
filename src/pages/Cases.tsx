import { useState } from 'react'
import { FileText, ChevronRight, Microscope, Dna, Target } from 'lucide-react'
import { PageHeader } from '../components/PageHeader'
import { ContentSection } from '../components/ContentSection'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../components/ui/Card'
import { Button } from '../components/ui/Button'
import { Badge } from '../components/ui/Badge'
import { Callout } from '../components/Callout'
import { DiagramBox } from '../components/DiagramBox'

interface CaseData {
  id: string
  title: string
  category: string
  difficulty: 'Basic' | 'Intermediate' | 'Advanced'
  clinicalHistory: string
  morphology: string[]
  ihc: { marker: string; result: string }[]
  molecular?: string
  diagnosis: string
  keyPoints: string[]
}

const cases: CaseData[] = [
  {
    id: 'case-1',
    title: 'Abdominal Mass in a 2-year-old',
    category: 'SRBCT',
    difficulty: 'Basic',
    clinicalHistory: '2-year-old with abdominal distension. Imaging shows large renal mass.',
    morphology: [
      'Triphasic pattern with blastemal, epithelial, and stromal components',
      'Blastemal component shows small round blue cells with high N:C ratio',
      'Epithelial component forms tubules and glomeruloid structures',
      'Stromal component is spindle cell with myxoid areas',
    ],
    ihc: [
      { marker: 'WT1', result: 'Positive (nuclear, blastemal)' },
      { marker: 'PAX8', result: 'Positive (epithelial)' },
      { marker: 'Desmin', result: 'Negative' },
      { marker: 'Synaptophysin', result: 'Negative' },
    ],
    diagnosis: 'Wilms Tumor (Nephroblastoma), favorable histology',
    keyPoints: [
      'Classic triphasic morphology is diagnostic',
      'WT1 positivity in blastema supports diagnosis',
      'No anaplasia identified (favorable histology)',
      'Check for nephrogenic rests in adjacent kidney',
    ],
  },
  {
    id: 'case-2',
    title: 'Adrenal Mass in a 6-month-old',
    category: 'SRBCT',
    difficulty: 'Basic',
    clinicalHistory: '6-month-old with palpable abdominal mass. Elevated urine catecholamines.',
    morphology: [
      'Sheets of small round blue cells',
      'Homer-Wright rosettes (cells surrounding neuropil)',
      'Fine fibrillary neuropil background',
      'Focal ganglionic differentiation',
    ],
    ihc: [
      { marker: 'Synaptophysin', result: 'Positive (diffuse)' },
      { marker: 'Chromogranin', result: 'Positive' },
      { marker: 'PHOX2B', result: 'Positive' },
      { marker: 'WT1', result: 'Negative' },
      { marker: 'Desmin', result: 'Negative' },
    ],
    molecular: 'MYCN not amplified',
    diagnosis: 'Neuroblastoma, differentiating subtype (stroma-poor)',
    keyPoints: [
      'Homer-Wright rosettes and neuropil are characteristic',
      'Neural marker positivity confirms diagnosis',
      'MYCN status critical for risk stratification',
      'Age <18 months with non-amplified MYCN is favorable',
    ],
  },
  {
    id: 'case-3',
    title: 'Liver Mass in a 15-month-old',
    category: 'Liver',
    difficulty: 'Intermediate',
    clinicalHistory: '15-month-old with hepatomegaly. AFP markedly elevated (>100,000 ng/mL).',
    morphology: [
      'Fetal pattern: small uniform cells in thin trabeculae (2-3 cells)',
      'Light and dark cell alternation (glycogen content)',
      'Low mitotic rate in fetal areas',
      'Focal embryonal areas with higher N:C ratio and rosettes',
    ],
    ihc: [
      { marker: 'β-catenin', result: 'Positive (nuclear)' },
      { marker: 'AFP', result: 'Positive' },
      { marker: 'Glypican-3', result: 'Positive' },
      { marker: 'HepPar1', result: 'Positive' },
    ],
    diagnosis: 'Hepatoblastoma, mixed fetal and embryonal type',
    keyPoints: [
      'Fetal pattern has best prognosis',
      'Nuclear β-catenin indicates WNT pathway activation',
      'AFP is useful tumor marker for monitoring',
      'Sample extensively for all patterns and potential small cell component',
    ],
  },
  {
    id: 'case-4',
    title: 'Femur Lesion in a 14-year-old',
    category: 'SRBCT',
    difficulty: 'Intermediate',
    clinicalHistory: '14-year-old with leg pain and swelling. Imaging shows permeative lytic lesion of distal femur with periosteal reaction.',
    morphology: [
      'Monotonous sheets of small round cells',
      'Clear cytoplasm (glycogen-rich)',
      'Uniform round nuclei with fine chromatin',
      'No rosettes or neuropil',
    ],
    ihc: [
      { marker: 'CD99', result: 'Positive (strong membranous)' },
      { marker: 'NKX2.2', result: 'Positive (nuclear)' },
      { marker: 'FLI1', result: 'Positive (nuclear)' },
      { marker: 'Synaptophysin', result: 'Negative' },
      { marker: 'Desmin', result: 'Negative' },
    ],
    molecular: 'EWSR1-FLI1 fusion detected by FISH',
    diagnosis: 'Ewing Sarcoma',
    keyPoints: [
      'Membranous CD99 is sensitive but NOT specific',
      'NKX2.2 is highly specific for Ewing family',
      'EWSR1 rearrangement confirms diagnosis',
      'Clear cytoplasm reflects glycogen (PAS+, diastase-sensitive)',
    ],
  },
  {
    id: 'case-5',
    title: 'Soft Tissue Mass in Infant',
    category: 'Soft Tissue',
    difficulty: 'Basic',
    clinicalHistory: '3-week-old with congenital soft tissue mass on thigh.',
    morphology: [
      'Cellular spindle cell proliferation',
      'Herringbone/fascicular pattern',
      'Brisk mitotic activity',
      'Areas of hemorrhage',
    ],
    ihc: [
      { marker: 'Vimentin', result: 'Positive' },
      { marker: 'SMA', result: 'Focally positive' },
      { marker: 'S100', result: 'Negative' },
      { marker: 'Desmin', result: 'Negative' },
    ],
    molecular: 'ETV6-NTRK3 fusion detected',
    diagnosis: 'Infantile Fibrosarcoma',
    keyPoints: [
      'Despite aggressive morphology, excellent prognosis (>90%)',
      'ETV6-NTRK3 fusion is pathognomonic',
      'NTRK inhibitors available for unresectable cases',
      'Complete resection often curative',
    ],
  },
  {
    id: 'case-6',
    title: 'Neonatal Respiratory Failure',
    category: 'Neonatal',
    difficulty: 'Basic',
    clinicalHistory: '28-week premature infant with respiratory distress from birth.',
    morphology: [
      'Collapsed alveoli/atelectasis',
      'Eosinophilic hyaline membranes lining alveolar ducts',
      'Dilated lymphatics',
      'Appropriate lung maturation for gestational age',
    ],
    ihc: [],
    diagnosis: 'Hyaline Membrane Disease (Respiratory Distress Syndrome)',
    keyPoints: [
      'Classic finding in premature infants',
      'Hyaline membranes are fibrin + cellular debris',
      'Results from surfactant deficiency',
      'May progress to BPD if chronic',
    ],
  },
  {
    id: 'case-7',
    title: 'Posterior Fossa Mass in 7-year-old',
    category: 'CNS',
    difficulty: 'Intermediate',
    clinicalHistory: '7-year-old with headaches and ataxia. MRI shows posterior fossa mass.',
    morphology: [
      'Sheets of small round cells with high N:C ratio',
      'Homer-Wright rosettes present',
      'Brisk mitotic activity',
      'Nodular areas with pale islands (desmoplastic regions)',
    ],
    ihc: [
      { marker: 'Synaptophysin', result: 'Positive' },
      { marker: 'β-catenin', result: 'Membranous (not nuclear)' },
      { marker: 'GAB1', result: 'Positive' },
      { marker: 'YAP1', result: 'Positive (nuclear)' },
    ],
    molecular: 'SHH pathway activation detected',
    diagnosis: 'Medulloblastoma, SHH-activated, desmoplastic/nodular subtype',
    keyPoints: [
      'Desmoplastic/nodular morphology associated with SHH group',
      'GAB1 and YAP1 positive indicates SHH activation',
      'Nuclear β-catenin would indicate WNT group (better prognosis)',
      'Molecular group more prognostic than histology alone',
    ],
  },
  {
    id: 'case-8',
    title: 'Kidney Mass in 2-week-old',
    category: 'Renal',
    difficulty: 'Intermediate',
    clinicalHistory: '2-week-old with abdominal mass detected on prenatal ultrasound.',
    morphology: [
      'Cellular spindle cell proliferation',
      'Fascicular growth pattern',
      'Pushing border into kidney',
      'Mitoses present but no marked atypia',
    ],
    ihc: [
      { marker: 'SMA', result: 'Positive' },
      { marker: 'Desmin', result: 'Negative' },
      { marker: 'WT1', result: 'Negative' },
      { marker: 'CD34', result: 'Negative' },
    ],
    molecular: 'ETV6-NTRK3 fusion detected',
    diagnosis: 'Congenital Mesoblastic Nephroma, cellular type',
    keyPoints: [
      'Most common renal tumor in first 3 months of life',
      'Cellular type has ETV6-NTRK3 fusion (like infantile fibrosarcoma)',
      'Excellent prognosis with complete resection',
      'Classic type lacks the fusion and has lower cellularity',
    ],
  },
]

export default function Cases() {
  const [selectedCase, setSelectedCase] = useState<CaseData | null>(null)
  const [showAnswer, setShowAnswer] = useState(false)

  const categories = [...new Set(cases.map((c) => c.category))]

  if (selectedCase) {
    return (
      <div>
        <PageHeader
          title={selectedCase.title}
          description={`Case ID: ${selectedCase.id}`}
          icon={<FileText className="w-6 h-6" />}
        />

        <div className="container mx-auto px-4 py-8">
          <Button
            variant="outline"
            onClick={() => {
              setSelectedCase(null)
              setShowAnswer(false)
            }}
            className="mb-6"
          >
            ← Back to Case List
          </Button>

          <div className="space-y-6">
            <ContentSection title="Clinical History" icon={<FileText className="w-5 h-5" />}>
              <p>{selectedCase.clinicalHistory}</p>
              <div className="flex gap-2 mt-3">
                <Badge variant="primary">{selectedCase.category}</Badge>
                <Badge
                  variant={
                    selectedCase.difficulty === 'Basic'
                      ? 'success'
                      : selectedCase.difficulty === 'Intermediate'
                      ? 'warning'
                      : 'danger'
                  }
                >
                  {selectedCase.difficulty}
                </Badge>
              </div>
            </ContentSection>

            <ContentSection title="Morphologic Findings" icon={<Microscope className="w-5 h-5" />}>
              <ul className="list-disc list-inside space-y-2">
                {selectedCase.morphology.map((finding, index) => (
                  <li key={index}>{finding}</li>
                ))}
              </ul>
            </ContentSection>

            {selectedCase.ihc.length > 0 && (
              <ContentSection title="Immunohistochemistry" icon={<Target className="w-5 h-5" />}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedCase.ihc.map((result, index) => (
                    <div key={index} className="flex justify-between p-3 bg-secondary/50 rounded-lg">
                      <span className="font-medium">{result.marker}</span>
                      <span className="text-muted-foreground">{result.result}</span>
                    </div>
                  ))}
                </div>
              </ContentSection>
            )}

            {selectedCase.molecular && (
              <ContentSection title="Molecular Studies" icon={<Dna className="w-5 h-5" />}>
                <p>{selectedCase.molecular}</p>
              </ContentSection>
            )}

            {!showAnswer ? (
              <div className="text-center py-8">
                <p className="text-muted-foreground mb-4">What is your diagnosis?</p>
                <Button onClick={() => setShowAnswer(true)}>Show Answer</Button>
              </div>
            ) : (
              <div className="space-y-6">
                <DiagramBox title="Diagnosis">
                  <p className="text-lg font-semibold text-primary-400">{selectedCase.diagnosis}</p>
                </DiagramBox>

                <ContentSection title="Key Learning Points" icon={<Target className="w-5 h-5" />}>
                  <ul className="list-disc list-inside space-y-2">
                    {selectedCase.keyPoints.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                </ContentSection>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div>
      <PageHeader
        title="Integrated Case Bank"
        description="Synthetic pediatric pathology cases for practice"
        icon={<FileText className="w-6 h-6" />}
      />

      <div className="container mx-auto px-4 py-8">
        <Callout type="info" title="Educational Cases">
          These are synthetic cases designed for educational purposes. They integrate
          morphology, immunohistochemistry, and molecular findings for comprehensive learning.
        </Callout>

        <div className="mt-8">
          {categories.map((category) => (
            <div key={category} className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">{category}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {cases
                  .filter((c) => c.category === category)
                  .map((caseItem) => (
                    <Card
                      key={caseItem.id}
                      className="cursor-pointer hover:border-primary-500/50 transition-all"
                      onClick={() => setSelectedCase(caseItem)}
                    >
                      <CardHeader>
                        <CardTitle className="text-base flex items-center justify-between">
                          {caseItem.title}
                          <ChevronRight className="w-4 h-4 text-muted-foreground" />
                        </CardTitle>
                        <CardDescription>{caseItem.clinicalHistory.substring(0, 80)}...</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex gap-2">
                          <Badge
                            variant={
                              caseItem.difficulty === 'Basic'
                                ? 'success'
                                : caseItem.difficulty === 'Intermediate'
                                ? 'warning'
                                : 'danger'
                            }
                          >
                            {caseItem.difficulty}
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
