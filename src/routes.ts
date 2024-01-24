import Test from "./pages/Test.vue";
import AlatDapur from "./pages/AlatDapur.vue";
import Result from "./pages/Result.vue";

const routes = [
  { path: "/", component: Test },
  { path: "/alat-dapur", component: AlatDapur },
  { path: "/result/:score", component: Result }
];

export default routes;