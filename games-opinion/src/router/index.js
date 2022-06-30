import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import AdministracionView from "../views/AdministracionView.vue";
import EditarView from "../views/EditarView.vue";
import OpinionesView from "../views/OpinionesView.vue";
import NotFound from "../views/NotFound.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView
  },
  {
    path: "/administracion",
    name: "Administracion",
    component: AdministracionView
  },
  {
    path: "/editar/:id",
    name: "Editar",
    props: true,
    component: EditarView
  },
  {
    path: "/Opiniones",
    name: "Opiniones",
    component: OpinionesView
  },
  {
    path: "/*",
    name: "NotFound",
    component: NotFound
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
