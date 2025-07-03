function mostrarMas() {
  document.getElementByClassName('detalle-articulo').style.display = 'block';
}
document.addEventListener("DOMContentLoaded", function () {
  // Selecciona todos los contenedores que tengan clase "item"
  const items = document.querySelectorAll(".articulo-categoria");

  items.forEach(function (item) {
    const titulo = item.querySelector(".item-valor-nombre");
    const detalle = item.querySelector(".detalle-articulo");

    if (titulo && detalle) {
      titulo.addEventListener("click", function () {
        // Toggle mostrar/ocultar detalle
        if (detalle.style.display === "block") {
          detalle.style.display = "none";
        } else {
          detalle.style.display = "block";
        }
      });
    }
  });
  let darkMode = document.getElementById("darkMode")
  let imagen = document.getElementById("imagen")
  darkMode.addEventListener("click", function(){

     if (document.body.classList.contains("whiteMode")) {
    imagen.src = "./assets/img/logo-en-negro.png";
  } else {
    imagen.src = "./assets/img/logo-en-blanco.png";
  }

  if (darkMode.classList.contains("fa-moon")) {
    darkMode.classList.remove("fa-moon");
    darkMode.classList.add("fa-sun");
  } else {
    darkMode.classList.remove("fa-sun");
    darkMode.classList.add("fa-moon");
  }

  document.body.classList.toggle("whiteMode")
  
  document.getElementById("seccion-categoria").classList.toggle("whiteMode");
  document.getElementById("encabezado-principal").classList.toggle("whiteMode");


  });

 
});



