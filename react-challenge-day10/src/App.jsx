import Navbar from './components/Navbar';
import './App.css';
import Hero from './components/Hero';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <Navbar />
      <Hero 
        title="Welcome to ReactChallenge"
        subtitle="Build amazing React applications with ease."
        ctaText="Get Started"
      />
      <Footer />
    </div>
  );
}

export default App;