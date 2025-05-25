// 1 number object
document.write("<h1>1. Number Object </h1>");

var iVal = 1234;
var iOVal = new Number(1234);
 
if (iVal == iOVal)
{
    console.log("iVal == iOval");
}
else
{
    console.log("iVal doesn't equal iOVal");
}

if (iVal === iOVal)
{
    console.log("iVal  === iOval");
}
else
{
    console.log("iVal doesn't equal iOVal");
}

// 2 zeichen zählen
document.write("<h1>2. Counting chars </h1>");

document.write('<form id="form1"> Enter String <input type="text" id="stringNR2"> <br> Enter Char to find <input type="text" id="charFindNR2"> <br> <input type="button" onclick="find()" value="find"></form><br> <p id="output2"> <p>');

function find()
{
    var string = document.getElementById("stringNR2").value;
    var char = document.getElementById("charFindNR2").value;
    
    var matchExp = new RegExp(`${char}`, `gi`);
    
    var matches = string.match(matchExp);

    matches != null ? document.getElementById("output2").innerHTML = "<p> Count: " + matches.length + "</p>" : document.getElementById("output2").innerHTML = "<p> Count: 0 </p>";
} 


// 3 rechnen
document.write("<h1>3. Calculating stuff</h1>");

var garten = "Lange=110, Breite=50m";

var matchExp = new RegExp(/\d+/gi);

var matches = garten.match(matchExp);

var output = Math.sqrt(Math.pow(matches[0], 2) + Math.pow(matches[1], 2));

document.write("<p>Output: " + output + "</p>");

// 4 Mitlaute replacen 
document.write("<h1>4. Mitlaute replacen </h1>");

//4a
document.write("<h2>a. mit Stringfunktionen</h2>");

document.write('<form id="form2"> Enter String <input type="text" id="stringNR4a"> <br> <input type="button" onclick="replaceMitlautString()" value="Replace"></form><br> <p id="output4a"> <p>');

function replaceMitlautString()
{
    string = document.getElementById("stringNR4a").value;
    var outputString = "";

    for (var i = 0; i < string.length; i++)
    {
        switch (string[i])
        {
            case 'ä':
                console.log(outputString);
                outputString += 'ae';
                break;
            case 'ö':
                outputString += 'oe';
                break;
            case 'ü':
                outputString += 'ue';
                break;    
            default:
                outputString += string[i];
                break;
        }
    }


    document.getElementById("output4a").innerHTML = "<p>" + outputString + "</p>";
}

//4b
document.write("<h2>b. mit Regex</h2>");

document.write('<form id="form3"> Enter String <input type="text" id="stringNR4b"> <br> <input type="button" onclick="replaceMitlautStringRegex()" value="Replace"></form><br> <p id="output4b"> <p>');

function replaceMitlautStringRegex()
{
    string = document.getElementById("stringNR4b").value;
    var outputString = "";

    outputString = string.replace(/[ä]/gi, 'ae');
    outputString = outputString.replace(/[ö]/gi, 'oe');
    outputString = outputString.replace(/[ü]/gi, 'ue');

    document.getElementById("output4b").innerHTML = "<p>" + outputString + "</p>";
}
