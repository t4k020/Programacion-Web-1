// items es un array que contiene todos los 60 items, con sus correspondientes campos
import items from "../data/items.json" with { type: 'json' };

document.addEventListener("DOMContentLoaded", function () {

  function numeroAleatorio(max) {
    return Math.floor(Math.random() * max);
  }

  function obtener5Aleatorios(array) {
    const seleccionados = new Set();
    while (seleccionados.size < 5) {
      const i = numeroAleatorio(array.length);
      seleccionados.add(i);
    }
    return Array.from(seleccionados).map(i => array[i]);
  }

  const slides = obtener5Aleatorios(items);

  const track = document.querySelector(".carousel-track");
  const dotsContainer = document.querySelector(".carousel-dots");

  // Crear slides
  slides.forEach((item, index) => {
    const li = document.createElement("li");
    li.classList.add("carousel-slide");
    li.innerHTML = `
    <img src="${item.Portada}" alt="${item.Nombre}">
    <h2>${item.Nombre}</h2>
  `;
    track.appendChild(li);

    const dot = document.createElement("button");
    if (index === 0) dot.classList.add("active");
    dotsContainer.appendChild(dot);
  });

  // Navegación
  const slidesDOM = Array.from(document.querySelectorAll(".carousel-slide"));
  const dots = Array.from(document.querySelectorAll(".carousel-dots button"));
  const prevButton = document.querySelector(".carousel-button.prev");
  const nextButton = document.querySelector(".carousel-button.next");
  let currentIndex = 0;

  function updateSlide(index) {
    const width = slidesDOM[0].getBoundingClientRect().width;
    track.style.transform = `translateX(-${width * index}px)`;
    dots.forEach(dot => dot.classList.remove("active"));
    dots[index].classList.add("active");
  }

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      currentIndex = index;
      updateSlide(currentIndex);
    });
  });

  prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
    updateSlide(currentIndex);
  });

  nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlide(currentIndex);
  });

  setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlide(currentIndex);
  }, 5000);

});
