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
        "Nombre": "16 puertos LAN 10/100/1000 Mbps",
        "Explicacion": "Indica que el switch tiene un total de 16 puertos que pueden operar a velocidades de 10, 100 o 1000 megabits por segundo (Mbps), lo que permite la conexión de dispositivos con diferentes velocidades de red."
    },
    {
        "Nombre": "IEEE 802.3 10BASE-T",
        "Explicacion": "Esta es una especificación del Instituto de Ingenieros Eléctricos y Electrónicos (IEEE) que define los estándares para Ethernet a 10 Mbps sobre cable de par trenzado (10BASE-T), que es uno de los primeros estándares de Ethernet."
    },
    {
        "Nombre": "IEEE 802.3u 100BASE-TX",
        "Explicacion": "Especificación que define los estándares para Ethernet a 100 Mbps sobre cable de par trenzado (100BASE-TX), proporcionando una mayor velocidad de transmisión en comparación con 10BASE-T."
    },
    {
        "Nombre": "IEEE 802.3ab 1000BASE-T",
        "Explicacion": "Este estándar especifica Ethernet a 1000 Mbps (1 Gbps) sobre cable de par trenzado (1000BASE-T), comúnmente conocido como Gigabit Ethernet, ofreciendo velocidades de transmisión más altas."
    },
    {
        "Nombre": "Control de flujo IEEE 802.3x",
        "Explicacion": "Se refiere al mecanismo de control de flujo definido en el estándar IEEE 802.3x que permite al switch regular el flujo de datos para evitar congestiones en la red, proporcionando una comunicación más eficiente y estable."
    },
    {
        "Nombre": "IEEE 802.1p QoS",
        "Explicacion": "Este estándar proporciona mecanismos de Calidad de Servicio (QoS) para priorizar ciertos tipos de tráfico en la red, permitiendo una mejor gestión de la congestión y una asignación de recursos más eficiente para aplicaciones críticas."
    },
    {
        "Nombre": "IEEE 802.3az Ethernet de bajo consumo (EEE)",
        "Explicacion": "Especificación que define mecanismos para reducir el consumo de energía en dispositivos Ethernet cuando no están transmitiendo datos activamente, lo que ayuda a ahorrar energía en la red."
    },
    {
        "Nombre": "32 Gbps",
        "Explicacion": "Indica la capacidad total de conmutación del switch, es decir, la cantidad máxima de datos que puede transferir simultáneamente a través de todos sus puertos en un segundo. En este caso, el switch tiene una capacidad de 32 gigabits por segundo (Gbps), lo que determina su rendimiento y capacidad para manejar grandes volúmenes de datos en la red."
    },
    {
        "Nombre": "Crossover MDI/MDIX automático para todos los puertos",
        "Explicacion": "Esta característica permite que los puertos del switch se ajusten automáticamente para admitir tanto conexiones directas (MDI) como cruzadas (MDIX), lo que elimina la necesidad de utilizar cables cruzados o directos específicos al conectar dispositivos."
    },
    {
        "Nombre": "Esquema de almacenamiento y reenvío seguro",
        "Explicacion": "Este es un método de conmutación de paquetes donde los paquetes se reciben completamente antes de ser transmitidos, lo que permite una verificación de errores y una mayor seguridad antes de reenviar los datos hacia su destino."
    },
    {
        "Nombre": "Full/Half-duplex para velocidades Ethernet/Fast Ethernet",
        "Explicacion": "Indica que los puertos del switch pueden operar en modo full-duplex (permitiendo la transmisión y recepción simultáneas) o half-duplex (permitiendo la transmisión o recepción en un momento dado) para velocidades Ethernet y Fast Ethernet."
    },
    {
        "Nombre": "Compatible 9,216 byte jumbo frames",
        "Explicacion": "Este switch es capaz de admitir el envío y recepción de tramas jumbo de hasta 9,216 bytes, lo que puede aumentar la eficiencia y el rendimiento en redes que requieren la transferencia de grandes volúmenes de datos."
    },
    {
        "Nombre": "Back pressure at half-duplex operation",
        "Explicacion": "Se refiere a la técnica de back pressure utilizada en operaciones half-duplex para regular el flujo de datos y evitar la congestión en la red, especialmente útil cuando los dispositivos conectados no son capaces de realizar la negociación de velocidad."
    },
    {
        "Nombre": "Recepción y transmisión a velocidad de cable",
        "Explicacion": "Indica que el switch puede recibir y transmitir datos a la velocidad máxima soportada por el cable y la interfaz de red conectada, garantizando un rendimiento óptimo de la red."
    },
    {
        "Nombre": "Auto-negociación para cada puerto",
        "Explicacion": "Esta función permite que cada puerto del switch negocie automáticamente la mejor configuración de velocidad y dúplex con el dispositivo conectado, asegurando una comunicación óptima y compatible entre los dispositivos."
    },
    {
        "Nombre": "Calidad de servicio QoS (8 colas, modo estricto)",
        "Explicacion": "El switch admite el protocolo de calidad de servicio (QoS) con ocho colas de prioridad, lo que permite priorizar y gestionar el tráfico de red de manera eficiente, utilizando un enfoque de modo estricto para garantizar un rendimiento óptimo según las necesidades de la red."
    },
    {
        "Nombre": "Ethernet",
        "Explicacion": "Es una tecnología estándar de redes de área local (LAN) que define los métodos de cableado y señalización para la transmisión de datos entre dispositivos en una red. Operando principalmente en las capas física y de enlace de datos del modelo OSI, Ethernet utiliza paquetes de datos conocidos como tramas para transmitir información a través de medios de comunicación como cables de cobre o fibra óptica. Su velocidad de transmisión ha evolucionado a lo largo del tiempo, comenzando con velocidades de 10 Mbps y aumentando a través de estándares como Fast Ethernet (100 Mbps) y Gigabit Ethernet (1000 Mbps), permitiendo la comunicación de datos más rápida y eficiente en las redes."
    },
    {
        "Nombre": "10 Mbps (semidúplex)",
        "Explicacion": "Indica la velocidad de transmisión de datos en una red Ethernet operando en modo semidúplex, lo que significa que los dispositivos pueden enviar o recibir datos, pero no simultáneamente, a una velocidad de 10 megabits por segundo (Mbps)."
    },
    {
        "Nombre": "20 Mbps (dúplex completo)",
        "Explicacion": "Esta es la velocidad de transmisión de datos en una red Ethernet operando en modo dúplex completo, donde los dispositivos pueden enviar y recibir datos simultáneamente, alcanzando una velocidad de 20 Mbps."
    },
    {
        "Nombre": "Fast Ethernet",
        "Explicacion": "Se refiere a una versión mejorada de Ethernet que ofrece velocidades de transmisión de datos de hasta 100 Mbps, lo que aumenta significativamente la velocidad en comparación con Ethernet estándar."
    },
    {
        "Nombre": "100 Mbps (semidúplex)",
        "Explicacion": "Indica la velocidad de transmisión de datos en una red Fast Ethernet operando en modo semidúplex, donde los dispositivos pueden enviar o recibir datos a una velocidad de 100 Mbps, pero no simultáneamente."
    },
    {
        "Nombre": "200 Mbps (full-duplex)",
        "Explicacion": "Esta es la velocidad de transmisión de datos en una red Fast Ethernet operando en modo dúplex completo, donde los dispositivos pueden enviar y recibir datos simultáneamente a una velocidad de 200 Mbps."
    },
    {
        "Nombre": "Gigabit Ethernet",
        "Explicacion": "Es una versión de Ethernet que ofrece velocidades de transmisión de datos de hasta 1000 Mbps (1 Gbps), lo que la hace diez veces más rápida que Fast Ethernet."
    },
    {
        "Nombre": "2000 Mbps (full-duplex)",
        "Explicacion": "Indica la velocidad de transmisión de datos en una red Gigabit Ethernet operando en modo dúplex completo, donde los dispositivos pueden enviar y recibir datos simultáneamente a una velocidad de 2000 Mbps."
    },
    {
        "Nombre": "Guardar y enviar",
        "Explicacion": "Es un método de conmutación de paquetes donde los paquetes se reciben completamente antes de ser transmitidos, lo que garantiza una transmisión más segura y confiable de datos."
    },
    {
        "Nombre": "8K entradas",
        "Explicacion": "Se refiere al tamaño de la tabla de direcciones MAC del switch, que puede contener hasta 8000 entradas, lo que permite al switch aprender y almacenar direcciones MAC de dispositivos conectados en la red para un enrutamiento eficiente de los paquetes."
    },
    {
        "Nombre": "Ethernet: 14.880 pps por puerto",
        "Explicacion": "Indica el número máximo de paquetes por segundo (pps) que un puerto Ethernet puede procesar. En este caso, cada puerto puede manejar hasta 14.880 paquetes por segundo."
    },
    {
        "Nombre": "Fast Ethernet: 148.800 pps por puerto",
        "Explicacion": "Esta cifra representa el número máximo de paquetes por segundo (pps) que un puerto Fast Ethernet puede procesar. En este caso, cada puerto puede manejar hasta 148.800 paquetes por segundo."
    },
    {
        "Nombre": "Gigabit Ethernet: 1.488.000 pps por puerto",
        "Explicacion": "Indica el número máximo de paquetes por segundo (pps) que un puerto Gigabit Ethernet puede procesar. En este caso, cada puerto puede manejar hasta 1.488.000 paquetes por segundo."
    },
    {
        "Nombre": "512 KB por dispositivo",
        "Explicacion": "Se refiere a la memoria de almacenamiento disponible para cada dispositivo conectado al switch. Con 512 KB de memoria por dispositivo, se pueden almacenar datos y configuraciones pertinentes para su funcionamiento en la red."
    },
    {
        "Nombre": "Por puerto: Enlace/Actividad/Velocidad",
        "Explicacion": "Esta descripción indica la presencia de luces indicadoras en cada puerto del switch para mostrar el estado de enlace (si está conectado), la actividad de red y la velocidad de conexión."
    },
    {
        "Nombre": "Por dispositivo Alimentación",
        "Explicacion": "Significa que el switch proporciona alimentación eléctrica a los dispositivos conectados a través de los puertos Ethernet, lo que permite la operación de dispositivos que requieren alimentación a través de Ethernet, como teléfonos IP o cámaras de red."
    },
    {
        "Nombre": "Ajuste automático MDI/MDIX para todos los puertos",
        "Explicacion": "Esta función permite que los puertos del switch se configuren automáticamente para admitir tanto conexiones directas (MDI) como cruzadas (MDIX), lo que simplifica la instalación y evita la necesidad de cables específicos."
    },
    {
        "Nombre": "280 x 110 x 25 mm",
        "Explicacion": "Estas dimensiones representan el tamaño físico del switch, especificadas en milímetros (mm) para su longitud, anchura y altura, respectivamente. Esto proporciona información sobre el espacio físico que ocupará el switch en un entorno de red."
    },
    {
        "Nombre": "0,77 kg",
        "Explicacion": "Indica el peso del switch en kilogramos (kg), lo que es útil para determinar su portabilidad y para el montaje en rack, si es necesario."
    },
    {
        "Nombre": "12 V, 1 A",
        "Explicacion": "Estos valores representan los requisitos de alimentación del switch. Necesita una entrada de corriente continua (DC) de 12 voltios (V) con una corriente de 1 amperio (A) para funcionar correctamente."
    },
    {
        "Nombre": "En espera: 3,37 W",
        "Explicacion": "Indica el consumo de energía del switch cuando está en modo de espera, es decir, cuando está encendido pero no está transmitiendo datos activamente. Se mide en vatios (W), lo que es útil para calcular el consumo de energía y los costos asociados."
    },
    {
        "Nombre": "Máximo: 8,89 W",
        "Explicacion": "Representa el consumo máximo de energía del switch cuando está operando a su capacidad máxima, es decir, cuando todos los puertos están transmitiendo datos a la máxima velocidad posible. También se mide en vatios (W) y es importante para dimensionar la fuente de alimentación y calcular los costos de energía."
    },
    {
        "Nombre": "Funcionamiento: 0 a 40 °C",
        "Explicacion": "Estos valores indican el rango de temperatura en el que el switch puede operar de manera segura y eficiente. En este caso, el switch puede funcionar dentro de un rango de temperatura de 0 a 40 grados Celsius."
    },
    {
        "Nombre": "Almacenamiento: -40 a 70 °C",
        "Explicacion": "Representa el rango de temperatura en el que el switch puede almacenarse de forma segura cuando no está en uso. En este caso, el switch puede almacenarse de manera segura en un rango de temperatura que va desde -40 a 70 grados Celsius."
    },
    {
        "Nombre": "Funcionamiento: 10 % a 90 % sin condensación",
        "Explicacion": "Indica el rango de humedad relativa en el que el switch puede funcionar sin problemas, desde un mínimo del 10% hasta un máximo del 90%, sin que se produzca condensación en su interior. La condensación puede afectar negativamente el funcionamiento de los componentes electrónicos."
    },
    {
        "Nombre": "Almacenamiento: 5 % a 95 % sin condensación",
        "Explicacion": "Este valor representa el rango de humedad relativa en el que el switch puede ser almacenado de manera segura, desde un mínimo del 5% hasta un máximo del 95%, sin riesgo de condensación en su interior, lo que podría dañar los componentes."
    },
    {
        "Nombre": "564.658 horas",
        "Explicacion": "Indica la vida útil estimada del switch en horas. Este valor proporciona una medida de la durabilidad y fiabilidad del dispositivo en términos de tiempo de funcionamiento esperado antes de que pueda requerir mantenimiento o reemplazo."
    },
    {
        "Nombre": "30,32 BTU/h",
        "Explicacion": "Representa la cantidad de calor generada por el switch en una hora, medida en unidades térmicas británicas por hora (BTU/h). Esta información es útil para el diseño de sistemas de refrigeración y la gestión del calor en el entorno donde se instalará el switch."
    },
    {
        "Nombre": "CE clase A",
        "Explicacion": "Indica que el switch cumple con los estándares de compatibilidad electromagnética (EMC) de la Unión Europea (CE), clase A. Esto significa que está diseñado para su uso en entornos industriales o comerciales, donde es probable que se encuentre una mayor cantidad de interferencias electromagnéticas."
    },
    {
        "Nombre": "FCC clase A",
        "Explicacion": "Significa que el switch cumple con los estándares de la Comisión Federal de Comunicaciones (FCC) de los Estados Unidos, clase A. Esto indica que el dispositivo está diseñado para su uso en entornos comerciales, industriales o de negocios, donde se espera un nivel más alto de tolerancia a las interferencias electromagnéticas."
    },
    {
        "Nombre": "ICES 003",
        "Explicacion": "Indica que el switch cumple con los estándares del Consejo de Normas de Interferencia Electromagnética de Canadá (ICES) para dispositivos electrónicos. Estos estándares se aplican para garantizar que el dispositivo no cause interferencias perjudiciales en otros equipos electrónicos."
    },
    {
        "Nombre": "RCM",
        "Explicacion": "Se refiere al marcado de conformidad reglamentaria (RCM) que indica que el switch cumple con los estándares de seguridad eléctrica y EMC para su uso en Australia y Nueva Zelanda."
    },
    {
        "Nombre": "LVD",
        "Explicacion": "Hace referencia a la Directiva de Baja Tensión (LVD), que garantiza que el switch cumple con los requisitos de seguridad eléctrica para su comercialización en la Unión Europea."
    }, 

    /* DES-1016D/DES-1024D */

    {
        "Nombre": "IEEE 802.3 10BASE-T Ethernet (twisted pair copper)",
        "Explicacion": "Este es el estándar IEEE que define las especificaciones para Ethernet a 10 Mbps sobre cable de par trenzado (10BASE-T). Utiliza cables de par trenzado de cobre para la transmisión de datos."
    },
    {
        "Nombre": "IEEE 802.3u 100BASE-TX Fast Ethernet (twisted-pair copper)",
        "Explicacion": "Este estándar define las especificaciones para Fast Ethernet a 100 Mbps sobre cable de par trenzado (100BASE-TX). Utiliza cables de par trenzado de cobre para la transmisión de datos a velocidades más altas que el estándar Ethernet tradicional."
    },
    {
        "Nombre": "ANSI/IEEE 802.3 NWay auto-negotiation",
        "Explicacion": "Especificación que define un protocolo de auto-negociación para dispositivos de red, lo que permite que dos dispositivos Ethernet negocien automáticamente la velocidad de conexión más alta y otras configuraciones al establecer una conexión."
    },
    {
        "Nombre": "IEEE 802.3x flow control",
        "Explicacion": "Este estándar define un mecanismo de control de flujo para evitar la congestión en la red. Permite a los dispositivos de red regular el flujo de datos enviando señales de control de flujo cuando la congestión es detectada."
    },
    {
        "Nombre": "IEEE 802.3az EEE function",
        "Explicacion": "Especificación que define la función de Ethernet de baja energía (EEE), que permite que los dispositivos Ethernet reduzcan el consumo de energía al cambiar dinámicamente a modos de bajo consumo cuando la actividad de la red es baja."
    },
    {
        "Nombre": "IEEE 802.3 10BASE-T",
        "Explicacion": "Se refiere al estándar IEEE que define Ethernet a 10 Mbps sobre cable de par trenzado (10BASE-T), que es uno de los primeros estándares de Ethernet."
    },
    {
        "Nombre": "IEEE 802.3u 100BASE-TX compliance",
        "Explicacion": "Indica que el dispositivo cumple con las especificaciones de Fast Ethernet a 100 Mbps sobre cable de par trenzado (100BASE-TX), definidas en el estándar IEEE 802.3u."
    },
    {
        "Nombre": "IEEE 802.3x Flow Control support",
        "Explicacion": "Significa que el dispositivo es compatible con el mecanismo de control de flujo IEEE 802.3x, que ayuda a evitar la congestión en la red regulando el flujo de datos."
    },
    {
        "Nombre": "Fast Ethernet",
        "Explicacion": "Se refiere a una versión mejorada de Ethernet que ofrece velocidades de transmisión de datos de hasta 100 Mbps, lo que la hace diez veces más rápida que Ethernet estándar."
    },
    {
        "Nombre": "100 Mbps Half-Duplex",
        "Explicacion": "Indica la velocidad de transmisión de datos en una red Fast Ethernet operando en modo semidúplex, donde los dispositivos pueden enviar o recibir datos a una velocidad de 100 megabits por segundo (Mbps), pero no simultáneamente."
    },
    {
        "Nombre": "200 Mbps Full-Duplex",
        "Explicacion": "Esta es la velocidad de transmisión de datos en una red Fast Ethernet operando en modo dúplex completo, donde los dispositivos pueden enviar y recibir datos simultáneamente, alcanzando una velocidad de 200 Mbps."
    },
    {
        "Nombre": "Ethernet",
        "Explicacion": "Es una tecnología estándar de redes de área local (LAN) que define los métodos de cableado y señalización para la transmisión de datos entre dispositivos en una red. Tiene una velocidad nominal de 10 Mbps."
    },
    {
        "Nombre": "10 Mbps Half-Duplex",
        "Explicacion": "Indica la velocidad de transmisión de datos en una red Ethernet operando en modo semidúplex, donde los dispositivos pueden enviar o recibir datos a una velocidad de 10 megabits por segundo (Mbps), pero no simultáneamente."
    },
    {
        "Nombre": "20 Mbps Full-Duplex",
        "Explicacion": "Esta es la velocidad de transmisión de datos en una red Ethernet operando en modo dúplex completo, donde los dispositivos pueden enviar y recibir datos simultáneamente, alcanzando una velocidad de 20 Mbps."
    },
    {
        "Nombre": "148,800 pps for 100 M",
        "Explicacion": "Indica el número máximo de paquetes por segundo (pps) que un puerto Fast Ethernet puede procesar cuando está operando a 100 Mbps."
    },
    {
        "Nombre": "14,880 pps for 10 M",
        "Explicacion": "Representa el número máximo de paquetes por segundo (pps) que un puerto Ethernet puede procesar cuando está operando a 10 Mbps."
    },
    {
        "Nombre": "3.2 Gbps switching fabric",
        "Explicacion": "Indica la capacidad de conmutación del switch, es decir, la cantidad máxima de datos que puede transferir entre sus puertos en un segundo. En este caso, el switch tiene una capacidad de conmutación de 3.2 gigabits por segundo (Gbps)."
    },
    {
        "Nombre": "4.8 Gbps switching fabric",
        "Explicacion": "Similar al punto anterior, esta es la capacidad de conmutación del switch, pero en este caso es de 4.8 gigabits por segundo (Gbps), lo que indica una mayor capacidad de procesamiento de datos en comparación con el punto anterior."
    },
    {
        "Nombre": "16 10/100Mbps Fast Ethernet ports",
        "Explicacion": "Significa que el switch tiene un total de 16 puertos Ethernet de velocidad rápida (Fast Ethernet) que pueden operar a velocidades de 10 o 100 megabits por segundo (Mbps), lo que proporciona flexibilidad para la conexión de dispositivos con diferentes velocidades de red."
    },
    {
        "Nombre": "24 10/100Mbps Fast Ethernet ports",
        "Explicacion": "Similar al punto anterior, pero en este caso el switch tiene un total de 24 puertos Ethernet de velocidad rápida (Fast Ethernet)."
    },
    {
        "Nombre": "10BASE-T",
        "Explicacion": "Es una especificación que define Ethernet a 10 Mbps sobre cable de par trenzado (10BASE-T), lo que permite la transmisión de datos a velocidades más bajas en redes locales."
    },
    {
        "Nombre": "UTP CAT 3/4/5/5e (100 m max.)",
        "Explicacion": "Estos son tipos de cables de par trenzado sin blindaje (UTP) que son compatibles con las especificaciones CAT 3, CAT 4, CAT 5 y CAT 5e. Tienen una longitud máxima de 100 metros y son utilizados comúnmente en redes Ethernet."
    },
    {
        "Nombre": "EIA/TIA-586 100-ohm STP (100 m max.)",
        "Explicacion": "Indica cables de par trenzado blindados (STP) que cumplen con las especificaciones de la Asociación de Industrias Electrónicas (EIA) y la Asociación de la Industria de Telecomunicaciones de América (TIA). Tienen una longitud máxima de 100 metros y están diseñados para reducir la interferencia electromagnética en entornos de red."
    },
    {
        "Nombre": "100BASE-TX",
        "Explicacion": "Especificación que define Ethernet a 100 Mbps sobre cable de par trenzado, lo que proporciona una mayor velocidad de transmisión en comparación con 10BASE-T."
    },
    {
        "Nombre": "UTP CAT 5/5e (100 m max.)",
        "Explicacion": "Estos son cables de par trenzado sin blindaje (UTP) que cumplen con las especificaciones CAT 5 y CAT 5e. Tienen una longitud máxima de 100 metros y son adecuados para la transmisión de datos a velocidades de hasta 100 Mbps en redes Ethernet."
    },
    {
        "Nombre": "EIA/TIA-568 100-ohm STP (100 m max.)",
        "Explicacion": "Se refiere a cables de par trenzado blindados (STP) que cumplen con las especificaciones de la EIA y la TIA, con una impedancia de 100 ohmios. Tienen una longitud máxima de 100 metros y están diseñados para reducir la interferencia electromagnética en entornos de red."
    },
    {
        "Nombre": "Auto MDI/MDIX adjustment for all ports",
        "Explicacion": "Esta función permite que todos los puertos del switch ajusten automáticamente su configuración para admitir tanto conexiones directas (MDI) como cruzadas (MDIX), lo que simplifica la instalación y evita la necesidad de utilizar cables específicos."
    },
    {
        "Nombre": "Per port: Link/Activity",
        "Explicacion": "Significa que cada puerto del switch está equipado con indicadores LED que muestran el estado de enlace (si está conectado) y la actividad de red, lo que proporciona una rápida visualización del estado de conexión y la actividad de datos en cada puerto."
    },
    {
        "Nombre": "Per device: Power",
        "Explicacion": "Indica que el switch proporciona energía a los dispositivos conectados a través de sus puertos Ethernet, lo que permite la operación de dispositivos que requieren alimentación a través de Ethernet, como teléfonos IP o cámaras de red."
    },
    {
        "Nombre": "Store-and-forward",
        "Explicacion": "Se refiere a un método de conmutación de paquetes donde los paquetes se reciben completamente antes de ser transmitidos, lo que permite una verificación de errores y una mayor seguridad antes de reenviar los datos hacia su destino."
    },
    {
        "Nombre": "8K entries per device",
        "Explicacion": "Indica el tamaño de la tabla de direcciones MAC del switch, que puede contener hasta 8000 entradas. Esta tabla se utiliza para almacenar las direcciones MAC de los dispositivos conectados a la red, lo que permite al switch aprender y enrutar los paquetes de datos de manera eficiente."
    },
    {
        "Nombre": "Automatic update",
        "Explicacion": "Esta característica permite que la tabla de direcciones MAC del switch se actualice automáticamente a medida que los dispositivos se conectan o desconectan de la red, asegurando una operación continua y una gestión eficiente de la conectividad de la red."
    },
    {
        "Nombre": "14,880 pps per port",
        "Explicacion": "Indica el número máximo de paquetes por segundo (pps) que un puerto del switch puede procesar. En este caso, cada puerto puede manejar hasta 14,880 paquetes por segundo."
    },
    {
        "Nombre": "148,800 pps per port",
        "Explicacion": "Similar al punto anterior, pero este valor representa el número máximo de paquetes por segundo (pps) que un puerto del switch puede procesar a una velocidad más alta."
    },
    {
        "Nombre": "Star",
        "Explicacion": "Se refiere a la topología de red en la que todos los dispositivos están conectados directamente a un centro de distribución (en este caso, el switch), formando una estructura de estrella. Esto permite una fácil administración de la red y un rendimiento confiable."
    },
    {
        "Nombre": "CSMA/CD",
        "Explicacion": "Es el método de acceso al medio utilizado en redes Ethernet para evitar colisiones de datos. CSMA/CD significa Carrier Sense Multiple Access with Collision Detection, lo que indica que los dispositivos verifican si el medio de transmisión está libre antes de enviar datos y, en caso de detectar una colisión, intentan retransmitir los datos."
    },
    {
        "Nombre": "282 x 150 x 44 mm (11.1 x 5.91 x 1.73 inches)",
        "Explicacion": "Estas son las dimensiones físicas del switch, especificadas en milímetros y pulgadas respectivamente, para su longitud, anchura y altura. Proporciona información sobre el tamaño y el espacio físico que ocupará el switch en un entorno de red."
    },
    {
        "Nombre": "1.06 kg (2.34 lbs)",
        "Explicacion": "Indica el peso del switch en kilogramos (kg) y libras (lbs), respectivamente. Esto es útil para determinar la portabilidad del switch y para calcular la carga en estanterías o soportes de montaje."
    },
    {
        "Nombre": "1.14 kg (2.51 lbs)",
        "Explicacion": "Este valor representa el peso máximo del switch. Esto es útil para determinar la portabilidad del switch y para calcular la carga en estanterías o soportes de montaje."
    },
    {
        "Nombre": "Standard Power Consumption: 0.9 Watts",
        "Explicacion": "Indica el consumo de energía estándar del switch, medido en vatios (W), lo que es útil para calcular los costos de energía y dimensionar la fuente de alimentación adecuada."
    },
    {
        "Nombre": "Maximum Power Consumption: 2.1 Watts",
        "Explicacion": "Representa el consumo máximo de energía del switch, medido en vatios (W), lo que es importante para garantizar una alimentación adecuada y evitar sobrecargas en el sistema eléctrico."
    },
    {
        "Nombre": "Standard Power Consumption: 1.17 Watts",
        "Explicacion": "Esto significa que el dispositivo consume aproximadamente 1.17 vatios de energía en condiciones normales de funcionamiento."
    },
    {
        "Nombre": "Maximum Power Consumption: 2.8 Watts",
        "Explicacion": "Indica que el dispositivo puede consumir hasta un máximo de 2.8 vatios de energía cuando está funcionando a plena capacidad o bajo carga máxima."
    },
    {
        "Nombre": "Maximum Heat Dissipation: 7.1652 BTU/h",
        "Explicacion": "Esto indica que el dispositivo es capaz de disipar hasta aproximadamente 7.1652 unidades térmicas británicas por hora (BTU/h) de calor en una situación de funcionamiento máximo."
    },
    {
        "Nombre": "Maximum Heat Dissipation: 9.5536 BTU/h",
        "Explicacion": "Similar al punto anterior, pero con un valor ligeramente mayor, lo que significa que el dispositivo puede disipar hasta aproximadamente 9.5536 BTU/h de calor en condiciones de máxima carga."
    },
    {
        "Nombre": "492,096 hours",
        "Explicacion": "Este valor representa la vida útil estimada del dispositivo en horas, lo que significa que se espera que funcione de manera confiable durante aproximadamente 492,096 horas antes de requerir mantenimiento o reemplazo."
    },
    {
        "Nombre": "810,880 hours",
        "Explicacion": "Similar al punto anterior, pero con una vida útil estimada más larga de aproximadamente 810,880 horas. Esto sugiere una mayor durabilidad y fiabilidad del dispositivo en comparación con el valor anterior."
    },
    {
        "Nombre": "Operating: 0 to 40 °C (32 to 104 °F)",
        "Explicacion": "Indica que el dispositivo puede operar de manera segura en un rango de temperatura que va desde 0°C hasta 40°C (32°F hasta 104°F). Esto proporciona información sobre las condiciones de temperatura adecuadas para el funcionamiento del dispositivo."
    },
    {
        "Nombre": "Storage: -10 to 70 °C (14 to 158 °F)",
        "Explicacion": "Representa el rango de temperatura en el que el dispositivo puede ser almacenado de manera segura, desde -10°C hasta 70°C (14°F hasta 158°F). Esto es importante para garantizar la integridad y el rendimiento del dispositivo cuando no está en uso."
    },
    {
        "Nombre": "Operating: 10% to 90% non-condensing",
        "Explicacion": "Indica el rango de humedad relativa en el que el dispositivo puede operar de manera segura, desde un mínimo del 10% hasta un máximo del 90%, sin que se produzca condensación en su interior. La condensación puede afectar negativamente el funcionamiento de los componentes."
    },
    {
        "Nombre": "Storage: 5% to 90% non-condensing",
        "Explicacion": "Similar al punto anterior, pero se refiere al rango de humedad relativa en el que el dispositivo puede ser almacenado de manera segura sin riesgo de condensación en su interior."
    },
    {
        "Nombre": "CE",
        "Explicacion": "Indica que el dispositivo cumple con los requisitos de seguridad y compatibilidad electromagnética (EMC) para su comercialización en el Espacio Económico Europeo (EEE)."
    },
    {
        "Nombre": "FCC",
        "Explicacion": "Significa que el dispositivo cumple con los estándares de la Comisión Federal de Comunicaciones (FCC) de los Estados Unidos."
    },
    {
        "Nombre": "ICES-003",
        "Explicacion": "Se refiere a la norma canadiense ICES-003, que establece los límites de emisión de interferencias electromagnéticas para dispositivos electrónicos."
    },
    {
        "Nombre": "BSMI",
        "Explicacion": "Indica que el dispositivo cumple con los estándares de seguridad y EMC requeridos en Taiwán, según la Oficina de Estándares de Metrología de Taiwán (BSMI)."
    },
    {
        "Nombre": "RCM",
        "Explicacion": "Este marcado indica que el dispositivo cumple con los estándares de seguridad eléctrica y EMC para su uso en Australia y Nueva Zelanda."
    },
    {
        "Nombre": "CCC",
        "Explicacion": "Significa que el dispositivo ha sido certificado de conformidad con los estándares de seguridad obligatorios de China (China Compulsory Certificate)."
    },
    {
        "Nombre": "VCCI",
        "Explicacion": "Indica que el dispositivo cumple con los estándares de la Asociación de Industrias de Tecnología de la Información y Comunicación de Japón (VCCI)."
    },
    {
        "Nombre": "cUL",
        "Explicacion": "Este marcado indica que el dispositivo cumple con los estándares de seguridad reconocidos en Canadá y los Estados Unidos, certificados por UL LLC."
    },
    {
        "Nombre": "CB",
        "Explicacion": "Significa que el dispositivo ha sido certificado según el esquema de certificación CB (Certification Body), lo que indica conformidad con los estándares internacionales de seguridad eléctrica (IEC)."
    },
    {
        "Nombre": "LVD ",
        "Explicacion": "Este marcado indica que el dispositivo cumple con la Directiva de Baja Tensión de la Unión Europea (LVD), garantizando su seguridad eléctrica en el mercado europeo."
    },
    /*DGS-105GL/DGS108GL*/
    {
        "Nombre": "5 x Gigabit Ethernet LAN ports, 1 x power connector",
        "Descripcion": "El dispositivo cuenta con 5 puertos LAN Gigabit Ethernet para conexiones de red de alta velocidad, además de un conector de alimentación para suministrar energía al dispositivo. Esto permite conectar múltiples dispositivos a alta velocidad a la red y alimentar el dispositivo de manera adecuada."
    },
    {
        "Nombre": "IEEE 802.3 10BASE-T Ethernet",
        "Descripcion": "Se refiere al estándar IEEE que define Ethernet a 10 Mbps sobre cable de par trenzado (10BASE-T), uno de los primeros estándares de Ethernet."
    },
    {
        "Nombre": "IEEE 802.3u 100BASE-TX Fast Ethernet",
        "Descripcion": "Indica el estándar IEEE que define Fast Ethernet a 100 Mbps sobre cable de par trenzado (100BASE-TX), ofreciendo velocidades de transmisión más rápidas que Ethernet tradicional."
    },
    {
        "Nombre": "IEEE 802.3ab 1000BASE-T Gigabit Ethernet",
        "Descripcion": "Este estándar define Gigabit Ethernet a 1000 Mbps sobre cable de par trenzado (1000BASE-T), permitiendo velocidades de transmisión aún más rápidas en comparación con Fast Ethernet."
    },
    {
        "Nombre": "ANSI/IEEE 802.3 NWay auto-negotiation",
        "Descripcion": "Este estándar permite que los dispositivos Ethernet negocien automáticamente la velocidad de conexión óptima y otros parámetros de configuración cuando se conectan entre sí. Esto asegura una comunicación eficiente y compatible entre dispositivos de diferentes velocidades y capacidades."
    },
    {
        "Nombre": "IEEE 802.3x Flow Control",
        "Descripcion": "Es un mecanismo utilizado en Ethernet para controlar el flujo de datos entre dispositivos. Permite a un dispositivo enviar señales de control a su pareja para detener temporalmente la transmisión de datos si el búfer del receptor está lleno, evitando así la congestión de la red y la pérdida de paquetes."
    },
    {
        "Nombre": "IEEE 802.3az Energy-Efficient Ethernet (EEE)",
        "Descripcion": "Este estándar ayuda a reducir el consumo de energía de los dispositivos Ethernet al poner en modo de bajo consumo durante períodos de inactividad de la red. Esto ayuda a ahorrar energía y reducir los costos operativos sin comprometer el rendimiento de la red."
    },
    {
        "Nombre": "Green Ethernet",
        "Descripcion": "Es un término utilizado para describir tecnologías y prácticas diseñadas para hacer que las redes Ethernet sean más respetuosas con el medio ambiente al reducir su consumo de energía. Esto puede incluir el uso de estándares como IEEE 802.3az EEE y la implementación de funciones de ahorro de energía en dispositivos de red."
    },
    {
        "Nombre": "10 Gbps switching fabric",
        "Descripcion": "Indica la capacidad de conmutación del switch, que es de 10 gigabits por segundo (Gbps). Esto determina la cantidad de datos que el switch puede procesar y transmitir en un segundo, lo que proporciona una alta velocidad y rendimiento para las redes de alta demanda de datos."
    },
    {
        "Nombre": "Auto MDI/MDIX crossover for all ports",
        "Descripcion": "Esta característica permite que el switch ajuste automáticamente su configuración de conexión para cada puerto, lo que significa que no se necesita un cable de conexión específico (crossover o directo) para conectar dispositivos entre sí. Esto simplifica la instalación y la conectividad de la red al eliminar la necesidad de preocuparse por el tipo de cable utilizado."
    },
    {
        "Nombre": "Secure store-and-forward switching scheme",
        "Descripcion": "Este esquema de conmutación garantiza que los paquetes de datos se almacenen y verifiquen completamente antes de ser reenviados al destino. Esto ayuda a prevenir la transmisión de paquetes corruptos o maliciosos, lo que mejora la seguridad y la integridad de la red."
    },
    {
        "Nombre": "Full/half-duplex for Ethernet/Fast Ethernet speeds",
        "Descripcion": "Esta característica permite que los puertos del switch operen en modo full-duplex (transmisión y recepción simultáneas) o half-duplex (transmisión o recepción en un momento dado) dependiendo de la velocidad de Ethernet o Fast Ethernet. Esto proporciona flexibilidad y optimización del rendimiento de la red."
    },
    {
        "Nombre": "IEEE 802.3x Flow Control",
        "Descripcion": "Es un mecanismo utilizado en Ethernet para controlar el flujo de datos entre dispositivos. Permite a un dispositivo enviar señales de control a su pareja para detener temporalmente la transmisión de datos si el búfer del receptor está lleno, evitando así la congestión de la red y la pérdida de paquetes."
    },
    {
        "Nombre": "Supports 9KB Jumbo Frame",
        "Descripcion": "Esta característica permite al switch admitir paquetes de datos más grandes, conocidos como Jumbo Frames, con un tamaño de hasta 9 kilobytes (KB). El uso de Jumbo Frames puede mejorar la eficiencia de la red al reducir la sobrecarga de procesamiento y aumentar el rendimiento en aplicaciones que transfieren grandes cantidades de datos."
    },
    {
        "Nombre": "Supports IEEE 802.1p QoS",
        "Descripcion": "Indica que el switch es compatible con el estándar IEEE 802.1p, que define un sistema de Calidad de Servicio (QoS) basado en prioridades para el tráfico de red. Esto permite la priorización del tráfico de red para aplicaciones sensibles al retardo, como voz y video, garantizando un rendimiento óptimo de la red."
    },
    {
        "Nombre": "10 Mbps (half duplex)",
        "Descripcion": "Indica la velocidad de transmisión de datos en una red Ethernet en modo half-duplex, donde la transmisión de datos se realiza en un solo sentido a la vez, a una velocidad de 10 megabits por segundo (Mbps)."
    },
    {
        "Nombre": "20 Mbps (full duplex)",
        "Descripcion": "Representa la velocidad de transmisión de datos en una red Ethernet en modo full-duplex, donde la transmisión de datos se realiza en ambos sentidos simultáneamente, a una velocidad de 20 Mbps."
    },
    {
        "Nombre": "100 Mbps (half duplex)",
        "Descripcion": "Indica la velocidad de transmisión de datos en una red Fast Ethernet en modo half-duplex, donde la transmisión de datos se realiza en un solo sentido a la vez, a una velocidad de 100 Mbps."
    },
    {
        "Nombre": "200 Mbps (full duplex)",
        "Descripcion": "Representa la velocidad de transmisión de datos en una red Fast Ethernet en modo full-duplex, donde la transmisión de datos se realiza en ambos sentidos simultáneamente, a una velocidad de 200 Mbps."
    },
    {
        "Nombre": "2000 Mbps (full duplex)",
        "Descripcion": "Indica la velocidad de transmisión de datos en una red Gigabit Ethernet en modo full-duplex, donde la transmisión de datos se realiza en ambos sentidos simultáneamente, a una velocidad de 2000 Mbps, que equivale a 2 gigabits por segundo (Gbps)."
    },
    {
        "Nombre": "Store-and-forward",
        "Descripcion": "Es un método de conmutación de paquetes utilizado por el switch, donde cada paquete de datos se almacena y verifica completamente antes de ser reenviado al destino. Esto asegura una transmisión precisa y confiable de los datos."
    },
    {
        "Nombre": "2 K",
        "Descripcion": "Indica el tamaño de la tabla de direcciones MAC del switch, que puede contener hasta 2000 entradas. Esta tabla se utiliza para almacenar las direcciones MAC de los dispositivos conectados a la red, permitiendo al switch aprender y enrutar los paquetes de datos de manera eficiente."
    },
    {
        "Nombre": "Automatic Update",
        "Descripcion": "Indica la capacidad del dispositivo para realizar actualizaciones automáticas de firmware o software, lo que garantiza que siempre esté utilizando la versión más reciente del sistema operativo o de cualquier otro software relevante."
    },
    {
        "Nombre": "Ethernet: 14,880 pps per port",
        "Descripcion": "Se refiere a la cantidad máxima de paquetes por segundo (pps) que cada puerto Ethernet puede procesar, lo que determina la capacidad de manejo de tráfico de la red a una velocidad de 10 Mbps."
    },
    {
        "Nombre": "Fast Ethernet: 148,800 pps per port",
        "Descripcion": "Representa la cantidad máxima de paquetes por segundo (pps) que cada puerto Fast Ethernet puede procesar, lo que determina la capacidad de manejo de tráfico de la red a una velocidad de 100 Mbps."
    },
    {
        "Nombre": "Gigabit Ethernet: 1,488,000 pps per port",
        "Descripcion": "Indica la cantidad máxima de paquetes por segundo (pps) que cada puerto Gigabit Ethernet puede procesar, lo que determina la capacidad de manejo de tráfico de la red a una velocidad de 1000 Mbps."
    },
    {
        "Nombre": "128 KB",
        "Descripcion": "Especifica la capacidad de memoria del dispositivo, que en este caso es de 128 kilobytes (KB). Esta memoria se utiliza para almacenar datos temporales, tablas de direcciones MAC y otros datos necesarios para el funcionamiento del dispositivo."
    },
    {
        "Nombre": "Per port: Link/Activity",
        "Descripcion": "Significa que cada puerto del dispositivo está equipado con indicadores LED que muestran el estado de enlace (si está conectado) y la actividad de la red, lo que facilita la monitorización y el diagnóstico de la conexión de red en cada puerto."
    },
    {
        "Nombre": "Per device: Power",
        "Descripcion": "Indica que el dispositivo está equipado con un indicador LED que muestra el estado de alimentación, lo que permite verificar fácilmente si el dispositivo está encendido o apagado."
    },
    {
        "Nombre": "Auto MDI/MDIX for all ports",
        "Descripcion": "Esta característica permite que el dispositivo ajuste automáticamente su configuración de conexión para cada puerto, lo que significa que no se necesita un cable de conexión específico (crossover o directo) para conectar dispositivos entre sí. Esto simplifica la instalación y la conectividad de la red al eliminar la necesidad de preocuparse por el tipo de cable utilizado."
    },
    {
        "Nombre": "94 x 75 x 22.45 mm",
        "Descripcion": "Estas son las dimensiones físicas del dispositivo, especificadas en milímetros (mm) para su longitud, anchura y altura, respectivamente. Esto proporciona información sobre el tamaño compacto del dispositivo, lo que facilita su instalación en espacios reducidos."
    },
    {
        "Nombre": "75 g",
        "Descripcion": "Indica el peso del dispositivo, medido en gramos (g). Es útil para evaluar la portabilidad del dispositivo y para garantizar que no exceda los límites de peso en aplicaciones de montaje o transporte."
    },
    {
        "Nombre": "5 V/1 A Power Adapter",
        "Descripcion": "Este dispositivo requiere un adaptador de corriente con una salida de 5 voltios y una corriente de 1 amperio para su funcionamiento adecuado. Este adaptador suministra la energía necesaria para alimentar el dispositivo."
    },
    {
        "Nombre": "Maximum AC input: 2.87 W",
        "Descripcion": "La entrada de corriente alterna (AC) máxima que puede manejar este dispositivo es de 2.87 vatios. Esto representa la cantidad máxima de energía que el dispositivo puede consumir en condiciones de funcionamiento normales."
    },
    {
        "Nombre": "Standby AC input: 0.47 W",
        "Descripcion": "En modo de espera, este dispositivo consume 0.47 vatios de energía de entrada de corriente alterna (AC). Esta es la cantidad de energía que el dispositivo consume cuando no está en uso pero sigue conectado a una fuente de alimentación."
    },
    {
        "Nombre": "Operating: 0 to 40 °C",
        "Descripcion": "El dispositivo puede funcionar de manera segura y eficiente en un rango de temperatura que va desde 0°C hasta 40°C. Es importante para garantizar el rendimiento óptimo del dispositivo en diferentes entornos de temperatura."
    },
    {
        "Nombre": "Storage: -10 to 70 °C",
        "Descripcion": "Para un almacenamiento seguro a largo plazo, este dispositivo puede soportar temperaturas que van desde -10°C hasta 70°C. Esto garantiza la integridad y el rendimiento del dispositivo durante el almacenamiento en diversas condiciones ambientales."
    },
    {
        "Nombre": "Operating: 10% to 90% non-condensing",
        "Descripcion": "El dispositivo puede operar de manera segura en un rango de humedad relativa que va desde el 10% hasta el 90%, sin riesgo de condensación en su interior. La condensación puede dañar los componentes del dispositivo y afectar su funcionamiento."
    },
    {
        "Nombre": "Storage: 5% to 90% non-condensing",
        "Descripcion": "Similar al punto anterior, este rango de humedad relativa (del 5% al 90%) se aplica al almacenamiento a largo plazo del dispositivo, asegurando que se mantenga seguro y funcional en diferentes condiciones de humedad."
    },
    {
        "Nombre": "1,479,725 hours",
        "Descripcion": "Esta cifra representa la vida útil estimada del dispositivo en horas. Significa que se espera que el dispositivo funcione de manera confiable durante aproximadamente 1,479,725 horas antes de requerir mantenimiento o reemplazo."
    },
    {
        "Nombre": "CE class B",
        "Descripcion": "Indica que el dispositivo cumple con los estándares de seguridad y compatibilidad electromagnética (EMC) de la Unión Europea, siendo clasificado como Clase B. Esto garantiza que el dispositivo no interfiera de manera significativa con otros equipos electrónicos y que sea seguro de usar."
    },
    {
        "Nombre": "FCC class B",
        "Descripcion": "Indica que el dispositivo cumple con los estándares de la Comisión Federal de Comunicaciones (FCC) de los Estados Unidos, siendo clasificado como Clase B. Esto garantiza que el dispositivo cumple con los límites de emisión de interferencias electromagnéticas y es seguro para su uso en entornos residenciales."
    },
    {
        "Nombre": "ICES-003 Class B",
        "Descripcion": "Este marcado indica que el dispositivo cumple con los estándares de interferencia electromagnética (EMI) establecidos por el Instituto de Ingenieros Eléctricos y Electrónicos de Canadá (ICES). La Clase B se refiere a los dispositivos destinados para uso doméstico que cumplen con los límites de emisión de EMI."
    },
    {
        "Nombre": "VCCI class B",
        "Descripcion": "Indica que el dispositivo cumple con los estándares de la Asociación de la Industria Electrónica y de Tecnologías de la Información de Japón (VCCI), siendo clasificado como Clase B. Esto garantiza que el dispositivo cumple con los límites de emisión de interferencias electromagnéticas y es seguro para su uso en entornos residenciales."
    },
    {
        "Nombre": "BSMI",
        "Descripcion": "Este marcado indica que el dispositivo cumple con los requisitos de seguridad y compatibilidad electromagnética (EMC) de la Administración de Estándares de Metrología, Inspección y Seguridad de Taiwán (BSMI). Esto permite que el dispositivo sea comercializado y utilizado en Taiwán."
    },
    {
        "Nombre": "LVD",
        "Descripcion": "La Directiva de Baja Tensión (LVD) es una normativa de la Unión Europea (UE) que establece los requisitos de seguridad eléctrica para los equipos eléctricos dentro de ciertos límites de tensión. El marcado LVD indica que el dispositivo cumple con estos requisitos y es seguro de usar en la UE."
    },
    {
        "Nombre": "RCM",
        "Descripcion": "El Marcado de Conformidad Regulatoria (RCM) es un requisito para los productos vendidos en Australia y Nueva Zelanda, que garantiza que cumplen con los estándares de seguridad eléctrica y de radiocomunicaciones establecidos por las autoridades regulatorias."
    },
    {
        "Nombre": "Anatel",
        "Descripcion": "Este marcado indica que el dispositivo cumple con los requisitos de certificación de la Agencia Nacional de Telecomunicaciones (Anatel) de Brasil, lo que permite su comercialización y uso en el país."
    },
    {
        "Nombre": "KCC",
        "Descripcion": "Indica que el dispositivo cumple con los requisitos de certificación de la Comisión de Comunicaciones de Corea (KCC), permitiendo su comercialización y uso en Corea del Sur."
    }, 
    /* DGS-105GL/DGS108GL */
    
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
