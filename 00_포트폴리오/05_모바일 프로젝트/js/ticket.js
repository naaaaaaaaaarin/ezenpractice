// 1. 이벤트 호출
$('#myBtn').on('click', myFunction);
// 2. 이벤트 리스너(핸들러)
function myFunction() {
    var dots = $('#dots');
    var moreButton = $('#more');
    var btnText = $('#myBtn');
    var result = $('#dots').css('display');
    /* console.log(dots);
    console.log(moreButton);
    console.log(btnText); */
    // 초기상태 로딩
    if(result=='none'){
        dots.css({'display':'inline'});
        moreButton.css({'display':'none'});
        btnText.text('+ MORE');
    }else {
        dots.css({'display':'none'});
        moreButton.css({'display':'inline'});
        btnText.text('- CLOSE');
    };
};