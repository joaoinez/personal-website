#!/bin/bash
set -euo pipefail

echo "Drawing .slivers/arch"

# echo "Disabling IPv6"

# if nmcli -f ipv6.method connection show "Wired connection 1" | grep "enabled" &> /dev/null; then
#   nmcli connection modify "Wired connection 1" ipv6.method "disabled"
#   nmcli connection up "Wired connection 1"
# fi

echo "Updating system"

sudo pacman -Syu --noconfirm

if ! pacman -Qi base-devel &>/dev/null ; then
  echo "Installing base-devel"

  sudo pacman -S --needed --noconfirm base-devel
fi

if ! pacman -Qi git &>/dev/null ; then
  echo "Installing git"

  sudo pacman -S --noconfirm git
fi

if ! pacman -Qi cargo &>/dev/null ; then
  echo "Installing cargo"

  sudo pacman -Sdd --noconfirm cargo
fi

if ! pacman -Qi paru &>/dev/null ; then
  echo "Installing paru"

  git clone https://aur.archlinux.org/paru.git
  cd paru
  makepkg -si --noconfirm
fi

if ! pacman -Qi paru &>/dev/null ; then
  echo "Installing chezmoi"

  paru -S --noconfirm chezmoi
fi

echo "Setup completed. You may now run"
echo "$ chezmoi init --apply joaoinez"