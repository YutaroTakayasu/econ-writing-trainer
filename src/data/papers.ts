export type Paper = {
  title: string
  authors: string
  year: number
  field: string
  taskType: "intro" | "results"
  task: string
  points: string[]
  excerpt: string
}

export const papers: Paper[] = [
  {
    title: "Does Compulsory School Attendance Affect Schooling and Earnings?",
    authors: "Joshua D. Angrist and Alan B. Krueger",
    year: 1991,
    field: "Labor Economics",
    taskType: "intro",
    task: "Write a 4–6 sentence introduction opening for this paper.",
    points: [
      "State the broad motivation clearly.",
      "Explain the research question.",
      "Briefly preview the identification strategy.",
    ],
    excerpt:
      "Good economics introductions usually motivate why education matters for labor-market outcomes, state the causal question precisely, and briefly preview the empirical strategy.",
  },
  {
    title: "Colonial Origins of Comparative Development",
    authors: "Daron Acemoglu, Simon Johnson, and James A. Robinson",
    year: 2001,
    field: "Political Economy",
    taskType: "intro",
    task: "Write a 4–6 sentence introduction opening for this paper.",
    points: [
      "Explain why long-run development differences matter.",
      "State the main research question clearly.",
      "Briefly preview the institutional argument.",
    ],
    excerpt:
      "A strong opening here would highlight persistent cross-country income differences, introduce the institutional explanation, and indicate why historical variation helps identify long-run effects.",
  },
  {
    title: "The Colonial Origins of Comparative Development: An Empirical Investigation",
    authors: "Daron Acemoglu, Simon Johnson, and James A. Robinson",
    year: 2001,
    field: "Economic History / Development",
    taskType: "results",
    task: "Write a short results paragraph describing the main finding.",
    points: [
      "State the main result first.",
      "Interpret the sign and magnitude.",
      "Avoid overclaiming beyond the evidence.",
    ],
    excerpt:
      "A good results paragraph should begin with the central empirical finding, describe the direction and practical size of the effect, and then comment carefully on significance without overstating causality.",
  },
]