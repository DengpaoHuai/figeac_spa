import { getData } from "./services/planets.service.ts";
import "./style.css";

getData().then((data) => {
  console.log(data);
  const planets = data.results;
  const planetList = document.createElement("ul");
  planets.forEach((planet) => {
    const planetItem = document.createElement("li");
    planetItem.innerText = planet.name;
    planetList.appendChild(planetItem);
  });
  document.querySelector("#app")!.appendChild(planetList);
});
