$('#menu_dept').hide();
$('#menu .gnb li a').click(function(){
    $('#menu_dept').stop().show();
});
$('.close').click(function(){
    $('#menu_dept').stop().hide();
})