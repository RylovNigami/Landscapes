<template>
  <q-page class="flex flex-center">
    <DestinationCard v-for="destination in destinationList" v-bind="destination" :destination="destination"
      :key="destination.name" />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import DestinationCard from "src/components/DestinationCard.vue";

const destinationList = [
  {
    name: "Parque Nacional Médanos de Coro",
    ubication: "Coro - Falcón",
    description: "Las colinas de arena en el Parque Nacional Médanos de Coro son un panorama espectacular, principalmente porque se encuentran ubicadas en lo que es básicamente un país tropical.",
    img: "https://www.lugaresturisticos.org/wp-content/uploads/2018/06/Medanos-de-Coro-1.jpg",

    img2: "https://olaolatravel.com/wp/wp-content/uploads/2018/08/M%C3%A9danos.de_.Coro_.National.Park_.640.8081.jpg",
    img1: "https://pbs.twimg.com/media/EQFszOLXYAA5OU5.jpg",
    img3: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Medanos.jpg/220px-Medanos.jpg",

    ubicationimg: "https://map.viamichelin.com/map/carte?map=viamichelin&z=10&lat=11.39939&lon=-69.66139&width=550&height=382&format=png&version=latest&layer=background&debug_pattern=.*",
    localization: "Ubicado en el estado Falcón que abarca la jurisdicción de los municipios Miranda, Colina y Falcón, en el noroeste de Venezuela. Su área más importante está circunscrita alrededor del istmo, en la vía a la Península de Paraguaná al costado norte de la ciudad de Santa Ana de Coro.",

    activities: "En el parque nacional están permitidas las excursiones, los baños de playa, deportes náuticos (navegación, esquí, surfing y submarinismo) en áreas establecidas; juegos al aire libre, caminatas, acampadas y picnic.",
    activitiesimg1: "https://www.araguato.org/sites/default/files/Sandboard%20%20araguato.org-6_0.jpg?slideshow=true&slideshowAuto=false&slideshowSpeed=3000&speed=350&transition=elastic",
    activitiesimg2: "https://www.araguato.org/sites/default/files/Sandboard%20%20araguato.org-2_0.jpg?slideshow=true&slideshowAuto=false&slideshowSpeed=3000&speed=350&transition=elastic",
    activitiesimg3: "https://i0.wp.com/www.reporteconfidencial.info/wp-content/uploads/2019/09/medanos5.jpg?resize=750%2C400&ssl=1",

    information: "El Parque Nacional Médanos de Coro fue creado 06 de febrero de 1974, con el objetivo de preservar, proteger, conservar y manejar con criterio de sustentabilidad ambiental los ecosistemas tales como el paisaje desértico de los médanos. Posee 91.280 hectáreas. Los Médanos es una de las representaciones naturales más importantes del Paisaje Venezolano y se formaron por la acción constante de los vientos alisios que soplan por lo general de este a oeste.",
    information2: "Los médanos, cambiantes por la acción del viento, caracterizan este parque. En los alrededores hay manglares, espinares y tierras con vegetación herbácea. Las especies vegetales son escasas por la acción del viento y la aridez de la zona. Predominan: cují yaque, yabo, espinito, tunas, cardones y cactus. La fauna es escasa, pero los reptiles, lagartos e iguanas son comunes. Entre las aves destacan: gavilán primitivo, perdiz, dora, cardenal coriano y turpial. Los mamíferos más comunes son: chivo, zorro, murciélago, oso hormiguero y conejo. "
  },
  {
    name: "Parque Nacional Sierra Nevada",
    ubication: "Entre Barinas y Mérida",
    description: "Las colinas de arena en el Parque Nacional Médanos de Coro son un panorama espectacular, principalmente porque se encuentran ubicadas en lo que es básicamente un país tropical.",
    img: "https://cdn.shortpixel.ai/spai/w_600+q_lossy+ret_img+to_webp/https://www.lugaresturisticos.org/wp-content/uploads/2018/06/Parque-Nacional-Cierra-Nevada.jpg",

    img1: "https://cdn.bitlysdowssl-aws.com/wp-content/uploads/2018/05/parque-nacional-sierra-nevada-cumple-anos_233321.jpg",
    img2: "https://media.noticiaalminuto.com/2019/05/SIERRA-NEVADA.jpg",
    img3: "https://televen.com/wp-content/uploads/2018/05/sierra-nevada.gif",

    ubicationimg: "https://4.bp.blogspot.com/-Bhwkdxf240M/TpgdV1CW20I/AAAAAAAAE0I/7oL2Sc7Ra4g/s640/SIERRA+NEVADA.gif",
    localization: "En la Cordillera de Los Andes, ocupando la formación montañosa al Sur-Este de la Falla de Boconó. El Parque ocupa parte de los Municipios Aricagua, Campo Elías, Libertador, Santos Marquina, Rangel y Cardenal Quintero en el Estado Mérida y de los Municipios Bolívar, Pedraza y Sucre del Estado Barinas",

    activities: "Hay diferentes atractivos para los turistas como el Centro de visitantes Laguna de Mucubají. Teleférico y ascensión a Pico Espejo. Es el teleférico mas alto y largo del mundo. Pueblo de los Nevados. Campamento del área recreativa de la Mucuy; y diferentes rutas de excursionistas para el ascenso a los picos nevados.",
    activitiesimg1: "https://www.venelogia.com/uploads/teleferico.jpg",
    activitiesimg2: "https://media-cdn.tripadvisor.com/media/photo-s/02/30/02/12/filename-20449-316723720918.jpg",
    activitiesimg3: "https://media-cdn.tripadvisor.com/media/photo-s/05/28/19/ae/cascadas.jpg",

    information: "El Sierra Nevada es el segundo parque nacional en decretarse en Venezuela. En las altas cumbres andinas compartidas por el estado Mérida y el estado Barinas, nacen trece caudalosos ríos que transitan largos y estrechos valles para luego y regar las vastas planicies de la cuenca de Maracaibo y la cuenca de los llanos. Esa capacidad de producir agua abundante para la agricultura, la industria, la generación de electricidad y para el uso cotidiano en los hogares de la región está protegida permanentemente por la figura legal protectora del parque nacional. ",
    information2: "Con el afán de proteger las cabeceras de sus ríos, los merideños procedieron a resguardar sus nacientes en la cordillera andina merideña. El parque abarca una gran superficie y una variedad de ecosistemas, debidas a la variación de temperatura y de humedad de los climas de baja, media y alta montaña. Dichas condiciones climáticas abrigan una variada cobertura vegetal en cuyo seno viven especies de plantas y animales que hacen de este parque el más diverso del país. "
  },
  {
    name: "Parque Nacional Cuevas del Guacharo",
    ubication: "Caripe - Maturin",
    description: "Esta es la caverna más grande del país, cuenta con una longitud de 10.5 km y 23 metros de alto, formada de roca caliza, cuya formación tomo millones de años remontándose al periodo cretáceo; además de piedra caliza, en la cavidad se pueden apreciar formaciones de estalagmitas, estalactitas y espeleotemas.",
    img: "https://primicias24.s3.amazonaws.com/public/uploads/2020/09/cueva-del-guacharo.gif",

    img1: "https://haimaneltroudi.com/wp-content/uploads/2020/02/Cueva-del-Guacharo-1.jpg",
    img2: "https://miro.medium.com/v2/resize:fit:1400/1*QmtbiViFDFYd3UogYqCXZQ.jpeg",
    img3: "https://haimaneltroudi.com/wp-content/uploads/2020/02/3zpz8WA8faio5AYVTC5rGYAVaz3wA4wqxEDggkaAq6AhDqS1wy32Qxh2AyfScexrMZLZWQ41KHr3utdjqHQ1juiEaUWkrmQ6tTcudemCUTvvhWEKST3a2ku6jXXbPYqnP6XgYmskmGMGSqyAZtYe-1024x513.jpeg",

    ubicationimg: "https://res.cloudinary.com/nexdu/image/upload/s--QoY04VYt--/f_auto,fl_lossy,q_auto/v1/city/ubicacion-de-caripe-en-monagas-venezuela.png",
    localization: "Esta ubicado en el tramo oriental de la Serranía del Interior del Sistema Montañoso Caripe, en las serranías Cerro Negro, Cerro Papelón y Cerro El Periquito del Macizo de Caripe, entre el estado Monagas y el estado Sucre. Ocupa parte de los municipios Caripe, Acosta, Piar y Bolívar (Monagas) y Ribero (Sucre) ",

    activities: "Las actividades principales del parque son las incursiones dentro de la famosa Cueva del Guacharo y el momento de la salida de los Guacharos de la cueva en las ultimas horas de la tarde; tambien se puede hacer excursionismo a traves de los diferentes que caminos que llevan pequeñas quebradas y cascadas, ademas el parque cuenta con un museo donde se exponen las especies, historia y demas datos del monumento natural.",
    activitiesimg1: "https://i.pinimg.com/originals/e7/22/90/e722900f5908778d37d152fdb1825f3e.jpg",
    activitiesimg2: "https://miviaje.com/wp-content/uploads/2019/11/cueva-guarachos.jpg",
    activitiesimg3: "https://i0.wp.com/laverdaddemonagas.com/wp-content/uploads/2023/01/gobernador-luna-proyecta-a-monagas-como-potencia-turistica-este-2023-laverdaddemonagas.com-monagas3.jpg?resize=1080%2C720&ssl=1",

    information: "En él se encuentra una de las cuevas más espectaculares del mundo, debido a su longitud y dimensiones, la cual presenta gran número de salones. Oír el graznido de aproximadamente 10.000 guácharos que viven en las rocas calizas que al anochecer abandonan la cueva en busca de alimento, es una experiencia única.",
    information2: "Está conformado por dos unidades o bloques separados: el de Cerro Negro, donde se ubica la Cueva del Guácharo, y el de la Cuenca Media del río Caripe. El Parque abarca 62.700 ha; las cuales se distribuyen de la siguiente forma, al sector Cerro Negro le corresponden 15.500 ha. y al de la Cuenca Media del río Caripe 47.200 ha. Fue declarado parque nacional El Guácharo el 27 de mayo de 1975 para garantizar la continuidad de los procesos geológicos y biológicos que se cumplen en la Cueva del Guácharo. Por su parte, el Cerro Negro, donde se localiza la Cueva del Guácharo fue el primer Monumento Natural en Venezuela el 15 de julio de 1949, con el nombre de Alejandro de Humboldt. "
  },
  {
    name: "Parque Los Aleros",
    ubication: "Mérida - Mérida",
    description: "Este es un encantador parque temático que busca transmitir a sus habitantes la esencial del estilo de vida de los pueblos andinos venezolanos, sus costumbres y tradiciones de mediados de los años 30.",
    img: "https://cdn.shortpixel.ai/spai/w_600+q_lossy+ret_img+to_webp/https://www.lugaresturisticos.org/wp-content/uploads/2018/06/parque-Los-Aleros.jpg",

    img1: "https://www.ticketparques.com/wp-content/uploads/2022/03/Los_Aleros_producto.jpg",
    img2: "https://elaragueno.com.ve/wp-content/uploads/2022/10/Turismo-620x400.jpg",
    img3: "https://1.bp.blogspot.com/-uE9afmr7RfU/VvFyLzcjVlI/AAAAAAAAA-M/5WRALAjVtnkI3aGgwX1fhmfwAmHkffQOA/s1600/parque%2Blos%2Baleros%2B%252816%2529.JPG",

    ubicationimg: "https://www.venezuelatuya.com/andes/merida/rutadelasnieves.gif",
    localization: "​Los Aleros está ubicado en la carretera trasandina a 25 kilómetros al noreste de la ciudad de Mérida, en la vecindad de Tabay, ​ y a unos 40 km al suroeste de Apartaderos.",

    activities: "En este pueblo se encuentra una gran cantidad atracciones para los turistas los cuales buscan revivir la vida como lo era en el pasado, por eso hay lugares como barberias tipicas de la epoca, casas coloniales con vestimentas y prendas como museo, plazas, parques, y cualquier cantidad de objetos y servicios cotidianos traidos del pasado, ademas de las mismas personas que enseñan, disponen y practican las costumbres de la epoca en este lugar, ofreciendo una experiencia inolvidable.",
    activitiesimg1: "https://www.turistum.com/wp-content/uploads/2015/04/parque-los-aleros.jpg",
    activitiesimg2: "https://comunicacioncontinua.com/wp-content/uploads/2014/07/Cumple-juan-2012-futbol-country-david-piscina-063.jpg",
    activitiesimg3: "https://images.mnstatic.com/f7/c7/f7c79dfb656d5a05e8003c2548fe53c7.jpg",

    information: "Los Aleros es un parque temático ubicado en el estado Mérida, Venezuela construido en 1984 para representar un típico pueblo de los Andes en la década de 1930.​",
    information2: "El personal que labora en Los Aleros visten de manera tradicional a la época que reviven y los guías del parque suelen ser adolescentes.​ Este lugar emplea a más de 120 personas e indirectamente provee trabajo a más de 2 mil. Este lugar fue abierto al público el 28 de julio de 1984 de la mano de su creador, el merideño Alexis Montilla, quien soñó una vez crear un pueblo que reviviera la forma de vida y costumbres de los andinos hacia finales de los años 30 del siglo pasado, es decir, el lugar y el tiempo en los cuales nacieron, crecieron y vivieron sus antepasados."
  },
  {
    name: "Parque Nacional Canaima",
    ubication: "Sudoeste de Venezuela",
    description: "Situado al sudeste de Venezuela, el territorio de este parque, que linda con las fronteras de Guyana y Brasil, abarca tres millones de hectáreas cubiertas en un 65% por tepuyes, montañas tabulares con características biogeológicas únicas que presentan un gran interés para la geología. Sus escarpados farallones y cascadas forman espectaculares paisajes, ademas de contar con diversas atracciones turisticas como los jacuzzis de Roraima, el Monte Roraima y el Salto Angel.",
    img: "https://cdn.shortpixel.ai/spai/w_680+q_lossy+ret_img+to_webp/https://www.lugaresturisticos.org/wp-content/uploads/2018/06/roraima.jpg",

    img3: "https://navicu.com/storage/app/uploads/public/62a/3a7/818/62a3a781858ef414375923.jpg",
    img2: "https://www.ecured.cu/images/4/46/Canaima998xgh7.jpg",
    img1: "https://www.arameru.com/wp-content/uploads/2017/09/parque-canaima-turismo-venezuela-travel.jpg",

    ubicationimg: "https://www.venezuelatuya.com/parques/canaima/MapaCanaima.gif",
    localization: "Situado al suroeste del estado de Bolívar es el segundo parque nacional más grande de Venezuela, ocupa una superficie de 30.000 km² Se extiende hasta la frontera con Guyana y Brasil, por su tamaño es considerado el sexto parque nacional más grande del mundo.",

    activities: "El parque Nacional Canaima es el segundo parque nacional más grande de Venezuela y uno de los más famosos del país y del mundo, ya que allí se encuentra el mayor salto de agua conocido: El salto Angel, con sus casi 1000 metros de altura. Las excursiones a la zona oriental del parque son memorables y relativamente fáciles de realizar, ya que hay una carretera asfaltada que atraviesa el parque desde Puerto Ordaz hasta Santa Elena de Uairen. Cuando se menciona 'Canaima', comunmente uno se refiere a la Laguna de Canaima, principal destino turístico de la región, adonde llegan los vuelos, están los alojamientos y campamentos y desde donde se hacen varias excursiones, principalmente al salto Angel, al salto Sapo, los jacuzzis de Roraima, entre otros.",
    activitiesimg1: "https://talcualdigital.com/wp-content/uploads/2022/09/Turismo-premium-Canaima-960x640.jpg",
    activitiesimg2: "https://ecopoliticavenezuela.org/wp-content/uploads/2018/01/Canaima-21-1.jpg",
    activitiesimg3: "https://ilamdir.org/blobs/ilamdir/w1280h720/328/2020/26/gs2jl2pa04f11.jpg",

    information: "El parque Nacional Canaima, es donde se encuentran los famosos tepuyes, esas montañas de cumbres planas, que se presentan majestuosas en el horizonte, y que ofrecen unos ecosistemas realmente únicos, debido al aislamiento que produce su mayor altura con el resto de la sabana. En esas cumbres el clima es mucho más frío y húmedo debido a que las nubes se acumulan sobre ellas y producen un microclima especial, relativamente fresco cuando cubiertas, pero de una fuerte insolación cuando están expuestas al sol. Esto hace que su clima sea, en cierto modo, equiparable al de los páramos andinos.",
    information2: "Cerca de 65% del parque está ocupado por mesetas rocosas, llamadas tepuyes. Estos constituyen un medio biológico único, presentando también un gran interés geológico. Sus acantilados escarpados y sus caídas de agua (incluyendo el Salto Ángel, que es la caída de agua más elevada del mundo, a 1283 m). 1​ En 1972 fue el escenario principal de la primera expedición venezolana documentada en llegar al Saltó Ángel: Churún Merú de Renny Ottolina; Es el tercer parque nacional más grande de Venezuela, después del parque nacional El Caura, creado en 2017 y el parque nacional Parima-Tapirapeco. "
  },
];

export default defineComponent({
  name: "nationaParks",
  components: {
    DestinationCard,
  },

  setup() {
    return {
      destinationList,
    };
  },
});
</script>
