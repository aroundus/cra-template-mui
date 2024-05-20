<div align="center">
  <h1>CRA Template MUI</h1>
  <div>
    <img
      src="https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB"
      alt="React"
    />
    <img
      src="https://img.shields.io/badge/JavaScript-20232A?logo=javascript"
      alt="GraphQL"
    />
    <img
      src="https://img.shields.io/badge/MUI-007FFF?logo=mui&logoColor=white"
      alt="Material UI"
    />
    <img
      src="https://img.shields.io/badge/Redux_Toolkit-764ABC?logo=redux&logoColor=white"
      alt="Redux Toolkit"
    />
    <img
      src="https://img.shields.io/badge/Axios-671DDF?logo=axios&logoColor=white"
      alt="Axios"
    />
  </div>
</div>

---

[Create React App](https://create-react-app.dev)과 [Material UI](https://mui.com/material-ui)를 기반으로 한 프로젝트 템플릿입니다. 아래는 프로젝트의 디렉토리 구조와 각 디렉토리의 역할에 대한 설명입니다.
ㅣ

## 목차

1. [시작하기](#시작하기)
2. [기능](#기능)
3. [사용 방법](#사용-방법)
4. [기여 방법](#기여-방법)
5. [라이선스](#라이선스)

## 시작하기

### .gitconfig

Git 커밋 작성자 이름을 **한글**로 통일합니다.

```Shell
git config --global user.name "김진국"
git config --global user.email "zingugi@wadiz.kr"
```

한글 이름을 사용하면 커밋 메시지를 읽고 작성자 정보를 파악하는 데 걸리는 시간이 줄어듭니다. 누가 어떤 작업을 했는지 확인하는 데 시간을 허비하지 않고 피드백에 더 많은 시간을 사용할 수 있습니다.

### .nvmrc

프로젝트에서 사용할 Node.js 버전을 지정합니다. 다음과 같이 프로젝트 최상단에 .nvmrc 파일을 생성하고 버전을 작성해 주시면 됩니다.

```Properties
v20.12.2
```

```bash
npm install
npm start
```

## 기능

- [Material UI](https://mui.com/material-ui/getting-started/)
- [Redux Toolkit](https://redux-toolkit.js.org/introduction/getting-started)
- ESLint
- Stylelint
- Prettier

## 구조

```
root/
  ├─ src/
  │  ├─ assets/
  │  ├─ components/
  │  ├─ helpers/
  │  ├─ pages/
  │  ├─ services/
  │  ├─ states/
  │  ├─ App.jsx
  │  ├─ index.jsx
  │  ├─ Router.jsx
  ├─ package.json
  └─ README.md
```

## 라이선스

이 템플릿을 사용하면 프로젝트의 주요 섹션을 간단하게 구성할 수 있습니다. 필요에 따라 세부 내용을 추가하거나 수정하여 프로젝트에 맞게 사용할 수 있습니다.

## 사전 작업

- ESLint

### Visual Studio Code 확장 프로그램

- (필수) **ESLint**
- (필수) **Prettier - Code formatter**
- (필수) **Stylelint**
- Code Spell Checker: 코드 철자 오류를 실시간으로 검출합니다.

### Husky

### package.json

```Shell
npx sort-package-json
```

## 구성

props 순서에 고민이 많다면 알파벳순을 추천합니다. 알파벳 순서가 가장 합리적이고 유지보수에 용이하다. 중간에 새로운 prop이 생긴 경우 컨벤션에 대한 고민 없이 바로 작업할 수 있다.

sort lines ascending

# pages

```
pages/
  ├─ main/
  │  ├─ index.js
  │  └─ Main.jsx
  └─ quiz/
     ├─ components/
     │  └─ QuizList.jsx
     ├─ index.js
     └─ Quiz.jsx
```
