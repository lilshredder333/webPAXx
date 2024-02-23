// Function to show content by ID
function showContent(id) {
    console.log("Mostrando el contenido con ID:", id);

    // Obtener el contenido deseado
    var content = document.getElementById(id);

    // Toggle activo class
    content.classList.toggle('activo');

    // Mostrar el contenido deseado
    content.style.display = content.classList.contains('activo') ? 'block' : 'none';

    // Ocultar todos los contenidos excepto el deseado
    document.querySelectorAll('.contenido').forEach(function(item) {
        if (item !== content && item.classList.contains('activo')) {
            item.classList.remove('activo');
            item.style.display = 'none';
        }
    });
}

// Function to handle click on title (h3)
function handleTitleClick(title) {
    // Obtener el párrafo asociado al título
    var paragraph = title.nextElementSibling;

    // Alternar la visibilidad del párrafo al hacer clic en el título
    paragraph.style.display = paragraph.style.display === 'block' ? 'none' : 'block';
}

document.addEventListener('DOMContentLoaded', function() {
    // Agregar event listener a todos los títulos h3 dentro de la clase 'titulosh3'
    document.querySelectorAll('.titulosh3 h3').forEach(function(title) {
        title.addEventListener('click', function() {
            // Manejar el clic en el título
            handleTitleClick(this);
        });
    });
});

// Función para filtrar los resultados
function filterResults() {
    var searchText = document.getElementById('searchInput').value.trim().toLowerCase();

    // Si el campo de búsqueda está vacío, ocultar todos los contenidos y reiniciar el contador
    if (searchText === '') {
        document.querySelectorAll('.contenido').forEach(function(content) {
            content.style.display = 'none';
        });
        document.getElementById('resultCount').textContent = ''; // Reiniciar el contador
        return;
    }

    // Iterar sobre los contenidos
    document.querySelectorAll('.contenido').forEach(function(content) {
        var contentMatches = false; // Variable para rastrear si algún hijo del contenido coincide con la búsqueda

        // Iterar sobre los títulos h3 dentro del contenido
        content.querySelectorAll('h3').forEach(function(title) {
            var titleText = title.textContent.trim().toLowerCase();

            // Verificar si el título coincide parcialmente con la búsqueda
            if (titleText.includes(searchText)) {
                contentMatches = true; // Si hay al menos un título que coincide, establecer contentMatches en true
            }

            // Mostrar u ocultar el título según si coincide con la búsqueda
            title.style.display = titleText.includes(searchText) ? 'block' : 'none';
        });

        // Mostrar u ocultar el contenido según si coincide con la búsqueda
        content.style.display = contentMatches ? 'block' : 'none';
    });

    // Mostrar el contador de resultados
    var resultCount = document.querySelectorAll('.contenido[style="display: block;"]').length;
    document.getElementById('resultCount').textContent = 'Resultados encontrados: ' + resultCount;
}

// Agregar evento de escucha al input de búsqueda para realizar la búsqueda en tiempo real
document.getElementById('searchInput').addEventListener('input', filterResults);




// Add event listeners to buttons to show content
document.querySelectorAll('#contenedorBotones button').forEach(function(button) {
    button.addEventListener('click', function() {
        var contentId = this.dataset.content;
        // Mostrar el contenido correspondiente al hacer clic en el botón
        showContent(contentId);
    });
});
