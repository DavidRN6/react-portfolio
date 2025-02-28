import { useState } from "react";
import { myProject } from "./MyProject";
import "./main.css";
import { FaLink, FaGithub, FaArrowRight } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";

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
    <main id="projects">
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
        <AnimatePresence>
          {arr.map((item) => {
          return (
            <motion.article
            
            layout
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1)" }}
            transition={{ duration: 0.5 }}
            key={item.id} className="card">
              <img loading="lazy" src={item.image} alt="" />

              <div className="box">
                <h1 className="name">{item.name}</h1>
                <p className="info">{item.info}</p>
                <div className="link">
                  <div>
                    <a href={item.link} target="_blank">
                      <FaLink />
                    </a>
                    <a href={item.code} target="_blank">
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
            </motion.article>
          );
          })}
        </AnimatePresence>
      </section>
    </main>
  );
}

export default Main;
