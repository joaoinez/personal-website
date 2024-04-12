#!/bin/bash
set -euo pipefail

echo "Installing git"

git --version

echo "Installing homebrew"

/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

echo "Initializing chezmoi"

chezmoi init --apply joaoinez 
