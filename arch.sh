#!/bin/bash
set -euo pipefail

echo "Drawing .slivers"

# Disable IPv6
nmcli connection modify "Wired connection 1" ipv6.method "disabled"
nmcli connection up "Wired connection 1"

# Update system
sudo pacman -Syu --noconfirm

# Install git, cargo and paru
sudo pacman -S --needed --noconfirm base-devel
sudo pacman -S --noconfirm git
sudo pacman -Sdd --noconfirm cargo
git clone https://aur.archlinux.org/paru.git
cd paru
echo "yes" | makepkg -si
cd ~

# Install chezmoi
paru -S --noconfirm chezmoi

# Init dotfiles
echo "Initializing chezmoi"

chezmoi init --apply joaoinez
