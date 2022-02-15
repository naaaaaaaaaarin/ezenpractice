// 최상단 배너의 x를 클릭하면 배너가 사라짐
$('aside .close').click(function(){
    $(this).parent().slideUp(300);
})