import { readLines } from "./file-reader";

export const main = async (
  part1: (input: string[]) => unknown,
  part2: (input: string[]) => unknown
) => {
  const inputFilePath = process.argv[2];
  const input = await readLines(inputFilePath);

  console.log(`Part 1: ${part1(input)}`);
  console.log(`Part 2: ${part2(input)}`);
};
