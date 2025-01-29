import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const MainLayout = ({ children }) => {
  const { user, logout } = useAuth();

  return (
    <div className="container">
      <header>
        <nav>
          <ul>
             <li>
              <Link to="/">Inicio</Link>
            </li>
            {!user && (
            <li>
              <Link to="/signin">Signin</Link>
            </li>
            )}
            {!user && (
              <li>
                <Link to="/login">Login</Link>
              </li>
            )}
            {user?.role === "admin" && (
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
            )}
            {user && (
              <li>
                <Link to="/search-flights">Buscar Vuelos</Link>
              </li>
            )}
            {user?.role === "admin" && (
              <li>
                <Link to="/vulnerabilities">Vulnerabilidades</Link>
              </li>
            )}
            {user && (
              <li>
                <button
                  onClick={logout}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  Cerrar Sesión
                </button>
              </li>
            )}
          </ul>
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        <p>&copy; 2025 SafeApp</p>
      </footer>
    </div>
  );
};

export default MainLayout;
