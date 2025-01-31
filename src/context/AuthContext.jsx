import { createContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem("user")) || null);

  useEffect(() => {
    // Verificar si hay usuarios en localStorage
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    if (existingUsers.length === 0) {
      // Crear usuario por defecto
      const defaultUser = {
        nombre: "Admin",
        apellido: "User",
        email: "admin@example.com",
        password: "admin123",
      };

      localStorage.setItem("users", JSON.stringify([defaultUser]));
      console.log("Usuario por defecto creado:", defaultUser);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);
  const login = (email, password) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const validUser = users.find(u => u.email === email && u.password === password);
    if (validUser) setUser(validUser);
    return validUser;
  };

  const logout = () => setUser(null);

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
};

export default AuthContext;
