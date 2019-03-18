import React, { Component } from "react";
import Header from "./components/header";
import Nav from "./components/nav";
import About from "./components/about";
import Services from "./components/services";
import Clients from "./components/clients";
import Contact from "./components/contact";
import "./myWork/css/masterStyles.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Header />
        <Services />
        <About />
        <Clients />
        <Contact />
      </div>
    );
  }
}

export default App;
