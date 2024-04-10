#!/bin/bash
set -euo pipefail

echo "Drawing .slivers/arch"

# Disable IPv6
if nmcli -f ipv6.method connection show "Wired connection 1" | grep "enabled" &> /dev/null; then
  nmcli connection modify "Wired connection 1" ipv6.method "disabled"
  nmcli connection up "Wired connection 1"
fi

# Update system
sudo pacman -Syu --noconfirm

# Install git, cargo and paru
if ! pacman -Qi base-devel &>/dev/null ; then
  sudo pacman -S --needed --noconfirm base-devel
fi

if ! pacman -Qi git &>/dev/null ; then
  sudo pacman -S --noconfirm git
fi

if ! pacman -Qi cargo &>/dev/null ; then
  sudo pacman -Sdd --noconfirm cargo
fi

if ! pacman -Qi paru &>/dev/null ; then
  git clone https://aur.archlinux.org/paru.git
  cd paru
  makepkg -si --noconfirm
fi

# Install chezmoi
if ! pacman -Qi paru &>/dev/null ; then
  paru -S --noconfirm chezmoi
fi

# Reminder
echo "Setup completed. You may now run"
echo "$ chezmoi init --apply joaoinez"
