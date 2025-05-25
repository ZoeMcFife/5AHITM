function findChar()
{
    let text = document.getElementById("text").value;
    let char = document.getElementById("char").value;

    var matchExp = new RegExp(`${char}`, `gi`);
    var matches = text.match(matchExp);

    document.getElementById("charCount").value = matches.length;
}



let str = "Länge: 30m Breite: 50m";

let matchExp = new RegExp(/\d+/gi);
let matches = str.match(matchExp);

console.log(matches[0] + " " + matches[1]);