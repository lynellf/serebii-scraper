import { getDocument } from "./utils/utils";

function parseMovesTable(table: HTMLTableElement | undefined) {
  if (!table) {
    return;
  }
  const { children: rows } = table;
  const output = Array.from(rows).reduce((rowArr, row, index) => {
    const isTitle = index < 2;
    if (!isTitle) {
      const hasChildren = row.children.length > 2;
      if (!hasChildren) {
        return rowArr;
      }
      return [...rowArr, row as HTMLTableRowElement];
    }
    return rowArr;
  }, [] as HTMLTableRowElement[]);
  return getMoves(output);
}

function parseStatsTable(table: HTMLTableElement | undefined) {
  if (!table) {
    return;
  }

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
  const errorMsg = new Error(`${query} Table Not Found!`);
  if (!targetHeader) {
    // console.info(errorMsg);
    return;
  }
  const headingParentN0 = targetHeader.parentNode;
  if (!headingParentN0) {
    // console.info(errorMsg);
    return;
  }
  const headingParentN1 = headingParentN0.parentNode;
  if (!headingParentN1) {
    // console.info(errorMsg);
    return;
  }
  const table = headingParentN1.parentNode as HTMLTableElement;
  if (!table) {
    // console.info(errorMsg);
    return;
  }
  return table;
}

function getMoves(rows: HTMLTableRowElement[]) {
  const moveList = rows.map(row => {
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

    if (!isAltTable) {
      const moveName = children[1].textContent;
      const moveTypeImg = children[2].children[0];
      const moveCatImg = children[3].children[0];
      const movePower = children[4].textContent;
      const moveAccuracy = children[5].textContent;
      const movePowerPoints = children[6].textContent;
      const moveEffectPct = children[7].textContent;
      const moveType = moveTypeImg
        ?.getAttribute("alt")
        ?.trim()
        ?.split("-")[1];
      const moveCategory = moveCatImg
        ?.getAttribute("alt")
        ?.trim()
        ?.split(":")[1];

      return {
        moveName,
        moveType,
        moveCategory,
        movePower,
        moveAccuracy,
        movePowerPoints,
        moveEffectPct
      };
    }

    const moveName = children[0].textContent;
    const moveTypeImg = children[1].children[0];
    const moveCatImg = children[2].children[0];
    const movePower = children[3].textContent;
    const moveAccuracy = children[4].textContent;
    const movePowerPoints = children[5].textContent;
    const moveEffectPct = children[6].textContent;

    const moveType = moveTypeImg
      ?.getAttribute("alt")
      ?.trim()
      ?.split("-")[1];
    const moveCategory = moveCatImg
      ?.getAttribute("alt")
      ?.trim()
      ?.split(":")[1];
    return {
      moveName,
      moveType,
      moveCategory,
      movePower,
      moveAccuracy,
      movePowerPoints,
      moveEffectPct
    };
  });
  return moveList;
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
  version
}: {
  abilitiesSection: Element;
  eggMoves: HTMLTableElement | undefined;
  generalInfo: Element;
  imageSection: Element;
  maxMoves: HTMLTableElement | undefined;
  standardMoves: HTMLTableElement | undefined;
  stats: HTMLTableElement | undefined;
  tmMoves: HTMLTableElement | undefined;
  trMoves: HTMLTableElement | undefined;
  tutorMoves: HTMLTableElement | undefined;
  version: "1" | "2";
}) {
  const image =
    version === "1"
      ? imageSection.children[0].children[1].children[0].children[0].children[0]
          .children[0].children[0].children[0]
      : imageSection.children[0].children[1].children[0].children[0].children[0]
          .children[0].children[0];

  const imageSrc = (image as HTMLImageElement).src;
  const {
    children: {
      0: {
        children: {
          1: {
            children: {
              0: { textContent: name },
              2: {
                children: {
                  0: {
                    children: {
                      0: {
                        children: {
                          0: {
                            children: {
                              1: { textContent: dexNumber }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              },
              4: typeCell
            }
          }
        }
      }
    }
  } = generalInfo;
  const {
    children: {
      0: {
        children: {
          0: { textContent: rawAbilities }
        }
      }
    }
  } = abilitiesSection;
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
  const standardMoveList = parseMovesTable(standardMoves);
  const tmMovesList = parseMovesTable(tmMoves);
  const trMovesList = parseMovesTable(trMoves);
  const eggMovesList = parseMovesTable(eggMoves);
  const tutorMovesList = parseMovesTable(tutorMoves);
  const maxMovesList = parseMovesTable(maxMoves);
  const moves = standardMoveList
    ?.concat(tmMovesList ? tmMovesList : [])
    ?.concat(trMovesList ? trMovesList : [])
    ?.concat(eggMovesList ? eggMovesList : [])
    ?.concat(tutorMovesList ? tutorMovesList : [])
    ?.concat(maxMovesList ? maxMovesList : []);
  const baseStats = parseStatsTable(stats);

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
  const main = document.querySelector("main");
  const title = document.title;
  console.info(`Now Scraping: ${title}`);
  if (!main) {
    throw new Error("Page Not Found");
  }
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
  const stats = getTableByHeader({ document, tagName: "h2", query: "Stats" });
  const isVer1 = children[3].textContent?.includes("Picture");
  const isVer2 = children[2].textContent?.includes("Picture");
  if (!isVer1 && !isVer2) {
    throw new Error("Pokemon Data Not Found!");
  }

  if (isVer1) {
    const {
      children: { 3: imageSection, 4: generalInfo, 5: abilitiesSection }
    } = contentArea;
    return parseStats({
      abilitiesSection,
      generalInfo,
      imageSection,
      standardMoves,
      stats,
      tmMoves,
      trMoves,
      eggMoves,
      tutorMoves,
      maxMoves,
      version: "1"
    });
  }

  if (isVer2) {
    const {
      children: { 2: imageSection, 3: generalInfo, 4: abilitiesSection }
    } = contentArea;

    return parseStats({
      abilitiesSection,
      generalInfo,
      imageSection,
      standardMoves,
      stats,
      tmMoves,
      trMoves,
      eggMoves,
      tutorMoves,
      maxMoves,
      version: "2"
    });
  }
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
  let urls: string[] = [];

  tableBodies.forEach(tableBody => {
    const tableRows = Array.from(tableBody.children) as HTMLTableRowElement[];
    const urlList = tableRows.reduce((output, row) => {
      const cells = Array.from(row.children) as HTMLTableDataCellElement[];
      cells.forEach(cell => {
        const form = cell.children[0] as HTMLFormElement;
        const dropdown = form.children[0] as HTMLSelectElement;
        const options = Array.from(dropdown.children) as HTMLOptionElement[];
        options.forEach(option => {
          const { value } = option;
          const isEmpty = value === "#";
          if (!isEmpty) {
            output.push(value);
          }
        });
      });
      return output;
    }, [] as string[]);
    urls = [...urls, ...urlList];
  });

  return urls;
}

export async function App() {
  try {
    const baseURL = "https://www.serebii.net";
    const index = `${baseURL}/pokedex-swsh/eternatus/`;
    const indexPage = await getDocument(index);
    const urls = getPokemonPageURLS(indexPage);
    const pokedex = [] as ReturnType<typeof getStats>[];
    for (let index = 0; index < urls.length; index++) {
      const url = urls[index];
      const page = await getDocument(`${baseURL}${url}`);
      const entry = getStats(page);
      pokedex.push(entry);
    }
    return pokedex;
  } catch (error) {
    console.trace(error);
  }
}
