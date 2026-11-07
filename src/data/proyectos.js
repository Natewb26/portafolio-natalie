
/* ==============================================
   DATOS DE LOS PROYECTOS ACADÉMICOS

   Este archivo almacena las evidencias que
   mostraremos en nuestro portafolio profesional.

   Cada proyecto contiene los cuatro apartados
   exigidos por el profesor de SENATI:
   
   1. Título
   2. Contexto
   3. Aporte personal
   4. Aprendizaje o resultado

   También incluye tecnologías, capturas y
   el enlace a su repositorio de GitHub.
   ============================================== */

export const proyectos = [

  // ============================================
  // PROYECTO 1: CYBERVERSE GAMES
  // ============================================

  {
    // Identificador único para React.
    id: 'cyberverse-games',

    // Nombre que aparecerá en la tarjeta.
    titulo: 'CyberVerse Games',

    // Resumen breve del proyecto.
    descripcion:
      'Plataforma web interactiva para explorar videojuegos, realizar búsquedas, aplicar filtros por género y gestionar favoritos.',

    // Estado de desarrollo.
    estado: 'Proyecto académico',

    // Modalidad de desarrollo.
    modalidad: 'Individual',

    // Contexto académico solicitado por SENATI.
    contexto:
      'Proyecto académico desarrollado de manera individual, orientado a la creación de una plataforma web para consultar y explorar videojuegos. La aplicación presenta un catálogo organizado por títulos, géneros y plataformas, mediante una interfaz conectada a un servidor desarrollado con Node.js y Express.',

    // Responsabilidades personales.
    aportePersonal:
      'Desarrollé íntegramente el proyecto, desde la estructura y diseño de la interfaz hasta la implementación de sus funcionalidades. Construí el catálogo de videojuegos, la búsqueda dinámica, los filtros por género, la visualización de información detallada y la gestión de favoritos mediante almacenamiento local. Asimismo, implementé una API REST con Node.js y Express para consultar la información de los videojuegos.',

    // Competencias y aprendizajes obtenidos.
    aprendizaje:
      'Fortalecí mis conocimientos en HTML, CSS, JavaScript, Node.js y Express, así como en la comunicación entre frontend y backend mediante una API REST. Como resultado, desarrollé una plataforma interactiva que permite consultar, buscar, filtrar y visualizar videojuegos, además de gestionar favoritos. El proyecto reforzó mis competencias en programación web, organización de información y resolución de problemas.',

    // Tecnologías identificadas en el repositorio.
    tecnologias: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'Node.js',
      'Express',
      'API REST',
      'LocalStorage'
    ],

     // Capturas reales de CyberVerse Games.
    imagenes: [
      {
        src: '/proyectos/cyberverse/img1.png',
        alt: 'Pantalla principal de CyberVerse Games'
      },
      {
        src: '/proyectos/cyberverse/img2.png',
        alt: 'Catálogo de videojuegos con tarjetas'
      },
      {
        src: '/proyectos/cyberverse/img3.png',
        alt: 'Ventana de información detallada de un videojuego'
      },
      {
        src: '/proyectos/cyberverse/img4.png',
        alt: 'Vista general del catálogo de CyberVerse Games'
      }
    ],

    // Enlace público al código fuente.
    github:
      'https://github.com/Natewb26/videogames-pag-web'
  },

  // ============================================
  // PROYECTO 2: SISTEMATIENDA
  // ============================================

  {
    // Identificador único.
    id: 'sistema-tienda',

    // Nombre del proyecto.
    titulo: 'SistemaTienda',

    // Descripción breve para la tarjeta.
    descripcion:
      'Aplicación web Full Stack para la consulta de productos, con catálogo interactivo, búsqueda, filtros por categoría y ordenamiento por precios.',

    // Estado actual real del proyecto.
    estado: 'En desarrollo',

    // Modalidad de trabajo.
    modalidad: 'Individual',

    // Contexto de la evidencia académica.
    contexto:
      'Proyecto académico desarrollado individualmente que actualmente continúa en desarrollo. Su propósito es construir una aplicación web de tienda que facilite la consulta y visualización de productos mediante una interfaz organizada. El sistema incluye productos de café, cacao y accesorios, con funcionalidades de búsqueda, filtrado y ordenamiento.',

    // Aporte personal al proyecto.
    aportePersonal:
      'Soy responsable del desarrollo completo del proyecto, incluyendo la organización de la aplicación, la construcción de componentes reutilizables con React y la configuración de rutas mediante React Router. También desarrollé una API REST con Node.js y Express, e implementé funcionalidades de catálogo, búsqueda, filtrado por categorías, ordenamiento por precios y formulario de contacto. Asimismo, trabajé en la integración entre frontend y backend mediante peticiones HTTP.',

    // Aprendizajes y resultados actuales.
    aprendizaje:
      'El desarrollo del proyecto me ha permitido fortalecer mis conocimientos en React, componentes reutilizables, gestión de estados, navegación entre páginas y consumo de servicios REST. Actualmente, la aplicación cuenta con funcionalidades implementadas para visualizar productos, realizar búsquedas y aplicar filtros. Como el sistema continúa en desarrollo, sigo trabajando en su mejora y revisión funcional, fortaleciendo mis competencias de desarrollo web Full Stack.',

    // Tecnologías verificadas en el código fuente.
    tecnologias: [
      'React',
      'Vite',
      'JavaScript',
      'Node.js',
      'Express',
      'React Router',
      'API REST',
      'CSS3'
    ],

    // Capturas reales de SistemaTienda (HERLENSHOP).
    imagenes: [
      {
        src: '/proyectos/sistema-tienda/tienda1.png',
        alt: 'Página de inicio de HERLENSHOP'
      },
      {
        src: '/proyectos/sistema-tienda/tienda2.png',
        alt: 'Catálogo de productos de HERLENSHOP'
      },
      {
        src: '/proyectos/sistema-tienda/tienda3.png',
        alt: 'Página de detalle de un producto'
      }
    ],

    // Repositorio público del proyecto.
    github:
      'https://github.com/nataliewb26/SistemaTienda'
  }

];
