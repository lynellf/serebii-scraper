"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils/utils");
function returnVoid() {
    return undefined;
}
function parseMovesTable(table) {
    const { children: rows } = table;
    const output = Array.from(rows).reduce(getTableRows, []);
    return output.map(parseMoveRow);
}
function parseStatsTable(table) {
    const { children: { 2: { children: { 1: { textContent: baseHP }, 2: { textContent: baseAtk }, 3: { textContent: baseDef }, 4: { textContent: baseSpa }, 5: { textContent: baseSpd }, 6: { textContent: baseSpeed } } } } } = table;
    return {
        baseHP,
        baseAtk,
        baseDef,
        baseSpa,
        baseSpd,
        baseSpeed
    };
}
function getTableRows(rowArr, row, index) {
    const isTitle = index < 2;
    if (!isTitle) {
        const hasChildren = row.children.length > 2;
        if (!hasChildren) {
            return rowArr;
        }
        return [...rowArr, row];
    }
    return rowArr;
}
function getMovesTable(table) {
    const hasTable = table ? 1 : 0;
    return [returnVoid, parseMovesTable][hasTable](table);
}
function getStatsTable(table) {
    const hasTable = table ? 0 : 1;
    return [returnVoid, parseStatsTable][hasTable](table);
}
function getTableByHeader({ document, tagName, query }) {
    var _a, _b, _c;
    const targets = Array.from(document.querySelectorAll(tagName));
    const targetHeader = targets.find(target => target.textContent === query);
    return (_c = (_b = (_a = targetHeader) === null || _a === void 0 ? void 0 : _a.parentNode) === null || _b === void 0 ? void 0 : _b.parentNode) === null || _c === void 0 ? void 0 : _c.parentNode;
}
function parseMoveRow(row) {
    var _a, _b, _c;
    const { children } = row;
    const isMaxMoves = (_a = row.parentNode.parentNode.textContent) === null || _a === void 0 ? void 0 : _a.includes("Max Moves");
    const isMoveTutorMoves = (_b = row.parentNode.parentNode.textContent) === null || _b === void 0 ? void 0 : _b.includes("Move Tutor");
    const isEggMoves = (_c = row.parentNode.parentNode.textContent) === null || _c === void 0 ? void 0 : _c.includes("Egg Moves");
    const isAltTable = isMaxMoves || isMoveTutorMoves || isEggMoves;
    return isAltTable
        ? formatMoves("alternative", children)
        : formatMoves("normal", children);
}
function formatMoves(type, children) {
    var _a, _b, _c, _d, _e, _f;
    const indexes = {
        normal: {
            moveName: 1,
            moveTypeImg: [2, 0],
            moveCatImg: [3, 0],
            movePower: 5,
            moveAccuracy: 5,
            movePowerPoints: 6,
            moveEffectPct: 7
        },
        alternative: {
            moveName: 0,
            moveTypeImg: [1, 0],
            moveCatImg: [2, 0],
            movePower: 3,
            moveAccuracy: 4,
            movePowerPoints: 5,
            moveEffectPct: 6
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
    const moveName = children[nameIndex].textContent;
    const moveTypeImg = children[typeImgParentIndex].children[typeImgIndex];
    const moveCatImg = children[catImgParentIndex].children[catImgIndex];
    const movePower = children[movePwrIndex].textContent;
    const moveAccuracy = children[moveAccIndex].textContent;
    const movePowerPoints = children[movePwrPtsIndex].textContent;
    const moveEffectPct = children[moveEffIndex].textContent;
    const moveType = (_c = (_b = (_a = moveTypeImg) === null || _a === void 0 ? void 0 : _a.getAttribute("alt")) === null || _b === void 0 ? void 0 : _b.trim()) === null || _c === void 0 ? void 0 : _c.split("-")[1];
    const moveCategory = (_f = (_e = (_d = moveCatImg) === null || _d === void 0 ? void 0 : _d.getAttribute("alt")) === null || _e === void 0 ? void 0 : _e.trim()) === null || _f === void 0 ? void 0 : _f.split(":")[1];
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
function formatStats({ contentArea, eggMoves, maxMoves, standardMoves, stats, tmMoves, trMoves, tutorMoves, version }) {
    const indexes = {
        "1": [3, 4, 5],
        "2": [2, 3, 4]
    };
    const { children: { [indexes[version][0]]: imageSection, [indexes[version][1]]: generalInfo, [indexes[version][2]]: abilitiesSection } } = contentArea;
    return parseStats({
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
    });
}
function parseTypes(element) {
    const { children: { 0: img } } = element;
    const { alt } = img;
    return alt;
}
function parseStats({ abilitiesSection, eggMoves, generalInfo, imageSection, maxMoves, standardMoves, stats, tmMoves, trMoves, tutorMoves, alolaMoves, version }) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    const image = {
        1: () => utils_1.getChildNode(imageSection, [0, 1, 0, 0, 0, 0, 0]),
        2: () => utils_1.getChildNode(imageSection, [0, 1, 0, 0, 0, 0])
    }[version]();
    const imageSrc = image.src;
    const name = utils_1.getChildNode(generalInfo, [0, 1, 0]).textContent;
    const dexNumber = utils_1.getChildNode(generalInfo, [0, 1, 2, 0, 0, 0, 1]).textContent;
    const typeCell = utils_1.getChildNode(generalInfo, [0, 1, 4]);
    // const {
    //   children: {
    //     0: {
    //       children: {
    //         1: {
    //           children: {
    //             0: { textContent: name },
    //             2: {
    //               children: {
    //                 0: {
    //                   children: {
    //                     0: {
    //                       children: {
    //                         0: {
    //                           children: {
    //                             1: { textContent: dexNumber }
    //                           }
    //                         }
    //                       }
    //                     }
    //                   }
    //                 }
    //               }
    //             },
    //             4: typeCell
    //           }
    //         }
    //       }
    //     }
    //   }
    // } = generalInfo;
    // const {
    //   children: {
    //     0: {
    //       children: {
    //         0: { textContent: rawAbilities }
    //       }
    //     }
    //   }
    // } = abilitiesSection;
    const rawAbilities = utils_1.getChildNode(abilitiesSection, [0, 0]).textContent;
    const types = Array.from(typeCell.children).map(link => {
        const { children: { 0: img } } = link;
        const { alt } = img;
        return alt;
    });
    const trimmedAbilities = (_a = rawAbilities) === null || _a === void 0 ? void 0 : _a.trim();
    const parsedAbilities = (_b = trimmedAbilities) === null || _b === void 0 ? void 0 : _b.substring(11);
    const abilities = (_c = parsedAbilities) === null || _c === void 0 ? void 0 : _c.split("-");
    const standardMoveList = getMovesTable(standardMoves);
    const tmMovesList = getMovesTable(tmMoves);
    const trMovesList = getMovesTable(trMoves);
    const eggMovesList = getMovesTable(eggMoves);
    const tutorMovesList = getMovesTable(tutorMoves);
    const maxMovesList = getMovesTable(maxMoves);
    const moves = (_h = (_g = (_f = (_e = (_d = standardMoveList) === null || _d === void 0 ? void 0 : _d.concat((tmMovesList !== null && tmMovesList !== void 0 ? tmMovesList : []))) === null || _e === void 0 ? void 0 : _e.concat((trMovesList !== null && trMovesList !== void 0 ? trMovesList : []))) === null || _f === void 0 ? void 0 : _f.concat((eggMovesList !== null && eggMovesList !== void 0 ? eggMovesList : []))) === null || _g === void 0 ? void 0 : _g.concat((tutorMovesList !== null && tutorMovesList !== void 0 ? tutorMovesList : []))) === null || _h === void 0 ? void 0 : _h.concat((maxMovesList !== null && maxMovesList !== void 0 ? maxMovesList : []));
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
function getStats(document) {
    var _a, _b;
    const main = document.querySelector("main");
    const title = document.title;
    console.info(`Now Scraping: ${title}`);
    const { children: { 1: contentArea } } = main;
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
    const isVer1 = (_a = children[3].textContent) === null || _a === void 0 ? void 0 : _a.includes("Picture");
    const isVer2 = (_b = children[2].textContent) === null || _b === void 0 ? void 0 : _b.includes("Picture");
    const version = isVer1 ? "1" : isVer2 ? "2" : "1";
    return formatStats({
        contentArea,
        standardMoves,
        stats,
        tmMoves,
        trMoves,
        eggMoves,
        tutorMoves,
        maxMoves,
        version
    });
}
function pushURL(option, output) {
    const { value } = option;
    const isEmpty = value === "#";
    if (!isEmpty) {
        output.push(value);
    }
    return;
}
function parsePageURLS(cell, output) {
    const form = cell.children[0];
    const dropdown = form.children[0];
    const options = Array.from(dropdown.children);
    options.forEach(option => pushURL(option, output));
    return;
}
function tableToURLS(tableSection, list) {
    const tableRows = Array.from(tableSection.children);
    const urlList = tableRows.reduce((output, row) => {
        const cells = Array.from(row.children);
        cells.forEach(cell => parsePageURLS(cell, output));
        return output;
    }, []);
    return [...list, ...urlList];
}
function getPokemonPageURLS(document) {
    var _a;
    const main = document.querySelector("main");
    const dexDiv = (_a = main) === null || _a === void 0 ? void 0 : _a.children[0];
    if (!dexDiv) {
        throw new Error("Pokedex Div Not Found!");
    }
    const dexTable = dexDiv.children[0];
    const tableBodies = Array.from(dexTable.children);
    const urls = tableBodies.reduce((output, tableBody) => tableToURLS(tableBody, output), []);
    return urls;
}
async function App() {
    try {
        const baseURL = "https://www.serebii.net";
        const index = `${baseURL}/pokedex-swsh/eternatus/`;
        const indexPage = await utils_1.getDocument(index);
        const urls = getPokemonPageURLS(indexPage);
        const pokedex = [];
        async function scrapeDocument(url) {
            const page = await utils_1.getDocument(`${baseURL}${url}`);
            const entry = getStats(page);
            pokedex.push(entry);
        }
        await utils_1.duffsScraper(urls, scrapeDocument);
        return pokedex;
    }
    catch (error) {
        console.trace(error);
    }
}
exports.App = App;
//# sourceMappingURL=main.js.map