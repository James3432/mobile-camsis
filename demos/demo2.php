<?php

	// cache control...
	$headers['Cache-Control'] = 'no-store, no-cache, must-revalidate, max-age=0';

	// should really get SVG dimensions dynamically here...
	define("WIDTH", 5000);
	define("HEIGHT", 3000);
	
	// timeouts for scrolling and drawing a marker
	define("SCROLL_DELAY", 1000);
	define("DRAW_DELAY", 500);

	// if present, read in marker co-ordinates
	if(isset($_GET['x']) && isset($_GET['y']) && bounded($_GET['x'],$_GET['y'],WIDTH,HEIGHT)){
		$x = $_GET['x'];
		$y = $_GET['y'];
		$drawCircle = true;
	}else{
		$x = 0;
		$y = 0;
		$drawCircle = false;
	}
	
	// check whether co-ordinates lie within map area
	function bounded($x,$y,$w,$h){
		if($x > $w)
			return false;
		if($y > $h)
			return false;
		if($x < 0)
			return false;
		if($y < 0)
			return false;
		return true;
	}

?>
<html>

	<head>
		<title>CamSIS Map Display</title>

		<!-- initialise with 100% zoom level -->
		<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/>
		
		<!-- For now, disable caching -->
		<META HTTP-EQUIV="CACHE-CONTROL" CONTENT="NO-CACHE">
		<META HTTP-EQUIV="PRAGMA" CONTENT="NO-CACHE">

		<script type="text/javascript" src="rgbcolor.js"></script>

		<script type="text/javascript" src="canvg.js"></script>
		
		<!--[if IE]>
			<script src="excanvas.js"></script>
		<![endif]-->
		
		<!-- Get screen size -->
		<script type="text/javascript">
		<!--
			var w=window, d=document, e=d.documentElement, g=d.getElementsByTagName('body')[0];
			var screenWidth=w.innerWidth || e.clientWidth || g.clientWidth;
			var screenHeight=w.innerHeight || e.clientHeight || g.clientHeight;
		//-->
		</script>

		<script type="text/javascript">
		<!--

		function bodyonload() { 
				
			var opts = new Array();
			opts["ignoreMouse"] = true;
			
			<?php
				if($drawCircle == true){
			?>	
			opts["renderCallback"] = drawToMap;		
			<?php
				}
			?>
			
			// Draw SVG map, possibly with a marker (red circle)
			canvg('canvas', 'map.svg', opts);		
			
			<?php
				if($drawCircle == false){
			?>
			<!-- Hide the address bar (seems to handle orientation fine too) -->
			scrollTo(0,1);
			<?php
				}
			?>
		}

		// Draw marker onto canvas
		function drawToMap(){ 
			// Scroll to make marker centre of screen
			scrollTo(<?php echo $x; ?> - (screenWidth/2), <?php echo $y; ?> - (screenHeight/2));
			//setTimeout("scrollTo(<?php echo $x; ?> - (screenWidth/2), <?php echo $y; ?> - (screenHeight/2))", <?php echo SCROLL_DELAY; ?>);
			// Draw the marker
			//drawCircle(<?php echo $x; ?>, <?php echo $y; ?>, 15);
			setTimeout("drawCircle(<?php echo $x; ?>, <?php echo $y; ?>, 15)", <?php echo DRAW_DELAY; ?>);
		}
		
		// Draw marker as a circle on canvas
		function drawCircle(x, y, rad) {
		
			var canv = document.getElementById('canvas');
			// Check the element is in the DOM and the browser supports canvas
			if(canv.getContext) {
				// Initaliase a 2-dimensional drawing context
				var c = canv.getContext('2d');
				
				c.strokeStyle = '#f00'; // red
				c.lineWidth   = 4;
				//draw a circle
				c.beginPath();
				c.arc(x, y, rad, 0, Math.PI*2, true); 
				c.closePath();
				//c.fill();
				c.stroke();
			}
				
		}

		//--></script>

	</head>

	<body onload="bodyonload();" onunload="">

		<canvas id="canvas"> <!-- size and width not required, will depend on SVG -->
			<p>Your browser doesn't support canvas objects.</p>
		</canvas>

	</body>

</html>