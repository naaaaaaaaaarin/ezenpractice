/* Vue 생성자 함수 사용 : app에 인스턴스 생성 | 반드시 참조변수에 할당할 필요X. 사용 시 관례적으로 app, vm 사용
    참조변수의 리턴값은 Root의 인스턴스가 됨 ->(콘솔)등에서 정보참조, 디버깅 등에 활용
*/

// 1-1 Vue 애플리케이션 인스턴스 생성 파일 : DOM구조 <body>밑에 코딩 시
var app = Vue({
    // id값 app 태그에 적용
    el: '#app',
    // 데이터 바인딩
    data: {
        message: 'Hello Vue js',
    },
});

/* // 1-2 Vue 애플리케이션 인스턴스 생성 파일 : DOM구조 <head>밑에 코딩 시
document.addEventListener('DOMContentLoaded',function(){
    window.app = new Vue({});
}); */