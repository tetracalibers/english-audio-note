export const lengthUnits = [
  "px",
  "em",
  "ex",
  "ch",
  "rem",
  //'lh',
  //'rlh',
  "vw",
  "vh",
  "vmin",
  "vmax",
  "vb",
  "vi",
  "svw",
  "svh",
  "lvw",
  "lvh",
  "dvw",
  "dvh",
] as const

export type LengthUnits = typeof lengthUnits[number]

export type CSSLength = `${number}${LengthUnits}`

export type CSSDirection = "right" | "left" | "bottom" | "top"
