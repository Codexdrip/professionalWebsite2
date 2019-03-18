import React, { Component } from "react";
import laptop from "../myWork/assest/images/laptop.png";
import "../myWork/js/pureJs";

class Header extends Component {
  render() {
    return (
      //<!-- Full Page Image Header with Vertically Centered Content -->
      <header className="masthead">
        <div className="container h-100">
          <div className="row align-items-center">
            <div className="col-12 text-center">
              <img
                id="mastImg"
                className="img-responsive"
                src={laptop}
                alt={""}
              />
              <div className="centered">
                <h3>
                  <a
                    href=""
                    className="typewrite"
                    data-period="2000"
                    data-type='[ "Hi, Im Chris.", "I am Creative.", "I Love Design.", "I Love to Develop." ]'
                  >
                    <span className="wrap" />
                  </a>
                </h3>
              </div>
            </div>
            <div className="col-12 text-center">
              <h1 className="font-weight-light welcome-text">
                Welcome to CodeSplash! Let's take a scroll ;)...
              </h1>
              <br />
              <div id="services" />
              <p>
                I’m a software developer with a specialty in JavaScript and
                Python. My software development career grew from a curiosity of
                wanting to learn about penetration testing. I quickly found
                myself staying up late, reading everything I could to get a
                better understanding of the subject. I soon realized that any
                legit penetration tester was writing their own code to achieve
                the goals they were seeking. Fast forward to today and that
                curiosity has turned into a passion for software development!
              </p>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
