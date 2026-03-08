export type Paper = {
  title: string
  authors: string
  year: number
  field: string
  journal: string
  license: string
  sourceUrl: string
  taskType: "intro" | "results"
  task: string
  points: string[]
  excerpt: string
}

export const papers: Paper[] = [
  {
    title: "The effects of leaving the EU on the geography of UK trade",
    authors: "Michael Gasiorek and Nicolò Tamberi",
    year: 2023,
    field: "Trade / Applied Micro",
    journal: "Economic Policy",
    license: "CC BY 4.0",
    sourceUrl: "https://academic.oup.com/economicpolicy/article/38/116/707/7146499",
    taskType: "intro",
    task: "Write a 4–6 sentence introduction opening for this paper.",
    points: [
      "Motivate why Brexit is a useful setting for studying trade barriers.",
      "State the research question clearly.",
      "Briefly preview the empirical design and comparison.",
    ],
    excerpt:
      "A strong opening here should explain why the Brexit referendum and the TCA created a clean setting to study changes in trade costs, then state that the paper compares UK–EU trade with suitable counterfactual flows using quasi-experimental methods.",
  },
  {
    title: "Adverse effects of place-based policies?",
    authors: "Hans R.A. Koster and Jos van Ommeren",
    year: 2023,
    field: "Urban Economics / Public Economics",
    journal: "Economic Policy",
    license: "CC BY 4.0",
    sourceUrl: "https://academic.oup.com/economicpolicy/article/38/114/289/55147631/eiac039.pdf",
    taskType: "intro",
    task: "Write a 4–6 sentence introduction opening for this paper.",
    points: [
      "Explain why place-based policies are often expected to improve neighbourhoods.",
      "State the underexplored downside clearly.",
      "Preview the paper's identification idea.",
    ],
    excerpt:
      "A good introduction should contrast the intended benefits of place-based policy with the possibility of stigma effects, then make clear that the paper uses local discontinuities in exposure to identify how policy announcements affect housing outcomes.",
  },
  {
    title: "Cash Transfers and Social Capital: Evidence from a Randomized Controlled Trial in Malawi",
    authors: "Hiwot Mesfin and Francesco Cecchi",
    year: 2024,
    field: "Development Economics",
    journal: "Journal of African Economies",
    license: "CC BY 4.0",
    sourceUrl: "https://academic.oup.com/jae/article/33/4/411/7242549",
    taskType: "results",
    task: "Write a short results paragraph describing the main finding.",
    points: [
      "State the main finding first.",
      "Explain what outcome changes and in which direction.",
      "Mention short-run versus long-run differences carefully.",
    ],
    excerpt:
      "A clear results paragraph would say upfront that cash transfers increase some measures of social capital on average, then separate short-run from long-run effects and avoid making the findings sound more uniform than they are.",
  },
  {
    title: "Local income inequality and product variety: empirical evidence",
    authors: "Dieter Pennerstorfer, Nora Schindler, and Biliana Yontcheva",
    year: 2025,
    field: "Urban / Industrial Organization",
    journal: "Journal of Economic Geography",
    license: "CC BY 4.0",
    sourceUrl: "https://academic.oup.com/joeg/article/25/3/427/7951409",
    taskType: "results",
    task: "Write a short results paragraph describing the main finding.",
    points: [
      "Lead with the main empirical relationship.",
      "Interpret what higher inequality implies for market variety.",
      "Be careful not to overclaim causality.",
    ],
    excerpt:
      "The ideal paragraph here begins by saying that more unequal local markets tend to offer greater product variety, then explains which dimensions of variety move, and finally notes that the paper is cautious about causal interpretation.",
  },
  {
    title: "The Intergenerational Transmission of Welfare Dependency",
    authors: "Monique De Haan and Ragnhild C. Schreiner",
    year: 2025,
    field: "Public Economics / Labor Economics",
    journal: "The Economic Journal",
    license: "CC BY 4.0",
    sourceUrl: "https://academic.oup.com/ej/article/135/669/1609/8030529",
    taskType: "intro",
    task: "Write a 4–6 sentence introduction opening for this paper.",
    points: [
      "Start from the broader policy relevance of welfare persistence.",
      "Distinguish correlation from causal transmission.",
      "Preview the paper's contribution on bounds and heterogeneity.",
    ],
    excerpt:
      "A good intro should begin with concern about persistent welfare dependence across generations, then stress that observed parent-child correlations may reflect selection rather than causation, and finally state that the paper estimates informative causal bounds using rich administrative data.",
  },
  {
    title: "The Impact of Higher Education on Employer Perceptions",
    authors: "Renske Stans, Laura Ehrmantraut, Malin Siemers, and Pia Pinger",
    year: 2026,
    field: "Education / Labor Economics",
    journal: "The Economic Journal",
    license: "CC BY 4.0",
    sourceUrl: "https://academic.oup.com/ej/article/136/674/602/8241350",
    taskType: "results",
    task: "Write a short results paragraph describing the main finding.",
    points: [
      "State what employers value first.",
      "Explain the experiment or comparison briefly.",
      "Interpret the findings in terms of signalling or beliefs.",
    ],
    excerpt:
      "A strong results paragraph should immediately say how degree completion changes employer perceptions, then connect that result to the underlying survey-experimental comparison and interpret whether the evidence supports a signalling channel.",
  },
  {
    title: "The Child Penalty Atlas",
    authors: "Henrik Kleven, Camille Landais, and Gabriel Leite-Mariante",
    year: 2025,
    field: "Labor Economics / Comparative Development",
    journal: "The Review of Economic Studies",
    license: "CC BY 4.0",
    sourceUrl: "https://academic.oup.com/restud/article/92/5/3174/7840285",
    taskType: "intro",
    task: "Write a 4–6 sentence introduction opening for this paper.",
    points: [
      "Explain why child penalties matter for gender inequality.",
      "State the gap in cross-country evidence.",
      "Preview the paper's global data contribution.",
    ],
    excerpt:
      "A compelling opening should frame child penalties as central to understanding gender inequality, then note that most evidence comes from a narrow set of countries, and finally highlight that the paper builds a global atlas using harmonised microdata and event-study logic.",
  },
  {
    title: "Can wage transparency alleviate gender sorting in the labour market?",
    authors: "Omar Bamieh and Lennart Ziegler",
    year: 2025,
    field: "Labor Economics",
    journal: "Economic Policy",
    license: "CC BY 4.0",
    sourceUrl: "https://academic.oup.com/economicpolicy/article/40/122/401/7658422",
    taskType: "results",
    task: "Write a short results paragraph describing the main finding.",
    points: [
      "State the policy and the main null or positive result clearly.",
      "Interpret the magnitude where possible.",
      "Keep the distinction between sorting and pay levels clear.",
    ],
    excerpt:
      "The right paragraph here starts with the policy experiment—mandatory wage posting—and then states clearly that the reform does not materially reduce gender sorting into better-paying jobs, even though the underlying gender gap remains substantial.",
  },
  {
    title: "Gender-Specific Application Behaviour, Matching, and the Residual Gender Earnings Gap",
    authors: "Benjamin Lochner and Christian Merkl",
    year: 2026,
    field: "Labor Economics",
    journal: "The Economic Journal",
    license: "CC BY 4.0",
    sourceUrl: "https://academic.oup.com/ej/article/136/673/97/8152905",
    taskType: "results",
    task: "Write a short results paragraph describing the main finding.",
    points: [
      "Lead with the key labour-market mechanism.",
      "Describe what women and men apply to or match with differently.",
      "Connect the result to the residual earnings gap.",
    ],
    excerpt:
      "A good results paragraph should begin by stating that application behaviour and firm flexibility requirements help explain part of the remaining gender earnings gap, then describe the sorting pattern precisely and keep the mechanism front and centre.",
  },
  {
    title: "Who's Afraid of Policy Experiments?",
    authors: "Robert Dur, Arjan Non, Paul Prottung, and Benedetta Ricci",
    year: 2025,
    field: "Political Economy / Public Economics",
    journal: "The Economic Journal",
    license: "CC BY 4.0",
    sourceUrl: "https://academic.oup.com/ej/article/135/666/538/7825862",
    taskType: "intro",
    task: "Write a 4–6 sentence introduction opening for this paper.",
    points: [
      "Motivate why policy experimentation matters for public decision-making.",
      "State the puzzle about why experiments are not used more often.",
      "Preview the voter and politician survey evidence.",
    ],
    excerpt:
      "A strong introduction should explain that randomized policy experiments can improve policy design but remain underused, then pose the possibility that voter attitudes constrain politicians, and finally preview the paper's survey and survey-experimental evidence on that mechanism.",
  },
]