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