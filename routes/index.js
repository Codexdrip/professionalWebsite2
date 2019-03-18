var express = require("express");
var router = express.Router();
var nodemailer = require("nodemailer");
const creds = require("../bin/creds");
const path = require("path");
const cors = require("cors");

// This grabs the credentials form the creds folder to login into the server
var transport = {
  host: "smtp.gmail.com",
  auth: {
    user: creds.USER,
    pass: creds.PASS
  }
};

var transporter = nodemailer.createTransport(transport);

// if the user and creds are accepted, then success will be logged to the console
transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take messages");
  }
});

// Test the send route
router.get("/send", (req, res, next) => {
  res.send("Send a post to /send!");
});

// enable pre-flight request for POST
router.options("/send", cors());
// Catches the post coming from the react front end
router.post("/send", cors(), (req, res, next) => {
  var name = req.body.name;
  var email = req.body.email;
  var message = req.body.message;
  var content = `name: ${name} \n email: ${email} \n message: ${message} `;
  console.log(content + "from back-end");

  var mail = {
    from: name,
    to: "codedotrunners@gmail.com", //Change to email address that you want to receive messages on
    subject: "New Message from Contact Form",
    text: content
  };

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        msg: "fail"
      });
    } else {
      res.json({
        msg: "success"
      });
    }
  });
});

// Anything that doesn't match the above, send back index.html
router.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname + "/../client/build/index.html"));
});

module.exports = router;
