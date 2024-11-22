import "./header.css";
import { useState } from "react";
import { FaRegMoon } from "react-icons/fa";
import { IoCloseSharp, IoMenu } from "react-icons/io5";

function Header() {

  const [showModal, setShowModal] = useState(false);

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
            <a href="">Articles</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">Speaking</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </nav>

      <button >
        <span className="icon">
        <FaRegMoon />
        </span>
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
              <a href="">Articles</a>
            </li>
            <li>
              <a href="">Projects</a>
            </li>
            <li>
              <a href="">Speaking</a>
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
