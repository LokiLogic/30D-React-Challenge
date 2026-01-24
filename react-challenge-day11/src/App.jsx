import DigitalClock from './components/DigitalClock';
import './App.css';

function App() {
  return (
    <div style={{display:'flex', justifyContent:'center', alignItems:'center',
      minHeight:'100vh',backgroundColor:'#1e272e'
    }}>
      <DigitalClock />
    </div>
  );
}

export default App;