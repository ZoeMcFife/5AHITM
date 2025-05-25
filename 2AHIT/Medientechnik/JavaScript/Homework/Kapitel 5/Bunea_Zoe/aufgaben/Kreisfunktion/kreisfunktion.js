function calculateAllValues()
{
    var circumference;
    var area;
    var diameter;

    var radius = document.getElementById("radius").value;
    var decimals = document.getElementById("precision").value;

    var precision = 1;
    
    for (var i = 0; i < decimals; i++)
    {
        precision *= 10;
    }

    circumference = calculateCirumference(radius);
    area = calculateArea(radius);
    diameter = calculateDiameter(radius);

    document.getElementById("circumference").value = Math.round((circumference + Number.EPSILON) * precision) / precision;
    document.getElementById("area").value = Math.round((area + Number.EPSILON) * precision) / precision;
    document.getElementById("diameter").value = Math.round((diameter + Number.EPSILON) * precision) / precision;
}

function calculateCirumference(radius)
{
    return radius * 2 * Math.PI;
}

function calculateArea(radius)
{
    return radius * radius * Math.PI;
}

function calculateDiameter(radius)
{
    return radius * 2;
}