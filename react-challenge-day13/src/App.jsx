import JokeFetcher from "./components/JokeFetcher";
import './App.css';

function App() {
  return (
    <div style={{display:'flex', justifyContent:'center', alignItems:'center', minHeight:'100vh', backgroundColor:'#a29bfe', overflow:'hidden'}}>
      <JokeFetcher />
    </div>
  );
}

export default App;