import "./header.css";
import { useEffect, useState } from "react";
import { FaRegMoon } from "react-icons/fa";
import { IoCloseSharp, IoMenu } from "react-icons/io5";
import { MdOutlineLightMode } from "react-icons/md";

function Header() {
  const [showModal, setShowModal] = useState(false);
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
    <header className="flex">
      <button
        onClick={() => {
          setShowModal(true);
        }}
        className="menu"
      >
        <span className="icon">
          <IoMenu />
        </span>
      </button>

      <div />

      <nav>
        <ul className="items">
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">Skills</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </nav>

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

      {showModal && (
        <div className="pop">
          <ul className="modal">
            <li>
              <button
                className="close"
                onClick={() => {
                  setShowModal(false);
                }}
              >
                <span>
                  <IoCloseSharp />
                </span>
              </button>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Projects</a>
            </li>
            <li>
              <a href="">Skills</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
