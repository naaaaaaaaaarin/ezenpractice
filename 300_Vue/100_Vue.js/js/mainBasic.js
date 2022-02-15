var app = new Vue({
    // id값 app 태그에 적용
    el: '#app',
    // a. data key : 데이터 바인딩
    data: {
        // 1. 텍스트 바인딩
        message: 'Hello Vue js',
        message2: 'Vue.js',
        text: 'Component Oriented',

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
    },
});