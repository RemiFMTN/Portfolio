$ErrorActionPreference = "Stop"

# Paths
$gameDir = "C:\Users\azert\Documents\INFORMATIQUE\simulateur_collision_python"

# Build with pygbag
Set-Location $gameDir
pygbag --disable-sound-format-error main.py

Write-Host "Pygbag build complete in build/web"