import FAQAccordion from './FAQAccordion';
import './App.css';

function App(){
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'start', minHeight: '100vh', backgroundColor: '#f0f2f5', paddingTop:'50px' }}>
      <FAQAccordion />
    </div>
  );
}

export default App;