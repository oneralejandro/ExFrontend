import { createRouter, createWebHistory } from 'vue-router'
import Promedio from "@/views/Promedio.vue";
import FormRegistro from "@/views/FormRegistro.vue";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';


const routes = [
  {
    path: "/",
    name: "Promedio",
    component: Promedio,
  },
  {
    path: "/FormRegistro",
    name: "FormRegistro",
    component: FormRegistro,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;