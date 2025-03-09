리액트를 사용해 todo-list를 만들어 보았습니다.
투두리스트의 동작방식은 [TodoMVC](https://todomvc.com/examples/javascript-es6/dist/)와 같이 동작하도록 개발하였으며, 다음과 같은 형태입니다. 기존의 바닐라 자바스크립트와 동일한 UI,기능을 유지하도록 의도하였으며 소스코드만 다르게 작성되었습니다. 이 과정을 통해 순수자바스크립트와 리액트 프레임워크 사용시 차이점과 장단점을 직관적으로 체감할 수 있을 것으로 기대합니다.
이 리액트 앱의 전체 소스코드는 [TodosReact-github-jeongeun](https://github.com/frontend-leejeongeun/Project-Todos-React) 여기서 볼 수 있습니다.

## 기술 스택

- React: 사용자 인터페이스 구축 및 상태 관리
- Vite: 빠른 개발 환경 설정 도구
- Json server: 간단한 REST API 서버 제공 (로컬)
- TypeScript: 정적 타입을 제공하는 자바스크립트 상위 언어
- MobX: 상태 관리 라이브러리
- TanStack Query: 서버 상태 관리 라이브러리
- Axios: HTTP 클라이언트
- CSS: 애플리케이션 스타일링

## 기능 정의하기

![Desktop View](./images/todoreact1.png)

1.  전체 선택

- ###### Section전체 완료되지 않음 상태 일 때는 회색으로 표시
- ###### 전체 완료된 상태는 초록색으로 표시
- ###### 해당 버튼을 누르면 모든 할 일이 완료된 상태로 바뀐다
- ###### 이미 모두 완료된 상태일 때, 누르면 전체 할 일 리스트가 완료되지 않은 상태로 변한다

2.  할 일 입력

- ###### 사용자로부터 입력을 받는 인풋
- ###### Enter Key를 누르면 할 일이 추가된다
- ###### 할 일이 추가된 이후, 입력창의 value를 초기화

3.  체크박스

- ###### 완료된 일이면, 체크표시
- ###### 해당 버튼을 누를 시, 할 일의 완료상태(isCompleted) 값을 토글 시킨다.

4.  할 일 내용

- ###### 할 일 내용이 표시된다
- ###### 완료된 일이면 이태리체, 회색, 가운데선으로 표시
- ###### 마우스로 더블 클릭 시, 할 일 내용을 수정할 수 있다

5.  할 일 삭제

- ###### 해당 할 일을 투두리스트에서 삭제한다

6.  남은 할 일

- ###### 완료되지 않은 할 일의 개수를 표시한다.

7.  전체 할 일 버튼

- ###### 투두리스트의 모든 할 일을 보여준다.

8.  남은 할 일 버튼

- ###### 투두리스트에서 아직 완료되지 않은 일을 보여준다.

9.  완료 된 할 일 버튼

- ###### 완료된 일을 보여준다.

10. 완료 된 할 일 삭제 버튼

- ###### 완료된 일을 투두리스트에서 삭제한다.

## 기술스택 선정 이유

### 1. MobX vs Redux vs Context API

#### MobX

- 이번 프로젝트에서는 Redux나 Context API 대신 MobX를 선택했습니다.
  MobX는 makeAutoObservable을 활용하여 상태를 자동으로 감지할 수 있어 보일러플레이트 코드가 적고 computed와 action을 활용해 간단한 상태 관리를 쉽게 구현 가능해서 MobX를 선택했습니다.

#### Redux

- Redux를 사용하지 않은 이유는 Redux는 action, reducer, store를 따로 정의해야 해서 초기 설정이 복잡한데 이 프로젝트에서는 글로벌 상태 관리가 필요한 수준이 아니라 과도한 사용이 될 가능성이 있어서 Redux를 사용하지 않았습니다.

#### Context API

- Context API를 사용하지 않은 이유는 Context API는 상태가 업데이트될 때 불필요한 리렌더링이 발생할 가능성이 있는데 MobX의 observable을 사용하면 필요한 컴포넌트만 리렌더링할 수 있어 성능적으로 유리하다고 판단했습니다.

### 2. TanStack Query

#### 이 프로젝트에서는 React Query(TanStack Query)를 활용하여 API 요청을 관리했습니다.

- React Query는 useQuery, useMutation을 활용해 비동기 데이터 관리가 쉽고 자동으로 데이터 캐싱 및 동기화를 지원하여 성능 최적화 가능합니다. 또한 상태 관리 라이브러리(MobX)와 함께 사용하면 클라이언트 상태와 서버 상태를 분리하여 깔끔한 코드 유지를 할 수 있습니다.

### 3. Axios

- Axios를 선택한 이유는 기본적인 HTTP 요청 외에도, 다양한 기능을 제공하며 응답 구조의 설정, 요청 타임아웃, 에러 처리 등을 보다 세밀하게 제어할 수 있기 때문입니다. 이를 통해 코드의 가독성을 높이고 API 요청에 대한 관리가 용이해졌습니다.

### 위의 이유로 클라이언트 상태는 MobX, 서버 상태는 React Query로 관리하는 방식으로 프로젝트를 설계했습니다.

## 상태 관리

1. MobX (store.ts)

- MobX를 사용하는 주요 장점은 보일러플레이트 코드의 최소화와 자동 상태 추적입니다. makeAutoObservable을 통해 별도의 set 메서드나 action을 작성할 필요 없이, 상태 변경 시 자동으로 UI가 업데이트됩니다. 이러한 방식으로 코드의 가독성을 높이고, 불필요한 코드 작성을 방지할 수 있었습니다.
  그러나, MobX를 사용할 때 주의할 점은 컴포넌트가 MobX의 상태를 관찰하도록 설정해야 한다는 것입니다. 이를 위해서서 observer로 컴포넌트를 감싸야 하며, 만약 이를 적용하지 않으면 상태 변경이 UI에 반영되지 않습니다. 이러한 점을 고려하여 상태 관리를 명확하게 설정하고 컴포넌트가 이를 반영하도록 설계해야 했습니다.

- 디버깅과 관련된 도전도 있었습니다. MobX는 상태 변경을 자동으로 반영하기 때문에, 코드 내에서 어떤 동작이 상태 변경을 유발했는지 추적하는 것이 어려울 수 있습니다. 이를 보완하기 위해, mobx-logger를 사용해 상태 변경을 로그로 기록하거나, MobX Developer Tools를 통해 실시간으로 상태를 추적할 수 있습니다. 또한, configure({ enforceActions: "always" }) 옵션을 사용하여, 상태 변경을 반드시 action 함수 내에서만 수행하도록 강제했습니다. 이 방식은 예측 가능한 상태 변경을 보장하고, 의도하지 않은 상태 변경을 방지할 수 있습니다.

```ts
import { makeAutoObservable, configure } from "mobx";

configure({
  enforceActions: "always",
});

export interface Todo {
  id: string;
  title: string;
  content: string;
  isCompleted: boolean;
}

class TodoStore {
  todos: Todo[] = [];
  currentShowType: string = "all";

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  // 생략...
}

const todoStore = new TodoStore();
export default todoStore;
```

## API 통신

1. Axios + React Query (hooks/useTodoQueries.ts)

- Axios를 사용하여 API와 상호작용하는 커스텀 훅을 작성했습니다. 여기서 할 일 목록을 가져오고, 추가하며, 수정하고, 삭제하는 기능을 각각 담당하는 API 호출을 관리합니다. 또한, React Query를 사용하여 서버 상태 관리 로직을 처리했습니다. React Query는 서버에서 데이터를 가져오고, 캐싱하며, 상태를 자동으로 업데이트하는 기능을 제공하여, 컴포넌트 내에서 API 상태 관리에 드는 코드 양을 대폭 줄였습니다. 예를 들어, useQuery 훅을 사용하여 할 일 목록을 가져올 때, 캐싱된 데이터를 자동으로 반환하여 사용자가 페이지를 새로 고침하지 않아도 데이터를 빠르게 사용할 수 있게 했습니다. 그리고 useMutation 훅을 활용해 할 일을 추가하거나 수정할 때 성공적으로 완료되면 자동으로 데이터가 갱신되고 UI가 업데이트되는 구조로 불필요한 리렌더링을 최소화할 수 있었습니다.
  이러한 구조를 통해 API 요청 로직을 컴포넌트에서 분리하고, 서버 상태 관리를 React Query로 맡기면서, 리액트의 효율적인 상태 관리와 API 통신을 하나로 통합할 수 있었습니다.

```ts
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import todoStore from "../store";

interface Todo {
  id: string;
  title: string;
  content: string;
  isCompleted: boolean;
}

const BASE_URL = "http://localhost:5000";
const TODOS_QUERY_KEY = ["todos"];

export function useFetchTodos() {
  return useQuery<Todo[]>({
    queryKey: TODOS_QUERY_KEY,
    queryFn: async () => {
      const response = await axios.get(`${BASE_URL}/todos`);
      todoStore.setTodos(response.data);
      return response.data;
    },
  });
}

export function useAddTodo() {
  const queryClient = useQueryClient();
  return useMutation<Todo, Error, { title: string; content: string }>({
    mutationFn: async ({
      title,
      content,
    }: {
      title: string;
      content: string;
    }) => {
      const newTodo: Todo = {
        id: uuidv4(),
        title,
        content,
        isCompleted: false,
      };
      await axios.post(`${BASE_URL}/todos`, newTodo);
      return newTodo;
    },
    onSuccess: (newTodo: Todo) => {
      todoStore.addTodo(newTodo);
      queryClient.invalidateQueries({ queryKey: TODOS_QUERY_KEY });
    },
  });
}

// 생략...
```

## 컴포넌트 구현

1. Main 컴포넌트

- 애플리케이션의 주요 컴포넌트를 기능별로 나눠 작성했습니다. Main.tsx 파일에서 로딩 상태를 처리하고, 주요 각 컴포넌트를 연결했습니다. 위에서 말씀드린 바와 같이 observer로 컴포넌트를 감싼 것을 볼 수 있습니다. TodoInput, TodoList, TodoFilter 컴포넌트는 각각 할 일 추가, 목록 표시 및 필터링 기능을 구현했습니다. 이 컴포넌트들은 Prop을 통해 부모 컴포넌트와 연결되어, 상태 관리와 UI 업데이트를 처리가능하도록 했습니다.

```tsx
import { observer } from "mobx-react-lite";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import TodoFilter from "./TodoFilter";
import todoStore from "../store";
import {
  useFetchTodos,
  useAddTodo,
  useEditTodo,
  useCompleteAll,
  useCheckTodo,
  useDeleteTodo,
  useClearCompletedTodos,
} from "../hooks/useTodoQueries";

const Main = observer(() => {
  const { isLoading } = useFetchTodos();
  const addTodoMutation = useAddTodo();
  const editTodoMutation = useEditTodo();
  const completeAllMutation = useCompleteAll();
  const checkTodoMutation = useCheckTodo();
  const deleteTodoMutation = useDeleteTodo();
  const clearCompletedTodosMutation = useClearCompletedTodos();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <main className="todo-box">
      <button onClick={() => completeAllMutation.mutate()}>✔</button>
      <TodoInput
        addTodo={(content) =>
          addTodoMutation.mutate({ title: content, content })
        }
      />
      <TodoList
        handleCheckTodo={(id) => checkTodoMutation.mutate(id)}
        handleDeleteTodo={(id) => deleteTodoMutation.mutate(id)}
        filteredTodos={todoStore.filteredTodos}
        handleEditTodo={(id, content) =>
          editTodoMutation.mutate({ todoId: id, newContent: content })
        }
      />
      <TodoFilter
        leftItemsCount={todoStore.leftItemsCount}
        handleShowTodosType={todoStore.setCurrentShowType}
        handleClearCompletedTodos={() => clearCompletedTodosMutation.mutate()}
        currentShowType={todoStore.currentShowType}
      />
    </main>
  );
});

export default Main;
```

## 문제 해결 과정

1. 데이터 로딩 문제

- API에서 데이터를 가져오는 데 시간이 걸려 사용자 경험이 저하되었습니다. 이를 해결하기 위해 로딩 상태를 추가하고, 데이터를 불러오는 동안 "Loading..." 메시지를 표시하도록 구현했습니다.

2. API 에러 처리

- API 호출 중 에러가 발생할 경우 사용자에게 즉각적으로 알릴 수 있도록 에러 메시지 표시 기능을 추가했습니다. 각 훅에서 onError 콜백을 활용해 에러를 처리하고, 사용자에게 보다 직관적인 피드백을 제공할 수 있도록 했습니다.

3. 러닝커브

- [MobX](https://mobx.js.org/README.html)를 사용하면서 느낀 점은 "간단하지만 쉽지는 않다"는 것이었습니다. 개념 자체는 직관적이지만, 실제로 동작 원리를 이해하고 적용하는 과정에서 시행착오가 많았습니다. 아직도 수정하고 리팩토링해야 할 부분이 많지만, 한 번에 완벽하게 만들기보다 점진적으로 개선해 나가면서 심도 있게 학습할 계획입니다.

## 바닐라 자바스크립트와 리액트

| 비교 항목   | 바닐라 자바스크립트                                             | 리액트                                        |
| ----------- | --------------------------------------------------------------- | --------------------------------------------- |
| 상태 관리   | document.querySelector, addEventListener 활용하여 직접 DOM 조작 | useState, setState로 효율적으로 관리          |
| 렌더링 방식 | 변경된 요소만 직접 업데이트해야 함                              | 상태 변화에 따라 자동 렌더링                  |
| 코드 구조   | 이벤트 리스너와 DOM 조작 코드가 섞여 있어 복잡해질 수 있음      | 컴포넌트 기반으로 유지보수가 용이             |
| 성능 최적화 | 직접 최적화 필요                                                | useMemo, useCallback 등 내장 최적화 기능 제공 |
| 재사용성    | 같은 기능이라도 반복 구현 필요                                  | 컴포넌트로 분리하여 재사용 가능               |

리액트로 작업하면서 느낀점은

1. 상태 관리의 편리함

- useState 하나만으로도 DOM을 직접 조작하지 않고 상태를 변경할 수 있어, 코드가 깔끔하고 유지보수가 쉬웠습니다.

2. 렌더링 성능 최적화

- useMemo, useCallback 등을 활용하면 불필요한 연산과 렌더링을 줄일 수 있어 성능 최적화에 큰 도움이 되었습니다. 이를 통해 리렌더링이 과도하게 발생하는 문제를 방지할 수 있었습니다.

3. 자동 최적화 기능을 제공하는 MobX

- MobX는 상태 변경을 감지하고 필요한 부분만 자동으로 갱신해 주기 때문에 별도의 최적화 작업이 필요하지 않은 장점이 있었습니다. 이를 활용하면 코드의 복잡도를 줄일 수 있지만, 처음에는 개념을 이해하는 데 시간이 필요했습니다.

4. 풍부한 생태계

- 리액트는 다양한 라이브러리와 참고할 수 있는 자료가 많아 확장성이 뛰어난 프레임워크라는 점을 다시 한번 느꼈습니다. 필요한 기능을 빠르게 구현할 수 있도록 도와주는 도구들이 많아 개발 생산성이 높았습니다.

5. 러닝 커브가 존재하는 프레임워크

- 리액트는 배우기 쉽다고 알려져 있지만, MobX, Redux, Next.js 등과 함께 활용하려면 각각의 작동 원리와 코드 작성 방식까지 익혀야 합니다. 이를 익숙해지기까지 시간이 필요했지만, 배울수록 흥미로운 프레임워크라는 점도 느꼈습니다.

이번 프로젝트를 통해 바닐라 자바스크립트와 리액트의 차이를 직접 체감할 수 있었으며, 컴포넌트 기반 아키텍처와 강력한 상태 관리 기능이 개발 효율성을 높이는 데 큰 역할을 한다는 점을 다시금 실감했습니다.

전체 소스코드는 [TodosReact-github-jeongeun](https://github.com/frontend-leejeongeun/Project-Todos-React) 여기서 볼 수 있습니다.
