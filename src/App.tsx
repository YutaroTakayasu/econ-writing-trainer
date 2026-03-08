import { useMemo, useState } from "react"
import { papers } from "./data/papers"
import { evaluateDraft } from "./lib/evaluate"

function App() {
  const [paperIndex, setPaperIndex] = useState(0)
  const [draft, setDraft] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [showExcerpt, setShowExcerpt] = useState(false)

  const currentPaper = papers[paperIndex]

  const wordCount = draft.trim() === "" ? 0 : draft.trim().split(/\s+/).length

  const feedback = useMemo(
    () => evaluateDraft(draft, currentPaper.taskType),
    [draft, currentPaper.taskType]
  )

  const goToNextPaper = () => {
    const nextIndex = (paperIndex + 1) % papers.length
    setPaperIndex(nextIndex)
    setDraft("")
    setSubmitted(false)
    setShowExcerpt(false)
  }
  const goToRandomPaper = () => {
  if (papers.length <= 1) return

  let nextIndex = paperIndex

  while (nextIndex === paperIndex) {
    nextIndex = Math.floor(Math.random() * papers.length)
  }

  setPaperIndex(nextIndex)
  setDraft("")
  setSubmitted(false)
  setShowExcerpt(false)
  }

  return (
    <main
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "32px 20px 48px",
        fontFamily: "Arial, sans-serif",
        lineHeight: 1.6,
        color: "#222",
      }}
    >
      <header style={{ marginBottom: "24px" }}>
        <h1 style={{ marginBottom: "8px" }}>Economics Writing Trainer</h1>
        <p style={{ margin: 0 }}>
          Practice introductions and results writing for economics papers.
        </p>
      </header>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.2fr",
          gap: "24px",
          alignItems: "start",
        }}
      >
        <div>
          <section
            style={{
              padding: "20px",
              border: "1px solid #ccc",
              borderRadius: "12px",
              backgroundColor: "#fff",
            }}
          >
            <h2 style={{ marginTop: 0 }}>Sample Paper</h2>
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

            <div style={{ marginTop: "16px", display: "flex", gap: "12px", flexWrap: "wrap" }}>
  <button
    onClick={goToNextPaper}
    style={{
      padding: "10px 16px",
      fontSize: "16px",
      borderRadius: "8px",
      border: "1px solid #999",
      cursor: "pointer",
      backgroundColor: "#fff",
    }}
  >
    Next Paper
  </button>

  <button
    onClick={goToRandomPaper}
    style={{
      padding: "10px 16px",
      fontSize: "16px",
      borderRadius: "8px",
      border: "1px solid #999",
      cursor: "pointer",
      backgroundColor: "#fff",
    }}
  >
    Random Paper
  </button>
</div>
          </section>

          <section
            style={{
              marginTop: "20px",
              padding: "20px",
              border: "1px solid #ccc",
              borderRadius: "12px",
              backgroundColor: "#fff",
            }}
          >
            <h2 style={{ marginTop: 0 }}>Writing Task</h2>
            <p>{currentPaper.task}</p>
            <ul style={{ paddingLeft: "20px", marginBottom: 0 }}>
              {currentPaper.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </section>

          <section
            style={{
              marginTop: "20px",
              padding: "20px",
              border: "1px solid #ccc",
              borderRadius: "12px",
              backgroundColor: "#f9f9ff",
            }}
          >
            <h2 style={{ marginTop: 0 }}>Model Excerpt</h2>

            <button
              onClick={() => setShowExcerpt((prev) => !prev)}
              style={{
                padding: "10px 16px",
                fontSize: "16px",
                borderRadius: "8px",
                border: "1px solid #999",
                cursor: "pointer",
                marginBottom: "12px",
                backgroundColor: "#fff",
              }}
            >
              {showExcerpt ? "Hide Excerpt" : "Show Excerpt"}
            </button>

            {showExcerpt ? (
              <p style={{ marginBottom: 0 }}>{currentPaper.excerpt}</p>
            ) : (
              <p style={{ marginBottom: 0 }}>
                The model excerpt is hidden. Try writing first, then reveal it.
              </p>
            )}
          </section>
        </div>

        <div>
          <section
            style={{
              padding: "20px",
              border: "1px solid #ccc",
              borderRadius: "12px",
              backgroundColor: "#fff",
            }}
          >
            <h2 style={{ marginTop: 0 }}>Your Draft</h2>
            <textarea
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              placeholder="Write here..."
              rows={16}
              style={{
                width: "100%",
                padding: "12px",
                fontSize: "16px",
                borderRadius: "8px",
                border: "1px solid #bbb",
                boxSizing: "border-box",
                resize: "vertical",
              }}
            />
		
	   <p style={{ marginTop: "12px", marginBottom: 0 }}>
  	   <strong>Word count:</strong> {wordCount}
           </p>

            <div style={{ marginTop: "16px", display: "flex", gap: "12px" }}>
  	    <button
    	    onClick={() => setSubmitted(true)}
            style={{
      	    padding: "10px 16px",
      	    fontSize: "16px",
      	    borderRadius: "8px",
      	    border: "1px solid #999",
      	    cursor: "pointer",
      	    backgroundColor: "#fff",
    	    }}
  	    >
    	   Evaluate Draft
  	   </button>

  	   <button
    	   onClick={() => {
      	   setDraft("")
      	   setSubmitted(false)
    	   }}
    	   style={{
      	   padding: "10px 16px",
      	   fontSize: "16px",
      	   borderRadius: "8px",
      	   border: "1px solid #999",
      	   cursor: "pointer",
      	   backgroundColor: "#fff",
    	   }}
  	   >
    	   Clear Draft
  	   </button>
	  </div>
          </section>

          <section
            style={{
              marginTop: "20px",
              padding: "20px",
              border: "1px solid #ccc",
              borderRadius: "12px",
              backgroundColor: "#f8f8f8",
            }}
          >
            <h2 style={{ marginTop: 0 }}>Feedback Preview</h2>

            {!submitted ? (
              <p style={{ marginBottom: 0 }}>
                Click “Evaluate Draft” to see feedback.
              </p>
            ) : (
              <>
  <p>
    <strong>Score:</strong> {feedback.score} / 100
  </p>

  <div style={{ marginTop: "16px" }}>
    <h3 style={{ marginBottom: "8px" }}>Strengths</h3>
    {feedback.strengths.length === 0 ? (
      <p style={{ marginTop: 0 }}>No strengths identified yet.</p>
    ) : (
      <ul style={{ paddingLeft: "20px" }}>
        {feedback.strengths.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    )}
  </div>

  <div style={{ marginTop: "16px" }}>
    <h3 style={{ marginBottom: "8px" }}>Improvements</h3>
    {feedback.improvements.length === 0 ? (
      <p style={{ marginTop: 0 }}>No major improvements suggested.</p>
    ) : (
      <ul style={{ paddingLeft: "20px", marginBottom: 0 }}>
        {feedback.improvements.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    )}
  </div>
</>
            )}
          </section>
        </div>
      </div>
    </main>
  )
}

export default App