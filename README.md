# 실행 방법

---

```jsx
npm start
또는 
npm run dev 
(실시간 반영되어 서버 restart 됨)
```

## 소스 코드

- [glitch.com](http://glitch.com) : 깃에 올리면
    - 아이디 / 비번: swjung1@seegene.com / seegene1!
    - 첫 화면에서 Download를 누르면 알집 파일로 다운로드됨
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/8e0fbcf0-37b1-43d5-bff0-c2913aacdb55/Untitled.png)
    

## 폴더 구조

Node Express 기반 + Nunjucks 템플릿 엔진 + sqlite

ㄴ **/views** :  nunjucks template engine 씀 (하위 페이지 모두 html.)   **Tymeleaf 문법으로 수정하여 사용 가능**

    ㄴbase : header, footer이는 기본 뼈대

    ㄴindex : header, footer이는 기본 뼈대

ㄴ **/public** : 이미지, js

ㄴ /data : SQLite DB 

ㄴ .index.js : 백엔드 서버 연결

## 작업 완료 페이지

- 기본 반응형 메뉴바 (헤더, 푸터. 태블렛 사이즈까지)
- [로그인](https://wisdom-2022.glitch.me/login)
- [소개](http://wisdom-2022.glitch.me/about)
- [시퀀스 컬렉터](http://wisdom-2022.glitch.me/sequence-collector) (정민 님과 작업)

## 참고

- React처럼 저장한 즉시 새로고침이 자동으로 되게 하려면 Node에서 새로 툴 깔아야함
- Views 에서 작업한 nunjucks 문법을 바로 Tymeleaf로 변환하여 이관 가능