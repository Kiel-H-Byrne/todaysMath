import { CHAR_MAP } from "./_CONSTANTS";

export const getDays = date => {
  let days = date
    .getDate()
    .toString()
    .split("");
  console.log(days)
  return days;
};

export const genGuid = () => {
  // let nav = window.navigator;
  // let screen = window.screen;
  // let guid = `${nav.mimeTypes.length}`;
  // guid += nav.userAgent.replace(/\D+/g, "");

  // guid += nav.plugins.length;
  // guid += screen.height || "";
  // guid += screen.width || "";
  // guid += screen.pixelDepth || "";
  let guid = "df";
  return guid;
};
export const reduceWord = word => {
  let value = Array.from(word).reduce((nameScore, element) => {
    let curValue = CHAR_MAP[element];
    return nameScore + curValue;
  }, 0);
  return value;
};

export const nth = function(d) {
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
