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
});