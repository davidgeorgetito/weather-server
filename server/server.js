const express = require("express");
const app = express();
const bodyParser = require("body-parser");
require("./config/config");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get("/usuario", function(req, res) {
  let salida = {
    nombre: "Johnny Axel",
    edad: 13,
    url: req.url
  };
  res.json("Hello Tecnobrothers");
});

app.post("/usuario", function(req, res) {
  let body = req.body;

  if (body.nombre === undefined) {
    res.status(400).json({ ok: false, mensaje: "el nombre es necesario" });
  } else {
    res.json({ persona: body });
  }
});

app.put("/usuario/:id", function(req, res) {
  let id = req.params.id;
  res.json(`put Usuario ${id}`);
});

app.delete("/usuario", function(req, res) {
  let salida = {
    nombre: "Johnny Axel",
    edad: 20,
    url: req.url
  };
  res.json("Hello Globaltech");
});

app.listen(process.env.PORT, () => {
  console.log(`Escuchando peticiones en el puerto ${process.env.PORT}`);
});
