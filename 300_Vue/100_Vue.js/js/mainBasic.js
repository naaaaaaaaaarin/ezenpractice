var app = new Vue({
    // id값 app 태그에 적용
    el: '#app',
    // a. data key : 데이터 바인딩
    data: {
        // 1. 텍스트 바인딩
        message: 'Hello Vue js',
        message2: 'Vue.js',
        text: 'Component Oriented',

        // 이미지 바인딩
        imageSrc: './image/dog1.jpg',
        imageSrc2: './image/dog2.jpg',
        imageSrc3: 'dog3.jpg',

        // 2. 반복 렌더링
        list: ['HTML', 'CSS', 'javaScript'],

        photos: [{
                thumnail: 'https://images.pexels.com/photos/2183863/pexels-photo-2183863.jpeg?cs=srgb&dl=pexels-anfisa-eremina-2183863.jpg&fm=jpg',
                desc: 'Cherry Blossom'
            },
            {
                thumnail: 'https://images.pexels.com/photos/1883385/pexels-photo-1883385.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
                desc: 'flower'
            },
            {
                thumnail: 'https://images.pexels.com/photos/2388650/pexels-photo-2388650.jpeg?cs=srgb&dl=pexels-cole-keister-2388650.jpg&fm=jpg',
                desc: 'sky'
            },
        ],
        // 3-2. 이벤트 사용
        counter: 0,
        // 4. 폼 동기화 : input의 값을 동기화
        inputValue: '',
        numValue: null,

        // 5. 조건문 분기 : 초기값 true
        show: true,
        hide : false,
        // 이벤트 연동
        eventShow: true,

        // 6. 트랜지션, 애니메이션
        transition: true,
    },
    // 3-1. 이벤트 사용
    methods: {
        // 이벤트 리스너 : 익명함수 실행문
        eventClick: function(){
            alert('vue');
        },
        countPlus : function(){
            this.counter++
        },
        countMinus : function(){
            this.counter--
        },
        test: function(){
            alert('트랜지션');
        }
    },

    
});