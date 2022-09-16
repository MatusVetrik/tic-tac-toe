import {Grid} from "./types";

const isHorizontallWin = (gridValues: Grid) => {
  let flag = false;
  gridValues.forEach((el) => {
    if (el[0] === el[1] && el[0] === el[2] && el[0] != "") flag = true;
  });
  return flag;
};

const isVerticalWin = (gridValues: Grid) => {
  let flag = false;
  const spreadeValues = [...gridValues.flat()];
  gridValues.forEach((_, i) => {
    if (
      spreadeValues[i] == spreadeValues[i + 3] &&
      spreadeValues[i] == spreadeValues[i + 6] &&
      spreadeValues[i] != ""
    )
      flag = true;
  });
  return flag;
};

const isDiagonalWin = (gridValues: Grid) =>
  (gridValues[0][0] == gridValues[1][1] &&
    gridValues[0][0] == gridValues[2][2] &&
    gridValues[0][0] != "") ||
  (gridValues[0][2] == gridValues[1][1] &&
    gridValues[0][2] == gridValues[2][0] &&
    gridValues[0][2] != "");

export const gameRules = (gridValues: Grid) =>
  isVerticalWin(gridValues) ||
  isDiagonalWin(gridValues) ||
  isHorizontallWin(gridValues);
