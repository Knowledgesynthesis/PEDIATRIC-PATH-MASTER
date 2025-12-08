import { Stethoscope, Wind, Activity, Droplets, Pill } from 'lucide-react'
import { PageHeader } from '../components/PageHeader'
import { ContentSection } from '../components/ContentSection'
import { DiagramBox, DiagramFlow, IconDiagram } from '../components/DiagramBox'
import { InfoTable } from '../components/InfoTable'
import { Callout } from '../components/Callout'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../components/ui/Tabs'

export default function Neonatal() {
  return (
    <div>
      <PageHeader
        title="Neonatal Pathology"
        description="RDS, NEC, meconium aspiration, and metabolic diseases"
        icon={<Stethoscope className="w-6 h-6" />}
      />

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="pulmonary">
          <TabsList className="w-full flex-wrap">
            <TabsTrigger value="pulmonary">Pulmonary</TabsTrigger>
            <TabsTrigger value="gi">Gastrointestinal</TabsTrigger>
            <TabsTrigger value="liver">Liver/Metabolic</TabsTrigger>
            <TabsTrigger value="renal">Renal</TabsTrigger>
          </TabsList>

          <TabsContent value="pulmonary">
            <div className="space-y-6">
              <ContentSection title="Hyaline Membrane Disease (RDS)" icon={<Wind className="w-5 h-5" />}>
                <p className="mb-4">
                  Respiratory distress syndrome results from surfactant deficiency in premature infants.
                </p>

                <DiagramBox title="Pathogenesis" className="mb-4">
                  <DiagramFlow items={['Surfactant deficiency', 'Alveolar collapse', 'Hypoxia', 'Epithelial injury', 'Hyaline membranes']} />
                </DiagramBox>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="p-4 bg-secondary/50 rounded-lg">
                    <h4 className="font-medium text-foreground mb-2">Histologic Features</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Eosinophilic hyaline membranes</li>
                      <li>• Line alveolar ducts and respiratory bronchioles</li>
                      <li>• Alveolar collapse/atelectasis</li>
                      <li>• Dilated lymphatics</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-secondary/50 rounded-lg">
                    <h4 className="font-medium text-foreground mb-2">Clinical Context</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Premature infants (&lt;37 weeks)</li>
                      <li>• Onset within hours of birth</li>
                      <li>• Risk factors: male sex, C-section, maternal diabetes</li>
                      <li>• Prevention: antenatal steroids</li>
                    </ul>
                  </div>
                </div>

                <Callout type="warning" title="Bronchopulmonary Dysplasia (BPD)" className="mt-4">
                  Chronic lung disease of prematurity following RDS. Characterized by alveolar
                  simplification, interstitial fibrosis, and pulmonary hypertension.
                </Callout>
              </ContentSection>

              <ContentSection title="Meconium Aspiration Syndrome" icon={<Wind className="w-5 h-5" />}>
                <p className="mb-4">
                  Aspiration of meconium-stained amniotic fluid, typically in term or post-term infants.
                </p>

                <div className="space-y-3">
                  <IconDiagram
                    icon={<Wind className="w-5 h-5" />}
                    label="Acute Phase"
                    description="Airway obstruction, chemical pneumonitis, surfactant inactivation"
                  />
                  <IconDiagram
                    icon={<Wind className="w-5 h-5" />}
                    label="Histology"
                    description="Golden-brown pigment (meconium) in airways, squamous cells, lanugo hair"
                    color="bg-yellow-500/20 text-yellow-400"
                  />
                  <IconDiagram
                    icon={<Wind className="w-5 h-5" />}
                    label="Complications"
                    description="PPHN, air leak syndromes, secondary infection"
                    color="bg-red-500/20 text-red-400"
                  />
                </div>
              </ContentSection>

              <ContentSection title="Neonatal Pneumonia" icon={<Wind className="w-5 h-5" />}>
                <InfoTable
                  headers={['Type', 'Timing', 'Common Organisms', 'Features']}
                  rows={[
                    ['Congenital', '<48 hours', 'GBS, E. coli, Listeria', 'Acquired in utero or during delivery'],
                    ['Early-onset', '<7 days', 'GBS, E. coli', 'Vertical transmission'],
                    ['Late-onset', '>7 days', 'Staph, Klebsiella, Pseudomonas', 'Nosocomial, especially in NICU'],
                  ]}
                />
              </ContentSection>

              <ContentSection title="Pulmonary Interstitial Glycogenosis (PIG)" icon={<Wind className="w-5 h-5" />}>
                <p className="mb-4">
                  Rare cause of neonatal respiratory failure; characterized by glycogen-laden
                  interstitial cells.
                </p>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li>Presents in first weeks of life with tachypnea</li>
                  <li>PAS-positive, diastase-sensitive interstitial cells</li>
                  <li>Often associated with other lung abnormalities</li>
                  <li>Generally favorable prognosis</li>
                </ul>
              </ContentSection>
            </div>
          </TabsContent>

          <TabsContent value="gi">
            <div className="space-y-6">
              <ContentSection title="Necrotizing Enterocolitis (NEC)" icon={<Activity className="w-5 h-5" />}>
                <p className="mb-4">
                  Life-threatening GI emergency in premature infants; characterized by intestinal necrosis.
                </p>

                <DiagramBox title="NEC Pathogenesis" className="mb-4">
                  <DiagramFlow items={['Prematurity + Feeding', 'Mucosal injury', 'Bacterial invasion', 'Inflammation', 'Necrosis']} />
                </DiagramBox>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="p-4 bg-secondary/50 rounded-lg">
                    <h4 className="font-medium text-foreground mb-2">Histologic Features</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Coagulative necrosis of mucosa/wall</li>
                      <li>• Pneumatosis intestinalis (air in wall)</li>
                      <li>• Hemorrhage</li>
                      <li>• Bacterial overgrowth</li>
                      <li>• Reparative changes (if survived)</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-secondary/50 rounded-lg">
                    <h4 className="font-medium text-foreground mb-2">Risk Factors</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Prematurity (main risk)</li>
                      <li>• Formula feeding (vs breast milk)</li>
                      <li>• Hypoxic-ischemic injury</li>
                      <li>• Congenital heart disease</li>
                    </ul>
                  </div>
                </div>

                <Callout type="error" title="Surgical Emergency" className="mt-4">
                  Perforation, portal venous gas, and clinical deterioration indicate need for
                  surgical intervention. Resection specimens require careful evaluation.
                </Callout>
              </ContentSection>

              <ContentSection title="Intestinal Atresias" icon={<Activity className="w-5 h-5" />}>
                <InfoTable
                  headers={['Type', 'Location', 'Associations', 'Key Features']}
                  rows={[
                    ['Esophageal', 'Esophagus', 'VACTERL', 'Often with TEF; polyhydramnios'],
                    ['Duodenal', 'Duodenum', 'Down syndrome', '"Double bubble" sign'],
                    ['Jejunoileal', 'Small bowel', 'Vascular accident', 'Apple-peel, Christmas tree'],
                    ['Colonic', 'Colon', 'Hirschsprung', 'Rare'],
                  ]}
                />
              </ContentSection>

              <ContentSection title="Hirschsprung Disease" icon={<Activity className="w-5 h-5" />}>
                <p className="mb-4">
                  Congenital megacolon due to absence of ganglion cells in distal bowel.
                </p>

                <div className="space-y-3">
                  <IconDiagram
                    icon={<Activity className="w-5 h-5" />}
                    label="Aganglionic Segment"
                    description="Absent ganglion cells in submucosal and myenteric plexuses"
                  />
                  <IconDiagram
                    icon={<Activity className="w-5 h-5" />}
                    label="Nerve Hypertrophy"
                    description="Hypertrophied nerve trunks in aganglionic segment"
                    color="bg-yellow-500/20 text-yellow-400"
                  />
                  <IconDiagram
                    icon={<Activity className="w-5 h-5" />}
                    label="Transition Zone"
                    description="Gradual decrease in ganglion cells; sampling critical"
                    color="bg-primary-500/20 text-primary-400"
                  />
                </div>

                <Callout type="info" title="Diagnosis" className="mt-4">
                  Requires demonstration of absent ganglion cells on adequate biopsy.
                  Calretinin IHC can help (absent in aganglionic segment).
                </Callout>
              </ContentSection>
            </div>
          </TabsContent>

          <TabsContent value="liver">
            <div className="space-y-6">
              <ContentSection title="Neonatal Hepatitis Pattern" icon={<Pill className="w-5 h-5" />}>
                <p className="mb-4">
                  A pattern of liver injury in neonates; not a specific diagnosis. Requires workup.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-secondary/50 rounded-lg">
                    <h4 className="font-medium text-foreground mb-2">Histologic Features</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Giant cell transformation of hepatocytes</li>
                      <li>• Cholestasis (canalicular, hepatocellular)</li>
                      <li>• Lobular inflammation</li>
                      <li>• Extramedullary hematopoiesis</li>
                      <li>• Periportal fibrosis (variable)</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-secondary/50 rounded-lg">
                    <h4 className="font-medium text-foreground mb-2">Differential</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Biliary atresia</li>
                      <li>• Alpha-1 antitrypsin deficiency</li>
                      <li>• Infections (CMV, herpes)</li>
                      <li>• Metabolic disorders</li>
                      <li>• Idiopathic</li>
                    </ul>
                  </div>
                </div>
              </ContentSection>

              <ContentSection title="Biliary Atresia" icon={<Pill className="w-5 h-5" />}>
                <p className="mb-4">
                  Progressive fibro-obliterative disease of extrahepatic bile ducts. Surgical emergency.
                </p>

                <DiagramBox title="Key Histologic Features" className="mb-4">
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-primary-500"></span>
                      <span>Ductular reaction (bile duct proliferation)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-primary-500"></span>
                      <span>Portal fibrosis with bile plugs in ductules</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-primary-500"></span>
                      <span>Bile plugs in canaliculi</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-primary-500"></span>
                      <span>Giant cell transformation (less prominent than idiopathic)</span>
                    </li>
                  </ul>
                </DiagramBox>

                <Callout type="warning" title="Time Critical" className="mt-4">
                  Kasai portoenterostomy must be performed before 60-90 days for best outcomes.
                  Distinguishing biliary atresia from other causes of cholestasis is crucial.
                </Callout>
              </ContentSection>

              <ContentSection title="Storage Diseases" icon={<Pill className="w-5 h-5" />}>
                <InfoTable
                  headers={['Disease', 'Defect', 'Storage Material', 'Liver Findings']}
                  rows={[
                    ['Gaucher', 'Glucocerebrosidase', 'Glucocerebroside', 'Gaucher cells (wrinkled tissue paper)'],
                    ['Niemann-Pick', 'Sphingomyelinase', 'Sphingomyelin', 'Foam cells'],
                    ['Glycogen storage (I, III, IV)', 'Various', 'Glycogen', 'Hepatomegaly, steatosis, fibrosis'],
                    ['Wolman', 'Lysosomal acid lipase', 'Cholesterol esters', 'Foamy hepatocytes, adrenal calcification'],
                  ]}
                />
              </ContentSection>
            </div>
          </TabsContent>

          <TabsContent value="renal">
            <div className="space-y-6">
              <ContentSection title="Nephrogenic Rests" icon={<Droplets className="w-5 h-5" />}>
                <p className="mb-4">
                  Persistent embryonal renal tissue; precursor lesions for Wilms tumor.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-primary-500/10 rounded-lg">
                    <h4 className="font-medium text-primary-400 mb-2">Perilobar Nephrogenic Rests</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Peripheral location (cortex)</li>
                      <li>• Sharp borders</li>
                      <li>• Associated with Beckwith-Wiedemann</li>
                      <li>• Higher risk if bilateral</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-accent-500/10 rounded-lg">
                    <h4 className="font-medium text-accent-400 mb-2">Intralobar Nephrogenic Rests</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Random location within lobe</li>
                      <li>• Irregular borders</li>
                      <li>• Associated with WAGR, Denys-Drash</li>
                      <li>• Higher stromal component</li>
                    </ul>
                  </div>
                </div>
              </ContentSection>

              <ContentSection title="Cystic Kidney Diseases" icon={<Droplets className="w-5 h-5" />}>
                <InfoTable
                  headers={['Disease', 'Inheritance', 'Age at Presentation', 'Key Features']}
                  rows={[
                    ['ARPKD', 'AR (PKHD1)', 'Neonatal/childhood', 'Fusiform collecting duct cysts, hepatic fibrosis'],
                    ['ADPKD', 'AD (PKD1/2)', 'Adult (can present in children)', 'Variable-sized cysts, any nephron segment'],
                    ['MCDK', 'Sporadic', 'Neonatal', 'Non-functional, grapelike cysts'],
                    ['Nephronophthisis', 'AR', 'Childhood', 'Corticomedullary cysts, tubulointerstitial fibrosis'],
                  ]}
                />

                <Callout type="info" title="ARPKD vs ADPKD" className="mt-4">
                  ARPKD shows radially oriented fusiform cysts in collecting ducts with
                  associated congenital hepatic fibrosis. ADPKD shows variably sized
                  cysts throughout the kidney with less hepatic involvement.
                </Callout>
              </ContentSection>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
