import React from "react";
import NavBar from "./components/NavBar/NavBar.tsx";
import BurgerMenu from "./components/BurgerMenu/BurgerMenu";
import Main from "./components/Main/Main.tsx";
import About from "./components/About/About.tsx";
import Services from "./components/Services/Services.tsx";
import ContactForm from "./components/ContactForm/ContactForm.tsx";
import Footer from "./components/Footer/Footer.tsx";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <NavBar />
      <BurgerMenu />
      <Main />
      <About />
      <Services />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default App;
