#!/bin/bash
set -euo pipefail

git clone https://aur.archlinux.org/paru.git

cd paru

makepkg -si --noconfirm

paru -S chezmoi
