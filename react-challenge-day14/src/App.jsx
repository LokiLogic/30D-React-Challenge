import UserSearch from "./components/UserSearch";
import './App.css';

function App() {
  return (
    <div style={{display:'flex', justifyContent:'center', alignItems:'center',
      minHeight:'100vh',backgroundColor:'#dfe6e9'
    }}>
      <UserSearch />
    </div>
  );
}

export default App;