import { useEffect, useState } from "react";
import Logo from "../assets/logo.png";

export const Header = () => {
  const [theme, setTheme] = useState( JSON.parse(localStorage.getItem("theme"))||"white");

  useEffect(() => {
    localStorage.setItem("theme",JSON.stringify(theme));
    document.documentElement.classList.remove("white","light", "medium", "dark", "gOne");
    document.documentElement.classList.add(theme);
  }, [theme]);

  return (
    <header>
      <div className="logo">
        <img src={Logo} alt="Taskmate Logo" />
        <span>Taskmate</span>
      </div>
      <div className="themeSelector">
        <span onClick={() => setTheme("white")} className={`white ${theme === "white" ? "active" : ""}`}></span>
        <span onClick={() => setTheme("light")} className={`light ${theme === "light" ? "active" : ""}`}></span>
        <span onClick={() => setTheme("medium")} className={`medium ${theme === "medium" ? "active" : ""}`}></span>
        <span onClick={() => setTheme("dark")} className={`dark ${theme === "dark" ? "active" : ""}`}></span>
        <span onClick={() => setTheme("gOne")} className={`gOne ${theme === "gOne" ? "active" : ""}`}></span>
      </div>
    </header>
  );
};
