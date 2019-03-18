import React, { Component } from "react";
import axios from "axios";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    const _name = this.state.name;
    const _email = this.state.email;
    const _message = this.state.message;
    console.log("about to send from front end");
    axios
      .post("http://localhost:5000/send", {
        name: _name,
        email: _email,
        message: _message
      })
      .then(response => {
        if (response.data.msg === "success") {
          alert("Message Sent.");
          this.setState({
            name: "",
            email: "",
            message: ""
          });
        } else if (response.data.msg === "fail") {
          alert("Message failed to send.");
        }
        console.log("completed cycle!");
      });
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  render() {
    return (
      <section>
        <div className="row">
          <div className="col-12">
            <h3 className="text-center">Let's talk business!</h3>
            <form id="contact-form" onSubmit={this.handleSubmit} method="POST">
              <div className="form-group">
                <label for="name">Your Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  onChange={this.handleChange}
                  value={this.state.name}
                />
              </div>
              <div className="form-group">
                <label for="exampleInputEmail1">Your Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                  onChange={this.handleChange}
                  value={this.state.email}
                />
              </div>
              <div className="form-group">
                <label for="message">Your Message</label>
                <textarea
                  className="form-control"
                  rows="5"
                  id="message"
                  placeholder="Let me know how I can help!  "
                  onChange={this.handleChange}
                  value={this.state.message}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
            <a href="mailto:codedotrunners@gmail.com">
              <i class="far fa-envelope" />
            </a>
            &nbsp; Shoot me an email at
            <a href="mailto:codedotrunners@gmail.com">
              &nbsp;codedotrunners@gmail.com
            </a>
            <br />
            <a href="https://www.linkedin.com/in/chris-hobdy">
              <i class="fab fa-linkedin" />
            </a>
            &nbsp; Catch me on
            <a href="https://www.linkedin.com/in/chris-hobdy">&nbsp;Linkedin</a>
            <br />
            <a href="https://github.com/CRFullStack">
              <i class="fab fa-github" />
            </a>
            &nbsp; Find me on
            <a href="https://github.com/CRFullStack">&nbsp;Github</a>
            <br />
            <a href="https://gist.github.com/CRFullStack">
              <i class="fab fa-github-alt" />
            </a>
            &nbsp; View my
            <a href="https://gist.github.com/CRFullStack">&nbsp;Github-Gist</a>
            <br />
            <i class="fas fa-map-marker-alt size:5x" /> &nbsp; Atlanta Ga 30030,
            USA.
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
