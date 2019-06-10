import React, { Component } from "react";
import NavigationMenu from "./containers/UI/NavigationMenu/Navigation";
import Header from "./components/Header/Header";
import HelloSection from "./components/Hello/Hello";
import ResumeSection from "./components/Resume/Resume";
import PortfolioSection from "./components/Portfolio/Portfolio";
import ContactSection from "./components/Contact/Contact";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <NavigationMenu />
        <Header />
        <HelloSection />
        <hr />
        <ResumeSection />
        <PortfolioSection />
        <ContactSection />
      </div>
    );
  }
}

export default App;
