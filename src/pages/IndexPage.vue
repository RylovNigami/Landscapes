<template>
  <q-page>
    <div class="q-pa-lg flex justify-center items-start">
      <div class="text-h6 q-mb-md no-wrap">Catalogo de destinos turísticos</div>
      <q-carousel class="no-wrap" swipeable animated v-model="slide" :autoplay="autoplay" ref="carousel" infinite
        style="width: 100%; height: 300px; border-radius: 7px;">
        <q-carousel-slide :name="1" img-src="https://www.orgbluewater.com/wp-content/uploads/2021/10/DJI_0168.jpg"
          fit="fill" :img-style="{}">
          <div class="absolute-bottom custom-caption"
            style="text-align: center; color: blanchedalmond; background-color: rgba(0, 0, 0, .6);">
            <div class="text-subtitle1">Cayo de Agua</div>
          </div>
        </q-carousel-slide>
        <q-carousel-slide :name="2"
          img-src="https://cdn.shortpixel.ai/spai/w_696+q_lossy+ret_img+to_webp/https://www.lugaresturisticos.org/wp-content/uploads/2018/06/Colonia-Tovar.jpg"
          fit="fill" :img-style="{}">
          <div class="absolute-bottom custom-caption"
            style="text-align: center; color: blanchedalmond; background-color: rgba(0, 0, 0, .6);">
            <div class="text-subtitle1">Colonia Tovar</div>
          </div>
        </q-carousel-slide>
        <q-carousel-slide :name="3"
          img-src="https://cdn.shortpixel.ai/spai/w_680+q_lossy+ret_img+to_webp/https://www.lugaresturisticos.org/wp-content/uploads/2018/06/roraima.jpg"
          fit="fill" :img-style="{}">
          <div class="absolute-bottom custom-caption"
            style="text-align: center; color: blanchedalmond; background-color: rgba(0, 0, 0, .6);">
            <div class="text-subtitle1">Parque Nacional Canaima</div>
          </div>
        </q-carousel-slide>
        <q-carousel-slide :name="4"
          img-src="https://elviajerofeliz.com/wp-content/uploads/2019/01/Ciudades-de-Venezuela-9.jpg" fit="fill"
          :img-style="{}">
          <div class="absolute-bottom custom-caption"
            style="text-align: center; color: blanchedalmond; background-color: rgba(0, 0, 0, .6);">
            <div class="text-subtitle1">Ciudad de Maracaibo</div>
          </div>
        </q-carousel-slide>
        <template v-slot:loading>
          <div class="text-grey">
            <q-spinner-ios />
            <div class="q-mt-md">Loading...</div>
          </div>
        </template>
      </q-carousel>
      <div class="text-caption" style="text-align:justify; margin: 12px; padding-top: 10px;">Este catalogo esta destinado
        a
        ayudar a
        los
        vacacionistas en travesia por venezuela, para que puedan informarse acerca de diversos destinos llamativos de
        distinta indole
        para vacacionar y fomentar el turismo dentro de la nación.</div>
    </div>
    <q-separator class="absolute-bottom" style="margin: 55px;" />
    <div class="absolute-bottom custom-caption text-overline"
      style="text-align:center; color: grey; line-height:1rem; margin-bottom: 5px;">
      Luis Méndez & Anyelit Figuera <br>
      Cumaná, Sucre, Venezuela <br>
      2023
    </div>

  </q-page>
</template>

<script>
import { defineComponent } from "vue"
import { ref } from 'vue'
//import DestinationCard from "src/components/DestinationCard.vue";

const destinationList = [
  {
    name: "Playa la Punta",
    ubication: "Isla de Coche - Nueva Esparta",
    description: "La playa de Coche o Playa La Punta es, con mucho, la playa más famosa y popular de este tipo en las Américas: árida y hermosa. Sus aguas son claras y sin olas de azul intenso con espléndidos tonos turquesa.",
    img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/4b/43/71/from-air.jpg?w=500&h=400&s=1",
  },
  {
    name: "Parque Nacional Morrocoy",
    ubication: "Entre las comunidades de Tucacas y Chichiriviche en Falcon",
    description: "El Parque Nacional Morrocoy se localiza en la parte noreste de Venezuela. Domina una zona de manglares, nutridos islotes y cayos con bellas playas de arena. Los arrecifes de coral y los pescados tropicales predominan en las aguas que envuelven los cayos.",
    img: "https://cdn.shortpixel.ai/spai/w_600+q_lossy+ret_img+to_webp/https://www.lugaresturisticos.org/wp-content/uploads/2018/06/Parque-Nacional-Morrocoy.jpg",
  },
  {
    name: "Parque Nacional Mochima",
    ubication: "Entre Cumaná, Guanta y Barcelona",
    description: "Los espectaculares pelícanos habitan en La Ciena Cove mientras que los delfines predominan en la Isla Cachicamo. El parque, tiene el nombre de una ciudad cercana, además es el lugar más visitado por los buceadores y submarinos ambientales, además ofrecen servicios espaciales para que los turistas disfruten de la vida marina.",
    img: "https://cdn.shortpixel.ai/spai/w_696+q_lossy+ret_img+to_webp/https://www.lugaresturisticos.org/wp-content/uploads/2018/06/parque-mochima.jpg",
  },
  {
    name: "Playa Choroni",
    ubication: "Girardot - Aragua",
    description: "Choroni es considerado como una de las excelentes playas caribeñas de Venezuela, aunque la región en realidad se localiza hacia el interior, cuenta con diversas casas coloniales ubicadas alrededor de una despejada plaza central, el estilo colonial hace del lugar una ciudad histórica.",
    img: "https://cdn.shortpixel.ai/spai/w_676+q_lossy+ret_img+to_webp/https://www.lugaresturisticos.org/wp-content/uploads/2018/06/choroni.jpg",
  },
  {
    name: "Playa Choroni",
    ubication: "Girardot - Aragua",
    description: "Choroni es considerado como una de las excelentes playas caribeñas de Venezuela, aunque la región en realidad se localiza hacia el interior, cuenta con diversas casas coloniales ubicadas alrededor de una despejada plaza central, el estilo colonial hace del lugar una ciudad histórica.",
    img: "https://cdn.shortpixel.ai/spai/w_676+q_lossy+ret_img+to_webp/https://www.lugaresturisticos.org/wp-content/uploads/2018/06/choroni.jpg",
  },
];

export default defineComponent({
  name: "IndexPage",
  components: {
  },

  setup() {
    return {
      destinationList,
      slide: ref(1),
      autoplay: ref(true)
    };
  },
});
</script>
