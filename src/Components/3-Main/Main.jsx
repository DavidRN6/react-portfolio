import { useState } from "react";
import { myProject } from "./MyProject";
import "./main.css";
import { FaLink, FaGithub, FaArrowRight } from "react-icons/fa";

function Main() {
  const [isActive, setIsActive] = useState("all");
  const [arr, setArr] = useState(myProject);

  //  function Filter
  const handleFilter = (category) => {
    setIsActive(category);

    const newArr = myProject.filter((item) => {
      return item.category === category;
    });

    setArr(newArr);
  };

  return (
    <main>
      <section className="list">
        <button
          // active class
          className={isActive === "all" ? "active" : null}
          // Function All Projects
          onClick={() => {
            setIsActive("all");
            setArr(myProject);
          }}
        >
          All Projects
        </button>

        <button
          // active class
          className={isActive === "css" ? "active" : null}
          // Function Filter
          onClick={() => handleFilter("css")}
        >
          HTML & CSS
        </button>

        <button
          // active class
          className={isActive === "javascript" ? "active" : null}
          // Function Filter
          onClick={() => handleFilter("javascript")}
        >
          JavaScript
        </button>

        <button
          // active class
          className={isActive === "react" ? "active" : null}
          // Function Filter
          onClick={() => handleFilter("react")}
        >
          React
        </button>
      </section>

      <section className="project">
        {arr.map((item) => {
          return (
            <article key={item.id} className="card">
              <img src={item.image} alt="" />

              <div className="box">
                <h1 className="name">{item.name}</h1>
                <p className="info">{item.info}</p>
                <div className="link">
                  <div>
                    <a href={item.link} target="_blank">
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
