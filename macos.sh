#!/bin/bash
set -euo pipefail

echo "Drawing .slivers/macos"

echo "Installing git"

git --version

echo "Installing homebrew"

/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

echo "Installing chezmoi"

brew install chezmoi

echo "Initializing chezmoi"

chezmoi init --apply joaoinez
