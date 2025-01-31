import { useAuth } from "../hooks/useAuth";
import { useTheme } from "../hooks/useTheme";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const { logout } = useAuth();
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <h1 className="text-lg font-bold">Mi Tienda</h1>
      <div className="flex items-center gap-4">
        <ThemeToggle />
        <button onClick={logout} className="bg-red-500 px-4 py-2 rounded">Cerrar sesión</button>
      </div>
    </nav>
  );
};

export default Navbar;
