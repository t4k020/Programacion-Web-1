document.addEventListener("DOMContentLoaded", function () {
    let darkMode = document.getElementById("darkMode")
    let imagen = document.getElementById("imagen")
    let datosPersonales = document.getElementById("cdp")
    let login = document.getElementById("login")
    let categoria = document.getElementById("seccion-categoria")

    darkMode.addEventListener("click", function () {

        if (document.body.classList.contains("whiteMode")) {
            imagen.src = "../assets/img/logo-en-negro.png";
        } else {
            imagen.src = "../assets/img/logo-en-blanco.png";
        }

        if (darkMode.classList.contains("fa-moon")) {
            darkMode.classList.remove("fa-moon");
            darkMode.classList.add("fa-sun");
        } else {
            darkMode.classList.remove("fa-sun");
            darkMode.classList.add("fa-moon");
        }

        document.body.classList.toggle("whiteMode")
        document.getElementById("encabezado-principal").classList.toggle("whiteMode");
        if (datosPersonales) {
            datosPersonales.classList.toggle("whiteModes")
        }
        if (login) {
            login.classList.toggle("whiteModes")
        }
        if (categoria) {
            categoria.classList.toggle("whiteMode")
        }

    });
});
