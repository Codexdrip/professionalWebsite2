import React, { Component } from "react";
import snoopy from "../myWork/assest/images/snoopy.gif";
import chris from "../myWork/assest/images/chris3.png";

class About extends Component {
  render() {
    return (
      <section className="masthead">
        <div className="container h-80">
          <div className="bg-3 text-center">
            <div className="row align-items-start about">
              <div className="col col-2 ">
                <img src={snoopy} className="img-responsive" alt="My Image" />
              </div>
              <div className="col text-hide">hidden</div>
              <div className="col text-hide">hidden</div>
            </div>
            <div className="row align-items-center about">
              <div className="col text-hide ">hidden /></div>
              <div className="col col-8 me">
                <p>
                  I'm a one man army but at the same time, I'm not your
                  traditional web developer; I'm a collective. I pair my talents
                  with a huge network of world-class professionals of
                  complementary fields to provide you with the best solution for
                  your business. I started off with a vision to create a better
                  life through the power of experience design. More than a
                  handful of years later, that vision is now a mission, and I
                  can genuinely say I have fun with it every day — by scrolling
                  this far, I'm sure you already have a sense of what I mean.
                  But what really leaves me with a twinkle in the eye is seeing
                  my clients and end users get a kick out of working with me.
                  It’s been quite a ride so far. It would be my pleasure to have
                  you aboard.
                </p>
                <img
                  className="rounded-circle img-responsive"
                  src={chris}
                  alt=""
                />
              </div>
              <div className="col text-hide">hidden</div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
      </section>
    );
  }
}

export default About;
