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
			
				if(this.map.getZoom() == 0){
				
					// assert dir == "out"
				
					if((x_shift == null)&&(y_shift == null)){
						x = 0.5*3*256;
						y = -0.5*3*256;
					}else{
						x = (3/6)*x_shift;
						y = -(3/5)*y_shift;
					}
				
					var opts = {maxExtent: new OpenLayers.Bounds(0,0,(Math.pow(2, zoomLevel))*3*256,(Math.pow(2, zoomLevel))*3*256)/*, restrictedExtent: new OpenLayers.Bounds(0,0,(Math.pow(2, zoomLevel))*3*256,(Math.pow(2, zoomLevel))*3*256)*/};
					
					this.map.baseLayer.addOptions(opts , true);
					
					this.map.zoomToMaxExtent();
					this.map.zoomTo(0);
					
					zoom = 0;
					
					setTimeout('this.map.baseLayer.redraw()',0);
					
					map.moveTo(new OpenLayers.LonLat(0,0));
					
					map.moveByPx(x,y);
					
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
						}else{
							x = 2*(6/10)*x_shift;
							y = -2*(5/8)*y_shift;
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
						}else{
							x = 4*(10/15)*x_shift;
							y = -4*(8/12)*y_shift;
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
						}else{
							x = 8*(15/24)*x_shift;
							y = -8*(12/19)*y_shift;
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
					
					x_shift = x;
					y_shift = -y;
				
				}
				
				if(this.map.getZoom() == 4){
				
					// assert dir == "in"
				
					if((x_shift == null)&&(y_shift == null)){
						x = 0.5*24*256;
						y = -0.5*19*256;
					}else{
						x = 4*(24/15)*x_shift;
						y = -4*(19/12)*y_shift;
					}
				
					var opts = {maxExtent: new OpenLayers.Bounds(0,0,(Math.pow(2, zoomLevel))*24*256,(Math.pow(2, zoomLevel))*19*256)/*, restrictedExtent: new OpenLayers.Bounds(0,0,(Math.pow(2, zoomLevel))*24*256,(Math.pow(2, zoomLevel))*19*256)*/};
					
					this.map.baseLayer.addOptions(opts , true);
					
					this.map.zoomToMaxExtent();
					this.map.zoomTo(4);
					
					zoom = 4;
					
					setTimeout('this.map.baseLayer.redraw()',0);
					
					map.moveTo(new OpenLayers.LonLat(0,0));
					
					map.moveByPx(x,y);
					
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
				// Map deimensions
				maxExtent: new OpenLayers.Bounds(0,0,6*256,5*256),
				/*restrictedExtent: new OpenLayers.Bounds(0,0,6*256,5*256),*/
				maxResolution:2,
				numZoomLevels:5,
				units: 'pixels'
			} );

			// Create new custom tiles layer
			var graphic = new OpenLayers.Layer.TMS("Layer1", "http://jk509.user.srcf.net/tiles/", { 'type':'png', 'getURL':get_my_url });
            
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