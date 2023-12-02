import { readLines } from "../utils/file-reader";

const part1 = (input: string[]): number => {
  return input.reduce((acc: number, line: string) => {
    const numbers = findNumbers(line);
    const calibrationValue = getCalibrationValue(
      numbers[0],
      numbers[numbers.length - 1]
    );
    return acc + calibrationValue;
  }, 0);
};

const part2 = (input: string[]): number => {
  return input.reduce((acc: number, line: string) => {
    const first = findFirstNumber(line);
    const last = findLastNumber(line);
    const calibrationValue = getCalibrationValue(first, last);
    return acc + calibrationValue;
  }, 0);
};

const findNumbers = (input: string): number[] => {
  return Array.from(input)
    .map((char: string) => parseInt(char))
    .filter((number: number) => !isNaN(number));
};

const getCalibrationValue = (first: number, last: number): number => {
  return first * 10 + last;
};

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

const reverseString = (str: string) => str.split("").reverse().join("");

const inputFilePath = process.argv[2];
const input = await readLines(inputFilePath);

console.log("Part 1: ", part1(input));
console.log("Part 2: ", part2(input));
