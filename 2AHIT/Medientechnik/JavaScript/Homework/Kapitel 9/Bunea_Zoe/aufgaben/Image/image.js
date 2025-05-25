function changeImage(button)
{
    let image = document.getElementById("image");
    
    image.src = button.value + ".png";
}