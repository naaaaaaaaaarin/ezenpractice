// 최상단 배너의 x를 클릭하면 배너가 사라짐
$('aside .close').click(function(){
    $(this).parent().slideUp(300);
});

// gnb메뉴에 마우스를 올리면 하단 메뉴가 나옴
$('.gnb li').mouseenter(function(){
    $(this).children('.submenu').stop().slideDown(300);
});
$('.gnb li').mouseleave(function(){
    $(this).children('.submenu').stop().slideUp(300);
});

// 햄버거 메뉴를 누르면 모든 메뉴가 하단에 나옴
$('.global label').click(function(){
    $('.gnb li .hammenu').stop().slideToggle(300);
});

let swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    autoplay: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    }
});

// 블랙패밀리 
let tab = $('.black_family .left ul').find('li');
// console.log(tab);
// console.log(tab.length);
function tab_menu(num){
    for(let i=0;i<tab.length;i++){
        if(num==i){
            tab.eq(i).addClass('active');
            $('.b_content'+i).show();
        }else{
            tab.eq(i).removeClass('active');
            $('.b_content'+i).hide();
        }
    };
};