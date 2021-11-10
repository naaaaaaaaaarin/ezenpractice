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
-https://entitycode.com/
-특수문자를 사용할 수 있는 코드 모음


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
태그 | 뜻 | 예
:--:|:--:|:--:
u | 밑줄 | <u>밑줄</u>
s | 취소선 | <s>취소</s>
ins | 내용삽입 | <ins>내용삽입</ins>
del | 내용삭제 | <del>내용삭제</del>

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
 2. 로컬 컴퓨터 이미지 불러오기
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
   1. ul
   - 순서가 없는 목록
   - 각 항목의 앞에 블릿(동그라미, 네모 등)이 붙음
   ```
   <ul>
    <li>포도</li>
    <li>사과</li>
   </ul> 
   ```

   2. ol
   - 순서가 있는 목록
   - 각 항목 앞에 숫자, 영문, 로마자가 붙는다
   ```
   <ol>
    <li>세수하기</li>
    <li>밥먹기</li>
   </ol>
   ```
   - ol type="a, 1, i(로마자)" strat="숫자" <=시작하고싶은 숫자를 적음

   3. 혼합 목록
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

  - ul>li*2
  ```
  <ul>
    <li></li>
    <li></li>
  </ul>
  ```

  - ul>li{서브메뉴$}*2
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

  클래스 | 효과 | 예
  :--:|:--:|:--:
  link | 링크된 글을 누르기 전의 상태 | a:link
  visited | 링크된 글을 누른 후의 상태 | a:visited
  hover | 마우스를 올렸을 때의 상태 | a:hover
  active | 클릭중일 때 나타나는 상태 | a:active 
  - 순서대로 사용해야 오류가 나지 않음
<hr>

  ## 멀티미디어 (영상 등)
  - figure 태그
    - 멀티미디어 등을 담는 태그. 본문을 설명, 소개하는 용도로 감싸는 태그
    - figcaption이라는 자식태그를 사용하기도 함. 글로 설명할 때 쓴다. (1회성)
  - video 태그
    - 영상을 업로드 할 수 있는 태그
    - 속성
     1. controls : 재생, 멈춤 등 영상 컨트롤 UI 표시
     2. autoplay muted : UI없이 영상 재생
     3. loop : 무한반복
     4. poster : 썸네일
  - iframe 태그
   - 유튜브 영상을 올릴 수 있는 태그. 유튜브 소스를 붙여넣으면 자동으로 생성된다.
   - 영상의 크기는 스타일태그 혹은 태그 내의 속성값으로 변경 가능