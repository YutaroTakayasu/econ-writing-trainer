export type EvaluationResult = {
  score: number
  comments: string[]
}

export function evaluateDraft(draft: string): EvaluationResult {
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
}