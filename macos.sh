#!/bin/bash
set -euo pipefail

echo "Drawing .slivers/macos"

echo "Installing chezmoi"

brew install chezmoi

# echo "Initializing chezmoi"

chezmoi init --apply joaoinez
