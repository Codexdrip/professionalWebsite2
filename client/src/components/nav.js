import React, { Component } from "react";

class Nav extends Component {
  state = {
    isTop: true,
    addClass: true
  };

  componentDidMount() {
    document.addEventListener("scroll", () => {
      const isTop = window.scrollY < 500;
      if (isTop !== this.state.addClass) {
        this.setState({ addClass: isTop });
      }
    });
  }

  render() {
    let start =
      "navbar navbar-expand-lg navbar-light bg-lignt ml-auto shadow fixed-top nav-start";
    let finish =
      "navbar navbar-expand-lg navbar-light bg-lignt ml-auto shadow fixed-top nav-finish";

    return (
      // Navigation -->
      <nav className={this.state.addClass ? start : finish}>
        <div className="container">
          <a className="navbar-brand" href="#">
            <span>&lt;CodeSplash/&gt;</span>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  HOME
                  <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services">
                  SERVICES
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  ABOUT
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#clients">
                  CLIENTS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact-form">
                  LET'S TALK
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
