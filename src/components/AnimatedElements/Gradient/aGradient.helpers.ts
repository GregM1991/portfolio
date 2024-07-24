import { RandomNumArrayFunction } from "./aGradient.types";

export function randomIntFromInterval(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export const randomNumArray: RandomNumArrayFunction = (
  arrLength,
  minNum = 0,
  maxNum = 100,
) => {
  let arrayOfNums: Array<number> = [];
  for (let i = 0; i < arrLength; i++) {
    arrayOfNums = [...arrayOfNums, randomIntFromInterval(minNum, maxNum)];
  }
  return arrayOfNums;
};

export const createBRadiusString = () =>
  `${randomNumArray(4, 25, 100).join("% ")}% / ${randomNumArray(
    4,
    25,
    100,
  ).join("% ")}%`;
