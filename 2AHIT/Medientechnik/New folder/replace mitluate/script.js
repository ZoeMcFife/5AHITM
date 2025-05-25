function replace()
{
    let text = document.getElementById("text").value;

    text = text.replace(/[ä]/gi, 'ae');
    text = text.replace(/[ö]/gi, 'oe');
    text = text.replace(/[ü]/gi, 'ue');

    document.getElementById("output").value = text;
}