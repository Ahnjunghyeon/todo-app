import "./App.css";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

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

  return (
    <div className="App">
      {/* 3.  */}
      <TodoItemInputField onSubmit={onSubmit} />
      <TodoItemList
        todoItemList={todoItemList}
        onTodoItemClick={onTodoItemClick}
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
