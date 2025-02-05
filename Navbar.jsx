import { useAuth } from "../hooks/useAuth";
import { useTheme } from "../hooks/useTheme";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const { logout } = useAuth();

  return (
    <nav className="navbar">
      <h1 className="logo">Mi Tienda</h1>
      <div className="nav-items">
        <ThemeToggle />
        <button onClick={logout} className="logout-btn">Cerrar sesión</button>
      </div>
    </nav>
  );
};

export default Navbar;
