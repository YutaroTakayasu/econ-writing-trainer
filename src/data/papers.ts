export type Paper = {
  title: string
  authors: string
  year: number
  field: string
  taskType: "intro" | "results"
  task: string
  points: string[]
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
  },
]