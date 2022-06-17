wisdom-2022.glitch.me

# 실행 방법

---

```jsx
npm start
또는 
npm run dev 
(실시간 반영되어 서버 restart 됨)
```


## 폴더 구조

Node Express 기반 + Nunjucks 템플릿 엔진 + sqlite

ㄴ **/views** :  nunjucks template engine 씀 (하위 페이지 모두 html.)   **Tymeleaf 문법으로 수정하여 사용 가능**

    ㄴbase : header, footer이는 기본 뼈대
    ...


ㄴ **/public** : 이미지, js

ㄴ /data : SQLite DB 

ㄴ .index.js : 백엔드 서버 연결
