import HomePage from "../pages/HomePage";
import PlanetsPage from "../pages/PlanetsPage";

const routes = {
  "/": HomePage,
  "/planets": PlanetsPage,
};

type Routes = keyof typeof routes;

const router = async () => {
  const content = document.querySelector<HTMLDivElement>("#app")!;
  const url = window.location.pathname as Routes;

  content.innerHTML = "";

  const page = routes[url];
  if (page) {
    page();
  } else {
    content.innerHTML = "<h1>404 Not Found</h1>";
  }
};

export default router;
