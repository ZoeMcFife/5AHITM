//1. Greeting

document.write("<h2>1. Greeting</h2>");

var date = new Date();
var currentHour = date.getHours();

if (currentHour < 12)
{
    document.write("<p>Good Morning!</p>");
}
else
{
    document.write("<p>Good Day!</p>");
}

//2. Donald Ducks Age

document.write("<h2>2. Donald Duck</h2>");

var nameDuck = "Donald Duck";
var birthYear = 1954;
var age = date.getFullYear() - birthYear;

document.write(nameDuck + " is " + age + " Years old.<br>");

if (age < 60)
{
    document.write(nameDuck + " is still powerful for job. <br>");
}
else if (age > 60)
{
    document.write(nameDuck + " is in pension and almost dead.<br>");
}

//3. Weekday recommendations 

document.write("<h2>3. Weekday recommendations</h2>");

var currentWeekday = date.getDay(); 
var recommendedClothing;

switch (currentWeekday)
{
    case 1:
        currentWeekday = "monday";
        recommendedClothing = "t-shirt";
        break;
    case 2:
        currentWeekday = "tuesday";
        recommendedClothing = "jeans";
        break;
    case 3:
        currentWeekday = "wednesday";
        recommendedClothing = "nordic jacket";
        break;
    case 4:
        currentWeekday = "thursday";
        recommendedClothing = "shirtless";
        break;
    case 5:
        currentWeekday = "friday";
        recommendedClothing = "sweater";
        break;
    case 6:
        currentWeekday = "saturday";
        recommendedClothing = "ugly sweater";
        break;
    case 7:
        currentWeekday = "sunday";
        recommendedClothing = "t-shirt";
        break;
}

document.write("Today is " + currentWeekday + " and I recommend you wear: " + recommendedClothing + "<br>");

document.write("<br>")