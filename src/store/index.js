import { createStore } from 'vuex'

export default createStore({
  state: {
    articles: [
      {id:1,author: 'Christian Ricardo',title: 'Isaac Newton',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Portrait_of_Sir_Isaac_Newton%2C_1689.jpg/220px-Portrait_of_Sir_Isaac_Newton%2C_1689.jpg',description: 'Isaac Newton nació el 4 de enero de 1643 (aunque en ese entonces el calendario usado era el juliano), y correspondía al 25 de diciembre de 1642, día de la Navidad.4El parto fue prematuro aparentemente y nació tan pequeño que nadie pensó que lograría vivir mucho tiempo.5​ Su vida corrió peligro por lo menos durante una semana. Fue bautizado el 1 de enero de 1643, 12 de enero en el calendario gregoriano',favorite: false},
      {id:2,author: 'Juan Perez',title: 'Albert Einstein',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Photoelectric_effect.svg/250px-Photoelectric_effect.svg.png',description:'El primero de sus artículos de 1905 se titulaba Un punto de vista heurístico sobre la producción y transformación de luz. En él, Einstein proponía la idea de «quanto» de luz (ahora llamados fotones) y mostraba cómo se podía utilizar este concepto para explicar el efecto fotoeléctrico.',favorite: false},
      {id:3,author: 'Christian Ricardo',title: 'Big Bang',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Universe_expansion_es.png/250px-Universe_expansion_es.png',description: 'Pese al nombre, el Big Bang no se refiere a una "explosión" en un espacio ya existente, sino que designa la expansión y creación conjunta de materia, espacio y tiempo, a partir de lo que se conoce como una singularidad, es decir, un punto al que matemáticamente nos podemos acercar más y más, pero sin llegar a él.',favorite: true},
      {id:4,author: 'Marcela Perez',title: 'Bosón de Higgs',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/CMS_Higgs-event.jpg/300px-CMS_Higgs-event.jpg',description: 'El bosón de Higgs o partícula de Higgs es una partícula elemental propuesta en el modelo estándar de física de partículas. Recibe su nombre en honor a Peter Higgs, quien, junto con otros, propuso en 1964 el hoy llamado mecanismo de Higgs para explicar el origen de la masa de las partículas elementales. El bosón de Higgs constituye el cuanto del campo de Higgs (la más pequeña excitación posible de este campo). Según el modelo propuesto, no posee espín, carga eléctrica o color, es muy inestable y se desintegra rápidamente: su vida media es del orden del zeptosegundo. En algunas variantes del modelo estándar puede haber varios bosones de Higgs.',favorite: true},
      {id:5,author: 'Christian Ricardo',title: 'Ley de Faraday',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Induction_experiment.png/250px-Induction_experiment.png',description: 'La ley de inducción electromagnética de Faraday (o simplemente ley de Faraday) establece que la tensión inducida en un circuito cerrado es directamente proporcional a la rapidez con que cambia en el tiempo el flujo magnético que atraviesa una superficie cualquiera con el circuito como borde',favorite: true},
      {id:6,author: 'Marco Alonso',title: 'Ley de Lenz',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Ley_de_lenz.gif/220px-Ley_de_lenz.gif',description: 'La ley de Lenz para el campo electromagnético relaciona cambios producidos en el campo eléctrico por un conductor con la propiedad de variar el flujo magnético, y afirma que las tensiones o voltajes aplicadas a un conductor generan una fuerza electro motriz (fem) cuyo campo magnético se opone a toda variación de la corriente original que lo produjo. Esta ley se llama así en honor del físico germano-báltico Heinrich Lenz, quien la formuló en el año 1834',favorite: true},
      {id:7,author: 'Marco Vela',title: 'Ley de Ohm',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/OhmsLaw.svg/250px-OhmsLaw.svg.png',description: 'La ley de Ohm, postulada por el físico y matemático alemán Georg Simon Ohm, es una ley básica para entender los fundamentos principales de los circuitos eléctricos. Establece que la diferencia de potencial {\displaystyle V}V que aplicamos entre los extremos de un conductor determinado es directamente proporcional a la intensidad de la corriente {\displaystyle I}I que circula por el citado conductor.',favorite: false},
      {id:8,author: 'Enrique Ortiz',title: 'Programacion',image:'https://i.blogs.es/5a9e4f/pankaj-patel-_sgrnwavnkw-unsplash/650_1200.jpeg',description: 'La programación es el proceso utilizado para idear y ordenar las acciones necesarias para realizar un proyecto.En la actualidad, la noción de programación se encuentra muy asociada a la creación de aplicaciones de informática y videojuegos. En este sentido, es el proceso por el cual una persona desarrolla un programa, valiéndose de una herramienta que le permita escribir el código (el cual puede estar en uno o varios lenguajes, como C++, Java y Python, entre otros) y de otra que sea capaz de “traducirlo” a lo que se conoce como lenguaje de máquina, que puede "comprender" el microprocesador.',favorite: true},
      {id:9,author: 'Marcos Alonso',title: 'Estado Solido',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Icecube.jpg/250px-Icecube.jpg',description: 'El sólido (del latín solĭdus) es un estado de agregación de la materia, que se caracteriza porque opone resistencia a cambios de forma y de volumen. Sus partículas se encuentran juntas y también se ven correctamente ordenadas.1​ Las moléculas de un sólido tienen una gran cohesión y adoptan formas bien definidas. Existen varias disciplinas que estudian los sólidos:',favorite: false},
      {id:10,author: 'Marcos Alonso',title: 'Estado Plasma',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Plasma-lamp_2.jpg/220px-Plasma-lamp_2.jpg',description: 'En física y química, se denomina plasma (del latín plasma y del griego πλάσμα ‘formación’) al cuarto estado de agregación de la materia, un estado fluido similar al estado gaseoso pero en el que determinada proporción de sus partículas están cargadas eléctricamente (ionizadas) y no poseen equilibrio electromagnético, por eso son buenos conductores eléctricos y sus partículas responden fuertemente a las interacciones electromagnéticas de largo alcance.',favorite: true},
      {id:11,author: 'Rafael Vela',title: 'Mecanica Cuantica',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Hydrogen_Density_Plots.png/220px-Hydrogen_Density_Plots.png',description: 'La mecánica cuántica es la rama de la física que estudia la naturaleza a escalas espaciales pequeñas. Los sistemas atómicos y subatómicos, sus interacciones con la radiación electromagnética y otras fuerzas, en términos de cantidades observables. Se basa en la observación de que todas las formas de energía se liberan en unidades discretas o paquetes llamados cuantos. Estos cuantos tienen la característica de pertenecer todos a un grupo específico de bosones, estando cada uno ligado a una interacción fundamental.',favorite: false},
      {id:12,author: 'Lucas Hernandez',title: 'Atomos',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Helium_atom_QM.svg/220px-Helium_atom_QM.svg.png',description: 'El átomo es la unidad constituyente más pequeña de la materia que tiene propiedades de un elemento químico.1​ Cada sólido, líquido, gas y plasma se compone de átomos neutros o ionizados. Los átomos son microscópicos; los tamaños típicos son alrededor de 100 pm (diez mil millonésima parte de un metro).2​ No obstante, los átomos no tienen límites bien definidos y hay diferentes formas de definir su tamaño que dan valores diferentes pero cercanos. Los átomos son lo suficientemente pequeños para que la física clásica dé resultados notablemente incorrectos. A través del desarrollo de la física, los modelos atómicos han incorporado.',favorite: true},
      {id:13,author: 'Lucas Hernandez',title: 'Sociologia',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Moreno_Sociogram_1st_Grade.png/220px-Moreno_Sociogram_1st_Grade.png',description: 'La sociología es la ciencia social que se encarga del análisis científico de la sociedad humana o población regional.1​ Estudia los fenómenos colectivos producidos por la actividad social de los seres humanos, dentro del contexto histórico-cultural en el que se encuentran inmersos.En la sociología se utilizan metodologías de investigación interdisciplinarias para el análisis e interpretación, desde diversas perspectivas teóricas, de las causas y significados que motivan la aparición de diversas tendencias de comportamiento social. Mientras algunos sociólogos realizan investigaciones que pueden aplicarse directamente a la política social y el bienestar, otros se centran en refinar la comprensión de los procesos sociales. Abarca desde el nivel de microsociología de la interacción y las organizaciones, hasta el nivel macro de los sistemas y la estructura social',favorite: false},
      {id:14,author: 'Enrique Ortiz',title: 'Revolucion Industrial',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Maquina_vapor_Watt_ETSIIM.jpg/300px-Maquina_vapor_Watt_ETSIIM.jpg',description: 'La Revolución Industrial o Primera Revolución Industrial es el proceso de transformación económica, social y tecnológica que se inició en la segunda mitad del siglo XVIII en el Reino de Gran Bretaña, que se extendió unas décadas después a gran parte de Europa occidental y América Anglosajona, y que concluyó entre 1820 y 1840. Durante este periodo se vivió el mayor conjunto de transformaciones económicas, tecnológicas y sociales de la historia de la humanidad desde el Neolítico,1​ que vio el paso desde una economía rural basada fundamentalmente en la agricultura y el comercio a una economía de carácter urbano, industrializada y mecanizada.',favorite: true},
      {id:15,author: 'Christian Ricardo',title: 'Guerra del Pacifico',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Map_of_the_War_of_the_Pacific.es2.svg/300px-Map_of_the_War_of_the_Pacific.es2.svg.png',description: 'La guerra del Pacífico fue un conflicto armado acontecido entre 1879 y 1884 que enfrentó a Chile contra los aliados Bolivia y Perú. Fue desarrollada en el océano Pacífico, en el desierto de Atacama y en las serranías y valles peruanos.En febrero de 1878, Bolivia estableció un nuevo impuesto a la empresa chilena Compañía de Salitres y Ferrocarril de Antofagasta (CSFA), violando el tratado de límites de 1874 que prohibía nuevos impuestos o el aumento de estos. Chile protestó y solicitó someter el pleito a un arbitraje, pero el gobierno boliviano, presidido por Hilarión Daza, consideraba el asunto como interno y sujeto a la jurisdicción de las cortes bolivianas.',favorite: false},
      {id:16,author: 'Christian Ricardo',title: 'Mesopotamia',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Lilith_Periodo_de_Isin_Larsa_y_Babilonia.JPG/306px-Lilith_Periodo_de_Isin_Larsa_y_Babilonia.JPG',description: 'El término alude principalmente a esta zona en la Edad Antigua que se dividía en Asiria (al norte) y Babilonia (al sur). Babilonia (también conocida como Caldea), a su vez, se dividía en Acadia (parte alta) Y Caldea (parte baja).1​ Sus gobernantes eran llamados patesi.Los nombres de ciudades como Ur o Nippur, de héroes legendarios como Gilgameš, del Código Hammurabi, de los asombrosos edificios conocidos como zigurats, provienen de Mesopotamia Antigua. Y episodios mencionados en la Biblia o en la Torá, como los del diluvio universal o la leyenda de la Torre de Babel, aluden a hechos ocurridos en esta zona.La historia de Mesopotamia está dividida en cinco etapas: periodo sumerio, Imperio acadio, Imperio babilónico, Imperio asirio e Imperio neobabilónico.El sistema social estaba ligado a la economía, por lo que no había castas ni estratificación, solo diferenciación en las posiciones económicas.',favorite: false},
      {id:17,author: 'Christian Ricardo',title: '¿Que es una organizacion?',image:'https://economipedia.com/wp-content/uploads/organizacion-gestion.jpg',description: 'Una organización es una estructura ordenada donde coexisten e interactúan personas con diversos roles, responsabilidades o cargos que buscan alcanzar un objetivo particular.La organización usualmente cuenta con normas (formales o informales) que especifican la posición de cada persona en la estructura y las tareas que debería llevar a cabo.',favorite: true},
    ],
    filter: [],
    darkmode: false
  },
  mutations: {
    setArticles(state,articles){
      state.articles = articles
    },
    setSearch(state,filter){
      state.filter = filter
    },
    setDarkmode(state,darkmode){
      state.darkmode = darkmode
    }
  },
  actions: {
    handleFavoriteArticle({commit,state},index){
      state.articles[index].favorite =  !state.articles[index].favorite;
      commit('setArticles',state.articles);
    },
    handelDeleteArticle({commit,state},id){
      const newArrayArticles = state.articles.filter(article => article.id !== id);
      commit('setArticles',newArrayArticles);
    },
    handleDarkmode({commit,state}){
      commit('setDarkmode',!state.darkmode);
    }
    // handleSearchArticle({commit,state},title){
    //   if(title !== ''){
    //     const filter = state.articles.filter(article => article.title.toLowerCase().includes(title.toLowerCase()));
    //     console.log(filter);
    //     commit('setSearch',filter);
    //   }else{
    //     commit('setSearch',state.articles);
    //   }
    // }
  },
  getters: {
    getFilteredArticles: (state)=>{
      return state.articles.map(article => {
        return {
          author: article.author,
          title: article.title,
          image: article.image,
          favorite: article.favorite,
          id: article.id
        }
      })
    },
    getArticlesbyFavorites: (state)=>{
      return state.articles.filter(article => article.favorite && article.author);
    },
    getMyArticles: (state)=>{
      return state.articles.filter(article => article.author === 'Christian Ricardo')
    }
  }
})
