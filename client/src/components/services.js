import React, { Component } from "react";
import web from "../myWork/assest/images/web.gif";
import automation from "../myWork/assest/images/automation.gif";
import "../myWork/css/masterStyles.css";

class Services extends Component {
  render() {
    return (
      //<!---Design & Develop https://cdn.pixabay.com/photo/2017/06/30/20/05/electronics-2459502_640.png-->

      <section className="container services h-80">
        <div className="row align-items-start">
          <div className="col">
            <h3>SERVICES</h3>
          </div>
          <br />
        </div>
        <div className="row align-items-start">
          <div className="col col-2 ">
            <img id="design" className="img-responsive" src={web} alt="" />
          </div>
          <div className="col text-hide">hidden</div>
          <div className="col text-hide">hidden</div>
        </div>
        <div className="row align-items-center">
          <div className="col">
            <div className="col-2">
              <h3 className="">Design & Development</h3>
            </div>
            <br />
            <div className="col">
              <p>
                I spend day and night designing and developing all sorts of
                digital products — from websites to fullstack web and mobile
                apps, among others — that are loyal to both your business
                objectives and your users’ needs.
              </p>
            </div>
          </div>
        </div>
        <div className="row align-items-start">
          <div className="col text-hide">hidden</div>
          <div className="col text-hide">hidden</div>
          <div className="col col-12">
            <img
              id="automation"
              className="img-responsive float-right"
              src={automation}
              alt=""
            />
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col col-12 ">
            <h3 className="float-right">Automation</h3>
            <br />
            <div className="col col-12">
              <p id="about" className="float-right">
                Commercial and open source software have a "last mile" problem:
                that they don't automate every conceivable task. There are still
                computing chores that require a lot of repetitive (and fairly
                mindless) typing and clicking. Even if you have an intern to
                push these tasks on, they're tasks that require a human because
                there's no software to automate it. These tasks are too
                small-scale or specific to your organization's workflow for it
                to be economical for a software company to create a custom
                solution. This is where I can save the day. With a little bit of
                coding magic I can write scripts to do these tasks and save your
                business hours (or weeks or months) of effort.
              </p>
            </div>
          </div>
        </div>
        <br />
        <br />
      </section>
    );
  }
}

export default Services;
