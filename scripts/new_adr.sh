#!/bin/bash

TITLE=$1
if [ -z "$TITLE" ]; then
  echo "Usage: ./scripts/new_adr.sh \"Title of ADR\""
  exit 1
fi

# Slugify the title
SLUG=$(echo "$TITLE" | iconv -t ascii//TRANSLIT | sed -r s/[^a-zA-Z0-9]+/-/g | sed -r s/^-+\|-+$//g | tr A-Z a-z)
DATE=$(date +%Y-%m-%d)

# Find the next number
COUNT=$(ls docs/adr/*.md 2>/dev/null | wc -l)
NEXT=$(printf "%04d" $((COUNT + 1)))

FILENAME="docs/adr/${NEXT}-${SLUG}.md"

cp templates/adr_template.md "$FILENAME"

# Replace placeholders
sed -i '' "s/\[Short Title of Decision\]/$TITLE/g" "$FILENAME"
sed -i '' "s/\[YYYY-MM-DD\]/$DATE/g" "$FILENAME"

echo "✅ Created ADR: $FILENAME"
