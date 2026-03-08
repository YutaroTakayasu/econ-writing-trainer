export type Paper = {
  title: string
  authors: string
  year: number
  field: string
  journal: string
  license: string
  sourceUrl: string
  abstract: string
  taskType: "intro" | "results"
  task: string
  points: string[]
  excerpt: string
}

export const papers: Paper[] = [
  {
    title: "Mandatory Notice of Layoff, Job Search, and Efficiency",
    authors: "Joakim Cederlöf, Peter Fredriksson, and Nemo Obstbaum",
    year: 2025,
    field: "Labor Economics",
    journal: "The Quarterly Journal of Economics",
    license: "CC BY 4.0",
    sourceUrl: "https://academic.oup.com/qje/article/140/1/585/7810272",
    abstract:
      "This paper studies mandatory advance notice of layoff using Swedish administrative data. The core question is whether earlier information helps workers search more effectively and improves labor-market efficiency without imposing offsetting production losses.",
    taskType: "intro",
    task: "Write a 4–6 sentence introduction opening for this paper.",
    points: [
      "Motivate why notice periods matter for labor-market efficiency.",
      "State the research question in causal terms.",
      "Briefly preview the empirical setting and comparison.",
    ],
    excerpt:
      "A strong introduction should frame layoff notice as an information policy, not just a worker protection rule. It should then explain that the paper uses quasi-experimental variation in notice length to study job search, wages, and efficiency.",
  },
  {
    title:
      "Long-Run Impacts of Public Industrial Investment on Local Development and Economic Mobility",
    authors: "Andy Garin and Justin R. Pierce",
    year: 2025,
    field: "Economic History / Public Economics / Urban",
    journal: "The Quarterly Journal of Economics",
    license: "CC BY 4.0",
    sourceUrl: "https://academic.oup.com/qje/article/140/1/459/7819161",
    abstract:
      "This paper examines the long-run effects of government-financed wartime manufacturing plants in the United States. It links place-based public industrial investment to later regional development and to the adult outcomes of children who grew up in those places.",
    taskType: "intro",
    task: "Write a 4–6 sentence introduction opening for this paper.",
    points: [
      "Explain why place-based public investment is policy relevant.",
      "State the long-run development and mobility question clearly.",
      "Preview the historical setting and identification idea.",
    ],
    excerpt:
      "A good introduction should explain why economists care about whether large public industrial investments create persistent local benefits. It should then present the wartime plant program as a useful historical setting for identifying long-run place effects.",
  },
  {
    title:
      "Manufacturing Revolutions: Industrial Policy and Industrialization in South Korea",
    authors: "Nathan Lane",
    year: 2025,
    field: "Development / Economic History / Industrial Organization",
    journal: "The Quarterly Journal of Economics",
    license: "CC BY 4.0",
    sourceUrl: "https://academic.oup.com/qje/article/140/3/1683/8152916",
    abstract:
      "This paper studies South Korea’s heavy and chemical industry drive as a major industrial-policy episode. It asks whether targeted support changed the level and composition of industrial activity, with particular attention to persistence and input-output linkages.",
    taskType: "intro",
    task: "Write a 4–6 sentence introduction opening for this paper.",
    points: [
      "Explain why industrial policy remains an important economic question.",
      "State the Korean setting clearly.",
      "Preview the identification logic and persistence question.",
    ],
    excerpt:
      "The ideal intro should start from the renewed debate on industrial policy, then explain why the Korean HCI drive is a powerful historical setting. It should make clear that the paper studies both immediate and persistent industrial effects.",
  },
  {
    title: "Generative AI at Work",
    authors: "Erik Brynjolfsson, Danielle Li, and Lindsey R. Raymond",
    year: 2025,
    field: "Labor Economics / Firms / Technology",
    journal: "The Quarterly Journal of Economics",
    license: "CC BY-NC 4.0",
    sourceUrl: "https://academic.oup.com/qje/article/140/2/889/7990658",
    abstract:
      "This paper studies the staggered introduction of a generative-AI assistant for customer-support workers. It measures how AI affects productivity, heterogeneity across workers, and whether gains reflect simple substitution or learning on the job.",
    taskType: "intro",
    task: "Write a 4–6 sentence introduction opening for this paper.",
    points: [
      "Motivate why AI adoption at work matters for economics.",
      "State the productivity and heterogeneity question clearly.",
      "Briefly preview the rollout-based empirical design.",
    ],
    excerpt:
      "A strong introduction should explain why generative AI creates a new opportunity to study technology adoption inside firms. It should then state that the paper uses staggered rollout evidence to estimate productivity effects and worker heterogeneity.",
  },
  {
    title:
      "Lives Versus Livelihoods: The Impact of the Great Recession on Mortality and Welfare",
    authors:
      "Amy Finkelstein, Matthew J. Notowidigdo, Frank Schilbach, and Jonathan Zhang",
    year: 2025,
    field: "Health Economics / Macroeconomics / Public Economics",
    journal: "The Quarterly Journal of Economics",
    license: "CC BY-NC-ND 4.0",
    sourceUrl: "https://academic.oup.com/qje/article/140/3/2269/8132935",
    abstract:
      "This paper studies how recession severity affected mortality across U.S. local labor markets during and after the Great Recession. It then maps those mortality effects into welfare calculations, highlighting that recessions can change both incomes and survival.",
    taskType: "intro",
    task: "Write a 4–6 sentence introduction opening for this paper.",
    points: [
      "Explain why economists usually think in terms of lives versus livelihoods.",
      "State the mortality question clearly.",
      "Preview the welfare relevance of combining health and income effects.",
    ],
    excerpt:
      "A good intro should begin with the standard presumption that recessions harm material well-being, then introduce the possibility that mortality may move differently. It should make clear that the paper combines local labor-market shocks with mortality and welfare analysis.",
  },
  {
    title: "Marginal Returns to Public Universities",
    authors: "Jack Mountjoy",
    year: 2026,
    field: "Education Economics / Public Economics",
    journal: "The Quarterly Journal of Economics",
    license: "CC BY 4.0",
    sourceUrl: "https://academic.oup.com/qje/article/141/1/429/8376650",
    abstract:
      "This paper estimates the returns to enrolling in U.S. public universities by comparing barely admitted and barely rejected applicants. It focuses on long-run educational attainment, earnings, and cost-benefit calculations for marginal students.",
    taskType: "intro",
    task: "Write a 4–6 sentence introduction opening for this paper.",
    points: [
      "Motivate why marginal returns to public universities matter.",
      "State the causal estimand clearly.",
      "Preview the admission-cutoff design.",
    ],
    excerpt:
      "A strong introduction should explain that the policy-relevant question is not the average return to college, but the return for marginally admitted students. It should then preview the RD logic based on decentralized admission cutoffs.",
  },
  {
    title: "The Impact of Law and Economics on American Justice",
    authors: "Elliott Ash, Daniel L. Chen, and Suresh Naidu",
    year: 2026,
    field: "Political Economy / Law and Economics",
    journal: "The Quarterly Journal of Economics",
    license: "CC BY-NC 4.0",
    sourceUrl: "https://academic.oup.com/qje/article/141/1/845/8241352",
    abstract:
      "This paper studies whether exposure to economic ideas changed judicial behavior in the United States. Using quasi-random admission to the Manne economics program for judges, it estimates effects on language, rulings, and sentencing outcomes.",
    taskType: "intro",
    task: "Write a 4–6 sentence introduction opening for this paper.",
    points: [
      "Frame the broader question about ideas and policy outcomes.",
      "State why judges are an important setting.",
      "Preview the quasi-experimental source of variation.",
    ],
    excerpt:
      "The best intro should start with the broader economics question of whether ideas change policy decisions. It should then show why judge training offers a tractable setting for measuring that effect.",
  },
  {
    title: "Growth Experiences and Trust in Government",
    authors: "Timothy Besley, Christopher Dann, and Sacha Dray",
    year: 2026,
    field: "Political Economy / Development",
    journal: "The Quarterly Journal of Economics",
    license: "CC BY 4.0",
    sourceUrl:
      "https://academic.oup.com/qje/advance-article/doi/10.1093/qje/qjaf056/8424246",
    abstract:
      "This paper studies whether lifetime exposure to economic growth affects trust in government. Using harmonized survey data across many countries, it links cohort-level growth experiences to political attitudes and perceived government performance.",
    taskType: "intro",
    task: "Write a 4–6 sentence introduction opening for this paper.",
    points: [
      "Explain why trust in government matters for political economy.",
      "State the growth-experience question clearly.",
      "Preview the cohort-based empirical design.",
    ],
    excerpt:
      "A strong introduction should connect macroeconomic experience to political attitudes and state capacity. It should then make clear that the paper uses cross-country cohort variation in lifetime growth exposure to study trust in government.",
  },
  {
    title: "The Child Penalty Atlas",
    authors: "Henrik Kleven, Camille Landais, and Gabriel Leite-Mariante",
    year: 2025,
    field: "Labor Economics / Gender / Development",
    journal: "The Review of Economic Studies",
    license: "CC BY 4.0",
    sourceUrl: "https://academic.oup.com/restud/article/92/5/3174/7840285",
    abstract:
      "This paper builds a global atlas of child penalties in women’s employment using harmonized microdata from a very large set of countries. It studies both the average magnitude of child penalties and how they vary across regions, institutions, and development levels.",
    taskType: "intro",
    task: "Write a 4–6 sentence introduction opening for this paper.",
    points: [
      "Explain why child penalties are central to gender inequality.",
      "State the global evidence gap clearly.",
      "Preview the paper’s data and event-study approach.",
    ],
    excerpt:
      "A compelling intro should frame child penalties as a central mechanism behind gender inequality, then note how little comparable global evidence existed before this paper. It should preview the harmonized cross-country pseudo-event-study design.",
  },
  {
    title:
      "Subsidizing Labour Hoarding in Recessions: The Employment and Welfare Effects of Short-time Work",
    authors: "Giulia Giupponi and Camille Landais",
    year: 2023,
    field: "Labor Economics / Public Economics / Macro-Labor",
    journal: "The Review of Economic Studies",
    license: "CC BY 4.0",
    sourceUrl: "https://academic.oup.com/restud/article/90/4/1963/6767833",
    abstract:
      "This paper studies short-time work subsidies in Italy during the Great Recession. It estimates effects on hours, employment retention, and firm survival, and then asks when labor hoarding is welfare-enhancing versus when it impedes efficient reallocation.",
    taskType: "intro",
    task: "Write a 4–6 sentence introduction opening for this paper.",
    points: [
      "Motivate why short-time work matters in recessions.",
      "State the trade-off between insurance and reallocation clearly.",
      "Preview the policy setting and empirical strategy.",
    ],
    excerpt:
      "A strong introduction should present short-time work as a policy that may protect employment while distorting reallocation. It should then explain why the Italian recession setting is useful for estimating that trade-off.",
  },
]