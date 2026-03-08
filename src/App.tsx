function App() {
  const samplePaper = {
    title: "Does Compulsory School Attendance Affect Schooling and Earnings?",
    authors: "Joshua D. Angrist and Alan B. Krueger",
    year: 1991,
    field: "Labor Economics",
    task: "Write a 4–6 sentence introduction opening for this paper.",
    points: [
      "State the broad motivation clearly.",
      "Explain the research question.",
      "Briefly preview the identification strategy.",
    ],
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
        <p><strong>Title:</strong> {samplePaper.title}</p>
        <p><strong>Authors:</strong> {samplePaper.authors}</p>
        <p><strong>Year:</strong> {samplePaper.year}</p>
        <p><strong>Field:</strong> {samplePaper.field}</p>
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
        <p>{samplePaper.task}</p>
        <ul>
          {samplePaper.points.map((point) => (
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
          placeholder="Write your introduction here..."
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
        <p>Score: Not evaluated yet</p>
        <p>Comments will appear here in the next step.</p>
      </section>
    </main>
  )
}

export default App