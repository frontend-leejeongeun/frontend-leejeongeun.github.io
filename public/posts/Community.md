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

### 1. 프론트엔드에서 Firestore 데이터를 직접 호출하는 문제 (getDocs 사용)

```ts
import { GoogleAuthProvider, signInWithPopup, GithubAuthProvider, signInWithEmailAndPassword, onAuthStateChanged, signOut, User } from "firebase/auth";
import { auth,db } from "@/services/firebase";
import { collection, getDocs } from "firebase/firestore";

export default function Home() {
    const router = useRouter();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [posts, setPosts] = useState<{ id: string; [key: string]: any }[]>([]);
    const [userInfo, setUserInfo] = useState<User | null>(null);

    useEffect(() => {
        const fetchPosts = async () => {
          const querySnapshot = await getDocs(collection(db, "posts"));
          setPosts(querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        };

        fetchPosts();
      }, []);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              setIsLoggedIn(true);
              setUserInfo(user)
            } else {
                setIsLoggedIn(false);
            }
        });

        return () => unsubscribe();
    }, []);


  // 생략...

    return (
       <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex flex-grow w-full max-w-screen-xl mx-auto">
                {isLoggedIn ? (
                    <div className="flex w-full">
                        <div className="w-1/6 p-4 border-r border-gray-200">채팅창</div>
                        <div className="w-2/3 p-4">
                            <ul>
                                {posts.map((post) => (
                                <li key={post.id}>
                                    <h2>{post.title}</h2>
                                    <p>{post.content}</p>
                                </li>
                                ))}
                            </ul>
                        </div>
              <div className="w-1/6 p-4 border-l border-gray-200">
                  {userInfo && <p>{userInfo.displayName}님 안녕하세요!</p>}
                            <button
                                onClick={logout}
                                className="bg-red-500 text-white px-4 py-2 rounded-md mt-4"
                            >
                                로그아웃
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="flex w-full">
 // 생략...
    )
}
```

- 현재 프론트엔드에서 Firestore의 getDocs를 직접 호출하여 데이터를 가져오고 있음. 그러나 이러한 방식은 RESTful API 구조를 따르지 않으며, 다음과 같은 문제를 야기할 수 있음.
- ###### 비즈니스 로직의 프론트엔드 집중: 데이터 가공 및 필터링 로직이 프론트엔드에서 처리되어 유지보수가 어려워짐.
- ###### 불필요한 데이터 과다 로딩: Firestore에서 객체 전체를 반환하므로, 프론트엔드에서 불필요한 데이터를 가져와 성능 저하 가능성이 있음.
- ###### 보안 문제: Firestore를 직접 호출하면 클라이언트에서 데이터 접근 권한을 관리해야 하므로, 보안이 취약해질 수 있음.

#### 해결 방법 (작업중)

- 백엔드 서버를 구축하여 API를 통해 Firestore 데이터를 제공 → 프론트엔드와 서버 로직을 분리하고, 데이터 효율성을 개선 (Node.js + Express + Firebase Admin SDK)
- ###### Firestore 데이터를 가공하여 프론트엔드에 필요한 데이터만 반환
- ###### RESTful API 형태로 데이터를 제공하여 프론트엔드에서 axios를 통해 호출
- ###### 클라이언트에서 Firestore 직접 접근을 차단하고, 인증 및 권한 관리를 백엔드에서 처리

이러한 방식으로 실무에서 일반적으로 사용되는 백엔드-프론트엔드 분리 구조를 도입하고,
데이터 요청 최적화 및 보안 강화를 동시에 해결할 계획

### 2. GitHub 로그인 시 auth/account-exists-with-different-credential 오류 문제

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
