#! /bin/bash

# Check if exactly three arguments are provided
if [ "$#" -ne 3 ]; then
    echo "Usage: $0 <day> <part> <input_file>"
    exit 1
fi

# Construct the directory path
directory="day-$1/part-$2"

bun run $directory/index.ts $directory/$3
