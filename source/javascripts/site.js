// This is where it all goes :)
function openContent(name) {
	//make all tabs not the active one
	$("li").each(function() {
		$(this).removeClass("is-active");
	});

	//make all of the content not displayed
	$("div.tab-content").each(function() {
		$(this).css("display", "none");
	});

	//set active tab and appropriate content
	$("#" + name).css("display", "block");
	$("#" + name).css("opacity", "0");
	$("#" + name + "-button").addClass("is-active");

	$("#" + name).animate({
		opacity: '1'
	}, 300);
}

function revealEmail() {
	$("#info-content").css("opacity", "0");
	$("#info-content").text("guthrieschoolar95@gmail.com");
	$("#info-content").animate({
		opacity: '1'
	});
}