# react_study
리액트 공부하기!
#### Lint 끄는 기능
- /* eslint-disable */
#### react app 생성
- npx create-react-app <...>
#### 경로변경
- cd <...>
#### 애플리케이션 실행
- npm start
#### 스타일 컴포넌트 추가
- npm install --save styled-components
#### react-router-dom v6 - 페이징전환을 위해 사용하는 패키지 & styled-components v5 - CSS를 위한 사용하는 패키지 ( 설치후 package.json 에서 dependencies 확인할수있음)
- npm install --save react-router-dom styled-components

# 배포

#### 빌더
- npm run build
#### serve 설치 - static 파일들을 서빙해주는 역할을 하는 프로그램
- npm install -g server
#### server를 이용하여 웹애플리케이션 서빙
- server -s build
##### 에러...
![image](https://github.com/Seungkizz/react_study/assets/130020647/97fcd2d5-8432-4f68-b34f-c115b7560381)
- 에러를 읽어보면 스크립트 실행 권한이 제한되어 있어 발생하는 문제임을 확인할 수 있다.
  스크립트 실행 권한을 변경시키기 위해서는 windows powershell을 관리자 권한으로 실행시켜서 변경해 주어야 한다.

1. windows powershell을 검색하여 관리자로 실행해준다.
2. get-ExecutionPolicy로 현재 권한상태를 확인한다.
3. 권한 상태를 "RemoteSigned"으로 변경한다.
4. get-ExecutionPolicy로 권한이 잘 변경되었는지 확인한다.
5. 다시 VSCode로 돌아가서 원하는 명령을 실행해본다.

