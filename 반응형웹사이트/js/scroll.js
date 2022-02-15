// 1. 부드러운 스크롤 이동 (ScrollTo 플러그인)
$('.gnb a').click(function(e){
  e.preventDefault();
  // scrollTo 플러그인 사용방법
  // scrollTo(링크될 # || Y축픽셀값, 애니메이션 시간)
  $(window).scrollTo(this.hash || 0, 500);

  // 2. 부드러운 스크롤탑 이동 (스크립트 코딩)
  $('.top').click(function(e){
    $(window).stop().animate({scrollTop:0},1000,'swing');
    e.preventDefault();
  });

  // 3. 스크롤이 특정 위치에 왔을 때 탑버튼 출력/사라짐
  const SA = 100;
  $(window).scroll(function(){
    let num = $('html,body').scrollTop();
    console.log('스크롤탑 값 : ', num);
    if(num>=SA){
      $('aside div').stop.fadeIn();
    }else{
      $('aside div').stop.fadeOut();
    }
  });
});