import "./App.css";

import TextField from "@mui/material/TextField";

const TodoItemInputField = (props) => {
  return (
    <div>
      <TextField />
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
