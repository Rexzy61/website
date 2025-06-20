import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">Rivals Script</h1>
      <div className="links">
        <Link to="/">Main</Link>
        <Link to="/plans">Plans</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/login" className="login-btn">Login</Link>
      </div>
    </nav>
  );
}