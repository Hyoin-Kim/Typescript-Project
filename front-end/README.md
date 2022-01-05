# 삼쩜삼 프론트엔드 과제

- 타입스크립트를 활용하여 회원 정보를 받아 일부 기능을 구현해보는 프로젝트입니다. <br/>
- 일부 중복되는 부분은 코드 재사용을 위해 아토믹 디자인 패턴을 적용하여 구현하였습니다. <br/>

📃프로젝트 개발 기간 : 2021.12.29 ~ 2021.1.5

## 📌 Convention

- Code Convention

  - eslint, prettier 사용
  - 변수, 함수 : Camel Case 사용
  - 컴포넌트를 정의한 파일 : Pascal case 사용
  - styled-components : 코드 하단에 작성하기
  - 아토믹 디자인 패턴 적용(Atoms->Molecules->Organisms->Template->Page)

- Commit Message Convention

  ```
  #   init     : 초기화
  #   feat     : 기능 추가
  #   update   : 기능 보완 (업그레이드)
  #   fix      : 버그 수정
  #   refactor : 리팩토링
  #   style    : 스타일 (코드 형식, 세미콜론 추가: 비즈니스 로직에 변경 없음, 스타일)
  #   docs     : 문서 (Readme 추가, 수정, 삭제)
  #   test     : 테스트 (테스트 코드 추가, 수정, 삭제: 비즈니스 로직에 변경 없음)
  #   chore    : 기타 변경사항 (빌드 스크립트 수정, 에셋 추가 등)
  ```

## 🛠 기술 스택

<img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/> <img src="https://img.shields.io/badge/TypeScript-blue?style=flat-square&logo=TypeScript&logoColor=white"/> <img src="https://img.shields.io/badge/StyledComponents-DB7093?style=flat-square&logo=Styled-components&logoColor=white"/> <img src="https://img.shields.io/badge/Prettier-F7B93E?style=flat-square&logo=Prettier&logoColor=white"/> <img src="https://img.shields.io/badge/Eslint-4B3263?style=flat-square&logo=Eslint&logoColor=white"/>

```
"@testing-library/jest-dom": "^5.16.1",
"@testing-library/react": "^12.1.2",
"@testing-library/user-event": "^13.5.0",
"@types/jest": "^27.0.3",
"@types/node": "^16.11.17",
"@types/react": "^17.0.38",
"@types/react-dom": "^17.0.11",
"lint-staged": "^11.2.6",
"react": "^17.0.2",
"react-dom": "^17.0.2",
"react-scripts": "5.0.0",
"styled-components": "^5.3.3",
"styled-reset": "^4.3.4",
"web-vitals": "^2.1.2"
```

## 🗂 폴더 구조
```
📦src
 ┣ 📂assets
 ┃ ┣ 📜allCheck.svg
 ┃ ┣ 📜allCheck_color.svg
 ┃ ┣ 📜batteryIcon.svg
 ┃ ┣ 📜check.svg
 ┃ ┣ 📜check_color.svg
 ┃ ┣ 📜homeBar.svg
 ┃ ┣ 📜index.ts
 ┃ ┗ 📜security.svg
 ┣ 📂components
 ┃ ┣ 📂atoms
 ┃ ┃ ┣ 📜Modal.tsx
 ┃ ┃ ┗ 📜StyledInput.tsx
 ┃ ┣ 📂common
 ┃ ┃ ┣ 📜Footer.tsx
 ┃ ┃ ┗ 📜Header.tsx
 ┃ ┣ 📂molecules
 ┃ ┃ ┣ 📜IdentifyInput.tsx
 ┃ ┃ ┣ 📜NameInput.tsx
 ┃ ┃ ┣ 📜NoticeModal.tsx
 ┃ ┃ ┣ 📜PhoneInput.tsx
 ┃ ┃ ┗ 📜Poster.tsx
 ┃ ┣ 📂organisms
 ┃ ┃ ┗ 📜InformationInput.tsx
 ┃ ┣ 📂templates
 ┃ ┃ ┗ 📜UserInfoTemplate.tsx
 ┃ ┗ 📜custom.d.ts
 ┣ 📂pages
 ┃ ┗ 📜Main.tsx
 ┣ 📂styles
 ┃ ┗ 📜GlobalStyle.ts
 ┣ 📂types
 ┃ ┗ 📜info.type.ts
 ┣ 📜App.tsx
 ┗ 📜index.tsx
```

## 💻 실행방법

```
$ cd .\front-end\
$ npm install
$ npm start
```

## ❤ 개발자 소개

| 김효인                                     |
| ------------------------------------------ |
| [@Hyoin-Kim](https://github.com/Hyoin-Kim) |
