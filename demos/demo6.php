<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
        <meta name="apple-mobile-web-app-capable" content="yes">
        <title>OpenLayers Geolocation</title>

        <link rel="stylesheet" href="../theme/default/style.css" type="text/css">
        <link rel="stylesheet" href="style.css" type="text/css">
        <style>
            .olControlAttribution {
                bottom: 3px;
            }
        </style>
    </head>
    <body>
        <h1 id="title">Geolocation Example</h1>

        <div id="tags">
            geolocation, geolocate, mobile
        </div>

        <p id="shortdesc">
            Track  current position and display it with its accuracy.
        </p>

        <div id="map" class="smallmap"></div>
        <button id="locate">Locate me!</button>
        <input type="checkbox" name="track" id="track">
        <label for="track">Track my position</label>
        <div id="docs">
            <p>
                View the <a href="geolocation.js" target="_blank">geolocation.js source</a>
                to see how this is done.
            </p>
        </div>
        <script src="OpenLayers.js"></script>
        <script src="geolocation.js"></script>
    </body>
</html>
