document.onkeypress = handle;

function handle(e)
{
    let keyPressed = e.key;

    let keypressParagraph = document.getElementById("keypress");

    keypressParagraph.innerHTML = ":" + keyPressed + ":"
}