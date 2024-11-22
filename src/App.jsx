import Hero from "./Components/2-Hero/Hero"
import Header from "./Components/1-Header/Header"
import Main from "./Components/3-Main/Main"
import Contact from "./Components/4-Contact/Contact"
import Footer from "./Components/5-Footer/Footer"


function App() {


  return (
    <div className="container">
      <Header />
      <div className="line" />
      <Hero />
      <div className="line" />
      <Main />
      <div className="line" />
      <Contact />
      <div className="line" />
      <Footer />
    </div>
  )
}

export default App
