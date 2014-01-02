/*
 *   map_main.js
 *
 *   Javascript code for the primary map
 *
 *   James King [jk509@cam.ac.uk]
 *	 Mobile CamSIS Project Group
 *	 Computer Laboratory
 *	 University of Cambridge
 *
 *   Uses the freely available OpenLayers mapping library
 *
 *   Last updated 01/03/2012
 *   
 */

// OpenLayers.map variable, holds the entire map object
var map;

// Current zoom level
// Initialise to 1 from 0-1-2-3-4
var zoom = 1;

// Direction of zoom {"in", "out"}
var dir;

// Pan amounts
var x_shift;
var y_shift;

// Current centre of map view
var x;
var y;

// Whether we are still initialising the maps
var startup;

// Geolocation x and y co-ordinates
var loc_x;
var loc_y;

// Geolocation accuracy level
var accuracy;

// Vector maps layer, allows shapes to be drawn. Used for geolocation position marker
var vector;

// Geolocation marker style
var style = {
	fillColor: '#000',
	fillOpacity: 0.1,
	strokeWidth: 0
};

/*
 * Translate mapping co-ordinates to tile filenames
 */
function get_my_url (bounds) {
	
	// Toggle startup mode
	if((startup == true) && (this.map.getZoom() == 1)){
		startup = false;
	}
	
	// If the zoom level has just changed, we need to re-align the map and position any markers
	if((startup != true) && (zoom != this.map.getZoom())){
	
		// Set zoom direction
		if(zoom > this.map.getZoom()){
			dir = "out";
		}else{
			dir = "in";
		}
	
		// Constant which dictates map layer resolutions
		var zoomLevel = 1 - this.map.getZoom();
	
		/*
		 * We now consider each zoom level and set the map layer alignment accordingly, depending on
		 * whether the user is zooming in or out.
		 */
	
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

	// Calculate the tile required according to current position
	var res = this.map.getResolution();
	var x = Math.round ((bounds.left - this.maxExtent.left) / (res * this.tileSize.w));
	var y = Math.round ((this.maxExtent.top - bounds.top) / (res * this.tileSize.h));
	var z = this.map.getZoom();
	
	// The 5 zoom levels have tiles stored in separate folders
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
	// Return the path to the required tile
	return url + path;
	
}

// Record the current position as the user pans the map
function handleMove(event){			
	y_shift = map.getCenter().lat;
	x_shift = map.getCenter().lon;
}

// Draw a geolocation marker to the given co-ordinates with a given accuracy-circle bound
function drawMarker(x, y, acc){
	
	// Clear the vector canvas
	vector.removeAllFeatures();
	
	// Create a circle object
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
	
	// Add it to the vector layer
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
		/* This does not appear to work:  restrictedExtent: new OpenLayers.Bounds(0,0,6*256,5*256),*/
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
	// map.moveByPx(200,0);
	
	// 1 is the default zoom level (tested for mobile screens)
	map.zoomTo(1);
	
	// Capture the map pan event, so we can log the current centre position
	map.events.register("move", map, handleMove);
	
	// Create an object to help us get the user's location
	var geolocate = new OpenLayers.Control.Geolocate({
		bind: false,
		geolocationOptions: {
			// This has no observable effect (GPS not accessible anyway)
			enableHighAccuracy: true,
			// Get current position
			maximumAge: 0,
			// Reasonable failure timeout
			timeout: 6000
		}
	});
	
	// Create a vector layer, for drawing the location marker
	vector = new OpenLayers.Layer.Vector('vector');
	
	// Add it to the map object as a new layer
	map.addLayers([vector]);
	
	// Add geolocate as a map control
	map.addControl(geolocate);

	// OnLocationFound handle:
	geolocate.events.register("locationupdated",geolocate,function(e) {
		
		/* Capture map layer co-ordinates from the geolocation world co-ordinates:
		 *
		 * loc_x = SCREEN_MAP_WIDTH * (x - MAP_MIN_LONGITUDE)/(MAP_MAX_LONGITUDE - MAP_MIN_LONGITUDE)
		 *
		 * loc_y = SCREEN_MAP_HEIGHT * (y - MAP_MIN_LATITUDE)/(MAP_MAX_LATITUDE - MAP_MIN_LATITUDE)
		 *
		 */
		 
		// Fetch location co-ords as described above
		loc_x = 1536 * (e.point.x - 0.0763)/(0.1425 - 0.0763);
		loc_y = 1280 * (e.point.y - 52.1845)/(52.2175 - 52.1845);
		
		// Get the accuracy of the location data (drawn as circle radius)
		accuracy = e.position.coords.accuracy/2;
		
		// We don't want to draw the whole circle if it covers a large area (often the case when phone network triangulation is used)
		if(accuracy < 300){
			
			// If high accuracy, draw marker and pan map
			
			drawMarker(loc_x,loc_y,accuracy);
			
			map.moveTo(new OpenLayers.LonLat(0,0));
			
			map.moveByPx(loc_x, -loc_y);
			
			// Force refresh after panning
			vector.redraw();}
		
		else{
			
			// If low accuracy, pan to region but don't display marker
			
			map.moveTo(new OpenLayers.LonLat(0,0));
			
			map.moveByPx(loc_x, -loc_y);
			
			// Set location values to null
			loc_x = null;
			loc_y = null;
			accuracy = null;
		}
		
	});
	
	// Optional location failure handle (currently user sees no adverse effects)
	geolocate.events.register("locationfailed",this,function() {
		//alert('Location detection failed');
	});
	
	// Start the geolocation
	geolocate.deactivate();
	geolocate.watch = false;
	geolocate.activate();

			
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