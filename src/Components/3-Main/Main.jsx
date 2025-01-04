import Data from "./Data";
import "./main.css";
import { FaLink, FaGithub, FaArrowRight } from "react-icons/fa";

function Main() {
  return (
    <main>
      <section className="list">
        <button className="active">All Projects</button>
        <button className="btn">HTML & CSS</button>
        <button className="btn">JavaScript</button>
        <button className="btn">React</button>
      </section>

      <section className="project">
        {Data.map((item) => {
          return (
            <article key={item.id} className="card">
              <img src={item.image} alt="" />

              <div className="box">
                <h1 className="name">{item.name}</h1>
                <p className="info">{item.info}</p>
                <div className="link">
                  <div>
                    <a href="">
                      <FaLink />
                    </a>
                    <a href="">
                      <FaGithub />
                    </a>
                  </div>

                  <a href={item.link} target="_blank" className="arrow">
                    more{" "}
                    <span>
                      <FaArrowRight />
                    </span>
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
}

export default Main;
