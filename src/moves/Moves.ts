import { TMove } from "../main";
type TTable = HTMLTableElement | null | undefined;

export class MoveParser {
  private moveList: { [key: string]: TMove } = {};
  private pokemonMoves: { [key: string]: string[] } = {};
  private tables: HTMLTableElement[] = [];
  private tableRows: Element[] = [];
  constructor(tables: TTable[], moveList: { [key: string]: TMove }) {
    this.moveList = moveList;
    this.tables = tables.filter(
      table => table !== undefined && table !== null
    ) as HTMLTableElement[];
    this.main();
  }

  private formatMoveForms = (element: HTMLCollection) => {
    return Array.from(element).map(
      cell => cell.children[0].getAttribute("alt")!
    )!;
  };

  private parseMoveForms = (element: HTMLCollection | undefined) => {
    const hasElement = element !== undefined ? 1 : 0;
    return [() => ["Normal"], () => this.formatMoveForms(element!)][
      hasElement
    ]();
  };

  private parseTableRows = (table: HTMLTableElement) => {
    const { children } = table;
    const rows = Array.from(children);
    this.tableRows = [...this.tableRows, ...rows];
  };

  private parseMoveRows = (rowArr: Element[], row: Element, index: number) => {
    const isTitle = index < 2;
    const hasChildren = row.children.length > 2;
    const key = !isTitle && hasChildren ? 1 : 0;
    return {
      0: rowArr,
      1: [...rowArr, row as HTMLTableRowElement]
    }[key];
  };

  private classifyRowType = (row: Element) => {
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
    const type =
      isMaxMoves || isMoveTutorMoves || isEggMoves ? "alternative" : "normal";
    this.parseMove(children, type);
  };

  private parseMove = (
    children: HTMLCollection,
    type: "alternative" | "normal"
  ) => {
    const indexes = {
      normal: {
        moveName: 1,
        moveTypeImg: [2, 0],
        moveCatImg: [3, 0],
        movePower: 4,
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

    const moveName = children[nameIndex].textContent!;
    const nameExists = this.moveList[moveName] !== undefined;
    const isValidName = moveName !== "Attack Name";
    const moveFormCells =
      children[moveFormsIndex]?.children[0]?.children[0]?.children[0]?.children;
    const moveForms = this.parseMoveForms(moveFormCells);
    if (nameExists && isValidName) {
      this.pokemonMoves[moveName] = moveForms;
      this.moveList[moveName] = this.moveList[moveName];
    } else if (!nameExists && isValidName) {
      const moveTypeImg = children[typeImgParentIndex].children[typeImgIndex]!;
      const moveCatImg = children[catImgParentIndex].children[catImgIndex]!;
      const movePower = children[movePwrIndex].textContent!;
      const moveAccuracy = children[moveAccIndex].textContent!;
      const movePowerPoints = children[movePwrPtsIndex].textContent!;
      const moveEffectPct = children[moveEffIndex].textContent!;
      const moveType = moveTypeImg
        ?.getAttribute("alt")
        ?.trim()
        ?.split("-")[1]!;
      const moveCategory = moveCatImg
        ?.getAttribute("alt")
        ?.trim()
        ?.split(":")[1]!;
      const result = {
        moveAccuracy,
        moveCategory,
        moveEffectPct,
        moveName,
        movePower,
        movePowerPoints,
        moveType
      };

      this.pokemonMoves[moveName] = moveForms;
      this.moveList[moveName] = result;
    }
  };

  private main = () => {
    const { parseTableRows, parseMoveRows, classifyRowType, tables } = this;
    tables.forEach(parseTableRows);
    const moveRows = this.tableRows.reduce(parseMoveRows, []);
    moveRows.forEach(classifyRowType);
  };

  getMoves = () => ({
    moveList: this.moveList,
    pokemonMoves: this.pokemonMoves
  });
}
