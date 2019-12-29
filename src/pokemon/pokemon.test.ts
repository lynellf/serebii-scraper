const { JSDOM } = require("jsdom");
import Raichu from "./raichu";
import Charizard from "./charizard";
import Meowth from "./meowth";
import { scrapePokemon } from "./Pokemon";
import { TOutput } from "../main";

function fetchPokemon(htmlString: string) {
  const {
    window: { document }
  } = new JSDOM(htmlString);
  const output = scrapePokemon(document as Document, {} as TOutput);
  return output;
}

describe("data about a pokemon", () => {
  it("Returns Raichu", () => {
    const output = fetchPokemon(Raichu);
  });

  it("Returns Charizard", () => {
    const output = fetchPokemon(Charizard);
  });

  it("Returns Meowth", () => {
    const output = fetchPokemon(Meowth);
  });
});
