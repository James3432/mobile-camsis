<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<!-- Mobile compatibility -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
    <meta name="apple-mobile-web-app-capable" content="yes">
	<!-------------------------->
    <title>Cambridge Map</title>
    <link rel="stylesheet" href="./openlayers/theme/default/style.css" type="text/css">
    <link rel="stylesheet" href="style.css" type="text/css">
	
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
	
	<script src="OpenLayers.js"></script>
	
    <script type="text/javascript">
	
        var map;
		
		// Translate mapping co-ordinates to tile file-names
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
		
		// Onbodyload()
        function init(){
		
			// Initialise new map
            map = new OpenLayers.Map('map', 
			{
				controls: 
					[	// Mobile optimised controls (zoom bar & scrolling)
						new OpenLayers.Control.TouchNavigation({
							dragPanOptions: {
								enableKinetic: true
							}
						}),
						new OpenLayers.Control.ZoomPanel()
					],
				// Map deimensions
				maxExtent: new OpenLayers.Bounds(0,0,2*24*256,2*19*256),
				maxResolution:2,//2,//30?
				numZoomLevels:1,
				units: 'pixels'
			} );

			// Create new custom tiles layer
			var graphic = new OpenLayers.Layer.TMS("Layer1", "http://jk509.user.srcf.net/tiles/", { 'type':'png', 'getURL':get_my_url });
            
            // Attach new layer to map
			map.addLayers([graphic]);
			
			// Initial map zoom
            map.zoomToMaxExtent();
						
			// USE THIS TO MOVE TO CUSTOM CENTRE POSITION
			// e.g. centre on Queens' college:
			map.moveByPx(480,-80);
					
			// Get rid of address bar on iphone/ipod (no known android fix)
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
  
  <!-- BODY -->
  <body onload="init()">
	<!-- Div to contain OpenLayers map -->
    <div id="map" class="smallmap"></div>
  </body>
</html>
