function calculate()
{
    var a = parseFloat(document.getElementById("num1").value);
    var b = parseFloat(document.getElementById("num2").value);

    var result;

    var operator = document.getElementById("operator").value;

    switch (operator)
    {
        case "+":
            result = add(a, b);
            break;
        case "-":
            result = subtract(a, b);
            break;
        case "/":
            result = divide(a, b);
            break;
        case "*":
            result = multiply(a, b);
            break;     
    }

    if (isNaN(result))
    {
        document.getElementById("resultMessage").innerHTML = "RESULT: error";
        return;
    }
    
    document.getElementById("resultMessage").innerHTML = "RESULT: " + result;
}

function add(a, b)
{
    return a + b;
}

function subtract(a, b)
{
    return a - b;
}

function divide(a, b)
{
    return a / b;
}

function multiply(a, b)
{
    return a * b;
}