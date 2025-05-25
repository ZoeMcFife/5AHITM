var h1 = document.createElement("h1");
var h1Text = document.createTextNode("Hello Zoe");
h1.appendChild(h1Text);
document.body.appendChild(h1);

for (var i = 0; i < 10; i++)
{
    console.log(i + " test");
}