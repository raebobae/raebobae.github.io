$(document).ready(function() {

	$("button").click(function() {
		$("#poster").show("slow");
	});

	$("#poster").click(function() {
		$(this).hide("slow");
	});

	$(".work img").click(function() {
		$(this).css("max-width", "800px");
		$(this).css("max-height", "1000px");
		$(this).css("z-index", "600000");
		$(".work").css("height", "150px");
		$(".work").css("width", "300px");
	});

	$("#ptitle").hover(function() {
		$("#ptitle").text("PORTFOLIO");
	});

	$("#atitle").hover(function() {
		$("#atitle").text("ABOUT dessie");
	});

});