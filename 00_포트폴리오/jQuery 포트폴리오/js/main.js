$('.gnb li').mouseenter(function(){
    $(this).children('div').stop().slideDown();
});
$('.gnb li').mouseleave(function(){
    $(this).children('div').stop().slideUp();
});