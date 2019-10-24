var AniEasy = (function(){
	function AniEasy(elem) {
		this.elem = (elem == undefined) ? ".ani-easy" : elem;
		this.elem = document.querySelector(this.elem);
		this.interval;
	}
	return AniEasy;
})();

AniEasy.prototype.animate = function(css, cb) {
	this.css = css;
	this.cb = (typeof cb === 'function') ? cb : null;
	for(var key in this.css) {
		this.cssName = key;
		this.cssValue = this.css[key];
	}
	var pos = Number(this.cssValue.replace("px", "")); // -720px -> -720(문자) -> -720(숫자)
	var tar = Number(getComputedStyle(this.elem)[this.cssName].replace("px", "")); // 초기값(숫자)
	clearInterval(this.interval);
	this.interval = setInterval(ani, 20, this);
	function ani(obj) {
		if(Math.ceil(Math.abs(tar)) == Math.abs(pos)) {
			clearInterval(obj.interval);
			obj.elem.style[obj.cssName] = pos + "px";
			if(obj.cb) obj.cb();
		}
		else {
			tar += (pos - tar) * 0.15;
			obj.elem.style[obj.cssName] = tar + "px";
		}
	}
}


/*  위의 코딩의 정석의 방법
var AniEasy = (function(){
	function AniEasy(obj) {
		this.elem = (typeof obj.elem == 'undefined') ? ".ani-easy" : obj.elem;
		this.target = obj.target;
		this.speed = (typeof obj.speed == 'undefined') ? 500 : Number(obj.speed);
	}
	return AniEasy;
})();
 */

/* 
obj = {
	elem: ".box", "#box", "div",
	target: 700,
	speed: 500,
}
*/