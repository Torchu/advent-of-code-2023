import { readLines } from "../../utils/file-reader";

const findNumbers = (input: string): number[] => {
  return Array.from(input)
    .map((char: string) => parseInt(char))
    .filter((number: number) => !isNaN(number));
};

const getCalibrationValue = (first: number, last: number): number => {
  return first * 10 + last;
};

const input = await readLines("day_1/input.txt");

const result = input.reduce((acc: number, line: string) => {
  const numbers = findNumbers(line);
  const calibrationValue = getCalibrationValue(
    numbers[0],
    numbers[numbers.length - 1]
  );
  return acc + calibrationValue;
}, 0);

console.log(result);