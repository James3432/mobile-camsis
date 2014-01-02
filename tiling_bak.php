<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <title>Cambridge Main Map</title>
    <link rel="stylesheet" href="./openlayers/theme/default/style.css" type="text/css">
    <link rel="stylesheet" href="style.css" type="text/css">
    <style type="text/css">
        p.caption {
            width: 512px;
        }
    </style>
    <!--<script type="text/javascript" src="https://getfirebug.com/firebug-lite.js"></script>-->
	
	<style type="text/css">
            /*html, body, #map {
                margin: 0;
                width: 100%;
                height: 100%;
            }*/
			

            html, body {
                margin: 0;
                padding: 0;
                height: 100%;
            }
            #map {
                position: relative;
                width: 100%;
                height: 100%;
            }
            .olControlAttribution {
                font-size: 10px;
                bottom: 5px;
                right: 5px;
            }
			
			div.olControlZoomPanel {
				height: 108px;
				width: 36px;
				position: absolute;
				top: 20px;
				left: 20px;
			}
			div.olControlZoomPanel div {
				width: 36px;
				height: 36px;
				background-image: url(img/mobile-zoombar.png);
				left: 0;
			}
			div.olControlZoomPanel .olControlZoomInItemInactive {
				top: 0;
				background-position: 0 0;
			}
			div.olControlZoomPanel .olControlZoomToMaxExtentItemInactive {
				top: 36px;
				background-position: 0 -36px;
			}
			div.olControlZoomPanel .olControlZoomOutItemInactive {
				top: 72px;
				background-position: 0 -72px;
			}
			.olTileImage {
				-webkit-transition: opacity 0.2s linear;
				-moz-transition: opacity 0.2s linear;
				-o-transition: opacity 0.2s linear;
				transition: opacity 0.2s linear;
			}

            div.olControlZoomPanel .olControlZoomInItemInactive,
            div.olControlZoomPanel .olControlZoomOutItemInactive {
                background: rgba(0,0,0,0.2);
                position: absolute;
            }
            div.olControlZoomPanel .olControlZoomInItemInactive {
                border-radius: 5px 5px 0 0;
            }
            div.olControlZoomPanel .olControlZoomOutItemInactive {
                border-radius: 0 0 5px 5px ;
                top: 37px;
            }
            div.olControlZoomPanel .olControlZoomOutItemInactive:after,
            div.olControlZoomPanel .olControlZoomInItemInactive:after {
                font-weight: bold;
                content: '+';
                font-size: 36px;
                padding:  7px;
                z-index: 2000;
                color: #fff;
                line-height: 1em;
            }
            div.olControlZoomPanel .olControlZoomOutItemInactive:after {
                content: '–';
                line-height: 0.9em;
                padding: 0 8px;
            }
            div.olControlZoomPanel .olControlZoomToMaxExtentItemInactive {
                display: none;
            }
            .olControlEditingToolbar .olControlModifyFeatureItemInactive {
                background-position: -1px -1px;
            }
            .olControlEditingToolbar .olControlModifyFeatureItemActive {
                background-position: -1px -24px;
            }
            #title, #tags, #shortdesc {
                display: none;
            }
			
        </style>
	
    <!--<script src="./openlayers/OpenLayers.js"></script>-->
	<script src="OpenLayers.js"></script>
    <script type="text/javascript">
        var map;
		
		function get_my_url (bounds) {
			var res = this.map.getResolution();
			var x = Math.round ((bounds.left - this.maxExtent.left) / (res * this.tileSize.w));
			var y = Math.round ((this.maxExtent.top - bounds.top) / (res * this.tileSize.h));
			var z = this.map.getZoom();

			var path = "map_part_1__" + (1 + x + 24*y) + "." + this.type; 
			var url = this.url;
			if (url instanceof Array) {
				url = this.selectUrl(path, url);
			}
			return url + path;
			
		}
		
        function init(){
		
            map = new OpenLayers.Map('map', 
			{
				controls: 
					[
						new OpenLayers.Control.TouchNavigation({
							dragPanOptions: {
								enableKinetic: true
							}
						}),
						new OpenLayers.Control.ZoomPanel()
					],
				maxExtent: new OpenLayers.Bounds(0,0,2*24*256,2*19*256),
				maxResolution:2,//2,//30?
				numZoomLevels:1,
				units: 'pixels'
			} );

            /*var options = {numZoomLevels: 5, controls: [
            new OpenLayers.Control.TouchNavigation({
                dragPanOptions: {
                    enableKinetic: true
                }
            }),
            new OpenLayers.Control.ZoomPanel(),
            toolbar
			]};*/
			
			//var options = {numZoomLevels: 5};
			

            /*var graphic = new OpenLayers.Layer.Image(
                'City map',
                'map_main_med.jpg',
                new OpenLayers.Bounds(-108, -85, 108, 85),
                new OpenLayers.Size(3038, 2401),
                options
            );*/
			
			//var graphic = new OpenLayers.Layer.OSM("New Layer", "./tiles/map_part_${z}${x}${y}.jpg", {numZoomLevels: 5});
			
			//var graphic = new OpenLayers.Layer.OSM("New Layer", "./tiles/map_part_1__${x}${y}.png", {numZoomLevels: 5});
			
			
			
			var graphic = new OpenLayers.Layer.TMS("Layer1", "http://jk509.user.srcf.net/tiles/", { 'type':'png', 'getURL':get_my_url });
            
            /*graphic.events.on({
                loadstart: function() {
                    OpenLayers.Console.log("loadstart");
                },
                loadend: function() {
                    OpenLayers.Console.log("loadend");
                }
            });*/
			
			//var graphic = new OpenLayers.Layer.OSM();
            
			/*var jpl_wms = new OpenLayers.Layer.WMS( "NASA Global Mosaic",
                "http://t1.hypercube.telascience.org/cgi-bin/landsat7", 
                {layers: "landsat7"}, options);

            map.addLayers([graphic, jpl_wms]);
            map.addControl(new OpenLayers.Control.LayerSwitcher());*/
			map.addLayers([graphic]);
            map.zoomToMaxExtent();
			
			var lon = 0;
			var lat = 0;
			//var zoom = 4;
			
			//map.setCenter(new OpenLayers.LonLat(lon, lat));
			
			// USE THIS TO MOVE TO CUSTOM CENTRE POSITION
			map.moveByPx(480,-80);
			
			//map.addControl(new OpenLayers.Control.DragPan());
			//map.addControl();
			//map.addControl(new OpenLayers.Control.ArgParser());
			//map.addControl(new OpenLayers.Control.Attribution());
			
			/*
			maxExtent: new OpenLayers.Bounds(0,0,4096,4096),
			maxResolution:4096 / 256,
			numZoomLevels:5
			*/
			
			/*var osm = new OpenLayers.Layer.OSM();
				osm.wrapDateLine = false;

				map = new OpenLayers.Map({
					div: 'map',
					numZoomLevels: 5,
					controls: [
						new OpenLayers.Control.TouchNavigation({
							dragPanOptions: {
								enableKinetic: true
							}
						}),
						new OpenLayers.Control.ZoomPanel(),
						toolbar
					],
					layers: [graphic],
					center: new OpenLayers.LonLat(0, 0),
					zoom: 1,
					theme: null
			});*/
			
			// Get rid of address bar on iphone/ipod
			var fixSize = function() {
				window.scrollTo(0,0);
				document.body.style.height = '100%';
				if (!(/(iphone|ipod)/.test(navigator.userAgent.toLowerCase()))) {
					if (document.body.parentNode) {
						document.body.parentNode.style.height = '100%';
					}
				}
			};
			setTimeout(fixSize, 700);
			setTimeout(fixSize, 1500);
		
        }
    </script>
  </head>
  <body onload="init()">
    <div id="map" class="smallmap"></div>
  </body>
</html>
