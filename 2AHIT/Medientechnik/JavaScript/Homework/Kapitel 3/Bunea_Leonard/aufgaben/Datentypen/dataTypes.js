var name = "Schafe";
var anzahl = 5;
var anzahlBeine = anzahl * 4;

document.write("<p>5.</p>")

document.write("Beine " + name + " = " + anzahlBeine + "<br>");
document.write("<p>6.</p>")
var nameDuck = "Donald Duck";
var birthYear = 1954;

var date = new Date();
var year = date.getFullYear();

document.write(nameDuck + " ist heuer " + (year - birthYear) + " Jahre alt.<br>");

document.write("<p>7..</p>")
var andTable = '<table> <tr> <td class="highlight">UND</td> <td class="highlight2">true</td> <td class="highlight2">false</td> </tr> <tr> <td class="highlight2">true</td> <td>' + (true && true) + '</td> <td>' + (false && true) + '</td> </tr><tr><td class="highlight2">false</td> <td>' + (true && false) + '</td> <td>' + (false && false) + '</td></tr>';
var orTable = '<table> <tr> <td class="highlight">ODER</td> <td class="highlight2">true</td> <td class="highlight2">false</td> </tr> <tr> <td class="highlight2">true</td> <td>' + (true || true) + '</td> <td>' + (false || true) + '</td> </tr><tr><td class="highlight2">false</td> <td>' + (true || false) + '</td> <td>' + (false || false) + '</td></tr>';

document.write(andTable);
document.write(orTable);

document.write("<p>8.</p>")

var a = 3;
var b = "Hello World";
var c = true;

document.write("<br> a: " + typeof(a) + "<br> b:" + typeof(b) + "<br> c:" + typeof(c));

