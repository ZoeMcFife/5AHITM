function Raumschiff(name, modell, kapitän)
{
    this.name = name;
    this.modell = modell;
    this.entfernung = 0;
    this.kapitän = kapitän;
    this.entfernen = function(lichtjahre) 
    {
        this.entfernung += lichtjahre;
        document.write(this.name + " => Aktuelle Reise: " + lichtjahre + " Lichtjahre -> Erdentfernung: " + this.entfernung + " Lightjahre<br>");
    }
    this.overview = function()
    {
        document.write("<h1>" + this.name + "</h1>" + "<p>Modell: " + this.modell + "</p>" + "<p>Kapitän: " + this.kapitän.name + "</p>");
    }
    this.zurueck = function(lichtjahre)
    {
        this.entfernung -= lichtjahre;
        
        if (this.entfernung > 0)
        {
            document.write("<p>" + this.name + " kommt zurück zur Erde: nur noch " + this.entfernung + " Lichtjahre;</p>");
        }
        else if (this.entfernung === 0)
        {
            document.write("<p> Willkommen zu Hause auf der Erde, " + this.name + "!</p>");
        }
        else
        {
            document.write("<p>" + this.name + " ist bereits auf der Erde gelandet!</p>");
            this.entfernung = 0;
        }
    } 
}

function Person(name)
{
    this.name = name;
}

var kirk = new Person("Kirk");
var janeway = new Person("Janeway");
var archer = new Person("Archer");

var enterprise = new Raumschiff("Enterprise", "NCC-1540", kirk);
var voyager = new Raumschiff("Voyager", "NCC-6942", janeway);
var challenger = new Raumschiff("Challenger", "NCC-1452", archer);


enterprise.entfernen(150);
voyager.entfernen(50);
challenger.entfernen(10);

enterprise.entfernen(4);
voyager.entfernen(-61);
challenger.entfernen(41);

enterprise.entfernen(450);
voyager.entfernen(30);
challenger.entfernen(-1);

enterprise.entfernen(-60);
voyager.entfernen(300);
challenger.entfernen(200);

enterprise.entfernen(45);
voyager.entfernen(-120);
challenger.entfernen(135);


enterprise.zurueck(350);
voyager.zurueck(150);
challenger.zurueck(300);

enterprise.zurueck(239);
voyager.zurueck(49);
challenger.zurueck(85);


enterprise.entfernen(50); 
enterprise.entfernen(100); 
enterprise.zurueck(50); 

enterprise.zurueck(100); 
enterprise.zurueck(50);

enterprise.overview();
voyager.overview();
challenger.overview();
