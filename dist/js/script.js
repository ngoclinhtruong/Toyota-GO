$(document).ready(function(){
	//var array = [["1", "2", "3", "4"], 
	//			["1", "2", "3", "4", "5"],
	//			["1", "2", "3", "4", "5", "6"]];
	var point = { x:3, y:2 };

	var array = [[{title:"1 Utama Linh", date:"date", time:"time", direction:"google.com"}, {title:"1 Utama", date:"date", time:"time", direction:"direction"}, {title:"1 Utama", date:"date", time:"time", direction:"google.com"}], 
				[{title:"1 Utama", date:"date", time:"time", direction:"direction"}, {title:"1 Utama", date:"date", time:"time", direction:"direction"}, {title:"1 Utama", date:"date", time:"time", direction:"direction"}],
				[{title:"1 Utama", date:"date", time:"time", direction:"direction"}, {title:"1 Utama", date:"date", time:"time", direction:"direction"}, {title:"1 Utama", date:"date", time:"time", direction:"direction"}]];
	
    var locations = [[
      ['Bondi Beach', -33.890542, 151.274856, 4],
      ['Coogee Beach', -33.923036, 151.259052, 5],
      ['Cronulla Beach', -34.028249, 151.157507, 3],
      ['Manly Beach', -33.80010128657071, 151.28747820854187, 2],
      ['Maroubra Beach', -33.950198, 151.259302, 1]
    ],
    [
      ['Manly Beach', -33.80010128657071, 151.28747820854187, 2],
      ['Maroubra Beach', -33.950198, 151.259302, 1]
    ],
    [
      ['Manly Beach', -33.80010128657071, 151.28747820854187, 2],
      ['Coogee Beach', -33.923036, 151.259052, 5],
      ['Maroubra Beach', -33.950198, 151.259302, 1]
    ]
   ];

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 10,
      center: new google.maps.LatLng(-33.92, 151.25),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infowindow = new google.maps.InfoWindow();
	var markers = [];
    var marker, i;

    var iLocations = [];
    for (i = 0; i < locations.length; i++) { 
    	iLocations = locations[i];
    	for (j = 0; j < iLocations.length; j++) {
    		marker = new google.maps.Marker({
	        position: new google.maps.LatLng(iLocations[j][1], iLocations[j][2]),
	        map: map
	      });

	      google.maps.event.addListener(marker, 'click', (function(marker, i) {
	        return function() {
	          infowindow.setContent(iLocations[i][0]);
	          infowindow.open(map, marker);
	        }
      		})(marker, i));
      		markers.push(marker);
    	}   
	}

	$(".region").change(function() {
		 var str = "";
		 var selectedId = $( this ).attr("id");
		 var selectedIndex = 0;
    	$( "select option:selected" ).each(function() {
      		str += $( this ).text() + $( this ).index();
  			selectedIndex = $( this ).index();
    	});
    	$( ".text" ).text( str );
    	var selectedArray = array[selectedIndex]
		var html = '';
		var selectedItem = {};
		$(".map-directions .slides").empty();
		for (var i=0; i < selectedArray.length; i++) {
			selectedItem = selectedArray[i];
			html = "<li><h3>" + selectedItem["title"] + "</h3><p class='date'>Date: </p>" + selectedItem["date"] + "<p class='time'>Time: " + selectedItem["time"] + "</p><div class='direction-link'><a href='" + selectedItem["direction"] + "''>+ Direction to here</a></div></li>";
			$(".map-directions .slides").append(html);		
		}
		//$(".map-directions .slides").append(html);

		$('.map-directions').removeData("flexslider");
 		$('.map-directions').flexslider({
		    animation: "slide",
		    animationLoop: false,
		    slideshow: false,
		    startAt: 0,
		    controlNav: false,
		    itemWidth: 240,
		    itemMargin: 20
		});

 		var selectedPoints = locations[selectedIndex];
		for (var i = 0; i < markers.length; i++) {
		      markers[i].setMap(null);
		   }
		   markers = [];

		for (i = 0; i < selectedPoints.length; i++) {  
	      marker = new google.maps.Marker({
	        position: new google.maps.LatLng(selectedPoints[i][1], selectedPoints[i][2]),
	        map: map
	      });

	      google.maps.event.addListener(marker, 'click', (function(marker, i) {
	        return function() {
	          infowindow.setContent(selectedPoints[i][0]);
	          infowindow.open(map, marker);
	        }
      		})(marker, i));
      markers.push(marker);
    }

	});
		
});
