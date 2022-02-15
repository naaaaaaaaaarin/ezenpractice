
const browserWidth = $(window).width();
const browserHeight = $(window).height();
console.log("브라우저 너비값 : "+ browserWidth);
console.log("브라우저 높이값 : "+ browserHeight);

$('#wrap').css({width:browserWidth, height:browserHeight});
