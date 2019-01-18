// $("#box1").show(2000)
// $("#box1").hide(2000)

// $("#box2").fadeIn(2000)
// $("#box2").fadeOut(2000)

// $("#box3").slideDown(2000)
// $("#box3").slideUp(2000)


$("#box1").animate({  
	opacity: 50,  
	width: "100%"},
	4000 );

$("#box2").animate({  
	opacity: 50,  
	width: "100%"},
	4000 );


$("#box3").animate({  
	opacity: 50,  
	width: "100%"},
	4000 );
$("#picdiv").on('click', function(){
	// $("#pic").fadeToggle(1000)
	$("#bigdiv").html("<img src='https://www.travelthewholeworld.com/wp-content/uploads/2016/10/Haiti_Port_Au_Prince_Statue_Dessalines.jpg'>")


})

$("#bigdiv").on('click',function(){
	$("#bigdiv").html("")
})

$("#heading1").on('click mouseover', function(){
	$("#para1").slideToggle(2000)
})

