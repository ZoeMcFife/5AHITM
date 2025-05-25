//5 Spruch des Tages
document.write("<h2>5. Spruch des Tages </h2>");

var quotes = new Array(10);

quotes[0] = "test1";
quotes[1] = "test2";
quotes[2] = "test3";
quotes[3] = "test4";
quotes[4] = "test5";
quotes[5] = "test6";
quotes[6] = "test7";
quotes[7] = "test8";
quotes[8] = "test9";
quotes[9] = "test10";

document.write("<p> Spruch des Tages: " + quotes[Math.floor(Math.random() * 10)] + "</p>");

//6 liste ausdrucken

document.write("<h2>6. Form </h2>");

var manufacturers = new Array(10);

manufacturers[0] = "Origin Jumpworks GmbH";
manufacturers[1] = "Drake Interplanetery";
manufacturers[2] = "Aegis Dynamics";
manufacturers[3] = "Roberts Space Industries";
manufacturers[4] = "Argo Astronautics";
manufacturers[5] = "Anvil Aerospace";
manufacturers[6] = "Crusader Industries";
manufacturers[7] = "Musashi Industrial & Starflight Concern";
manufacturers[8] = "Consolidated Outland";
manufacturers[9] = "Kruger Intergalactic";

manufacturers.sort(); 

for (var i = 0; i < 10; i++)
{
    document.write("<p>" + (i + 1) + ". " + manufacturers[i] + "</p>");
}

document.write('<form id="form1"> <label>Select Manufacturer (1 - 10)<label> <input type="number" id="selectedManufacturer" name="selectedManufacturer" min="1" max="10"> <br> <input type="button" onclick="outputManufacturer()" value="Select"> </form> <p id="output"> <p>');

function outputManufacturer()
{
    var selectedManufacturer = document.getElementById("selectedManufacturer").value - 1;

    document.getElementById("output").innerHTML = "<p>You selected: " + manufacturers[selectedManufacturer] + "</p>";
}

//7 Formularfelder überprüfen

document.write("<h2>7. Form </h2>");

function checkData()
{
    var errors = 0;

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var comment = document.getElementById("comment").value;
    var ship = document.getElementById("selectedOption").value;
    var tosCheck = document.getElementById("tosCheck").checked;

    var emailMatch = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    var checkEmail = email.match(emailMatch);

    if (checkEmail == 0)
        errors++;

    var passwordMatch = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm);
    var checkPassword = password.match(passwordMatch);

    console.log("CHECK REGEX: " + checkPassword + " " + checkEmail);

    if(checkPassword == null)
        errors++;

    if (comment.length == null)
        errors++;
    
    if (tosCheck == false)
        errors++;
    
    if (ship == null)
        errors++;

    if (errors != 0)
    {
        document.getElementById("outputForm7").innerHTML = "Uh oh. You have " + errors + " erros in your Form.";
    }
    else 
    {
        document.getElementById("outputForm7").innerHTML = "Form has been sent.";      
    }

}