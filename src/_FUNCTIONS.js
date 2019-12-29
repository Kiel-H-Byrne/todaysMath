import { CHAR_MAP } from "./_CONSTANTS";

export const getDays = date => {
  let days = date
    .getDate()
    .toString()
    .split("");
  return days;
};

export const genGuid = () => {
  let nav = window.navigator;
  let screen = window.screen;
  let guid = `${nav.mimeTypes.length}`;
  guid += nav.userAgent.replace(/\D+/g, "");
  guid += nav.plugins.length;
  guid += screen.height || "";
  guid += screen.width || "";
  guid += screen.pixelDepth || "";

  return guid;
};

export const reduceWord = word => {
  let value = Array.from(word).reduce((nameScore, element) => {
    let curValue = CHAR_MAP[element];
    return nameScore + curValue;
  }, 0);
  return value;
};
