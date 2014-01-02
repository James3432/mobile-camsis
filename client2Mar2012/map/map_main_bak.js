		var map;
		var zoom = 1;
		var dir;
		var xy;
		var x_shift;
		var y_shift;
		var x;
		var y;
		var longlat;
		var longlat2;
		var startup;
		var loc_x;
		var loc_y;
		var accuracy;
		var vector;
		var style = {
				fillColor: '#000',
				fillOpacity: 0.1,
				strokeWidth: 0
		};
		
		// Translate mapping co-ordinates to tile file-names
		function get_my_url (bounds) {
			
			if((startup == true) && (this.map.getZoom() == 1)){
				startup = false;
			}
			
			if((startup != true) && (zoom != this.map.getZoom())){
			
				if(zoom > this.map.getZoom()){
					dir = "out";
				}else{
					dir = "in";
				}
			
				var zoomLevel = 1 - this.map.getZoom();
				
				//vector.removeAllFeatures();
			
				if(this.map.getZoom() == 0){
				
					// assert dir == "out"
				
					if((x_shift == null)&&(y_shift == null)){
						x = 0.5*3*256;
						y = -0.5*3*256;
					}else{
						x = (3/6)*x_shift;
						y = -(3/5)*y_shift;
						
						loc_x = 2*(3/6)*loc_x;
						loc_y = 2*(3/5)*loc_y;
						
					}
				
					var opts = {maxExtent: new OpenLayers.Bounds(0,0,(Math.pow(2, zoomLevel))*3*256,(Math.pow(2, zoomLevel))*3*256)/*, restrictedExtent: new OpenLayers.Bounds(0,0,(Math.pow(2, zoomLevel))*3*256,(Math.pow(2, zoomLevel))*3*256)*/};
					
					this.map.baseLayer.addOptions(opts , true);
					
					this.map.zoomToMaxExtent();
					this.map.zoomTo(0);
					
					zoom = 0;
					
					setTimeout('this.map.baseLayer.redraw()',0);
					
					map.moveTo(new OpenLayers.LonLat(0,0));
					
					map.moveByPx(x,y);
					
					drawMarker(loc_x, loc_y, accuracy);
					
					x_shift = x;
					y_shift = -y;
				
				}
				
				if(this.map.getZoom() == 1){
				
					if((x_shift == null)&&(y_shift == null)){
						x = 0.5*6*256;
						y = -0.5*5*256;
					}else{
						if(dir == "in"){
							x = 0.5*(6/3)*x_shift;
							y = -0.5*(5/3)*y_shift;
							
							loc_x = 0.5*(6/3)*loc_x;
							loc_y = 0.5*(5/3)*loc_y;
						}else{
							x = 2*(6/10)*x_shift;
							y = -2*(5/8)*y_shift;
							
							loc_x = 2*(6/10)*loc_x;
							loc_y = 2*(5/8)*loc_y;
							
							accuracy = accuracy*1.3;
						}
					}
				
					var opts = {maxExtent: new OpenLayers.Bounds(0,0,(Math.pow(2, zoomLevel))*6*256,(Math.pow(2, zoomLevel))*5*256)/*, restrictedExtent: new OpenLayers.Bounds(0,0,(Math.pow(2, zoomLevel))*6*256,(Math.pow(2, zoomLevel))*5*256)*/};
					
					this.map.baseLayer.addOptions(opts , true);
					
					this.map.zoomToMaxExtent();
					this.map.zoomTo(1);
					
					zoom = 1;
					
					setTimeout('this.map.baseLayer.redraw()',0);
					
					map.moveTo(new OpenLayers.LonLat(0,0));
					
					map.moveByPx(x,y);
					
					drawMarker(loc_x, loc_y, accuracy);
					
					x_shift = x;
					y_shift = -y;
				
				}
				
				if(this.map.getZoom() == 2){
				
					if((x_shift == null)&&(y_shift == null)){
						x = 0.5*10*256;
						y = -0.5*8*256;
					}else{
						if(dir == "in"){
							x = (10/6)*x_shift;
							y = -(8/5)*y_shift;
							
							loc_x = 0.5*(10/6)*loc_x;
							loc_y = 0.5*(8/5)*loc_y;
							
							accuracy = accuracy/1.3;
						}else{
							x = 4*(10/15)*x_shift;
							y = -4*(8/12)*y_shift;
							
							loc_x = 2*(10/15)*loc_x;
							loc_y = 2*(8/12)*loc_y;
							
							accuracy = accuracy*1.3;
						}
					}
				 
					var opts = {maxExtent: new OpenLayers.Bounds(0,0,(Math.pow(2, zoomLevel))*10*256,(Math.pow(2, zoomLevel))*8*256)/*, restrictedExtent: new OpenLayers.Bounds(0,0,(Math.pow(2, zoomLevel))*10*256 - (Math.pow(2, zoomLevel))*Math.min(this.map.getSize().w, this.map.getSize().h),(Math.pow(2, zoomLevel))*8*256 - (Math.pow(2, zoomLevel))*Math.min(this.map.getSize().w, this.map.getSize().h))*/};
					
					this.map.baseLayer.addOptions(opts , true);
					
					this.map.zoomToMaxExtent();
					this.map.zoomTo(2);

					zoom = 2;
					
					setTimeout('this.map.baseLayer.redraw()',0);
					
					map.moveTo(new OpenLayers.LonLat(0,0));
					
					map.moveByPx(x,y);

					drawMarker(loc_x, loc_y, accuracy);					

					x_shift = x;
					y_shift = -y;					
				
				}
				
				if(this.map.getZoom() == 3){
				
					if((x_shift == null)&&(y_shift == null)){
						x = 0.5*15*256;
						y = -0.5*12*256;
					}else{
						if(dir == "in"){
							x = 2*(15/10)*x_shift;
							y = -2*(12/8)*y_shift;
							
							loc_x = 0.5*(15/10)*loc_x;
							loc_y = 0.5*(12/8)*loc_y;
							
							accuracy = accuracy/1.3;
						}else{
							x = 8*(15/24)*x_shift + 40;
							y = -8*(12/19)*y_shift;
							
							loc_x = 2*(15/24)*(loc_x + 7);
							loc_y = 2*(12/19)*(loc_y + 2);
							
							accuracy = accuracy*1.3;
						}
					}
				
					var opts = {maxExtent: new OpenLayers.Bounds(0,0,(Math.pow(2, zoomLevel))*15*256,(Math.pow(2, zoomLevel))*12*256)/*, restrictedExtent: new OpenLayers.Bounds(0,0,15*256,12*256)*/};
					
					this.map.baseLayer.addOptions(opts , true);
					
					this.map.zoomToMaxExtent();
					this.map.zoomTo(3);
					
					zoom = 3;
					
					setTimeout('this.map.baseLayer.redraw()',0);
					
					map.moveTo(new OpenLayers.LonLat(0,0));
					
					map.moveByPx(x,y);
					
					drawMarker(loc_x, loc_y, accuracy);
					
					x_shift = x;
					y_shift = -y;
				
				}
				
				if(this.map.getZoom() == 4){
				
					// assert dir == "in"
				
					if((x_shift == null)&&(y_shift == null)){
						x = 0.5*24*256 - 55;
						y = -0.5*19*256 + 20;
					}else{
						x = 4*(24/15)*x_shift - 55;
						y = -4*(19/12)*y_shift + 20;
						
						loc_x = 0.5*(24/15)*loc_x - 7;
						loc_y = 0.5*(19/12)*loc_y - 2;
						
						accuracy = accuracy/1.3;
					}
				
					var opts = {maxExtent: new OpenLayers.Bounds(0,0,(Math.pow(2, zoomLevel))*24*256,(Math.pow(2, zoomLevel))*19*256)/*, restrictedExtent: new OpenLayers.Bounds(0,0,(Math.pow(2, zoomLevel))*24*256,(Math.pow(2, zoomLevel))*19*256)*/};
					
					this.map.baseLayer.addOptions(opts , true);
					
					this.map.zoomToMaxExtent();
					this.map.zoomTo(4);
					
					zoom = 4;
					
					setTimeout('this.map.baseLayer.redraw()',0);
					
					map.moveTo(new OpenLayers.LonLat(0,0));
					
					map.moveByPx(x,y);
					
					drawMarker(loc_x, loc_y, accuracy);
					
					x_shift = x;
					y_shift = -y;
				
				}
			}
		
			var res = this.map.getResolution();
			var x = Math.round ((bounds.left - this.maxExtent.left) / (res * this.tileSize.w));
			var y = Math.round ((this.maxExtent.top - bounds.top) / (res * this.tileSize.h));
			var z = this.map.getZoom();
			
			if(z==0){
				var path = "0/map_part__0" + (1 + x + 3*y) + "." + this.type;
			}else if(z==1){			
				var path = "1/map_part__" + (1 + x + 6*y) + "." + this.type; 
			}else if(z==2){			
				var path = "2/map_part__" + (1 + x + 10*y) + "." + this.type; 
			}else if(z==3){			
				var path = "3/map_part__" + (1 + x + 15*y) + "." + this.type; 
			}else if(z==4){			
				var path = "4/map_part_1__" + (1 + x + 24*y) + "." + this.type; 
			}else{
				var path = z;
			}
			var url = this.url;
			if (url instanceof Array) {
				url = this.selectUrl(path, url);
			}
			return url + path;
			
		}
		
		function handleMove(event){			
			y_shift = map.getCenter().lat;
			x_shift = map.getCenter().lon;
		}
		
		function drawMarker(x, y, acc){
			//alert("drawing at "+x+" "+y);
			vector.removeAllFeatures();
			
			var circle = new OpenLayers.Feature.Vector(
				OpenLayers.Geometry.Polygon.createRegularPolygon(
					new OpenLayers.Geometry.Point(x, y),
					acc,
					40,
					0
				),
				{},
				style
			);
			vector.addFeatures([
				new OpenLayers.Feature.Vector(
					new OpenLayers.Geometry.Point(x, y),
					{},
					{
						graphicName: 'cross',
						strokeColor: '#f00',
						strokeWidth: 2,
						fillOpacity: 0,
						pointRadius: 10
					}
				),
				circle
			]);
		
		}
		
		// Onbodyload()
        function init(){
		
			startup = true;
		
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
				// Map dimensions
				maxExtent: new OpenLayers.Bounds(0,0,6*256,5*256),
				/*restrictedExtent: new OpenLayers.Bounds(0,0,6*256,5*256),*/
				maxResolution:2,
				numZoomLevels:5,
				units: 'pixels'
			} );

			// Create new custom tiles layer
			var graphic = new OpenLayers.Layer.TMS("Layer1", "./tiles/", { 'type':'png', 'getURL':get_my_url });
            
            // Attach new layer to map
			map.addLayers([graphic]);
			
			// Initial map zoom
            map.zoomToMaxExtent();
						
			// USE THIS TO MOVE TO CUSTOM CENTRE POSITION
			//map.moveByPx(200,0);
			
			map.zoomTo(1);
			
			// could use 'moveend' here?
			//map.events.register('move', event, onMove);
			
			map.events.register("move", map, handleMove);
			/*map.events.register("moveend", map, function() {
			if(zoom == 1){
				 //x = x_shift;
				 //y = y_shift;
				 //alert(x+" "+y+" "+x_shift+" "+y_shift);
				 //longlat2 = longlat;
				}
			});*/
			
			var geolocate = new OpenLayers.Control.Geolocate({
				bind: false,
				geolocationOptions: {
					enableHighAccuracy: false,
					maximumAge: 0,
					timeout: 6000
				}
			});
			
			vector = new OpenLayers.Layer.Vector('vector');
			map.addLayers([vector]);
			
			map.addControl(geolocate);
			//var firstGeolocation = true;
			geolocate.events.register("locationupdated",geolocate,function(e) {
				
				loc_x = 1536 * (e.point.x - 0.0763)/(0.1425 - 0.0763);
				loc_y = 1280 * (e.point.y - 52.1845)/(52.2175 - 52.1845);
				accuracy = e.position.coords.accuracy/2;
				
				if(accuracy < 300){
					/*
					vector.removeAllFeatures();
					var circle = new OpenLayers.Feature.Vector(
						OpenLayers.Geometry.Polygon.createRegularPolygon(
							new OpenLayers.Geometry.Point(loc_x, loc_y),
							accuracy,
							40,
							0
						),
						{},
						style
					);
					vector.addFeatures([
						new OpenLayers.Feature.Vector(
							new OpenLayers.Geometry.Point(loc_x, loc_y),
							{},
							{
								graphicName: 'cross',
								strokeColor: '#f00',
								strokeWidth: 2,
								fillOpacity: 0,
								pointRadius: 10
							}
						),
						circle
					]);*/
					
					// If low accuracy, pan to region but don't display marker
					
					drawMarker(loc_x,loc_y,accuracy);
					
					map.moveTo(new OpenLayers.LonLat(0,0));
					
					map.moveByPx(loc_x, -loc_y);
					
					vector.redraw();}
				
				else{
					
					map.moveTo(new OpenLayers.LonLat(0,0));
					
					map.moveByPx(loc_x, -loc_y);
					
					loc_x = null;
					loc_y = null;
					accuracy = null;
				}
				
			});
			
			geolocate.events.register("locationfailed",this,function() {
				//alert('Location detection failed');
			});
			
			geolocate.deactivate();
			geolocate.watch = false;
			geolocate.activate();
			
			//var cl = new OpenLayers.Handler.Click(map.controls[5], handleMove);
					
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