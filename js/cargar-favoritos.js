import data from "../data/items.json" with { type: 'json' };
import { iniciarFavoritos } from './agregar-quitar-favoritos.js';


// REPLANTEAR CODIGO DE VUELTA PARA LA PAGINA DE FAVORITOS


document.addEventListener("DOMContentLoaded", function () {


    let favoritos = [];
    favoritos = localStorage.getItem('favoritos') ? JSON.parse(localStorage.getItem('favoritos')) : [];

    // console.log(favoritos)

    const contenedor = document.querySelector('#seccion-categoria');
    let linksCategorias = document.querySelectorAll("a.tab-categoria");

    linksCategorias.forEach((linkCategoria) => {
        linkCategoria.addEventListener("click", async () => {
            contenedor.innerHTML = ''
            favoritos.forEach(item => {

                const itemData = data.find((itemData) => itemData.Id === item);
                if (!itemData) throw new Error(`No se escontro en la bbdd el item: ${item}.`);

                if (linkCategoria.innerText != itemData.Categoria) return;

                const personalizados = Object.keys(itemData).filter(key => key.startsWith("personalizado_"));

                contenedor.innerHTML += `
                                     <article id="${itemData.Id}" class="articulo-categoria item01">
                    
                                        <header class="header-articulo">
                                           <p class="item-valor-nombre">${itemData.Nombre}</p>
                                           <p class="item-valor-autor">${itemData.Autor}</p>
                                           <img class="item-valor-portada" src='${itemData.Portada}' alt='Imagen de Portada'>
                                           <p class="item-valor-descripcion">${itemData.Descripcion}</p>
                                           <p class="item-valor-rating">${itemData.Rating}</p>
                                        </header>
                    
                                        <div class="detalle-articulo">
                                           <h4 class="item-campo-personalizado_1">${personalizados[0].split(".")[1]}</h4>
                                           <p class="item-valor-personalizado_1">${personalizados[0]}</p>
                    
                                           <h4 class="item-campo-personalizado_2">${personalizados[1].split(".")[1]}</h4>
                                           <p class="item-valor-personalizado_2">${personalizados[1]}</p>
                    
                                           <h4 class="item-campo-personalizado_3">${personalizados[2].split(".")[1]}</h4>
                                           <p class="item-valor-personalizado_3">${personalizados[2]}</p>
                                           
                                           <h4 class="item-campo-personalizado_4">${personalizados[3].split(".")[1]}</h4>
                                           <p class="item-valor-personalizado_4">${personalizados[3]}</p>
                    
                                           <h4 class="item-campo-personalizado_5">${personalizados[4].split(".")[1]}</h4>
                                           <p class="item-valor-personalizado_5">${personalizados[4]}</p>
                                        </div>
                    
                                     </article>`;



            });
            iniciarFavoritos();
        });
    });

    const tabCategoria1 = document.getElementById("tab-categoria-1");
    tabCategoria1.click();

















































})