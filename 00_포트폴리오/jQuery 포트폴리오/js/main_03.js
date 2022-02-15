// 1. 각 탭메뉴명 변수에 할당
let tab = $('#menu_gnb').find('li');
console.log(tab);
// 1-2. 현재 DOM객체 탭의 li의 갯수를 clg에 출력
console.log("탭메뉴 li의 갯수 : " + tab.length);

// 2. 선언적 함수 Event Listener
/* function tab_menu(num) {
    alert('호출');
} */
let i
function tab_menu(num){
    // li의 갯수만큼 반복문 조건식 만들기
    for(i=0; i<tab.length ;i++){
        if(num == i) {
            // active 클래스 적용
            tab.eq(i).addClass('active');
            // 콘텐츠 보여주기
            $('.tab_content_0'+i).show();
        }else {
            // active 클래스 삭제
            tab.eq(i).removeClass('active');
            // 콘텐츠 보여주기
            $('.tab_content_0'+i).hide();
        };
    };
};
