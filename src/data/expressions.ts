const wordClass = ["verb", "noun", "adj", "adv"] as const
const groupingScale = ["word", "idiom", "syntax"] as const

const chapter = ["動詞系イディオムの解体図etc."] as const
const section = [
  "考える",
  "決める",
  "決意する・決心する",
  "判断する・結論を出す",
  "選ぶ",
  "考慮する・斟酌する",
] as const

type WordClass = typeof wordClass[number]
type GroupingScale = typeof groupingScale[number]
type Chapter = typeof chapter[number]
type Section = typeof section[number]

interface _Common {
  en: string
  ja: string
  scale: GroupingScale
  chapter?: Chapter
  section: Section
  examples?: {
    en: string
    ja: string
  }[]
}

interface Word extends _Common {
  scale: "word"
  class: WordClass
}

interface Idiom extends _Common {
  scale: "idiom"
  words: string[]
  structure?: {
    en: string
    ja?: string
    because?: string // だから
    viz?: string // すなわち
    description?: string
  }
}

type Expression = Word | Idiom

export const exps: Expression[] = [
  {
    en: "consider",
    ja: "考える",
    scale: "word",
    class: "verb",
    chapter: "動詞系イディオムの解体図etc.",
    section: "考える",
    examples: [
      {
        en: "Vline{Vmark{consider}} Oline{the problem}",
        ja: "doumaru その問題(the problem)doshi{を考える}",
      },
    ],
  },
  {
    en: "contemplate",
    ja: "考える",
    scale: "word",
    class: "verb",
    chapter: "動詞系イディオムの解体図etc.",
    section: "考える",
    examples: [
      {
        en: "Vline{Vmark{contemplate}} Oline{marrying}",
        ja: "doumaru 結婚(marrying)doshi{を考える}",
      },
    ],
  },
  {
    en: "hold",
    ja: "考える",
    scale: "word",
    class: "verb",
    chapter: "動詞系イディオムの解体図etc.",
    section: "考える",
    examples: [
      {
        en: "Vline{Vmark{hold}} Oline{that it is impossible}",
        ja: "doumaru それは不可能だ(that it is impossible)doshi{と考える}",
      },
    ],
  },
  {
    en: "reckon",
    ja: "考える",
    scale: "word",
    class: "verb",
    chapter: "動詞系イディオムの解体図etc.",
    section: "考える",
    examples: [
      {
        en: "Vline{Vmark{reckon}} Oline{that he's right}",
        ja: "doumaru 彼は正しい(that he's right)doshi{と考える}",
      },
    ],
  },
  {
    en: "think of A",
    ja: "Aのことを考える",
    scale: "idiom",
    words: ["think", "of"],
    chapter: "動詞系イディオムの解体図etc.",
    section: "考える",
    structure: {
      en: "Vline{think} Vfukumark{of A}",
      ja: "Vfukumark{Aに関して}Vline{考える}",
    },
  },
  {
    en: "think over A",
    ja: "Aについてよく考える",
    scale: "idiom",
    words: ["think", "over"],
    chapter: "動詞系イディオムの解体図etc.",
    section: "考える",
    structure: {
      en: "Vline{think} Zmark{over A}",
      ja: "Zmark{Aの隅々まで}Vline{考える}",
    },
  },
  {
    en: "view A as B",
    ja: "AをBとして考える",
    scale: "idiom",
    words: ["view", "as"],
    chapter: "動詞系イディオムの解体図etc.",
    section: "考える",
    structure: {
      en: "Vline{view} Oline{A} as B",
    },
  },
  {
    en: "conceive of B as A",
    ja: "BをAとして考える",
    scale: "idiom",
    words: ["conceive", "of", "as"],
    chapter: "動詞系イディオムの解体図etc.",
    section: "考える",
    structure: {
      en: "Vline{conceive} of B as A",
    },
  },
  {
    en: "think better of A",
    ja: "Aについて考え直してやめる",
    scale: "idiom",
    words: ["think", "better", "of"],
    chapter: "動詞系イディオムの解体図etc.",
    section: "考える",
    structure: {
      en: "Vline{think} Oline{better of A}",
      ja: "私はOline{Aよりも良いもの}Vline{を考える}",
      because: "Aはやめる",
    },
  },
  {
    en: "decide on/upon A",
    ja: "Aに決定する",
    scale: "idiom",
    words: ["decide", "on", "upon"],
    chapter: "動詞系イディオムの解体図etc.",
    section: "決める",
    structure: {
      en: "Vline{decide} Vfukumark{on/upon A}",
      ja: "Vfukumark{（特定）Aに}Vline{決定する}",
      description:
        "Vmark{決定する}対象は概念（時刻など）でもよいので、onより抽象的なuponでもよい",
    },
  },
  {
    en: "determine",
    ja: "決定する",
    scale: "word",
    class: "verb",
    chapter: "動詞系イディオムの解体図etc.",
    section: "決める",
    examples: [
      {
        en: "Vline{Vmark{determine}} Oline{your future}",
        ja: "doumaru 君の未来(your future)doshi{を決定する}",
      },
    ],
  },
  {
    en: "fix up A",
    ja: "Aを取り決める",
    scale: "idiom",
    words: ["fix", "up"],
    chapter: "動詞系イディオムの解体図etc.",
    section: "決める",
    structure: {
      en: "Vline{fix} Vfukumark{up} Oline{A}",
      ja: "Oline{Aを}Vfukumark{完全に}Vline{決定する}",
    },
  },
  {
    en: "navigate",
    ja: "進路を決める",
    scale: "word",
    class: "verb",
    chapter: "動詞系イディオムの解体図etc.",
    section: "決める",
  },
  {
    en: "decide to Vgenkei",
    ja: "Vすることを決意する",
    scale: "idiom",
    words: ["decide", "to"],
    chapter: "動詞系イディオムの解体図etc.",
    section: "決意する・決心する",
    structure: {
      en: "Vline{decide} Oline{to Vgenkei}",
    },
  },
  {
    en: "be intent on Ving",
    ja: "Vする決意をしている",
    scale: "idiom",
    words: ["intent", "on"],
    chapter: "動詞系イディオムの解体図etc.",
    section: "決意する・決心する",
    structure: {
      en: "Vline{be} Cline{intent on Ving}",
    },
  },
  {
    en: "make up one's mind",
    ja: "決心する",
    scale: "idiom",
    words: ["make", "up", "mind"],
    chapter: "動詞系イディオムの解体図etc.",
    section: "決意する・決心する",
    structure: {
      en: "Vline{make Vfukumark{up}} Oline{one's mind}",
      ja: "Oline{自分の精神を} Vline{整Vfukumark{尽くす}}",
    },
  },
  {
    en: "be bent on A",
    ja: "Aを決心している",
    scale: "idiom",
    words: ["bent", "on"],
    chapter: "動詞系イディオムの解体図etc.",
    section: "決意する・決心する",
    structure: {
      en: "Vline{be bent} Vfukumark{on A}",
      ja: "Vfukumark{Aに（気が乗って）}Vline{（意志を）曲げさせている}",
    },
  },
  {
    en: "be determined to Vgenkei",
    ja: "Vすることを固く決心している",
    scale: "idiom",
    words: ["determine", "to"],
    chapter: "動詞系イディオムの解体図etc.",
    section: "決意する・決心する",
    structure: {
      en: "Vline{be} Cline{determined} Kfukumark{to Vgenkei}",
      ja: "Kfukumark{Vすることを} Cline{固く決心して} Vline{いる}",
    },
  },
  {
    en: "judge by A",
    ja: "BをAによって判断する",
    scale: "idiom",
    words: ["judge", "by"],
    chapter: "動詞系イディオムの解体図etc.",
    section: "判断する・結論を出す",
    structure: {
      en: "Vline{judge} Vfukumark{by A}",
    },
  },
  {
    en: "conclude",
    ja: "結論を下す",
    scale: "word",
    class: "verb",
    chapter: "動詞系イディオムの解体図etc.",
    section: "判断する・結論を出す",
    examples: [
      {
        en: "Vline{Vmark{conclude}} Oline{that he was killed}",
        ja: "doumaru 彼は殺されたという(that he was killed)doshi{結論を下す}",
      },
    ],
  },
  {
    en: "pick out A",
    ja: "Aを選び出す",
    scale: "idiom",
    words: ["pick", "out"],
    chapter: "動詞系イディオムの解体図etc.",
    section: "選ぶ",
    structure: {
      en: "Vline{pick Vfukumark{out}} Oline{A}",
      ja: "Oline{Aを} Vline{外へVfukumark{選び取る}}",
      viz: "Oline{Aを} Vline{選び出す}",
    },
  },
  {
    en: "single out A",
    ja: "Aを選び出す",
    scale: "idiom",
    words: ["single", "out"],
    chapter: "動詞系イディオムの解体図etc.",
    section: "選ぶ",
    structure: {
      en: "Vline{single} Vfukumark{out} Oline{A}",
      ja: "Oline{Aを}Vfukumark{選び出して}Vline{選抜する}",
    },
  },
  {
    en: "select",
    ja: "選ぶ",
    scale: "word",
    class: "verb",
    chapter: "動詞系イディオムの解体図etc.",
    section: "選ぶ",
    examples: [
      {
        en: "Vline{Vmark{select}} Oline{the best answer}",
        ja: "doumaru 最良の答え(the best answer)doshi{を選ぶ}",
      },
    ],
  },
  {
    en: "elect A B",
    ja: "AをBに選ぶ",
    scale: "idiom",
    words: ["elect"],
    chapter: "動詞系イディオムの解体図etc.",
    section: "選ぶ",
    structure: {
      en: "Vline{elect} Oline{A} Oline{B}",
    },
  },
]
