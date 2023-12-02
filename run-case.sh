#! /bin/bash

# Check if exactly two arguments are provided
if [ "$#" -ne 2 ]; then
    echo "Usage: $0 <day> <input_file>"
    exit 1
fi

# Construct the directory path
directory="day-$1"

bun run $directory/index.ts $directory/$2
