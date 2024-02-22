function muestra(id) {
    // Obtener el contenido deseado
    var contenido = document.getElementById(id);

    // Si el contenido ya está visible, ocultarlo
    if (contenido.classList.contains('activo')) {
        contenido.classList.remove('activo');
    } else {
        // Si no está visible, primero ocultar todos los elementos con clase "contenido"
        var contenidos = document.getElementsByClassName('contenido');
        for (var i = 0; i < contenidos.length; i++) {
            contenidos[i].classList.remove('activo');
        }
        // Luego mostrar el contenido deseado
        contenido.classList.add('activo');
    }
}

function definicion() {
    let defHojaTecnica = document.getElementById('defHojaTec')

    if (defHojaTecnica.style.display === 'none') {
        defHojaTecnica.style.display = 'flex'
    } else {
        defHojaTecnica.style.display = 'none'
    }
}

/* navbar */
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const navbar = document.querySelector('.navbar');

    menuToggle.addEventListener('click', function () {
        menuToggle.classList.toggle('active');
        navbar.classList.toggle('active');
    });
});


const tabs = document.querySelector(".wrapper");
const tabButtons = document.querySelectorAll(".tab-button");
const contents = document.querySelectorAll(".content");

tabButtons.forEach(button => {
    button.addEventListener("click", () => {
        // Obtener el ID de la pestaña asociado al botón
        const id = button.dataset.id;
        
        // Remover la clase "active" de todos los botones de pestañas
        tabButtons.forEach(btn => {
            btn.classList.remove("active");
        });
        
        // Agregar la clase "active" al botón de pestaña actual
        button.classList.add("active");

        // Remover la clase "active" de todos los contenidos de pestañas
        contents.forEach(content => {
            content.classList.remove("active");
        });
        
        // Agregar la clase "active" al contenido de pestaña correspondiente al botón
        const element = document.getElementById(id);
        if (element) {
            element.classList.add("active");
        }
    });
});
