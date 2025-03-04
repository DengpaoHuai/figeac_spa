const postData = async <
  TBody extends {
    [key: string]: any;
  }
>(
  collection: string,
  body: TBody
) => {
  const response = await fetch(
    "https://crudcrud.com/api/46d2dd8e017b46368d149e056716ef1b/" + collection,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }
  );
  const data: TBody & { _id: string } = await response.json();
  return data;
};

export default postData;

type Bibli1 = {
  name: string;
  [key: `books${number}-${number}`]: string;
};

type Bibli = Record<`books${number}-${number}`, string>;

const bibliotheque: Bibli1 = {
  name: "Bibliotheque",
  ["books1-2"]: "Harry Potter",
  ["books2-3"]: "Lord of the Rings",
};

const map1: Map<`books${number}-${number}`, number> = new Map();

map1.set("books2-3", 1);
