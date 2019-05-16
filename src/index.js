const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hola campus inclusvo ");
});

app.get("/estudiante", (req, res) => {
  let estudiante = [
    { idestudiante: "10303", Nombre: "juan ", Apellido:"tenorio" , direccion: "rabo corto", telefono : "39101010"},
   { idestudiante: "10292", Nombre: "yuren ", Apellido:"jaramillo" , direccion: "rabo largo", telefono : "3094u203948"},
{ idestudiante:"1012923", Nombre: "marcela ", Apellido:"florez" , direccion: "rabo medio ", telefono : "47479389327"},
  ];
  res.send(estudiante);
});
app.get("/discapacidad", (req, res) => {
  let discapacidad = [
    { iddiscapacidad: "101", nombre: "distrofia muscular ", tipo:"fisica" , idestudiante: "10303"},
     { iddiscapacidad: "203", nombre: "invidente", tipo: "visual" , idestudiante : "10292"},
      { iddiscapacidad: "302", nombre: "sindrome de down", tipo:"cognitiva" , idestudiante : "1012923"}
  ];
  res.send(discapacidad);
});
app.get("/aula", (req, res) => {
  let aula = [
    { idaula: "101", ubicacion: "segundo piso 201-i", tipo:"tradicional" , iddiscapacidad: "203"},
    { idaula: "102", ubicacion: "primer piso 101-i", tipo:"L.informatica" , iddiscapacidad: "203"},
    { idaula: "103", ubicacion: "tercer piso  301-d", tipo:"L.ingles" , iddiscapacidad: "203"},
  ];
  res.send(aula);
});
app.get("/Hora_clase", (req, res) => {
  let Hora_clases = [
    { idhoraaula: "101", id_programa: "202020", idaula: "101" },
    { idhoraaula: "104", id_programa: "2020202", idaula: "102" },
    { idhoraaula: "104", id_programa: "202020", idaula: "103"}
  ];
  res.send(Hora_clase);
});

app.get("/programa", (req, res) => {
  let programa = [
    { id_programa: "202020", nombre: "licenciatura en informatica "},
    {id_programa: "2020202", nombre: "licencciatura en ingles"},
   {id_programa: "202020", nombre: "licenciatura en informarica"}
  ];
  res.send(programa);
});

app.get("/facultad", (req, res) => {
  let facultad = [
    { id_facultad: "202020", nombre: "educacion y ciencias humanas"},
    { id_facultad: "202020", nombre: "medicina veterinaria y zootecnica"},
   {id_programa: "202020", nombre: "juridica y economia"}
  ];
  res.send(facultad);
});
app.get("/ubicar", (req, res) => {
  let facultad = [
    { id_facultad: "202020", id_edificio: "202020", id_ubicacion: "202020"},
  { id_facultad: "202020", id_edificio: "202020", id_ubicacion: "202020"},
  { id_facultad: "202020", id_edificio: "202020", id_ubicacion: "202020"}
  ];
  res.send(ubicar);
});

app.get("/edificio", (req, res) => {
  let edificio = [
    { id_edificio: "202020", nombre: "rtrt", direccion: "202020", id_bloque:"50505"},
 { id_edificio: "202020", nombre: "rtrt", direccion: "202020", id_bloque:"50505"},
 { id_edificio: "202020", nombre: "rtrt", direccion: "202020", id_bloque:"50505"}
  ];
  res.send(edificio);
});

app.get("/bloque", (req, res) => {
  let bloque = [
    { id_bloque: "202020", nombre: "rtrt", direccion: "202020" },
     { id_bloque: "202020", nombre: "rtrt", direccion: "202020" },
    { id_bloque: "202020", nombre: "rtrt", direccion: "202020" }
  ];
  res.send(bloque);
});
app.listen(3000, () => {
  console.log("Server on port http://localhost:3000");
});
