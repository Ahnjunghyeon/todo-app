import "./App.css";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const TodoItemInputField = (props) => {
  const [input, setInput] = useState("");
  return (
    <div>
      <TextField
        id="todo-item-input"
        lable="Todo Item"
        variant="outlined"
        value={input}
        // onChange = 바꿔라, e(이벤트)가 일어날때 setInput을 value로
        onChange={(e) => setInput(e.target.value)}
      />
      <Button variant="outlined">Submit</Button>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <TodoItemInputField />
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
