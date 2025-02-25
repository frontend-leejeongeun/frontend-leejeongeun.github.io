리액트를 사용해 todo-list를 만들어 보았습니다.
투두리스트의 동작방식은 [TodoMVC](https://todomvc.com/examples/javascript-es6/dist/)와 같이 동작하도록 개발하였으며, 다음과 같은 형태입니다. 기존의 바닐라 자바스크립트와 동일한 UI,기능을 유지하도록 의도하였으며 소스코드만 다르게 작성되었습니다. 이 과정을 통해 순수자바스크립트와 리액트 프레임워크 사용시 차이점과 장단점을 좀 더 직관적으로 체감할 수 있을 것으로 기대합니다.
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

- Section전체 완료되지 않음 상태 일 때는 회색으로 표시
- 전체 완료된 상태는 초록색으로 표시
- 해당 버튼을 누르면 모든 할 일이 완료된 상태로 바뀐다
- 이미 모두 완료된 상태일 때, 누르면 전체 할 일 리스트가 완료되지 않은 상태로 변한다

2.  할 일 입력

- 사용자로부터 입력을 받는 인풋
- Enter Key를 누르면 할 일이 추가된다
- 할 일이 추가된 이후, 입력창의 value를 초기화

3.  체크박스

- 완료된 일이면, 체크표시
- 해당 버튼을 누를 시, 할 일의 완료상태(isCompleted) 값을 토글 시킨다.

4.  할 일 내용

- 할 일 내용이 표시된다
- 완료된 일이면 이태리체, 회색, 가운데선으로 표시
- 마우스로 더블 클릭 시, 할 일 내용을 수정할 수 있다

5.  할 일 삭제

- 해당 할 일을 투두리스트에서 삭제한다

6.  남은 할 일

- 완료되지 않은 할 일의 개수를 표시한다.

7.  전체 할 일 버튼

- 투두리스트의 모든 할 일을 보여준다.

8.  남은 할 일 버튼

- 투두리스트에서 아직 완료되지 않은 일을 보여준다.

9.  완료 된 할 일 버튼

- 완료된 일을 보여준다.

10. 완료 된 할 일 삭제 버튼

- 완료된 일을 투두리스트에서 삭제한다.

## 기술스택 선정 이유

1.  MobX와 React Query 그리고 Typescript

- React에서는 상태 관리와 가상 DOM을 React가 비교 후 렌더링하는 특징이 있기 때문에 React의 사용법에 맞게 코드를 작성했습니다. 초반 프로토타입으로 작성했을때는 useState 와 useEffect Hook을 사용해서 상태를 관리했는데 이 과정에서 부모와 자식으로 연결 된 prop들과 종속관계에 의해 관련된 컴포넌트의 불필요한 렌더링이 일어나는 것을 볼 수 있었습니다. 이 점을 보완하고자 useCallback과 useMemo hook을 사용해 필요한 곳에서 최적화를 진행해주어야 했는데 이 부분이 번거롭게 느껴졌습니다. 사실 이 프로젝트는 소규모의 개인프로젝트이기 때문에 프로토타입으로 그대로 가도 성능 차이가 크게 느껴지지 않겠지만 대규모 프로젝트를 진행할 경우를 대비하여 이 프로젝트에서 MobX를 상태 관리 라이브러리로 사용하여 상태 관리를 간소화하고, React Query를 통해 API와의 상호작용을 쉽게 처리하도록 진행해보았습니다. MobX는 상태관리를 자동으로 추적하며 직접적인 영향이 있는 컴포넌트만 렌더링을 해주는 상태관리 라이브러리인데 @observable, @computed, @action 같은 개념을 익혀야 하기때문에 러닝커브가 있을거라고 생각했지만 사용해보기로 결정했습니다. (Zustand를 사용할까 고민도 해 보았지만 차후 프로젝트에서 비교를 위해 이번 프로젝트에서는 MobX를 사용해봅니다.) 또한 타입스크립트를 사용하여 오류를 줄이고 타입추론을 가능하게 했습니다. 빌드는 vite를 사용하기로 합니다.

## 상태 관리

1. MobX
   store.ts 파일에 상태 관리를 위한 TodoStore 클래스를 정의합니다.
   MobX의 makeAutoObservable을 사용하여 자동으로 관찰 가능한 상태를 만듭니다.
   MobX를 사용할 때 주의점은 컴포넌트가 MobX의 상태를 관찰하도록 설정되어 있어야 하는데 이를 위해 아래 main 페이지에서 observer로 컴포넌트를 감싸야 했습니다. 만약 observer로 감싸지 않은 상태에서 MobX 상태를 사용하면 UI가 업데이트되지 않을 수 있기때문에 주의해야 했습니다. 또 작업을 하면서 MobX가 디버깅이 어렵다는 평가가 있었는데 이는 자동으로 상태가 변경되므로 원인을 추적하기 어렵기 때문이었습니다. 자동 상태 반영이 장점이자 단점이 된 셈입니다.
   이를 보완하기 위해서는 mobx-logger를 사용해서 상태 변경을 로그로 기록해 관리하거나 더 직관적으로 확인하려면 MobX Developer Tools를 사용하면 단점을 보완할 수 있다고 합니다. 코드를 리팩토링하면서 점차 써보는것을 목표로 잡아도 좋을것같다고 생각했습니다. 아래 소스코드를 보면 makeAutoObservable 외에도 configure라는 것을 사용한것을 볼 수 있는데 MobX가 자동 추적 반영인만큼 의도치 않은 상태 변경 발생 가능성을 배제할 수 없기 때문에 (특히 computed 값) configure({ enforceActions: "always" }) 옵션을 활성화해서 반드시 action 함수 안에서만 상태를 변경할 수 있도록 예측 가능성이 높였습니다.

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

1. Axios + React Query
   hooks/useTodoQueries.ts 파일에 Axios를 사용하여 API와 상호작용하는 훅을 작성했습니다. 이 훅에서는 할 일 목록을 가져오고, 추가하고, 수정하고, 삭제하는 기능을 수행합니다.

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
   애플리케이션의 주요 컴포넌트를 기능별로 나눠 작성했습니다. Main.tsx 파일에서 로딩 상태를 처리하고, 주요 각 컴포넌트를 연결했습니다. 위에서 말씀드린 바와 같이 observer로 컴포넌트를 감싼 것을 볼 수 있습니다. TodoInput, TodoList, TodoFilter 컴포넌트는 각각 할 일 추가, 목록 표시 및 필터링 기능을 구현했습니다. 이 컴포넌트들은 Prop을 통해 부모 컴포넌트와 연결되어, 상태 관리와 UI 업데이트를 처리가능하도록 했습니다.

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
   처음에 API에서 데이터를 가져오는 데 시간이 걸려 사용자 경험이 저하되었습니다. 이를 해결하기 위해 로딩 상태를 추가하고, 로딩 중에는 "Loading..." 메시지를 표시했습니다.

2. API 에러 처리
   API 호출 중 에러가 발생할 때, 사용자에게 에러 메시지를 표시하도록 기능을 추가했습니다. 각 훅에서 onError 콜백을 통해 에러를 처리하고, 사용자에게 에러 정보를 제공하는 메시지를 추가했습니다.

3. 러닝커브
   [MobX](https://mobx.js.org/README.html)를 사용하면서 쉽지는 않았습니다. 동작 원리를 이해하고 작성해보고 적용해나가기까지 거북목으로 써보았습니다. 지금도 수정하고 리팩토링해야할 부분이 많지만 한번에 만족하기보다 이후에 차차로 리팩토링 해나가며 심도있게 학습할할 예정입니다.

## 바닐라 자바스크립트와 리액트

| 비교 항목   | 바닐라 자바스크립트                                             | 리액트                                        |
| ----------- | --------------------------------------------------------------- | --------------------------------------------- |
| 상태 관리   | document.querySelector, addEventListener 활용하여 직접 DOM 조작 | useState, setState로 효율적으로 관리          |
| 렌더링 방식 | 변경된 요소만 직접 업데이트해야 함                              | 상태 변화에 따라 자동 렌더링                  |
| 코드 구조   | 이벤트 리스너와 DOM 조작 코드가 섞여 있어 복잡해질 수 있음      | 컴포넌트 기반으로 유지보수가 용이             |
| 성능 최적화 | 직접 최적화 필요                                                | useMemo, useCallback 등 내장 최적화 기능 제공 |
| 재사용성    | 같은 기능이라도 반복 구현 필요                                  | 컴포넌트로 분리하여 재사용 가능               |

리액트로 작업하면서 느낀점은

1.  리액트의 상태 관리는 확실히 편리하다는 점입니다. useState 하나로 DOM을 직접 조작하는 과정 없이 깔끔하게 상태 변경이 가능한 것이 편리했습니다.

2.  useMemo, useCallback 등을 활용하면 렌더링 성능을 최적화할 수 있고 이를 활용하여 불필요한 연산과 렌더링을 줄여 최적화 할수 있는 이점이 있습니다.

3.  물론 최적화가 자동으로 이루어지는 MobX라는 라이브러리를 사용할 수도 있습니다.

4.  이 외에도 많은 라이브러리와 래퍼런스가 많은 생태계가 넓은 프레임워크라는 점을 다시 한번 느꼈습니다.

5.  다만 단점으로는 리액트는 처음에는 러닝커브가 있다는 점입니다. 그 예로 MobX, Redux, NextJS 등 작동 원리와 코드 작성 방식 등을 고려하고 이래하고 익혀야 한다는 알면 알수록 학습적인 프레임워크라는 점을 느꼈습니다.

이번 프로젝트를 통해 바닐라 자바스크립트와 리액트의 차이를 체감할 수 있었고, 리액트의 컴포넌트 기반 아키텍처와 상태 관리의 강력함을 다시금 느낄 수 있었습니다.

전체 소스코드는 [TodosReact-github-jeongeun](https://github.com/frontend-leejeongeun/Project-Todos-React) 여기서 볼 수 있습니다.
