import "./header.css";
import { useState } from "react";
import { IoCloseSharp, IoMenu } from "react-icons/io5";
import DarkMode from "./DarkMode";

function Header() {
  const [showModal, setShowModal] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });

    setShowModal(false);
  };

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
            <a onClick={() => scrollToSection("projects")}>Projects</a>
          </li>
          <li>
            <a href="">Skills</a>
          </li>
          <li>
            <a onClick={() => scrollToSection("contact")}>Contact</a>
          </li>
        </ul>
      </nav>

      <DarkMode />

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
              <a onClick={() => scrollToSection("projects")}>Projects</a>
            </li>
            <li>
              <a href="">Skills</a>
            </li>
            <li>
              <a onClick={() => scrollToSection("contact")}>Contact</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
