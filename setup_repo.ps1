# Script to restructure and initialize GitHub repository
param()

Set-Location "c:\Users\ACER-re\Downloads\IT342_G6_Tan_Lab1"

# Step 1: Move .git folder from backend/backend to root
$gitSource = "./backend/backend/.git"
$gitDest = "./.git"

if (Test-Path $gitSource) {
    Write-Host "Moving .git folder..."
    if (Test-Path $gitDest) {
        Remove-Item -Path $gitDest -Recurse -Force
    }
    Move-Item -Path $gitSource -Destination $gitDest -Force
    Write-Host ".git folder moved to root"
}

# Step 2: Move all content from backend/backend/* to backend/
Write-Host "Restructuring backend folder..."
$sourceFiles = Get-ChildItem -Path "./backend/backend" -Force | Where-Object { $_.Name -ne ".git" }

foreach ($item in $sourceFiles) {
    $destPath = "./backend/$($item.Name)"
    if (Test-Path $destPath) {
        Remove-Item -Path $destPath -Recurse -Force
    }
    Move-Item -Path $item.FullName -Destination $destPath -Force
    Write-Host "  Moved: $($item.Name)"
}

# Step 3: Remove empty backend/backend directory
Remove-Item -Path "./backend/backend" -Force -ErrorAction SilentlyContinue
Write-Host "Removed empty backend/backend directory"

# Step 4: Remove .idea directories
Remove-Item -Path "./backend/.idea" -Recurse -Force -ErrorAction SilentlyContinue
Write-Host "Removed .idea directories"

Write-Host "Setup complete!"
Get-ChildItem -Force
