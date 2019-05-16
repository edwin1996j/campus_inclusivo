const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hola mundo");
});

app.get("/users", (req, res) => {
  let users = [
    { name: "Jhon", lastName: "Doe", age: 30 },
    { name: "María", lastName: "Sharápova", age: 32 }
  ];
  res.send(users);
});
app.get("/discapacidad", (req, res) => {
  let discapacidad = [
    { iddiscapacidad: "101", nombre: "distrofia muscular ", tipo:"fisica" , idestudiante: "10303"},
     { iddiscapacidad: "203", nombre: "invidente", tipo: "visual" , idestudiante : "10292"},
      { iddiscapacidad: "302", nombre: "sindrome de down", tipo:"cognitiva" , idestudiante : "1012923"}
  ];
  res.send(discapacidad);
});
app.listen(3000, () => {
  console.log("Server on port http://localhost:3000");
});
