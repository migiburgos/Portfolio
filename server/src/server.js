const path = require("path");
const fs = require("fs");
const express = require("express");
const cors = require("cors");

const app = express();

const PORT = 25565;

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
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

app.use("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
