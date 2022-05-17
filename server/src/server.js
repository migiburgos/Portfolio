const path = require("path");
const fs = require("fs");
const express = require("express");
const cors = require("cors");

const nodemailer = require("nodemailer");
const { getMaxListeners } = require("process");

const app = express();

const PORT = 8080;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "public")));

app.get("/cv", (req, res) => {
  res.sendFile(
    path.join(__dirname, "..", "assets", "CV Jose Miguel Burgos.pdf")
  );
});

app.get("/downloadcv", (req, res) => {
  res.download(
    path.join(__dirname, "..", "assets", "CV Jose Miguel Burgos.pdf")
  );
});

app.post("/sendEmail", async (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;

  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "migidevtest@gmail.com",
      pass: "sxikpnqssxxxydkb",
    },
  });

  let info = await transporter.sendMail({
    from: `${name} <${email}>`, // sender address
    to: "migidevtest@gmail.com", // list of receivers
    subject: `Portfolio Email: ${email}`, // Subject line
    text: message, // plain text body
  });

  console.log("Message sent: %s", info.messageId);

  res.send("Hello");
});

app.use("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
