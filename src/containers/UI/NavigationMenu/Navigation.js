import React, { Component } from "react";
import "./NavigationMenu.css";

class Navigation extends Component {
  state = {
    open: false
  };

  menuClickHandler = () => {
    this.setState(prevState => {
      return { open: !prevState.open };
    });
  };

  scrollToComponent = className => {
    const element = document.querySelector(`.${className}`);
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  render() {
    let classesMenuBg = "menu-bg";
    let classesMenuBurger = "menu-burger";
    let classesItems = "menu-items";
    let hamburgerText = "☰";
    if (this.state.open) {
      classesMenuBg = "menu-bg fs";
      classesMenuBurger = "menu-burger fs c-white";
      classesItems = "menu-items fs";
      hamburgerText = "✕";
    }
    return (
      <React.Fragment>
        <div className={classesMenuBg}> </div>
        <div className={classesMenuBurger} onClick={this.menuClickHandler}>
          {hamburgerText}
        </div>
        <div className={classesItems} onClick={this.menuClickHandler}>
          <div onClick={() => this.scrollToComponent("main-header")}>
            ABOUT ME
          </div>
          <div onClick={() => this.scrollToComponent("hello__outer")}>
            HELLO
          </div>
          <div onClick={() => this.scrollToComponent("resume__outer")}>
            RESUME
          </div>
          <div onClick={() => this.scrollToComponent("port__outer")}>
            PORTFOLIO
          </div>
          <div onClick={() => this.scrollToComponent("contact__outer")}>
            CONTACT
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Navigation;
