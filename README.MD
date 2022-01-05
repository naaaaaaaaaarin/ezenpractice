# 21.11.08 (1일차)

## <웹 구동방식>

C(client)S(server)방식<br>
브라우저(C)가 서버(S)에게 리퀘스트를 하면 서버에서 브라우저에게 리스폰 하는 형식.

## HTML(Hyper Text Markup Language)

- 태그 중심
- 형식 : <요소명> </요소명>
- 태그의 구분
  - <시작태그> </종료태그> : 대다수
  - <단일태그> or <빈태그> : 일부분
- 태그의 속성 : 블록요소, 인라인요소, 인라인블록요소
- HTML, CSS, javascript : 인터프리터, top-down 형식

## HTML5 기본 구성

```
<!DOCTYPE html>
<html>
  <head></head>
  <body></obody>
</html>
```

---

## 블록 요소

### hn(n=1~6)태그

-제목 표시하기. h1태그는 문서에 한번만 쓸 수 있음

<h1>h1</h1>
<h2>h2</h2>
<h3>h3</h3>
<h4>h4</h4>
<h5>h5</h5>
<h6>h6</h6>

---

### p태그

-단락 만들기

```
<p>
  연습용 문장입니다.
</p>
```

=> 한 단락을 구성하여 '연습용 문장입니다.'를 출력

### blockquote 태그

-인용문. 들여쓰기가 자동으로 적용

### pre 태그

-입력하는 그대로 화면에 표시되는 요소

```
<pre>
function ezen() {
    document.getElementsById("p");
}
</pre>
```

위 함수의 내용이 그대로 출력됨.

### 엔티티코드

-https://entitycode.com/ -특수문자를 사용할 수 있는 코드 모음

## 인라인요소

-웹접근과 관련이 높은 요소들

### strong, b 태그

- 공통점 : 굵은 글씨를 표현함
- strong : 낭독기에서 강조하며 읽어줌
- b : 단순한 굵은 글씨 표현

### em, i 태그

- 공통점 : 이텔릭체 (기울임)
- em : 낭독기에서 강조하며 읽어줌
- i : 단순한 이텔릭체

### span 태그

- 인라인 요소의 그룹핑태그. 주로 css와 연동하여 사용

### q 태그

- 인용("" 표현)을 원할 때 사용

### mark 태그

- 형광펜 표현

### abbr 태그

- 축약태그

### sup, sub 태그

- sup : 윗첨자
- sub : 아래첨자

### 실선 태그

| 태그 |    뜻    |         예          |
| :--: | :------: | :-----------------: |
|  u   |   밑줄   |     <u>밑줄</u>     |
|  s   |  취소선  |     <s>취소</s>     |
| ins  | 내용삽입 | <ins>내용삽입</ins> |
| del  | 내용삭제 | <del>내용삭제</del> |

### small 태그

- 부가정보처럼 작게 표시하는 태그
  가격 : 20,000원 <small>(부가세별도)</samll>

### a 태그

- 링크를 걸 수 있는 태그

```
<a href="http://www.naver.com">네이버</a>
```

<a href="http://www.naver.com" target="_blank">네이버</a>

# 21.11.09 (2일차)

```
meta name="viewport" content="width=device-width, initial-scale=1.0">
```

vs코드가 기본제공하는 반응형 코딩을 위한 필수코드

## img 태그 (이미지삽입)

1. CDN(Contents Delivery Network) 방식

- src에 이미지 주소를 붙여넣는 방법
- alt="~~~~~" : 이미지 주소 오류 시 나타나는 대체 텍스트

```
<img scr="이미지 주소" alt="이미지 대체 텍스트">
```

2.  로컬 컴퓨터 이미지 불러오기

- 경로의 기준 : 현재 작성중인 문서(상대경로)

```
<img src="./~~~~~~/~~~ alt="이미지 대체 텍스트">
```

위 src의 내용은 현재 파일이 있는 폴더(./) 혹은 상위폴더(../)를 기준으로 원하는 이미지가 있는 파일의 폴더 경로를 입력한다

3. 가상 이미지 사용

```
<img src="http://placehold.it/640x480" />
```

뒤 숫자는 원하는 이미지 파일의 크기를 적는다

4. 배경이 투명한 이미지 사용

- png파일 사용

5. 벡터 방식

- svg파일 사용
- 함수로 만든 이미지이며 깨지지 않음

## 목록 태그

1.  ul

- 순서가 없는 목록
- 각 항목의 앞에 블릿(동그라미, 네모 등)이 붙음

```
<ul>
 <li>포도</li>
 <li>사과</li>
</ul>
```

2.  ol

- 순서가 있는 목록
- 각 항목 앞에 숫자, 영문, 로마자가 붙는다

```
<ol>
 <li>세수하기</li>
 <li>밥먹기</li>
</ol>
```

- ol type="a, 1, i(로마자)" strat="숫자" <=시작하고싶은 숫자를 적음

3.  혼합 목록

    - ul, ol 태그를 혼합하여 사용

```
 <h3>목록중첩 (여행일정)</h3>
  <ol>
      <li>일차
          <ul>
              <li>해녀박물관</li>
              <li>낚시체험</li>
          </ul>
      </li>
      <li>일차
          <ul>
              <li>용눈이오름</li>
              <li>만장굴</li>
              <li>카약체험</li>
          </ul>
      </li>
      <li>일차
          <ul>
              <li>협재해수욕장</li>
              <li>감귤체험</li>
          </ul>
      </li>
  </ol>
```

  <h3>목록중첩 (여행일정)</h3>
    <ol>
        <li>일차
            <ul>
                <li>해녀박물관</li>
                <li>낚시체험</li>
            </ul>
        </li>
        <li>일차
            <ul>
                <li>용눈이오름</li>
                <li>만장굴</li>
                <li>카약체험</li>
            </ul>
        </li>
        <li>일차
            <ul>
                <li>협재해수욕장</li>
                <li>감귤체험</li>
            </ul>
        </li>
    </ol>
<hr>
  4. dl
   - 정의형 목록
   <dl>
        <dt>정의형목록 제목</dt>
        <dd>정의형목록 내용1</dd>
        <dd>정의형목록 내용2</dd>
    </dl>

    ```
    <dl>
        <dt>정의형목록 제목</dt>
        <dd>정의형목록 내용1</dd>
        <dd>정의형목록 내용2</dd>
    </dl>
    ```

5. 젠코딩

- ul>li

```
<ul>
  <li></li>
</ul>
```

- ul>li\*2

```
<ul>
  <li></li>
  <li></li>
</ul>
```

- ul>li{서브메뉴$}\*2

```
<ul>
  <li>서브메뉴1</li>
  <li>서브메뉴2</li>
</ul>
```

# 21.11.10

## Tabel(표)

### 기본 구조

```
<table>
  <tr>
    <td>1행1열</td>
    <td>1행2열</td>
    <td>1행3열</td>
  </tr>
  <tr>
    <td>2행1열</td>
    <td>2행2열</td>
    <td>2행3열</td>
  </tr>
</table>

or

table>tr*2>td{1행1열$}*3
```

<table border=1px>
  <tr>
    <td>1행1열</td>
    <td>1행2열</td>
    <td>1행3열</td>
  </tr>
  <tr>
    <td>2행1열</td>
    <td>2행2열</td>
    <td>2행3열</td>
  </tr> 
</table>

(테이블 태그 안에 border은 안쓰는것이 원칙)

### 셀 합치기, 테이블 제목

- colspan(가로합), rowspan(세로합)
- caption : 표의 제목. 가운데정렬, 굵게 표시됨
- th : th의 형제요소이나 제목 등 강조에 쓰임

```
 <table>
   <caption>
     <p>공연 요금표</p>
   </caption>
   <tr>
     <th colspan="3">공연요금</th>
   </tr>
   <tr>
     <td>구분</td>
     <td>S석</td>
     <td>VIP</td>
   </tr>
   <tr>
     <td>성인</td>
     <td>30,000원</td>
     <td>40,000원</td>
   </tr>
   <tr>
     <td>청소년</td>
     <td>40,000원</td>
     <td>60,000원</td>
   </tr>
   <tr>
     <td>소인</td>
     <td colspan="2">미취학 아동 일반 요금의 50%</td>
   </tr>
   <tr>
     <td rowspan="2">공연시간</td>
     <td>1회</td>
     <td>13:00 ~ 15:00</td>
   </tr>
   <tr>
     <td>2회</td>
     <td>15:00 ~ 17:00</td>
   </tr>
 </table>
```

  <table>
    <caption>
      <p>공연 요금표</p>
    </caption>
    <tr>
      <th colspan="3">공연요금</th>
    </tr>
    <tr>
      <td>구분</td>
      <td>S석</td>
      <td>VIP</td>
    </tr>
    <tr>
      <td>성인</td>
      <td>30,000원</td>
      <td>40,000원</td>
    </tr>
    <tr>
      <td>청소년</td>
      <td>40,000원</td>
      <td>60,000원</td>
    </tr>
    <tr>
      <td>소인</td>
      <td colspan="2">미취학 아동 일반 요금의 50%</td>
    </tr>
    <tr>
      <td rowspan="2">공연시간</td>
      <td>1회</td>
      <td>13:00 ~ 15:00</td>
    </tr>
    <tr>
      <td>2회</td>
      <td>15:00 ~ 17:00</td>
    </tr>
  </table>

### 테이블의 구분

- thead : 표의 머리부분
- tbody : 표의 내용
- tfoot : 표의 끝부분. 합계 등의 결과값이 있는 내용

## 시멘틱 태그

- 의미가 있는 구조를 형성하는 태그

### header 태그

- 웹의 최상단 부분. 로고, 메뉴 등이 포함됨.

```
<header>
 <h1>로고</h1>
 <nav>  =>네비게이션. 메뉴 등을 나타내는 태그
   <ul>
     <li><a href="javascript:void(0)>메뉴 1</a></li>
     <li><a href="javascript:void(0)>메뉴 2</a></li>
   </ul>
 </nav>
</header>
```

### main 태그

- 웹의 내용을 표시하는 부분

```
<main>
  <section>
    <h2>동물</h2>
    <article>
      <ul>
        <li>강아지</li>
        <li>고양이</li>
      </ul>
    </article>
  </scetion>
</main>
```

### footer 태그

- 웹의 하단 내용. 사업자정보, 저작권 등을 나타냄

```
<footer>
  <p>Copyright~~~~ </p>
</footer>
```

## 가상클래스

- 실제로 존재하지 않으나 어떠한 동작에 반응하는 클래스. 스타일태그 혹은 css에서 사용

| 클래스  |             효과             |    예     |
| :-----: | :--------------------------: | :-------: |
|  link   | 링크된 글을 누르기 전의 상태 |  a:link   |
| visited |  링크된 글을 누른 후의 상태  | a:visited |
|  hover  |  마우스를 올렸을 때의 상태   |  a:hover  |
| active  |  클릭중일 때 나타나는 상태   | a:active  |

- 순서대로 사용해야 오류가 나지 않음
<hr>

## 멀티미디어 (영상 등)

- figure 태그
  - 멀티미디어 등을 담는 태그. 본문을 설명, 소개하는 용도로 감싸는 태그
  - figcaption이라는 자식태그를 사용하기도 함. 글로 설명할 때 쓴다. (1회성)
- video 태그
  - 영상을 업로드 할 수 있는 태그
  - 속성
  1.  controls : 재생, 멈춤 등 영상 컨트롤 UI 표시
  2.  autoplay muted : UI없이 영상 재생
  3.  loop : 무한반복
  4.  poster : 썸네일
- iframe 태그
- 유튜브 영상을 올릴 수 있는 태그. 유튜브 소스를 붙여넣으면 자동으로 생성된다.
- 영상의 크기는 스타일태그 혹은 태그 내의 속성값으로 변경 가능

# 21.11.11 (목)

## reset css

- 브라우저의 기본 css를 초기화하는 설정

```
* {
  margin: 0;
  padding: 0;
}
h1, h2 {
  font-weight: nomal;
  font-size: 16px; /* 브라우적 기본 폰트사이즈 */
}
a {
  text-decoration: none;
  color: inherit;
}
li {
  list-style: none;
}
igm {
  vatical-align: top;
}
.wrap { /* 웹페이지의 중심을 잡는 과정. */
  width: 960px; /* 원하는 가로사이즈 중심 */
  margin: 0 auto; /* 가운데정렬하는 코드 */
}
```

## HTML5 form 태그

- 기본 구조

```
<form action="폼을 보낼 서버주소" method="host">
  <fieldset>
    <legend>제목</legend>
    <ul>
      <li>
        <label for="id값">내용</label>
        <input type="text" id="id값" />
      </li>
    </ul>
  </fieldset>
</form>
```

- input태그의 type 종류
  - text: 글자를 쓸 수 있는 박스
  - password: 비밀번호를 입력하는 박스
  - tel: 전화번호 입력할 수 있는 박스
  - file: 파일을 첨부할 수 있는 버튼
  - email: email을 입력할 수 있는 박스
  - submit: form태그의 action속성에 있는 서버로 전송하는 버튼
  - reset: 작성한 모든 것을 리셋하는 버튼
  - radio: 한가지만 선택할 수 있는 버튼<br>
  ```
  <input type="radio" name="동일한이름" value="서버전송값">사용자출력내용
  ```
  - checkbox: 다중선택이 가능한 버튼<br>
  ```
    <input type="checkbox" name="다른이름" value="서버전송값">사용자출력내용
  ```
  - ulr: 사이트 주소를 입력할 수 있는 박스
  - number: 수량선택이 가능한 박스
    1. value: 기본값
    2. min: 최소 수량
    3. max: 최대 수량
    4. step: 상승 갯수
  - date: 날짜선택 창
  <hr>
- input 태그의 추가 속성
  - size: 크기
  - maxlength: 최대 작성가능한 글자 수
  - minlength: 최소로 작성할 수 있는 글자 수
  - placeholder: 안내, 예시문구
  - autocomplete: 자동완성 (on, off)
  - required: 필수입력요소 속성
  - disabled : 비활성화 (옅게 처리됨)
  - readonly : 읽기만 가능하며 임의로 수정할 수 없음
- selelt 태그 (데이터 나열)

```
<p>
  <label for="web">웹 퍼블리싱</label>
</p>
<select id="web" multiple>
  <option value="html">HTML</option>
  <option value="css">CSS</option>
  <option value="javascript">javascript</option>
</select>
```

- select의 속성값 multiple

  - 有 : 데이터가 펼쳐져서 보여짐. ctrl, shift로 다중선택 가능.
  - 無 : 박스형태의 한 줄로 보여지며 클릭 시 아래로 펼쳐짐.

- optgroup (그룹이 있는 데이터)

```
<p>
  <label for="webdesign">웹퍼블리싱 웹디자인</label>
</p>
<select id="webdesign">
  <optgroup label="웹퍼블리싱">
    <option value="html">HTML</option>
    <option value="css">CSS</option>
    <option value="javascript">javascript</option>
  </optgroup>
  <optgroup label="웹디자인">
    <option value="photoshop">photoshop</option>
    <option value="illust">illustrator</option>
  </optgroup>
</select>
```

- 클릭하여 펼쳤을 때 제목과 내용처럼 그룹이 지어져서 보여짐
- <b>웹퍼블리싱</b><br>
  &nbsp;&nbsp;&nbsp;&nbsp;HTML<br>
  &nbsp;&nbsp;&nbsp;&nbsp;CSS<br>
  &nbsp;&nbsp;&nbsp;&nbsp;javascript<br>
  <b>웹디자인</b><br>
  &nbsp;&nbsp;&nbsp;&nbsp;photoshop<br>
  &nbsp;&nbsp;&nbsp;&nbsp;illustrator<br>

- datalist 태그 : 데이터 목록에 있는 값을 선택하면 텍스트 박스에 자동으로 입력됨

```
<label for="interest">관심분야</label>
<input type="text" id="interest" list="choice" />
<datalist id="choice">
  <option value="grammer">문법</option>
  <option value="voca">어휘</option>
</datalist>
```

<b>grammer</b><br>
&nbsp;&nbsp;&nbsp;&nbsp;문법<br>
<b>voca</b><br>
&nbsp;&nbsp;&nbsp;&nbsp;어휘<br>

--------- 위 내용 중 하나를 클릭하면 텍스트박스에 문법 혹은 어휘가 작성됨

# 21.11.12

> margin
>
> > border
> >
> > > padding
> > >
> > > > contens

- 컨텐츠(박스)의 구성
- text는 위아래 간격이 10px 존재함.

## reset css (브라우저 css 리셋)

```
* {
  margin: 0;
  padding: 0;
}
.wrap { /* 본문을 가운데정렬 시 id 혹은 클래스값을 설정하여 작성. wrap는 예시 */
width: 960px; /* 원하는 본문의 가로너비 */
margin: 0 auto /* 위아래 마진0, 좌우 auto로 창 사이즈에 상관없이 중앙정렬 됨 */
}
h1, h2, h3, h4, h5, h6 {
  font-weight: nomal;
  font-size: 16px /* 브라우저 기본 폰트사이즈 */
}
a {
  text-decoration: none;
  color: inherit;
}
li {
  list-style: none;
}
img {
  vatical-align: top;
}
```

위 외에도 필요한 리셋 내용이 있으면 추가

# 21.11.12

## CSS

- Cascading Style Sheet
- html의 구조를 꾸미는 기능
- 캐스케이딩 : 위->아래로 데이터를 읽어들임. 동일한 속성값이 있을 경우 아래에 있는 값을 적용함.

### 선택자

- class : 중복 사용 가능. >.< 으로 사용함
- id : 중복 사용 불가능. >#< 으로 사용함
- 선택자 우선순위 : \* < 요소명 < class < id < 인라인스타일 < !important
- !important는 속성값 뒤에 작성하면 됨.

```
<style>
      * {
          color: blue;
      }
      p {
          color: red;
      }
      .txt_2 {
          color: pink !important;
      }
      #txt_1 {
          color: black;
      }
      .txt_3 {
          color: yellowgreen;
      }
  </style>
---------------------------------------------
  <h1>
      내용 1
  </h1>
  <p id="txt_1" class="txt_2">
      내용 2
  </p>
  <p class="txt_3">
      내용 3
  </p>
  <p class="txt_3" style="color: aqua;">
      내용 4
  </p>
```

- 내용 1: blue
- 내용 2: pink
- 내용 3: yellowgreen
- 내용 4: aqua
<hr>

- css파일을 만들어 html에 링크를 걸 수 있음
- link rel="stylesheet" href="./css/reset.css"
  - 경로는 css파일이 있는 경로를 작성하면 됨

```
<a href="naver.com>naver</a>
<a href="googlenaver.com>google</a>
```

- a[href^="naver"] {
  color: purple;
  } : a태그의 속성값에서 naver로 시작하는 것만 선택하여 스타일 변경
- a[href$=".com'] {
  color: blue;
  } : a태그의 속성값에서 .com으로 끝나는 것만 선택하여 스타일 변경

### 텍스트 중앙정렬 방법

- text-align: center; /_ 텍스트 가운데 정렬 _/
- line-height: \_\_\_px; /_ 텍스트 중앙 정렬. 해당 요소가 속해있는 영역의 높이 값을 입력 _/

# 21.11.16~21.1119

## 일러스트 실습

# 21.11.22

## 폰트 적용방법

1. @font-face
   : 사용할 폰트를 파일로 갖고있어야 한다. 웹 브라우저에게 서체와 다운받을 위치를 알려줌.
   css, style 태그 안에서 사용한다.

```
<style>
  @font-face {
    font-family: 'trana'
    src: local('trana')
        /* MS에서 만든 폰트, font-face 처음 도입 = IE8이하버전 .eot만 인식 */
         url(폰트경로/trana.eot)
        /* TTF/OTF 압축버전, 다른 글꼴 형식보다 빠르게 로드 = 웹에서 사용할 목적으로 개발*/
         url(폰트경로/trana.woff)
        /* 맥, 윈도우의 가장 일반적인 글꼴. IE8 지원 안됨 | 단점은 용량이 큼 */
         url(폰트경로/trana.ttf)
  }
</style>
```

2. cdn방식 (구글폰트) - 폰트스타일.html, font..css 참고
   1. link : head안에 link를 사용하여 폰트를 사용하는 방식.
      - 원하는 폰트와 사이즈를 선택(+select this style)
      - link탭에서 두번째 link태그를 복사하여 붙여넣기
      - css, style 태그 안에서 적용 (font-family~ 복사)
   2. import: : 스타일태그 내부에 url 적용 후 클래스 등으로 사용 (상단에 모아두기)
      - 원하는 폰트와 사이즈를 선택(+select this style)
      - @import 탭 복사하여 붙여넣기
      - 폰트에 클래스를 부여하여 사용하고싶은 태그에 클래스값 넣기

## 박스모델속성

- display

  - block
  - inline
  - inline-block : 인라인요소의 특성과 블럭요소의 가로세로값을 가질 수 있는 특성을 다 가짐
  - display: block, inline, inline-block 등으로 속성값을 바꿀 수 있음

- tip
  - box-sizing: border-box; : margin, boder값을 계산하여 자동으로 박스넓이를 계산해줌
  - css에서 속성값을 부여할 때에는 최하위 요소에게 적용하는 것이 좋음
  ```
  <style>
    ul li a {
      color: red;
    }
  </style>
  <ul>
    <li><a href="#">사과</a></li>
    <li><a href="#">배</a></li>
  </ul>
  ```

# 21.11.23(화)

## float

- 이미지를 삽화로 삽입하거나 레이아웃을 잡을 때 사용하는 태그.
- float의 조건
  1. 너비(width)값을 갖는다.
  2. float을 설정하면 해제를 해야한다.
- flaot의 해제방법
  1. float을 설정한 요소의 부모요소에 `overflow:hidden;` 적용<br>
     임시방편이므로 잘 사용하지 않는다.
     > 01_float레이아웃.html 참조
  2. ex)3개의 형제요소 중 위의 2개만 float를 적용할 경우 마지막 형제요소에 `clear:both;`를 적용하여 플롯속성을 해제한다.
     > 01_float레이아웃2.html 참조
  3. float을 설정한 요소의 부모요소에 가상요소(:after)를 만들어 `clear:both;`를 적용한다.<br>
     가상요소에는 다음과 같은 속성을 적용한다.
     ```
     #content:after {
         content: ""; /* 빈 내용을 넣음 */
         display: block; /* 만들어진 가상요소는 인라인요소이므로 블록요소로 바꿔준다 */
         clear:both; /* clear 속성 : left, right, both */
     }
     ```
     > 01_float레이아웃3, 4.html 참조
  - 플롯 해제 예외 : 플롯을 해제하는 요소에 이미 플롯요소가 있을 경우에는 따로 후처리를 하지 않아도 된다.

# 21.11.25 (목)

## position

- 요소의 위치를 지정할 수 있는 기준. 위치값을 가질 수 있다.

```
        top
    -----------
    |   ^y    |
    |   |     |
left|  --->x  |rignt
    |   |     |
    -----------
       bottom
```

- +값: 중앙으로 이동함
- -값: 외곽으로 이동함
- top/bottom, left/right 하나씩만 쓸 수 있다
- relative : 자신을 기준으로 이동함 (부모요소에 포지션값을 부여할 때 많이 씀)
  - 조건 1: 위치 기준값을 알아야 함
  - 조건 2: hole이 있다.
  - static과의 차이점: 위치값의 유무
- absolute : 부모요소에 포지션값이 있을 때 자유롭게 이동할 수 있다.
- hole이 없음
- fixed : 브라우저(뷰포트)기준으로 이동하며 스크롤을 이동해도 그 자리에 고정되어있음.
- z-index : 포지션의 레이어같은 태그. 숫자가 높을수록 사용자와 가까이 있다.

## background

- background-image

  - 요소에 이미지삽입
  - 기본값: none. 없음
  - url("경로");

- background-position

  - 요소의 배경이미지 위치
  - 방향: top, bottom, left, right, center
    각 방향의 끝으로 가서 붙음<br>
    : 방향1 방향2
  - 직접지정: px, em, rem 등 <br>
    : x축 y축

- background-repeat

  - 기본값: repeat. 반복
  - no-repeat: 반복없음
  - repeat-x: 수평반복(→)
  - repeat-y: 수직반복(↓)

- background-size

  - 요소의 이미지 크기
  - 기본값: auto. 이미지 원본크기
  - 단위: px, em, rem 등
  - cover: 비율을 유지하며 요소의 더 넓은 부분에 맞춤
  - contain: 비율을 유지하며 요소의 더 짧은 부분에 맞춤
    > 21\_배경이미지.html 참고

- background-attachment
  - 요소의 배경이미지 스크롤 특성
  - scroll: 이미지가 요소를 따라서 같이 스크롤
  - fixed: 이미지가 뷰포트에 고정됨. 스크롤x

# 21.11.26(금)

## prefix

- css표준으로 인정되지 않은 것을 각 브라우저별로 적용하여 사용하기 위해 맨 앞에 붙여 사용하는 것

- -webkit- : safari, chrome, android, ios, webkit 엔진을 사용하는 브라우저
- -moz- : Firefox, 모질라 엔진을 사용하는 브라우저
- -ms- : 인터넷 익스플로러
- -o- : 오페라
  > 22\_그라데이션.html 참조

## 그라디언트

1. 선형 그라디언트 : background: linear-gradient(방향|각도(deg) 시작색,중간색--,끝색)
2. 구형 그라디언트 : background: radial-gradient(circle 속성 부여 시 타원에서 정원이 됨)

## 선택자

```
<div id="wrap">
  <header>
    <h1>웹퍼블리싱 수업</h1>
  </header>
  <p>웹퍼블리싱을 잘 하려면?</p>
  <p>원리이해, 연습코딩</p>
  <ul>
    <li>공부방법
      <ul>
        <li>원리이해</li>
        <li>연습코딩</li>
      </ul>
    </li>
  </ul>
</div>
```

1. 자손선택자(하위선택자)<br>
   -> #wrap ul
2. 자식선택자<br>
   -> #wrap>ul
3. 인접형제선택자(첫번째 형제만 선택)<br>
   -> header+p
4. 형제선택자(모든 형제를 선택)<br>
   -> header~p

```
<ul>
  <li><a href="http://www.daum.net" target="_blank">다음</a></li>
  <li><a href="http://www.naver.com" target="_blank">네이버</a></li>
  <li><a href="http://www.google.co.kr" class="portal portal1">구글</a></li>
  <li><a href="ftp://www.nate.com" class="portal portal1">네이트</a></li>
</ul>
```

1. 일치선택자(=)<br>
   ->a[target="_blank"] : 다음, 네이버
2. 포함선택자(~)<br>
   ->a[class~="portal"] : 구글, 네이트
3. 시작하는 선택자(^)<br>
   ->a[href^="http"] : 다음, 네이버, 구글
4. 끝나는 선택자($)<br>
->a[href$="net"] : 다음
5. 모든(값의 일부도 포함)선택자(_)<br>
   ->a[href_="www"] : 다음, 네이버, 구글, 네이트

```
<style>
  #intro:target {
    background-color: blue;
    color: #fff
  }
</style>

<ul>
  <li><a href="#intro">이용안내</a></li>
</ul>
<section id="intro">
  <h2>이용안내</h2>
  <p>이용안내 내용들~~~~~~~~~~~~~~</p>
</section>
```

#intro 링크가 걸려있는 목록을 선택하면 같은 id값이 있는 곳으로 이동하며 작성한 스타일이 적용된다.

> 25\_가상선택자1.html 참조

```
<form action="#" id="signup">
  <fieldset>
      <legend>개인정보</legend>
      <ul>
          <li>
              <label for="a_name">이름</label>
              <input type="text" id="a_name" required>
          </li>
          <li>
              <label for="a_tel">연락처</label>
              <input type="tel" id="a_tel">
          </li>
      </ul>
  </fieldset>
  <fieldset>
      <legend>객실 형태</legend>
      <ul>
          <li>
              <input type="radio" name="room" id="basic" value="기본2인">
              <label for="basic">기본형(최대2인)</label>
          </li>
          <li>
              <input type="radio" name="room" id="family" value="가족8인">
              <label for="family">가족형(최대8인)</label>
          </li>
      </ul>
  </fieldset>
</form>
```

- signup input:checked+label{color: red;}<br>
  : input이 체크가 되면 라벨을 빨갛게 함 (checked는 radio, checkbox 등 특정 요소에만 적용)
- signup input:not([type=radio]){width:100px; height:20px;}<br>
  : input속성이 radio가 아닌 input요소에 스타일 적용. :hover 등을 붙여쓰기도 함
  > 25\_가상선택자2.html 참조

## transform

- 요소의 변환효과 (이동, 회전, 축소, 확대 등)
- transform: transrale 등으로 씀
- translate
  - px단위
    - translate(x, y) : x, y축으로 이동
    - translateX(x) : x축으로 이동
    - translateY(y) : y축으로 이동
    - scale(x, y): x축, y축으로 크기가 바뀜
    - scale(숫자) : 숫자의 배수만큼 크기가 바뀜
  - deg단위 - rotate(deg) : 정수(오른쪽회전), 음수(왼쪽회전) - skewX(x): x축으로 기울어짐 - skewY(y): y축으로 기울어짐
    > 26\_트랜스폼.html 참조

## transition

- 요소의 전환(시작과 끝)효과를 지정하는 단축속성
- transition: 속성명(property) 지속시간(duration) 타이밍함수(timing-funtion) 대기시간(delay)
  - 속성명(transition-property)
    - 전환효과를 적용할 속성 이름을 지정
    - all: 모든 속성에 적용
    - ex. trasition: width 1s; ->전환효과 발생 시 가로로 1초동안 바뀜
  - 지속시간(transition-duration)
    - 전환효과의 지속시간을 지정
    - 0s : 전환효과 없음
    - 시간 : 지속시간(s)를 지정
    - ex. transition: width .5s; background-color 2s; <br>
      ->가로가 늘어나는 시간은 0.5초, 배경색이 바뀌는 시간은 2초
  - 타이밍함수(transition-timing-funtion)
    - 전환 효과의 타이밍(Easing)함수를 지정
    - ease: 기본값. 느리게-빠르게-느리게
    - linear: 일정하게
    - ease-in: 느리게-빠르게
    - ease-out: 빠르게-느리게
    - ease-in-out: 느리게-빠르게-느리게
  - 대기시간(transition-timing-delay) - 전환효과가 몇 초 뒤에 시작할지 대기시간 지정 - 0s: 기본값. 대기시간 없음 - 시간 : 대기시간(s) 지정
    > 27\_트랜지션.html 참조

## animation

- animation-delay
  - 엘리먼트가 로드되고 나서 언제 애니메이션이 시작될지 지정합니다.
  - 초(s)단위. 음수도 가능.
- animation-direction
  - 애니메이션이 종료되고 다시 처음부터 시작할지 역방향으로 진행할지 지정합니다.
  - normal: 반복할 때마다 애니메이션이 시작 상태로 재설정되고 다시 시작함. 기본값.
  - reverse: 반복할 때마다 애니메이션이 종료 상태로 재설정되고 다시 시작함. 애니메이션 단계가 거꾸로 수행되고 타이밍 기능 또한 반대로 됨. 예를 들어, ease-in 타이밍 기능은 ease-out형태로 변경
  - alternate: 애니메이션은 매 사이클마다 각 주기의 방향을 뒤집으며, 첫 번째 반복은 정방향으로 진행됩니다. (반복)
  - alternate-reverse: 애니메이션은 매 사이클마다 각 주기의 방향을 뒤집으며, 첫 번째 반복은 역방향으로 진행됩니다. (역반복)
- animation-duration
  - 한 싸이클의 애니메이션이 얼마에 걸쳐 일어날지 지정합니다.
  - 단위 : 초(s), 밀리초(ms). 음수X
- animation-iteration-count (en-US)
  - 애니메이션이 몇 번 반복될지 지정합니다.
  - infinite:무한 반복
  - 단위: 정수, 소수
- animation-name (en-US)
  - 이 애니메이션의 중간 상태를 지정합니다. 중간 상태는 @keyframes 규칙을 이용하여 기술합니다.
- animation-play-state (en-US)
  - 애니메이션을 멈추거나 다시 시작할 수 있습니다.
- animation-timing-function (en-US)
  - 중간 상태들의 전환을 어떤 시간간격으로 진행할지 지정합니다.
- animation-fill-mode
  - 애니메이션이 시작되기 전이나 끝나고 난 후 어떤 값이 적용될지 지정합니다.
- @keyframes : 애니메이션 중간중간의 특정 지점들을 거칠 수 있는 키프레임들을 설정

```
<style>
  #box2 {
    margin: 50px;
    background-color: purple;
    animation: ani 1.5s infinite alternate;
  }
  @keyframes ani {
    /* 0%{}
    25%{}
    50%{}
    75%{}
    100%{} */
    form {
        transform: rotate(0deg);
    }
    to {
        background-color: orange;
        transform: rotate(45deg);
    }
  }
</style>

@keyframes 이름 {
  from {
    시작할 애니메이션 설정들
  }
  to {
    끝날 애니메이션 설정들
  }
}
```

# 21.12.27(월)

## flex

### container : 아이템을 포함하고 있는 박스. (부모요소)

- display : flex 속성을 부여하는 것
- flex-direction : 아이템의 정렬방향 지정. 아이템의 순서가 바뀌지는 않는다
  - 수평 중심축
    - row : 기본값. 왼쪽에서 오른쪽으로 배치됨(→)
    - row-reverse : 오른쪽에서 왼쪽으로 배치됨(←)
  - 수직 중심축
    - columm : 위에서 아래로 배치됨(↓)
    - column-reverse : 아래에서 위로 배치됨(↑)
- flex-wrap
  - no-wrap : 기본값. 컨테이너의 크기가 좁아져도 아이템들은 떨어지지 않는다.
  - wrap : 컨테이너의 너비값에 따라 아이템들이 떨어짐(줄바꿈)
- flex-flow : flex-direction flex-wrap
- justify-content : 아이템의 중심축 정렬 방법. direction에서 지정한 방향에 따라 바뀐다
  - flex-start : 기본값.
  - center : 아이템을 중심축 중앙으로 배치
  - flex-end : 아이템들의 순서는 바꾸지 않고 위치만 끝으로 배치
  - space-round : 아이템들의 좌우 마진값이 동일하게 배치됨
  - space-between : 양 끝 아이템들이 컨테이너에 딱 붙고 가운데 아이템들의 간격이 동일하게 배치됨
  - space-evenly : 아이템들의 간격이 동일하게 배치됨
- align-items : 아이템의 교차축 정렬 방법
  - flex-start : 기본값.
  - center : 아이템을 교차축 중앙으로 배치
  - flex-end : 아이템을 교차축 끝으로 배치
  - baseline : 아이템들의 텍스트가 일직선으로 보여지게 배치
- align-content : 아이템이 2줄 이상인 경우 교차축 정렬 방법
  - justify-content의 속성을 그대로 사용

### item : 컨테이너에 포함되어 있는 박스 (자식요소)

- order : 아이템들의 정렬 순서
  - 0 : 기본값
  - 정수 : 숫자가 작을 수록 먼저 표시됨
- flex-grow : 컨테이너의 너비가 넓어짐에 따라 아이템의 넓이 비율을 지정
  - 0 : 기본값
  - 숫자 : 지정 숫자의 비율만큼 늘어남. 소수점 가능
- flex-shrink : 컨테이너의 너비가 좁아짐에 따라 아이템의 넓이 비율을 지정
  - 0 : 기본값. 최소 아이템의 너비 유지
  - 숫자 : 지정 숫자의 비율만큼 줄어듬. 소수점 가능
- flex-basis : 컨테이너의 비율에 따라 지정한 값 만큼 아이템이 크기를 가짐
  - auto : 기본값
  - px, em, rem, % 등 사용
- 한줄 사용법 => flex : grow shrink basis
- align-self : 아이템 하나만을 이동할 때 사용
  - auto, flex-start, center, flex-end, baseline

# 21.11.29(월) - JavaScript

## 표기법

1. dash-case(kebab-case) : '-'로 각 단어를 구분. HTML, CSS
2. snake*case : '*'로 각 단어를 구분. HTML, CSS
3. camelCase : 첫 단어만 소문자이고 그 뒤의 단어는 대문자로 표기하여 단어를 구분. JS
4. PascalCase : 각 단어를 대문자를 사용하여 구분. JS

## html에서의 연결 방법

```
<head>
  <script scr="js파일 경로"></script>
</head>
```

## 변수

: 변하는 데이터(값)을 저장할 수 있는 메모리 공간. 변수에는 데이터가 한개만 저장됨.
새로운 `데이터`가 들어오면 기존에 있던 데이터는 지워진다.

## 데이터의 종류

1. string(문자데이터)

- 큰따옴표, 작은따옴표, 백틱(`)을 사용함

```
let myName = "KimAeli";
let email = "kal_1991@naver.com";
const massage = `My name is ${myName};
console.log(massage); -> My name is KimAeli
const massage2 = "나는 ${30+1}살 입니다";
console.log(massage2) -> 나는 31살 입니다

console.log(myName); -> KimAeli
console.log(email); -> kal_1991@naver.com
```

2. Number

- 정수 및 부동소수점 숫자를 나타냄

```
let number= = 123;
let opacity = 1.57;

console.log(number); -> 123
console.log(opacity); -> 1.57

console.log(1 + 2); // 더하기
console.log(10 - 3); // 빼기
console.log(1 * 2); // 곱하기
console.log(6 / 2); // 나누기
console.log(8 % 6); // 나머지
```

3. Boolean (불린데이터)

- true, false 두 가지 값만 가진 논리데이터
- true : false외의 모든 값
- false : 숫자0, 빈 문자열, null, undefined, NaN

```
let checked = true; // true = 1 의 값을 가짐
let isShow = false; // false = 0 의 값을 가짐

console.log(checked); -> true
console.log(isShow); -> false

let result = checked == 1; -> 변수 checked에 할당된 값과 숫자1이 같은지(==)를 정의하는 메소드
  console.log(result); -> checked가 1의 값을 갖고 있으므로 true가 출력됨
```

4. Undefined

- 값이 할당되지 않은 상태. 0의 값을 가진다

```
let undef;
let obj = {abc : 123};

console.log(undef); -> undefined
console.log(obj.abc); -> 123 (obj 안에 있는 abc의 데이터를 읽음)
console.log(obj.xyz); -> undefined
```

5. Null

- 어떤 값이 의도적으로 비어있음. 초기 설정값으로 많이 쓰임

```
let empty = null;
console.log(empty); -> null
```

6. Object (객체 데이터)

- 여러 데이터를 key:value 형태로 저장. { }

```
let user = {
  name : 'kimaeli',
  age : 30,
  isValid : true // isValid(key) : true(value)
};

console.log(user.name) -> kimaeli
console.log(user.name) -> 30
console.log(user.name) -> true
```

7. Array (배열데이터)

- 여러 데이터를 순차적으로 저장. [ ]

```
let fruits = ['Apple', 'Banana', 'Cherry'];

console.log(fruits[0]) -> Apple
console.log(fruits[1]) -> Banana
console.log(fruits[2]) -> Cherry
```

## js 기초문법

1. 기본 작성방법

   1. 변수선언 <br>

   ```
   const = "1" // 변하지 않는 값
   let = "1" // 변할 수 있는 값
   ```

   2. 값 할당

   ```
   box = "100"; ->string
   box = 100; ->number
   ```

   3. 사용

   ```
   console.log(typeof box); -> 값 할당에서 top-down 형식으로 보면 숫자 100이 할당되므로 콘솔에 number이 출력된다. (typeof : 변수의  데이터 종류를 지칭)
   ```

   4. 선언 가능한 변수명
      - 문자와 숫자, $, \_만 사용 가능
      - 첫 글자는 숫자를 쓸 수 없음
      - 예약어(class, window 등) 사용 불가능
      - 상수는 대문자로 선언 (const MAX-SIZE=99;)
      - 읽기 쉽고 이해하기 편하게 선언
        <br>

2. 문자열 결합 = +

```
var num1, num2;
num1 = 10;
num2 = 20;
let result = num1 + num2;
document.write("두 인자의 합은 : " + result + "<br><br>");
 -> 두 인자의 합은 : 30  (br은 띄어쓰기로 해석됨)
```

- document는 html에서의 body를 뜻한다.
  <br>

3. `<body>`영역에 출력하기

```
document.write("<h1>javascript</h1>")
-> body 부분에 `<h1>javascript</h1>`이 작성되어 결과적으로는 h1크기의 javascript가 출력된다.
```

  <br>

4. 데이터 형 변환

- String() : 문자형으로 변환
  ```
  console.log(
    String(3),         // "3"
    String(true),      // "true"
    String(null),      // "null"
    String(undefined)  // "undefined"
  )
  ```
- Number() : 숫자형으로 변환

  ```
  let com3 = "30";
  let com4 = "40";
  // 변수 재정의 -> string을 number로 바꿈
  com3 = Number(com3);
  com4 = Number(com4);
  let result5 = com3 + com4;
  document.write("데이터형 변환 : " + result5); -> 데이터형 변환 : 70

  console.log(
    Number("true")    // NaN
    Number(true)      // 1
    Number(flase)     // 0
    Number(0)         // false
    Number('0')       // true
    Number('')        // false
    Number(' ')       // true
    Number(null)      // 0
    Number(undefined) // NaN
  ```

- Boolean() : 불린형으로 변환
  ```
  console.log(
    Boolean(1),             // true
    Boolean("javascript"),  // true
    Boolean(0),             // false
    Boolean(""),            // false
    Boolean(null),          // false
    Boolean(undefined),     // false
    Boolean(NaN)            // false
  )
  ```

5. 자동 형변환 : 문자열로 표현된 숫자는 나누기, 곱하기가 가능하도록 자동으로 형변환이 되는 것

```
let com3 = "80";
let com4 = "40";

let result = com3 / com4;
console.log(result); -> 20
```

  <br>

6. 동적 변수

```
alert("입력하신 정보는 사용 후 파기됩니다.");
var num = 100;
var name = prompt("당신의 이름은 무엇입니까?");
var tall = prompt("당신의 키는 몇입니까?");
var weight = prompt("당신의 몸무게는 몇입니까?");
var result = (tall-num)*0.9;

document.write("접속자의 이름은 " + name + "입니다.<br>");
document.write("계산식에 사용된 키는 " + tall + "cm입니다.<br>");
document.write("계산식에 사용된 몸무게는 " + weight + "kg입니다.<br>");
document.write("적정 몸무게는 " + result + "kg입니다.");
```

6. 기본제공 팝업창
   1. alert
   - 경고창을 띄우는 메소드
   - window의 메소드이며 생략가능
   2. prompt
   - 값을 입력받기 위해 사용하는 메소드(입력받은 값은 무조건 `문자형`이 됨)
   - prompt(팝업메세지, text입력창에 기본값으로 입력되는 문자)
   - 취소버튼을 누르면 값은 null이 됨
   ```
   const name = prompt ("나이입력", "30")
   ->나이입력 메세지의 창이 뜨며 텍스트박스에 30일 미리 적혀있음
   ```
   3. confirm
   - 사용자에게 확인을 받기위한 용도
   ```
   const isAudult = confirm ("당신은성인입니까?"); // 팝업창으로 문구가 뜨며 취소, 확인버튼 생성
   console.log(isAudult); // 취소:false, 확인:true
   ```
   4. 단점
      1. 스크립트 일시정지
      2. 스타일링 X

# 21.11.30(화)

1. 산술연산자

```
var num1 = 10;
var num2 = 2;
result = num1 + num2;
      document.write("두 수의 합은? " + result + "입니다.<br>");
      result = num1 - num2;
      document.write("두 수의 차는? " + result + "입니다.<br>");
      result = num1 * num2;
      document.write("두 수의 곱은? " + result + "입니다.<br>");
      result = num1 ** num2;
      document.write("두 수의 거듭제곱은? " + result + "입니다.<br>");
      result = num1 / num2;
      document.write("두 수의 나눈값은? " + result + "입니다.<br>");
// % : 나머지값을 구할 때 씀
result = num1%num3;
document.write("두 수의 나머지값은? " + result + "입니다.<br>");
```

2. 복합대입연산자 : 기존 Data에 변수값 추가. 변수명을 한번만 사용하여 Data를 누적시키기 위해 사용

```
let num1 = 10;
let num2 = 3;
let result = null;

num1 += num2; // num1 = num1 + num2; -> 13
num1 -= num2; // num1 = num1 - num2; -> 10
num1 *= num2; // num1 = num1 * num2; -> 30
num1 %= num2; // num1 = num1 % num2; -> 1
```

3. 증가연산자, 감소연산자

```
let num1 = 10;
let num2 = 20;
let result = null;

num1--; // 10-1 = 9
num1++; // 9+1 = 10

// 1. 증감연산자 전위(前位) : 초기값을 처음에 사용하고 싶을 때 사용
result = num2++;
document.write("증감연산자 전위(前位) : " + result + "<br>");
// 증감연산자 : 20 (result)
document.write("증감연산자 전위(前位) : " + num2 + "<br>");
// 증감연산자 : 21 (num2)

// 1. 증감연산자 후위(後位) : 연산이 바로 적용
result = ++num2;
document.write("증감연산자 후위(後位) : " + result + "<br>"); // result:22, num2:22
document.write("증감연산자 후위(後位) : " + num2 + "<br>"); // result:22, num2:22
```

4. 비교연산자

- <, > : 크다, 작다
- <=, >= : 크거나 같다, 크거나 작다
- == : 데이터형은 상관없이 같다(동등연산자)
- === : 데이터형까지 같다(일치연산자)
- != : 데이터형은 상관없이 다르다
- !== : 데이터형까지 다르다

```
let a = 10;
let b = 20;
let c = 10;
let d = "20";
let result = null;

// 비교연산자
result = a > b; // false
result = a < b; // true
result = a >= c; // true
// 데이터형과 상관없이 같은 숫자일 경우 true 반환
result = b == d; // true
// 데이터형까지 일치해야 true 반환
result = b === d; // false
// not. 데이터형과 상관없이 같은 숫자일 경우 false 반환
result = b != d; // false
// not. 데이터형까지 일치해야 true 반환
result = b !== d; // true
```

5. 논리연산자

- || : 논리합. 하나라도 true면 true (or). 첫 true를 발견하면 평가를 멈춤
- && : 논리곱. 하나라도 false면 false (and). 첫 falsef를 발견하면 평가를 멈춤
- ! : 논리부정. true->false, flase->true로 반환(not)
- 우선순위 : &&(and) > ||(or)

```
var a,b,c,d,result;
a = 10;
b = 20;
c = 0;
d = "javascript"
result = null;

result = b > a || b <= c || a > c; // true
result = a <= b && b >= c && c < a // true
result = !(a > b) // true

<!-- 우선순위 -->
//남자이고, 이름이 Mike 이거나 성인이면 통과

const gender = 'F';
const name = "Jane";
const isAdult = true;

if (gender === "M" && name === "Mike" || isAudult){
  console.log('통과');
} else {
  console.log('돌아가');
}
-> gender(f) && name(f) || isAudult(t) = true

if (gender === "M" && (name === "Mike" || isAudult)){
  console.log('통과');
} else {
  console.log('돌아가');
}
-> gender(f) && true(name(f) || isAudult(t)) = false


// 삼항조건연산자
// 형식
  : 조건식?js코드(조건식값이 true일 경우 실행):js코드2(조건식값이 false일 경우 실행);

var int = 10;
var int2 = 20;
var tf = int>int2?'true일 경우 실행':'false일 경우 실행';
document.write(tf + "<br><br>")

// 삼향조건연산자 실습
var cf = confirm("자바스크립트 어렵나요?");
var rf = cf?'Yes':'No';
document.write("자바스크립트 어렵나요?" + rf);
```

# 21.12.01(수)

## 단일if문

```
if(조건식=true, false -> true일 경우만 실행){
    실행문;
}
```

- 점수를 입력받아 60점 이상이면 합격, 아니면 불합격 체크

```
var score = Number(prompt("당신의 시험점수는 몇점입니까?"));
if(score >= 60) {
    alert("필기합격");
}if(score < 60) {
    document.write("필기불합격");
}
```

- 홀수, 짝수 구분

```
var num = prompt("숫자를 입력하세요");
num = Number(num);
if (num%2 == 0){
    alert("짝수입니다.");
} if (num%2 == 1){
    alert("홀수입니다.");
}
```

---

## if~else문

```
if(조건식=true, false -> true일 경우만 실행){
    (true 실행문);
}else {
    (false 실행문);
}
```

- if~else문을 이용한 홀수, 짝수 구분

```
var num = prompt("숫자를 입력하세요");
num = Number(num);
if(num%2==0){
    alert("짝수")
}else{
    alert("홀수")
}
```

- false가 되는 경우 : 0, null, undefined, ""

```
if(0){
    alert("true일 때 실행")
}else{
    alert("false일 때 실행")
}
```

- 19세 이상 45세 미만이면(경고창)"서류심사통과", 아니면 (경고창)"서류심사보류"

```
var age = Number(prompt("나이를 입력하세요"));

if(age>=19 && age<45) {
    alert("서류심사통과");
} else {
    alert("서류심사보류");
}
```

- ID가 입력되면 (브라우저)"???님 반갑습니다", 아니면 (경고창)"ID를 입력하세요"

```
var ID = prompt("아이디를 입력하세요");

if(ID){
    document.write(ID + "님 반갑습니다");
} else {
    alert("ID를 입력하세요");
    location.reload(); //location 객체 : 브라우저 관련 속성과 메서드 제공 ex)reload() = 새로고침
}
```

- 국어, 영어, 수학점수를 입력받아 만약 3과목 평균이 80점이상이고, 각 과목의 점수가 60점 이상이면
  (경고창)"시험통과", 아니면 (경고창)"재시험"
- 모든 결과값은 함수에 넣어 사용하는것이 좋다. (score, result 참고)

```
var korean = Number(prompt("국어점수를 입력하세요"));
var english = Number(prompt("영어점수를 입력하세요"));
var math = Number(prompt("수학점수를 입력하세요"));

var score = (korean+english+math)/3;
var result = score>=80 && korean>=60 && english>=60 && math>=60 ;

if(result) {
    alert("시험통과");
}else {
    alert("재시험");
}
```

---

## else if문

- 90점 이상(A학점), 80점 이상(B학점), 70점 이상(C학점), 60점 이상(D학점), 60점 미만(재수강)

```
var grade = Number(prompt("점수입력", 0));
if(grade >= 90){
    alert('A학점');
}else if(grade >= 80){
    alert('B학점');
}else if(grade >=70){
    alert('C학점');
}else if(grade >=60){
    alert('D학점');
}else{
    alert('재수강');
    location.reload();
}
```

---

## 중첩 if문

- ID가 맞으면 PW를 입력할 수 있는 구조

```
var dbId = 'ezen';
var dbPw = '1234';

var id = prompt('ID 입력', 'ezen');
if(dbId == id) {
    var pw = prompt('pw 입력', '1234');
    if(pw=='1234') {
        alert('로그인 성공');
    }else{
        alert('로그인실패');
    }
}else {
    alert('ID가 맞지 않음');
}
```

- 나이와 출생연도를 입력받아<br>
  40세 이상, 출생연도와 나이가 짝수일 경우 (브라우저) "건강검진 대상자"<br>
  아닐 경우 "건강검진 대상자가 아닙니다."

```
var age = Number(prompt("나이입력",30));
var year = Number(prompt("출생연도",1991));
var result = age>=40 && (year%2)==0 && (age%2)==0
if(result){
    document.write("건강검진 대상자");
}if(result==false){
    document.write("건강검진 대상자가 아닙니다");
}
```

# 21.12.02

## 선택문 : switch~case문

- 형식

```
switch (조건문) {
  case n: //조건값 일치 여부
      실행문;
      berak; // 조건이 만족된 후 마치기 위해 꼭 사용(쓰지않으면 만족한 case 아래의 코드 모두 실행)
  default; // 위 조건값이 모두 false일 경우
      실행문;
```

1.  입력받은 수가 홀수인지 짝수인지 판별

```
let num = Number(prompt("숫자를 입력하세요.", "정수입력"));

switch(num%2){
    case 0:
        alert("짝수");
        break;
    case 1:
        alert("홀수");
        break;
    default:
        alert("숫자가 아닙니다.");
}
```

2. 포털사이트 접속하기

```
let site = prompt('구글, 네이버, 다음 중 하나 입력','구글');
let url = "";

switch(site){
    case "구글":
        url = "http://google.co.kr"; // 문자열 변수 할당
        break;
    case "네이버":
        url = "http://naver.com";
        break;
    case "다음":
        url = "http://daum.net";
        break;
    default:
        alert('다시 입력하세요');
        location.reload();
}
console.log('site');
if(url){
    location.href = url; // 해당 사이트 주소로 이동
}
```

3. 지역명 '서울', '경기도', '부산' 중 하나를 입력받아, 서울일 경우 지역번호 02, 경기도 031, 부산 051을 데이터로 사용<br>
   그 외 데이터 입력시 (경고창)"다시 입력하세요" 출력

```
let area = prompt("지역명을 입력하세요");
let tel = "";

switch(area){
    case '서울':
        tel = '02';
        break;
    case '경기도':
        tel = '031';
        break;
    case '부산':
        tel = '051';
        break;
    default:
        alert('다시 입력하세요');
}
console.log(area);
document.write(area + "의 지역번호는 " + tel + "입니다." );
```

4. 과일을 입력하면 가격을 콘솔창에 출력하기.

```
// 사과 : 100원
// 바나나 : 200원
// 키위 : 300원
// 멜론 : 500원
// 수박 : 500원
// 사고싶은 과일을 물어보고 가격 알려주기

let fruit = prompt('무슨 과일을 사고 싶으세요?');

switch(fruit){
  case '사과':
    console.log('100원입니다.');
    break;
  case '바나나':
    console.log('200원입니다.');
    break;
  case '키위':
    console.log('300원입니다.');
    break;
  case '멜론':
  case '수박':
    console.log('500원입니다.');
    break;
  default:
    console.log('그 과일은 없습니다.');
}
```

<hr>

## 반복문 : while문(거의 안씀)

- 기본구조

```
// 1. 초기값
var i = 1;
// 2. 조건식
while(i<=5){
    document.write("안녕하세요" + i + "<br>")
    // 3. 증감식
    i++;
}
```

## 반복문 : do~while (적어도 한번은 실행함)

```
// 1. 초기값
let = 0;

// 2. 실행문
do{
  console.log(i);
  // 3. 증감식
  i++
  // 4. 조건식
} while (i<10)
```

## 반복문: for문(연속된 숫자)

### for문

- 기본구조

```
for(초기값;조건식;증감식){
    실행문;
}
// 조건식은 false가 되면 멈춘다
```

1. (초기값)0, (브라우저)for문 반복 횟수 5번 나오도록 코딩

```
for(let i=0;i<=4;i++){
    document.write('for문 반복 횟수: ' + i + '번<br>');
```

2. `<h1>~</h6>` 순으로 (브라우저) 각 태그별로 문자열 '웹퍼블리싱'이 나오도록 코딩

```
for(var i=1;i<=6;i++){
    document.write("<h" + i + ">" + "웹퍼블리싱" + "</h" + i + ">");
```

2. `<h6>~<h1>` 순으로 (브라우저) 각 태그별로 문자열 '웹퍼블리싱'이 나오도록 코딩

```
for(var i=6;i>=1;i--){
    document.write("<h" + i + ">" + "웹퍼블리싱" + "</h" + i + ">");
```

3. 단수를 입력받아, 입력받은 단만 출력

```
var dan, i ,result;
dan = Number(prompt("단수를 입력하세요"));
document.write("<h1>" + dan + "단</h1>")

for(i=1;i<=9;i++){
    result = dan*i;
    document.write(dan + "x" + i + "=" + result + "<br>");
}
```

### 이중for문

- 2단~9단 구구단 출력

```
var i, j;
for(i=2;i<=9;i++){
    document.write("<h1>" + i + "단</h1>");
    for(j=1;j<=9;j++){
        document.write(i + "x" + j + "=" + i*j + "<br>");
    }
}
```

<hr>

## 반복문을 빠져나오는 기능

1. break : 코드실행을 멈추고 해당 반복문을 빠져나옴

```
<!-- 취소를 누르면 확인창이 꺼지는 코드 -->
while(true){
  let answer = confirm('계속 확인할까요?');
  if(!answer){
  break;
  }
}
```

2. continue : 코드실행을 멈춘 후 다음 반복문을 진행함

```
<!-- 짝수를 출력하는 코드 -->
for(let i=0; i<10; i++){
  if(i%2){
   continue;
  }
  console.log(i)
}
```

# 21.12.03(금)

## 익명함수 : 함수명 대신 변수명에 함수 코드를 저장하는 구현 방식

```
var count = 0;
var noName = function(){
                count++;
                document.write("익명함수 : " + count + "<br>");
            } */
noName(); // 익명함수 호출 : 반드시 익명함수 아래에서 호출(top-down)
```

## 선언함수

```
var count = 0;
function pub(){
    count++;
    document.write("선언적함수 : " + count + "<br>");
}
pub(); // 선언함수호출 : 호출 위치 상관없음
```

## 함수 연습

1. 익명함수 연습

- 숫자를 입력받아 (경고창)입력받은 숫자에 +10 결괏값을 반환하는 함수 제작

```
var plsuTen = function(){
  var num = Number(prompt("숫자를 입력하세요));
  alert(num+10);
}
plusTen();
```

2. 선언함수 연습

- 함수명 print. (경고창) "자바스크립트 선언적함수 호출" 함수 제작

```
function print(){
  alert("자바스크립트 선언적함수 호출");
}
print();
```

3. 버튼을 누를때마다 배열데이터에 입력한 색상대로 배경색을 변경

```
<script>
    // 1-a. 배열선언
    var color = [];
    // 1-b. 배열값 할당
    color = ["red", "green", "blue", "black", "pink", "cyan"];

    /* 2. 전역변수 숫자형 초기값 세팅 */
    var i = 0;
    function chColor(){
        // 2-a. 적용할 DOM객체 선택
        var selectId = document.getElementById("bgc"); // ID값을 찾는 메소드
        // 2-b. 사용할 배열값 할당
        selectId.style.backgroundColor = color[i];
        // = #bgc {background: 배열데이터 color의 i번째}
        i++;
        console.log("배열length 값 : " + color.length);
        //배열데이터의 길이(개수)를 찾는 속성
        if(i>=color.length){
            i=0;
        }
    }
</script>
<body>
    <div id="bgc">
        <!-- 3- 인라인이벤트 호출 -->
        <button onclick="chColor();">배경색 바꾸기</button>
    </div>
</body>
```

## 함수의 매개변수, 인수

- 매개변수가 있는 선언적 함수 형식
  - 매개변수 = 함수 호출 시 넘겨주는 데이터를 받는 변수

```
function ezFn(name, area){
    document.write("저는" + name + "입니다.<br>");
    document.write("사는 곳은 " + area + "입니다.");
}
ezFn("narin", "동대문구");
```

# 21.12.06(월)

## 수학 객체 : Math

- Math.max : 최대값을 구하는 메소드

```
var maxNum = Math.max(10,8,21,40);
document.write("최댓값 : " + maxNum); // -> 40
```

```
var minNum = Math.min(10,8,21,40); /
document.write("최소값 : " + minNum); /-> 8
```

- Math.round : 소수점 이하 반올림

```
var num = 3.286592;
var roundNum = Math.round(num);
document.write("반올림 : " + roundNum); // -> 3
```

- Math.ceil : 소수점 이하 올림

```
var num = 3.286592;
var ceilNum = Math.ceil(num); //4
document.write("올림 : " + ceilNum);
```

- Math.floor : 소수점 이하 버림

```
var num = 3.286592;
var floorNum = Math.floor(num); //3
document.write("내림 : " + floorNum + "<br>");
```

- Math.random : 0~1사이의 무작위 숫자(난수)를 발생시켜 리턴

```
var randomNum = Math.random();
document.write("랜덤 : " + randomNum + "<br>");
```

- 실습) 이미지 랜덤으로 바꾸기 (이미지 파일명이 img1 ~ img7 까지 있을 때)

```
var imgNum = 0;
// (0~1의 난수*7)+1 의 값에서 소수점을 버린 숫자(즉, 1~7의 숫자가 나옴)
imgNum = Math.floor(Math.random()*7)+1;

// 브라우저 출력
document.write("<img src=./image/img" + imgNum + ".jpg alt='랜덤이미지' width='300' height='300'>");
```

## 날짜객체

```
var today = new Date();

var thisMonth = today.getMonth()+1; // 月 :  0(1월) ~ 11(12월) 셋팅
var thisDate = today.getDate() // 日
var thisDay = today.getDay(); // 요일 : 일요일(0) ~ 토요일(6)
var thisHour = today.getHours(); // 시간
var thisMin = today.getMinutes(); // 분
var thisSec = today.getSeconds(); // 초
var thisMillSec = today.getMilliseconds(); //밀리세컨(1/1000초)
var thisTime = today.getTime(); // 1970년 1월 1일부터 밀리세컨으로 경과된 시간

// switch문을 이용하여 해당 요일 나오게 하기
switch(thisDay){
    case 0 : thisDay = "일요일";
        break;
    case 1 : thisDay = "월요일";
        break;
    case 2 : thisDay = "화요일";
        break;
    case 3 : thisDay = "수요일";
        break;
    case 4 : thisDay = "목요일";
        break;
    case 5 : thisDay = "금요일";
        break;
    case 6 : thisDay = "토요일";
        break;
};
```

## 문자열 객체 메소드/속성

`var str = "Hello Thank you good luck to you";` (문자열은 0부터 시작)

- charAt() : 문자열에서 인덱스 번호에 해당하는 문자를 반환

```
document.write(str.charAt(10)); // -> k
```

- indexOf() : 문자열에서 왼쪽부터 찾을 문자와 제일 먼저 일치하는 문자의 인덱스번호를 반환
- lastIndexOf() : 문자열에서 오른쪽부터 찾을 문자와 제일 먼저 일치하는 문자의 인덱스번호를 반환

```
document.write(str.indexOf("you")); // -> 12
document.write(str.lastIndexOf("you")); // -> 29
```

- match() : 문자열에서 왼쪽부터 찾을 문자와 제일 먼저 일치하는 문자를 찾아 반환. 없으면 -1 반환.

```
document.write(str.match("luck")) // luck
```

- replace() : 문자열에서 왼쪽부터 바꿀 문자와 일치하는 문자를 찾아 제일 먼저 찾은 문자를 새 문자로 치환

```
document.write(str.replace("you", "me")); // 첫번째 you->me로 변경
```

- search() : 문자열에서 왼쪽부터 찾을 문자와 제일 먼저 찾는 문자의 인덱스번호를 반환

```
document.write(str.search("you")); // 12
```

- slice() : 문자열에서 문자를 자른 후 남는 문자를 반환

```
document.write(str.slice(3,7)); // lo T(인덱스번호 3번부터~ 7이전까지 반환)
```

- substr() : 문자열에서 지정한 문자 갯수만큼 문자열 반환

```
document.write(str.substr(21,4)); // luck(인덱스번호 21부터 4자 반환)
```

- toLowerCase() : 문자열에서 영문 대문자를 소문자로 치환
- toUpperCase() : 문자열에서 영문 소문자를 대문자로 치환

```
document.write(str.toLowerCase()); // hello thank you good luck to you
document.write(str.toUpperCase()); // HELLO THANK YOU GOOD LUCK TO YOU
```

- length : 문자열 갯수 반환

```
document.write(str.length); // 32
```

- trim() : 문자의 앞 또는 뒤에 공백 문자열 삭제

```
document.write(str.trim());
```

### 문자열객체 실습

1. (프롬프트)비밀번호를 입력받아<br>
   (경고창)8자 미만이면 "8자 이상으로 다시 입력",<br>
   (브라우저)8자 이상이면 "비밀번호 ???자 입력되었습니다." \*/

```
var pw = prompt("비밀번호를 입력하세요.")
pwLength = pw.length

if(pwLength<8) {
    alert("8자 이상으로 다시 입력");
    location.reload();
}else{
    document.write("비밀번호" + pwLength + "자 입력되었습니다." );
}
```

2. 실습3. (프롬프트)영문 이름 입력받아 대문자 입력시 소문자로 치환하기
   (브라우저)입력받은 이름은 ??? 입니다.<br>
   (프롬프트)전화번호 입력받아, 끝 네지리를 "\***\*"로 치환 = substr(), replace()<br>
   (브라우저)전화번호는 `0101234\*\***` 입니다

```
var name = prompt("이름을 입력하세요(대문자)");
var lower = name.toLowerCase();
document.write("입력받은 이름은" + name "입니다.<br>");

var tel = prompt("전화번호를 입력하세요","01012345678");
var telStr = tel.replce(tel.substr(7, 4),"****");
document.write("전화번호는" + telStr + "입니다.");
```

## 이벤트

- body태그 안에 있는 항목을 head태그 안의 자바스크립트로 효과를 줄 경우 아래 코드를 우선 입력해야 한다.<br>
- `window.onload` : document가 다 읽히고 난 후 스크립트 실행. 익명함수에서만 실행됨.

```
window.onload = function(){
  var btn = document.getElementById("btn1");
  // 이벤트 실행
  btn.onclick = test; // <-test()를 쓰면 바로 실행되기 때문에 이벤트리스너명을 쓸 때는 괄호를 뺀다
}

// 이벤트 리스너
function test(){
    alert('경고창');
}

<body>
  <button id="btn1">버튼</button>
</body>
```

## 이벤트 DOM

- 버튼을 클릭하면 글씨가 파란색으로 바뀌고 내용이 추가되게 하기

```
window.onload = function(){
// 1. DOM객체 변수에 할당.
var button = document.getElementById("button");
var heading = document.getElementById("header");

// 2. 이벤트 리스너(선언적 함수) 작성.
function whenClick1(){
    heading.style.color = "blue"; // #header의 글씨 색깔이 파란색으로 바뀜
}
function whenClick2(){
    heading.innerHTML = "JS Event 방식 + 새로 바뀌는 글자"; // #header의 내용을 바꿈
}

// 3. 이벤트 DOM에 이벤트를 리스너 연결
button.addEventListener('click', whenClick1);
button.addEventListener('click', whenClick2);
}

<body>
    <button id="button">DOM2이벤트</button>
    <h3 id="header">JS Event 방식</h3>
</body>
```

## 쿼리셀렉터

1. 인라인 이벤트(자체메소드) 호출

- 글씨를 클릭하면 (경고창)"버튼클릭"

```
<ul>
      <li><a href="#" onclick="alert('버튼클릭');">RED</a></li>
      <li><a href="#" onclick="alert('버튼클릭');">GREEN</a></li>
      <li><a href="#" onclick="alert('버튼클릭');">BLUE</a></li>
  </ul>
```

2. 인라인 이벤트(이벤트리스너) 호출

- 글씨를 클릭하면 배경색이 바뀜

```
<ul>
 <li><a href="#" onclick="changeBg('red')">RED</a></li>
 <li><a href="#" onclick="changeBg('green')">GREEN</a></li>
 <li><a href="#" onclick="changeBg('blue')">BLUE</a></li>
</ul>
<div id="result">배경색출력</div>

<!-- 스크립트를 body태그 안에 작성 시 -->
<script>
 function changeBg(chColor){
     var result = document.querySelector("#result");
     result.style.backgroundColor = chColor;
     }
</script>

<!-- 스크립트를 head태그 안에 작성 시 -->
<script>
 window.onload = changeBg;
   var changeBg = function (chColor){
       var result = document.querySelector("#result");
       result.style.backgroundColor = chColor;
   }
</script>
```

# jQuery

## 기본셋팅

```
<!-- 제이쿼리 코어파일 추가 -->
  <script src="./js/jquery-1.12.4.min.js"></script>
  <script src="./js/jquery-3.3.1.min.js"></script>
  <script src="./js/jquery-3.4.1.min.js"></script>

<!-- 제이쿼리 코어 CDN 파일 추가 -->
  <script src="http://code.jquery.com/jquery-1.12.4.min.js"></script>
  <script src="http://code.jquery.com/jquery-1.3.1.min.js"></script>
  <script src="http://code.jquery.com/jquery-1.4.1.min.js"></script>

<script>
  $(document).ready(function(){
    alert('준비');
  });
</script>
```

## 선택자

1. 선택자

```
$(document).ready(function(){
  $('*')        // 1. 전체 선택자
  $('h3')       // 2. 요소명 선택자
  $('.author')  // 3. 클래스 선택자
  $('#txt1')    // 4. 아이디 선택자
  $('ul>li') or $('ul').children()    // 5. 자식 선택자
  $('li').parent()  // 6. 부모 선택자
  $('ul').siblings()  // 7. 형제 선택자
});
```
