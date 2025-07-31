import './HeaderComponent.css';
import { Link } from 'react-router-dom';

function HeaderComponent() {
  return (
    <header className="header">
      <h1 className="header-title">Taskify</h1>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/tasks" className="nav-link">Tasks</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default HeaderComponent;
