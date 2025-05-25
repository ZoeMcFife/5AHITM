var i;
var j;

//4. for loop

document.write("<h2>4. For loop</h2>");

for (i = 0; i < 5; i++)
{
    document.write("Current number: " + i + "<br>");
}

//5. heading loop

document.write("<h2>5. heading loop </h2>");

for (i = 1; i < 7; i++)
{
    document.write("<h" + i + "> Heading " + i + "</h" + i + ">" );
}

//6. table

document.write("<h2>6. Table </h2>");

//setup table
document.write("<table border=1>");

//create table elements
var currentNumber = 1;

for (i = 0; i < 3; i++)
{
    document.write("<tr>");
    for (j = 0; j < 10; j++)
    {
        document.write("<td>" + currentNumber + "</td>");
        currentNumber++;
    }
    document.write("</tr>");
}

//end table
document.write("</table>");

//7. multiplication table

document.write("<h2>7. multiplication table </h2>");

//setup table
document.write("<table border=1>");

//create 2d array
var multiplicationArray = new Array(10);

for (var i = 0; i < multiplicationArray.length; i++) 
{
    multiplicationArray[i] = new Array(10);
}

for (i = 1; i < 10; i++)
{
    multiplicationArray[0][i - 1] = i;
    multiplicationArray[i - 1][0] = i;
}

for (i = 1; i < 10; i++)
{
    document.write("<tr>");
    for (j = 1; j < 10; j++)
    {
        multiplicationArray[i][j] = multiplicationArray[i][0] * multiplicationArray[0][j]
    }
}

for (i = 0; i < 9; i++)
{
    document.write("<tr>");
    for (j = 0; j < 9; j++)
    {
        document.write("<td>" + multiplicationArray[i][j] + "</td>");
    }
    document.write("</tr>");
}

//end table
document.write("</table>");

//8. Calender

document.write("<h2>8. Calender </h2>");


//create 2d array
var calenderArray = new Array(7);

for (var i = 0; i < calenderArray.length; i++) 
{
    calenderArray[i] = new Array(6);
}

var date = new Date();
var firstWeekday = new Date(date.getFullYear(), date.getMonth(), 1); 
var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);

calenderArray[0][0] = "Mon";
calenderArray[0][1] = "Tue";
calenderArray[0][2] = "Wed";
calenderArray[0][3] = "Thu";
calenderArray[0][4] = "Fri";
calenderArray[0][5] = "Sat";
calenderArray[0][6] = "Sun";

for (i = 0; i < firstWeekday.getDay(); i++)
{
    calenderArray[1][i] = " ";
}

var day = 1;

for (j = 1; j < 7; j++)
{
    for (var k = 0; k < 6; k++)
    {
        if (calenderArray[j][k] === " ")
        {
            continue;
        }
        else if (day > lastDay.getDate())
        {
            calenderArray[j][k] = " ";
        }
        else 
        {
            calenderArray[j][k] = day;
            day++;
        }
    }
} 

//link array
var linkArray = new Array(31);
for (i = 0; i < 31; i++)
{
    linkArray[i] = "test.test";
}

document.write("<table border=1");

for (i = 0; i < 7; i++)
{
    document.write("<tr>");
    for (j = 0; j < 6; j++)
    {
        if (calenderArray[i][j] <= date.getDate())
        {

            if (calenderArray[i][j] == date.getDate())
            {
                document.write("<td><b><a href='" + linkArray[calenderArray[i][j]] + "'>" + calenderArray[i][j] + "</a><b></td>");
            }
            else
            {
                document.write("<td><a href='" + linkArray[calenderArray[i][j]] + "'>" + calenderArray[i][j] + "</a></td>");
            }
        }
        else
        {
            document.write("<td>" + calenderArray[i][j] + "</td>");
        }
    }
    document.write("</tr>");
}

document.write("</table>");