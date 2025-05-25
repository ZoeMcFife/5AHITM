function calculateAge()
{
    var birthYear = document.getElementById("birthYear").value;
    var age;
    var date = new Date();
    var currentYear = date.getFullYear();
    
    age = currentYear - birthYear;

    console.log("currentYear: " + currentYear + " BirhtYEar: "+ birthYear + " age: "+ age);

    if (birthYear > currentYear) 
    {
        writeAgeMessage("Your birth year is invalid.");
    }
    else if (age > 150)
    {
        writeAgeMessage("You are " + age + " years old. Are you sure about that?");
    }
    else
    {
        writeAgeMessage("Your age: " + age);
    }
}

function writeAgeMessage(text)
{
    document.getElementById("ageMessage").innerHTML = text;
}