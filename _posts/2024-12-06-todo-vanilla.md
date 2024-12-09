---
title: To Do - Vanilla Javascript
author: jeongeun
date: 2024-12-06 ~
categories: [vanilla javascript, html, css]
tags: [writing]
render_with_liquid: false
---

바닐라 자바스크립트를 이용해 todo-list를 만들어 보았습니다.
투두리스트의 동작방식은 [TodoMVC](https://todomvc.com/examples/javascript-es6/dist/)와 같이 동작하도록 개발하였으며, 다음과 같은 형태입니다.

   ![Desktop View](../assets/img/todo1.png){: width="700" height="400" }

## 기능 정의하기
 ![Desktop View](../assets/img/todo2.png){: width="700" height="400" }
 
 1. 전체 선택
   - Section전체 완료되지 않음 상태 일 때는 회색으로 표시
   - 전체 완료된 상태는 초록색으로 표시
   - 해당 버튼을 누르면 모든 할 일이 완료된 상태로 바뀜
   - 이미 모두 완료된 상태일 때, 누르면 전체 할 일 리스트가 완료되지 않은 상태로 변함

 2. 할 일 입력 
   - 사용자로부터 입력을 받음
   - Enter Key를 누르면 할 일이 추가됨
   - 할 일이 추가된 이후, 입력창의 value를 초기화

 3. 체크박스
   - 완료된 일이면, 체크표시
   - 해당 버튼을 누를 시, 할 일의 완료상태(isCompleted) 값을 토글 시킨다.

 4. 할 일 내용
   - 할 일 내용이 표시됨
   - 완료된 일이면 이태리체, 회색, 가운데선으로 표시
   - 마우스로 더블 클릭 시, 할 일 내용을 수정할 수 있음

 5. 할 일 삭제
   - 해당 할 일을 투두리스트에서 삭제함

 6. 완료되지 않은 할 일 개수 표시
   - 완료되지 않은 할 일(Active)의 개수를 표시한다.

 7. All 버튼
   - 투두리스트의 모든 할 일을 보여준다.

 8. Active 버튼
   - 투두리스트에서 아직 완료되지 않은 일을 보여준다.

 9. Clear Completed 버튼
   - 완료된 일을 투두리스트에서 삭제한다.

## HTML과 CSS 적용하기
먼저 [reset.css](https://meyerweb.com/eric/tools/css/reset/)를 적용해 주었습니다.
reset.css는 브라우저 간의 스타일 불일치를 해소하는 크로스브라우징 작업을 목적으로 기본적으로 설정되어있는 브라우저 스타일 설정이 개발하는데 불편을 주기 떄문에 reset.css를 통해 이미 설정되어 있는 스타일을 적용하여 리셋 후 개발하였습니다. 

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
{: file='index.html'}

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
{: file='reset.css'}

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
{: file='style.css'}