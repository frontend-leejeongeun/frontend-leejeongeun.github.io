바닐라 자바스크립트를 이용해 todo-list를 만들어 보았습니다.
투두리스트의 동작방식은 [TodoMVC](https://todomvc.com/examples/javascript-es6/dist/)와 같이 동작하도록 개발하였으며, 다음과 같은 형태입니다.
전체 소스코드는 [TodoVanilla-github-jeongeun](https://github.com/frontend-leejeongeun/Project-Todos-Vanilla) 여기서 볼 수 있습니다.

![Desktop View](./images/todo1.png)

## 기능 정의하기

![Desktop View](./images/todo2.png)

1.  전체 선택

- Section전체 완료되지 않음 상태 일 때는 회색으로 표시
- 전체 완료된 상태는 초록색으로 표시
- 해당 버튼을 누르면 모든 할 일이 완료된 상태로 바뀐다
- 이미 모두 완료된 상태일 때, 누르면 전체 할 일 리스트가 완료되지 않은 상태로 변한다

2.  할 일 입력

- 사용자로부터 입력을 받는
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

## HTML과 CSS 적용하기

먼저 [reset.css](https://meyerweb.com/eric/tools/css/reset/)를 적용해 주었습니다.
reset.css는 브라우저 간의 스타일 불일치를 해소하는 크로스브라우징을 목적으로 사용하는데 이는 기본적으로 설정되어있는 브라우저 스타일 설정이 개발하는데 불편을 주기 때문입니다. reset.css를 통해 이미 설정되어 있는 스타일을 적용하여 리셋 후 개발하였습니다.

HTML과 CSS는 다음과 같이 적용하였습니다.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>TODO-VanilaJS</title>
    <link rel="stylesheet" href="reset.css" />
    <link rel="stylesheet" href="style.css" />
    <script defer="defer" src="todo.js"></script>
  </head>
  <body>
    <section class="todo-wrapper">
      <header class="todo-title">todos</header>
      <main class="todo-box">
        <div class="todo-input-box">
          <button class="complete-all-btn">✔</button>
          <input
            type="text"
            class="todo-input"
            placeholder="해야 할 일을 입력해주세요. Enter"
          />
        </div>
        <ul class="todo-list"></ul>
        <div class="todo-bottom">
          <div class="left-items"></div>
          <div class="button-group">
            <button class="show-all-btn selected" data-type="all">
              전체 할 일
            </button>
            <button class="show-active-btn" data-type="active">
              남은 할 일
            </button>
            <button class="show-completed-btn" data-type="completed">
              완료 된 할 일
            </button>
          </div>
          <button class="clear-completed-btn">완료 된 할 일 삭제</button>
        </div>
      </main>
      <footer class="info">더블클릭 시 수정 가능!</footer>
    </section>
  </body>
</html>
```

```css
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
```

```css
html {
  height: 100%;
}

body {
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  background-color: #f5f5f5;
  min-height: 100%;
}

.todo-wrapper {
  justify-content: center;
  margin-top: 3rem;
  min-width: 600px;
}

.todo-title {
  padding: 2rem;
  text-align: center;
  color: rosybrown;
  font-size: 5rem;
}

.todo-box {
  background-color: white;
  border: 1px solid #ddd;
}

.todo-input-box {
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  height: 3rem;
  border-bottom: 1px solid #ddd;
  justify-content: flex-start;
  align-items: center;
}

button {
  background-color: transparent;
  border: 0;
}

.complete-all-btn {
  color: gray;
  min-width: none;
  min-height: none;
  width: 1.5rem;
  height: 1.5rem;
  margin: 0.5rem 0.5rem;
  border-radius: 50px;
  cursor: pointer;
  font-size: 1.2rem;
}

.complete-all-btn.checked {
  color: green;
}

.todo-input {
  width: 80%;
  text-align: center;
  border: 0;
  outline: none;
  font-size: 1.3rem;
}

.todo-item {
  position: relative;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 3rem;
  border-bottom: 1px solid #ddd;
}

.todo-item:hover .delBtn {
  opacity: 1;
}

.checkbox {
  min-width: none;
  min-height: none;
  width: 1.5rem;
  height: 1.5rem;
  margin: 0.5rem 0.5rem;
  border-radius: 50px;
  border: 1px solid lightgray;
  cursor: pointer;
  text-align: center;
}

.todo-item.checked .checkbox {
  border: 2px solid darkgray;
  color: green;
}

.todo {
  font-size: 1.3rem;
  padding: 0 1rem;
  width: 80%;
}

.todo-item.checked .todo {
  font-style: italic;
  text-decoration: line-through;
  color: lightgray;
}

.delBtn {
  opacity: 1;
  width: 3rem;
  height: 3rem;
  font-size: 1.5rem;
  font-weight: lighter;
  cursor: pointer;
}

.todo-bottom {
  height: 3rem;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
}

.button-group {
  flex-direction: row;
  flex-wrap: nowrap;
}

.button-group button {
  border: 1px solid #eee;
  padding: 0.2rem 0.5rem;
  margin: 0 0.5rem;
  border-radius: 8px;
  cursor: pointer;
}

.button-group button.selected {
  border: 2px solid rosybrown;
  padding: 0.2rem 0.5rem;
  margin: 0 0.5rem;
  border-radius: 8px;
}

.clear-completed-btn:hover {
  font-style: italic;
  text-decoration: underline;
  cursor: pointer;
}

.edit-input {
  position: absolute;
  left: 0;
  top: 0;
  width: 590px;
  height: 2.8rem;
  margin: 0;
}

.info {
  margin-top: 1.5rem;
  text-align: center;
  color: #ccc;
}
```

## 할 일 추가하기

1.  사용자 입력에 대한 이벤트 리스너 등록하기

- 일단 할 일을 추가하기 위해서는 input 요소로부터 이벤트 리스너를 등록하여 이벤트를 캐치 후 입력받은 데이터를 배열에 순차적으로 담아주고 input은 초기화합니다.

```js
const todoInputEl = document.querySelector(".todo-input");

let todos = [];
let id = 0;

const init = () => {
  todoInputEl.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      appendTodos(e.target.value);
      todoInputEl.value = "";
    }
  });
};
init();
```

todo.js 파일을 만들어 줍니다. 그리고 input요소를 가져오기 위해 querySelector를 사용하여 todoInputEl에 담아두었습니다. todos는 할 일들을 담을 배열입니다. id는 각각의 할 일들을 고유하게 구별할 수 있는 키값을 설정하기 위해 선언하였습니다. init()함수는 todos.js파일이 실행되자마자 호출되는 함수입니다.
init() 함수는 input요소를 담은 todoInputEl에 'keypress'에 대한 이벤트 리스너를 등록시킵니다. 만약 입력되는 값이 'Enter'라면 appendTodos() 함수에 e.target.value(input의 value)를 넘겨주고, todoInputEl의 value 값을 초기화합니다.

2.  할 일 추가하기

- todos 배열에 할 일을 추가하는 appendTodos()함수를 만들었습니다. 할 일은 다음과 같은 타입을 가집니다.

| Element     | Type    |
| :---------- | :------ |
| id          | number  |
| isCompleted | boolean |
| content     | string  |

```js
let todos = [];
let id = 0;

const setTodos = (newTodos) => {
  todos = newTodos;
};

const getAllTodos = () => {
  return todos;
};

const appendTodos = (text) => {
  const newId = id++;
  const newTodos = getAllTodos().concat({
    id: newId,
    isCompleted: false,
    content: text,
  });
  // 스프레드 연산자 사용할 경우
  // const newTodos = [...getAllTodos(), {id:newId, isCompleted:false, content:text}]
  setTodos(newTodos);
  paintTodos();
};
```

newId 변수는 새롭게 저장되는 할 일의 id값이며, ++연산자를 통해 1씩 증가시킴으로써 id값이 중복되지 않도록 해줍니다. newTodos는 새롭게 저장될 todos 배열로 getAlltodos()함수를 통해 이전 todos 배열을 가져온 후, 새롭게 추가된 할 일을 concat()을 통해 newTodo에 저장합니다. concat()을 사용하는 이유는 concat()은 기존 todos배열에 아무런 영향을 주지 않고 todos배열을 복사한 값에 추가한 할일을 더해 반환해주기 때문입니다. 이렇게 반환 된 newTodos를 setTodos()라는 함수로 기존 todos 배열을 변경시켜줍니다.

concat()말고 다른 방법으로는 스프레드 연산자를 사용해서 위 소스 중 주석과 같이 선언할 수 있습니다.

3.  HTML에 추가된 할 일 그려주기

- 할일이 추가될 때마다 paintTodos()함수를 실행하여 렌더링 하도록 할텐데 이 함수를 살펴봅니다.

```js
const todoListEl = document.querySelector(".todo-list");

const paintTodos = () => {
  todoListEl.innerHTML = ""; // todoListEl 요소 안의 HTML 초기화
  const allTodos = getAllTodos(); //todos 배열 가져오기

  //"todo-item"에 해당하는 HTML을 그려서 "todo-list"에 추가하기
  allTodos.forEach((todo) => {
    const todoItemEl = document.createElement("li");
    todoItemEl.classList.add("todo-item");

    // todoItemElem.setAttribute('data-id', todo.id );
    const checkboxEl = document.createElement("div");
    checkboxEl.classList.add("checkbox");

    const todoEl = document.createElement("div");
    todoEl.classList.add("todo");
    todoEl.innerText = todo.content;

    const delBtnEl = document.createElement("button");
    delBtnEl.classList.add("delBtn");
    delBtnEl.innerHTML = "X";

    if (todo.isCompleted) {
      todoItemEl.classList.add("checked");
      checkboxEl.innerText = "✔";
    }

    todoItemEl.appendChild(checkboxEl);
    todoItemEl.appendChild(todoEl);
    todoItemEl.appendChild(delBtnEl);

    todoListEl.appendChild(todoItemEl);
  });
};
```

## 할 일 목록에서 할 일 삭제

위에서 paintTodos() 함수로 html을 그렸습니다. 이때 각각의 할 일들은 'todo-item' 클래스명을 가지는 li요소로 만들어지며, 그 안에 'delBtn' 클래스명을 가지는 button 요소가 존재합니다. 각각의 'todo-item'이 만들어질 때마다 해당 'delBtn'에 click에 대한 이벤트 리스너를 등록하여 삭제 기능이 동작하도록 하였습니다.

```js
const paintTodos = () => {
  todoListEl.innerHTML = ''; // todoListEl 요소 안의 HTML 초기화
  const allTodos = getAllTodos() //todos 배열 가져오기

  //"todo-item"에 해당하는 HTML을 그려서 "todo-list"에 추가하기
  allTodos.forEach(todo => {
    (...생략)

    const delBtnEl = document.createElement('button');
    delBtnEl.classList.add('delBtn');
    delBtnEl.addEventListener('click', ()=>{deletTodo(todo.id)}) // 'click'이벤트 발생 시, 해당 할 일 삭제
    delBtnElem.innerHTML = 'X';

    (...생략)
  })
}
```

deleteTodo() 함수를 살표봅니다.

```js
const deleteTodo = (todoId) => {
  const newTodos = getAllTodos().filter((todo) => todo.id !== todoId);
  setTodos(newTodos);
  paintTodos();
};
```

'delBtn'클래스명을 가지는 삭제 버튼 요소를 click하면 deleteTodo()함수가 실행되고 인자로 todo의 id를 받습니다. deleteTodo()함수는 입력받은 id값과 Array filter()를 이용해 삭제하고자 하는 할 일을 제외한 새로운 할 일 목록을 가지는 배열을 만들 수 있고 이를 setTodos()함수를 통해 기존 todos배열을 바꿔줍니다. 그 후, paintTodos() 함수를 통해 삭제된 todos배열로 다시 HTML를 다시 렌더링 합니다.

## 할 일 완료 처리

완료 처리도 삭제 기능과 마찬가지로 click 이벤트 리스너 등록을 통해 처리해주면 됩니다.

```js
const paintTodos = () => {
  todoListEl.innerHTML = ''; // todoListEl 요소 안의 HTML 초기화
  const allTodos = getAllTodos() //todos 배열 가져오기

  //"todo-item"에 해당하는 HTML을 그려서 "todo-list"에 추가하기
  allTodos.forEach(todo => {
    (...생략)

    const checkboxEl = document.createElement('div');
    checkboxEl.classList.add('checkbox');
    checkboxEl.addEventListener('click',() => completeTodo(todo.id)) // 'click'이벤트 발생 시, 완료 처리

    (...생략)
  })
}

const completeTodo = (todoId) => {
  const newTodos = getAllTodos().map(todo => todo.id === todoId ? {...todo, isCompleted: !todo.isCompleted} : todo)
  setTodos(newTodos);
  paintTodos();
}
```

체크박스를 click하면 completeTodo() 함수가 실행되며, 동작 방식은 삭제 기능과 거의 같습니다. 차이점은 삭제에서는 Array filter()를 사용해서 삭제하고자 하는 할 일을 제외한 배열을 만들었으면, 완료 처리는 Array map()을 사용하여 완료 처리를 하고자 하는 할 일의 isCompleted 값을 토글(true이면 false로, false면 true로) 처리하여 새로운 todos 배열을 저장합니다. 이후 HTML은 paintTodos() 함수를 통해 변경된 todos를 재 렌더링합니다.

## 할 일 수정하기

1.  더블 클릭 시 수정 모드 전환

- 기능 정의에 2번 input창을 더블 클릭하면 수정 모드로 전환하는 기능을 추가합니다.
  이전에 만들었던 paintTodos()함수에 todoEl이 만들어질 때 더블 클릭에 대한 이벤트 리스너를 등록합니다. 그리고 todoEl 요소에 더블 클릭 이벤트가 발생하면 콜백 함수로 onDbclickTodo() 함수가 호출됩니다.

```js
const paintTodos = () => {
  todoListEl.innerHTML = ''; // todoListEl 요소 안의 HTML 초기화
  const allTodos = getAllTodos() //todos 배열 가져오기

  //"todo-item"에 해당하는 HTML을 그려서 "todo-list"에 추가하기
  allTodos.forEach(todo => {
    (...생략)

    const todoEl = document.createElement('div');
    todoEl.classList.add('todo');
    todoEl.addEventListener('dblclick', (event) => onDbclickTodo(event, todo.id)) // 더블 클릭에 대한 이벤트 핸들러
    todoEl.innetText = todo,content;

    (...생략)
  })
}
```

onDbclickTodo() 함수는 두 개의 파라미터를 받습니다. 첫번째 파라미터는 event객체이며, 두번째 파라미터는 할 일의 id입니다. onDbclickTodo() 함수를 통해 새로운 input요소를 만들어 사용자가 수정할 수 있도록 하겠습니다.

```js
const onDbclickTodo = (e, todoId) => {
  const todoEl = e.target;
  const inputText = e.target.innerText;
  const todoItemEl = todoEl.parentNode;
  const inputEl = document.createElement("input");

  inputEl.value = inputText;
  inputEl.classList.add("edit-input");

  inputEl.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      updateTodo(e.target.value, todoId); // todo 수정
    }
  });
};
```

```css
.edit-input {
  position: absolute;
  left: 0;
  top: 0;
  width: 590px;
  height: 2.8rem;
  margin: 0;
}
```

document.createElement() 함수를 통해 inputEl이라는 input요소를 만들고 inputEl의 value값으로 event객체의 innerText를 넣어줍니다. inputEl의 클래스 네임으로는 'edit-input'이라고 지정합니다. 'edit-input' 클래스 네임을 가지는 요소를 position: absolute로 정의하여 수정하고자 하는 todoItemEl영역을 position을 활용해 완전히 가리도록 스타일링하였습니다.

2.  수정하기

- 수정을 위해 만들어준 input요소에서 'Enter'키가 눌리면, 기존의 할 일 내용을 updateTodo() 함수를 통해 수정합니다. updateTodo()는 두개의 파라미터를 받습니다. 첫번째는 text로 수정될 할 일의 내용이며, 두번째는 todoId로 수정 될 할 일의 id입니다.

```js
const updateTodo = (text, todoId) => {
  const newTodos = getAllTodos().map((todo) =>
    todo.id === todoId ? { ...todo, content: text } : todo
  );
  setTodos(newTodos);
  paintTodos();
};
```

getAllTodos()함수로 todos배열을 가져와 map을 통해 id값을 비교하여 할 일의 내용을 수정하는 새로운 todos배열을 만듭니다. 그리고 setTodos()함수를 통해 새로운 todos배열을 저장한 후 paintTodos() 함수를 통해 변경 된 todos배열로 할 일 리스트를 다시 렌더링 합니다. paintTodos() 함수에는 UI 초기화 코드가 있기때문에 이 때문에 새롭게 초기화 후 그려질 수 있어 원하는 UI를 볼 수 있습니다.

2.  수정 모드 종료

- 수정을 위한 입력창을 제외하고, 브라우저에서 클릭 이벤트가 발생 시, 수정 모드를 종료하도록 기능을 구현하겠습니다.

```js
const onDbclickTodo = (e, todoId) => {
  const todoEl = e.target;
  const inputText = e.target.innerText;
  const todoItemEl = todoEl.parentNode;
  const inputEl = document.createElement("input");

  inputEl.value = inputText;
  inputEl.classList.add("edit-input");

  inputEl.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      updateTodo(e.target.value, todoId); // todo 수정
      document.body.removeEventListener("click", onClickBody); // 엔터키를 눌러 업데이트를 완료했을 경우도 이벤트리스너 제거
    }
  });

  todoItemEl.appendChild(inputEl); // todoItemElem 요소에 자식 요소로 inputElem 요소 추가

  // body에 클릭에 대한 이벤트 리스너 등록
  document.body.EventListener("click", onClickBody);

  // todoItemElem 요소를 제외한 영역을 클릭 시, 수정모드 종료
  const onClickBody = (e) => {
    if (e.target !== inputEl) {
      todoItemEl.removeChild(inputElem);
      document.body.removeEventListener("click", onClickBody);
    }
  };
};
```

## 전체 완료 처리 및 남은 할 일 개수

![Desktop View](./images/todo3.png){: width="700" height="400" }

1.  todos 전체 완료 처리

- 우선 todos.js 상단에 전체 완료 처리를 위해 만들어 둔 버튼을 querySelector를 통해 checkAllBtnElem이라 선언하겠습니다. 그 다음, init() 함수 안에서 해당 버튼에 대한 클릭 이벤트 리스너를 등록하고, 콜백 함수로 onClickCompleteAll() 이라는 함수를 호출하겠습니다.

```js
const completeAllBtnEl = document.querySelector(".complete-all-btn");

const init = () => {
  todoInputEl.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      appendTodos(e.target.value);
      todoInputEl.value = "";
    }
  });

  completeAllBtnEl.addEventListener("click", onClickCompleteAll); // 전체 완료 처리 버튼에 클릭 이벤트 리스너
};
init();
```

onClickCompleteAll() 함수는 현재 todos의 완료 상태 여부를 파악하여, 전체 완료를 처리하며, 동작 방식은 다음과 같습니다.

```js
let isAllCompleted = false; // 전체 todos 체크 여부

const setIsAllCompleted = (boolean) => {
  isAllCompleted = boolean;
};

const completeAll = () => {
  completeAllBtnEl.classList.add("checked");
  const newTodos = getAllTodos().map((todo) => ({
    ...todo,
    isCompleted: true,
  }));
  setTodos(newTodos);
};

const incompleteAll = () => {
  completeAllBtnEl.classList.remove("checked");
  const newTodos = getAllTodos().map((todo) => ({
    ...todo,
    isCompleted: false,
  }));
  setTodos(newTodos);
};

const getCompletedTodos = () => {
  return todos.filter((todo) => todo.isCompleted === true);
};

// 전체 todos의 isCompleted 상태를 체크하여, 처리
const checkIsAllCompleted = () => {
  if (getAllTodos().length === getCompletedTodos().length) {
    setIsAllCompleted(true);
    completeAllBtnEl.classList.add("checked");
  } else {
    setIsAllCompleted(false);
    completeAllBtnElem.classList.remove("checked");
  }
};

const onClickCompleteAll = () => {
  if (!getAllTodos().length) return; // todos배열의 길이가 0이면 return;

  if (isAllCompleted) {
    incompleteAll(); // isAllCompleted가 true이면 todos를 전체 미완료 처리
  } else {
    completeAll(); // isAllCompleted가 false이면 todos를 전체 완료 처리
    setIsAllCompleted(!isAllCompleted); // isAllCompleted 토글
    paintTodos(); // 새로운 todos를 렌더링
    setLeftItems();
  }
};
```

onClickCompleteAll() 함수를 통해 isAllCompleted 상태를 토글 시켜주며, 기존의 todos를 배열의 isCompleted를 바뀌는 isAllChecked 상태에 맞춰서 바꿔줍니다. isAllCheked값이 false가 되면, 전체 todos배열의 isCompleted값을 false로 바꿔주며, isAllChecked값이 true가 되면, 전체 todos배열의 isCompleted값을 true로 바꿔줍니다. 그 후, paintTodos()함수를 통해 todos를 재 렌더링해줍니다.

이때 completeAllBtnEl 요소는 클릭 될 때만 isAllCompleted상태 값이 변하는 것이 아니라, 각각의 할 일 들을 완료 처리 할때와 새로운 할 일이 추가 될때도 isAllCompleted의 상태가 변하고, HTML에 표시해주어야 합니다.

이를 위해 checkIsAllCompleted()라는 함수를 만들어 줍니다. checkIsAllCompleted()함수는 현재 todos배열의 길이와, 완료된 todos배열의 길이를 비교한 후, isAllCompleted의 상태를 변경하고 completeAllBtnEl요소에 'checked' 클래스 네임을 추가 또는 삭제합니다.

새롭게 만든 checkIsAllCompleted()함수를 completeTodo()함수와 appendTodos()함수에 추가해주면, 각각의 할 일이 완료 처리가 될 때와, 새로운 할 일이 추가 될때마다 전체 할 일의 완료 여부를 파악하여 이를 표현해 줄 수 있습니다.

```js
const completeTodo = (todoId) => {
  const newTodos = getAllTodos().map(todo => todo.id === todoId ? {...todo,  isCompleted: !todo.isCompleted} : todo )
  setTodos(newTodos);
  paintTodos();
  checkIsAllCompleted(); // 전체 todos의 완료 상태를 파악하여 전체 완료 처리 버튼 CSS 반영
}

const appendTodos = (text) => {
  (...생략)
  checkIsAllCompleted(); // 전체 완료처리 확인
  paintTodos();
}
```

2.  남은 할 일 개수 표시하기

- 남은 할 일 개수를 표시하는 요소를 querySelector를 사용하여 가져와 leftItemsEl이라 선언하겠습니다. 그리고 setLeftItems()라는 함수를 만들어 완료 처리가 되는 부분 마다 적용하여, 남은 할 일 개수를 갱신해주도록 하겠습니다.

```js
const leftItemsEl = document.querySelector(".left-items");

// 현재 완료되지 않은 할 일 리스트를 반환한다.
const getActiveTodos = () => {
  return todos.filter((todo) => todo.isCompleted === false);
};

const setLeftItems = () => {
  const leftTodos = getActiveTodos();
  leftItemsEl.innerHTML = `남은 할 일 ${leftTodos.length}`;
};
```

남은 할 일 개수를 표현하는 setLeftItems()함수는 todos의 배열의 길이와 완료상태가 변할 때 호출되는 함수[ init(), appendTodos(), deleteTodo(), completeTodo(), onClickCompleteAll() ]에 각각 적용해 주도록 합니다.

## 하단 필터링 버튼 기능 구현

투두리스트 하단의 전체 할 일, 남은 할 일, 완료 된 할 일, 완료 된 할 일 삭제 버튼의 기능을 구현하겠습니다. 각각의 버튼 역할을 다음과 같습니다.

| filter             | Description                                        |
| :----------------- | :------------------------------------------------- |
| 전체 할 일         | 전체 투두리스트를 보여준다                         |
| 남은 할 일         | 완료되지 않은 할 일 리스트를 보여준다              |
| 완료 된 할 일      | 완료된 할 일 리스트를 보여준다                     |
| 완료 된 할 일 삭제 | 완료된 할 일 리스트를 전체 투두리스트에서 삭제한다 |

1.  각각의 버튼에 이벤트 리스너 등록하기

- 우선 todos.js 파일 상단에 전체, 남은, 완료 된, 완료 삭제 버튼 요소를 querySelector로 가져옵니다. 그리고 init()함수 안에서 각각의 버튼에 'click'에 대한 이벤트 리스너를 등록해줍니다. All, Active, Completed 버튼에는 onClickShowTodosType()함수를 콜백으로 호출하며, Completed Clear 버튼에는 clearCompletedTodos()함수를 콜백으로 호출합니다.

```js
const showAllBtnEl = document.querySelector('.show-all-btn');	// All 버튼
const showActiveBtnEl = document.querySelector('.show-active-btn'); // Active 버튼
const showCompletedBtnEl = document.querySelector('.show-completed-btn'); // Completed 버튼
const clearCompletedBtnEl = document.querySelector('.clear-completed-btn'); // Completed Clear 버튼

const init = () => {
  (...생략)

  showAllBtnEl.addEventListener('click', onClickShowTodosType);
  showActiveBtnEl.addEventListener('click', onClickShowTodosType);
  showCompletedBtnEl.addEventListener('click', onClickShowTodosType);
  clearCompletedBtnEl.addEventListener('click', clearCompletedTodos);

  checkAllBtnEl.addEventListener('click',  onClickCheckAll)
  setLeftItems();
}

let currentShowType = 'all'; // all  | active | complete
const setCurrentShowType = (newShowType) => currentShowType = newShowType

const onClickShowTodosType = (e) => {
  const currentBtnEl = e.target;
  const newShowType = currentBtnEl.dataset.type;

  if ( currentShowType === newShowType ) return;

  const preBtnEl = document.querySelector(`.show-${currentShowType}-btn`);
  preBtnEl.classList.remove('selected');

  currentBtnEl.classList.add('selected')
  setCurrentShowType(newShowType)

  paintTodos();
}
```

onClickShowTodosType()는 현재 클릭된 버튼 요소인 currentBtnElem의 dataset을 사용해 type을 가져옵니다. 이전의 HTML을 작성할 때, 각각의 버튼에 data-type으로 showType을 다음과 같이 지정 해주었습니다.

```html
<div class="button-group">
  <button class="show-all-btn selected" data-type="all">All</button>
  <button class="show-active-btn" data-type="active">Active</button>
  <button class="show-completed-btn" data-type="completed">Completed</button>
</div>
```

이를 이전의 showType 버튼에 'selected' 클래스 네임을 제거해주고, 새로운 showType 버튼에 'selected' 클래스 네임을 추가 해줍니다. 그리고 setCurrentShowType()함수를 사용하여, currentShowType을 변경해 줍니다. 그 다음, paintTodos()함수를 사용하여 재 렌더링 해주면 됩니다. 하지만, 기존의 paintTodos()함수는 현재 currentShowType에 따라 렌더링하지 않고, 전체 투두리스트를 렌더링합니다. 따라서, 기존 paitTodos()함수를 다음과 같은 형태로 switch-case문을 사용하여 currentShowType에 따라 렌더링 할 수 있도록 변경해주었으며, 실질적으로 각각의 할 일이 렌더링 되는 함수는 paintTodo()함수로 분리해 주었습니다.

```js
const paintTodos = () => {
  todoListEl.innerHTML = "";

  switch (currentShowType) {
    case "all":
      const allTodos = getAllTodos();
      allTodos.forEach((todo) => {
        paintTodo(todo);
      });
      break;
    case "active":
      const activeTodos = getActiveTodos();
      activeTodos.forEach((todo) => {
        paintTodo(todo);
      });
      break;
    case "completed":
      const completedTodos = getCompletedTodos();
      completedTodos.forEach((todo) => {
        paintTodo(todo);
      });
      break;
    default:
      break;
  }
};

const paintTodo = (todo) => {
  const todoItemEl = document.createElement("li");
  todoItemEl.classList.add("todo-item");

  todoItemEl.setAttribute("data-id", todo.id);

  const checkboxEl = document.createElement("div");
  checkboxEl.classList.add("checkbox");
  checkboxEl.addEventListener("click", () => completeTodo(todo.id));

  const todoEl = document.createElement("div");
  todoEl.classList.add("todo");
  todoEl.addEventListener("dblclick", (event) => onDbclickTodo(event, todo.id));
  todoEl.innerText = todo.content;

  const delBtnEl = document.createElement("button");
  delBtnEl.classList.add("delBtn");
  delBtnEl.addEventListener("click", () => deleteTodo(todo.id));
  delBtnEl.innerHTML = "X";

  if (todo.isCompleted) {
    todoItemEl.classList.add("checked");
    checkboxEl.innerText = "✔";
  }

  todoItemEl.appendChild(checkboxEl);
  todoItemEl.appendChild(todoEl);
  todoItemEl.appendChild(delBtnEl);
  todoListEl.appendChild(todoItemEl);
};
```

2.  clearCompletedTodos() 구현

- clearCompletedTodos()의 구현은 todos 배열을 현재 완료되지 않은 할 일 리스트로 변경해 준 후, paintTodos()함수로 투두리스트를 재 렌더링합니다.

```js
const clearCompletedTodos = () => {
  const newTodos = getActiveTodos();
  setTodos(newTodos);
  paintTodos();
};
```

전체 소스코드는 [TodoVanilla-github-jeongeun](https://github.com/frontend-leejeongeun/Project-Todos-Vanilla) 여기서 볼 수 있습니다.
