function mostrarFoto(nombreSwitch) {
    document.getElementById('popup').style.display = 'flex';
    var rutaImagen = '../IMG/' + nombreSwitch + '.png';
    var imagenes = document.querySelectorAll('[id^="imagenAmpliada"]');
    imagenes.forEach(function (imagen) {
        imagen.src = rutaImagen;
    });
}

function cerrarFoto() {
    document.getElementById('popup').style.display = 'none';
}





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

const caracteristicas = [

    /*DGS-1016S*/
    {
        "Nombre": "16 ports LAN 10/100/1000 Mbps",
        "Explicacion": "Indica que el switch tiene un total de 16 puertos que pueden operar a velocidades de 10, 100 o 1000 megabits por segundo (Mbps), lo que permite la conexión de dispositivos con diferentes velocidades de red."
    },
    {
        "Nombre": "IEEE 802.3 10BASE-T Ethernet (twisted pair copper)",
        "Explicacion": "Esta es una especificación del Instituto de Ingenieros Eléctricos y Electrónicos (IEEE) que define los estándares para Ethernet a 10 Mbps sobre cable de par trenzado (10BASE-T), que es uno de los primeros estándares de Ethernet."
    },
    {
        "Nombre": "IEEE 802.3u 100BASE-TX Fast Ethernet (twisted-pair copper)",
        "Explicacion": "Especificación que define los estándares para Ethernet a 100 Mbps sobre cable de par trenzado (100BASE-TX), proporcionando una mayor velocidad de transmisión en comparación con 10BASE-T."
    },
    {
        "Nombre": "IEEE 802.3ab 1000BASE-T",
        "Explicacion": "Este estándar especifica Ethernet a 1000 Mbps (1 Gbps) sobre cable de par trenzado (1000BASE-T), comúnmente conocido como Gigabit Ethernet, ofreciendo velocidades de transmisión más altas."
    },
    {
        "Nombre": "IEEE 802.3x flow control",
        "Explicacion": "Se refiere al mecanismo de control de flujo definido en el estándar IEEE 802.3x que permite al switch regular el flujo de datos para evitar congestiones en la red, proporcionando una comunicación más eficiente y estable."
    },
    {
        "Nombre": "IEEE 802.1p QoS",
        "Explicacion": "Este estándar proporciona mecanismos de Calidad de Servicio (QoS) para priorizar ciertos tipos de tráfico en la red, permitiendo una mejor gestión de la congestión y una asignación de recursos más eficiente para aplicaciones críticas."
    },
    {
        "Nombre": "IEEE 802.3az Energy Efficient Ethernet (EEE)",
        "Explicacion": "Especificación que define mecanismos para reducir el consumo de energía en dispositivos Ethernet cuando no están transmitiendo datos activamente, lo que ayuda a ahorrar energía en la red."
    },
    {
        "Nombre": "IEEE 802.3 10BASE-T",
        "Explicacion": ""
    },
    {
        "Nombre": "IEEE 802.3u 100BASE-TX compliance",
        "Explicacion": ""
    },
    {
        "Nombre": "IEEE 802.3x Flow Control support",
        "Explicacion": ""
    },
    {
        "Nombre": "Fast Ethernet:",
        "Explicacion": ""
    },
    {
        "Nombre": "100 Mbps Half-Duplex",
        "Explicacion": ""
    },
    {
        "Nombre": "200 Mbps Full-Duplex",
        "Explicacion": ""
    },
    {
        "Nombre": "Ethernet:",
        "Explicacion": ""
    },
    {
        "Nombre": "10 Mbps Half-Duplex",
        "Explicacion": ""
    },
    {
        "Nombre": "20 Mbps Full-Duplex",
        "Explicacion": ""
    },
    {
        "Nombre": "Gigabit Ethernet:",
        "Explicacion": ""
    },
    {
        "Nombre": "2000 Mbps Full-Duplex",
        "Explicacion": ""
    },
    {
        "Nombre": "32 Gbps",
        "Explicacion": "Indica la capacidad total de conmutación del switch, es decir, la cantidad máxima de datos que puede transferir simultáneamente a través de todos sus puertos en un segundo. En este caso, el switch tiene una capacidad de 32 gigabits por segundo (Gbps), lo que determina su rendimiento y capacidad para manejar grandes volúmenes de datos en la red."
    },
    {
        "Nombre": "Auto MDI/MDIX adjustment for all ports",
        "Explicacion": ""
    },
    {
        "Nombre": "Secure store-and-forward switching scheme",
        "Explicacion": ""
    },
    {
        "Nombre": "Full/Half-duplex for Ethernet/Fast Ethernet speeds",
        "Explicacion": ""
    },
    {
        "Nombre": "Supports 9,216 byte jumbo frames",
        "Explicacion": ""
    },
    {
        "Nombre": "Back pressure at half-duplex operation",
        "Explicacion": ""
    },
    {
        "Nombre": "Auto-negotiation for each port",
        "Explicacion": ""
    },
    {
        "Nombre": "Quality of Service (QoS) (8 queues, strict mode)",
        "Explicacion": ""
    },
    {
        "Nombre": "Store-and-forward",
        "Explicacion": ""
    },
    {
        "Nombre": "8K entries per device",
        "Explicacion": ""
    },
    {
        "Nombre": "Ethernet: 14,880 pps per port",
        "Explicacion": ""
    },
    {
        "Nombre": "Fast Ethernet: 148,800 pps per port",
        "Explicacion": ""
    },
    {
        "Nombre": "Gigabit Ethernet: 1,488,000 pps per port",
        "Explicacion": ""
    },
    {
        "Nombre": "Star",
        "Explicacion": ""
    },
    {
        "Nombre": "CSMA/CD",
        "Explicacion": ""
    },
    {
        "Nombre": "282 x 150 x 44 mm (11.1 x 5.91 x 1.73 inches)",
        "Explicacion": ""
    },
    {
        "Nombre": "1.06 kg (2.34 lbs)",
        "Explicacion": ""
    },
    {
        "Nombre": "DES-1024D:1.14 kg (2.51 lbs)",
        "Explicacion": ""
    },
    {
        "Nombre": "",
        "Explicacion": ""
    },
    {
        "Nombre": "",
        "Explicacion": ""
    },
    {
        "Nombre": "",
        "Explicacion": ""
    },
    {
        "Nombre": "",
        "Explicacion": ""
    },
    {
        "Nombre": "",
        "Explicacion": ""
    },
    {
        "Nombre": "",
        "Explicacion": ""
    },
    {
        "Nombre": "",
        "Explicacion": ""
    }
]

// Obtener el contenedor del pop-up
const popUpExplicacion = document.getElementById('popUpExplicacion');

// Agregar evento clic a cada elemento <li>
document.querySelectorAll('#miTabla li').forEach(item => {
    item.addEventListener('click', () => {
        // Obtener el texto del primer <li> hijo del elemento clicado
        const elementText = item.textContent.trim();

        // Buscar la característica correspondiente
        const caracteristica = caracteristicas.find(caract => caract.Nombre === elementText);

        // Verificar si se encontró la característica
        if (caracteristica) {
            // Crear elementos para el nombre y la explicación
            const nombreElement = document.createElement('div');
            const explicacionElement = document.createElement('div');

            // Asignar IDs únicos a los elementos
            nombreElement.id = 'nombre';
            explicacionElement.id = 'explicacion';

            // Asignar contenido a los elementos
            nombreElement.textContent = caracteristica.Nombre;
            explicacionElement.textContent = caracteristica.Explicacion;

            // Limpiar contenido previo del pop-up
            popUpExplicacion.innerHTML = '';

            // Agregar los elementos al pop-up
            popUpExplicacion.appendChild(nombreElement);
            popUpExplicacion.appendChild(explicacionElement);

            // Crear y agregar botón de cerrar
            const closeButton = document.createElement('button');
            closeButton.textContent = 'X';
            closeButton.id = 'cerrarPopUp';
            closeButton.addEventListener('click', () => {
                popUpExplicacion.style.display = 'none';
            });
            popUpExplicacion.appendChild(closeButton);

            // Mostrar el pop-up
            popUpExplicacion.style.display = 'block';
        }
    });
});
