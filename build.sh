#!/bin/bash

# Define the source and destination directories
SRC_DIR=".next/static"
DEST_DIR=".next/standalone/.next"

# Check if the source directory exists
if [ -d "$SRC_DIR" ]; then
    # Create the destination directory if it doesn't exist
    mkdir -p "$DEST_DIR"

    # Copy the static files to the standalone directory
    cp -r "$SRC_DIR" "$DEST_DIR"

    echo "Static Files copied to $DEST_DIR"
else
    echo "Source directory $SRC_DIR does not exist."
    exit 1
fi


SRC_DIR="public"
DEST_DIR=".next/standalone"
if [ -d "$SRC_DIR" ]; then
    # Create the destination directory if it doesn't exist
    mkdir -p "$DEST_DIR"

    # Copy the static files to the standalone directory
    cp -r "$SRC_DIR" "$DEST_DIR"

    echo "Public Files copied to $DEST_DIR"
else
    echo "Source directory $SRC_DIR does not exist."
    exit 1
fi


DEST_DIR="."

# Get the current month and date
CURRENT_DATE=$(date +"%b_%d" | tr '[:upper:]' '[:lower:]')

# Define the zip file name using the current date
ZIP_FILE="${CURRENT_DATE}.zip"

cd .next/standalone

# Zip the standalone directory
if [ -d "$DEST_DIR" ]; then
    zip -r "$ZIP_FILE" "$DEST_DIR"
    echo "Standalone directory zipped as $ZIP_FILE"
else
    echo "Destination directory $DEST_DIR does not exist."
    exit 1
fi
