export function agregarQuitarFavoritos() {
    let favoritos = [];
    favoritos = localStorage.getItem('favoritos') ? JSON.parse(localStorage.getItem('favoritos')) : [];

    document.querySelectorAll(".ico-fav").forEach((item) => {
        item.addEventListener("click", function (e) {

            console.log("cliekeo el cora")

            const url = e.target.src.split('/');
            const src = url[url.length - 1];

            if (src === 'fav.ico') {
                e.target.src = './assets/img/unfav.ico'

                const id = e.target.closest('article').id;
                favoritos = favoritos.filter((favs) => favs !== id)
                localStorage.setItem('favoritos', JSON.stringify(favoritos))
            } else {
                e.target.src = './assets/img/fav.ico'

                const id = e.target.closest('article').id;
                favoritos.push(id);
                localStorage.setItem('favoritos', JSON.stringify(favoritos))
            }

            console.log('favoritos: ', favoritos)
        })
    })
}