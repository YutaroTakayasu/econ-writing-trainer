export type TaskType = "intro" | "results"

export type EvaluationResult = {
  score: number
  strengths: string[]
  improvements: string[]
}

export function evaluateDraft(
  draft: string,
  taskType: TaskType
): EvaluationResult {
  const text = draft.trim()
  const lower = text.toLowerCase()
  const wordCount = text === "" ? 0 : text.split(/\s+/).length

  let score = 0
  const strengths: string[] = []
  const improvements: string[] = []

  if (wordCount >= 60) {
    score += 25
    strengths.push("Length looks reasonable for a short economics paragraph.")
  } else {
    improvements.push("The draft is still short. Add more complete sentences.")
  }

  if (taskType === "intro") {
    if (
      lower.includes("this paper") ||
      lower.includes("we study") ||
      lower.includes("we examine")
    ) {
      score += 25
      strengths.push("You state the research question in an intro-style way.")
    } else {
      improvements.push(
        "Make the introduction more explicit about the research question."
      )
    }

    if (
      lower.includes("instrument") ||
      lower.includes("identification") ||
      lower.includes("institutions") ||
      lower.includes("strategy")
    ) {
      score += 25
      strengths.push("You preview the empirical strategy or mechanism.")
    } else {
      improvements.push("Add a brief preview of the method or mechanism.")
    }

    if (
      lower.includes("earnings") ||
      lower.includes("schooling") ||
      lower.includes("education") ||
      lower.includes("development") ||
      lower.includes("income")
    ) {
      score += 25
      strengths.push("The introduction is tied to a concrete economic outcome.")
    } else {
      improvements.push("Name the main economic outcome more explicitly.")
    }
  }

  if (taskType === "results") {
    if (
      lower.includes("we find") ||
      lower.includes("we show") ||
      lower.includes("the results show") ||
      lower.includes("our estimates")
    ) {
      score += 25
      strengths.push("You lead with the main empirical finding.")
    } else {
      improvements.push("Start the paragraph with the main result more directly.")
    }

    if (
      lower.includes("increase") ||
      lower.includes("decrease") ||
      lower.includes("higher") ||
      lower.includes("lower") ||
      lower.includes("effect")
    ) {
      score += 25
      strengths.push("You interpret the sign or direction of the result.")
    } else {
      improvements.push("Explain whether the estimated effect is positive or negative.")
    }

    if (
      lower.includes("significant") ||
      lower.includes("statistically") ||
      lower.includes("magnitude") ||
      lower.includes("economically")
    ) {
      score += 25
      strengths.push("You discuss significance or magnitude.")
    } else {
      improvements.push("Comment on statistical or economic significance.")
    }
  }

  return { score, strengths, improvements }
}