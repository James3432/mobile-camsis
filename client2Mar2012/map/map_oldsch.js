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
		'tiles/other/oldsch.jpg',
		new OpenLayers.Bounds(-98, -85, 98, 85),
		new OpenLayers.Size(722, 629),
		options
	);
	
	map.addLayers([graphic]);
	map.zoomToMaxExtent()
}