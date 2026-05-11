$ErrorActionPreference = "Stop"

# Paths
$gameDir = "C:\Users\azert\Documents\INFORMATIQUE\simulateur_collision_python"
$siteDir = "C:\Users\azert\Documents\INFORMATIQUE\site_portfolio"

# Build with pygbag
Set-Location $gameDir
pygbag --disable-sound-format-error main.py

# Copy build to site
Set-Location $siteDir
$webDir = Join-Path $siteDir "public\pygame\web"
Remove-Item -Recurse -Force "$webDir\*"
Copy-Item -Recurse -Force (Join-Path $gameDir "build\web\*") $webDir
Copy-Item -Recurse -Force (Join-Path $gameDir "build\web-cache") $webDir

# Patch index.html (autorun, ume_block, force APK, skip UME gate)
$indexPath = Join-Path $webDir "index.html"
$content = Get-Content -Raw $indexPath

$content = $content -replace 'ume_block\s*:\s*\d', 'ume_block : 0'
$content = $content -replace 'autorun\s*:\s*\d', 'autorun : 1'

if ($content -notmatch 'MM\.UME\s*=\s*True') {
    $content = $content -replace '(platform\.window\.canvas\.style\.visibility = "visible"\s*)', "`$1    # Skip media user engagement gate for dev iframe`r`n    platform.window.MM.UME = True`r`n"
}

$apkBlock = @'
    # unpack filesystem from compressed archive into work dir (force APK/zip)
    import zipfile
    async with platform.fopen("simulateur_collision_python.apk", "rb") as archive:
        with zipfile.ZipFile(archive) as zip_ref:
            zip_ref.extractall(appdir.as_posix())
'@

$content = $content -replace '(?s)# unpack filesystem from compressed archive into work dir.*?tar\.close\(\)', $apkBlock

Set-Content -Path $indexPath -Value $content -Encoding UTF8

Write-Host "Pygbag build copied and patched in public/pygame/web"