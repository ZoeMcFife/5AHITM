if (navigator.userAgent.match(/firefox|fxios/i))
    location.replace("firefox.html");
else if (navigator.userAgent.match(/edg/i))
    location.replace("edge.html");
else
    location.replace("other.html");

