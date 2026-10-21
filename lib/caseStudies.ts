import type { Localized } from "@/lib/i18n";

export interface CaseStudyContent {
  oneLiner: string;
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

export interface CaseStudy {
  id: number;
  name: string;
  stack: string[];
  demoUrl: string;
  image: string;
  content: Localized<CaseStudyContent>;
}

// El texto admite **resaltado** — se renderiza con el mismo estilo
// que usa el resto de la página para destacar frases.
export const caseStudies: CaseStudy[] = [
  {
    id: 1,
    name: "Opero",
    stack: ["React", "TypeScript", ".NET / C#", "SQL Server", "n8n", "REST API"],
    demoUrl: "https://opero-henna.vercel.app/",
    image: "/images/Opero.png",

    content: {
      es: {
        oneLiner:
          "Sistema de gestión que centraliza ventas, clientes, inventario, facturación y finanzas de una PyME en una sola plataforma web.",

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

      en: {
        oneLiner:
          "Management system that brings an SMB's sales, customers, inventory, invoicing and finances together in a single web platform.",

        problem:
          "Operations were split across three places: a desktop system installed on a single office PC, Excel spreadsheets for sales and inventory, and scattered tools for invoicing. **Nobody could look anything up or enter data outside the office**, and the same data was entered two or three times. Whenever the owner wanted to know how the month was going, someone had to put the numbers together by hand by cross-referencing spreadsheets: it took hours and arrived too late to base any decision on it.",

        thinking: {
          options: [
            "Tackle only the most urgent pain point — inventory control — with a single-purpose tool, and leave the rest of the operation as it was.",
            "A single platform that takes over the entire flow, from the moment a customer comes in until the invoice is issued.",
            "On the system's engine: build it on the technology the company already had running, or rewrite it entirely in whatever was fastest for me to write.",
          ],
          discarded: [
            "**I ruled out standalone modules** because the client's real problem wasn't inventory: it was that none of their data talked to each other. Adding a fourth tool next to the three they already had would have made the monthly report harder, not easier. All the value was in the integration, not in the module.",
            "**I ruled out rewriting the engine in the technology I was most comfortable with.** The company already had its data and its people working in SQL Server; building on that meant the system would rest on something the client already has in-house, and that if they need another developer tomorrow, they can find one without hunting for a rare profile. I would have moved faster the other way, but my development speed is my problem, not theirs.",
          ],
          tradeoff:
            "I prioritized a system that **someone other than me can maintain** over shipping it as fast as possible. Going with the technology the company already knew cost me extra weeks and forced me to be more disciplined, but it frees the client from depending on a single person. In a system that will sit at the center of daily operations for years, the risk of being locked into one vendor outweighs a month on the calendar.",
        },

        build: [
          {
            title: "A single data model for the whole operation",
            body: "I designed the schema so that a customer, a sale and a stock movement are **the same entity across every module**, instead of each module having its own customer table. The alternative was independent modules syncing with each other: simpler to get started, but it would have brought back the duplicated data we were there to eliminate.",
          },
          {
            title: "Operations exposed as an API, separate from the UI",
            body: "The backend exposes everything as an API and the frontend consumes it. I could have built a traditional app where the server returns fully rendered pages — quite a bit less code to write — but keeping them separate means that tomorrow the same data can power a mobile app or a dashboard without touching the core of the system.",
          },
          {
            title: "Automations outside the code",
            body: "I pulled the repetitive tasks — alerts, reminders, scheduled imports — out of the system and built them as **visual workflows in n8n**. The alternative was to keep them hard-coded: every change to a business rule would have required a developer and a new deployment. This way the client can see the workflow and ask for a tweak without anyone touching the system.",
          },
        ],

        obstacle:
          "What didn't work the first time was **migrating the historical data**. The old system held years of customers, receipts and transactions. The first import came through \"clean\" according to my scripts, but with the numbers wrong: duplicate customers spelled three different ways, receipts missing their counterpart, and fields the old system used for something other than what their name said. I had to stop and redo the migration the other way around: instead of pushing through, it would halt at any inconsistency and surface it. Then came several passes running in parallel against the old system until the totals matched. It was the part that took the longest, and it wasn't in the original plan.",

        result:
          "Today it's **the company's main system**, and the desktop one has been retired. What concretely changed: data is no longer entered twice, so the typos that used to be fixed after the fact are gone; the month-to-date report, which used to be put together by hand from spreadsheets, is now on screen instantly; and the team can log in from anywhere, not just from the office PC. A process that used to take hours of manual work now takes minutes.",
      },
    },
  },
];
