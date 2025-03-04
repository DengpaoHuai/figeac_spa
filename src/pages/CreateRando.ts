import randoSchema, { Rando } from "../schemas/rando.schema";
import { createRando } from "../services/rando.service";
import postData from "../services/super.service";

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
            <div id="errors"></div>
        </form>
    </div>
  `;

  const form = document.querySelector<HTMLFormElement>("#rando-form");

  form?.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(form!);
    const formValues = Object.fromEntries(formData.entries());

    const results = randoSchema.safeParse(formValues);

    if (!results.success) {
      const errorsDiv = document.querySelector<HTMLDivElement>("#errors");
      errorsDiv!.innerHTML = "";
      results.error.errors.forEach((error) => {
        const errorDiv = document.createElement("div");
        errorDiv.textContent = error.message;
        errorsDiv!.appendChild(errorDiv);
      });
      return;
    }

    postData<Omit<Rando, "_id">>("rando", results.data).then((data) => {});
  });
};

export default CreateRando;
