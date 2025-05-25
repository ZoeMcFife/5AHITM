var imgSrc = document.createAttribute("src");
imgSrc.nodeValue = "https://starcitizen.tools/images/9/92/Carrack_over_microTech_3.8.png";

var title = document.createAttribute("title");
title.nodeValue = "This is a Carrack";

var img = document.createElement("img");
img.setAttributeNode(imgSrc);
img.setAttributeNode(title);

var heading = document.createElement("h1");
var headingTitle = document.createTextNode("Carrack");
heading.appendChild(headingTitle);

document.getElementsByTagName("body")[0].appendChild(heading);
document.getElementsByTagName("body")[0].appendChild(img);

