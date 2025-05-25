function checkForm()
{
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let comment = document.getElementById("comment").value;
    let opt = document.getElementById("opt").value;
    let tos = document.getElementById("tos").checked;

    let errors = 0;

    let emailMatch = new RegExp(/^(.+)@(.+)\.(.+)$/i);

    if (email.match(emailMatch) === 0)
    {
        errors++;
    }

    let passwordMatch = new RegExp(/[\w\W]/gi);

    if (password.match(passwordMatch) === null || password.length < 10)
    {
        errors++;
    }

    if (comment.length === 0)
    {
        errors++;
    }

    if (opt === null)
    {
        errors++;
    }

    if (tos === false)
    {
        errors++;
    }

    if (errors === 0)
    {
        console.log("good");
    }
    else
    {
         console.error("bad");
    }

        
    

    

}