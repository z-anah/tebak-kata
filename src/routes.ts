import Test from "./pages/Test.vue";
import Game from "./pages/Game.vue";
import Result from "./pages/Result.vue";
import PrepareGameVue from "./pages/PrepareGame.vue";

const routes = [
  { path: "/", component: Test },
  { path: "/game/:gametype/:gametime/:wordtime", component: Game },
  { path: "/result/:score", component: Result },
  { path: "/prepare-game/:gametype", component: PrepareGameVue },
];

export default routes;