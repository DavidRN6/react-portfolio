import "./footer.css";

function Footer() {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer>
      <ul className="footer-links">
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
          <a href="">Uses</a>
        </li>
      </ul>

      <p>© David Raoof | All Rights Reserved</p>
    </footer>
  );
}

export default Footer;
