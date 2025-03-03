const HomePage = () => {
  document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h1>Home</h1>
    <a data-link href="/planets">Planets</a>
  </div>
`;
};

export default HomePage;
