$(document).ready(function(){
	//var array = [["1", "2", "3", "4"], 
	//			["1", "2", "3", "4", "5"],
	//			["1", "2", "3", "4", "5", "6"]];
	var point = { x:3, y:2 };

	var array = [[{title:"1 Utama Linh", date:"date", time:"time", direction:"google.com"}, {title:"1 Utama", date:"date", time:"time", direction:"direction"}, {title:"1 Utama", date:"date", time:"time", direction:"google.com"}], 
				[{title:"1 Utama", date:"date", time:"time", direction:"direction"}, {title:"1 Utama", date:"date", time:"time", direction:"direction"}, {title:"1 Utama", date:"date", time:"time", direction:"direction"}],
				[{title:"1 Utama", date:"date", time:"time", direction:"direction"}, {title:"1 Utama", date:"date", time:"time", direction:"direction"}, {title:"1 Utama", date:"date", time:"time", direction:"direction"}]];
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
	});
});
