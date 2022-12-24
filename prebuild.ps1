Write-Output "delete static files from django"
# delete static files from django
Remove-Item -Path ..\mediascout_backend\mediaScout_django\api\static\assets -Recurse -Force

Write-Output "copy static files from svelte to django"
# copy and replace assets
Copy-Item -Path .\dist\assets ..\mediascout_backend\mediaScout_django\api\static\assets -Recurse -Force

Write-Output "copy svg site image"
# copy favicon.svg | vite.svg
Copy-Item -Path .\dist\vite.svg ..\mediascout_backend\mediaScout_django\api\static\vite.svg -Recurse -Force


Write-Output "delete django template"
# delete django template
Remove-Item -Path ..\mediascout_backend\mediaScout_django\api\templates\index.html

Write-Output "get svg file name"
# save svg name
$svgName = Get-ChildItem -Path .\dist -Filter "*.svg" | Where-Object {
    $_.Extension -eq ".svg" } | Select-Object -ExpandProperty Name

Write-Output "get js file name"
# save the js script name
$jsName = Get-ChildItem -Path .\dist\assets -Filter "*.js" | Where-Object {
    $_.Extension -eq ".js" } | Select-Object -ExpandProperty Name

Write-Output "get css file name"
# save the css script name
$cssName = Get-ChildItem -Path .\dist\assets -Filter "*.css" | Where-Object {
    $_.Extension -eq ".css" } | Select-Object -ExpandProperty Name


Write-Output "define template text"
# define text of the template
$text = "
{% load static %}
<!DOCTYPE html>
<html lang=`"en`">
  <head>
    <meta charset=`"UTF-8`" />
    <link rel=`"shortcut icon`" type=`"image/svg+xml`" href=`"{% static '/" + $svgName + "' %}`" />
    <meta name=`"viewport`" content=`"width=device-width, initial-scale=1.0`" />
    <title>Mediascout</title>
    <script type=`"module`" crossorigin src=`"{% static 'assets/" + $jsName + "' %}`"></script>
    <link rel=`"stylesheet`" href=`"{% static 'assets/" + $cssName + "' %}`">
  </head>
  <body>
    <div id=`"app`"></div>
  </body>
</html>
"

Write-Output "create template and append template text to it."
# add content of text to newly created template
New-Item -ItemType File -Path ..\mediascout_backend\mediaScout_django\api\templates\index.html -Value $text

Write-Output "Script excuted successfully!"