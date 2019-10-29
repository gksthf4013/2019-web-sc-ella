# 수업내용 필기

## 2019.10.17(목)

### ella - express-generator
```
var createError = require('http-errors'); 
=> views 안에 있는 errer.pug 로 에러를 알려준다.
```

### ella - cookie
```
$.cookie("top-banner-close", true, {expires: 1});
여기에서 expires: 1 = 하루를 의미한다.

시간을 따로 지정하고 싶다면 변수를 따로 만들어서 사용한다
var d = new Date(); d라는 변수에 현재 시간을 넣어서
d.setTime(d.getTime() + 10*60*1000); 
.getTime() = Date객체의 타임스템프 값을 가져온다
.setTime() = 시간을 지정한다
10*60*1000 = 10분*60초*1000밀리초
```

### ella - toggle
```
toggle 클래스를 바꿔서 사용해야 할 경우에는 toggleClass를 두개 써줘서 번갈아가며 사용한다.

$(".sel-top .fa-angle-down").click(function(){
	$(this).next().stop().slideToggle(300);
	$(this).toggleClass("fa-angle-down fa-angle-up");
});

slideToggle() = 슬라이드 효과를 넣고 빼고의 효과를 넣을 수 있다

toggleClass("fa-angle-down fa-angle-up") 이와 같은 경우,
fa-angle-down이 있으면 없앤 후 fa-angle-up을 넣어주고, 
fa-angle-up이 있으면 없앤 후 fa-angle-down을 넣어준다.
```

## 2019.10.18(금)

### ella - 전날 복습
```
.attr("src"); = 이미지를 가져올 때는 src만 입력하고,
.attr("src", "../img/a.jpg"); = 이미지를 바꿀 때는 두개를 써줘야 한다.

$(this).parent().prev().trigger("click");
= 나의 부모의 전에 있는것에 click이라는 trigger를 준다.
```

## 2019.10.22(화)
```
onreadystatechange = 이벤트 속성(값이 변화가 되면)
```

## 2019.10.23(수)
```
document.querySelectorAll(".banners") = 배열

DOM = Document Object Model
BOM = Browser Object Model

document.querySelectorAll(".banner")[0].cloneNode(true);
= 문자열 html이 아니라 DOM이다
= .addEventListener()를 가지고 있지 않다
```

## 2019.10.25(금)
```
$(".sch-txt").click(function(e){
	e.stopPropagatio(); = 이벤트가 나한테서만 딱 멈춘다 내 상위에 있는 놈들은 클릭이 안된다.
	$(".sch-layer").show();
});

window.addEventListener("wheel", function(){
	console.log(event.deltaY);
});
event.deltaY = event 안에 있는 deltaY의 휠 움직임에 따른 거리값

event.preventDefault(); = 이벤트의 기본 기능을 막아준다
```

## 2019.10.29(화)
```
$("#snd")[0] = jquery객체를  JavaScript 객체로 변환한다
```