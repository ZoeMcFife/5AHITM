function Windrose(circleDivision)
{
    this.circleDivision = circleDivision;

    //converts degrees to compassheading and returns the result
    this.convertDirection = function(degrees)
    {
        degrees = convertAngle(degrees);
        return this.returnClosestDirection(degrees);
    }

    this.returnClosestDirection = function(degrees)
    {   
        var compassHeadings = ["N", "NzO", "NNO", "NOzN", "NO", "NOzO", "ONO", "OzN", "O", "OzS", "OSO", "SOzO", "SO", "SOzS", "SSO", "SzO", "S", "SzW", "SSW", "SWzS", "SW", "SWzW", "WSW", "WzS", "W", "WzN", "WNW", "NWzW", "NW", "NWzN", "NNW", "NzW", "N"];

        var selectedHeading;
        var degreeDiv = 360 / this.circleDivision;
        var multiplier;

        //selects the needed multiplier to get the correct index
        switch (this.circleDivision)
        {
            case 32:
                multiplier = 1;
                break;
            case 16:
                multiplier = 2;
                break;
            case 8:
                multiplier = 4;
                break;
            case 4:
                multiplier = 8;
                break;
        }
        //calculates the array index of the compass heading closest to the given degrees
        selectedHeading = compassHeadings[Math.round(degrees / degreeDiv) * multiplier]; 

        return selectedHeading;
    }

    //converts any given angle to be between 0 and 360. Negative angles counted anti-clockwise i.e. -3 -> 357 
    var convertAngle = function(degrees)
    {
        var timesGreater;
        
        if (degrees < 0)
        {
            timesGreater = Math.floor(Math.abs(degrees) / 360);  
            degrees = 360 * (timesGreater + 1) + degrees;
        }
        
        timesGreater = Math.floor(Math.abs(degrees) / 360);  

        return degrees - timesGreater * 360;
    }

    //return the file path an image corresponding the heading
    this.getWindroseFile = function(direction)
    {
        var compassHeadings = ["N", "NzO", "NNO", "NOzN", "NO", "NOzO", "ONO", "OzN", "O", "OzS", "OSO", "SOzO", "SO", "SOzS", "SSO", "SzO", "S", "SzW", "SSW", "SWzS", "SW", "SWzW", "WSW", "WzS", "W", "WzN", "WNW", "NWzW", "NW", "NWzN", "NNW", "NzW", "N"];

        const isEqual = (element) => element === direction;

        return "images\\Windwose_" + compassHeadings.findIndex(isEqual) + ".gif";
    }
}

function calculateDirection()
{
    var windrose = new Windrose;
    
    var degrees = Number(document.getElementById("degrees").value);
    windrose.circleDivision = Number(document.getElementById("division").value);

    var result = windrose.convertDirection(degrees);

    document.getElementById("calWindroseOutput").innerHTML = "Result: " + result;
    document.getElementById("windrosePicture").src = windrose.getWindroseFile(windrose.convertDirection(degrees));

    console.log(windrose.getWindroseFile(result));
}
