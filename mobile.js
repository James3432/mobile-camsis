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
    var options = {numZoomLevels: 5};
	var graphic = new OpenLayers.Layer.Image(
                'City map',
                'map_main_med.jpg',
                new OpenLayers.Bounds(-108, -85, 108, 85),
                new OpenLayers.Size(3038, 2401),
                options
            );
	// create map
    map = new OpenLayers.Map({
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
        layers: [graphic]//,
        //center: new OpenLayers.LonLat(742000, 5861000),
        //zoom: 1
    });
};
