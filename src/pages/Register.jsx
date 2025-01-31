import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({ name: "", email: "", password: "" });

  const handleRegister = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
    navigate("/login");
  };

  return (
    <form onSubmit={handleRegister} className="p-4">
      <input type="text" placeholder="Nombre" value={user.name} onChange={e => setUser({ ...user, name: e.target.value })} required />
      <input type="email" placeholder="Email" value={user.email} onChange={e => setUser({ ...user, email: e.target.value })} required />
      <input type="password" placeholder="Contraseña" value={user.password} onChange={e => setUser({ ...user, password: e.target.value })} required />
      <button type="submit">Registrarse</button>
    </form>
  );
};

export default Register;
