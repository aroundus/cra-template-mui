# CRA Template MUI

[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Faroundus%2Faroundus.github.io&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=Hits&edge_flat=false)](https://hits.seeyoufarm.com)
![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)
![Material UI](https://img.shields.io/badge/MUI-007FFF?logo=mui&logoColor=white)
![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-764ABC?logo=redux&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-671DDF?logo=axios&logoColor=white)

## 목차

1. [소개](#소개)
2. [사용 기술](#사용-기술)
3. [설치 및 실행](#설치-및-실행)
4. [빌드 및 확인](#빌드-및-확인)
5. [테스트](#테스트)
6. [프로젝트 구조](#프로젝트-구조)

## 소개

이 저장소는 프론트엔드 입문자를 위한 CRA(Create React App) 템플릿입니다. 이 템플릿은 Material-UI를 사용하여 빠르고 쉽게 반응형 웹 애플리케이션을 개발할 수 있도록 도와줍니다.

## 사용 기술

- 프로그래밍 언어: JavaScript
- 프레임워크: [CRA](https://create-react-app.dev)
- 라이브러리: MUI, Redux Toolkit

## 설치 및 실행

```shell
nvm use
npm install
npm start
```

## 빌드 및 확인

```shell
nvm run build

> cra-template-mui@0.1.0 build
> react-app-rewired build

Compiled successfully.

The project was built assuming it is hosted at /.
You can control this with the homepage field in your package.json.

The build folder is ready to be deployed.
You may serve it with a static server:

  npm install -g serve
  serve -s build

Find out more about deployment here:

  https://cra.link/deployment
```

## 테스트

```shell
npm run test
```

### TDD

테스트 주도 개발(TDD, Test-Driven Development)은 소프트웨어 개발에서 코드의 품질을 높이고, 오류를 줄이며, 유지보수를 용이하게 합니다. 다음 예제를 통해 테스트 코드 작성 방법을 확인해 보세요.

- [array.test.js](src/helpers/__tests__/array.test.js)
- [calculate.test.js](src/helpers/__tests__/calculate.test.js)

## 프로젝트 구조

```plaintext
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
  ├─ jsconfig.json
  ├─ package.json
  └─ README.md
```

### [jsconfig.json](./jsconfig.json)

JavaScript 프로젝트에서 사용하는 설정 파일입니다. 프로젝트의 컴파일러 옵션 및 모듈 경로를 설정합니다. 이 파일은 [tsconfig.json](https://www.typescriptlang.org/ko/docs/handbook/tsconfig-json.html) 파일과 거의 동일하게 동작합니다.

#### paths

모듈 경로의 별칭을 설정합니다. 다음은 `@/`로 시작하는 모든 경로가 `src/` 하위 경로로 매핑됨을 의미합니다.

```json
"paths": {
  "@/*": ["src/*"]
```

모듈을 다른 프로젝트로 옮기거나 재사용할 때 상대 경로를 사용하면 경로를 일일이 수정해 주어야 하지만, 별칭을 사용하면 특정 경로에 종속되지 않기 때문에 신경쓰지 않아도 됩니다.

```jsx
// AS IS (상대 경로 사용)
import useIntersectionObserver from '../../helpers/hooks/useIntersectionObserver';
import quizService from '../../services/quiz';

// TO BE (별칭 사용)
import useIntersectionObserver from '@/helpers/hooks/useIntersectionObserver';
import quizService from '@/services/quiz';
```

### [Router.jsx](./src/Router.jsx)

React 프로젝트에서 라우팅을 설정합니다. react-router-dom 라이브러리를 사용하여 경로와 컴포넌트를 매핑합니다.
