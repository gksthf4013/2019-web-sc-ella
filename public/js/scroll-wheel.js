window.addEventListener("wheel", function(){event.preventDefault();}, {passive: false});
document.querySelectorAll(".page").forEach(function(page, key) {
	page.addEventListener("wheel", wheelFn, {passive: false});
});

function wheelFn(){
	event.preventDefault();
	event.stopPropagation();
	var hei = $(this).outerHeight();
	var delta = event.deltaY;
	var posY = event.pageY;
	var n = Math.floor(posY/hei); // index값
	var pageCnt = $(".page").length; // 4
	if(delta > 0) {
		// 아래로 휠
		if(n < pageCnt - 1) wheelAni((n + 1) * hei);
	}
	else {
		// 위로 휠
		if(n > 0) wheelAni((n - 1) * hei);
	}
}
function wheelAni(pos) {
	$("html, body").stop().animate({
		"scrollTop": pos
	}, 300);
}