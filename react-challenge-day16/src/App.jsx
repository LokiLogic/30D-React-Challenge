import TodoList from "./components/TodoList";
import './App.css';

function App() {
  return (
    <div style={{display:'flex', justifyContent:'center', alignItems:'center',
      minHeight:'100vh',backgroundColor:'#ecf0f1'
    }}>
      <TodoList />
    </div>
  );
}

export default App;