Add-Type -AssemblyName System.Drawing

$iconsDir = Join-Path $PSScriptRoot "..\assets\icons"
if (-not (Test-Path $iconsDir)) {
    New-Item -ItemType Directory -Path $iconsDir -Force | Out-Null
}

function Generate-PwaIcon($size, $filename) {
    $bmp = New-Object System.Drawing.Bitmap($size, $size)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic

    # Midnight navy background
    $bgBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 7, 11, 25))
    $g.FillRectangle($bgBrush, 0, 0, $size, $size)

    # Golden circular border
    $pen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(255, 255, 215, 0), ($size * 0.02))
    $padding = $size * 0.08
    $g.DrawEllipse($pen, $padding, $padding, ($size - 2 * $padding), ($size - 2 * $padding))

    # Inner radial glow
    $glowBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(40, 255, 180, 0))
    $g.FillEllipse($glowBrush, ($size * 0.2), ($size * 0.2), ($size * 0.6), ($size * 0.6))

    # Diya bowl
    $goldBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 230, 150, 20))
    $saffronBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 255, 90, 0))
    $whiteBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 255, 255, 255))

    # Diya bowl arc
    $bowlY = $size * 0.58
    $bowlH = $size * 0.24
    $bowlW = $size * 0.54
    $bowlX = ($size - $bowlW) / 2
    $g.FillPie($goldBrush, $bowlX, $bowlY, $bowlW, $bowlH, 0, 180)

    # Diya flame
    $flameW = $size * 0.18
    $flameH = $size * 0.32
    $flameX = ($size - $flameW) / 2
    $flameY = $size * 0.30
    $g.FillEllipse($saffronBrush, $flameX, $flameY, $flameW, $flameH)

    $coreW = $size * 0.09
    $coreH = $size * 0.18
    $coreX = ($size - $coreW) / 2
    $coreY = $size * 0.40
    $g.FillEllipse($whiteBrush, $coreX, $coreY, $coreW, $coreH)

    # Text EcoDiwali
    $fontFamily = New-Object System.Drawing.FontFamily("Arial")
    $fontSize = [float]($size * 0.08)
    $font = New-Object System.Drawing.Font($fontFamily, $fontSize, [System.Drawing.FontStyle]::Bold)
    $textBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 255, 215, 0))
    $sf = New-Object System.Drawing.StringFormat
    $sf.Alignment = [System.Drawing.StringAlignment]::Center
    $g.DrawString("EcoDiwali", $font, $textBrush, [float]($size / 2), [float]($size * 0.84), $sf)

    $outPath = Join-Path $iconsDir $filename
    $bmp.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Png)
    $g.Dispose()
    $bmp.Dispose()
    Write-Host "Generated $filename ($size x $size)"
}

Generate-PwaIcon 192 "icon-192.png"
Generate-PwaIcon 512 "icon-512.png"
