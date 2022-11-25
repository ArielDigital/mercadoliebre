const express = require("express");

const app = express();

const path = require("path");

app.use(express.static("public"));

app.listen(process.env.PORT || 3001, () => console.log("Servidor corriendo en el 3001"));

app.get("/", (req, res) => {
  res.sendFile(path.resolve("./views/home.html"));
});

app.get("/Loguin", (req, res) => {
  res.sendFile(path.resolve("./views/Loguin.html"));
});

app.get("/Register", (req, res) => {
  res.sendFile(path.resolve("./views/Register.html"));
});


