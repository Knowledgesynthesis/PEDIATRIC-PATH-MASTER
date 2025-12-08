import { Dna, Target, Microscope, Zap } from 'lucide-react'
import { PageHeader } from '../components/PageHeader'
import { ContentSection } from '../components/ContentSection'
import { DiagramBox, IconDiagram } from '../components/DiagramBox'
import { Accordion, AccordionItem } from '../components/ui/Accordion'
import { InfoTable } from '../components/InfoTable'
import { Callout } from '../components/Callout'
import { Badge } from '../components/ui/Badge'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../components/ui/Tabs'

export default function IhcMolecular() {
  return (
    <div>
      <PageHeader
        title="IHC & Molecular Markers"
        description="Immunohistochemistry and molecular concepts in pediatric tumors"
        icon={<Dna className="w-6 h-6" />}
      />

      <div className="container mx-auto px-4 py-8">
        <Callout type="warning" title="Educational Use Only">
          This content provides conceptual understanding of IHC and molecular markers.
          Not intended for diagnostic use. Interpretation requires clinical context.
        </Callout>

        <div className="mt-8">
          <Tabs defaultValue="ihc">
            <TabsList className="w-full flex-wrap">
              <TabsTrigger value="ihc">IHC Patterns</TabsTrigger>
              <TabsTrigger value="molecular">Molecular Markers</TabsTrigger>
              <TabsTrigger value="panels">Diagnostic Panels</TabsTrigger>
            </TabsList>

            <TabsContent value="ihc">
              <div className="space-y-6">
                <ContentSection title="Key IHC Markers by Tumor Type" icon={<Target className="w-5 h-5" />}>
                  <Accordion>
                    <AccordionItem title="SRBCT Panel" icon={<Target className="w-4 h-4" />} defaultOpen>
                      <InfoTable
                        headers={['Marker', 'Neuroblastoma', 'Wilms', 'Ewing', 'RMS', 'Lymphoma']}
                        rows={[
                          ['Synaptophysin', '+', '-', '-/+', '-', '-'],
                          ['Chromogranin', '+', '-', '-', '-', '-'],
                          ['WT1', '-', '+ (blastema)', '-', '-', '-'],
                          ['CD99', '-', '-', '+ (membrane)', '+/-', '+/-'],
                          ['Desmin', '-', '-', '-', '+', '-'],
                          ['Myogenin', '-', '-', '-', '+', '-'],
                          ['NKX2.2', '-', '-', '+', '-', '-'],
                          ['TdT', '-', '-', '-', '-', '+ (LBL)'],
                        ]}
                      />
                    </AccordionItem>

                    <AccordionItem title="Neural Markers" icon={<Microscope className="w-4 h-4" />}>
                      <div className="space-y-3">
                        <IconDiagram
                          icon={<Dna className="w-5 h-5" />}
                          label="Synaptophysin"
                          description="Synaptic vesicle protein; neuroblastoma, neuroendocrine tumors"
                        />
                        <IconDiagram
                          icon={<Dna className="w-5 h-5" />}
                          label="Chromogranin"
                          description="Neurosecretory granules; more specific than synaptophysin"
                          color="bg-yellow-500/20 text-yellow-400"
                        />
                        <IconDiagram
                          icon={<Dna className="w-5 h-5" />}
                          label="PHOX2B"
                          description="Transcription factor; neuroblastoma, ganglioneuroblastoma"
                          color="bg-primary-500/20 text-primary-400"
                        />
                        <IconDiagram
                          icon={<Dna className="w-5 h-5" />}
                          label="NB84"
                          description="Sensitive for neuroblastoma; less specific"
                        />
                      </div>
                    </AccordionItem>

                    <AccordionItem title="Muscle Markers" icon={<Microscope className="w-4 h-4" />}>
                      <div className="space-y-3">
                        <IconDiagram
                          icon={<Dna className="w-5 h-5" />}
                          label="Desmin"
                          description="Intermediate filament; sensitive for muscle differentiation (not specific)"
                        />
                        <IconDiagram
                          icon={<Dna className="w-5 h-5" />}
                          label="Myogenin"
                          description="Nuclear transcription factor; specific for skeletal muscle (RMS)"
                          color="bg-primary-500/20 text-primary-400"
                        />
                        <IconDiagram
                          icon={<Dna className="w-5 h-5" />}
                          label="MyoD1"
                          description="Nuclear; similar specificity to myogenin"
                        />
                      </div>
                      <Callout type="info" title="Alveolar vs Embryonal RMS" className="mt-3">
                        Alveolar RMS typically shows strong, diffuse myogenin staining.
                        Embryonal RMS often shows patchy, weaker staining.
                      </Callout>
                    </AccordionItem>

                    <AccordionItem title="INI1 (SMARCB1) Loss" icon={<Microscope className="w-4 h-4" />}>
                      <p className="mb-3">Loss of nuclear INI1 staining indicates SWI/SNF complex inactivation:</p>
                      <ul className="list-disc list-inside space-y-2 text-sm">
                        <li><strong>Rhabdoid tumor:</strong> Kidney, brain (AT/RT), soft tissue</li>
                        <li><strong>Epithelioid sarcoma:</strong> Proximal and distal types</li>
                        <li><strong>Epithelioid MPNST:</strong> Subset</li>
                        <li><strong>Myoepithelial carcinoma:</strong> Subset</li>
                        <li><strong>Small cell hepatoblastoma:</strong> Some cases</li>
                      </ul>
                    </AccordionItem>
                  </Accordion>
                </ContentSection>

                <ContentSection title="WT1 Patterns" icon={<Target className="w-5 h-5" />}>
                  <DiagramBox title="WT1 Immunostaining Interpretation">
                    <div className="space-y-3">
                      <div className="p-3 bg-primary-500/10 rounded-lg">
                        <h4 className="font-medium text-primary-400">N-terminus Antibodies</h4>
                        <p className="text-sm text-muted-foreground">
                          Positive in Wilms tumor blastema, mesothelioma, ovarian serous carcinoma
                        </p>
                      </div>
                      <div className="p-3 bg-accent-500/10 rounded-lg">
                        <h4 className="font-medium text-accent-400">C-terminus Antibodies</h4>
                        <p className="text-sm text-muted-foreground">
                          Positive in DSRCT (fusion protein retains C-terminus)
                        </p>
                      </div>
                    </div>
                  </DiagramBox>
                </ContentSection>
              </div>
            </TabsContent>

            <TabsContent value="molecular">
              <div className="space-y-6">
                <ContentSection title="Key Molecular Alterations" icon={<Dna className="w-5 h-5" />}>
                  <Accordion>
                    <AccordionItem title="MYCN Amplification" icon={<Dna className="w-4 h-4" />} defaultOpen>
                      <div className="space-y-3">
                        <IconDiagram
                          icon={<Dna className="w-5 h-5" />}
                          label="Neuroblastoma"
                          description="Major adverse prognostic factor; ~20% of cases"
                          color="bg-red-500/20 text-red-400"
                        />
                        <IconDiagram
                          icon={<Zap className="w-5 h-5" />}
                          label="Detection Methods"
                          description="FISH (most common), MLPA, array CGH"
                        />
                      </div>
                      <Callout type="warning" title="Clinical Significance" className="mt-3">
                        MYCN amplification indicates high-risk disease regardless of stage.
                        Associated with rapid progression and poor response to therapy.
                      </Callout>
                    </AccordionItem>

                    <AccordionItem title="EWSR1 Rearrangements" icon={<Dna className="w-4 h-4" />}>
                      <InfoTable
                        headers={['Fusion', 'Disease', 'Frequency']}
                        rows={[
                          ['EWSR1-FLI1', 'Ewing sarcoma', '85%'],
                          ['EWSR1-ERG', 'Ewing sarcoma', '10%'],
                          ['EWSR1-WT1', 'DSRCT', '100%'],
                          ['EWSR1-ATF1', 'Clear cell sarcoma', '90%'],
                          ['EWSR1-CREB1', 'Angiomatoid fibrous histiocytoma', '~90%'],
                        ]}
                      />
                    </AccordionItem>

                    <AccordionItem title="ALK in Pediatric Tumors" icon={<Dna className="w-4 h-4" />}>
                      <div className="space-y-3">
                        <IconDiagram
                          icon={<Dna className="w-5 h-5" />}
                          label="Neuroblastoma"
                          description="Point mutations (R1275, F1174); germline in familial cases"
                        />
                        <IconDiagram
                          icon={<Dna className="w-5 h-5" />}
                          label="Inflammatory Myofibroblastic Tumor"
                          description="ALK rearrangements (~50%); predict response to ALK inhibitors"
                          color="bg-primary-500/20 text-primary-400"
                        />
                        <IconDiagram
                          icon={<Dna className="w-5 h-5" />}
                          label="ALCL"
                          description="ALK+ anaplastic large cell lymphoma; NPM1-ALK most common"
                        />
                      </div>
                    </AccordionItem>

                    <AccordionItem title="ETV6-NTRK3 and NTRK Fusions" icon={<Dna className="w-4 h-4" />}>
                      <div className="flex flex-wrap gap-2 mb-3">
                        <Badge variant="success">Targetable</Badge>
                        <Badge variant="primary">Larotrectinib/Entrectinib</Badge>
                      </div>
                      <ul className="list-disc list-inside space-y-2 text-sm">
                        <li><strong>Infantile fibrosarcoma:</strong> ETV6-NTRK3</li>
                        <li><strong>Congenital mesoblastic nephroma (cellular):</strong> ETV6-NTRK3</li>
                        <li><strong>Secretory breast carcinoma:</strong> ETV6-NTRK3</li>
                        <li><strong>Various pediatric tumors:</strong> Other NTRK fusions</li>
                      </ul>
                    </AccordionItem>
                  </Accordion>
                </ContentSection>

                <ContentSection title="Molecular Prognostic Markers" icon={<Zap className="w-5 h-5" />}>
                  <InfoTable
                    headers={['Marker', 'Tumor', 'Significance']}
                    rows={[
                      ['MYCN amplification', 'Neuroblastoma', 'Poor prognosis'],
                      ['1p deletion', 'Neuroblastoma', 'Adverse (less than MYCN)'],
                      ['11q deletion', 'Neuroblastoma', 'Adverse in non-MYCN amplified'],
                      ['17q gain', 'Neuroblastoma', 'Adverse'],
                      ['Hyperdiploidy', 'Neuroblastoma', 'Favorable'],
                      ['PAX-FOXO1 fusion', 'Rhabdomyosarcoma', 'Adverse (alveolar)'],
                      ['CTNNB1 mutation', 'Hepatoblastoma', 'Common, not clearly prognostic'],
                      ['NFE2L2 mutation', 'Hepatoblastoma', 'Aggressive phenotype'],
                    ]}
                  />
                </ContentSection>
              </div>
            </TabsContent>

            <TabsContent value="panels">
              <div className="space-y-6">
                <ContentSection title="SRBCT Workup Algorithm" icon={<Target className="w-5 h-5" />}>
                  <DiagramBox title="Suggested Panel Approach">
                    <div className="space-y-4">
                      <div className="p-4 bg-primary-500/10 rounded-lg">
                        <h4 className="font-medium text-primary-400 mb-2">First Line Panel</h4>
                        <p className="text-sm text-muted-foreground">
                          CD99, WT1, Desmin, Myogenin, Synaptophysin, CD45
                        </p>
                      </div>
                      <div className="p-4 bg-accent-500/10 rounded-lg">
                        <h4 className="font-medium text-accent-400 mb-2">If Desmin/Myogenin Positive</h4>
                        <p className="text-sm text-muted-foreground">
                          → Rhabdomyosarcoma; consider PAX-FOXO1 FISH
                        </p>
                      </div>
                      <div className="p-4 bg-yellow-500/10 rounded-lg">
                        <h4 className="font-medium text-yellow-400 mb-2">If Synaptophysin Positive</h4>
                        <p className="text-sm text-muted-foreground">
                          → Consider neuroblastoma; add Chromogranin, PHOX2B; check for rosettes
                        </p>
                      </div>
                      <div className="p-4 bg-green-500/10 rounded-lg">
                        <h4 className="font-medium text-green-400 mb-2">If CD99+ Membranous, NKX2.2+</h4>
                        <p className="text-sm text-muted-foreground">
                          → Ewing sarcoma; confirm with EWSR1 FISH/sequencing
                        </p>
                      </div>
                      <div className="p-4 bg-red-500/10 rounded-lg">
                        <h4 className="font-medium text-red-400 mb-2">If WT1+ (N-terminus)</h4>
                        <p className="text-sm text-muted-foreground">
                          → Consider Wilms tumor; evaluate for triphasic morphology
                        </p>
                      </div>
                    </div>
                  </DiagramBox>
                </ContentSection>

                <ContentSection title="Liver Tumor Panel" icon={<Target className="w-5 h-5" />}>
                  <InfoTable
                    headers={['Marker', 'Hepatoblastoma', 'HCC', 'Fibrolamellar', 'UES']}
                    rows={[
                      ['β-catenin (nuclear)', '+', '+/-', '-', '-'],
                      ['AFP', '+', '+', '-', '-'],
                      ['Glypican-3', '+', '+', '+', '-'],
                      ['HepPar1', '+', '+', '+', '-'],
                      ['Arginase-1', '+', '+', '+', '-'],
                      ['CK7', '-', '-', '+', '-'],
                      ['CD68', '-', '-', '+', '-'],
                    ]}
                  />
                </ContentSection>

                <ContentSection title="Germ Cell Tumor Panel" icon={<Target className="w-5 h-5" />}>
                  <InfoTable
                    headers={['Marker', 'Yolk Sac', 'Seminoma', 'Embryonal', 'Teratoma']}
                    rows={[
                      ['SALL4', '+', '+', '+', '+/-'],
                      ['AFP', '+', '-', '-', '-'],
                      ['Glypican-3', '+', '-', '-', '-'],
                      ['OCT4', '-', '+', '+', '-'],
                      ['PLAP', '-', '+', '+/-', '-'],
                      ['CD30', '-', '-', '+', '-'],
                      ['hCG', '-', '-', '-/+', '-'],
                    ]}
                  />
                </ContentSection>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
