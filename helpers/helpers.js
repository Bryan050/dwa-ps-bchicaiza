const hbs = require("hbs");
const fs = require("fs");

function getData(nameFile) {
  let data = fs.readFileSync("./data/"+nameFile+".json");
  data = JSON.parse(data);
  return data;
}

hbs.registerHelper("getCategorias", () => {
  let categorias = getData("categorias");
  return categorias;
});

hbs.registerHelper("getPlatos", () => {
  let platos = getData("platos");
  return platos;
});
