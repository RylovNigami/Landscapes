<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>Destinos turísticos</q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header>Catalogos de destinos turisticos</q-item-label>

        <EssentialLink v-for="link in essentialLinks" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";

const linksList = [
  {
    title: "Pagina Principal",
    caption: "",
    icon: "mdi-home",
    link: "/",
  },
  {
    title: "Parques Nacionales",
    caption: "Ver parques y destinos unicos",
    icon: "mdi-image-filter-hdr",
    link: "/nationalParks",
  },
  {
    title: "Museos y lugares historicos",
    caption: "Ver museos y lugares historicos",
    icon: "mdi-church",
    link: "/historicPlaces",
  },
  {
    title: "Playas e Islas",
    caption: "Ver destinos playeros",
    icon: "mdi-beach",
    link: "/islandsAndBeaches",
  },
  {
    title: "Ciudades y Lugares",
    caption: "Ver destinos comerciales",
    icon: "mdi-city-variant",
    link: "/citiesAndLocations",
  },
];

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
