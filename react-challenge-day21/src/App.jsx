import { Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="app-container">
      <nav className="nav-bar">
        <div className="brand">Router Village</div>
        <div className="nav-links">
          <NavLink to="/" className={({isActive}) => isActive ? 'nav-item active' : 'nav-item'}>Home</NavLink>
          <NavLink to="/about" className={({isActive}) => isActive ? 'nav-item active' : 'nav-item'}>About</NavLink>
          <NavLink to="/contact" className={({isActive}) => isActive ? 'nav-item active' : 'nav-item'}>Contact</NavLink>
        </div>
      </nav>

      <div className='content'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;