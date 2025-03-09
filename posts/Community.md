Firebase를 활용하여 커뮤니티 플랫폼을 개발중에 있습니다. 현재까지 로그인 및 로그아웃 기능을 구현하였으며, GitHub 및 Google OAuth 로그인을 지원합니다. 개발 과정에서 발생한 문제를 해결하고, Firebase의 인증 시스템을 활용하여 사용자 인증을 관리하는 방법을 익히고있는데 특히 회원 관리부터 로그인 상태 유지, 오류 처리까지 직접 경험하며 백엔드와 프론트엔드의 연결 방식에 대한 이해도를 높이고 있습니다.
이 리액트 앱의 전체 소스코드는 [Community-github-jeongeun](https://github.com/frontend-leejeongeun/Project-Community-Next) 여기서 볼 수 있습니다. 다만, 25년 3월9일 저녁 9시 기준으로 프로젝트 시작 및 포스팅 병행 중에 있습니다.

## 기술 스택

- Next.js: 프론트엔드 프레임워크
- Firebase Authentication: OAuth 로그인 및 이메일/비밀번호 인증 관리
- TypeScript: 정적 타입을 제공하는 자바스크립트 상위 언어
- Tailwind CSS: 스타일링 및 반응형 UI 구현
- 이후 기술 스택 추가 예정

## 현재까지 구현된 기능

![Desktop View](./images/community1.png)

1.  로그인 및 로그아웃 기능

- ###### Firebase Authentication을 이용하여 로그인 및 로그아웃 구현
- ###### Google 로그인, GitHub 로그인, 이메일/비밀번호 로그인 지원
- ###### 로그인 상태를 유지하고, 로그인한 사용자만 특정 페이지에 접근 가능하도록 설정

2.  로그인 상태 유지 및 페이지 접근 제한

- ###### Firebase Authentication의 onAuthStateChanged를 활용하여 사용자의 로그인 상태를 추적
- ###### 로그인 여부에 따라 특정 페이지로 이동하거나 접근을 제한하는 기능 구현

## 개발 중 발생한 문제 및 해결 과정

### 1. GitHub 로그인 시 auth/account-exists-with-different-credential 오류 문제

- 같은 이메일로 Google 로그인과 GitHub 로그인을 시도할 경우, Firebase에서 충돌 발생
- auth/account-exists-with-different-credential 오류 메시지 출력됨

#### 해결 방법 (작업중)

- fetchSignInMethodsForEmail()을 사용하여 사용자가 기존에 등록한 로그인 방법 확인 후, 적절한 안내 메시지 제공

## 향후 추가할 기능

- 게시판 기능 (CRUD)
- 댓글 시스템
- Firebase Firestore를 활용한 실시간 채팅
- 등등

현재까지는 로그인 시스템을 직접 구축하면서 로그인 후 상태 관리 및 Firebase 관련 에러를 해결하는 과정을 경험하고 있습니다. 앞으로 게시판, 댓글, 실시간 기능을 추가하며 완성도를 높여나갈 예정입니다.

전체 소스코드는 [Community-github-jeongeun](https://github.com/frontend-leejeongeun/Project-Community-Next) 여기서 볼 수 있습니다.
