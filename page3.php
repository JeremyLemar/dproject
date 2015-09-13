<?php include 'session.php' ?>
<DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.00Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" >
<head>
	<link rel="stylesheet" type="text/css" href="common.css"/>
    <style type="text/css"></style>
    <title>The D Project</title>
    <script type="text/javascript">  
		function addItemToCart() {
			var xmlhttp;
			xmlhttp = new XMLHttpRequest(); // I don't support IE5,IE6...
				xmlhttp.onreadystatechange = function () {
					if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
						var xml = xmlhttp.responseXML;
						var text = xmlhttp.responseText;
					//	alert(text);
						location.reload();
						document.getElementById('output').innerHTML = text;
						//document.getElementById('navbar').reload();
					}

			}
			url = "addToCart.php";
			xmlhttp.open("GET", url, true);
			xmlhttp.send();
		}
		function getAjax() {
		var xmlhttp;
	 	//alert("get Ajax called!");
		if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
			xmlhttp = new XMLHttpRequest();
		}
		else {// code for IE6, IE5
			xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
		}
	
		xmlhttp.onreadystatechange = function () {
			if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
				var xml = xmlhttp.responseXML;
				var text = xmlhttp.responseText;
				//alert(xml);
				//alert(text);
				//x = xml.documentElement.getElementsByTagName("POI");   		
				//var lat = x[0].getElementsByTagName("LAT")[0].firstChild.nodeValue;
				//var lat = xml.getElementsByTagName("country")[0].firstChild.nodeValue;
			
				//document.getElementById('outputt').innerHTML = "lat = "+ lat + "...";
				document.getElementById('output').innerHTML = text;
			}
		}
		
		/*url = "Gate5POIs.xml?";
		url += "&at=" + "0" + "," + "0" + "&to=" + "10";
		url += "&ta=9000022";*/
		url = "phpconsole.php";
		
		xmlhttp.open("GET", url, true);
		xmlhttp.send();
	}     	
    </script>
</head>
<body>
<?php include 'nav.php'?>  
    <div id="container" >
        <div id="masthead" >
            <h3>php console</h3>
	    <h3>Hello User <?php $N = "Me"; print $N ?></h3>
         </div>
            
        <div id="links" >
        	<div id="linklist">
        	<a href="">blah!</a>
        	</div>
        </div>
        <div id="main" >
			<button onclick="addItemToCart()">Add Item to Cart</button>
			<button onclick="getAjax()">Call Server php code</button>
        	<div id="output"></div>
      	</div>
        <div id="news">
        	<h3>news and rec. links</h3>
        </div>         
        <div id="footer" >footer links</div>
    </div>
  
    
</body>
</html>
