

/**
 * 
 * @param {String} jsonString
 * @returm {String} html table body filles with values from json obj
 */
var JSONtoTable = function(jsonString){
	/** @type {JSON} */
	var jsonObj = JSON.parse(jsonString); 
	var str = ""; //"<table>";
	
	for (name in jsonObj){
		str += "<tr>";
		str += "<td>"+name+"</td>";
		str += "<td>"+jsonObj[name]+"</td>";
		str += "</tr>";
	}
	//str += "</table>";
	return str;
};


function myMac(){
	$.get("http://localhost:1188/my_mac",
			function(data,status,xhr){
		console.log("data: "+data);
		console.log("status: "+status);
	});
}

function requestCam(){
	$.post("http://localhost:1188/request_cam",JSON.stringify({condition:"latest"}),
			function(data,status,xhr){
		console.log("data: "+data);
		console.log("status: "+status);
	});
}

function requestDenm(){
	$.post("http://localhost:1188/request_denm",JSON.stringify({condition:"latest"}),
			function(data,status,xhr){
		console.log("data: "+data);
		console.log("status: "+status);
	});
}

function requestGps(){
	$.post("http://localhost:1188/request_gps",JSON.stringify({condition:""}),
			function(data,status,xhr){
		console.log("data: "+data);
		console.log("status: "+status);
	});
}

function requestObd2(){
	$.post("http://localhost:1188/request_obd2",JSON.stringify({condition:""}),
			function(data,status,xhr){
		console.log("data: "+data);
		console.log("status: "+status);
	});
}

function requestDccInfo(){
	$.post("http://localhost:1188/request_dccinfo",JSON.stringify({condition:"latest"}),
			function(data,status,xhr){
		console.log("data: "+data);
		console.log("status: "+status);
	});
}

function requestCamInfo(){
	$.post("http://localhost:1188/request_caminfo",JSON.stringify({condition:"latest"}),
			function(data,status,xhr){
		console.log("data: "+data);
		console.log("status: "+status);
	});
}

function triggerDenm(){
	$.post("http://localhost:1188/trigger_denm",JSON.stringify({content: "triggered by GUI"}),	
			function(data,status,xhr){
		console.log("data: "+data);
		console.log("status: "+status);
	});
}




function initMap(){
	//init map
	var map = L.map('mapContainer');

	// create the tile layer with correct attribution
	var osmUrl="map/openstreetmap/{z}/{x}/{y}.png";
	//online map 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
	//marbel chache file:///home/jonh/.local/share/marble/maps/earth/openstreetmap/{z}/{x}/{y}.png
	
	
	var osmAttrib='Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';
	var osm = new L.TileLayer(osmUrl, {minZoom: 1, maxZoom: 18, attribution: osmAttrib,trackResize:true});		

	// start the map in Paderborn
	map.setView(new L.LatLng(51.7315, 8.739),15);
	map.addLayer(osm);
	
	var pos =[51.7315, 8.739];
	var marker = L.marker([51.7315, 8.739]).addTo(map);
	var myIcon = L.icon({
	    iconUrl: 'image/marker/marker-icon-red.png',
	});
	
	var marker2 = L.marker([50.505, 30.57], {icon: myIcon}).addTo(map);
	
	window.setInterval(function(){
		pos[1]+=0.0001;
		marker.setLatLng(pos);
		marker2.setLatLng([pos[0]+0.001*(Math.random()+0.5),pos[1]]);
		map.invalidateSize();
		map.setView(pos);
	},300);
	
}

$(document).ready(function(){
	
	initMap();
	
	var counter = 1;
	
	window.setInterval(function(){
		var obj = {speed:counter,rpm:counter++ * 36,driver:"alive"};
		$("#car_data").html(
			JSONtoTable(JSON.stringify(obj))
		);
		var obj = {status:"running", queued:(counter*93)%77,state:(counter%2 == 0)?"busy":"relaxed",queueBE:2,queueBK:5,queueVI:0,queueVO:100};
		$("#dcc_data").html(
			JSONtoTable(JSON.stringify(obj))
		);
	},1000);
	
	
	
	$(function() {
    	$( ".container" ).draggable().resizable();
  	});


});