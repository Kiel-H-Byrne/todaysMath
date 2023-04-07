export enum SingleLetters {
  A,
  B,
  C,
  D,
  E,
  F,
  G,
  H,
  I,
  J,
  K,
  L,
  M,
  N,
  O,
  P,
  Q,
  R,
  S,
  T,
  U,
  V,
  W,
  X,
  Y,
  Z,
}

export enum SINGLE_DIGITS {
  ZERO,
  ONE,
  TWO,
  THREE,
  FOUR,
  FIVE,
  SIX,
  SEVEN,
  EIGHT,
  NINE,
}
export enum LETTER_MEANINGS {
  Allah = "Allah",
  Justice = "Justice",
  Self = "Self/Savior/Sovereign",
  Be = "Be/Born",
  King = "King/Kingdom",
  Truth = "Truth/Square",
  Cee = "Cee",
  Love = "Love Hell/Right",
  You = "You/Universe/U-N-I-Verse",
  Divine = "Divine",
  Master = "Master",
  Victory = "Victory",
  Equality = "Equality",
  In = "In/Now/Nation",
  Wisom = "Wisom (Woman)",
  Father = "Father",
  Cipher = "Cipher",
  Unknown = "Unknown",
  God = "God",
  Power = "Power",
  Why = "Why",
  He = "He/Her",
  Queen = "Queen",
  Zig = "Zig-Zag-Zig",
  I = "I/Islam",
  Rule = "Rule/Ruler",
}

export enum NUMBER_MEANINGS {
  Knowledge = "Knowledge",
  Wisdom = "Wisdom",
  Understanding = "Understanding",
  Culture = "Culture/Freedom",
  Power = "Power/Refinement",
  Equality = "Equality",
  God = "God",
  Build = "Build/Destroy",
  Born = "Born",
  Cipher = "Cipher",
}
export const CHAR_MAP = {
         [SingleLetters.A]: { value: 1, meaning: LETTER_MEANINGS.Allah },
         [SingleLetters.J]: { value: 1, meaning: LETTER_MEANINGS.Justice },
         [SingleLetters.S]: { value: 1, meaning: LETTER_MEANINGS.Self },
         [SingleLetters.B]: { value: 2, meaning: LETTER_MEANINGS.Be },
         [SingleLetters.K]: { value: 2, meaning: LETTER_MEANINGS.King },
         [SingleLetters.T]: { value: 2, meaning: LETTER_MEANINGS.Truth },
         [SingleLetters.C]: { value: 3, meaning: LETTER_MEANINGS.Cee },
         [SingleLetters.L]: { value: 3, meaning: LETTER_MEANINGS.Love },
         [SingleLetters.U]: { value: 3, meaning: LETTER_MEANINGS.You },
         [SingleLetters.D]: { value: 4, meaning: LETTER_MEANINGS.Divine },
         [SingleLetters.M]: { value: 4, meaning: LETTER_MEANINGS.Master },
         [SingleLetters.V]: { value: 4, meaning: LETTER_MEANINGS.Victory },
         [SingleLetters.E]: { value: 5, meaning: LETTER_MEANINGS.Equality },
         [SingleLetters.N]: { value: 5, meaning: LETTER_MEANINGS.In },
         [SingleLetters.W]: { value: 5, meaning: LETTER_MEANINGS.Wisom },
         [SingleLetters.F]: { value: 6, meaning: LETTER_MEANINGS.Father },
         [SingleLetters.O]: { value: 6, meaning: LETTER_MEANINGS.Cipher },
         [SingleLetters.X]: { value: 6, meaning: LETTER_MEANINGS.Unknown },
         [SingleLetters.G]: { value: 7, meaning: LETTER_MEANINGS.God },
         [SingleLetters.P]: { value: 7, meaning: LETTER_MEANINGS.Power },
         [SingleLetters.Y]: { value: 7, meaning: LETTER_MEANINGS.Why },
         [SingleLetters.H]: { value: 8, meaning: LETTER_MEANINGS.He },
         [SingleLetters.Q]: { value: 8, meaning: LETTER_MEANINGS.Queen },
         [SingleLetters.Z]: { value: 8, meaning: LETTER_MEANINGS.Zig },
         [SingleLetters.I]: { value: 9, meaning: LETTER_MEANINGS.I },
         [SingleLetters.R]: { value: 9, meaning: LETTER_MEANINGS.Rule },
       }

export const NUM_MAP = {
         [SINGLE_DIGITS.ONE]: { meaning: NUMBER_MEANINGS.Knowledge },
         [SINGLE_DIGITS.TWO]: { meaning: NUMBER_MEANINGS.Wisdom },
         [SINGLE_DIGITS.THREE]: { meaning: NUMBER_MEANINGS.Understanding },
         [SINGLE_DIGITS.FOUR]: { meaning: NUMBER_MEANINGS.Culture },
         [SINGLE_DIGITS.FIVE]: { meaning: NUMBER_MEANINGS.Power },
         [SINGLE_DIGITS.SIX]: { meaning: NUMBER_MEANINGS.Equality },
         [SINGLE_DIGITS.SEVEN]: { meaning: NUMBER_MEANINGS.God },
         [SINGLE_DIGITS.EIGHT]: { meaning: NUMBER_MEANINGS.Build },
         [SINGLE_DIGITS.NINE]: { meaning: NUMBER_MEANINGS.Born },
         [SINGLE_DIGITS.ZERO]: { meaning: NUMBER_MEANINGS.Cipher },
       }

export const APP_SETTINGS = {
         name: "365 Day Supreme Calendar",
         url: "https://todaysmath.kielbyrne.com/",
         imageUrl: "https://todaysmath.kielbyrne.com/img/FBprev.png",
         twitter_handle: "",
         description: "365 Day Calendar of Supreme Mathematics",
         defaultDescription: "",
         defaultOGURL: "",
         defaultOGImage: "",
       }

let daysArray = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
]

let monthsArray = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]
