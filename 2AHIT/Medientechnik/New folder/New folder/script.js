function calculate()
{
    let radius = document.getElementById("radius").value;
    
    let diameter = radius * 2;
    let circumference = radius * Math.PI * 2;
    let area = radius * radius * Math.PI;

    console.log("woooooo");

    document.getElementById("diameter").value = diameter;
    document.getElementById("area").value = area;
    document.getElementById("circumference").value = circumference;
}


document.getElementById("place").onmouseover = function () 
{
    this.src = "https://starcitizen.tools/images/9/92/Carrack_over_microTech_3.8.png";
}

