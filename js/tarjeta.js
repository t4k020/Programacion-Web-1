import data from "../data/items.json" with { type: 'json' };

document.addEventListener("DOMContentLoaded", function () {

  // Selecciona todos los contenedores que tengan clase "item"
  const items = document.querySelectorAll(".articulo-categoria");

  items.forEach(function (item) {

    const imagen = item.querySelector(".item-valor-portada");

    if (imagen) {
      imagen.addEventListener("click", function () {

        document.querySelector("#modal").style.display = "block";
        document.querySelector("body").style.overflow = "hidden";

        const juego = data.find((juego) => juego.Id === item.id);

        const { Categoria, Id, Nombre, Autor, Portada, Descripcion, Rating } = juego;

        document.querySelector("#item-valor-nombre-modal").innerText = Nombre;
        document.querySelector("#item-valor-autor-modal").innerText = Autor;
        document.querySelector("#item-valor-descripcion-modal").innerText = Descripcion;
        document.querySelector("#item-valor-rating-modal").innerText = Rating;
        document.querySelector("#item-valor-portada-modal").src = Portada;
        document.querySelector("#item-valor-portada-modal").alt = Nombre;

        const personalizados = Object.keys(juego).filter(key => key.startsWith("personalizado_"));

        personalizados.forEach((personalizado, index) => {
          document.querySelector(`#item-campo-personalizado_${index + 1}-modal`).innerText = personalizado.split(".")[1];
          document.querySelector(`#item-valor-personalizado_${index + 1}-modal`).innerText = juego[personalizado];
        });

      });
    }
  });

  document.querySelector("#cerrarPopap").addEventListener("click", function () {
    document.querySelector("#modal").style.display = "none";
    document.querySelector("body").style.overflow = "auto";
  })

});