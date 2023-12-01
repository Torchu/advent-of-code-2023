import { BunFile } from "bun";

export const readLines = async (filePath: string): Promise<string[]> => {
  const file: BunFile = Bun.file(filePath);
  const content = await file.text();
  return content.split("\n");
};
