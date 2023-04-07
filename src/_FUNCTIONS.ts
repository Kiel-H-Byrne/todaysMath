import {
  CHAR_MAP,
  LETTER_MEANINGS,
  SINGLE_DIGITS,
  SingleLetters,
} from "./_CONSTANTZ"

export const getDays = (date: Date) => {
  let days = date
    .getDate()
    .toString()
    .split("")
    .map((d) => Number(d) as SINGLE_DIGITS)
  return days
}

export const genGuid = () => {
  // let nav = window.navigator;
  // let screen = window.screen;
  // let guid = `${nav.mimeTypes.length}`;
  // guid += nav.userAgent.replace(/\D+/g, "");

  // guid += nav.plugins.length;
  // guid += screen.height || "";
  // guid += screen.width || "";
  // guid += screen.pixelDepth || "";
  let guid = "df"
  return guid
}
// export const reduceWord = (word: string) => {
//   let value = Array.from(word).reduce(
//     (nameScore: number, singleLetter: SingleLetters) => {
//       let curValue = CHAR_MAP[singleLetter]
//       return nameScore + curValue
//     },
//     0,
//   )
//   return value
// }

export const nth = function(d: number) {
  if (d > 3 && d < 21) return "th"
  switch (d % 10) {
    case 1:
      return "st"
    case 2:
      return "nd"
    case 3:
      return "rd"
    default:
      return "th"
  }
}
