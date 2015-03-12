#SimpleNav 4.0

###Options

These are the options and the default values you can use with SimpleNav:

fx – (‘slide’,’fade’,’none’) – This option sets the effect to use on the drop down. Default value is ‘slide’.

speed – (value) – This is the speed of the transition used for the drop down in ms. Default value is 500.

full – (true,false) – This tells simpleNav if you want the nav to span the full width of the parent or not. Default value is true

edge2edge - (true,false) - If set to true the menu will span edge to edge of the parent. full must also be set to true. Default value is false

###Usage

Include the js and css file:

<script type="text/javascript" src="simplenav3.js"></script>
<link href="simplenav3.css" rel="stylesheet" type="text/css" />

Code the Menu in an unordered list:

	<nav>
		<ul>
		  <li><a href="index.php">Home</a></li>
		  <li><a href="#">About Us</a></li>
		  <li><a href="#">Store</a></li>
		</ul>
	</nav>
	
Put this in the head section of the site:

	<script>
		/* Simplenavav */
		$(document).ready(function() {
			$('nav>ul').simpleNav({
				full: true,
				fx: 'slide',
				speed: 500,
				edge2edge: true
			});
		});	
	</script>


