import { useMemo, useState } from "react"
import { papers } from "./data/papers"

function App() {
  const [paperIndex, setPaperIndex] = useState(0)
  const [draft, setDraft] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const currentPaper = papers[paperIndex]

  const feedback = useMemo(() => {
    const text = draft.trim()
    const lower = text.toLowerCase()
    const wordCount = text === "" ? 0 : text.split(/\s+/).length

    let score = 0
    const comments: string[] = []

    if (wordCount >= 60) {
      score += 25
      comments.push("Length looks reasonable for a short economics paragraph.")
    } else {
      comments.push("The draft is still short. Add more complete sentences.")
    }

    if (
      lower.includes("this paper") ||
      lower.includes("we study") ||
      lower.includes("we examine") ||
      lower.includes("we show")
    ) {
      score += 25
      comments.push("You use an economics-style sentence to frame the paper.")
    } else {
      comments.push("Try framing the paragraph with a clearer research statement.")
    }

    if (
      lower.includes("instrument") ||
      lower.includes("identification") ||
      lower.includes("institutions") ||
      lower.includes("quarter of birth") ||
      lower.includes("strategy")
    ) {
      score += 25
      comments.push("You preview a mechanism or identification idea.")
    } else {
      comments.push("Add a brief method, mechanism, or identification preview.")
    }

    if (
      lower.includes("earnings") ||
      lower.includes("schooling") ||
      lower.includes("education") ||
      lower.includes("development") ||
      lower.includes("income")
    ) {
      score += 25
      comments.push("The paragraph is tied to a concrete economic outcome.")
    } else {
      comments.push("Name the main economic outcome more explicitly.")
    }

    return { score, comments }
  }, [draft])

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