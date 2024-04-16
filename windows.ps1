Write-Output "Drawing .slivers/windows"

winget install --id Microsoft.Powershell
winget install --id gerardog.gsudo
winget install --id Git.Git
winget install --id twpayne.chezmoi

Write-Output "Setup completed."

Write-Output "Open a new shell and initialize chezmoi by running:"
Write-Output "chezmoi init --apply joaoinez"
