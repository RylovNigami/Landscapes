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
    name: "Cayo de Agua",
    ubication: "Parque nacional Archipielago de los Roques - Al norte de Caracas",
    description: "Cayo del Agua es uno de los mejores cayos del archipielago Los Roques, Es de los mas lejanos, el traslado dura aprox. 1hora en lancha....pero todo el viaje es una maravilla, se ven colores del mar que van del celeste al verde turquesa, con árboles solitarios en medio del mar que parecen haber sido plantados al descuido.",
    img: "https://www.orgbluewater.com/wp-content/uploads/2021/10/DJI_0168.jpg",

    img1: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/e0/9a/39/cayo-de-agua.jpg?w=1200&h=-1&s=1",
    img2: "https://losroques360.com/wp-content/uploads/2020/09/01082017-cayoagua-11-Pano.jpg",
    img3: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Guanaguanares_Cayo_de_Agua.JPG/300px-Guanaguanares_Cayo_de_Agua.JPG",

    ubicationimg: "https://higueroteonline.com/wp-content/uploads/mapa_archipielago_los_roques_higueroteonline.jpg",
    localization: "Se encuentra al norte de Venezuela, en el extremo oeste del Parque Nacional 'Los Roques', por el norte limitan con los cayos de Puntas de Cocos, Pelona de Cayo de agua, Bequevé y Selesquí, y por el sureste se encuentran los cayos Dos Mosquises.",

    activities: "Cayo de Agua es popular dentro del archipiélago gracias a la belleza de sus arenas blancas y playas solitarias, las aves que se pueden encontrar en sus alrededores y por el hecho de que forma con otros cayos vecinos una pequeña piscina natural, allí también se encuentran pozos de agua dulce, una de las actividades más practicadas es el buceo.",
    activitiesimg1: "https://venezuelatuya.com/losroques/cayodeagua/paddle_en_cayo_de_agua.jpg",
    activitiesimg2: "data:image/jpeg;base64,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",
    activitiesimg3: "https://www.orgbluewater.com/wp-content/uploads/2020/02/30032017-DJI_0067-6.jpg",

    information: "Cayo de Agua son dos cayos (Lado Sur y Lado Norte) separados por una franja de mar de muy poca profundidad que puede ser cruzada caminando, con el agua a la altura de la cintura. En esa franja chocan las olas que vienen de ambos lados, salpicando el agua hacia arriba, lo cual consitituye toda una experiencia fascinante.",
    information2: "Una de las cosas que sorprenden cuando se llega a Cayo de Agua es la belleza del color turquesa y la tranquilidad del agua, lo que lo convierten en un lugar ideal para la práctica del Paddlesurf."
  },
  {
    name: "Playa Blanca",
    ubication: "Parque Nacional Mochima",
    description: "La playa es extensa de aguas cristalinas, cálidas, de olas suaves, poco profunda y con una franja ancha de arenas coloradas para la recreación y el esparcimiento. Es una playa especial para el disfrute de los niños.",
    img: "https://upload.wikimedia.org/wikipedia/commons/4/44/Parque_Nacional_mochima.jpg",

    img1: "https://turismosucre.com.ve/images/mochima/playablanca/playablanca_500x600d.jpg",
    img2: "https://turismosucre.com.ve/images/mochima/playablanca/playablanca_500x600c.jpg",
    img3: "https://turismosucre.com.ve/images/mochima/playablanca/playablanca_500x600f.jpg",

    ubicationimg: "https://1.bp.blogspot.com/-N6NT3BZ40sE/U48r_L_mQ5I/AAAAAAAAACk/VMzToMhjJAA/s1600/MapaMochima.jpg",
    localization: "Está ubicada a 20 minutos en bote o lancha desde la población de Mochima. Municipio Sucre ",

    activities: "Ofrece servicios de restaurantes, sanitarios, alquiler de toldos y sillas, de banana, paseos en bote, además de vendedores itinerantes de bronceadores, trajes de baño elaborados artesanalmente, pulseras y collares. En esta playa se puede acampar, previa autorización de INPARQUES. En temporada alta los servicios son más numerosos. ",
    activitiesimg1: "https://r1.community.samsung.com/t5/image/serverpage/image-id/2661285iDDCBC75D962B6A15?v=v2",
    activitiesimg2: "https://elbolivariano.com.ve/wp-content/uploads/2021/09/Mochima-un-lugar-para-vivir-la-mejor-aventura.jpg",
    activitiesimg3: "https://ultimasnoticias.com.ve/wp-content/uploads/2022/07/Trabajo-de-Turismo-Sucre2-1024x1024.jpg",

    information: "Su nombre Blanca lo adopta de sus arenas níveas de fino granulado. La playa se caracteriza por tener aguas cristalinas y cálidas, olas suaves, poco profunda y con una franja ancha de arenas blancas para la recreación y el esparcimiento. En sus restaurantes puedes degustar del más delicioso pescado frito y calamares con tostones. El viaje en bote desde la población de Mochima tiene una duración entre 15 a 20 minutos. ",
    information2: "La playa es extensa de aguas cristalinas, cálidas, de olas suaves, poco profunda y con una franja ancha de arenas coloradas para la recreación y el esparcimiento. Es una playa especial para el disfrute de los niños. "
  },
  {
    name: "Playa la Punta",
    ubication: "Isla de Coche - Nueva Esparta",
    description: "La playa de Coche o Playa La Punta es, con mucho, la playa más famosa y popular de este tipo en las Américas: árida y hermosa. Sus aguas son claras y sin olas de azul intenso con espléndidos tonos turquesa.",
    img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/4b/43/71/from-air.jpg?w=500&h=400&s=1",

    img1: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/03/58/68/c2/isla-coche.jpg?w=800&h=-1&s=1",
    img2: "https://dynamic-media-cdn.tripadvisor.com/media/photo-s/02/71/ab/90/filename-sam-1974-jpg.jpg?w=600&h=-1&s=1",
    img3: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/4b/4e/cf/view-from-pool.jpg?w=1200&h=-1&s=1",

    ubicationimg: "https://www.ecured.cu/images/c/ce/MapaCoche.gif",
    localization: "Ubicado a lo largo de una extensa lengua de arena en el extremo noroeste de la isla de Coche, que junto con las islas de Margarita y Cubagua conforman el estado de Nueva Esparta.",

    activities: "Es un lugar de fama mundial para practicar kitesurf y windsurf + Diversión. Hay escuelas de kitesurf y windsurf. Se pueden alquilar motos de agua, motocicletas de cuatro ruedas, kayaks y bicicletas.",
    activitiesimg1: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/4b/43/1b/kite-wheeler.jpg?w=1200&h=-1&s=1",
    activitiesimg2: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/4b/43/09/kite-school.jpg?w=1200&h=-1&s=1",
    activitiesimg3: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/4b/42/e3/4x4.jpg?w=1200&h=-1&s=1",

    information: "a playa de Coche o Playa La Punta es, con mucho, la playa más famosa y popular de este tipo en las Américas: árida y hermosa. Sus aguas son claras y sin olas de azul intenso con espléndidos tonos turquesa. Sus arenas blancas y muy suaves al tacto, son barridas constantemente por los vientos alisios del noreste que soplan durante todo el año en la isla reduciendo considerablemente la sensación de calor.",
    information2: "Arenas blancas, una extensión de costa espectacular para explorar, pobladores amables, un sol abrazador y vientos perfectos para practicar kite y windsurf, La Punta te recibe con los mares abiertos durante todo el año, para que conozcas la mejor zona de la isla de Coche."
  },
  {
    name: "Playa Choroni",
    ubication: "Girardot - Aragua",
    description: "Choroni es considerado como una de las excelentes playas caribeñas de Venezuela, aunque la región en realidad se localiza hacia el interior, cuenta con diversas casas coloniales ubicadas alrededor de una despejada plaza central, el estilo colonial hace del lugar una ciudad histórica.",
    img: "https://cdn.shortpixel.ai/spai/w_676+q_lossy+ret_img+to_webp/https://www.lugaresturisticos.org/wp-content/uploads/2018/06/choroni.jpg",

    img1: "https://www.venezuelatuya.com/centro/choroni/playa_grande_de_choroni.jpg",
    img2: "https://i0.wp.com/paraisos.online/wp-content/uploads/2020/12/Playa-Choroni.jpg?fit=1300%2C865&ssl=1",
    img3: "https://1.bp.blogspot.com/-bHAbbjIWz5w/V3mgQKcbMYI/AAAAAAAAcoU/hE627cbsI7cO_wYOLk2_n3pnFAHqafaSwCLcB/s1600/Tuja%2Bes%2Buna%2Bplaya%2Bpreciosa%2Bcerca%2Bde%2BChoroni%25CC%2581.%2BCortesia%2BParaiso%2BChoroni.jpg",

    ubicationimg: "https://www.google.com/maps/vt/data=48U3czD_rn9wIOlGWpHmDdLrRZ2VGatQXJ7F1u8NMDutjDcBqmD7M_M45-0dXHXmwvxC-fekr6OMev3n5PiM94awe7ob1OGSxTojMpzZcUzCAVsJWdBFIXzczuqxKgUFjBrstUr9p5WRqJWYV3UZxYBT4hcIsao39Hzq1eBQHfBMu60jtjwHACZIV4WotIMGzS9NkKDgFlGZLhBYtaD5C-uA2eQi2l5YxiulcqkDSi-GmVuHnla8xqgu&w=242&h=160",
    localization: "Ubicada en una zona costeña en el extremo norte del municipio Girardot, estado Aragua, Venezuela, ubicada en las faldas de la cordillera de la Costa, lo que le añade los elementos naturales peculiares de la faja litoral del parque nacional Henri Pittier.",

    activities: "Es un balneario poco profundo, pero el oleaje puede ser fuerte en algunas temporadas. En la orilla ofrecen alquiler de toldo y sillas, también servicios de comidas y bebidas.",
    activitiesimg1: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/01/6b/6f/caption.jpg?w=1200&h=-1&s=1",
    activitiesimg2: "https://images.mnstatic.com/0f/1a/0f1a2731eb244c9505228c5476da16f3.jpg",
    activitiesimg3: "https://images.hive.blog/0x0/https://files.peakd.com/file/peakd-hive/maridmc/23yTZ3dNyWYCkVEsxtY3Bxusvk6kbXknYro3Nz9pox2ughgvxFh6PeqbsnjQdt3DvQEcE.jpg",

    information: "Posee una espectacular entrada, se ingresa por una pequeña rampa de cemento que da paso a una arena muy suave, desde donde solo de divisan palmeras altísimas y un mar muy azul. Es extensa, ideal para caminar hasta el final, donde hay una pequeña montaña que regala una vista envidiable.",
    information2: ""
  },
  {
    name: "Cayo Sombrero",
    ubication: "Parque Nacional Morrocoy - Monseñor Iturriza - Falcón",
    description: "Los espectaculares pelícanos habitan en La Ciena Cove mientras que los delfines predominan en la Isla Cachicamo. El parque, tiene el nombre de una ciudad cercana, además es el lugar más visitado por los buceadores y submarinos ambientales, además ofrecen servicios espaciales para que los turistas disfruten de la vida marina.",
    img: "https://viajaelmundo.files.wordpress.com/2012/11/cayosombrero1.jpg?w=1024",

    img1: "https://i.pinimg.com/736x/e1/8a/59/e18a59955940a5afc5d1d3b3026cec0e.jpg",
    img2: "https://media-cdn.tripadvisor.com/media/photo-s/0f/b8/a1/1b/vista-aerea-cayo-sombrero.jpg",
    img3: "https://www.rotasturisticas.com/imagens/visitar/ve/large/photos-12115-19477-cayo_sombrero.jpg",

    ubicationimg: "https://www.google.com/maps/vt/data=rZRNyGoX7OuWHeRkK7ctUFSuaZF40DZZ24-pLUBiDZiUtz11sQHw0_vrEUgjWdCZWex7hgNH6AQoahNRKRkrqFvpM8VKuKcvBQlHAphsgLLQcY60cSxMFNl2VP0WDdnm_WAwJsHpCH_LcuwRUgj_l2r5QWd1ge0ek7sAT78-43QDQ7cQFgBlNBQ1rKuoThbmoR607rRixqAdx5GnrIskOglnB3kg2P0aMtME7sJCUWXOVObVoCFz7aOb&w=245&h=160",
    localization: "Pertenece al parque nacional Morrocoy​ y está incluida en la parte más oriental del Municipio Monseñor Iturriza del estado Falcón, ​ en el oeste de Venezuela.",

    activities: "El snorkeling es fácil y muy gratificante. En esta isla se puede acampar. Los vendedores ambulantes le ofrecerán ostras, 'siete potencias', 'levanta muertos' (y otras delicias con mariscos), así como helados y refrescos. Tiene 2 pequeños restaurantes y servicio de alquiler de toldos y sillas.",
    activitiesimg1: "https://www.venezuelatuya.com/morrocoy/images/playacayosombrero2.jpg",
    activitiesimg2: "https://www.venezuelatuya.com/morrocoy/images/sombreropenero.jpg",
    activitiesimg3: "https://www.venezuelatuya.com/morrocoy/images/sombreroplaya.jpg",

    information: "Cayo sombrero es uno de los cayos preferidos por la mayoría. En efecto, cuenta con dos playas bastante grandes. Un bosque de palmeras que ofrece sombra natural.",
    information2: "Es la isla más grande después de Punta Brava. Aún cuando siempre tiene mucha gente, por el gran tamaño, normalmente es posible conseguir un sitio donde disfrutarla. Es una de las islas que no debe dejar de conocer."
  },
];

export default defineComponent({
  name: "islansAndBeachesPage",
  components: {
    DestinationCard,
  },

  setup() {

    return {
      destinationList,
    }
  },
});
</script>
