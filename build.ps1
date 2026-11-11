param(
    [string]$Document = 'setup-check.tex'
)
$ErrorActionPreference = 'Stop'
Push-Location $PSScriptRoot
try {
    $engineCommand = Get-Command xelatex -ErrorAction SilentlyContinue
    $enginePath = if ($engineCommand) { $engineCommand.Source } else { $null }
    if (-not $enginePath) {
        $candidate = Join-Path $env:LOCALAPPDATA 'Programs\MiKTeX\miktex\bin\x64\xelatex.exe'
        if (Test-Path -LiteralPath $candidate) { $enginePath = $candidate }
    }
    if (-not $enginePath) { throw 'XeLaTeX not found. Install MiKTeX, then reopen your terminal.' }
    if (-not (Test-Path -LiteralPath $Document -PathType Leaf)) { throw "Document not found: $Document" }
    New-Item -ItemType Directory -Path build -Force | Out-Null
    for ($pass = 1; $pass -le 2; $pass++) {
        # Windows PowerShell can turn redirected native stderr into exceptions.
        # Judge the compiler by its exit code while preserving its diagnostics.
        $ErrorActionPreference = 'Continue'
        & $enginePath -interaction=nonstopmode -halt-on-error -file-line-error -synctex=1 -output-directory=build $Document
        $compilerExitCode = $LASTEXITCODE
        $ErrorActionPreference = 'Stop'
        if ($compilerExitCode -ne 0) { throw "XeLaTeX failed on pass $pass. See build/*.log." }
    }
} finally { Pop-Location }
