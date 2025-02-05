import { useTheme } from "../hooks/useTheme";
import { useState } from "react";
import "./ThemeToggle.css"; // Importamos los estilos

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const [isDark, setIsDark] = useState(theme === "dark");

  const handleToggle = () => {
    toggleTheme();
    setIsDark((prev) => !prev);
  };

  return (
    <button id="modo" onClick={handleToggle} className={isDark ? "dark-mode" : ""}>
      <span className="circle">{isDark ? "🌙" : "☀️"}</span>
    </button>
  );
};

export default ThemeToggle;
