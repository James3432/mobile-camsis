function init(){
	
	var map = new OpenLayers.Map('map', 
			{
				controls: 
					[	// Mobile optimised controls (zoom bar & scrolling)
						new OpenLayers.Control.TouchNavigation({
							dragPanOptions: {
								enableKinetic: true
							}
						}),
						new OpenLayers.Control.ZoomPanel()
					]
			} );

	var options = {numZoomLevels: 2};

	var graphic = new OpenLayers.Layer.Image(
		'City map',
		'http://jk509.user.srcf.net/tiles/other/sidgwick.jpg',
		new OpenLayers.Bounds(-145, -85, 145, 85),
		new OpenLayers.Size(1000, 585),
		options
	);
	
	map.addLayers([graphic]);
	map.zoomToMaxExtent()
}