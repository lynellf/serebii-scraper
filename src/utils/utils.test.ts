import { getDocument } from "./utils";

it("returns a document", async () => {
  const mewtwoPage = await getDocument(
    "https://www.serebii.net/pokedex-swsh/mewtwo/"
  );
  const title = mewtwoPage.title;
  const expectedTitle = "Mewtwo - #150 - Serebii.net Pokédex";
  const hasMatch = title === expectedTitle;
  expect(hasMatch).toBe(true);
});
