#! /bin/bash

# Check if exactly three arguments are provided
if [ "$#" -ne 2 ]; then
    echo "Usage: $0 <day> <part>"
    exit 1
fi

# Construct the file path
file_path="day-$1/part-$2/index.ts"

bun run $file_path