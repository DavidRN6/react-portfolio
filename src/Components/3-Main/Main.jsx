import { useState } from "react";
import "./main.css";
import { FaLink, FaGithub, FaArrowRight } from "react-icons/fa";

const myProject = [
  {
    id: 1,
    name: "Shopsy",
    category: "react",
    info: "HTML, CSS, JavaScript, React. Responsive on any device. it is important for me to visit website and tell me your opinion",
    image: "Shopsy.png",
    link: "https://davidrn6.github.io/Shopsy/",
    allProjects: true,
  },
  {
    id: 2,
    name: "CRUDS",
    category: "css",
    info: "With this program you can add your products or goods with their price, taxes, discount and count then it gives you the total price for the product.",
    image: "CRUDS.png",
    link: "https://davidrn6.github.io/CRUDS/",
    allProjects: true,
  },
  {
    id: 3,
    name: "Portfolio (old)",
    category: "javascript",
    info: "It is portfolio for me, I have used HTML, CSS and JavaScript. It contains information about me and the projects I have done.",
    image: "Old-Portfolio.png",
    link: "https://davidrn6.github.io/Portfolio/",
    allProjects: true,
  },
  {
    id: 4,
    name: "Iphone",
    category: "javascript",
    info: "Displaying iPhone categories with different phone colors. when you select a specific phone color, the entire website design adapts to match it.",
    image: "Iphone.png",
    link: "https://davidrn6.github.io/Iphone-project/",
    allProjects: true,
  },
  {
    id: 5,
    name: "XO Game",
    category: "javascript",
    info: "Of course, you know this game. A simple game using Javascript, and at the end of the turn, whether someone wins or draw, the page reloads.",
    image: "XO Game.png",
    link: "https://davidrn6.github.io/XO-Game/",
    allProjects: true,
  },
];

function Main() {
  const [isActive, setIsActive] = useState("all");
  const [arr, setArr] = useState(myProject);

  return (
    <main>
      <section className="list">
        <button
          // active class
          className={isActive === "all" ? "active" : null}
          onClick={() => {
            setIsActive("all");
            const newArr = myProject.filter((item) => {
              return item.allProjects === true;
            });

            setArr(newArr);
          }}
        >
          All Projects
        </button>

        <button
          // active class
          className={isActive === "css" ? "active" : null}
          onClick={() => {
            setIsActive("css");
            const newArr = myProject.filter((item) => {
              return item.category === "css";
            });

            setArr(newArr);
          }}
        >
          HTML & CSS
        </button>

        <button
          // active class
          className={isActive === "javascript" ? "active" : null}
          onClick={() => {
            setIsActive("javascript");
            const newArr = myProject.filter((item) => {
              return item.category === "javascript";
            });

            setArr(newArr);
          }}
        >
          JavaScript
        </button>

        <button
          // active class
          className={isActive === "react" ? "active" : null}
          onClick={() => {
            setIsActive("react");
            const newArr = myProject.filter((item) => {
              return item.category === "react";
            });

            setArr(newArr);
          }}
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
