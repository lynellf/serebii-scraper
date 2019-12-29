import { getDocument } from "./utils/utils";
import { scrapePokemon } from "./pokemon/Pokemon";

type TBST = {
  baseHP: string;
  baseAtk: string;
  baseDef: string;
  baseSpa: string;
  baseSpd: string;
  baseSpeed: string;
};

type TBaseStats = {
  normal: TBST;
  alolan: TBST | null;
  galarian: TBST | null;
};

export type TMove = {
  moveName: string;
  moveAccuracy: string;
  moveEffectPct: string;
  movePower: string;
  movePowerPoints: string;
  moveType: string;
};

type TPokemon = {
  abilities: string[];
  baseStats: TBaseStats;
  dexNumber: string;
  forms: { form: string; types: string[] }[];
  imageSrc: string;
  moves: { [key: string]: string[] };
  name: string;
};

export type TOutput = {
  pokemon: { [key: string]: TPokemon };
  moves: { [key: string]: TMove };
  abilities: string[];
  _tempMoves?: { [key: string]: string[] };
};

function pushURL(option: HTMLOptionElement, output: string[]) {
  const { value } = option;
  const isEmpty = value === "#";
  if (!isEmpty) {
    output.push(value);
  }
  return;
}

function parsePageURLS(cell: HTMLTableDataCellElement, output: string[]) {
  const form = cell.children[0] as HTMLFormElement;
  const dropdown = form.children[0] as HTMLSelectElement;
  const options = Array.from(dropdown.children) as HTMLOptionElement[];
  options.forEach(option => pushURL(option, output));
  return;
}

function tableToURLS(tableSection: HTMLTableSectionElement, list: string[]) {
  const tableRows = Array.from(tableSection.children) as HTMLTableRowElement[];
  const urlList = tableRows.reduce((output, row) => {
    const cells = Array.from(row.children) as HTMLTableDataCellElement[];
    cells.forEach(cell => parsePageURLS(cell, output));
    return output;
  }, [] as string[]);

  return [...list, ...urlList];
}

function getPokemonPageURLS(document: Document) {
  const main = document.querySelector("main");
  const dexDiv = main?.children[0];
  if (!dexDiv) {
    throw new Error("Pokedex Div Not Found!");
  }

  const dexTable = dexDiv.children[0] as HTMLTableElement;
  const tableBodies = Array.from(
    dexTable.children
  ) as HTMLTableSectionElement[];

  const urls = tableBodies.reduce(
    (output, tableBody) => tableToURLS(tableBody, output),
    [] as string[]
  );

  return urls;
}

export async function App() {
  try {
    const baseURL = "https://www.serebii.net";
    const index = `${baseURL}/pokedex-swsh/eternatus/`;
    const indexPage = await getDocument(index);
    const urls = getPokemonPageURLS(indexPage);
    const len = urls.length;

    let pokedex: TOutput = {
      abilities: [],
      moves: {},
      pokemon: {}
    };
    for (let index = 0; index < len; index++) {
      const page = await getDocument(`${baseURL}${urls[index]}`);
      pokedex = scrapePokemon(page, pokedex);
    }
    return pokedex;
  } catch (error) {
    console.trace(error);
  }
}
