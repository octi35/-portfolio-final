export interface CaseStudy {
  id: number;
  name: string;
  oneLiner: string;
  stack: string[];
  demoUrl: string;
  image: string;
  problem: string;
  thinking: {
    options: string[];
    discarded: string[];
    tradeoff: string;
  };
  build: { title: string; body: string }[];
  obstacle: string;
  result: string;
}

// El texto admite **resaltado** — se renderiza con el mismo estilo
// que usa el resto de la página para destacar frases.
export const caseStudies: CaseStudy[] = [
  {
    id: 1,
    name: "Opero",
    oneLiner:
      "Sistema de gestión que centraliza ventas, clientes, inventario, facturación y finanzas de una PyME en una sola plataforma web.",
    stack: ["React", "TypeScript", ".NET / C#", "SQL Server", "n8n", "REST API"],
    demoUrl: "https://opero-henna.vercel.app/",
    image: "/images/Opero.png",

    problem:
      "La operación estaba partida en tres lugares: un sistema de escritorio instalado en una sola PC de la oficina, planillas de Excel para ventas y stock, y herramientas sueltas para facturación. **Nadie podía consultar ni cargar nada fuera de la oficina** y el mismo dato se cargaba dos o tres veces. Cada vez que el dueño quería saber cómo venía el mes, había que armar el número a mano cruzando planillas: tardaba horas y llegaba tarde para decidir algo con eso.",

    thinking: {
      options: [
        "Atacar solo el dolor más urgente —el control de stock— con una herramienta puntual, y dejar el resto de la operación como estaba.",
        "Una sola plataforma que se hiciera cargo del circuito completo, desde que entra el cliente hasta que se emite la factura.",
        "Sobre el motor del sistema: apoyarlo en la tecnología que la empresa ya tenía funcionando, o rehacerlo entero con la que a mí me resultaba más rápida de escribir.",
      ],
      discarded: [
        "**Descarté los módulos sueltos** porque el problema real del cliente no era el stock: era que ningún dato se hablaba con el otro. Sumar una cuarta herramienta al lado de las tres que ya tenía hubiera hecho el reporte del mes más difícil, no más fácil. Todo el valor estaba en la integración, no en el módulo.",
        "**Descarté rehacer el motor con la tecnología que a mí me resultaba más cómoda.** La empresa ya tenía sus datos y su gente moviéndose en SQL Server; construir sobre eso significaba que el sistema se apoye en algo que el cliente ya tiene en casa, y que si mañana necesita otro programador, lo encuentre sin buscar un perfil raro. Yo hubiera avanzado más rápido por el otro camino, pero mi velocidad de desarrollo es mi problema, no el suyo.",
      ],
      tradeoff:
        "Prioricé que el sistema **lo pueda mantener alguien que no sea yo** antes que entregarlo lo antes posible. Ir por la tecnología que la empresa ya conocía me costó semanas extra y me obligó a ser más ordenado, pero saca al cliente de depender de una sola persona. En un sistema que va a ser el centro de la operación diaria durante años, el riesgo de quedar atado al proveedor pesa más que un mes de calendario.",
    },

    build: [
      {
        title: "Un solo modelo de datos para toda la operación",
        body: "Armé el esquema de forma que un cliente, una venta y un movimiento de stock sean **la misma entidad para todos los módulos**, en vez de que cada módulo tenga su propia tabla de clientes. La alternativa eran módulos independientes sincronizándose entre sí: más simple de arrancar, pero ahí volvía el dato duplicado que veníamos a eliminar.",
      },
      {
        title: "La operación expuesta como API, separada de la pantalla",
        body: "El backend expone todo como API y el frontend la consume. Podría haber hecho una app tradicional donde el servidor devuelve las pantallas ya armadas —bastante más corto de escribir—, pero separarlos permite que mañana la misma información alimente una app móvil o un tablero sin tocar el núcleo del sistema.",
      },
      {
        title: "Las automatizaciones fuera del código",
        body: "Las tareas repetitivas —avisos, recordatorios, cargas programadas— las saqué del sistema y las armé como **flujos visuales en n8n**. La alternativa era dejarlas escritas dentro del código: cada cambio de una regla del negocio hubiera necesitado un programador y un despliegue nuevo. Así el cliente ve el flujo y puede pedir un ajuste sin que se toque el sistema.",
      },
    ],

    obstacle:
      "Lo que no salió a la primera fue **la migración de los datos históricos**. El sistema viejo tenía años de clientes, comprobantes y movimientos. La primera importación pasó \"limpia\" según mis scripts, pero con los números mal: clientes duplicados escritos de tres formas distintas, comprobantes sin su contraparte y campos que en el sistema viejo se usaban para algo distinto de lo que decía su nombre. Tuve que frenar y rehacer la migración al revés: en vez de seguir de largo, que cortara el proceso ante cualquier inconsistencia y la dejara a la vista. Después, varias pasadas corriendo en paralelo contra el sistema viejo hasta que los totales coincidieran. Fue la parte que más tiempo se llevó y no estaba en el plan original.",

    result:
      "Hoy es **el sistema principal de la empresa** y el de escritorio quedó fuera de servicio. Lo que cambió concretamente: la carga dejó de hacerse dos veces, así que desaparecieron los errores de tipeo que antes se corregían después; el reporte de cómo viene el mes, que antes se armaba a mano cruzando planillas, ahora está en pantalla en el momento; y el equipo entra desde cualquier lugar, no solo desde la PC de la oficina. El proceso que antes ocupaba horas de trabajo manual hoy se resuelve en minutos.",
  },
];
