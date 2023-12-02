import { readLines } from "../../utils/file-reader";

const findFirstNumber = (input: string): number => {
  const result = input.match(
    /one|two|three|four|five|six|seven|eight|nine|1|2|3|4|5|6|7|8|9/g
  );

  return result ? stringToInt(result[0]) : 0;
};

const findLastNumber = (input: string): number => {
  const result = reverseString(input).match(
    /eno|owt|eerht|ruof|evif|xis|neves|thgie|enin|1|2|3|4|5|6|7|8|9/g
  );

  return result ? stringToInt(reverseString(result[0])) : 0;
};

// Creates a function that reverses a string.
const reverseString = (str: string) => str.split("").reverse().join("");

const stringToInt = (input: string): number => {
  const numberMap: Record<string, number> = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
  };

  return numberMap[input];
};

const getCalibrationValue = (first: number, last: number): number => {
  return first * 10 + last;
};

const inputFilePath = process.argv[2];
const input = await readLines(inputFilePath);

const result = input.reduce((acc: number, line: string) => {
  const first = findFirstNumber(line);
  const last = findLastNumber(line);
  const calibrationValue = getCalibrationValue(first, last);
  return acc + calibrationValue;
}, 0);

console.log(result);
