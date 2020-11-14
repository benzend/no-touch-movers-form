const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const db = mongoose.connection;
db.once("open", (_) => {
  console.log("Database connected: ", url);
});
db.on("error", (err) => {
  console.error("connection error: ", err);
});

const app = express();
const PORT = 5000;
const Info = require("./model");
const { findOne, find, deleteMany } = require("./model");

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

// app.use(bodyParser.urlencoded({ extended = true}));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + "/frontend"));
// app.use(bodyParser.json());

// app.get("/", (req, res) => {});

// db.collection.deleteMany();

app.get("/info", (req, res) => {
  async function getInfos() {
    const infos = await Info.find();
    res.send(infos);
  }
  getInfos();
});

// db.collection.drop();

app.post("/addInfo", (req, res) => {
  async function runCode() {
    const fakeInfo = new Info({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      tel: req.body.tel,
      squrft: req.body.homeSqareFeet,
      startDate: req.body.startDate,
      moveLoc: req.body.moveLocation,
      moveStreet: req.body.moveLocAddress,
      miscItems: req.body.miscellaneous,
      miscDesc: req.body.miscDescribe,
      boxCount: req.body.boxCount,
      ourBoxes: req.body.ourBoxes,
      garage: req.body.garage,
      garageHeavy: req.body.garageHeavy,
      explain: req.body.explain,
    });
    const doc = await fakeInfo.save();
    console.log(doc);
    const transport = nodemailer.createTransport({
      host: "smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "b9201c284da62f",
        pass: "993c5b3c49daa1",
      },
    });

    const mailOptions = {
      from: "1234hteimaj4321@gmail.com",
      to: "hteimaj3@gmail.com",
      subject: "sending email using node",
      text: doc + "",
    };

    transport.sendMail(mailOptions, function (err, info) {
      if (err) {
        console.error(err);
      } else {
        console.log("email sent");
      }
    });
  }
  runCode().catch((err) => {
    console.error(err);
  });
  res.send("Your information was sent!");
});

app.listen(PORT, () => {
  console.log("listening on PORT " + PORT);
});
