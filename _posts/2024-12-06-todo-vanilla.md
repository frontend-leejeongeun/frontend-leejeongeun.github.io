---
title: To Do - Vanilla Javascript
author: jeongeun
date: 2024-12-06 ~
categories: [Vanilla javascript, html, css]
tags: [writing]
render_with_liquid: false
---

바닐라 자바스크립트를 이용해 todo-ist를 만들어 보았습니다.
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