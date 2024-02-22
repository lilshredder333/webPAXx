


// Function to show content by ID
function showContent(id) {
    console.log("Mostrando el contenido con ID:", id);

    // Get the desired content
    var content = document.getElementById(id);

    // Display the content
    content.classList.add('activo');

    // Hide other contents
    var contents = document.querySelectorAll('.contenido:not(#' + id + ')');
    contents.forEach(function (item) {
        item.classList.remove('activo');
    });
}

function filterResults() {
    // Obtener el texto ingresado por el usuario y limpiarlo
    var searchText = document.getElementById('searchInput').value.trim().toLowerCase();
    // Obtener todos los elementos <h3> dentro de la clase 'titulosh3' del contenido activo
    var titles = document.querySelectorAll('.contenido.activo .titulosh3 h3');
    // Variable para verificar si se encontró alguna coincidencia
    var matchFound = false;
    
    // Iterar sobre cada título
    titles.forEach(function (title) {
        // Obtener el texto del título y limpiarlo
        var titleText = title.textContent.trim().toLowerCase();
        
        // Comparar si el texto buscado está presente en el título
        console.log('Comparando con:', titleText);
        if (titleText.includes(searchText)) {
            console.log('Coincidencia encontrada:', titleText);
            // Si se encuentra una coincidencia, marcar como encontrada
            matchFound = true;
        }
    });

    // Mostrar u ocultar el contenido dependiendo de si se encontró alguna coincidencia
    var contenido = document.querySelector('.contenido.activo');
    if (matchFound) {
        contenido.style.display = 'flex';
    } else {
        contenido.style.display = 'none';
    }
}





// Add event listener to search input
document.getElementById('searchInput').addEventListener('input', filterResults);

// Add event listeners to buttons to show content
document.querySelectorAll('#contenedorBotones button').forEach(function (button) {
    button.addEventListener('click', function () {
        var contentId = this.dataset.content;
        showContent(contentId);
    });
});



