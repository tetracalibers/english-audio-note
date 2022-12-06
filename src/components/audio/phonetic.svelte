<script lang="ts">
  import PhoneticSymbol from "./phonetic-symbol.svelte"

  interface PhoneticSymbol {
    symbol: string
    description: string
    spells?: string[]
    words?: string[]
  }

  const symbols: PhoneticSymbol[] = [
    {
      symbol: "ʌ",
      description: "短く「ア」と言う。日本語の「ア」とほぼ同じ。",
      spells: ["u子+$", "o[m|n|r|v|w]"],
      words: ["g<>u</>n", "st<>u</>dy", "t<>u</>nnel", "s<>o</>n"], // ルールブックp14, p15
    },
    {
      symbol: "æ",
      description: "「ア」と「エ」を同時に言う感じで「ア」と言う。",
      spells: ["a子+$"],
      words: ["<>a</>nimal", "c<>a</>t", "b<>a</>g"], // ルールブックp10
    },
    {
      symbol: "ɑ",
      description: "「オ」に近い「ア」。口を縦に開けて「あ」と発音する。",
      spells: ["o子+$"],
      words: ["h<>o</>t"], // ルールブックp13
    },
    {
      symbol: "ɑː",
      description: "口を大きく開けて「アー」と言う。",
      spells: ["ar", "a", "ear", "eer", "ere"],
      words: [
        "<>ar</>m",
        "f<>a</>ther",
        "h<>ear</>t",
        "b<>eer</>",
        "h<>ere</>",
      ], // ルールブックp60, p71
    },
    {
      symbol: "əː",
      description:
        "唇を横に引き、「ア」と「ウ」を同時に言う感じで「アー」と言う。",
      spells: ["ear", "ir", "wor", "er", "ur"],
      words: ["<>ear</>th", "g<>ir</>l", "w<>or</>k", "t<>e</>rm", "f<>u</>r"], // ルールブックp62, p63, p64, p65
    },
    {
      symbol: "ə",
      description: "[əː]よりも少し広く口を開けて短く「ア」と言う。",
      spells: ["u", "o子+$", "ous"],
      words: ["s<>u</>ccess", "lem<>o</>n", "fam<>ou</>s"], // ルールブックp13, p88
    },
    {
      symbol: "ai",
      description: "口を大きく開けて「アィ」と言う。",
      spells: ["eye", "y", "i子e", "ir?e", "ye", "i"],
      words: ["<>eye</>", "fl<>y</>", "l<>i</>ke", "t<>i</>re"], // ルールブックp17, p54, p67, p76
    },
    {
      symbol: "au",
      description:
        "口を大きく開けて「アゥ」と言う。「ゥ」を発音する時には唇を丸くして前に突き出す。",
      spells: ["ow", "ou.+"],
      words: ["c<>ow</>", "t<>ow</>er", "s<>ou</>nd"], // ルールブックp47, p48
    },
    {
      symbol: "iː",
      description: "唇を横に引いて「イー」と言う。",
      spells: ["e", "ee", "ea", "ie"],
      words: ["m<>e</>", "<>ea</>t", "sp<>ea</>k", "p<>ie</>ce", "b<>ee</>"], // ルールブックp52, p55, p56, p75
    },
    {
      symbol: "i",
      description: "「エ」と「イ」を同時に言う感じで「イ」と言う",
      spells: ["e", "i子+$"],
      words: ["<>E</>nglish", "c<>i</>ty", "p<>i</>cture"], // ルールブックp12
    },
    {
      symbol: "iə",
      description: "[i]と[ə]を一緒にして「イァ」という感じで言う。",
      spells: ["ear", "ere", "ea"],
      words: ["<>ear</>", "h<>ere</>", "id<>ea</>"],
    },
    {
      symbol: "u",
      description: "唇を丸くして前に突き出し、短く「ウ」と言う。",
      spells: ["u", "oo", "o"],
      words: ["p<>u</>t", "b<>oo</>k", "w<>o</>man"], // ルールブックp51
    },
    {
      symbol: "uː",
      description: "[u]を発音するのと同じ要領で「ウー」と伸ばして言う。",
      spells: ["wo", "oo", "ou", "u子e"],
      words: ["t<>wo</>", "sch<>oo</>l", "s<>ou</>p", "c<>u</>te"], // ルールブックp19, p50
    },
    {
      symbol: "uə",
      description: "丸めて突き出した唇を開いて「ウァ」と言う。",
      spells: ["oor", "ure", "our", "ower"],
      words: ["p<>oor</>", "s<>ure</>", "t<>our</>", "t<>ower</>"], // ルールブックp66
    },
    {
      symbol: "e",
      description: "口を縦に比較的大きく開けて「エ」と言う。",
      spells: ["e子+$", "ea"],
      words: ["<>e</>gg", "r<>e</>d", "h<>ea</>d"], // ルールブックp11, p53
    },
    {
      symbol: "ei",
      description:
        "[e]と[i]を一緒にして「エィ」と言う。[e]を[i]よりも強く長く言う。",
      spells: ["ei", "a子e", "ai", "ay", "a"],
      words: ["<>ei</>ght", "c<>a</>ke", "r<>ai</>n", "d<>ay</>", "l<>a</>zy"], // ルールブックp16, p44, p74
    },
    {
      symbol: "eə",
      description: "[e]と[ə]を一緒にして「エァ」という感じで言う。",
      spells: ["ear", "air", "are"],
      words: ["b<>ear</>", "ch<>air</>", "c<>are</>ful"], // ルールブックp68, p69
    },
    {
      symbol: "ɔ",
      description:
        "口を大きく開け、唇を丸くして前に突き出し、短く「オ」と言う。",
      spells: ["o", "a"],
      words: ["d<>o</>g", "s<>o</>ft", "w<>a</>sh"],
    },
    {
      symbol: "ɔː",
      description: "[ɔ]を発音するのと同じ要領で「オー」と伸ばして言う。",
      spells: ["au.+", "aw", "or", "ore", "war", "al"],
      words: [
        "b<>a</>ll",
        "d<>au</>ghter",
        "w<>a</>lk",
        "l<>aw</>",
        "f<>o</>rk",
        "w<>ar</>",
        "m<>o</>re",
      ], // ルールブックp45, p61, p65, p70, p91
    },
    {
      symbol: "ɔi",
      description:
        "口を大きく開けて「オィ」と言う。「ィ」を発音する時には唇を丸くして前に突き出す。",
      spells: ["oy", "oi"],
      words: ["b<>oy</>", "<>oi</>l", "v<>oi</>ce"],
    },
    {
      symbol: "ou",
      description:
        "口を大きく開けて「オゥ」と言う。「ゥ」を発音する時には唇を丸くして前に突き出す。",
      spells: ["o子e", "oa.+", "ow", "o"],
      words: ["h<>o</>me", "<>o</>ld", "t<>oa</>st", "l<>ow</>"], // ルールブックp18, p46, p49, p77
    },
    {
      symbol: "p",
      description:
        "上下の唇を閉じ、息が出るのを止めた後、急に唇を開けてはじくように「息」を出す。",
      spells: ["pp", "p"],
      words: ["ha<>pp</>y", "hel<>p</>", "<>p</>ark"],
    },
    {
      symbol: "b",
      description: "[p]を発音するのと同じ要領で「声」を出す。",
      spells: ["b"],
      words: ["a<>b</>out", "<>b</>a<>b</>y", "jo<>b</>"],
    },
    {
      symbol: "t",
      description:
        "舌の先を上の歯と歯茎の境目につけて息を止め、急に舌を離すと同時に「息」を出す。",
      spells: ["tt", "t"],
      words: ["bu<>tt</>er", "hi<>t</>", "<>t</>elephone"],
    },
    {
      symbol: "d",
      description: "[t]を発音するのと同じ要領で「声」を出す。",
      spells: ["d", "dd"],
      words: ["<>d</>oor", "la<>dd</>er", "ol<>d</>"],
    },
    {
      symbol: "k",
      description: "「クッ」と発音する要領で「息」を出す。",
      spells: ["c$", "c[a|o|u|子]", "ck", "k"],
      words: ["<>c</>offee", "so<>ck</>s", "tal<>k</>"], // ルールブックp23, p27
    },
    {
      symbol: "g",
      description: "[k]を発音するのと同じ要領で「声」を出す。",
      spells: ["g[a|o|u|子]", "g$"],
      words: ["<>g</>irl", "a<>g</>ain", "pi<>g</>"], // ルールブックp29
    },
    {
      symbol: "f",
      description: "上の歯を下の唇に軽く当てて、その隙間から「息」を出す。",
      spells: ["fl", "f", "gh"],
      words: ["<>fl</>ower", "lea<>f</>", "lau<>gh</>"], // ルールブックp40
    },
    {
      symbol: "v",
      description: "[f]を発音するのと同じ要領で「声」を出す。",
      spells: ["ve$", "v"],
      words: ["ha<>ve</>", "ri<>v</>er", "<>v</>oice"], // ルールブックp41
    },
    {
      symbol: "θ",
      description: "舌を軽く噛んで、その隙間から「息」を出す。",
      spells: ["th"],
      words: ["<>th</>ink", "some<>th</>ing", "too<>th</>"], // ルールブックp39
    },
    {
      symbol: "ð",
      description: "[θ]を発音するのと同じ要領で「声」を出す。",
      spells: ["th"],
      words: ["mo<>th</>er", "<>th</>at   wi<>th</>in"],
    },
    {
      symbol: "s",
      description: "下の先を歯茎に近づけて、その隙間から「息」を出す。",
      spells: ["s", "ce"],
      words: ["<>s</>mall", "famou<>s</>", "i<>ce</>"], // ルールブックp37
    },
    {
      symbol: "z",
      description: "[s]を発音するのと同じ要領で「声」を出す。",
      spells: ["z", "s"],
      words: ["<>z</>oo", "bu<>s</>y", "sea<>s</>on"],
    },
    {
      symbol: "ʃ",
      description: "唇を丸くして前に突き出し、息だけで「シュ」と言う。",
      spells: ["sh", "c[e|i|y]", "tion", "ture"],
      words: ["<>sh</>ip", "o<>ce</>an", "sta<>ti</>on", "pict<>u</>re"], // ルールブックp25, p38, p86, p87
    },
    {
      symbol: "ʒ",
      description: "[ʃ]を発音するのと同じ要領で「声」を出す。",
      spells: ["s", "ge"],
      words: ["u<>s</>ual", "gara<>ge</>", "plea<>s</>ure"],
    },
    {
      symbol: "ʧ",
      description: "唇を丸くして前に突き出し、息だけで「チュ」と言う。",
      spells: ["ch", "tu"],
      words: ["<>ch</>ur<>ch</>", "fu<>tu</>re", "tea<>ch</>"], // ルールブックp24
    },
    {
      symbol: "ʤ",
      description: "[tʃ]を発音するのと同じ要領で「声」を出す。",
      spells: ["j", "g[e|i|y]", "dge", "age"],
      words: ["<>J</>apan", "<>j</>u<>dge</>", "pa<>ge</>"], // ルールブックp25, p28, p85
    },
    {
      symbol: "h",
      description: "腹の底から「ハー」と「息」を出す (声は出さない)。",
      spells: ["h"],
      words: ["<>h</>and", "<>h</>eat", "be<>h</>ind"],
    },
    {
      symbol: "l",
      description: "舌の先を上の歯茎につけて舌の両側から「声」を出す。",
      spells: ["ll", "l"],
      words: ["ba<>ll</>", "co<>l</>or", "<>l</>etter"], // ルールブックp32
    },
    {
      symbol: "r",
      description:
        "舌の先を内側に巻いて上の歯茎に近づけ、「声」を摩擦して出す。",
      spells: ["r", "rr"],
      words: ["<>r</>ocket", "ca<>rr</>y", "<>r</>oof"], // ルールブックp33
    },
    {
      symbol: "w",
      description:
        "唇を丸くして前に突き出し、摩擦音で「ウ」に近い「声」を出す。",
      spells: ["w", "u"],
      words: ["<>w</>atch", "q<>u</>ick", "s<>w</>eet"], // ルールブックp22
    },
    {
      symbol: "j",
      description:
        "舌の中央を上顎の中央に近づけ、その隙間から「声」をきしらせて出す。",
      spells: ["y", "ea", "e", "u"],
      words: ["<>y</>ou", "b<>ea</>uty", "n<>e</>w", "<></>unit"], // ルールブックp78
    },
    {
      symbol: "m",
      description: "唇を閉じて、鼻を通して「ム」と「声」を出す。",
      spells: ["m", "me"],
      words: ["<>m</>e<>m</>ber", "far<>m</>", "so<>me</>"], // ルールブックp36
    },
    {
      symbol: "n",
      description:
        "口を軽く開き、舌の先を上の歯と歯茎の境目につけて「ン」と「声」を出す。",
      spells: ["n"],
      words: ["<>n</>ose", "u<>n</>der", "lesso<>n</>"], // ルールブックp34
    },
    {
      symbol: "ŋ",
      description:
        "舌の奥の部分を上顎の奥につけて口から声や息が出るのを止め、鼻を通して「声」を出す。",
      spells: ["n", "ng"],
      words: ["E<>n</>glish", "tha<>n</>k", "so<>ng</>"], // ルールブックp35
    },
  ]

  const wordHighlight = (word: string) => {
    return word
      .replaceAll("<>", '<span class="word-highlight">')
      .replaceAll("</>", "</span>")
  }
</script>

<div class="root">
  {#each symbols as sy}
    <div class="card">
      <PhoneticSymbol
        symbol={sy.symbol}
        words={sy.words.map(w => w.replaceAll("<>", "").replaceAll("</>", ""))}
      />
      <div class="content">
        <div class="desc">{sy.description}</div>
        <div class="spells">
          {#each sy.spells as spell}
            <pre>{spell}</pre>
          {/each}
        </div>
        <div class="words">
          {#each sy.words as word}
            <div>{@html wordHighlight(word)}</div>
          {/each}
        </div>
      </div>
    </div>
  {/each}
</div>

<style>
  .root {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .card {
    padding: 1rem 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 1.5;
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    align-items: center;
  }

  .desc {
    text-align: center;
    font-size: 0.8rem;
  }

  .spells {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }

  .words {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    font-size: 1.1rem;
  }

  :global(.word-highlight) {
    color: #e9007f;
  }
</style>
