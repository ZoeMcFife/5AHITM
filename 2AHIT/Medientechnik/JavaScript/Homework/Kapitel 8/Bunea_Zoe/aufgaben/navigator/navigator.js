document.write("<h2>INFO</h2>");

document.writeln("<p>App Name: " + navigator.appName + "</p>");
document.writeln("<p>App Code Name: " + navigator.appCodeName + "</p>");
document.writeln("<p>Platform: " + navigator.platform + "</p>");
document.writeln("<p>App Version: " + navigator.appVersion + "</p>");
document.writeln("<p>Language: " + navigator.language + "</p>");
document.writeln("<p>User Agent: " + navigator.userAgent + "</p>");
document.writeln("<p>Cookie: " + navigator.cookieEnabled + "</p>");
document.writeln("<p>Java: " + navigator.javaEnabled() + "</p>");

console.log(navigator.javaEnabled());

if (navigator.javaEnabled() === false)
    alert("Java Disabled");

