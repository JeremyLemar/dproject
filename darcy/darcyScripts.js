// Immediately try to load the xsl file asynchronously
var xsldocloaded = false;
var xsldocUsers;
var xsldocDarcy2;

function loadXMLDoc(dname)
{
	if (window.XMLHttpRequest)
	{
		xhttp=new XMLHttpRequest();
	}
	else
	{
	  xhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xhttp.open("GET",dname,false);
	xhttp.send();
	return xhttp.responseXML;
}


//alert("here");
if (window.XSLTProcessor)
{
    // support Mozilla/Gecko based browsers
    xsldocUsers=loadXMLDoc("users.xsl"); 
    xsldocDarcy2=loadXMLDoc("darcy2.xsl"); 
    xsldocloaded = true;
}
else if(window.ActiveXObject)
{
    // support Windows / ActiveX
    xsldocUsers = new ActiveXObject("Microsoft.XMLDOM");
    xsldocUsers.ondataavailable = onXslLoad;
    xsldocUsers.load("users.xsl");
    xsldocDarcy2 = new ActiveXObject("Microsoft.XMLDOM");
    xsldocDarcy2.ondataavailable = onXslLoad;
    xsldocDarcy2.load("darcy2.xsl");
}
    
function getAjax() {
	var xmlhttp;
 
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
			document.getElementById('outputt').innerHTML = text;
		}
	}
	
	/*url = "Gate5POIs.xml?";
	url += "&at=" + "0" + "," + "0" + "&to=" + "10";
	url += "&ta=9000022";*/
	url = "ajaxtest.php";
	
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
} 
     
       
function getAjax2() {
	var xmlhttp;
 
	if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp = new XMLHttpRequest();
	}
	else {// code for IE6, IE5
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}

	xmlhttp.onreadystatechange = function () {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			var xml = xmlhttp.responseXML;

			
	   if (!xsldocloaded)
		 {
			 alert("Unable to transform data.  XSL is not yet loaded.");
			 // break out of the function
			 return;
		 }
		 
		 var swappableSection = document.getElementById("outputt");
		 
		 if (window.XSLTProcessor)
		 {
			 // support Mozilla/Gecko based browsers
			 var xsltProcessor = new XSLTProcessor();
			 xsltProcessor.importStylesheet(xsldocDarcy2);
			 var outputXHTML = xsltProcessor.transformToFragment(xml, document);             
			//alert(outputXHTML);          
			 swappableSection.appendChild(outputXHTML);
		 }
		 else if(window.ActiveXObject)
		 {
			 // support Windows/ActiveX enabled browsers
			 var outputXHTML = req.responseXML.transformNode(xsldocDarcy2);
			 swappableSection.innerHTML = outputXHTML;
		 }		
		}
	}
	
	url = "chris2dbEntries.xml";

	xmlhttp.open("GET", url, true);
	xmlhttp.send();
}

function onNameChange(){
	var xmlhttp;
 
	if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp = new XMLHttpRequest();
	}
	else {// code for IE6, IE5
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}

	xmlhttp.onreadystatechange = function () {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			var xml = xmlhttp.responseXML;

			
	   if (!xsldocloaded)
		 {
			 alert("Unable to transform data.  XSL is not yet loaded.");
			 // break out of the function
			 return;
		 }
		 
		 var swappableSection = document.getElementById("UserList");
		 swappableSection.innerHTML = "";
		 
		 if (window.XSLTProcessor)
		 {
			 // support Mozilla/Gecko based browsers
			 var xsltProcessor = new XSLTProcessor();
			 xsltProcessor.importStylesheet(xsldocUsers);
			 //alert(xml.toString());
			 var outputXHTML = xsltProcessor.transformToFragment(xml, document);             
			//alert(outputXHTML.toString());          
			 swappableSection.appendChild(outputXHTML);
		 }
		 else if(window.ActiveXObject)
		 {
			 // support Windows/ActiveX enabled browsers
			 var outputXHTML = req.responseXML.transformNode(xsldocUsers);
			 swappableSection.innerHTML = outputXHTML;
		 }		
		}
	}
	
	var inputName = document.getElementById("username").value;
	//alert(inputName);
	
	url = "chris2dbUsers.xml?";
	url = url + "&userid=" + inputName;
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
}

  
