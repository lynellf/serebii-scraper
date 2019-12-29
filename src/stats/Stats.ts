import { returnVoid } from "../utils/utils";

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
    baseHP: baseHP!,
    baseAtk: baseAtk!,
    baseDef: baseDef!,
    baseSpa: baseSpa!,
    baseSpd: baseSpd!,
    baseSpeed: baseSpeed!
  };
}

export function getStatsTable(table: HTMLTableElement | undefined | null) {
  const hasTable = table ? 1 : 0;
  return [returnVoid, parseStatsTable][hasTable](table!);
}
