class Color
{   
    constructor (color, name)
    {
        this.color = color;
        this.name = name;
    }

    getRGB() 
    {
        let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(this.color)

        return new RGB(parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16));
    }

    getCMY()
    {
        let cyan = (255 - this.getRGB().red) * 100 / 255;
        let magenta = (255 - this.getRGB().green) * 100 / 255;
        let yellow = (255 - this.getRGB().blue) * 100 / 255;

        return new CMY(cyan, magenta, yellow);
    } 
}

class RGB
{
    constructor(red, green, blue)
    {
        this.red = red;
        this.green = green;
        this.blue = blue;
    }
}

class CMY
{
    constructor(cyan, magenta, yellow)
    {
        this.cyan = cyan;
        this.magenta = magenta;
        this.yellow = yellow
    }
}


function createColor(name)
{
    let newColor;

    console.log(name);

    console.log(name == "yellow");
    console.log(name === "yellow");

    switch (String(name))
    {
        case "yellow":
            newColor = new Color("#fff100", name);
            break;
        case "lime":
            newColor = new Color("#99bc1a", name);
            break;
        case "green":
            newColor = new Color("#439d29", name);
            break;
        case "turqoise":
            newColor = new Color("#008c8c", name);
            break;
        case "blue":
            newColor = new Color("#155e9d", name);
            break;
        case "dark blue":
            newColor = new Color("#0083d7", name);
            break;
        case "slate blue":
            newColor = new Color("#424e8d", name);
            break;
        case "purple":
            newColor = new Color("#9b4a87", name);
            break;
        case "pink":
            newColor = new Color("#dc0067", name);
            break;
        case "rose":
            newColor = new Color("#e52c54", name);
            break;
        case "red":
            newColor = new Color("#ec3f32", name);
            break;
        case "orange":
            newColor = new Color("#ffa002", name);
            break;
        default:
            newColor = new Color("#ffffff", "error");
            break;
    }

    return newColor;
}

function changeText(color)
{
    let rgb = color.getRGB();

    let red = document.getElementById("red");
    let green = document.getElementById("green");
    let blue = document.getElementById("blue");

    let selected = document.getElementsByClassName("selectedColor");

    red.innerText = "Red: " + rgb.red;
    green.innerText = "Green: " + rgb.green;
    blue.innerText = "Blue: " +rgb.blue

    selected[0].innerText = color.name;

    let cmy = color.getCMY();

    let cyan = document.getElementById("cyan");
    let magenta = document.getElementById("magenta");
    let yellow = document.getElementById("yellow");

    cyan.innerText = "Cyan: " + Math.round(cmy.cyan);
    magenta.innerText = "Magenta: " + Math.round(cmy.magenta);
    yellow.innerText = "Yellow: " + Math.round(cmy.yellow);

    selected[1].innerHTML = color.name;
}

function changeColor(colorName)
{
    let color = createColor(colorName);
    
    changeText(color);

    var root = document.querySelector(':root');
    root.style.setProperty('--selected-color', color.color);
    console.log(color.color);
}




