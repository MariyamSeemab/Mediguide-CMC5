#!/bin/bash
# Update all remaining lab test translations
echo "Updating lab test translations for all languages..."
echo "✅ Malayalam (ml) - Already completed"
echo "⏳ Updating Punjabi (pa)..."
echo "⏳ Updating Odia (or)..."
echo "⏳ Updating Assamese (as)..."
echo ""
echo "Running Python update script..."
python3 update_punjabi_odia_assamese.py
echo "Done!"
