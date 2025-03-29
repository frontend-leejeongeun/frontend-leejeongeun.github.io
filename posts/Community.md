Firebase와 Next.js를 활용한 커뮤니티 플랫폼 개발 과정을 정리한 글입니다. 글 작성, 수정, 삭제, 댓글기능과 게시글 검색 및 하이라이팅 기능 그리고 로그인과 회원가입 인증을 지원합니다. GitHub 및 Google OAuth 로그인도 지원하고 익명기능도 제공합니다. 이 포스팅은 단순한 기능 구현을 넘어서 클라이언트와 백엔드의 구현, 실제 서비스 배포와 실시간 트러블슈팅을 경험하며 그 과정에서 겪은 고민과 시행착오를 담고 있습니다. 이 앱의 클라이언트 전체 소스코드는 [Community-front](https://github.com/frontend-leejeongeun/Project-Community-Next-Client) 여기서 볼 수 있습니다. 백엔드 전체 소스코드는 [Community-back](https://github.com/frontend-leejeongeun/Project-Community-Next-Server) 이곳에서 볼 수 있습니다.

## 구현 기능

- 로그인 인증
- 이메일 회원가입
- 글 작성, 수정, 삭제, 읽기
- 댓글, 대댓글 기능
- 게시글 검색, 하이라이팅 기능

## 기술 스택

- Next.js: 프론트엔드 프레임워크
- Firebase Authentication: OAuth 로그인, 이메일 인증
- Firebase Firestore: NoSQL 실시간 데이터베이스
- TypeScript: 정적 타입 적용
- Tailwind CSS: 빠른 UI 구성
- Node.js + Express: 백엔드 API 서버
- Fly.io: 백엔드 배포 플랫폼
- Vercel: 프론트엔드 배포 플랫폼

![Desktop View](./images/community1.PNG)
![Desktop View](./images/community2.PNG)

## 1단계: 로그인 구현과 인증 시스템 이해

#### 로그인 및 로그아웃 기능

### 작업 중 느낀 점

- ###### 단순히 로그인 기능을 구현하는 것과, 인증 상태에 따라 UX를 세심하게 설계하는 것은 별개의 일.
- ###### Firebase의 기본 제공 기능은 강력하지만, 실제 앱과 연결할 때는 다양한 예외처리(에러, 충돌, 리디렉션 등)가 필요함.

## 2단계: Firestore 직접 접근의 한계와 API 서버 도입

#### 처음에는 getDocs로 Firestore 데이터를 직접 호출했지만, 이 방식은 보안상 위험하고 유지보수도 어려웠습니다.

```ts
const querySnapshot = await getDocs(collection(db, "posts"));
setPosts(querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
```

### 문제점

- ###### 프론트엔드에 비즈니스 로직이 몰림
- ###### 모든 데이터를 가져오므로 성능 저하 가능성
- ###### Firestore 권한 관리를 프론트에서 해야 하므로 보안 취약

### 해결: Node.js + Express 백엔드 API 서버 구축

#### Firebase Admin SDK를 활용해 백엔드 서버에서 Firestore에 접근하고, 필요한 데이터만 JSON으로 응답하도록 설계했습니다

###### 예시: 게시글 목록 GET API

```js
app.get("/api/posts", async (req, res) => {
  const postsRef = db.collection("posts");
  const snapshot = await postsRef.get();
  const posts = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  res.json(posts);
});
```

## 3단계: GitHub 로그인 충돌 에러 해결

#### 같은 이메일로 Google과 GitHub 로그인을 시도할 때 auth/account-exists-with-different-credential 오류가 발생.

### 해결

```ts
const methods = await fetchSignInMethodsForEmail(email);
if (methods.includes("google.com")) {
  alert("Google 로그인으로 가입된 이메일입니다. Google로 로그인해주세요.");
}
```

## 4단계: 댓글 기능 및 댓글 수 표시

- ###### 댓글 작성, 삭제, 불러오기 기능 추가
- ###### 각 게시글 아래에 댓글 수를 별도 API로 표시

```ts
app.get("/api/posts/:postId/comments/count", async (req, res) => {
  const { postId } = req.params;
  const snapshot = await db
    .collection("posts")
    .doc(postId)
    .collection("comments")
    .get();
  res.json({ count: snapshot.size });
});
```

## 5단계: 배포 과정 - Vercel + Fly.io

### 프론트엔드 (Vercel)

- ###### NEXT_PUBLIC_API_BASE_URL 환경변수를 통해 백엔드 주소 분리
- ###### .env 설정 시 실수 없이 배포 시점에도 반영되도록 주의

### 백엔드 (Fly.io)

- ###### 처음엔 Fly.io가 localhost에만 리스닝하여 접근 불가 (Error: is your app listening on 0.0.0.0?)
- ###### server.js의 listen 부분을 아래처럼 수정하여 해결:

```js
app.listen(PORT, "0.0.0.0", () => {
  console.log(`\uD83D\uDE80 서버 실행 중: http://localhost:${PORT}`);
});
```

- CORS 설정을 통해 프론트 도메인 허용

```js
app.use(cors({ origin: "https://project-community-next-client.vercel.app" }));
```

### 트러블슈팅 로그 예시

- ###### Fly.io 배포 후 ERR_CONNECTION_REFUSED → 서버 포트 확인
- ###### No Access-Control-Allow-Origin → CORS 미설정
- ###### 404 Not Found → API 라우터 누락 or 오타
- ###### 댓글 수를 가져오는 /api/posts/:id/comments/count 누락 → 서버 라우트 추가로 해결

## 향후 추가할 기능

- Firebase Firestore를 활용한 실시간 채팅

## 마무리하며 느낀 점

작업과정 중 많은 이슈가 있었지만 가장 크게 느꼈던 점은 프론트엔드 중심의 개발 방식에서 벗어나 백엔드와 API 구조까지 고민하게 되었고, Fly.io와 같은 배포 플랫폼을 처음 다뤄보며 처음부터 끝까지 애플리케이션 하나를 온전히 만든다는 것이 얼마나 많은 고민과 애정이 필요한 것임을 체감했습니다.앞으로도 관련된 기능들을 추가하며 고도화를 통해 애플리케이션의 완성도를 높여나갈 예정입니다.

프론트엔드코드는 [Community-front](https://github.com/frontend-leejeongeun/Project-Community-Next-Client) 여기서 보실 수 있으며 백엔드는 [Community-back](https://github.com/frontend-leejeongeun/Project-Community-Next-Server) 이곳에서 보실 수 있습니다.
