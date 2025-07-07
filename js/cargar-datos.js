export function cargarJuegos(data) {
   const seccion = document.querySelector('#seccion-categoria');
   seccion.innerHTML = '';

   data.forEach((item) => {
      const { Categoria, Id, Nombre, Autor, Portada, Descripcion, Rating } = item;

      const personalizados = Object.keys(item).filter(key => key.startsWith("personalizado_"));

      seccion.innerHTML += `
               <article id="${Id}" class="articulo-categoria">
                  <header class="header-articulo">
                     <p class="item-valor-nombre">${Nombre}</p>
                     <p class="item-valor-autor">${Autor}</p>
                     <img class="item-valor-portada" src='${Portada}' alt='Imagen de Portada'>
                     <p class="item-valor-descripcion">${Descripcion}</p>
                     <p class="item-valor-rating">${Rating}</p>
                  </header>
                  <div class="detalle-articulo">
                     <h4 class="item-campo-personalizado_1">${personalizados[0].split(".")[1]}</h4>
                     <p class="item-valor-personalizado_1">${item[personalizados[0]]}</p>
                     <h4 class="item-campo-personalizado_2">${personalizados[1].split(".")[1]}</h4>
                     <p class="item-valor-personalizado_2">${item[personalizados[1]]}2</p>
                     <h4 class="item-campo-personalizado_3">${personalizados[2].split(".")[1]}</h4>
                     <p class="item-valor-personalizado_3">${item[personalizados[2]]}</p>
                     <h4 class="item-campo-personalizado_4">${personalizados[3].split(".")[1]}</h4>
                     <p class="item-valor-personalizado_4">${item[personalizados[3]]}</p>
                     <h4 class="item-campo-personalizado_5">${personalizados[4].split(".")[1]}</h4>
                     <p class="item-valor-personalizado_5">${item[personalizados[4]]}</p>
                  </div>
               </article>
               `
   });
}