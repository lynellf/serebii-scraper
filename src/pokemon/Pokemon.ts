import { getChildNode } from "../utils/utils";
import { MoveParser } from "../moves/Moves";
import { getStatsTable } from "../stats/Stats";
import { TOutput } from "../main";

function getTypes(element: Element) {
  const {
    children: { 0: firstChild }
  } = element;
  const childTag = firstChild.tagName === "A" ? "a" : "table";
  return {
    a: () => [
      {
        form: "Normal",
        types: Array.from(element.children).map(parseTypes)
      }
    ],
    table: () => Array.from(firstChild.children[0].children).map(parseForms)
  }[childTag]();
}

function parseForms(node: Element) {
  const form = getChildNode(node, [0]).textContent ?? "Normal";
  const types = Array.from(getChildNode(node, [1]).children).map(parseTypes);
  return { form, types };
}

function parseTypes(node: Element) {
  const {
    children: { 0: img }
  } = node;
  const { alt } = img as HTMLImageElement;
  return alt;
}

function getTableByHeader({
  document,
  tagName,
  query,
  strict = true
}: {
  document: Document;
  tagName: "h2" | "h3" | "td";
  query: string;
  strict?: boolean;
}) {
  const targets = Array.from(document.querySelectorAll(tagName));
  const targetHeader = strict
    ? targets.find(target => target.textContent === query)
    : targets.find(target => target.textContent?.includes(query));
  return targetHeader?.parentNode?.parentNode?.parentNode as
    | HTMLTableElement
    | null
    | undefined;
}

function getOutput({
  contentArea,
  alolaMoves,
  alolanStats,
  eggMoves,
  galarianMoves,
  galarianStats,
  maxMoves,
  standardMoves,
  stats,
  tmMoves,
  trMoves,
  tutorMoves,
  version,
  output
}: {
  contentArea: Element;
  alolaMoves: HTMLTableElement | undefined | null;
  alolanStats: HTMLTableElement | undefined | null;
  eggMoves: HTMLTableElement | undefined | null;
  galarianMoves: HTMLTableElement | undefined | null;
  galarianStats: HTMLTableElement | undefined | null;
  maxMoves: HTMLTableElement | undefined | null;
  standardMoves: HTMLTableElement | undefined | null;
  stats: HTMLTableElement | undefined | null;
  tmMoves: HTMLTableElement | undefined | null;
  trMoves: HTMLTableElement | undefined | null;
  tutorMoves: HTMLTableElement | undefined | null;
  version: "1" | "2";
  output: TOutput;
}) {
  const indexes = {
    "1": [3, 4, 5],
    "2": [2, 3, 4]
  };

  const {
    children: {
      [indexes[version][0]]: imageSection,
      [indexes[version][1]]: generalInfo,
      [indexes[version][2]]: abilitiesSection
    }
  } = contentArea;

  const image = {
    1: () => getChildNode(imageSection, [0, 1, 0, 0, 0, 0, 0]),
    2: () => getChildNode(imageSection, [0, 1, 0, 0, 0, 0])
  }[version]();

  const imageSrc = (image as HTMLImageElement).src!;
  const name = getChildNode(generalInfo, [0, 1, 0]).textContent!;
  const dexNumber = getChildNode(generalInfo, [0, 1, 2, 0, 0, 0, 1])
    .textContent!;
  const typeCell = getChildNode(generalInfo, [0, 1, 4]);
  const rawAbilities = getChildNode(abilitiesSection, [0, 0]).textContent;
  const forms = getTypes(typeCell);
  const trimmedAbilities = rawAbilities?.trim();
  const parsedAbilities = trimmedAbilities?.substring(11);
  const abilities = parsedAbilities?.split("-")!;
  const baseStats = getStatsTable(stats)!;
  const alolanBaseStats = getStatsTable(alolanStats);
  const galarianBaseStats = getStatsTable(galarianStats);
  const moveTables = [
    alolaMoves,
    eggMoves,
    galarianMoves,
    maxMoves,
    standardMoves,
    tmMoves,
    trMoves,
    tutorMoves,
  ]
  const parser = new MoveParser(moveTables, output.moves)
  const { moveList, pokemonMoves } = parser.getMoves()
  output.moves = moveList
  output.abilities = Array.from(new Set([...output.abilities, ...abilities]));
  output.pokemon[name] = {
    name,
    moves: pokemonMoves,
    abilities,
    baseStats: {
      normal: baseStats,
      alolan: alolanBaseStats ?? null,
      galarian: galarianBaseStats ?? null
    },
    dexNumber,
    imageSrc,
    forms
  };
  delete output._tempMoves;
  return output;
}

export function scrapePokemon(document: Document, output: TOutput) {
  const main = document.querySelector("main")!;
  const title = document.title;
  console.info(`Now Scraping: ${title}`);
  const {
    children: { 1: contentArea }
  } = main;
  const { children } = contentArea;

  const standardMoves = getTableByHeader({
    document,
    tagName: "h3",
    query: "Standard Level Up"
  });
  const tmMoves = getTableByHeader({
    document,
    tagName: "h3",
    query: "Technical Machine Attacks"
  });
  const trMoves = getTableByHeader({
    document,
    tagName: "h3",
    query: "Technical Record Attacks"
  });
  const eggMoves = getTableByHeader({
    document,
    tagName: "h3",
    query: "Egg Moves"
  });
  const tutorMoves = getTableByHeader({
    document,
    tagName: "td",
    query: "Move Tutor Moves"
  });
  const maxMoves = getTableByHeader({
    document,
    tagName: "h3",
    query: "Usable Max Moves"
  });
  const alolaMoves = getTableByHeader({
    document,
    tagName: "h3",
    query: "Alola Form Level Up"
  });
  const galarianMoves = getTableByHeader({
    document,
    tagName: "h3",
    query: "Galarian Form Level Up"
  });
  const stats = getTableByHeader({ document, tagName: "h2", query: "Stats" });
  const alolanStats = getTableByHeader({
    document,
    tagName: "h2",
    query: "Stats - Alolan",
    strict: false
  });
  const galarianStats = getTableByHeader({
    document,
    tagName: "h2",
    query: "Stats - Galarian",
    strict: false
  });
  const isVer1 = children[3].textContent?.includes("Picture");
  const isVer2 = children[2].textContent?.includes("Picture");
  const version = isVer1 ? "1" : isVer2 ? "2" : "1";

  return getOutput({
    alolaMoves,
    alolanStats,
    contentArea,
    eggMoves,
    galarianMoves,
    galarianStats,
    maxMoves,
    output,
    standardMoves,
    stats,
    tmMoves,
    trMoves,
    tutorMoves,
    version
  });
}
