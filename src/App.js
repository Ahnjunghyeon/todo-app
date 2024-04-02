import "./App.css";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-j8rkBZ9eFc7SNzspHT73dkT8MRINADA",
  authDomain: "todo-list-app-d25b4.firebaseapp.com",
  projectId: "todo-list-app-d25b4",
  storageBucket: "todo-list-app-d25b4.appspot.com",
  messagingSenderId: "662415885337",
  appId: "1:662415885337:web:784ef3ef8b7dd47cc2d688",
  measurementId: "G-HT6QKTGT9L",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
//  함수를 정의하는 공간
const TodoItemInputField = (props) => {
  const [input, setInput] = useState("");
  const onSubmit = () => {
    props.onSubmit(input);
    setInput("");
  };
  return (
    <div>
      {/* 1. 텍스트가 입력될 창 만들기. */}
      <TextField
        id="todo-item-input"
        lable="Todo Item"
        variant="outlined"
        value={input}
        // onChange = 바꿔라, e(이벤트)가 일어날때 setInput을 value로
        onChange={(e) => setInput(e.target.value)}
      />
      {/* 2. 입력한 것을 저장할 버튼 생성 */}
      <Button variant="outlined" onClick={onSubmit}>
        Submit
      </Button>
    </div>
  );
};

const TodoItem = (props) => {
  // 체크하면 끝내는 코드
  const style = props.todoItem.isFinished
    ? { textDecoration: "line-through" }
    : {};
  return (
    <li>
      <span style={style} onClick={() => props.onTodoItemClick(props.todoItem)}>
        {props.todoItem.todoItemContent}
      </span>
      <Button
        variant="outlined"
        onClick={() => props.onRemoveClick(props.todoItem)}
      >
        Remove
      </Button>
    </li>
  );
};

// 버튼으로 입력한 내용들이 저장될 컴포넌트
const TodoItemList = (props) => {
  const todoList = props.todoItemList.map((todoItem, index) => {
    return (
      <TodoItem
        key={todoItem.id}
        todoItem={todoItem}
        onTodoItemClick={props.onTodoItemClick}
        onRemoveClick={props.onRemoveClick}
      />
    );
  });
  return (
    <div>
      <ul>{todoList}</ul>
    </div>
  );
};

let todoItemId = 0;

function App() {
  const [todoItemList, setTodoItemList] = useState([]);

  const onSubmit = (newTodoItem) => {
    setTodoItemList([
      ...todoItemList,
      {
        id: todoItemId++,
        todoItemContent: newTodoItem,
        isFinished: false,
      },
    ]);
  };

  //  입력된 값을 map을통해서 리스트로 변환해줌
  const onTodoItemClick = (clickedTodoItem) => {
    setTodoItemList(
      todoItemList.map((todoItem) => {
        if (clickedTodoItem.id === todoItem.id) {
          return {
            id: clickedTodoItem.id,
            todoItemContent: clickedTodoItem.todoItemContent,
            isFinished: !clickedTodoItem.isFinished,
          };
        } else {
          return todoItem;
        }
      })
    );
  };

  // 지우는 함수
  const onRemoveClick = (removedTodoItem) => {
    setTodoItemList(
      todoItemList.filter((todoItem) => {
        return todoItem.id !== removedTodoItem.id;
      })
    );
  };

  return (
    <div className="App">
      {/* 3.  */}
      <TodoItemInputField onSubmit={onSubmit} />
      <TodoItemList
        todoItemList={todoItemList}
        onTodoItemClick={onTodoItemClick}
        // 지우는 코드
        onRemoveClick={onRemoveClick}
      />
    </div>
  );
}

export default App;

// 순서
// git status 로 변동된 점 확인
// git add . 추가
// git commit -m " 실행 명 " 추가
// git pull origin main 깃에 올린 것 받아오기
// git push origin main 깃에 올릴 것 올리기
