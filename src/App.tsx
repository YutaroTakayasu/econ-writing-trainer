import { useMemo, useState } from "react"
import { papers } from "./data/papers"
import { evaluateDraft } from "./lib/evaluate"

function App() {
  const [paperIndex, setPaperIndex] = useState(0)
  const [draft, setDraft] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const currentPaper = papers[paperIndex]

  const feedback = useMemo(
  () => evaluateDraft(draft, currentPaper.taskType),
  [draft, currentPaper.taskType]
)

  const goToNextPaper = () => {
    const nextIndex = (paperIndex + 1) % papers.length
    setPaperIndex(nextIndex)
    setDraft("")
    setSubmitted(false)
  }

  return (
    <main
      style={{
        maxWidth: "1000px",
        margin: "0 auto",
        padding: "40px 20px",
        fontFamily: "Arial, sans-serif",
        lineHeight: 1.6,
      }}
    >
      <h1>Economics Writing Trainer</h1>
      <p>Practice introductions and results writing for economics papers.</p>

      <section
        style={{
          marginTop: "32px",
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "12px",
        }}
      >
        <h2>Sample Paper</h2>
        <p>
          <strong>Title:</strong> {currentPaper.title}
        </p>
        <p>
          <strong>Authors:</strong> {currentPaper.authors}
        </p>
        <p>
          <strong>Year:</strong> {currentPaper.year}
        </p>
        <p>
          <strong>Field:</strong> {currentPaper.field}
        </p>
	<p>
  	  <strong>Task Type:</strong> {currentPaper.taskType}
	</p>

        <div style={{ marginTop: "16px" }}>
          <button
            onClick={goToNextPaper}
            style={{
              padding: "10px 16px",
              fontSize: "16px",
              borderRadius: "8px",
              border: "1px solid #999",
              cursor: "pointer",
            }}
          >
            Next Paper
          </button>
        </div>
      </section>

      <section
        style={{
          marginTop: "24px",
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "12px",
        }}
      >
        <h2>Writing Task</h2>
        <p>{currentPaper.task}</p>
        <ul>
          {currentPaper.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </section>

      <section
        style={{
          marginTop: "24px",
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "12px",
        }}
      >
        <h2>Your Draft</h2>
        <textarea
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          placeholder="Write here..."
          rows={12}
          style={{
            width: "100%",
            padding: "12px",
            fontSize: "16px",
            borderRadius: "8px",
            border: "1px solid #bbb",
            boxSizing: "border-box",
          }}
        />

        <div style={{ marginTop: "16px" }}>
          <button
            onClick={() => setSubmitted(true)}
            style={{
              padding: "10px 16px",
              fontSize: "16px",
              borderRadius: "8px",
              border: "1px solid #999",
              cursor: "pointer",
            }}
          >
            Evaluate Draft
          </button>
        </div>
      </section>

      <section
        style={{
          marginTop: "24px",
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "12px",
          backgroundColor: "#f8f8f8",
        }}
      >
        <h2>Feedback Preview</h2>

        {!submitted ? (
          <p>Click “Evaluate Draft” to see feedback.</p>
        ) : (
          <>
            <p>
              <strong>Score:</strong> {feedback.score} / 100
            </p>
            <ul>
              {feedback.comments.map((comment) => (
                <li key={comment}>{comment}</li>
              ))}
            </ul>
          </>
        )}
      </section>
    </main>
  )
}

export default App