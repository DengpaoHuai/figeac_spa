const CreateRando = () => {
  document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
    <div>
        <h1>Create Rando</h1>
        <form id="rando-form">
            <label for="name">Name</label>
            <input type="text" id="name" name="name">
            <label for="age">Age</label>
            <input type="number" id="age" name="age">
            <label for="email">Email</label>
            <input type="email" id="email" name="email">
            <button type="submit">Submit</button>
        </form>
    </div>
  `;

  const form = document.querySelector<HTMLFormElement>("#rando-form");

  form?.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(form!);
    console.log(formData);
    const formValues = Object.fromEntries(formData.entries());
    console.log(formValues);
    console.log(typeof formValues);
    fetch("https://crudcrud.com/api/46d2dd8e017b46368d149e056716ef1b/rando", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formValues),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  });
};

export default CreateRando;
