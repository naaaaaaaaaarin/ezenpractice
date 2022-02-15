// .swiper-container = 구조의 클래스값
var swiper = new Swiper('.swiper-container', {
  // 슬라이드 보이는 갯수
  slidesPerView : 1.52,
  // 슬라이드 사이의 간격
  spaceBetween : '10.33333333333%',
  // 슬라이드 반복 여부
  loop : true,
  // 그룹 수 만들기= 칸이 안맞을 경우 빈칸으로 채우기 여부
  // if 슬라이드 3개가 나와야 하는데 1개만 있을 경우 2개는 빈칸으로 자동으로 채워져 3개를 만듬
  loopFillGroupWidthBlank: true,
  // 활성슬라이드 중앙 배치
  centeredSlides: true,
  //페이지 넘버링
  pagination : {
    // 적용될 구조 코딩의 클래스명
    el : '.swiper-pagination',
    //불릿모양
    type : 'bullets',
    // 숫자
    type : 'fraction',
    // 적용 후 클릭 시 해당 슬라이드 링크 여부
    clickable : true,
  },
  // 좌우화살표
  navigation : {
    // 적용시킬 구조의 클래스명
    nextEl : '.swiper-button-next',
    prevEl : '.swiper-button-prev',
  },
});