import Quiz from "./components/Quiz";
import './App.css';

function App() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundColor: '#1e272e' }}>
      <Quiz />
    </div>
  );
}

export default App;