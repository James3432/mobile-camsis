// initialize map when page ready
var map;

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

var init = function () {
    // create map
    /*map = new OpenLayers.Map({
        div: "map",
        theme: null,
        controls: [
            new OpenLayers.Control.Attribution(),
            new OpenLayers.Control.TouchNavigation({
                dragPanOptions: {
                    enableKinetic: true
                }
            }),
            new OpenLayers.Control.ZoomPanel()
        ],
        layers: [
            new OpenLayers.Layer.OSM("OpenStreetMap", null, {
                transitionEffect: 'resize'
            })
        ],
        center: new OpenLayers.LonLat(742000, 5861000),
        zoom: 3
    });*/
	
	map = new OpenLayers.Map('map',options);
	var options = {numZoomLevels: 50, projection: "EPSG:3408", isBaseLayer: true};
	var defaultBounds=new OpenLayers.Bounds(0, 0, 100, 100);
	//var options = {numZoomLevels: 3};	
	nsidcbitmapbackgroundLayer=new OpenLayers.Layer.Image
	(	'CRCM',
		'test.png',
		new OpenLayers.Bounds(defaultBounds.left,defaultBounds.bottom,defaultBounds.right,defaultBounds.top),
		new OpenLayers.Size(721,721),
		options
	);
	nsidcbitmapbackgroundLayer.events.on(
	{
		loadstart: function() 
		{
			OpenLayers.Console.log("loadstart");
		},
		loadend: function() 
		{
			OpenLayers.Console.log("loadend");
		}
	});
	map.addLayers([nsidcbitmapbackgroundLayer]);
};
