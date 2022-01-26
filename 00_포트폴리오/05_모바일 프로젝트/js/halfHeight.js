// 브라우저 너비, 높이 변수 할당
const bw = $(window).width();
const bh = $(window).height();
$('#wrap').css({height:bh});
// 브라우저 너비, 높이의 절반값 변수 할당
const halfWidth = bw/2;
const halfHeight = bh/2;

// 브라우저 너비, 높이값 콘솔 출력
console.log("브라우저 너비값  : " + bw);
console.log("브라우저 높이값 : " + bh);
console.log("브라우저 높이값 절반 : " + halfHeight);

$('#contents .youtube').css({"margin-top":halfHeight})