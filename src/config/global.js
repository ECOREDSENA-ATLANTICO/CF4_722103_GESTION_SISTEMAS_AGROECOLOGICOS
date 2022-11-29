export default {
  global: {
    componenteFormativo:
      'Planeación del agroecosistema con enfoque agroecológico',
    descripcionCurso:
      'En este componente, se conocerán las herramientas y elementos esenciales para ser implementados en la unidad productiva e iniciar un proceso de reconversión hacia la producción agroecológica y entender la importancia de los procesos de planificación y manejo agroecológicos que mejorarán la productividad',
    fondoBannerPrincipal: require('@/assets/curso/images/header/fondo-banner-principal.svg'),
    imagenBannerPrincipal: require('@/assets/curso/images/header/banner-principal.png'),
    fondoBannerInterno: require('@/assets/curso/images/header/interno.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/images/header/1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/images/header/2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Diseño agroecológico',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Objetivos, metas y límites',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Influencia de ecosistemas adyacentes',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Plan de manejo agroecológico',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Herramientas de planificación',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Prácticas de manejo para transición o reconversión',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Cronograma y actividades del manejo agroecológico',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Indicadores de la agroecología',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo:
              'Metodología para la evaluación de sistemas de manejo incorporando indicadores de sostenibilidad',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Normativa ambiental',
            hash: 't_3_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Alfonzo, D., Torrez-Alruiz, M., Alban, R. y Griffon, D. (2008). Indicadores de sustentabilidad en Agroecología. Agroecología.',
      link:
        'http://agroecologiavenezuela.blogspot.com/2008/05/indicadores-de-sustentabilidad-en.html',
    },
    {
      referencia:
        'Altieri, M. (2001). Agroecología: principios y estrategias para diseñar sistemas agrarios sustentables. En Ediciones Científicas Americanas, p. 27-34',
      link: 'https://agroeco.org/wp-content/uploads/2010/10/cap2-Altieri.pdf',
    },
    {
      referencia:
        'Astier, M. (2007). Curso Internacional de Agroecología. Universidad de Antioquia.',
    },
    {
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2020). Etapas de la Transición Agroecológica [Video]. YouTube.',
      link:
        'https://www.youtube.com/watch?v=xPZWkSDk48o&ab_channel=EcosistemadeRecursosEducativosDigitalesSENA',
    },
    {
      referencia:
        'Gobernación de la Provincia de Santa Fe. (2019). Guía Básica para la Planificación y Manejo Agroecológico de Cultivos. ',
      link: 'http://www.insitu.org.ar/PDF/Guia_Manejo_Agroecologico.pdf',
    },
    {
      referencia:
        'López-Ridaura, S., Masera, O. y Astier, M. (2001). Evaluando la sostenibilidad de los sistemas agrícolas integrados: El marco MESMIS. Leisa Revista de Agroecología, 16(4)',
      link:
        'https://www.leisa-al.org/web/index.php/volumen-16-numero-4/2340-evaluando-la-sostenibilidad-de-los-sistemas-agricolas-integrados-el-marco-mesmis',
    },
    {
      referencia:
        'Noguera-Talavera, Á., Salmerón, F. y Reyes-Sánchez, N. (2019). Bases teórico-metodológicas para el diseño de sistemas agroecológicos. Revista de la Facultad de Ciencias Agrarias UNCUYO, 51(1).',
      link: 'http://www.scielo.org.ar/pdf/refca/v51n1/v51n1a20.pdf',
    },
    {
      referencia:
        'Organización de las Naciones Unidas para la Alimentación y la Agricultura [FAO]. (2018). Los 10 elementos de la agroecología Guía para la transición hacia sistemas alimentarios y agrícolas sostenible',
      link: 'https://www.fao.org/3/i9037es/i9037es.pdf',
    },
    {
      referencia:
        'Organización de las Naciones Unidas para la Alimentación y la Agricultura [FAO]. (2021a). Agricultura Campesina, Familiar y Comunitaria en Colombia y Brasil [Video]. YouTube. ',
      link:
        'https://www.youtube.com/watch?v=2uko4uzdqLw&ab_channel=FoodandAgricultureOrganizationoftheUnitedNations',
    },
    {
      referencia:
        'Organización de las Naciones Unidas para la Alimentación y Agricultura [FAO]. (2021b). Documento propuesta de lineamientos de política pública en agroecología para Colombia. Sembrando Capacidades Cooperación Brasil - Colombia - FAO. ',
      link:
        'http://sembrandocapacidades.fao.org.co/wp-content/uploads/2022/01/7_Propuesta-de-lineamientos-de-politica-publica-en-agroecologia-para-Colombia-_compressed.pdf',
    },
    {
      referencia:
        'Organización de las Naciones Unidas para la Alimentación y la Agricultura [FAO]. (2022). The 10 Elements of Agroecology: Enabling transitions to sustainable agriculture and food systems [Video]. YouTube',
      link: 'https://www.youtube.com/watch?v=6Reh7c2-ewI',
    },
    {
      referencia:
        'Redprodepaz: Saberes que transforman territorios. (2017). Diseño Agroecológico [Video]. YouTube',
      link:
        'https://www.youtube.com/watch?v=TnzzSONvduU&ab_channel=Redprodepaz%3ASaberesquetransformanterritorios',
    },
  ],
  glosario: [
    {
      termino: 'Agrobiodiversidad o diversidad agrícola',
      significado:
        'es un tipo de diversidad que nace de la intersección de la diversidad biológica y cultural, y que gira en torno a cuáles son los alimentos, fibras y medicinas de origen natural y cómo se producen. Así, la agrobiodiversidad engloba, por un lado, a las especies de plantas, animales, hongos y microorganismos recolectados, cultivados y domesticados para la alimentación y otros usos, así como sus parientes silvestres. Por el otro lado, incluye a los componentes que sostienen a los sistemas de producción agrícola o agroecosistemas (microorganismos del suelo, depredadores, polinizadores, etc.). En ambos casos, la agrobiodiversidad incluye la diversidad a nivel ecosistema, especie y genes.',
    },
    {
      termino: 'Captación y aprovechamiento de agua lluvia',
      significado:
        'todo tipo de esfuerzo técnico, simple o complejo, surgido de la iniciativa del productor o desarrollado científicamente, para aumentar la cantidad de agua de lluvia que se almacena en el suelo o en estructuras construidas, de tal manera que pueda ser utilizada posteriormente bajo condiciones de déficit de lluvia.',
    },
    {
      termino: 'Finca',
      significado:
        'en ella se relacionan una serie de elementos ecológicos, sociales, económicos y culturales, con los que el/la productor/a desarrolla su proyecto de vida y el de su familia. Desde el enfoque agroecológico, es entendido como un agroecosistema.',
    },
    {
      termino: 'Predio',
      significado:
        'es la unidad básica del sistema de producción agropecuaria.',
    },
    {
      termino: 'Restauración ecológica',
      significado:
        'se define como el proceso de asistir la recuperación de un ecosistema que ha sido degradado, dañado o destruido, tomando como marco de referencia la sucesión vegetal. En la agricultura, se habla de una degradación consecuencia del cambio de uso del suelo o como un proceso que recupera y mejora la funcionalidad de un ecosistema dentro de paisajes conformados por tierras en producción agrícola y áreas de conservación.',
    },
  ],
  complementario: [
    {
      tema: '2.2 Prácticas de manejo para transición o reconversión',
      referencia:
        'Organización de las Naciones Unidas para la Alimentación y la Agricultura [FAO]. (2021). Agricultura Campesina, Familiar y Comunitaria en Colombia y Brasil [Video]. YouTube.',
      tipo: 'Video ',
      link:
        'https://www.youtube.com/watch?v=2uko4uzdqLw&ab_channel=FoodandAgricultureOrganizationoftheUnitedNations',
    },
    {
      tema: '2.2 Prácticas de manejo para transición o reconversión',
      referencia:
        'Organización de las Naciones Unidas para la Alimentación y la Agricultura [FAO]. (2021). Experiencias de transición Agroecológica en Colombia. Sembrando Capacidades Cooperación Brasil - Colombia - FAO.',
      tipo: 'Cartilla',
      link:
        'http://sembrandocapacidades.fao.org.co/wp-content/uploads/2022/01/11_Experiencias-de-transicion-agroecologica-en-Colombia_compressed.pdf',
    },
    {
      tema: '2.2 Prácticas de manejo para transición o reconversión',
      referencia:
        'Servicio Nacional de Aprendizaje [SENA]. (2021). Taller “Implementación de procesos para la transición agroecológica” [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=pZB7mMSOnNI&ab_channel=SENA',
    },
    {
      tema: '3.1 Indicadores de la agroecología',
      referencia:
        'Organización de las Naciones Unidas para la Alimentación y la Agricultura [FAO]. (2014). SAFA - Evaluación de la Sostenibilidad de los Sistemas Agrícolas y Alimentarios [Video]. YouTube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=MtDJV-24KuE&ab_channel=FoodandAgricultureOrganizationoftheUnitedNations ',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'María Camila García Santamaría',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Responsable del equipo de Diseño Instruccional',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Ingrid Natalia Lozano Muñoz',
        cargo: 'Experto temático',
        centro: 'Centro Agropecuario La Granja - Regional Tolima',
      },
      {
        nombre: 'Diego E. Acevedo Guevara',
        cargo: 'Diseñador instruccional',
        centro:
          'Centro de la Industria, la Empresa y los Servicios CIES- Regional Norte de Santander',
      },
      {
        nombre: 'Andrés Felipe Velandia Espitia',
        cargo: 'Asesor metodológica',
        centro: 'Centro de Diseño y Metrología  - Distrito Capital',
      },
      {
        nombre: 'Darío González',
        cargo: 'Corrector de estilo',
        centro: 'Centro de Diseño y Metrología - Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Sofia Suárez Suárez',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Gustavo Adolfo Marún Suárez',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Yuli Marcela Gómez',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
