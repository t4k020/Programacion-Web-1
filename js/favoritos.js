document.addEventListener("DOMContentLoaded", function () {

    let favoritos = [];
    favoritos = localStorage.getItem('favoritos') ? JSON.parse(localStorage.getItem('favoritos')) : [];
    console.log('favoritos: ', favoritos)

    document.querySelectorAll(".articulo-categoria").forEach((item) => {
        if (favoritos.includes(item.id)) {
            item.insertAdjacentHTML("afterbegin", '<img class="ico-fav" src="../assets/img/fav.ico" alt="agregar/quitar favoritos">');
        } else {
            item.insertAdjacentHTML("afterbegin", '<img class="ico-fav" src="../assets/img/unfav.ico" alt="agregar/quitar favoritos">');
        }
    })

    document.querySelectorAll(".ico-fav").forEach((item) => {
        item.addEventListener("click", function (e) {

            const url = e.target.src.split('/');
            const src = url[url.length - 1];

            if (src === 'fav.ico') {
                e.target.src = '../assets/img/unfav.ico'

                const id = e.target.closest('article').id;
                favoritos = favoritos.filter((favs) => favs !== id)
                localStorage.setItem('favoritos', JSON.stringify(favoritos))
            } else {
                e.target.src = '../assets/img/fav.ico'

                const id = e.target.closest('article').id;
                favoritos.push(id);
                localStorage.setItem('favoritos', JSON.stringify(favoritos))
            }

            console.log('favoritos: ', favoritos)
        })
    })

    const categorias = document.querySelectorAll('.tab-categoria');
    categorias.forEach((categoria) => {
        categoria.addEventListener('click', () => {
            document.querySelectorAll(".ico-fav").forEach((item) => {
                const id = item.closest('article').id;
                if (favoritos.includes(id)) item.src = '../assets/img/fav.ico'
                else item.src = '../assets/img/unfav.ico'

            })
        })
    })

});