function calculate()
{
    let radius = document.getElementById("radius").value;
    
    let circumference = calcCircumference(radius);
    let diameter = calcDiameter(radius);
    let area = calcArea(radius);

    console.log(circumference);

    document.getElementById("circumference").value = circumference;
    document.getElementById("diameter").value = diameter;
    document.getElementById("area").value = area;
}

function calcCircumference(radius)
{
    return radius * 2 * Math.PI;
}

function calcDiameter(radius)
{
    return radius * 2;
}

function calcArea(radius)
{
    return radius * radius * Math.PI;
}

function space()
{
    let msrInternals = new ShipComponents("Grade 5 5A FSD", "XL-1", "2x Size 4A Shields", 114);
    let msr = new Spaceship("Crusader Industries", "Mercury Star Runner", 2943, 60, 1249, msrInternals, 32);

    let origInternals = new ShipComponents("Grade 5 7A FSD", "Size 4 QD", "1x Size 8A Shields", 320);
    let orig890 = new Spaceship("Origin GmbH", "890 Jump", 2963, 36, 900, origInternals, 128);

    msr.printShip();
    msr.jump(26);
    msr.printShip();
    msr.jump(15);
    msr.printShip();
    msr.jump(2);
    msr.printShip();
    msr.jump(60);
    msr.printShip();

    orig890.printShip();
    orig890.jump(26);
    orig890.printShip();
    orig890.jump(15);
    orig890.printShip();
    orig890.jump(2);
    orig890.printShip();    
    orig890.jump(36);
    orig890.printShip();


}

function Spaceship(manufacturer, model, releaseYear, maxRange, maxSpeed, components, currentFuel)
{
    this.manufacturer = manufacturer;
    this.model = model;
    this.releaseYear = releaseYear;
    this.maxRange = maxRange;
    this.maxSpeed = maxSpeed;
    this.components = components;
    this.currentFuel = currentFuel;

    this.printShip = function ()
    {
        document.write("<h2>" + manufacturer + " " + model + "</h2>");
        document.write("<p> Year: " + releaseYear + "</p>");
        document.write("<p> Range: " + maxRange + " LY</p>");
        document.write("<p> Speed: " + maxSpeed + " m/s</p>");
        document.write("<p> Fuel: " + currentFuel + " tons</p>");
        components.printComponents();
    }

    this.jump = function (distance)
    {
        fuelConsumption = ((distance * distance) / maxRange) * 0.6;

        if (distance > maxRange || (currentFuel - fuelConsumption) < 0)
        {
            document.write("<p>Not enough range for " + distance + "ly! </p>");
            return;
        }

        
        document.write("<p> " + manufacturer + " " + model + " jumps " + distance + " ly consuming " + fuelConsumption + " tons of fuel.</p>");
        currentFuel -= fuelConsumption;
    }
}

function ShipComponents(frameShiftDrive, quantumDrive, shields, cargo)
{
    this.frameShiftDrive = frameShiftDrive;
    this.quantumDrive = quantumDrive;
    this.shields = shields;
    this.cargo = cargo;

    this.printComponents = function ()
    {
        document.write("<h3> Compontents </h3>");
        document.write("<p> Frame Shift Drive: " + frameShiftDrive + "</p>");
        document.write("<p> Shields: " + shields + "</p>");
        document.write("<p> Quantum Drive: " + quantumDrive + "</p>");
        document.write("<p> Cargo Space: " + cargo + " SCU </p>");
    }
}
