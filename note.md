# 수업내용 필기

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