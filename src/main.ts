import { getDocument, duffsScraper, getChildNode } from "./utils/utils";

function returnVoid() {
  return undefined;
}

function parseMovesTable(table: HTMLTableElement) {
  const { children: rows } = table;
  const output = Array.from(rows).reduce(
    getTableRows,
    [] as HTMLTableRowElement[]
  );
  return output.map(parseMoveRow);
}

function parseStatsTable(table: HTMLTableElement) {
  const {
    children: {
      2: {
        children: {
          1: { textContent: baseHP },
          2: { textContent: baseAtk },
          3: { textContent: baseDef },
          4: { textContent: baseSpa },
          5: { textContent: baseSpd },
          6: { textContent: baseSpeed }
        }
      }
    }
  } = table;

  return {
    baseHP,
    baseAtk,
    baseDef,
    baseSpa,
    baseSpd,
    baseSpeed
  };
}

function getTableRows(
  rowArr: HTMLTableRowElement[],
  row: Element,
  index: number
) {
  const isTitle = index < 2;
  if (!isTitle) {
    const hasChildren = row.children.length > 2;
    if (!hasChildren) {
      return rowArr;
    }
    return [...rowArr, row as HTMLTableRowElement];
  }
  return rowArr;
}

function getMovesTable(table: HTMLTableElement | undefined | null) {
  const hasTable = table ? 1 : 0;
  return [returnVoid, parseMovesTable][hasTable](table!);
}

function getStatsTable(table: HTMLTableElement | undefined | null) {
  const hasTable = table ? 0 : 1;
  return [returnVoid, parseStatsTable][hasTable](table!);
}

function getTableByHeader({
  document,
  tagName,
  query
}: {
  document: Document;
  tagName: "h2" | "h3" | "td";
  query: string;
}) {
  const targets = Array.from(document.querySelectorAll(tagName));
  const targetHeader = targets.find(target => target.textContent === query);
  return targetHeader?.parentNode?.parentNode?.parentNode as
    | HTMLTableElement
    | null
    | undefined;
}

function parseMoveRow(row: HTMLTableRowElement) {
  const { children } = row;
  const isMaxMoves = row!.parentNode!.parentNode!.textContent?.includes(
    "Max Moves"
  );
  const isMoveTutorMoves = row!.parentNode!.parentNode!.textContent?.includes(
    "Move Tutor"
  );
  const isEggMoves = row!.parentNode!.parentNode!.textContent?.includes(
    "Egg Moves"
  );
  const isAltTable = isMaxMoves || isMoveTutorMoves || isEggMoves;
  return isAltTable
    ? formatMoves("alternative", children)
    : formatMoves("normal", children);
}
function formatMoveForms(element: HTMLCollection) {
  return Array.from(element).map(cell => cell.children[0].getAttribute("alt"));
}

function parseMoveForms(element: HTMLCollection | undefined) {
  const hasElement = element !== undefined ? 1 : 0;
  return [() => undefined, () => formatMoveForms(element!)][hasElement]();
}

function formatMoves(type: "normal" | "alternative", children: HTMLCollection) {
  const indexes = {
    normal: {
      moveName: 1,
      moveTypeImg: [2, 0],
      moveCatImg: [3, 0],
      movePower: 5,
      moveAccuracy: 5,
      movePowerPoints: 6,
      moveEffectPct: 7,
      forms: 8
    },
    alternative: {
      moveName: 0,
      moveTypeImg: [1, 0],
      moveCatImg: [2, 0],
      movePower: 3,
      moveAccuracy: 4,
      movePowerPoints: 5,
      moveEffectPct: 6,
      forms: 7
    }
  };
  const nameIndex = indexes[type]["moveName"];
  const typeImgParentIndex = indexes[type]["moveTypeImg"][0];
  const typeImgIndex = indexes[type]["moveTypeImg"][1];
  const catImgParentIndex = indexes[type]["moveCatImg"][0];
  const catImgIndex = indexes[type]["moveCatImg"][1];
  const movePwrIndex = indexes[type]["movePower"];
  const moveAccIndex = indexes[type]["moveAccuracy"];
  const movePwrPtsIndex = indexes[type]["movePowerPoints"];
  const moveEffIndex = indexes[type]["moveEffectPct"];
  const moveFormsIndex = indexes[type]["forms"];

  const moveName = children[nameIndex].textContent;
  const moveTypeImg = children[typeImgParentIndex].children[typeImgIndex];
  const moveCatImg = children[catImgParentIndex].children[catImgIndex];
  const movePower = children[movePwrIndex].textContent;
  const moveAccuracy = children[moveAccIndex].textContent;
  const movePowerPoints = children[movePwrPtsIndex].textContent;
  const moveEffectPct = children[moveEffIndex].textContent;
  const moveType = moveTypeImg
    ?.getAttribute("alt")
    ?.trim()
    ?.split("-")[1];
  const moveCategory = moveCatImg
    ?.getAttribute("alt")
    ?.trim()
    ?.split(":")[1];
  const moveFormCells =
    children[moveFormsIndex]?.children[0]?.children[0]?.children[0]?.children;
  const moveForms = parseMoveForms(moveFormCells);

  return {
    moveAccuracy,
    moveCategory,
    moveEffectPct,
    moveForms,
    moveName,
    movePower,
    movePowerPoints,
    moveType
  };
}

function formatStats({
  contentArea,
  eggMoves,
  maxMoves,
  standardMoves,
  stats,
  tmMoves,
  trMoves,
  tutorMoves,
  alolaMoves,
  version
}: {
  contentArea: Element;
  eggMoves: HTMLTableElement | undefined | null;
  maxMoves: HTMLTableElement | undefined | null;
  standardMoves: HTMLTableElement | undefined | null;
  stats: HTMLTableElement | undefined | null;
  tmMoves: HTMLTableElement | undefined | null;
  trMoves: HTMLTableElement | undefined | null;
  tutorMoves: HTMLTableElement | undefined | null;
  alolaMoves: HTMLTableElement | undefined | null;
  version: "1" | "2";
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

  return parseStats({
    abilitiesSection,
    alolaMoves,
    eggMoves,
    generalInfo,
    imageSection,
    maxMoves,
    standardMoves,
    stats,
    tmMoves,
    trMoves,
    tutorMoves,
    version
  });
}

function parseTypes(element: Element){
  const {
    children: { 0: img }
  } = element;
  const { alt } = img as HTMLImageElement;
  return alt;
}

function parseStats({
  abilitiesSection,
  eggMoves,
  generalInfo,
  imageSection,
  maxMoves,
  standardMoves,
  stats,
  tmMoves,
  trMoves,
  tutorMoves,
  alolaMoves,
  version
}: {
  abilitiesSection: Element;
  eggMoves: HTMLTableElement | undefined | null;
  generalInfo: Element;
  imageSection: Element;
  maxMoves: HTMLTableElement | undefined | null;
  standardMoves: HTMLTableElement | undefined | null;
  stats: HTMLTableElement | undefined | null;
  tmMoves: HTMLTableElement | undefined | null;
  trMoves: HTMLTableElement | undefined | null;
  tutorMoves: HTMLTableElement | undefined | null;
  alolaMoves: HTMLTableElement | undefined | null;
  version: "1" | "2";
}) {

  const image = {
    1: () => getChildNode(imageSection, [0, 1, 0, 0, 0, 0, 0]),
    2: () => getChildNode(imageSection, [0,1,0,0,0,0])
  }[version]()

  const imageSrc = (image as HTMLImageElement).src;
  const name = getChildNode(generalInfo, [0, 1, 0]).textContent
  const dexNumber = getChildNode(generalInfo, [0, 1, 2, 0, 0, 0, 1]).textContent
  const typeCell = getChildNode(generalInfo, [0, 1, 4])
  const rawAbilities = getChildNode(abilitiesSection, [0, 0]).textContent
  const types = Array.from(typeCell.children).map(link => {
    const {
      children: { 0: img }
    } = link;
    const { alt } = img as HTMLImageElement;
    return alt;
  });
  const trimmedAbilities = rawAbilities?.trim();
  const parsedAbilities = trimmedAbilities?.substring(11);
  const abilities = parsedAbilities?.split("-");
  const standardMoveList = getMovesTable(standardMoves);
  const tmMovesList = getMovesTable(tmMoves);
  const trMovesList = getMovesTable(trMoves);
  const eggMovesList = getMovesTable(eggMoves);
  const tutorMovesList = getMovesTable(tutorMoves);
  const maxMovesList = getMovesTable(maxMoves);
  const alolaMovesList = getMovesTable(alolaMoves);
  const moves = standardMoveList
    ?.concat(tmMovesList ?? [])
    ?.concat(trMovesList ?? [])
    ?.concat(eggMovesList ?? [])
    ?.concat(tutorMovesList ?? [])
    ?.concat(maxMovesList ?? [])
    ?.concat(alolaMovesList ?? []);
  const baseStats = getStatsTable(stats);

  return {
    abilities,
    baseStats,
    dexNumber,
    imageSrc,
    moves,
    name,
    types
  };
}

function getStats(document: Document) {
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
  const stats = getTableByHeader({ document, tagName: "h2", query: "Stats" });
  const isVer1 = children[3].textContent?.includes("Picture");
  const isVer2 = children[2].textContent?.includes("Picture");
  const version = isVer1 ? "1" : isVer2 ? "2" : "1";

  return formatStats({
    alolaMoves,
    contentArea,
    eggMoves,
    maxMoves,
    standardMoves,
    stats,
    tmMoves,
    trMoves,
    tutorMoves,
    version
  });
}

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
    const pokedex = [] as ReturnType<typeof getStats>[];
    async function scrapeDocument(url: string) {
      const page = await getDocument(`${baseURL}${url}`);
      const entry = getStats(page);
      pokedex.push(entry);
    }
    await duffsScraper(urls, scrapeDocument);
    return pokedex;
  } catch (error) {
    console.trace(error);
  }
}
