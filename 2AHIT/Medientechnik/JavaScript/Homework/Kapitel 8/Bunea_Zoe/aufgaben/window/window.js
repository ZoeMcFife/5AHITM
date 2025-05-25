choice = confirm("First time here?");

if (choice)
    alert("Epic!");
else
    alert("Welcome back!!!!1");

function openITHTLYbbsWebpage()
{
    var webpageWindowReference = null;

    if (webpageWindowReference == null || webpageWindowReference.closed)
    {
        webpageWindowReference = window.open("https://www.sz-ybbs.ac.at/", "IT-HTL Ybbs", "left=100,top=100,width=1024,height=600,resizable,toolbar=0,menubar=yes");
    }
    else
    {
        webpageWindowReference.focus();
    }
}


function increaseTime()
{
    var textBox = document.getElementById("timeButton");
    var timePassed = parseInt(textBox.value);

    timePassed += 2;

    document.getElementById("timeButton").value = timePassed;

}

function timeButtonFunction()
{
    setTimeout(increaseTime, 2000);
}
