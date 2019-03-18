import React, { Component } from "react";
import output from "../myWork/assest/images/output-onlinepngtools.png";
import logo from "../myWork/assest/images/logo.png";
import ehp from "../myWork/assest/images/ehp.png";
import cfa from "../myWork/assest/images/cfa.png";
import thomp from "../myWork/assest/images/thomp.png";
import soon from "../myWork/assest/images/comingsoon.jpg";

class Clients extends Component {
  render() {
    return (
      <div id="clients">
        <section className="container-fluid clients h-80 bg-3 text-center">
          <br />
          <br />
          <h3>
            I am really grateful to have had the pleasure of working with such a
            diverse type of organizations, from household brands and public
            institutions to startups with a dream to change the world. Here's a
            little bit about them and what we've done together to give you a
            sense of what I can do.
          </h3>
          <br />
          <div className="row">
            <div className="col-sm-3">
              <img src={output} className="img-responsive" alt="Image" />
              <p>
                Developed an iternal tool using Javascript to automate the
                export of data from the fast field form application to an adobe
                PDF form. This helps the engineers cut down the repetitive task
                of filling out forms.
              </p>
            </div>
            <div className="col-sm-3">
              <img src={logo} className="img-responsive" alt="Image" />
              <p>
                Using Greater Givings CMS, I developed the silent auction
                website for Atlanta Classical Academys Annual silent auction. I
                set up the website to collect registration and take payments
                using TLS encryption. I used tools like HTML5, CSS3, &
                Javascript to set up the UI/UX of the site. Not only did I set
                up the website, I also set up the network infrastructure the
                night of the event. With my help, we were able to double the
                proceeds that the school raised the previous year totaling over
                $100,000.
              </p>
            </div>
            <div className="col-sm-3">
              <img src={ehp} className="img-responsive" alt="Image" />
              <p>
                I started my career in software development here. Its also the
                place I honed my SQL skills. I used MSSQL to create new queries
                and make the existing queries more efficent.
              </p>
            </div>
            <div className="col-sm-3">
              <img src={cfa} className="img-responsive" alt="Image" />
              <p>
                Working at Chick-fil-A HELP, I developed all types of scripts
                and web apps using programming languages like: Python,
                Javascript, jQuery, HTML5, CSS3, & Bootstrap just to name a few.
                My task ranged from developing a way to help streamline the
                S.O.P flowcharts using a web app to automating daily task that
                analyst had to use everyday. I worked along side a team of 5 in
                an agile environment while working here.
              </p>
            </div>
          </div>
        </section>

        <section className="container-fluid clients bg-3 text-center">
          <div className="row">
            <div className="col-sm-3">
              <img src={thomp} className="img-responsive" alt="Image" />
              <p>
                Currently working for Thompson Technologies as a contractor for
                Chick-fil-A
              </p>
            </div>
            <div className="col-sm-3">
              <img src={soon} className="img-responsive" alt="Image" />
              <p>New Clients coming soon.</p>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Clients;
