import "./style.css";
import url, { getData, PlanetResponse } from "./services/planets.service.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <div id="planets"></div>
      <button id="prev" disabled type="button">prev</button>
      <button id="next" type="button">next</button>
  </div>
`;

let planetResponse: PlanetResponse = {
  count: 0,
  next: null,
  previous: null,
  results: [],
};

document.addEventListener("DOMContentLoaded", async () => {
  const prev = document.querySelector<HTMLButtonElement>("#prev");
  const next = document.querySelector<HTMLButtonElement>("#next");

  console.log(prev);
  prev?.addEventListener("click", async () => {
    console.log(planetResponse.previous);
    if (planetResponse.previous) {
      planetResponse = await getData(planetResponse.previous);
      displayPlanets(planetResponse);
    }
  });

  next!.addEventListener("click", async () => {
    if (planetResponse.next) {
      planetResponse = await getData(planetResponse.next);
      displayPlanets(planetResponse);
    }
  });

  init();
});

const displayPlanets = (planets: PlanetResponse) => {
  const planetsDiv = document.querySelector<HTMLDivElement>("#planets");
  planetsDiv!.innerHTML = "";
  planets.results.forEach((planet) => {
    const planetDiv = document.createElement("div");
    planetDiv.innerHTML = `
      <h2>${planet.name}</h2>
      <p>Rotation period: ${planet.rotation_period}</p>
      <p>Orbital period: ${planet.orbital_period}</p>
      <p>Diameter: ${planet.diameter}</p>
      <p>Climate: ${planet.climate}</p>
      <p>Gravity: ${planet.gravity}</p>
      <p>Terrain: ${planet.terrain}</p>
      <p>Surface water: ${planet.surface_water}</p>
      <p>Population: ${planet.population}</p>
    `;
    planetsDiv!.appendChild(planetDiv);
  });
  if (planets.previous) {
    document.querySelector<HTMLButtonElement>("#prev")!.disabled = false;
  }
  if (!planets.previous) {
    document.querySelector<HTMLButtonElement>("#prev")!.disabled = true;
  }
  if (!planets.next) {
    document.querySelector<HTMLButtonElement>("#next")!.disabled = true;
  }
  if (planets.next) {
    document.querySelector<HTMLButtonElement>("#next")!.disabled = false;
  }
};

const init = async () => {
  const planets = await getData("https://swapi.dev/api/planets");
  planetResponse = planets;
  displayPlanets(planets);
};
