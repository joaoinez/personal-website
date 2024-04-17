#!/bin/bash
set -euo pipefail

echo "Drawing .slivers/macos"

echo "Installing homebrew"

/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

(echo; echo 'eval "$(/opt/homebrew/bin/brew shellenv)"') >> ~/.zprofile
eval "$(/opt/homebrew/bin/brew shellenv)"

echo "Installing chezmoi"

brew install chezmoi

echo "Initializing chezmoi"

chezmoi init --apply joaoinez
