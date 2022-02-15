// 1. jQuery UI플러그인 : 효과 메서드들에 대해 추가 기능 제공 플러그인
// show(effect type), hide(effect type), gottle(effect type) : effect type 지정
// dffect type : blind, bounce, clip, explode, fold, highlight, shake, size, slide 등
$('ul li').eq(0).click(function(){
  $('article img').stop().show('shake',1000);
});
$('ul li').eq(1).click(function(){
  $('article img').stop().hide('highlight','slow');
});
$('ul li').eq(2).click(function(){
  $('article img').stop().toggle('explode',1000);
});

// 2. jQuery Core에서는 속성값이 숫자형인 경우만 사용 가능
// jQuery UI플러그인 사용 시 대부분 속성 사용 가능
$('ul li').eq(3).click(function(){
  $('footer').animate({'background-color':'#000','color':'#ccc'},2000);
  $('footer span').animate({'color':'red'},500);
});