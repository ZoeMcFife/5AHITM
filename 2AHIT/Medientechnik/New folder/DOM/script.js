let imgSrc = document.createAttribute("src");
imgSrc.nodeValue = "https://starcitizen.tools/images/9/92/Carrack_over_microTech_3.8.png";

let img = document.createElement("img");
img.setAttributeNode(imgSrc);

let heading = document.createElement("h1");
let text = document.createTextNode("tet");
heading.appendChild(text);

document.getElementsByTagName("body")[0].appendChild(heading);
//document.getElementsByTagName("body")[0].appendChild(img);

let window1 = null;

//window1 = window.open("https://www.starcitizen.tools/", "SC", "left=100,top=100, width=100, height=100");

function add()
{
    setTimeout(timeIncrese, 2000);
}

function timeIncrese()
{
    let textBox = document.getElementById("tex");
    let timePassed = parseInt(textBox.value);

    timePassed += 2;

    textBox.value = timePassed;
}

document.onkeydown = handle;

function handle(e)
{
    let keyPressed = e.key;
    let keyPressTet = document.getElementById("owo");

    keyPressTet.value = keyPressed;
}