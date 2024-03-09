import React, { useEffect, useState } from "react";
import Header from './components/1-header/Header'
import Hero from './components/2-hero/Hero'
import Main from './components/3-main/Main'
import Contact from './components/4-contact/Contact'
import Footer from './components/5-footer/Footer'

function App() {
  let [ scroll , setScroll ] = useState(false)
  useEffect(() => {
    window.addEventListener("scroll" , () => {
      if (window.scrollY > 380) setScroll(true);
      else setScroll(false)
    }
    )
  }, [])

  return (
    <div className="App" id="up">

      <Header />
      <Hero />
      <div className="divider" />
      <Main />
      <div className="divider" />
      <Contact />
      <div className="divider" />
      <Footer />
      {scroll && <a href="#up"><button className="icon-keyboard_arrow_up scrollToUp"></button></a>}
    </div>
  );
}

export default App;
