// Función para limpiar los resultados de búsqueda
function clearSearchResults() {
    console.log("Limpiando resultados de búsqueda...");

    // Mostrar todos los elementos h2 y h3
    document.querySelectorAll('.contenido h2, .contenido h3').forEach(function(element) {
        element.style.display = 'block';
    });

    // Ocultar el contador de resultados
    var resultCountSpan = document.getElementById('resultCount');
    resultCountSpan.textContent = '';

    console.log("Resultados de búsqueda limpios.");
}



// Función para filtrar los resultados de búsqueda
function filterResults() {
    var input = document.getElementById('searchInput').value.trim().toLowerCase();
    var h3Elements = document.querySelectorAll('.titulosh3 h3');
    var resultCount = 0;

    // Si el input está vacío, mostrar todos los resultados y salir de la función
    if (input === '') {
        clearSearchResults();
        return;
    }

    // Filtrar los resultados solo si se introduce al menos un carácter en el input
    // Recorrer todos los h3 y mostrar solo los que coincidan con la búsqueda
    h3Elements.forEach(function(h3) {
        var h3Text = h3.textContent.toLowerCase();
        var h2Element = h3.closest('.contenido').querySelector('h2');

        // Verificar si el texto coincide con la búsqueda
        if (h3Text.includes(input)) {
            // Mostrar el h3 coincidente
            h3.style.display = 'block';

            // Incrementar el contador de resultados
            resultCount++;
        } else {
            // Ocultar el h3 si no coincide con la búsqueda
            h3.style.display = 'none';
        }
    });

    // Mostrar u ocultar el h2 asociado dependiendo de si al menos un h3 coincide con la búsqueda
    h3Elements.forEach(function(h3) {
        var h2Element = h3.closest('.contenido').querySelector('h2');
        var hasVisibleH3 = h3.closest('.contenido').querySelector('h3[style="display: block;"]');

        if (hasVisibleH3) {
            h2Element.style.display = 'block';
        } else {
            h2Element.style.display = 'none';
        }
    });

    // Actualizar el contador de resultados
    var resultCountSpan = document.getElementById('resultCount');
    resultCountSpan.textContent = 'Resultados encontrados: ' + resultCount;
}



// Function to handle click on title (h3)
function handleTitleClick(title) {
    // Obtener el párrafo asociado al título
    var paragraph = title.nextElementSibling;

    // Alternar la visibilidad del párrafo al hacer clic en el título
    paragraph.style.display = paragraph.style.display === 'block' ? 'none' : 'block';
}


// Función para manejar la entrada en el input de búsqueda
function handleSearchInput() {
    // Filtrar los resultados de búsqueda solo si se introduce al menos un carácter en el input
    var input = document.getElementById('searchInput').value.trim();
    if (input.length > 0) {
        filterResults();
    } else {
        clearSearchResults();
    }
}

// Agregar manejador de eventos al input de búsqueda para realizar la búsqueda en tiempo real
document.getElementById('searchInput').addEventListener('input', handleSearchInput);

// Agregar manejadores de eventos a todos los títulos h3
document.querySelectorAll('.titulosh3 h3').forEach(function(title) {
    title.addEventListener('click', function() {
        handleTitleClick(this);
    });
});
