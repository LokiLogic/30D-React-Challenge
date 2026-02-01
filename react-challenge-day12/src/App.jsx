import WindowTracker from "./components/WindowTracker";
import './App.css';

function App() {
  return (
    <div style={{display:'flex', justifyContent:'center', alignItems:'center', minHeight:'100vh', backgroundColor:'#a29bfe',overflow:'hidden'}}>
      <WindowTracker />
    </div>
  );
}
export default App;