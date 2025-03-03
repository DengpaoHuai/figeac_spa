export type Planet = {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;
};

export type PlanetResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Planet[];
};

export const getData = async (url: string) => {
  const response = await fetch(url);
  const results: PlanetResponse = await response.json();
  console.log(results);
  return results;
};

const url = "https://swapi.dev/api/planets";

export default url;
