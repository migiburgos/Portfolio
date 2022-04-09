import React from "react";
import { About, Contact, Footer, Header, Projects } from "./containers";
import { Navbar } from "./components";
import "./App.css";

const App = () => {
  return (
    <div>
      <div>
        <Navbar />
        <Header />
      </div>
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
