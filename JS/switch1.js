function mostrarFoto() {
    document.getElementById('popup').style.display = 'flex';
    document.getElementById('imagenAmpliada').src = '../IMG/switch1.png';
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

const explanations = {
    "IEEE 802.3 10BASE-T Ethernet (twisted pair copper)": "Este es un tipo de conexión de red que permite transferir datos a una velocidad de 10 Megabits por segundo (Mbps) utilizando cables de par trenzado de cobre. Es comúnmente utilizado para redes locales de tamaño pequeño o mediano.",
    "IEEE 802.3u 100BASE-TX Fast Ethernet (twisted-pair copper)": "Es una versión más rápida de Ethernet, capaz de transferir datos a una velocidad de 100 Megabits por segundo (Mbps) utilizando cables de par trenzado de cobre. Se utiliza en redes que requieren una mayor velocidad de transferencia de datos.",
    "ANSI/IEEE 802.3 NWay auto-negotiation": "Es una característica que permite a los dispositivos de red negociar automáticamente la mejor configuración de conexión, como la velocidad de conexión y el modo dúplex, para garantizar una comunicación óptima entre ellos.",
    "IEEE 802.3x flow control": "Es una tecnología que regula el flujo de datos en una red para evitar la congestión y la pérdida de paquetes. Ayuda a garantizar una transmisión de datos más eficiente al permitir que los dispositivos de red controlen la velocidad a la que reciben datos.",
    "IEEE 802.3az EEE function": "Esta función permite a los dispositivos de red reducir su consumo de energía al poner en modo de espera las partes no utilizadas de la red durante los períodos de inactividad. Ayuda a ahorrar energía sin comprometer el rendimiento de la red.",
    "IEEE 802.3 10BASE-T": "Es una forma estándar de conexión de red que utiliza cables de par trenzado de cobre y permite transferir datos a una velocidad de 10 Megabits por segundo (Mbps). Es adecuada para redes pequeñas o domésticas.",
    "IEEE 802.3u 100BASE-TX compliance": "Significa que el dispositivo es compatible con el estándar IEEE 802.3u, que permite transferir datos a una velocidad de 100 Megabits por segundo (Mbps) utilizando cables de par trenzado de cobre. Esto asegura la interoperabilidad con otros dispositivos de red.",
    "IEEE 802.3x Flow Control support": "Es una característica que permite controlar el flujo de datos en la red para evitar la congestión y la pérdida de paquetes. Ayuda a garantizar una transmisión de datos más eficiente al regular la velocidad de transferencia de datos entre dispositivos de red.",
    "Fast Ethernet: 100 Mbps Half-Duplex": "Es una forma de conexión de red que permite transferir datos a una velocidad de 100 Megabits por segundo (Mbps) en un solo sentido a la vez. Aunque es más rápido que Ethernet tradicional, no permite la transmisión simultánea en ambos sentidos.",
    "Fast Ethernet: 200 Mbps Full-Duplex": "Es una forma de conexión de red que permite transferir datos a una velocidad de 200 Megabits por segundo (Mbps) en ambos sentidos simultáneamente. Proporciona una mayor velocidad de transferencia de datos que el modo de medio dúplex.",
    "Ethernet: 10 Mbps Half-Duplex": "Es una forma de conexión de red que permite transferir datos a una velocidad de 10 Megabits por segundo (Mbps) en un solo sentido a la vez. Es más lento que Fast Ethernet pero adecuado para redes más pequeñas o domésticas.",
    "Ethernet: 20 Mbps Full-Duplex": "Es una forma de conexión de red que permite transferir datos a una velocidad de 20 Megabits por segundo (Mbps) en ambos sentidos simultáneamente. Proporciona una mayor velocidad de transferencia de datos que el modo de medio dúplex.",
    "148,800 pps for 100 M": "Significa que el conmutador puede procesar hasta 148,800 paquetes por segundo cuando se utiliza una conexión de 100 Megabits por segundo (Mbps). Esto asegura una transferencia rápida y eficiente de datos en la red.",
    "14,880 pps for 10 M": "Significa que el conmutador puede procesar hasta 14,880 paquetes por segundo cuando se utiliza una conexión de 10 Megabits por segundo (Mbps). Esto asegura una transferencia rápida y eficiente de datos en la red.",
    "DES-1016D: 3.2 Gbps switching fabric": "Indica que el conmutador tiene una capacidad de conmutación de 3.2 Gigabits por segundo (Gbps), lo que significa que puede manejar grandes volúmenes de datos de forma eficiente.",
    "DES-1024D: 4.8 Gbps switching fabric": "Indica que el conmutador tiene una capacidad de conmutación de 4.8 Gigabits por segundo (Gbps), lo que significa que puede manejar grandes volúmenes de datos de forma eficiente.",
    "DES-1016D: 16 10/100Mbps Fast Ethernet ports": "Significa que el conmutador tiene 16 puertos Ethernet rápidos que pueden admitir velocidades de conexión de 10/100 Megabits por segundo (Mbps). Estos puertos permiten conectar múltiples dispositivos a la red.",
    "DES-1024D: 24 10/100Mbps Fast Ethernet ports": "Significa que el conmutador tiene 24 puertos Ethernet rápidos que pueden admitir velocidades de conexión de 10/100 Megabits por segundo (Mbps). Estos puertos permiten conectar múltiples dispositivos a la red.",
    "10BASE-T: UTP CAT 3/4/5/5e (100 m max.)": "Es el tipo de cable de red utilizado para conexiones Ethernet de 10 Megabits por segundo (Mbps). Puede ser de diferentes categorías, como CAT 3, CAT 4, CAT 5 o CAT 5e, y tiene una longitud máxima de 100 metros.",
    "10BASE-T: EIA/TIA-586 100-ohm STP (100 m max.)": "Es otro tipo de cable de red utilizado para conexiones Ethernet de 10 Megabits por segundo (Mbps). Es un cable blindado de par trenzado (STP) con una impedancia de 100 ohmios y una longitud máxima de 100 metros.",
    "100BASE-TX: UTP CAT 5/5e (100 m max.)": "Es el tipo de cable de red utilizado para conexiones Ethernet de 100 Megabits por segundo (Mbps). Es un cable sin blindaje de par trenzado (UTP) de categoría CAT 5 o CAT 5e con una longitud máxima de 100 metros.",
    "100BASE-TX: EIA/TIA-568 100-ohm STP (100 m max.)": "Es otro tipo de cable de red utilizado para conexiones Ethernet de 100 Megabits por segundo (Mbps). Es un cable blindado de par trenzado (STP) con una impedancia de 100 ohmios y una longitud máxima de 100 metros.",
    "Auto MDI/MDIX adjustment for all ports": "Es una función que permite a los dispositivos de red ajustar automáticamente su configuración de conexión para adaptarse a diferentes tipos de cables Ethernet, como cable recto o cruzado, sin necesidad de utilizar cables especiales.",
    "Per port: Link/Activity": "Indica si hay una conexión activa en cada puerto del conmutador. La luz de 'Link' se enciende cuando hay una conexión establecida, mientras que la luz de 'Activity' parpadea para indicar la actividad de datos en el puerto.",
    "Per device: Power": "Indica si el dispositivo está encendido o apagado. La luz de 'Power' se enciende cuando el dispositivo está alimentado y funcionando correctamente.",
    "Store-and-forward": "Es un método de conmutación de datos en el que los paquetes de datos se reciben completamente antes de ser reenviados a su destino. Esto ayuda a detectar y corregir errores en los paquetes antes de transmitirlos.",
    "8K entries per device": "Significa que el conmutador puede almacenar hasta 8,000 direcciones MAC en su tabla de direcciones, lo que le permite enviar paquetes de datos a dispositivos específicos en la red de manera eficiente.",
    "Automatic update": "Es una función que permite al conmutador actualizar automáticamente su tabla de direcciones MAC a medida que los dispositivos se conectan o desconectan de la red, asegurando que los paquetes de datos se envíen a los destinos correctos.",
    "Ethernet: 14,880 pps per port": "Significa que el conmutador puede procesar hasta 14,880 paquetes por segundo en cada puerto Ethernet cuando se utiliza una conexión de 10 Megabits por segundo (Mbps).",
    "Fast Ethernet: 148,800 pps per port": "Significa que el conmutador puede procesar hasta 148,800 paquetes por segundo en cada puerto Fast Ethernet cuando se utiliza una conexión de 100 Megabits por segundo (Mbps).",
    "Star": "Es una topología de red en la que todos los dispositivos están conectados a un punto central, como un conmutador o un concentrador. Esta configuración permite una fácil administración y resolución de problemas en la red.",
    "CSMA/CD": "CSMA/CD (Carrier Sense Multiple Access with Collision Detection) es un método de acceso al medio utilizado en Ethernet para evitar colisiones de datos en la red. Los dispositivos escuchan el medio antes de transmitir datos y detectan colisiones si ocurren.",
    "282 x 150 x 44 mm (11.1 x 5.91 x 1.73 inches)": "Son las dimensiones físicas del dispositivo en milímetros (mm) y pulgadas (in). Esto permite conocer el tamaño del dispositivo y planificar su ubicación en el área de trabajo.",
    "DE-1016D: 1.06 kg (2.34 lbs)": "Es el peso del dispositivo en kilogramos (kg) y libras (lbs). Esto proporciona información sobre la portabilidad y la capacidad de montaje del dispositivo.",
    "DES-1024D: 1.14 kg (2.51 lbs)": "Es el peso del dispositivo en kilogramos (kg) y libras (lbs). Esto proporciona información sobre la portabilidad y la capacidad de montaje del dispositivo.",
    "DES-1016D Standard Power Consumption: 0.9 Watts": "Indica la cantidad de energía que consume el dispositivo en modo de funcionamiento estándar, expresada en vatios (W). Esto ayuda a estimar el costo de energía y la eficiencia energética del dispositivo.",
    "DES-1016D Maximum Power Consumption: 2.1 Watts": "Indica la cantidad máxima de energía que puede consumir el dispositivo en situaciones de carga máxima, expresada en vatios (W). Esto ayuda a planificar los requisitos de energía y la capacidad de suministro para el dispositivo.",
    "DES-1024D Standard Power Consumption: 1.17 Watts": "Indica la cantidad de energía que consume el dispositivo en modo de funcionamiento estándar, expresada en vatios (W). Esto ayuda a estimar el costo de energía y la eficiencia energética del dispositivo.",
    "DES-1024D Maximum Power Consumption: 2.8 Watts": "Indica la cantidad máxima de energía que puede consumir el dispositivo en situaciones de carga máxima, expresada en vatios (W). Esto ayuda a planificar los requisitos de energía y la capacidad de suministro para el dispositivo.",
    "DES-1016D Maximum Heat Dissipation: 7.1652 BTU/h": "Es la cantidad máxima de calor que puede disipar el dispositivo por hora, expresada en Unidades Térmicas Británicas por hora (BTU/h). Esto ayuda a entender los requisitos de refrigeración del dispositivo.",
    "DES-1024D Maximum Heat Dissipation: 9.5536 BTU/h": "Es la cantidad máxima de calor que puede disipar el dispositivo por hora, expresada en Unidades Térmicas Británicas por hora (BTU/h). Esto ayuda a entender los requisitos de refrigeración del dispositivo.",
    "DES-1016D: 492,096 hours": "Indica el tiempo promedio entre fallos (MTBF) del dispositivo, es decir, la cantidad de horas que se espera que el dispositivo funcione antes de experimentar una falla. Esto proporciona una medida de la confiabilidad del dispositivo.",
    "DES-1024D: 810,880 hours": "Indica el tiempo promedio entre fallos (MTBF) del dispositivo, es decir, la cantidad de horas que se espera que el dispositivo funcione antes de experimentar una falla. Esto proporciona una medida de la confiabilidad del dispositivo.",
    "Operating: 0 to 40 °C (32 to 104 °F)": "Indica el rango de temperaturas en las que el dispositivo puede operar de manera segura y eficiente. Esto proporciona orientación sobre el entorno adecuado para instalar el dispositivo.",
    "Storage: -10 to 70 °C (14 to 158 °F)": "Indica el rango de temperaturas en las que el dispositivo se puede almacenar de manera segura sin estar en funcionamiento. Esto ayuda a garantizar la integridad y la vida útil del dispositivo durante el almacenamiento.",
    "Operating: 10% to 90% non-condensing": "Indica el rango de humedad relativa en el que el dispositivo puede operar de manera segura y eficiente sin condensación. Esto ayuda a evitar daños por humedad en el dispositivo y en su entorno.",
    "Storage: 5% to 90% non-condensing": "Indica el rango de humedad relativa en el que el dispositivo se puede almacenar de manera segura sin condensación. Esto ayuda a prevenir la corrosión y el deterioro del dispositivo durante el almacenamiento.",
    "CE": "Indica que el dispositivo cumple con los estándares de seguridad y compatibilidad electromagnética (EMC) requeridos para su venta en el Espacio Económico Europeo (EEE). Esto garantiza que el dispositivo no cause interferencias electromagnéticas ni represente riesgos para la salud y la seguridad.",
    "FCC": "Indica que el dispositivo cumple con los estándares de la Comisión Federal de Comunicaciones (FCC) de los Estados Unidos para equipos electrónicos. Esto garantiza que el dispositivo no cause interferencias electromagnéticas y cumpla con los requisitos de seguridad.",
    "ICES-003": "Indica que el dispositivo cumple con los estándares de Interference-Causing Equipment Standard (ICES) de Canadá. Esto garantiza que el dispositivo no cause interferencias electromagnéticas y cumpla con los requisitos de seguridad en Canadá.",
    "BSMI": "Indica que el dispositivo cumple con los estándares de seguridad y compatibilidad electromagnética (EMC) requeridos por la Bureau of Standards, Metrology & Inspection (BSMI) de Taiwán. Esto permite la venta y el uso del dispositivo en Taiwán sin problemas legales o de seguridad.",
    "RCM": "Indica que el dispositivo cumple con los estándares de certificación reguladora (RCM) de Australia y Nueva Zelanda. Esto garantiza que el dispositivo cumpla con los requisitos de seguridad y compatibilidad electromagnética (EMC) en estos países.",
    "CCC": "Indica que el dispositivo cumple con los estándares de certificación obligatoria (CCC) de China. Esto es necesario para vender y utilizar el dispositivo en China y garantiza que cumpla con los requisitos de seguridad y calidad establecidos por el gobierno chino.",
    "VCCI": "Indica que el dispositivo cumple con los estándares de certificación voluntaria de la Informática de Consumo y la Interferencia (VCCI) de Japón. Esto garantiza que el dispositivo no cause interferencias electromagnéticas y cumpla con los estándares de seguridad en Japón.",
    "cUL": "Indica que el dispositivo ha sido certificado por Underwriters Laboratories (UL) para su venta y uso en Canadá y los Estados Unidos. Esto garantiza que el dispositivo cumpla con los estándares de seguridad establecidos por UL.",
    "CB": "Indica que el dispositivo ha sido certificado por el Sistema CB (Certificación de Seguridad Electrotécnica) como seguro y cumpliendo con los estándares de seguridad internacionalmente reconocidos. Esto facilita la aceptación del dispositivo en múltiples mercados internacionales.",
    "LVD": "Indica que el dispositivo cumple con la Directiva de Baja Tensión (LVD) de la Unión Europea, que establece los requisitos de seguridad eléctrica para los equipos eléctricos dentro del mercado europeo. Esto garantiza que el dispositivo sea seguro de usar y esté libre de riesgos eléctricos."
};


// Obtener el contenedor del pop-up
const popUpExplicacion = document.getElementById('popUpExplicacion');

// Obtener el contenido de la explicación
const contenidoExplicacion = document.getElementById('contenidoExplicacion');

// Agregar evento clic a cada elemento <li>
document.querySelectorAll('#miTabla li').forEach(item => {
    item.addEventListener('click', () => {
        // Obtener el texto del primer <li> hijo del elemento clicado
        const elementText = item.textContent.trim();

        // Obtener la explicación correspondiente del objeto 'explanations'
        const explanation = explanations[elementText];

        // Mostrar la explicación en el pop-up
        contenidoExplicacion.textContent = explanation;
        popUpExplicacion.style.display = 'block';
    });
});

// Agregar evento clic al botón de cerrar pop-up
document.getElementById('cerrarPopUp').addEventListener('click', () => {
    popUpExplicacion.style.display = 'none';
});