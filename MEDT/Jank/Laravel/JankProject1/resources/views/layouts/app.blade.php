<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@yield('title', 'My Laravel Site')</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #fff;
            color: #333;
        }
        header {
            background-color: #c70000;
            color: white;
            padding: 15px;
            text-align: center;
        }
        .content {
            padding: 20px;
        }
        footer {
            background-color: #900;
            color: white;
            text-align: center;
            padding: 10px;
            position: absolute;
            bottom: 0;
            width: 100%;
        }
        a {
            color: #ffcccc;
            text-decoration: none;
        }
        a:hover {
            text-decoration: underline;
        }
    </style>
</head>
<body>
<header>
    <h1>My Laravel Site</h1>
    <img src="/resources/img/logo.png" alt="Site Logo" height="50">
</header>

<div class="content">
    @yield('content')
</div>

<footer>
    <a href="/impressum">Impressum</a> | &copy; {{ date('Y') }}
</footer>
</body>
</html>
