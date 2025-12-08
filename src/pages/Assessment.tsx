import { useState } from 'react'
import { ClipboardCheck, CheckCircle, XCircle, RotateCcw } from 'lucide-react'
import { PageHeader } from '../components/PageHeader'
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card'
import { Button } from '../components/ui/Button'
import { Badge } from '../components/ui/Badge'
import { Callout } from '../components/Callout'
import { cn } from '../lib/utils'

interface Question {
  id: string
  category: string
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
}

const questions: Question[] = [
  {
    id: 'q1',
    category: 'SRBCT',
    question: 'A 3-year-old presents with an abdominal mass. Histology shows a triphasic tumor with blastemal, epithelial (tubular), and stromal components. The blastema is positive for WT1. What is the most likely diagnosis?',
    options: ['Neuroblastoma', 'Wilms tumor', 'Rhabdomyosarcoma', 'Clear cell sarcoma of kidney'],
    correctAnswer: 1,
    explanation: 'The triphasic pattern (blastema, epithelium, stroma) with WT1-positive blastema is classic for Wilms tumor. Neuroblastoma would show rosettes and neural markers. RMS shows muscle differentiation. CCSK has a vascular pattern.',
  },
  {
    id: 'q2',
    category: 'SRBCT',
    question: 'Which IHC marker is most specific for Ewing sarcoma?',
    options: ['CD99', 'FLI1', 'NKX2.2', 'Vimentin'],
    correctAnswer: 2,
    explanation: 'NKX2.2 is highly specific for Ewing sarcoma. CD99 is sensitive but not specific (also positive in lymphoblastic lymphoma, synovial sarcoma). FLI1 is positive in Ewing but also in vascular tumors. Vimentin is non-specific.',
  },
  {
    id: 'q3',
    category: 'SRBCT',
    question: 'Homer-Wright rosettes with central neuropil are characteristic of which tumor?',
    options: ['Wilms tumor', 'Ewing sarcoma', 'Neuroblastoma', 'Retinoblastoma'],
    correctAnswer: 2,
    explanation: 'Homer-Wright rosettes with central fibrillary neuropil are characteristic of neuroblastoma. Retinoblastoma shows Flexner-Wintersteiner rosettes (true lumen). Wilms and Ewing do not typically form rosettes.',
  },
  {
    id: 'q4',
    category: 'Liver',
    question: 'A 1-year-old has a liver mass with AFP >50,000 ng/mL. Histology shows small uniform cells in thin trabeculae with alternating light and dark cells. What is the diagnosis?',
    options: ['Hepatocellular carcinoma', 'Hepatoblastoma, fetal type', 'Undifferentiated embryonal sarcoma', 'Mesenchymal hamartoma'],
    correctAnswer: 1,
    explanation: 'The description of small uniform cells in thin trabeculae with alternating light/dark cells (glycogen content) is classic for fetal-type hepatoblastoma. Very high AFP supports hepatoblastoma. HCC is rare in infants. UES occurs in older children.',
  },
  {
    id: 'q5',
    category: 'Neonatal',
    question: 'A premature infant (28 weeks) dies on day 2 of life. Autopsy shows eosinophilic membranes lining alveolar ducts. What is this finding?',
    options: ['Meconium aspiration', 'Congenital pneumonia', 'Hyaline membrane disease', 'Pulmonary interstitial glycogenosis'],
    correctAnswer: 2,
    explanation: 'Hyaline membranes lining alveolar ducts in a premature infant is classic for hyaline membrane disease (RDS) due to surfactant deficiency. Meconium aspiration shows pigmented material. Pneumonia shows inflammation.',
  },
  {
    id: 'q6',
    category: 'Soft Tissue',
    question: 'A congenital soft tissue mass in an infant shows a cellular spindle cell proliferation with herringbone pattern and ETV6-NTRK3 fusion. What is the expected prognosis?',
    options: ['Poor (most die within 1 year)', 'Intermediate (50% survival)', 'Good (>90% survival)', 'Variable depending on site'],
    correctAnswer: 2,
    explanation: 'Infantile fibrosarcoma (ETV6-NTRK3 fusion positive) has an excellent prognosis (>90% survival) despite its aggressive histologic appearance. Complete resection is often curative, and NTRK inhibitors are available for unresectable cases.',
  },
  {
    id: 'q7',
    category: 'SRBCT',
    question: 'A muscle marker that shows diffuse strong nuclear staining in alveolar rhabdomyosarcoma is:',
    options: ['Desmin', 'Myogenin', 'Actin', 'CD34'],
    correctAnswer: 1,
    explanation: 'Myogenin shows diffuse strong nuclear staining in alveolar RMS, while embryonal RMS typically shows weaker, patchy staining. Desmin is cytoplasmic and sensitive but not specific. Actin is less specific. CD34 is not a muscle marker.',
  },
  {
    id: 'q8',
    category: 'Molecular',
    question: 'Which molecular finding indicates poor prognosis in neuroblastoma?',
    options: ['Hyperdiploidy', 'MYCN amplification', 'NTRK fusion', 'Schwannian stroma'],
    correctAnswer: 1,
    explanation: 'MYCN amplification is the most important adverse prognostic factor in neuroblastoma. Hyperdiploidy is favorable. NTRK fusions are rare in neuroblastoma. Schwannian stroma indicates differentiation (favorable).',
  },
  {
    id: 'q9',
    category: 'Perinatal',
    question: 'A stillborn shows bilateral renal agenesis. What associated finding would you expect in the lungs?',
    options: ['Hyaline membranes', 'Pulmonary hypoplasia', 'Meconium aspiration', 'Congenital pneumonia'],
    correctAnswer: 1,
    explanation: 'Bilateral renal agenesis leads to oligohydramnios and Potter sequence, which includes pulmonary hypoplasia (the major cause of death). The lungs are small and immature due to lack of amniotic fluid for fetal breathing movements.',
  },
  {
    id: 'q10',
    category: 'Pitfalls',
    question: 'Which of the following is a common pitfall in pediatric pathology?',
    options: ['Mistaking immature tissue for malignancy', 'Over-relying on molecular studies', 'Using too many IHC stains', 'Ignoring clinical history'],
    correctAnswer: 0,
    explanation: 'A major pitfall is mistaking normal immature/developing tissue for malignancy. Fetal liver hematopoiesis, nephrogenic zone, and immature lung can all appear hypercellular with high mitotic activity but are developmentally normal.',
  },
  {
    id: 'q11',
    category: 'IHC',
    question: 'Loss of INI1 (SMARCB1) nuclear staining is characteristic of which tumor?',
    options: ['Neuroblastoma', 'Wilms tumor', 'Rhabdoid tumor', 'Ewing sarcoma'],
    correctAnswer: 2,
    explanation: 'Rhabdoid tumors (renal, CNS/AT-RT, and extrarenal) characteristically show loss of nuclear INI1 staining due to SMARCB1 inactivation. The other tumors retain INI1 expression.',
  },
  {
    id: 'q12',
    category: 'CNS',
    question: 'A posterior fossa tumor in a child shows nuclear β-catenin positivity. Which molecular group of medulloblastoma does this indicate?',
    options: ['SHH-activated', 'WNT-activated', 'Group 3', 'Group 4'],
    correctAnswer: 1,
    explanation: 'Nuclear β-catenin positivity indicates WNT pathway activation, corresponding to the WNT-activated molecular group of medulloblastoma. This group has the best prognosis (>95% survival).',
  },
  {
    id: 'q13',
    category: 'Renal',
    question: 'Which renal tumor is associated with ETV6-NTRK3 fusion?',
    options: ['Wilms tumor', 'Clear cell sarcoma of kidney', 'Congenital mesoblastic nephroma (cellular type)', 'Rhabdoid tumor of kidney'],
    correctAnswer: 2,
    explanation: 'The cellular type of congenital mesoblastic nephroma has the same ETV6-NTRK3 fusion as infantile fibrosarcoma. This fusion is targetable with NTRK inhibitors. Classic CMN lacks this fusion.',
  },
  {
    id: 'q14',
    category: 'GI',
    question: 'What is the minimum eosinophil count per HPF needed for diagnosis of eosinophilic esophagitis?',
    options: ['5 eosinophils', '10 eosinophils', '15 eosinophils', '20 eosinophils'],
    correctAnswer: 2,
    explanation: 'The diagnostic threshold for eosinophilic esophagitis is ≥15 eosinophils per high-power field (peak count). This should be evaluated in the context of PPI trial to exclude GERD-related eosinophilia.',
  },
  {
    id: 'q15',
    category: 'Development',
    question: 'At what gestational age does the nephrogenic zone normally disappear?',
    options: ['24 weeks', '30 weeks', '36 weeks', '40 weeks'],
    correctAnswer: 2,
    explanation: 'The nephrogenic zone (subcapsular region of immature glomeruli) normally disappears by 36 weeks gestation, marking completion of nephrogenesis. Its persistence beyond this time may indicate developmental abnormality.',
  },
]

export default function Assessment() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [correctCount, setCorrectCount] = useState(0)
  const [, setAnsweredQuestions] = useState<Set<number>>(new Set())
  const [isComplete, setIsComplete] = useState(false)

  const question = questions[currentQuestion]

  const handleAnswer = (index: number) => {
    if (showResult) return
    setSelectedAnswer(index)
  }

  const handleSubmit = () => {
    if (selectedAnswer === null) return
    setShowResult(true)
    if (selectedAnswer === question.correctAnswer) {
      setCorrectCount((prev) => prev + 1)
    }
    setAnsweredQuestions((prev) => new Set([...prev, currentQuestion]))
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1)
      setSelectedAnswer(null)
      setShowResult(false)
    } else {
      setIsComplete(true)
    }
  }

  const handleRestart = () => {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setShowResult(false)
    setCorrectCount(0)
    setAnsweredQuestions(new Set())
    setIsComplete(false)
  }

  if (isComplete) {
    return (
      <div>
        <PageHeader
          title="Assessment Complete"
          description="Session results"
          icon={<ClipboardCheck className="w-6 h-6" />}
        />

        <div className="container mx-auto px-4 py-8">
          <Card className="max-w-lg mx-auto">
            <CardHeader>
              <CardTitle className="text-center">Session Results</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-6xl font-bold text-primary-500 mb-4">
                {correctCount}/{questions.length}
              </div>
              <p className="text-muted-foreground mb-6">
                You answered {correctCount} out of {questions.length} questions correctly this session.
              </p>
              <div className="mb-6">
                <Badge
                  variant={
                    correctCount / questions.length >= 0.8
                      ? 'success'
                      : correctCount / questions.length >= 0.6
                      ? 'warning'
                      : 'danger'
                  }
                  className="text-lg px-4 py-2"
                >
                  {correctCount / questions.length >= 0.8
                    ? 'Excellent!'
                    : correctCount / questions.length >= 0.6
                    ? 'Good effort!'
                    : 'Keep practicing!'}
                </Badge>
              </div>
              <Button onClick={handleRestart} className="flex items-center gap-2 mx-auto">
                <RotateCcw className="w-4 h-4" />
                Start New Session
              </Button>
            </CardContent>
          </Card>

          <Callout type="info" title="Session-Only Assessment" className="mt-8 max-w-lg mx-auto">
            Results are not saved between sessions. This assessment is for self-evaluation
            and educational purposes only.
          </Callout>
        </div>
      </div>
    )
  }

  return (
    <div>
      <PageHeader
        title="Assessment"
        description="Test your knowledge with pattern-based questions"
        icon={<ClipboardCheck className="w-6 h-6" />}
      />

      <div className="container mx-auto px-4 py-8">
        <Callout type="info" title="Session-Only Assessment">
          This assessment does not save scores. Results are displayed only for this session.
        </Callout>

        <div className="mt-8 max-w-3xl mx-auto">
          {/* Progress Bar */}
          <div className="mb-6">
            <div className="flex justify-between text-sm text-muted-foreground mb-2">
              <span>Question {currentQuestion + 1} of {questions.length}</span>
              <span>{correctCount} correct so far</span>
            </div>
            <div className="h-2 bg-secondary rounded-full overflow-hidden">
              <div
                className="h-full bg-primary-500 transition-all duration-300"
                style={{ width: `${((currentQuestion + (showResult ? 1 : 0)) / questions.length) * 100}%` }}
              />
            </div>
          </div>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="primary">{question.category}</Badge>
              </div>
              <CardTitle className="text-lg leading-relaxed">{question.question}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {question.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(index)}
                    disabled={showResult}
                    className={cn(
                      'w-full text-left p-4 rounded-lg border transition-all',
                      'hover:border-primary-500/50',
                      selectedAnswer === index && !showResult && 'border-primary-500 bg-primary-500/10',
                      showResult && index === question.correctAnswer && 'border-green-500 bg-green-500/10',
                      showResult && selectedAnswer === index && index !== question.correctAnswer && 'border-red-500 bg-red-500/10',
                      showResult && selectedAnswer !== index && index !== question.correctAnswer && 'opacity-50'
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-sm font-medium">
                        {String.fromCharCode(65 + index)}
                      </span>
                      <span>{option}</span>
                      {showResult && index === question.correctAnswer && (
                        <CheckCircle className="w-5 h-5 text-green-500 ml-auto" />
                      )}
                      {showResult && selectedAnswer === index && index !== question.correctAnswer && (
                        <XCircle className="w-5 h-5 text-red-500 ml-auto" />
                      )}
                    </div>
                  </button>
                ))}
              </div>

              {showResult && (
                <div className="mt-6 p-4 bg-secondary/50 rounded-lg">
                  <h4 className="font-medium text-foreground mb-2">Explanation</h4>
                  <p className="text-sm text-muted-foreground">{question.explanation}</p>
                </div>
              )}

              <div className="mt-6 flex justify-end gap-3">
                {!showResult ? (
                  <Button onClick={handleSubmit} disabled={selectedAnswer === null}>
                    Submit Answer
                  </Button>
                ) : (
                  <Button onClick={handleNext}>
                    {currentQuestion < questions.length - 1 ? 'Next Question' : 'See Results'}
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
