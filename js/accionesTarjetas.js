import data from "../data/items.json" with { type: 'json' };

export function accionesTarjetas() {

  // FUNCIONALIDAD PARA LAS IMAGENES
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



  // FUNCIONALIDAD PARA LOS TITULOS
  items.forEach(function (item) {
    const titulo = item.querySelector(".item-valor-nombre");
    const detalle = item.querySelector(".detalle-articulo");

    if (titulo && detalle) {
      titulo.addEventListener("click", function () {
        if (detalle.style.display === "block") {
          detalle.style.display = "none";
        } else {
          detalle.style.display = "block";
        }
      });
    }
  });
};
export function estrellas(rating) {

	let estrellas = '';
	const fullStar = '<img src="/assets/img/64px-Full_Star_Yellow.svg.png" alt="Estrella llena" class="estrella">';
	let emptyStar = '<img src="/assets/img/64px-Empty_Star.svg.png" alt="Estrella vacía" class="estrella">';



	for (let i = 0; i < rating; i++) {
		estrellas += fullStar;
	}



	for (let i = 0; i < 5 - rating; i++) {
		estrellas += emptyStar;
	}

	return estrellas;
}

