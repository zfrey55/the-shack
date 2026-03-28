# Creates github.com/the-shack (or your chosen name) and pushes the current repo.
# Prerequisite: run `gh auth login -w -p https` once and finish in the browser.

$ErrorActionPreference = "Stop"
Set-Location $PSScriptRoot

$gh = if (Test-Path "C:\Program Files\GitHub CLI\gh.exe") {
  "C:\Program Files\GitHub CLI\gh.exe"
} else {
  "gh"
}

& $gh auth status 2>&1 | Out-Null
if ($LASTEXITCODE -ne 0) {
  Write-Host ""
  Write-Host "GitHub CLI is not logged in. Run this, then approve in your browser:" -ForegroundColor Yellow
  Write-Host "  & `"$gh`" auth login -w -p https" -ForegroundColor Cyan
  Write-Host ""
  exit 1
}

if (git remote get-url origin 2>$null) {
  Write-Host "Remote 'origin' already exists. Push with: git push -u origin master" -ForegroundColor Yellow
  exit 1
}

$repoName = if ($args[0]) { $args[0] } else { "the-shack" }
Write-Host "Creating github.com repo '$repoName' and pushing..." -ForegroundColor Green
& $gh repo create $repoName --public --source=. --remote=origin --push
