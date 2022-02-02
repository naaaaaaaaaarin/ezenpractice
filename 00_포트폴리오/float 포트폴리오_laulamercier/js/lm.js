// DOM객체 할당 video, btn
const vid = $('#lm_video');
const btn = $('#lm_btn');
console.log(vid);
console.log(btn);

// 이벤트 연결
btn.click(function(){
    // 초기값 = video(paused) / btn(play)
    if(vid.get(0).paused){
        vid.get(0).play();
        btn.html('<i class="fa fa-pause-circle-o" aria-hidden="true"></i>')
    }else{ // video가 playing 상태일 때
        vid.get(0).pause();
        btn.html('<i class="fa fa-play-circle-o" aria-hidden="true"></i>')
    }
});