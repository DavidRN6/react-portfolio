import Hero from "./Components/2-Hero/Hero";
import Header from "./Components/1-Header/Header";
import Main from "./Components/3-Main/Main";
import Contact from "./Components/4-Contact/Contact";
import Footer from "./Components/5-Footer/Footer";
import { IoIosArrowUp } from "react-icons/io";

function App() {
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

      <a href="#up">
        <button className="scroll2Top">
          <IoIosArrowUp />
        </button>
      </a>
    </div>
  );
}

export default App;
