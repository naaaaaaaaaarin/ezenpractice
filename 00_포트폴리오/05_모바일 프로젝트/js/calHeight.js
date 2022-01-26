// 1. 브라우저 동적 너비/높이값 구하기
const browserWidth = $(window).width();
const browserHeight = $(window).height();
// 2. 너비/높이값 콘솔 출력
console.log("브라우저 너비값 : " + browserWidth);
console.log("브라우저 높이값 : " +browserHeight);
// 3. DOM에 배경이미지 높이값 적용
$('#wrap').css({height:browserHeight, width:browserWidth});