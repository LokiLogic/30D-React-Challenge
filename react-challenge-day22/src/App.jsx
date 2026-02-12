import { Route, Routes, NavLink } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';


function App() {
  return (
    <div className="app-container">
      <nav className="nav-bar">

        <div className="brand">Router Village</div>
        <div className="nav-links">
          <NavLink to="/" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>About</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>Contact</NavLink>
          <NavLink to="/products" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>Products</NavLink>
        </div>
      </nav>

      <div className='content'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;