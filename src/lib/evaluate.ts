export type TaskType = "intro" | "results"

export type EvaluationResult = {
  score: number
  comments: string[]
}

export function evaluateDraft(
  draft: string,
  taskType: TaskType
): EvaluationResult {
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

  if (taskType === "intro") {
    if (
      lower.includes("this paper") ||
      lower.includes("we study") ||
      lower.includes("we examine")
    ) {
      score += 25
      comments.push("You state the research question in an intro-style way.")
    } else {
      comments.push("Make the introduction more explicit about the research question.")
    }

    if (
      lower.includes("instrument") ||
      lower.includes("identification") ||
      lower.includes("institutions") ||
      lower.includes("strategy")
    ) {
      score += 25
      comments.push("You preview the empirical strategy or mechanism.")
    } else {
      comments.push("Add a brief preview of the method or mechanism.")
    }

    if (
      lower.includes("earnings") ||
      lower.includes("schooling") ||
      lower.includes("education") ||
      lower.includes("development") ||
      lower.includes("income")
    ) {
      score += 25
      comments.push("The introduction is tied to a concrete economic outcome.")
    } else {
      comments.push("Name the main economic outcome more explicitly.")
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
      comments.push("You lead with the main empirical finding.")
    } else {
      comments.push("Start the paragraph with the main result more directly.")
    }

    if (
      lower.includes("increase") ||
      lower.includes("decrease") ||
      lower.includes("higher") ||
      lower.includes("lower") ||
      lower.includes("effect")
    ) {
      score += 25
      comments.push("You interpret the sign or direction of the result.")
    } else {
      comments.push("Explain whether the estimated effect is positive or negative.")
    }

    if (
      lower.includes("significant") ||
      lower.includes("statistically") ||
      lower.includes("magnitude") ||
      lower.includes("economically")
    ) {
      score += 25
      comments.push("You discuss significance or magnitude.")
    } else {
      comments.push("Comment on statistical or economic significance.")
    }
  }

  return { score, comments }
}