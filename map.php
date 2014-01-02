<?php

	if(isset($_GET['x']) && isset($_GET['y'])){
		$x = $_GET['x'];
		$y = $_GET['y'];
		$drawCircle = true;
	}

?>
<html>

	<head>
		<title>CamSIS Map Display</title>

		<!-- initialise with 100% zoom level -->
		<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/>

		<script type="text/javascript" src="rgbcolor.js"></script>

		<script type="text/javascript" src="canvg.js"></script>
		
		<!--[if IE]>
			<script src="excanvas.js"></script>
		<![endif]-->

		<script type="text/javascript">

		function bodyonload() { 
				
			var opts = new Array();
			
			<?php
				if($drawCircle == true){
			?>	
			opts["renderCallback"] = function(){ drawC(<?php echo $x; ?>, <?php echo $y; ?>, 15) };
			opts["ignoreMouse"] = true;
			<?php
				}
			?>
			
			canvg('canvas', 'map.svg', opts);				
			
		}

		
		function drawC(x, y, rad) {
		
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

		</script>

	</head>

	<body onload="bodyonload();">

		<canvas id="canvas" width="5000px" height="3000px">
			<p>Your browser doesn't support canvas objects.</p>
		</canvas>

	</body>

</html>