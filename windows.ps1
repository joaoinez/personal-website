Write-Output "Drawing .slivers/windows"

winget install --id gerardog.gsudo
winget install --id Git.Git
winget install --id twpayne.chezmoi
winget install --id Chocolatey.Chocolatey

Write-Output "Setup completed."

Write-Output "Open a new shell and initialize chezmoi by running:"
Write-Output "chezmoi init --apply joaoinez"
