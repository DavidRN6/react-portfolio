import Header from "./Components/1-Header/Header";
import Hero from "./Components/2-Hero/Hero";
import Main from "./Components/3-Main/Main";
import Contact from "./Components/4-Contact/Contact";
import Footer from "./Components/5-Footer/Footer";
import { IoIosArrowUp } from "react-icons/io";
import { useEffect, useState } from "react";

function App() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
  }, []);

  return (
    <div id="up" className="container">
      <Header />
      <div className="line" />
      <Hero />
      <div className="line" />
      <Main />
      <div className="line" />
      <Contact />
      <div className="line" />
      <Footer />

      <a style={{ opacity: scroll ? 1 : 0, transition: "1s" }} href="#up">
        <button className="scroll2Top">
          <IoIosArrowUp />
        </button>
      </a>
    </div>
  );
}

export default App;
