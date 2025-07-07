import configuracion from "../config/configuracion.json" with { type: 'json' };
import items from "../data/items.json" with { type: 'json' };
import { cargarJuegos } from './cargar-datos.js';

document.addEventListener("DOMContentLoaded", function () {
    const linksCategorias = document.querySelectorAll("a.tab-categoria");
    const tabCategoria1 = document.getElementById("tab-categoria-1");
    const buscador = document.querySelector('#search')
    let categoriasFiltradas = items;

    linksCategorias.forEach((linkCategoria) => {
        linkCategoria.addEventListener("click", () => {
            categoriasFiltradas = items.filter((item) => item.Categoria === linkCategoria.innerHTML)
            buscador.dispatchEvent(new Event('input'));

            console.log('Filtro categoria: ', categoriasFiltradas)
        });
    });

    buscador.addEventListener('input', (e) => {
        const valor = (buscador.value).toLowerCase();
        const data = categoriasFiltradas.filter((item) => item.Nombre.toLowerCase().includes(valor) || item.Autor.toLowerCase().includes(valor))

        console.log('Filtro buscador: ', data)
        cargarJuegos(data)
    })

    if (configuracion["modo-test-prod"] === "prod") tabCategoria1.click();
});










































