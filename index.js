const express = require("express");
const res = require("express/lib/response");
const hbs = require("hbs");
const app = express();
require("./helpers/helpers");

const port = process.env.PORT || 3000;

app.use(express.static(__dirname +'/public'));
app.set("view engine", "hbs");

hbs.registerPartials(__dirname + "/views/partials");

app.get("/",(req, res)=>{
    res.render('home');
});

app.listen(port, ()=>console.log("Escuchando en el puerto "+port.toString()));