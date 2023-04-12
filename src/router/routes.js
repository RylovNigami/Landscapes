const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      {
        path: "historicPlaces",
        component: () => import("src/pages/historicPlacesPage.vue"),
      },
      {
        path: "islandsAndBeaches",
        component: () => import("src/pages/islandsAndBeachesPage.vue"),
      },
      {
        path: "nationalParks",
        component: () => import("src/pages/nationalParksPage.vue"),
      },
      {
        path: "citiesAndLocations",
        component: () => import("src/pages/citiesAndLocationsPage.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
