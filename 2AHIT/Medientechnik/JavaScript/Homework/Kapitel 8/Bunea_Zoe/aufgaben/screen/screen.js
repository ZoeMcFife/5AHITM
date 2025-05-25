document.write("<h2>Your screen specs</h2><br>");

if (screen.width < 1200)
    document.write("<p>Your Rating: Buy a new monitor</p>");
else
    document.write("<p>Your Rating: OK</p>");

document.write("<h3>Info</h3>");

document.write("<p>Heigt: " + screen.height + "</p>");
document.write("<p>Width: " + screen.width + "</p>");
document.write("<p>Color depth: " + screen.colorDepth + "</p>")
document.write("<p>Pixel depth: " + screen.pixelDepth + "</p>");