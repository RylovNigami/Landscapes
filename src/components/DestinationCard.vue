<template>
  <q-card class="my-card q-ma-lg">
    <img :src="destination.img" />

    <q-card-section>
      <div class="text-h6">{{ destination.name }}</div>
      <div class="text-subtitle2">{{ destination.ubication }}</div>
    </q-card-section>

    <q-card-section class="q-pt-none">
      {{ destination.description }}
    </q-card-section>

    <q-separator />

    <q-card-actions align="right">
      <q-btn color="secondary" label="Ver mas" class="q-ma-xs" @click="dialog = true" />
    </q-card-actions>

    <q-dialog v-model="dialog">
      <q-card class="q-ma-md no-wrap">
        <q-card-section>
          <div class="text-subtitle1">{{ destination.name }}</div>
          <div class="text-subtitle2">{{ destination.ubication }}</div>
          <q-carousel animated v-model="slide1" arrows navigation infinite
            style="width: auto; height: 250px; border-radius: 5px; margin-top: 15px; margin-bottom: 6px;">
            <q-carousel-slide :name="1" :img-src="destination.img1" />
            <q-carousel-slide :name="2" :img-src="destination.img2" />
            <q-carousel-slide :name="3" :img-src="destination.img3" />
          </q-carousel>
          <div class="text-weight-light" style="text-align: justify; padding: 7px;">{{ destination.information }}</div>
          <br>
          <div class="text-weight-light" style="text-align: justify; padding: 7px;">{{ destination.information2 }}</div>
          <q-separator style="margin-left: 0px; margin-right: 0px;" />
          <div class="text-subtitle2" style="margin-top: 10px;">Ubicación</div>
          <q-img class="no-wrap" :src="destination.ubicationimg" spinner-color="grey"
            style="height: 250px; width: 100%; border-radius: 5px;" />
          <div class="text-weight-light" style="text-align: justify; padding: 7px;">{{ destination.localization }}</div>
          <q-separator style="margin-left: 0px; margin-right: 0px;" />
          <div class="text-subtitle2" style="margin-top: 10px;">Actividades en el lugar</div>
          <q-carousel animated v-model="slide2" arrows navigation infinite
            style="width: auto; height: 250px; border-radius: 5px; margin-top: 5px; margin-bottom: 6px;">
            <q-carousel-slide :name="1" :img-src="destination.activitiesimg1" />
            <q-carousel-slide :name="2" :img-src="destination.activitiesimg2" />
            <q-carousel-slide :name="3" :img-src="destination.activitiesimg3" />
          </q-carousel>
          <div class="text-weight-light" style="text-align: justify; padding: 7px;">{{ destination.activities }}</div>

        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Cerrar" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>

  </q-card>
</template>

<script>
import { defineComponent } from "vue";
import { ref } from 'vue';

export default defineComponent({
  name: "DestinationCard",
  components: {
  },
  props: {
    destination: {
      type: Object,
      required: true,
      default: () => { },
    },
  },
  setup() {

    return {
      dialog: ref(false),
      slide1: ref(1),
      slide2: ref(1)
    };
  },
});
</script>
