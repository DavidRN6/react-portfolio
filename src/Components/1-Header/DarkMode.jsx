import { useEffect, useState } from "react";
import { FaRegMoon } from "react-icons/fa";
import { MdOutlineLightMode } from "react-icons/md";

function DarkMode() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  }, [theme]);

  return (
    <button
      onClick={() => {
        setTheme(theme === "light" ? "dark" : "light");
      }}
    >
      {theme === "light" ? (
        <span className="icon sun">
          <MdOutlineLightMode />
        </span>
      ) : (
        <span className="icon">
          <FaRegMoon />
        </span>
      )}
    </button>
  );
}

export default DarkMode;
