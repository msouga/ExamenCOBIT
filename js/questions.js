const questionBank = {
    section1: [ // Marco de Gobierno de COBIT (75 preguntas)
        {
            question: "¿Cuál es el propósito principal de COBIT 2019?",
            options: [
                "Proporcionar un marco para el gobierno y gestión de TI empresarial",
                "Reemplazar todos los otros marcos de trabajo de TI",
                "Certificar profesionales en auditoría de sistemas",
                "Desarrollar software empresarial"
            ],
            correct: 0
        },
        {
            question: "¿Cuántos principios fundamentales tiene COBIT 2019?",
            options: ["3", "5", "6", "7"],
            correct: 2
        },
        {
            question: "¿Cuál de los siguientes NO es un principio de COBIT 2019?",
            options: [
                "Proporcionar valor a las partes interesadas",
                "Enfoque holístico",
                "Certificación obligatoria",
                "Sistema de gobierno dinámico"
            ],
            correct: 2
        },
        {
            question: "El principio 'Proporcionar valor a las partes interesadas' se refiere a:",
            options: [
                "Maximizar únicamente las ganancias financieras",
                "Equilibrar beneficios, riesgos y recursos",
                "Reducir costos de TI",
                "Aumentar la satisfacción del cliente solamente"
            ],
            correct: 1
        },
        {
            question: "¿Qué significa 'Enfoque holístico' en COBIT 2019?",
            options: [
                "Enfocarse solo en tecnología",
                "Considerar múltiples componentes que soportan el gobierno y gestión",
                "Implementar todas las prácticas simultáneamente",
                "Usar solo herramientas específicas"
            ],
            correct: 1
        },
        {
            question: "El principio de 'Sistema de gobierno dinámico' implica:",
            options: [
                "Cambiar constantemente las políticas",
                "Adaptar el sistema de gobierno al contexto empresarial específico",
                "No seguir ningún estándar",
                "Implementar COBIT sin modificaciones"
            ],
            correct: 1
        },
        {
            question: "¿Cuál es el objetivo del principio 'Gobierno distinto de la gestión'?",
            options: [
                "Separar completamente TI del negocio",
                "Diferenciar entre evaluar, dirigir, supervisar (gobierno) y planear, construir, ejecutar, supervisar (gestión)",
                "Crear departamentos independientes",
                "Eliminar la supervisión"
            ],
            correct: 1
        },
        {
            question: "¿Qué son las 'partes interesadas' (stakeholders) en COBIT 2019?",
            options: [
                "Solo los accionistas de la empresa",
                "Únicamente el departamento de TI",
                "Todas las personas o grupos que tienen interés en la empresa y su uso de TI",
                "Los proveedores externos"
            ],
            correct: 2
        },
        {
            question: "El principio 'Diseñado a medida' significa:",
            options: [
                "Comprar software personalizado",
                "Adaptar COBIT al contexto único de la empresa usando factores de diseño",
                "Crear un marco completamente nuevo",
                "Contratar consultores externos"
            ],
            correct: 1
        },
        {
            question: "¿Qué es el 'Sistema de gobierno de TI empresarial'?",
            options: [
                "Un software de gestión",
                "Un conjunto de componentes que interactúan para permitir el gobierno y gestión de TI",
                "Un departamento de la empresa",
                "Una certificación profesional"
            ],
            correct: 1
        },
        {
            question: "¿Cuál es el enfoque de COBIT 2019 respecto a I&T (Información y Tecnología)?",
            options: [
                "Solo gestión de TI tradicional",
                "Gobierno y gestión de información y tecnología empresarial",
                "Únicamente seguridad informática",
                "Desarrollo de software"
            ],
            correct: 1
        },
        {
            question: "El principio de 'Sistema de gobierno de extremo a extremo' abarca:",
            options: [
                "Solo el departamento de TI",
                "Toda la empresa y el ecosistema externo",
                "Únicamente los proveedores",
                "Solo los procesos internos"
            ],
            correct: 1
        },
        {
            question: "¿Qué son los 'objetivos de gobierno y gestión' en COBIT?",
            options: [
                "Metas financieras de la empresa",
                "Objetivos específicos que ayudan a alcanzar las metas empresariales",
                "KPIs de rendimiento",
                "Certificaciones a obtener"
            ],
            correct: 1
        },
        {
            question: "¿Cuál es la relación entre gobierno y gestión en COBIT?",
            options: [
                "Son términos intercambiables",
                "El gobierno evalúa, dirige y supervisa; la gestión planea, construye, ejecuta y supervisa",
                "El gobierno es superior y la gestión inferior",
                "No tienen relación"
            ],
            correct: 1
        },
        {
            question: "¿Qué es un 'factor de diseño' en COBIT 2019?",
            options: [
                "Una herramienta de software",
                "Un elemento que influye en el diseño del sistema de gobierno",
                "Un tipo de proceso",
                "Una métrica de desempeño"
            ],
            correct: 1
        },
        {
            question: "¿Cuántos objetivos de gobierno tiene COBIT 2019?",
            options: ["3", "5", "7", "10"],
            correct: 1
        },
        {
            question: "Los objetivos de gobierno en COBIT 2019 son:",
            options: [
                "Valor, Riesgo, Recursos, Calidad, Innovación",
                "Beneficios, Riesgo, Recursos, Cumplimiento, Eficiencia",
                "Valor de las partes interesadas, Optimización de riesgos, Optimización de recursos",
                "Calidad, Costo, Tiempo, Alcance"
            ],
            correct: 2
        },
        {
            question: "¿Qué significa 'Realización de beneficios' como objetivo de gobierno?",
            options: [
                "Aumentar solo las ganancias",
                "Crear valor para las partes interesadas",
                "Reducir costos",
                "Maximizar ingresos"
            ],
            correct: 1
        },
        {
            question: "El objetivo 'Optimización del riesgo' busca:",
            options: [
                "Eliminar todos los riesgos",
                "Gestionar riesgos relacionados con TI a un nivel aceptable",
                "Evitar el uso de tecnología",
                "Transferir todos los riesgos"
            ],
            correct: 1
        },
        {
            question: "El objetivo 'Optimización de recursos' se refiere a:",
            options: [
                "Minimizar todos los gastos",
                "Uso óptimo de capacidades y recursos de TI",
                "Maximizar la cantidad de recursos",
                "Contratar más personal"
            ],
            correct: 1
        },
        {
            question: "¿Qué es la 'cascada de objetivos' en COBIT?",
            options: [
                "Un proceso de gestión de proyectos",
                "La traducción de necesidades empresariales en objetivos de TI específicos y accionables",
                "Una metodología de desarrollo",
                "Un tipo de estructura organizacional"
            ],
            correct: 1
        },
        {
            question: "¿Cuál es el punto de partida de la cascada de objetivos?",
            options: [
                "Los procesos de TI",
                "Las necesidades y requisitos de las partes interesadas",
                "El presupuesto de TI",
                "Las certificaciones"
            ],
            correct: 1
        },
        {
            question: "¿Qué representa el 'Modelo de Referencia de Procesos' en COBIT?",
            options: [
                "Un diagrama de flujo",
                "Un conjunto de procesos de gobierno y gestión",
                "Una metodología ágil",
                "Un software de gestión"
            ],
            correct: 1
        },
        {
            question: "¿Cuántos dominios de gobierno tiene COBIT 2019?",
            options: ["1", "2", "4", "5"],
            correct: 0
        },
        {
            question: "El dominio de gobierno en COBIT 2019 se llama:",
            options: [
                "Evaluar, Dirigir y Supervisar (EDM)",
                "Planear y Organizar",
                "Adquirir e Implementar",
                "Entregar y Dar Soporte"
            ],
            correct: 0
        },
        {
            question: "¿Cuántos dominios de gestión tiene COBIT 2019?",
            options: ["2", "3", "4", "5"],
            correct: 2
        },
        {
            question: "Los dominios de gestión en COBIT 2019 son:",
            options: [
                "Planear, Construir, Ejecutar, Monitorear",
                "Alinear, Planear y Organizar (APO), Construir, Adquirir e Implementar (BAI), Entregar, Serviciar y Dar Soporte (DSS), Monitorear, Evaluar y Valorar (MEA)",
                "Adquirir, Desarrollar, Implementar, Operar",
                "Diseñar, Desarrollar, Desplegar, Mantener"
            ],
            correct: 1
        },
        {
            question: "¿Qué significa APO en COBIT?",
            options: [
                "Alinear, Planear y Organizar",
                "Adquirir, Procesar y Optimizar",
                "Analizar, Planear y Operar",
                "Aplicar, Probar y Optimizar"
            ],
            correct: 0
        },
        {
            question: "¿Qué significa BAI en COBIT?",
            options: [
                "Buscar, Analizar e Implementar",
                "Construir, Adquirir e Implementar",
                "Balanced Application Integration",
                "Business Analysis and Innovation"
            ],
            correct: 1
        },
        {
            question: "¿Qué significa DSS en COBIT?",
            options: [
                "Digital Security Systems",
                "Data Storage Services",
                "Entregar, Serviciar y Dar Soporte",
                "Develop, Support and Sustain"
            ],
            correct: 2
        },
        {
            question: "¿Qué significa MEA en COBIT?",
            options: [
                "Monitorear, Evaluar y Valorar",
                "Measure, Execute and Analyze",
                "Manage, Execute and Assess",
                "Monitor, Enhance and Approve"
            ],
            correct: 0
        },
        {
            question: "¿Cuántos procesos tiene el dominio EDM?",
            options: ["3", "5", "13", "40"],
            correct: 1
        },
        {
            question: "¿Cuál es el enfoque principal del dominio EDM?",
            options: [
                "Implementación de proyectos",
                "Gobierno corporativo de TI",
                "Operaciones diarias",
                "Desarrollo de software"
            ],
            correct: 1
        },
        {
            question: "El proceso EDM01 se refiere a:",
            options: [
                "Gestión de riesgos",
                "Asegurar el establecimiento y mantenimiento del marco de gobierno",
                "Gestión de proyectos",
                "Gestión de recursos"
            ],
            correct: 1
        },
        {
            question: "El proceso EDM02 trata sobre:",
            options: [
                "Gestión de proveedores",
                "Asegurar la entrega de beneficios",
                "Gestión de cambios",
                "Gestión de incidentes"
            ],
            correct: 1
        },
        {
            question: "El proceso EDM03 se enfoca en:",
            options: [
                "Asegurar la optimización del riesgo",
                "Gestión de la calidad",
                "Gestión de capacidad",
                "Gestión de configuración"
            ],
            correct: 0
        },
        {
            question: "El proceso EDM04 aborda:",
            options: [
                "Asegurar la optimización de recursos",
                "Gestión de activos",
                "Gestión financiera",
                "Gestión de personal"
            ],
            correct: 0
        },
        {
            question: "El proceso EDM05 se centra en:",
            options: [
                "Asegurar la transparencia de las partes interesadas",
                "Gestión de comunicaciones",
                "Gestión de relaciones",
                "Gestión de expectativas"
            ],
            correct: 0
        },
        {
            question: "¿Cuántos procesos tiene aproximadamente el dominio APO?",
            options: ["5", "10", "14", "20"],
            correct: 2
        },
        {
            question: "¿Cuántos procesos tiene aproximadamente el dominio BAI?",
            options: ["5", "8", "11", "15"],
            correct: 2
        },
        {
            question: "¿Cuántos procesos tiene aproximadamente el dominio DSS?",
            options: ["4", "6", "10", "15"],
            correct: 1
        },
        {
            question: "¿Cuántos procesos tiene aproximadamente el dominio MEA?",
            options: ["3", "5", "7", "10"],
            correct: 0
        },
        {
            question: "¿Cuál es el total aproximado de procesos en COBIT 2019?",
            options: ["25", "34", "40", "50"],
            correct: 2
        },
        {
            question: "¿Qué es un 'proceso' en COBIT?",
            options: [
                "Un procedimiento documentado",
                "Un conjunto de prácticas para lograr objetivos específicos",
                "Un software de gestión",
                "Un tipo de proyecto"
            ],
            correct: 1
        },
        {
            question: "Cada proceso en COBIT tiene:",
            options: [
                "Solo una descripción",
                "Propósito, objetivos, prácticas de gestión y actividades",
                "Únicamente KPIs",
                "Solo responsabilidades"
            ],
            correct: 1
        },
        {
            question: "¿Qué es una 'práctica de gestión' en COBIT?",
            options: [
                "Una reunión de equipo",
                "Una actividad específica dentro de un proceso",
                "Un tipo de capacitación",
                "Una herramienta de software"
            ],
            correct: 1
        },
        {
            question: "¿Cuál es el propósito del modelo de capacidad de procesos en COBIT?",
            options: [
                "Evaluar la madurez de los procesos",
                "Contratar personal",
                "Comprar tecnología",
                "Diseñar arquitectura"
            ],
            correct: 0
        },
        {
            question: "¿Cuántos niveles tiene el modelo de capacidad de COBIT 2019?",
            options: ["3", "5", "6", "7"],
            correct: 2
        },
        {
            question: "El nivel 0 de capacidad se refiere a:",
            options: [
                "Proceso incompleto",
                "Proceso básico",
                "Proceso definido",
                "Proceso optimizado"
            ],
            correct: 0
        },
        {
            question: "El nivel 1 de capacidad indica:",
            options: [
                "Proceso no implementado",
                "Proceso ejecutado",
                "Proceso gestionado",
                "Proceso medible"
            ],
            correct: 1
        },
        {
            question: "El nivel 5 de capacidad representa:",
            options: [
                "Proceso básico",
                "Proceso gestionado",
                "Proceso optimizador",
                "Proceso en mejora"
            ],
            correct: 2
        },
        {
            question: "¿Qué es el 'Modelo de Referencia' en COBIT?",
            options: [
                "Un documento de auditoría",
                "Una descripción de procesos, sus objetivos y prácticas",
                "Un tipo de certificación",
                "Una herramienta de software"
            ],
            correct: 1
        },
        {
            question: "¿Cuál es la diferencia entre gobierno y gestión según COBIT?",
            options: [
                "No hay diferencia",
                "El gobierno es estratégico y la gestión operacional",
                "El gobierno solo lo hace la junta directiva",
                "La gestión es más importante"
            ],
            correct: 1
        },
        {
            question: "Las actividades de gobierno incluyen:",
            options: [
                "Solo supervisión",
                "Evaluar, Dirigir y Supervisar",
                "Planear y Ejecutar",
                "Construir y Mantener"
            ],
            correct: 1
        },
        {
            question: "Las actividades de gestión incluyen:",
            options: [
                "Solo operación",
                "Planear, Construir, Ejecutar y Supervisar",
                "Solo planificación",
                "Solo construcción"
            ],
            correct: 1
        },
        {
            question: "¿Quién es responsable del gobierno en una organización?",
            options: [
                "El departamento de TI",
                "El Consejo de Administración/Alta Dirección",
                "Los auditores",
                "Los consultores externos"
            ],
            correct: 1
        },
        {
            question: "¿Quién es responsable de la gestión en una organización?",
            options: [
                "El Consejo de Administración",
                "La Alta Dirección y los gerentes",
                "Los empleados únicamente",
                "Los auditores"
            ],
            correct: 1
        },
        {
            question: "¿Qué significa 'I&T' en COBIT 2019?",
            options: [
                "Internet y Tecnología",
                "Información y Tecnología",
                "Innovación y Transformación",
                "Infraestructura y Telecomunicaciones"
            ],
            correct: 1
        },
        {
            question: "El alcance de COBIT 2019 incluye:",
            options: [
                "Solo TI tradicional",
                "Información, tecnología relacionada y todas las tecnologías que procesan información",
                "Solo sistemas ERP",
                "Solo infraestructura"
            ],
            correct: 1
        },
        {
            question: "¿COBIT 2019 es prescriptivo o flexible?",
            options: [
                "Totalmente prescriptivo",
                "Flexible y adaptable al contexto",
                "Opcional",
                "Rígido e inflexible"
            ],
            correct: 1
        },
        {
            question: "¿COBIT puede usarse junto con otros marcos?",
            options: [
                "No, es excluyente",
                "Sí, es compatible con ITIL, ISO, TOGAF, etc.",
                "Solo con ITIL",
                "Solo con ISO 27001"
            ],
            correct: 1
        },
        {
            question: "¿Cuál es el enfoque de COBIT respecto a la cultura organizacional?",
            options: [
                "No la considera",
                "La reconoce como un componente clave del sistema de gobierno",
                "Solo enfoca en procesos",
                "Solo enfoca en tecnología"
            ],
            correct: 1
        },
        {
            question: "¿COBIT 2019 es solo para grandes empresas?",
            options: [
                "Sí, solo para grandes corporaciones",
                "No, es escalable y aplicable a organizaciones de cualquier tamaño",
                "Solo para empresas de tecnología",
                "Solo para entidades gubernamentales"
            ],
            correct: 1
        },
        {
            question: "¿Cuál es la relación de COBIT con el cumplimiento normativo?",
            options: [
                "No está relacionado",
                "Ayuda a cumplir con múltiples requisitos normativos y regulatorios",
                "Solo para SOX",
                "Solo para GDPR"
            ],
            correct: 1
        },
        {
            question: "¿COBIT 2019 reemplaza a COBIT 5?",
            options: [
                "No, son complementarios",
                "Sí, es una evolución y actualización de COBIT 5",
                "No están relacionados",
                "COBIT 5 es superior"
            ],
            correct: 1
        },
        {
            question: "¿Qué organización desarrolla y mantiene COBIT?",
            options: [
                "ISO",
                "ISACA (Information Systems Audit and Control Association)",
                "ITIL Foundation",
                "PMI"
            ],
            correct: 1
        },
        {
            question: "¿Con qué frecuencia se actualiza COBIT?",
            options: [
                "Anualmente",
                "Cada varios años según evolución tecnológica y de negocio",
                "Mensualmente",
                "Nunca se actualiza"
            ],
            correct: 1
        },
        {
            question: "¿Cuál es el objetivo final de implementar COBIT?",
            options: [
                "Obtener certificaciones",
                "Crear valor empresarial a través del uso apropiado de I&T",
                "Reducir costos únicamente",
                "Cumplir regulaciones"
            ],
            correct: 1
        },
        {
            question: "¿COBIT es un estándar o un marco de trabajo?",
            options: [
                "Es un estándar ISO",
                "Es un marco de trabajo (framework)",
                "Es una metodología",
                "Es un proceso"
            ],
            correct: 1
        },
        {
            question: "¿Cuál es el enfoque de COBIT respecto a la agilidad?",
            options: [
                "No es compatible con metodologías ágiles",
                "Reconoce y puede aplicarse en entornos ágiles",
                "Solo para cascada",
                "No lo menciona"
            ],
            correct: 1
        },
        {
            question: "¿COBIT cubre aspectos de ciberseguridad?",
            options: [
                "No, eso es para otros marcos",
                "Sí, incluye prácticas de seguridad de la información",
                "Solo menciona antivirus",
                "No es relevante"
            ],
            correct: 1
        },
        {
            question: "¿Qué tipo de organizaciones pueden beneficiarse de COBIT?",
            options: [
                "Solo empresas privadas",
                "Cualquier organización que use I&T, pública o privada, con o sin fines de lucro",
                "Solo gobiernos",
                "Solo empresas tecnológicas"
            ],
            correct: 1
        },
        {
            question: "¿COBIT ayuda en la transformación digital?",
            options: [
                "No está relacionado",
                "Sí, proporciona guía para gobernar y gestionar la transformación digital",
                "Solo para empresas tradicionales",
                "No lo menciona"
            ],
            correct: 1
        },
        {
            question: "¿Cuál es el rol de las métricas en COBIT?",
            options: [
                "No son importantes",
                "Son esenciales para medir el rendimiento y logro de objetivos",
                "Solo para auditorías",
                "Opcionales"
            ],
            correct: 1
        }
    ],
    section2: [ // Componentes del Sistema de Gobierno (75 preguntas)
        {
            question: "¿Cuántos componentes tiene el Sistema de Gobierno de COBIT 2019?",
            options: ["5", "7", "10", "12"],
            correct: 1
        },
        {
            question: "Los componentes del sistema de gobierno son:",
            options: [
                "Procesos, Estructuras, Información",
                "Procesos, Estructuras Organizacionales, Principios y Políticas, Información, Cultura y Comportamiento, Personas y Habilidades, Servicios, Infraestructura y Aplicaciones",
                "Solo procesos y estructuras",
                "Tecnología, Personas, Procesos"
            ],
            correct: 1
        },
        {
            question: "¿Qué representa el componente 'Procesos' en COBIT?",
            options: [
                "Procedimientos documentados",
                "Conjunto de prácticas y actividades para lograr objetivos",
                "Diagramas de flujo",
                "Software de gestión"
            ],
            correct: 1
        },
        {
            question: "¿Qué son las 'Estructuras Organizacionales' en COBIT?",
            options: [
                "El organigrama de la empresa",
                "Entidades de toma de decisiones clave en la organización",
                "Los edificios y oficinas",
                "Los departamentos"
            ],
            correct: 1
        },
        {
            question: "El componente 'Principios, Políticas y Marcos' incluye:",
            options: [
                "Solo políticas de TI",
                "Comunicación práctica de comportamiento deseado en operaciones diarias",
                "Manuales de usuario",
                "Documentación técnica"
            ],
            correct: 1
        },
        {
            question: "¿Qué abarca el componente 'Información'?",
            options: [
                "Solo bases de datos",
                "Información producida y usada por la empresa, incluyendo todos los datos relevantes",
                "Informes financieros únicamente",
                "Documentos en papel"
            ],
            correct: 1
        },
        {
            question: "El componente 'Cultura, Ética y Comportamiento' se refiere a:",
            options: [
                "El código de vestimenta",
                "Valores individuales y corporativos que influyen en el gobierno y gestión",
                "Las tradiciones de la empresa",
                "Las celebraciones corporativas"
            ],
            correct: 1
        },
        {
            question: "¿Qué incluye el componente 'Personas, Habilidades y Competencias'?",
            options: [
                "Solo el número de empleados",
                "Capacidades necesarias para toma de decisiones y ejecución correcta",
                "Currículums del personal",
                "Planes de capacitación únicamente"
            ],
            correct: 1
        },
        {
            question: "El componente 'Servicios, Infraestructura y Aplicaciones' abarca:",
            options: [
                "Solo el hardware",
                "Infraestructura, tecnología y aplicaciones que proporcionan servicios de I&T",
                "Solo el software",
                "Solo los servidores"
            ],
            correct: 1
        },
        {
            question: "¿Cómo interactúan los componentes del sistema de gobierno?",
            options: [
                "No interactúan",
                "Trabajan de manera integrada y se influencian mutuamente",
                "Solo los procesos interactúan",
                "Son independientes"
            ],
            correct: 1
        },
        {
            question: "¿Qué es RACI en el contexto de COBIT?",
            options: [
                "Una métrica de rendimiento",
                "Matriz de asignación de responsabilidades (Responsable, Accountable, Consultado, Informado)",
                "Un tipo de proceso",
                "Una herramienta de auditoría"
            ],
            correct: 1
        },
        {
            question: "En RACI, ¿qué significa 'R' (Responsible)?",
            options: [
                "Quien toma la decisión final",
                "Quien ejecuta la actividad",
                "Quien es consultado",
                "Quien es informado"
            ],
            correct: 1
        },
        {
            question: "En RACI, ¿qué significa 'A' (Accountable)?",
            options: [
                "Quien ejecuta la tarea",
                "Quien es responsable final y tiene autoridad de decisión",
                "Quien ayuda en la tarea",
                "Quien documenta"
            ],
            correct: 1
        },
        {
            question: "¿Puede haber más de un 'Accountable' para una actividad?",
            options: [
                "Sí, siempre hay varios",
                "No, debe haber solo uno",
                "Depende del tamaño de la empresa",
                "Solo en grandes proyectos"
            ],
            correct: 1
        },
        {
            question: "En RACI, ¿qué significa 'C' (Consulted)?",
            options: [
                "Quien ejecuta",
                "Quien proporciona input antes de tomar decisiones",
                "Quien es informado después",
                "Quien aprueba"
            ],
            correct: 1
        },
        {
            question: "En RACI, ¿qué significa 'I' (Informed)?",
            options: [
                "Quien ejecuta",
                "Quien es notificado de los resultados o decisiones",
                "Quien consulta",
                "Quien aprueba"
            ],
            correct: 1
        },
        {
            question: "¿Qué son los 'objetivos de las partes interesadas' en COBIT?",
            options: [
                "Metas financieras",
                "Necesidades y expectativas que las partes interesadas tienen respecto a I&T",
                "Objetivos de TI",
                "KPIs de rendimiento"
            ],
            correct: 1
        },
        {
            question: "¿Cómo se relacionan los objetivos de las partes interesadas con los objetivos empresariales?",
            options: [
                "No están relacionados",
                "Los objetivos de las partes interesadas se traducen en objetivos empresariales",
                "Son lo mismo",
                "Los objetivos empresariales ignoran a las partes interesadas"
            ],
            correct: 1
        },
        {
            question: "¿Qué son los 'objetivos de alineamiento' en COBIT?",
            options: [
                "Metas de TI",
                "Objetivos que aseguran que I&T esté alineada con la estrategia empresarial",
                "Objetivos financieros",
                "Objetivos de recursos humanos"
            ],
            correct: 1
        },
        {
            question: "El modelo de información de COBIT incluye:",
            options: [
                "Solo reportes financieros",
                "Metas, métricas e información sobre el rendimiento del sistema de gobierno",
                "Solo KPIs",
                "Únicamente logs de sistema"
            ],
            correct: 1
                        },
        {
            question: "¿Qué es un 'catalizador' (enabler) en COBIT?",
            options: [
                "Una herramienta de software",
                "Un componente del sistema de gobierno que ayuda a lograr objetivos",
                "Un proceso específico",
                "Una métrica"
            ],
            correct: 1
        },
        {
            question: "¿Cuántas dimensiones tiene cada catalizador en COBIT?",
            options: ["2", "4", "5", "7"],
            correct: 1
        },
        {
            question: "Las dimensiones de un catalizador son:",
            options: [
                "Entrada, Proceso, Salida",
                "Partes interesadas, Metas, Ciclo de vida, Buenas prácticas",
                "Inicio, Ejecución, Cierre",
                "Planear, Hacer, Verificar, Actuar"
            ],
            correct: 1
        },
        {
            question: "¿Qué representa la dimensión 'Partes interesadas' de un catalizador?",
            options: [
                "Solo los accionistas",
                "Grupos que tienen interés en el catalizador",
                "Solo empleados",
                "Solo clientes"
            ],
            correct: 1
        },
        {
            question: "¿Qué son las 'metas' en la dimensión de catalizadores?",
            options: [
                "Objetivos financieros",
                "Lo que el catalizador debe lograr",
                "KPIs únicamente",
                "Presupuestos"
            ],
            correct: 1
        },
        {
            question: "La dimensión 'Ciclo de vida' se refiere a:",
            options: [
                "La vida útil del hardware",
                "Las fases desde planificación hasta retiro del catalizador",
                "El tiempo de proyecto",
                "La garantía del producto"
            ],
            correct: 1
        },
        {
            question: "¿Qué son las 'buenas prácticas' en un catalizador?",
            options: [
                "Políticas de la empresa",
                "Prácticas que ayudan a lograr las metas del catalizador",
                "Procedimientos ISO",
                "Capacitaciones"
            ],
            correct: 1
        },
        {
            question: "¿Qué tipo de información debe fluir entre los procesos?",
            options: [
                "Solo emails",
                "Entradas, salidas, triggers y productos de trabajo",
                "Solo reportes",
                "Solo métricas"
            ],
            correct: 1
        },
        {
            question: "¿Qué es un 'producto de trabajo' (work product) en COBIT?",
            options: [
                "Un producto comercial",
                "Información de entrada o salida de procesos",
                "Un software",
                "Un documento final"
            ],
            correct: 1
        },
        {
            question: "¿Qué son los 'triggers' en los procesos de COBIT?",
            options: [
                "Alertas de sistema",
                "Eventos que inician un proceso",
                "Errores",
                "Notificaciones"
            ],
            correct: 1
        },
        {
            question: "Las estructuras organizacionales en COBIT incluyen:",
            options: [
                "Solo el Consejo de Administración",
                "Comités, funciones y roles clave",
                "Solo gerentes",
                "Solo empleados"
            ],
            correct: 1
        },
        {
            question: "¿Qué es el 'Comité de Dirección de TI' en COBIT?",
            options: [
                "El departamento de sistemas",
                "Estructura que asiste en decisiones estratégicas de I&T",
                "El equipo de soporte",
                "Los desarrolladores"
            ],
            correct: 1
        },
        {
            question: "El rol del CIO (Chief Information Officer) incluye:",
            options: [
                "Solo operaciones de TI",
                "Responsabilidad por la estrategia y ejecución de I&T",
                "Solo seguridad",
                "Solo compras"
            ],
            correct: 1
        },
        {
            question: "¿Qué es el 'Modelo de Tres Líneas de Defensa'?",
            options: [
                "Un modelo militar",
                "Marco para gestión de riesgos y control (gestión, supervisión, auditoría)",
                "Un modelo de seguridad física",
                "Un tipo de firewall"
            ],
            correct: 1
        },
        {
            question: "La primera línea de defensa en gestión de riesgos es:",
            options: [
                "Auditoría interna",
                "Gestión operacional",
                "Auditoría externa",
                "Consultoría"
            ],
            correct: 1
        },
        {
            question: "La segunda línea de defensa incluye:",
            options: [
                "Operaciones diarias",
                "Funciones de supervisión como riesgo, cumplimiento y seguridad",
                "Auditoría externa",
                "Desarrollo de software"
            ],
            correct: 1
        },
        {
            question: "La tercera línea de defensa es:",
            options: [
                "Gestión",
                "Auditoría interna independiente",
                "Operaciones",
                "Proveedores"
            ],
            correct: 1
        },
        {
            question: "¿Qué son las 'políticas' en COBIT?",
            options: [
                "Leyes gubernamentales",
                "Declaraciones de expectativas o dirección de la gestión",
                "Contratos",
                "Procedimientos técnicos"
            ],
            correct: 1
        },
        {
            question: "¿Qué son los 'principios' en el componente de gobierno?",
            options: [
                "Valores morales",
                "Declaraciones fundamentales de intención y dirección",
                "Reglas técnicas",
                "Estándares ISO"
            ],
            correct: 1
        },
        {
            question: "¿Qué son los 'marcos de trabajo' en COBIT?",
            options: [
                "Estructuras físicas",
                "Conjuntos de conceptos y prácticas que definen cómo hacer las cosas",
                "Organigramas",
                "Diagramas de red"
            ],
            correct: 1
        },
        {
            question: "La información en el sistema de gobierno debe ser:",
            options: [
                "Solo digital",
                "Relevante, confiable, oportuna y comprensible",
                "Solo financiera",
                "Confidencial siempre"
            ],
            correct: 1
        },
        {
            question: "¿Qué aspectos incluye la 'Cultura organizacional' en COBIT?",
            options: [
                "Solo valores declarados",
                "Valores, comportamientos y ética que permean la organización",
                "Solo reglas escritas",
                "Solo tradiciones"
            ],
            correct: 1
        },
        {
            question: "La cultura en COBIT se considera:",
            options: [
                "No importante",
                "Un componente fundamental que afecta todos los demás",
                "Solo relevante para RRHH",
                "Opcional"
            ],
            correct: 1
        },
        {
            question: "¿Por qué es importante la ética en el gobierno de I&T?",
            options: [
                "No es relevante",
                "Influye en la toma de decisiones y el comportamiento",
                "Solo para cumplir regulaciones",
                "Solo para relaciones públicas"
            ],
            correct: 1
        },
        {
            question: "El componente 'Personas y Habilidades' considera:",
            options: [
                "Solo títulos académicos",
                "Competencias técnicas, de negocio y de comportamiento necesarias",
                "Solo experiencia laboral",
                "Solo certificaciones"
            ],
            correct: 1
        },
        {
            question: "¿Qué incluye 'Servicios' en el componente correspondiente?",
            options: [
                "Solo servicios externos",
                "Capacidades de I&T que soportan procesos de negocio",
                "Solo servicios internos",
                "Únicamente cloud computing"
            ],
            correct: 1
        },
        {
            question: "La 'Infraestructura' en COBIT se refiere a:",
            options: [
                "Solo edificios",
                "Hardware, redes, instalaciones físicas de I&T",
                "Solo servidores",
                "Solo cableado"
            ],
            correct: 1
        },
        {
            question: "'Aplicaciones' en COBIT incluye:",
            options: [
                "Solo apps móviles",
                "Software y sistemas automatizados que procesan información",
                "Solo sistemas ERP",
                "Solo bases de datos"
            ],
            correct: 1
        },
        {
            question: "¿Los componentes del sistema de gobierno son interdependientes?",
            options: [
                "No, son completamente independientes",
                "Sí, están interrelacionados y se afectan mutuamente",
                "Solo algunos",
                "Solo procesos y estructuras"
            ],
            correct: 1
        },
        {
            question: "¿Qué papel juega la tecnología en el sistema de gobierno?",
            options: [
                "Es el único componente importante",
                "Es uno de varios componentes que juntos crean valor",
                "No es relevante",
                "Solo soporte"
            ],
            correct: 1
        },
        {
            question: "¿Cómo afecta la cultura al rendimiento de los procesos?",
            options: [
                "No afecta",
                "Influye significativamente en cómo se ejecutan y adoptan",
                "Solo afecta a RRHH",
                "Es irrelevante"
            ],
            correct: 1
        },
        {
            question: "¿Qué rol juegan las personas en el gobierno de I&T?",
            options: [
                "Solo ejecutan tareas",
                "Son esenciales para todos los aspectos del gobierno y gestión",
                "Solo gerentes son importantes",
                "Son reemplazables por tecnología"
            ],
            correct: 1
        },
        {
            question: "¿Qué es la 'gestión del conocimiento' en COBIT?",
            options: [
                "Solo documentación",
                "Captura, almacenamiento y uso de conocimiento organizacional",
                "Solo capacitaciones",
                "Solo bases de datos"
            ],
            correct: 1
        },
        {
            question: "Las métricas en COBIT se clasifican en:",
            options: [
                "Solo financieras",
                "Indicadores de Retraso (Lag) e Indicadores de Adelanto (Lead)",
                "Solo operacionales",
                "Solo estratégicas"
            ],
            correct: 1
        },
        {
            question: "¿Qué son los indicadores de retraso (Lag indicators)?",
            options: [
                "Indicadores del futuro",
                "Métricas de resultados pasados",
                "Indicadores de proceso",
                "Alarmas"
            ],
            correct: 1
        },
        {
            question: "¿Qué son los indicadores de adelanto (Lead indicators)?",
            options: [
                "Resultados históricos",
                "Métricas predictivas del rendimiento futuro",
                "Presupuestos",
                "Planes"
            ],
            correct: 1
        },
        {
            question: "¿Qué es un KPI (Key Performance Indicator)?",
            options: [
                "Cualquier métrica",
                "Indicador clave que mide el logro de objetivos",
                "Un reporte",
                "Un proceso"
            ],
            correct: 1
        },
        {
            question: "¿Qué es un KGI (Key Goal Indicator)?",
            options: [
                "Un objetivo",
                "Indicador que mide si se ha logrado una meta",
                "Un proceso",
                "Una actividad"
            ],
            correct: 1
        },
        {
            question: "¿Qué diferencia hay entre KPI y KGI?",
            options: [
                "No hay diferencia",
                "KPI mide el rendimiento del proceso, KGI mide el logro de la meta",
                "KPI es financiero, KGI operacional",
                "Son sinónimos"
            ],
            correct: 1
        },
        {
            question: "Las estructuras organizacionales deben:",
            options: [
                "Ser rígidas",
                "Adaptarse al contexto y tamaño de la organización",
                "Ser iguales para todas las empresas",
                "No cambiar nunca"
            ],
            correct: 1
        },
        {
            question: "¿Qué es la segregación de funciones en gobierno de TI?",
            options: [
                "Dividir departamentos",
                "Separar responsabilidades para evitar conflictos de interés y fraude",
                "Crear más puestos",
                "Separar oficinas físicas"
            ],
            correct: 1
        },
        {
            question: "¿Qué incluye el concepto de 'arquitectura empresarial' en COBIT?",
            options: [
                "Solo diseño de edificios",
                "Descripción de la estructura y operación de la organización",
                "Solo arquitectura de software",
                "Solo diseño de redes"
            ],
            correct: 1
        },
        {
            question: "¿Qué papel juega la comunicación en el gobierno de I&T?",
            options: [
                "No es importante",
                "Es fundamental para el éxito del gobierno y gestión",
                "Solo para marketing",
                "Solo para reportes"
            ],
            correct: 1
        },
        {
            question: "¿Qué son las 'competencias' en el contexto de COBIT?",
            options: [
                "Solo títulos",
                "Combinación de conocimientos, habilidades y comportamientos",
                "Solo experiencia",
                "Solo certificaciones"
            ],
            correct: 1
        },
        {
            question: "¿Qué incluye la gestión de talento en COBIT?",
            options: [
                "Solo reclutamiento",
                "Adquisición, desarrollo y retención de personas con habilidades adecuadas",
                "Solo capacitación",
                "Solo evaluaciones"
            ],
            correct: 1
        },
        {
            question: "¿Qué es la 'conciencia y comunicación' en COBIT?",
            options: [
                "Solo publicidad",
                "Asegurar que las partes interesadas entiendan objetivos, responsabilidades y progreso",
                "Solo emails",
                "Solo reuniones"
            ],
            correct: 1
        },
        {
            question: "¿Qué rol tiene la alta dirección en el gobierno de I&T?",
            options: [
                "No participa",
                "Es responsable de establecer dirección y supervisar",
                "Solo delega",
                "Solo aprueba presupuestos"
            ],
            correct: 1
        },
        {
            question: "¿Qué es un 'marco de control' en COBIT?",
            options: [
                "Un software de auditoría",
                "Conjunto de controles para gestionar riesgos y cumplimiento",
                "Una política",
                "Un procedimiento"
            ],
            correct: 1
        },
        {
            question: "¿Qué son los 'objetivos de control' en COBIT?",
            options: [
                "Metas financieras",
                "Declaraciones del resultado deseado de implementar controles",
                "Auditorías",
                "Inspecciones"
            ],
            correct: 1
        },
        {
            question: "¿Qué es la 'mejora continua' en el contexto de COBIT?",
            options: [
                "Solo capacitaciones",
                "Proceso iterativo de evaluación y optimización del sistema de gobierno",
                "Solo auditorías anuales",
                "Solo actualizaciones de software"
            ],
            correct: 1
        },
        {
            question: "¿Cómo se mide la efectividad del sistema de gobierno?",
            options: [
                "Solo por costos",
                "A través de métricas, auditorías y logro de objetivos",
                "Solo por satisfacción de empleados",
                "Solo por tiempo de actividad"
            ],
            correct: 1
        },
        {
            question: "¿Qué importancia tiene la documentación en COBIT?",
            options: [
                "No es importante",
                "Es esencial para consistencia, cumplimiento y transferencia de conocimiento",
                "Solo para auditorías",
                "Solo burocracia"
            ],
            correct: 1
        }
    ],
    section3: [ // Objetivos de Gestión (75 preguntas)
        {
            question: "APO01 se refiere a:",
            options: [
                "Gestionar el Marco de Gestión de TI",
                "Gestionar la Estrategia",
                "Gestionar la Innovación",
                "Gestionar el Portafolio"
            ],
            correct: 0
        },
        {
            question: "APO02 trata sobre:",
            options: [
                "Gestionar la Innovación",
                "Gestionar la Estrategia",
                "Gestionar la Arquitectura Empresarial",
                "Gestionar el Presupuesto"
            ],
            correct: 1
        },
        {
            question: "APO03 se enfoca en:",
            options: [
                "Gestionar la Arquitectura Empresarial",
                "Gestionar la Innovación",
                "Gestionar Proveedores",
                "Gestionar Proyectos"
            ],
            correct: 0
        },
        {
            question: "APO04 aborda:",
            options: [
                "Gestionar la Calidad",
                "Gestionar la Innovación",
                "Gestionar Recursos Humanos",
                "Gestionar Riesgos"
            ],
            correct: 1
        },
        {
            question: "APO05 se refiere a:",
            options: [
                "Gestionar el Portafolio",
                "Gestionar el Presupuesto y Costos",
                "Gestionar Recursos Humanos",
                "Gestionar Proveedores"
            ],
            correct: 0
        },
        {
            question: "APO06 trata sobre:",
            options: [
                "Gestionar el Presupuesto y Costos",
                "Gestionar los Recursos Humanos",
                "Gestionar las Relaciones",
                "Gestionar los Acuerdos de Servicio"
            ],
            correct: 0
        },
        {
            question: "APO07 se enfoca en:",
            options: [
                "Gestionar los Recursos Humanos",
                "Gestionar las Relaciones",
                "Gestionar la Calidad",
                "Gestionar los Cambios"
            ],
            correct: 0
        },
        {
            question: "APO08 aborda:",
            options: [
                "Gestionar las Relaciones",
                "Gestionar los Acuerdos de Servicio",
                "Gestionar Proveedores",
                "Gestionar el Conocimiento"
            ],
            correct: 0
        },
        {
            question: "APO09 se refiere a:",
            options: [
                "Gestionar los Acuerdos de Servicio",
                "Gestionar Proveedores",
                "Gestionar la Calidad",
                "Gestionar los Activos"
            ],
            correct: 0
        },
        {
            question: "APO10 trata sobre:",
            options: [
                "Gestionar Proveedores",
                "Gestionar la Calidad",
                "Gestionar los Riesgos",
                "Gestionar los Datos"
            ],
            correct: 0
        },
        {
            question: "APO11 se enfoca en:",
            options: [
                "Gestionar la Calidad",
                "Gestionar el Riesgo",
                "Gestionar la Seguridad",
                "Gestionar el Cumplimiento"
            ],
            correct: 0
        },
        {
            question: "APO12 aborda:",
            options: [
                "Gestionar el Riesgo",
                "Gestionar la Seguridad",
                "Gestionar los Datos",
                "Gestionar las Operaciones"
            ],
            correct: 0
        },
        {
            question: "APO13 se refiere a:",
            options: [
                "Gestionar la Seguridad",
                "Gestionar los Datos",
                "Gestionar el Conocimiento",
                "Gestionar los Activos"
            ],
            correct: 0
        },
        {
            question: "APO14 trata sobre:",
            options: [
                "Gestionar los Datos",
                "Gestionar el Conocimiento",
                "Gestionar los Activos",
                "Gestionar las Configuraciones"
            ],
            correct: 0
        },
        {
            question: "BAI01 se refiere a:",
            options: [
                "Gestionar Programas",
                "Gestionar la Definición de Requisitos",
                "Gestionar Proyectos",
                "Gestionar Soluciones"
            ],
            correct: 0
        },
        {
            question: "BAI02 trata sobre:",
            options: [
                "Gestionar la Definición de Requisitos",
                "Gestionar la Construcción de Soluciones",
                "Gestionar la Disponibilidad y Capacidad",
                "Gestionar los Cambios"
            ],
            correct: 0
        },
        {
            question: "BAI03 se enfoca en:",
            options: [
                "Gestionar la Construcción de Soluciones",
                "Gestionar Soluciones e Identificación",
                "Gestionar la Disponibilidad y Capacidad",
                "Gestionar los Cambios Organizacionales"
            ],
            correct: 1
        },
        {
            question: "BAI04 aborda:",
            options: [
                "Gestionar la Disponibilidad y Capacidad",
                "Gestionar el Cambio Organizacional",
                "Gestionar los Conocimientos",
                "Gestionar los Activos"
            ],
            correct: 0
        },
        {
            question: "BAI05 se refiere a:",
            options: [
                "Gestionar el Cambio Organizacional",
                "Gestionar los Cambios",
                "Gestionar la Aceptación y Transición de Cambios",
                "Gestionar las Configuraciones"
            ],
            correct: 0
        },
        {
            question: "BAI06 trata sobre:",
            options: [
                "Gestionar los Cambios",
                "Gestionar la Aceptación del Cambio y Transición",
                "Gestionar la Configuración",
                "Gestionar el Conocimiento"
            ],
            correct: 1
        },
        {
            question: "BAI07 se enfoca en:",
            options: [
                "Gestionar la Aceptación del Cambio y Transición",
                "Gestionar el Conocimiento",
                "Gestionar los Activos",
                "Gestionar la Configuración"
            ],
            correct: 0
        },
        {
            question: "BAI08 aborda:",
            options: [
                "Gestionar el Conocimiento",
                "Gestionar los Activos",
                "Gestionar la Configuración",
                "Gestionar los Proyectos"
            ],
            correct: 0
        },
        {
            question: "BAI09 se refiere a:",
            options: [
                "Gestionar los Activos",
                "Gestionar la Configuración",
                "Gestionar los Proyectos",
                "Gestionar las Pruebas"
            ],
            correct: 0
        },
        {
            question: "BAI10 trata sobre:",
            options: [
                "Gestionar la Configuración",
                "Gestionar los Proyectos",
                "Gestionar el Conocimiento",
                "Gestionar los Cambios"
            ],
            correct: 0
        },
        {
            question: "BAI11 se enfoca en:",
            options: [
                "Gestionar los Proyectos",
                "Gestionar el Conocimiento",
                "Gestionar los Datos",
                "Gestionar la Calidad"
            ],
            correct: 0
        },
        {
            question: "DSS01 se refiere a:",
            options: [
                "Gestionar las Operaciones",
                "Gestionar las Peticiones e Incidentes de Servicio",
                "Gestionar Problemas",
                "Gestionar la Continuidad"
            ],
            correct: 0
        },
        {
            question: "DSS02 trata sobre:",
            options: [
                "Gestionar las Peticiones e Incidentes de Servicio",
                "Gestionar Problemas",
                "Gestionar la Continuidad",
                "Gestionar la Seguridad"
            ],
            correct: 0
        },
        {
            question: "DSS03 se enfoca en:",
            options: [
                "Gestionar Problemas",
                "Gestionar la Continuidad",
                "Gestionar la Seguridad",
                "Gestionar los Servicios de Terceros"
            ],
            correct: 0
        },
        {
            question: "DSS04 aborda:",
            options: [
                "Gestionar la Continuidad",
                "Gestionar los Servicios de Seguridad",
                "Gestionar Proveedores",
                "Gestionar las Instalaciones"
            ],
            correct: 0
        },
        {
            question: "DSS05 se refiere a:",
            options: [
                "Gestionar los Servicios de Seguridad",
                "Gestionar los Controles de Procesos de Negocio",
                "Gestionar las Instalaciones",
                "Gestionar los Datos"
            ],
            correct: 0
        },
        {
            question: "DSS06 trata sobre:",
            options: [
                "Gestionar los Controles de Procesos de Negocio",
                "Gestionar las Instalaciones",
                "Gestionar los Datos del Negocio",
                "Gestionar las Operaciones"
            ],
            correct: 0
        },
        {
            question: "MEA01 se refiere a:",
            options: [
                "Gestionar el Rendimiento y Conformidad",
                "Gestionar el Sistema de Control Interno",
                "Gestionar el Cumplimiento con Requisitos Externos",
                "Gestionar las Auditorías"
            ],
            correct: 0
        },
        {
            question: "MEA02 trata sobre:",
            options: [
                "Gestionar el Sistema de Control Interno",
                "Gestionar el Cumplimiento con Requisitos Externos",
                "Gestionar las Auditorías Internas",
                "Gestionar las Evaluaciones"
            ],
            correct: 0
        },
        {
            question: "MEA03 se enfoca en:",
            options: [
                "Gestionar el Cumplimiento con Requisitos Externos",
                "Gestionar las Auditorías",
                "Gestionar el Aseguramiento",
                "Gestionar las Evaluaciones de Rendimiento"
            ],
            correct: 0
        },
        {
            question: "El propósito del proceso APO01 es:",
            options: [
                "Solo documentar procesos",
                "Mantener y comunicar un marco de gobierno y gestión de I&T",
                "Gestionar proyectos",
                "Contratar personal"
            ],
            correct: 1
        },
        {
            question: "El propósito del proceso APO02 es:",
            options: [
                "Solo planificar",
                "Proporcionar una visión holística del entorno y dirección estratégica",
                "Ejecutar proyectos",
                "Gestionar operaciones"
            ],
            correct: 1
        },
        {
            question: "El propósito del proceso APO03 es:",
            options: [
                "Solo diseñar sistemas",
                "Establecer una arquitectura común que se integre en procesos de negocio",
                "Comprar software",
                "Gestionar redes"
            ],
            correct: 1
        },
        {
            question: "El propósito del proceso APO04 es:",
            options: [
                "Solo generar ideas",
                "Mantener conciencia de las tendencias de TI y tecnologías emergentes",
                "Comprar tecnología",
                "Capacitar empleados"
            ],
            correct: 1
        },
        {
            question: "El propósito del proceso APO05 es:",
            options: [
                "Solo listar proyectos",
                "Asegurar que el portafolio de inversiones en I&T contenga programas que agreguen valor",
                "Ejecutar proyectos",
                "Comprar activos"
            ],
            correct: 1
        },
        {
            question: "El propósito del proceso APO06 es:",
            options: [
                "Solo crear presupuestos",
                "Gestionar actividades financieras de I&T en negocio y funciones de I&T",
                "Pagar facturas",
                "Auditar cuentas"
            ],
            correct: 1
        },
        {
            question: "El propósito del proceso APO07 es:",
            options: [
                "Solo contratar",
                "Proporcionar un enfoque estructurado para gestión de recursos humanos de I&T",
                "Capacitar únicamente",
                "Evaluar desempeño"
            ],
            correct: 1
        },
        {
            question: "El propósito del proceso APO08 es:",
            options: [
                "Solo comunicarse",
                "Gestionar relaciones con partes interesadas de manera efectiva",
                "Vender servicios",
                "Negociar contratos"
            ],
            correct: 1
        },
        {
            question: "El propósito del proceso APO09 es:",
            options: [
                "Solo firmar contratos",
                "Alinear servicios basados en I&T y niveles de servicio con necesidades y expectativas de partes interesadas",
                "Gestionar proveedores",
                "Auditar servicios"
            ],
            correct: 1
        },
        {
            question: "El propósito del proceso APO10 es:",
            options: [
                "Solo seleccionar proveedores",
                "Gestionar proveedores de I&T para minimizar riesgos y asegurar entrega de servicios",
                "Comprar productos",
                "Negociar precios"
            ],
            correct: 1
        },
        {
            question: "El propósito del proceso APO11 es:",
            options: [
                "Solo inspeccionar",
                "Gestionar la calidad en todos los procesos de I&T",
                "Certificar ISO",
                "Auditar sistemas"
            ],
            correct: 1
        },
        {
            question: "El propósito del proceso APO12 es:",
            options: [
                "Solo identificar riesgos",
                "Integrar gestión de riesgos relacionados con I&T en la gestión empresarial de riesgos",
                "Comprar seguros",
                "Evitar todos los riesgos"
            ],
            correct: 1
        },
        {
            question: "El propósito del proceso APO13 es:",
            options: [
                "Solo instalar antivirus",
                "Mantener el riesgo de seguridad de la información a un nivel aceptable",
                "Comprar firewalls",
                "Capacitar en seguridad"
            ],
            correct: 1
        },
        {
            question: "El propósito del proceso APO14 es:",
            options: [
                "Solo almacenar datos",
                "Asegurar que la información esté disponible para soportar necesidades del negocio",
                "Hacer backups",
                "Comprar almacenamiento"
            ],
            correct: 1
        },
        {
            question: "El propósito del proceso BAI01 es:",
            options: [
                "Solo planificar",
                "Gestionar programas de inversiones habilitadas por I&T",
                "Ejecutar proyectos",
                "Contratar personal"
            ],
            correct: 1
        },
        {
            question: "El propósito del proceso BAI02 es:",
            options: [
                "Solo documentar",
                "Definir y mantener requisitos de soluciones en línea con objetivos empresariales",
                "Programar código",
                "Probar sistemas"
            ],
            correct: 1
        },
        {
            question: "El propósito del proceso BAI03 es:",
            options: [
                "Solo diseñar",
                "Identificar soluciones adecuadas y mantener actualizado el portafolio",
                "Comprar software",
                "Instalar sistemas"
            ],
            correct: 1
        },
        {
            question: "El propósito del proceso BAI04 es:",
            options: [
                "Solo monitorear",
                "Equilibrar necesidades actuales y futuras de capacidad y rendimiento",
                "Comprar servidores",
                "Contratar personal"
            ],
            correct: 1
        },
        {
            question: "El propósito del proceso BAI05 es:",
            options: [
                "Solo comunicar",
                "Maximizar probabilidad de implementación exitosa de cambios organizacionales",
                "Capacitar únicamente",
                "Rediseñar procesos"
            ],
            correct: 1
        },
        {
            question: "El propósito del proceso BAI06 es:",
            options: [
                "Solo documentar",
                "Gestionar cambios de manera controlada",
                "Aprobar cambios",
                "Implementar cambios"
            ],
            correct: 1
        },
        {
            question: "El propósito del proceso BAI07 es:",
            options: [
                "Solo instalar",
                "Implementar soluciones y cambios de forma coordinada",
                "Capacitar usuarios",
                "Documentar procesos"
            ],
            correct: 1
        },
        {
            question: "El propósito del proceso BAI08 es:",
            options: [
                "Solo documentar",
                "Proporcionar conocimiento disponible, actual y validado",
                "Capacitar únicamente",
                "Crear manuales"
            ],
            correct: 1
        },
        {
            question: "El propósito del proceso BAI09 es:",
            options: [
                "Solo inventariar",
                "Gestionar activos para asegurar que entreguen valor",
                "Comprar equipos",
                "Vender activos"
            ],
            correct: 1
        },
        {
            question: "El propósito del proceso BAI10 es:",
            options: [
                "Solo documentar",
                "Mantener información de configuración actualizada y disponible",
                "Hacer inventarios",
                "Auditar sistemas"
            ],
            correct: 1
        },
        {
            question: "El propósito del proceso BAI11 es:",
            options: [
                "Solo planificar",
                "Gestionar proyectos para entregar resultados de acuerdo con requisitos",
                "Ejecutar tareas",
                "Contratar personal"
            ],
            correct: 1
        },
        {
            question: "El propósito del proceso DSS01 es:",
            options: [
                "Solo monitorear",
                "Coordinar y ejecutar actividades y procedimientos operacionales",
                "Mantener servidores",
                "Responder tickets"
            ],
            correct: 1
        },
        {
            question: "El propósito del proceso DSS02 es:",
            options: [
                "Solo responder tickets",
                "Gestionar peticiones e incidentes de servicio de manera oportuna",
                "Mantener sistemas",
                "Capacitar usuarios"
            ],
            correct: 1
        },
        {
            question: "El propósito del proceso DSS03 es:",
            options: [
                "Solo reportar problemas",
                "Identificar y clasificar problemas y sus causas raíz",
                "Arreglar errores",
                "Reiniciar sistemas"
            ],
            correct: 1
        },
        {
            question: "El propósito del proceso DSS04 es:",
            options: [
                "Solo hacer backups",
                "Desarrollar y mantener un plan de continuidad de I&T",
                "Comprar equipos de respaldo",
                "Documentar procesos"
            ],
            correct: 1
        },
        {
            question: "El propósito del proceso DSS05 es:",
            options: [
                "Solo instalar antivirus",
                "Proteger información empresarial para mantener aceptable el nivel de riesgo",
                "Configurar firewalls",
                "Capacitar en seguridad"
            ],
            correct: 1
        },
        {
            question: "El propósito del proceso DSS06 es:",
            options: [
                "Solo monitorear",
                "Gestionar controles de procesos de negocio dentro de I&T",
                "Auditar procesos",
                "Documentar controles"
            ],
            correct: 1
        },
        {
            question: "El propósito del proceso MEA01 es:",
            options: [
                "Solo reportar",
                "Recopilar, validar y evaluar metas y métricas de negocio, TI y procesos",
                "Hacer dashboards",
                "Auditar sistemas"
            ],
            correct: 1
        },
        {
            question: "El propósito del proceso MEA02 es:",
            options: [
                "Solo documentar",
                "Monitorear y evaluar el sistema de control interno",
                "Realizar auditorías",
                "Implementar controles"
            ],
            correct: 1
        },
        {
            question: "El propósito del proceso MEA03 es:",
            options: [
                "Solo cumplir leyes",
                "Evaluar el cumplimiento de I&T con requisitos externos",
                "Pagar multas",
                "Contratar abogados"
            ],
            correct: 1
        }
    ],
    section4: [ // Implementación y Factores de Diseño (75 preguntas)
        {
            question: "¿Cuántos factores de diseño tiene COBIT 2019?",
            options: ["5", "7", "10", "11"],
            correct: 3
        },
        {
            question: "Los factores de diseño ayudan a:",
            options: [
                "Comprar software",
                "Adaptar COBIT al contexto específico de la empresa",
                "Contratar consultores",
                "Certificar procesos"
            ],
            correct: 1
        },
        {
            question: "¿Cuál es el primer paso en la implementación de COBIT?",
            options: [
                "Comprar herramientas",
                "Entender el contexto y estrategia empresarial",
                "Contratar consultores",
                "Certificar personal"
            ],
            correct: 1
        },
        {
            question: "El factor 'Estrategia Empresarial' considera:",
            options: [
                "Solo objetivos financieros",
                "Visión, misión y objetivos estratégicos de la empresa",
                "Solo expansión geográfica",
                "Solo reducción de costos"
            ],
            correct: 1
        },
        {
            question: "El factor 'Metas Empresariales' se refiere a:",
            options: [
                "Solo metas de TI",
                "Objetivos específicos que la empresa quiere alcanzar",
                "Solo metas financieras",
                "Solo metas de marketing"
            ],
            correct: 1
        },
        {
            question: "El factor 'Perfil de Riesgo' incluye:",
            options: [
                "Solo riesgos de TI",
                "Apetito y tolerancia al riesgo de la organización",
                "Solo riesgos financieros",
                "Solo amenazas externas"
            ],
            correct: 1
        },
        {
            question: "El factor 'Problemas Relacionados con I&T' aborda:",
            options: [
                "Solo problemas técnicos",
                "Temas actuales que requieren atención de gobierno",
                "Solo fallas de hardware",
                "Solo bugs de software"
            ],
            correct: 1
        },
        {
            question: "El factor 'Panorama de Amenazas' considera:",
            options: [
                "Solo virus",
                "Amenazas de seguridad, tecnológicas y de cumplimiento",
                "Solo hackers",
                "Solo malware"
            ],
            correct: 1
        },
        {
            question: "El factor 'Requisitos de Cumplimiento' incluye:",
            options: [
                "Solo leyes locales",
                "Regulaciones, leyes y estándares aplicables",
                "Solo auditorías",
                "Solo certificaciones"
            ],
            correct: 1
        },
        {
            question: "El factor 'Rol de TI' se refiere a:",
            options: [
                "Solo soporte técnico",
                "El papel que juega TI en la creación de valor empresarial",
                "Solo operaciones",
                "Solo desarrollo"
            ],
            correct: 1
        },
        {
            question: "El factor 'Modelo de Sourcing' considera:",
            options: [
                "Solo outsourcing",
                "Cómo la organización obtiene capacidades de I&T",
                "Solo compras",
                "Solo proveedores"
            ],
            correct: 1
        },
        {
            question: "El factor 'Métodos de Implementación de TI' incluye:",
            options: [
                "Solo metodología en cascada",
                "Enfoques como ágil, DevOps, tradicional",
                "Solo desarrollo interno",
                "Solo compra de software"
            ],
            correct: 1
        },
        {
            question: "El factor 'Estrategia de Adopción de Tecnología' aborda:",
            options: [
                "Solo compra de tecnología",
                "Enfoque de la organización hacia tecnologías emergentes",
                "Solo cloud computing",
                "Solo big data"
            ],
            correct: 1
        },
        {
            question: "El factor 'Tamaño de la Empresa' influye en:",
            options: [
                "Solo el presupuesto",
                "La complejidad y escala del sistema de gobierno",
                "Solo el número de empleados",
                "Solo los ingresos"
            ],
            correct: 1
        },
        {
            question: "¿Qué es el 'Modelo de Operaciones' como factor de diseño?",
            options: [
                "Solo procedimientos operativos",
                "Cómo la organización estructura sus operaciones de I&T",
                "Solo turnos de trabajo",
                "Solo horarios"
            ],
            correct: 1
        },
        {
            question: "¿Por qué es importante considerar múltiples factores de diseño?",
            options: [
                "Para complicar la implementación",
                "Porque cada organización es única y requiere un enfoque adaptado",
                "Para gastar más presupuesto",
                "Para contratar más consultores"
            ],
            correct: 1
        },
        {
            question: "¿Cómo afecta el tamaño de la empresa al gobierno de TI?",
            options: [
                "No afecta",
                "Determina la complejidad de estructuras y procesos necesarios",
                "Solo afecta el presupuesto",
                "Solo afecta el personal"
            ],
            correct: 1
        },
        {
            question: "Una empresa con rol de TI 'Estratégico' significa:",
            options: [
                "TI solo da soporte",
                "TI es crítico para la estrategia y ventaja competitiva",
                "TI solo reduce costos",
                "TI es tercerizaado"
            ],
            correct: 1
        },
        {
            question: "Una empresa con rol de TI 'Soporte' significa:",
            options: [
                "TI no existe",
                "TI principalmente soporta operaciones existentes",
                "TI lidera la estrategia",
                "TI es innovador"
            ],
            correct: 1
        },
        {
            question: "El modelo de sourcing 'Insourcing' significa:",
            options: [
                "Todo es externo",
                "Capacidades de I&T desarrolladas y gestionadas internamente",
                "Todo está en la nube",
                "Todo es tercerizado"
            ],
            correct: 1
        },
        {
            question: "El modelo de sourcing 'Outsourcing' implica:",
            options: [
                "Todo es interno",
                "Dependencia de proveedores externos para capacidades de I&T",
                "No hay TI",
                "Solo consultores"
            ],
            correct: 1
        },
        {
            question: "Un alto apetito de riesgo significa:",
            options: [
                "Evitar todos los riesgos",
                "Disposición a aceptar más riesgo por mayores beneficios",
                "No gestionar riesgos",
                "Solo aceptar riesgos pequeños"
            ],
            correct: 1
        },
        {
            question: "Baja tolerancia al riesgo implica:",
            options: [
                "Aceptar cualquier riesgo",
                "Necesidad de controles estrictos y gestión cuidadosa",
                "No preocuparse por riesgos",
                "Eliminar TI"
            ],
            correct: 1
        },
        {
            question: "¿Qué industrias típicamente tienen alta regulación?",
            options: [
                "Todas por igual",
                "Financiera, salud, energía, telecomunicaciones",
                "Solo retail",
                "Solo manufactura"
            ],
            correct: 1
        },
        {
            question: "Una empresa en industria altamente regulada debe:",
            options: [
                "Ignorar regulaciones",
                "Implementar controles más rigurosos de cumplimiento",
                "Solo preocuparse por ganancias",
                "No necesita gobierno de TI"
            ],
            correct: 1
        },
        {
            question: "La metodología ágil es más apropiada cuando:",
            options: [
                "Todo es estable",
                "Se requiere flexibilidad y entregas iterativas",
                "No hay cambios",
                "Todo está definido"
            ],
            correct: 1
        },
        {
            question: "El enfoque tradicional (cascada) es mejor cuando:",
            options: [
                "Todo cambia constantemente",
                "Requisitos son bien conocidos y estables",
                "Hay máxima incertidumbre",
                "No hay planificación"
            ],
            correct: 1
        },
        {
            question: "DevOps se enfoca en:",
            options: [
                "Solo desarrollo",
                "Integración de desarrollo y operaciones para entregas continuas",
                "Solo operaciones",
                "Solo testing"
            ],
            correct: 1
        },
        {
            question: "Adopción temprana de tecnología (early adopter) implica:",
            options: [
                "Nunca cambiar",
                "Disposición a probar tecnologías nuevas rápidamente",
                "Solo usar tecnología probada",
                "Evitar innovación"
            ],
            correct: 1
        },
        {
            question: "Adopción conservadora de tecnología significa:",
            options: [
                "Probar todo lo nuevo",
                "Preferencia por tecnologías maduras y probadas",
                "No usar tecnología",
                "Solo experimentar"
            ],
            correct: 1
        },
        {
            question: "¿Qué es un 'problema relacionado con I&T'?",
            options: [
                "Solo bugs",
                "Tema actual que afecta el rendimiento o riesgo de I&T",
                "Solo fallas de hardware",
                "Solo costos"
            ],
            correct: 1
        },
        {
            question: "Ejemplos de amenazas en el panorama de amenazas incluyen:",
            options: [
                "Solo virus",
                "Ciberataques, cambios regulatorios, tecnologías disruptivas",
                "Solo malware",
                "Solo phishing"
            ],
            correct: 1
        },
        {
            question: "El cumplimiento normativo puede incluir:",
            options: [
                "Solo leyes locales",
                "GDPR, SOX, HIPAA, PCI-DSS, regulaciones locales e internacionales",
                "Solo ISO",
                "Solo auditorías internas"
            ],
            correct: 1
        },
        {
            question: "¿Cómo influye la cultura organizacional en COBIT?",
            options: [
                "No influye",
                "Afecta la adopción y efectividad del gobierno de I&T",
                "Solo importa en RRHH",
                "Es irrelevante"
            ],
            correct: 1
        },
        {
            question: "Una cultura orientada al control requiere:",
            options: [
                "Menos procesos",
                "Énfasis en procesos formales y documentación",
                "No documentar nada",
                "Solo creatividad"
            ],
            correct: 1
        },
        {
            question: "Una cultura orientada a la innovación prefiere:",
            options: [
                "Máxima burocracia",
                "Flexibilidad, experimentación y procesos ágiles",
                "Rigidez total",
                "No cambiar nunca"
            ],
            correct: 1
        },
        {
            question: "¿Qué es la 'madurez del gobierno' de una organización?",
            options: [
                "La edad de la empresa",
                "El nivel de sofisticación en prácticas de gobierno",
                "El número de empleados",
                "Los años de operación"
            ],
            correct: 1
        },
        {
            question: "Una organización con baja madurez debe:",
            options: [
                "Implementar todo COBIT de inmediato",
                "Empezar con prácticas básicas y evolucionar gradualmente",
                "No hacer nada",
                "Solo contratar consultores"
            ],
            correct: 1
        },
        {
            question: "Una organización con alta madurez puede:",
            options: [
                "Ignorar gobierno",
                "Implementar prácticas más sofisticadas y optimización",
                "Retroceder a prácticas básicas",
                "Eliminar procesos"
            ],
            correct: 1
        },
        {
            question: "¿Qué es un 'enfoque de implementación'?",
            options: [
                "Una herramienta de software",
                "La estrategia y método para introducir COBIT en la organización",
                "Un tipo de proyecto",
                "Un rol"
            ],
            correct: 1
        },
        {
            question: "Un enfoque 'Big Bang' de implementación significa:",
            options: [
                "Implementación gradual",
                "Implementación completa y simultánea",
                "No implementar nada",
                "Solo pilotos"
            ],
            correct: 1
        },
        {
            question: "Un enfoque 'Incremental' de implementación implica:",
            options: [
                "Todo de una vez",
                "Implementación por fases o áreas",
                "No implementar",
                "Solo planear"
            ],
            correct: 1
        },
        {
            question: "¿Cuál es el rol del patrocinio ejecutivo en implementación?",
            options: [
                "No es necesario",
                "Es crítico para el éxito y apoyo organizacional",
                "Solo firmar documentos",
                "Solo aprobar presupuesto"
            ],
            correct: 1
        },
        {
            question: "¿Qué es un 'programa de implementación'?",
            options: [
                "Un software",
                "Conjunto coordinado de proyectos para implementar gobierno",
                "Un curso de capacitación",
                "Un documento"
            ],
            correct: 1
        },
        {
            question: "Las fases típicas de implementación incluyen:",
            options: [
                "Solo ejecución",
                "Iniciación, diseño, implementación, operación, mejora continua",
                "Solo planificación",
                "Solo monitoreo"
            ],
            correct: 1
        },
        {
            question: "¿Qué es una 'evaluación de línea base' (baseline assessment)?",
            options: [
                "Un presupuesto",
                "Evaluación del estado actual antes de implementar cambios",
                "Un plan futuro",
                "Una auditoría externa"
            ],
            correct: 1
        },
        {
            question: "¿Por qué es importante la línea base?",
            options: [
                "No es importante",
                "Proporciona punto de partida y permite medir progreso",
                "Solo para documentar",
                "Solo para cumplimiento"
            ],
            correct: 1
        },
        {
            question: "¿Qué es un 'gap analysis' (análisis de brechas)?",
            options: [
                "Análisis de costos",
                "Comparación entre estado actual y deseado",
                "Análisis de riesgos",
                "Análisis financiero"
            ],
            correct: 1
        },
        {
            question: "El análisis de brechas ayuda a:",
            options: [
                "Encontrar problemas técnicos",
                "Priorizar mejoras necesarias",
                "Reducir costos",
                "Contratar personal"
            ],
            correct: 1
        },
        {
            question: "¿Qué es un 'roadmap de implementación'?",
            options: [
                "Un mapa geográfico",
                "Plan temporal que muestra cómo y cuándo implementar mejoras",
                "Un organigrama",
                "Un presupuesto"
            ],
            correct: 1
        },
        {
            question: "¿Qué factores afectan la priorización de procesos?",
            options: [
                "Solo el costo",
                "Riesgo, valor de negocio, recursos disponibles, madurez actual",
                "Solo el tiempo",
                "Solo la tecnología"
            ],
            correct: 1
        },
        {
            question: "¿Es necesario implementar todos los procesos de COBIT?",
            options: [
                "Sí, todos sin excepción",
                "No, se seleccionan según necesidades y contexto",
                "Solo los de gobierno",
                "Solo los de gestión"
            ],
            correct: 1
        },
        {
            question: "¿Qué es la 'personalización' de COBIT?",
            options: [
                "Crear un marco nuevo",
                "Adaptar COBIT al contexto específico usando factores de diseño",
                "Ignorar COBIT",
                "Solo usar partes que gustan"
            ],
            correct: 1
        },
        {
            question: "La gestión del cambio organizacional es importante porque:",
            options: [
                "No es importante",
                "Las personas y la cultura son cruciales para el éxito",
                "Solo importan los procesos",
                "Solo importa la tecnología"
            ],
            correct: 1
        },
        {
            question: "Resistencia al cambio se puede mitigar con:",
            options: [
                "Imposición forzada",
                "Comunicación, capacitación e involucramiento",
                "Ignorar quejas",
                "Despedir empleados"
            ],
            correct: 1
        },
        {
            question: "¿Qué es un 'quick win' en implementación?",
            options: [
                "Una lotería",
                "Mejora rápida que demuestra valor y genera momentum",
                "Un proyecto grande",
                "Una auditoría"
            ],
            correct: 1
        },
        {
            question: "Los 'quick wins' son importantes porque:",
            options: [
                "No son importantes",
                "Generan credibilidad y apoyo para la iniciativa",
                "Solo ahorran tiempo",
                "Solo reducen costos"
            ],
            correct: 1
        },
        {
            question: "¿Qué rol juegan las métricas en la implementación?",
            options: [
                "Ninguno",
                "Permiten medir progreso y demostrar valor",
                "Solo para reportes",
                "Solo para auditorías"
            ],
            correct: 1
        },
        {
            question: "¿Qué es la mejora continua en el contexto de COBIT?",
            options: [
                "Cambiar constantemente todo",
                "Proceso iterativo de evaluación y optimización",
                "No cambiar nada",
                "Solo hacer auditorías"
            ],
            correct: 1
        },
        {
            question: "El ciclo PDCA (Plan-Do-Check-Act) se usa para:",
            options: [
                "Planificar vacaciones",
                "Gestionar mejora continua",
                "Aprobar presupuestos",
                "Contratar personal"
            ],
            correct: 1
        },
        {
            question: "¿Qué es un 'centro de excelencia' para gobierno de TI?",
            options: [
                "Un edificio",
                "Equipo especializado que promueve y apoya el gobierno de I&T",
                "Un departamento de TI",
                "Una certificación"
            ],
            correct: 1
        },
        {
            question: "¿Cuál es el rol de la capacitación en implementación?",
            options: [
                "No es necesaria",
                "Esencial para desarrollar competencias y cambiar comportamientos",
                "Solo para certificaciones",
                "Solo para nuevos empleados"
            ],
            correct: 1
        },
        {
            question: "¿Qué es un 'modelo de madurez objetivo' (target maturity)?",
            options: [
                "La edad de la empresa",
                "El nivel de madurez deseado para cada proceso",
                "Un presupuesto",
                "Un organigrama"
            ],
            correct: 1
        },
        {
            question: "¿Por qué no todos los procesos necesitan nivel 5 de madurez?",
            options: [
                "Es un error, todos deben ser nivel 5",
                "El nivel apropiado depende del riesgo y valor de negocio",
                "Todos deben ser nivel 1",
                "No importa el nivel"
            ],
            correct: 1
        },
        {
            question: "¿Qué es la 'alineación estratégica' en gobierno de TI?",
            options: [
                "Alinear organigramas",
                "Asegurar que estrategias de I&T soporten objetivos empresariales",
                "Alinear horarios",
                "Alinear presupuestos"
            ],
            correct: 1
        },
        {
            question: "¿Qué es la 'entrega de valor' en gobierno de TI?",
            options: [
                "Entregar paquetes",
                "Asegurar que inversiones en I&T generen beneficios esperados",
                "Entregar proyectos",
                "Entregar reportes"
            ],
            correct: 1
        },
        {
            question: "¿Qué es la 'gestión de recursos' en gobierno de TI?",
            options: [
                "Solo gestión de presupuesto",
                "Uso óptimo de recursos de I&T (humanos, financieros, tecnológicos)",
                "Solo contratar personal",
                "Solo comprar equipos"
            ],
            correct: 1
        },
        {
            question: "¿Qué es la 'gestión de riesgos' en gobierno de TI?",
            options: [
                "Evitar todos los riesgos",
                "Identificar, evaluar y gestionar riesgos a nivel aceptable",
                "Transferir todos los riesgos",
                "Ignorar los riesgos"
            ],
            correct: 1
        },
        {
            question: "¿Qué es la 'medición del desempeño' en gobierno de TI?",
            options: [
                "Solo evaluaciones de personal",
                "Monitoreo de métricas para evaluar logro de objetivos",
                "Solo auditorías",
                "Solo reportes financieros"
            ],
            correct: 1
        },
        {
            question: "El éxito de la implementación de COBIT depende principalmente de:",
            options: [
                "Solo tecnología",
                "Compromiso de liderazgo, gestión del cambio y adaptación al contexto",
                "Solo presupuesto",
                "Solo consultores"
            ],
            correct: 1
        },
        {
            question: "¿Cuál es el error más común en implementación de gobierno?",
            options: [
                "Gastar poco",
                "Enfoque puramente técnico sin considerar personas y cultura",
                "Gastar mucho",
                "Contratar consultores"
            ],
            correct: 1
        },
        {
            question: "La sostenibilidad del gobierno de TI requiere:",
            options: [
                "Solo implementación inicial",
                "Compromiso continuo, mejora y adaptación",
                "Solo auditorías anuales",
                "Solo certificaciones"
            ],
            correct: 1
        }
    ]
};
