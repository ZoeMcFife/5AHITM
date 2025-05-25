document.write("<h1>CALENDER TEST</h1>");

// create 2d array for calender
var calenderArray = new Array(7);

for (var i = 0; i < calenderArray.length; i++)
{
    calenderArray[i] = new Array(6);
}

//
var date = new Date();
var firstWeekday = new Date(date.getFullYear(), date.getMonth(), 1); 
var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);

// Day Titles

calenderArray[0][0] = "Mon";
calenderArray[0][1] = "Tue";
calenderArray[0][2] = "Wed";
calenderArray[0][3] = "Thu";
calenderArray[0][4] = "Fri";
calenderArray[0][5] = "Sat";
calenderArray[0][6] = "Sun";

// starting position

for (var i = 0; i < firstWeekday.getDate; i++)
{
    calenderArray[1][i] = " ";
}

// fill out calender

var day = 1;

for (i = 1; i < 7; i++)
{
    for (var j = 0; j < 6; j++)
    {
        if (calenderArray[i][j] === " ")
        {
            console.log("Clear");
            continue;
        }
        else if (day > lastDay.getDate())
        {
            console.log("end");
            calenderArray[i][j] = " ";
        }
        else
        {
            console.log("day" + calenderArray[i][j]);
            calenderArray[i][j] = day;
            day++;
        }
    }
}

// print out calender

document.write("<table border=1>");

for (i = 0; i < 7; i++)
{
    document.write("<tr>");   
    for (j = 0; j < 6; j++)
    {
        console.log(calenderArray[i][j]);
        if (calenderArray[i][j] <= date.getDate())
        {
            if (calenderArray[i][j] == date.getDate())
            {
                document.write("<td><b><a href='test.tsts'>" + calenderArray[i][j] + "</a></b></td>");
            }
            else
            {
                document.write("<td> <a href='test.tsts'>" + calenderArray[i][j] + "</a> </td>");          
            }
        }
        else
        {
            document.write("<td> " + calenderArray[i][j] + "</td>");          
        }
    }
    document.write("</tr>");
}

document.write("</table>");


// multiplication table

var multiplicationArray = new Array(9);

for (var i = 0; i < multiplicationArray.length; i++)
{
    multiplicationArray[i] = new Array(9);
}

for (var i = 0; i < 9; i++)
{
    multiplicationArray[0][i] = i + 1;
}

for (var i = 0; i < 9; i++)
{
    multiplicationArray[i][0] = i + 1;
}

for (var i = 1; i < 9; i++)
{
    for (var j = 1; j < 9; j++)
    {
        multiplicationArray[i][j] = multiplicationArray[0][j] * multiplicationArray[i][0];
    }
}

document.write("<table border=1>");
for (i = 0; i < 9; i++)
{
    document.write("<tr>");   
    for (j = 0; j < 9; j++)
    {
        document.write("<td> " + multiplicationArray[i][j] + "</td>");          
    }
    document.write("</tr>");
}

document.write("</table>");
