"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils/utils");
function parseMovesTable(table) {
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
            return [...rowArr, row];
        }
        return rowArr;
    }, []);
    return getMoves(output);
}
function parseStatsTable(table) {
    if (!table) {
        return;
    }
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
function getTableByHeader({ document, tagName, query }) {
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
    const table = headingParentN1.parentNode;
    if (!table) {
        // console.info(errorMsg);
        return;
    }
    return table;
}
function getMoves(rows) {
    const moveList = rows.map(row => {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
        const { children } = row;
        const isMaxMoves = (_a = row.parentNode.parentNode.textContent) === null || _a === void 0 ? void 0 : _a.includes("Max Moves");
        const isMoveTutorMoves = (_b = row.parentNode.parentNode.textContent) === null || _b === void 0 ? void 0 : _b.includes("Move Tutor");
        const isEggMoves = (_c = row.parentNode.parentNode.textContent) === null || _c === void 0 ? void 0 : _c.includes("Egg Moves");
        const isAltTable = isMaxMoves || isMoveTutorMoves || isEggMoves;
        if (!isAltTable) {
            const moveName = children[1].textContent;
            const moveTypeImg = children[2].children[0];
            const moveCatImg = children[3].children[0];
            const movePower = children[4].textContent;
            const moveAccuracy = children[5].textContent;
            const movePowerPoints = children[6].textContent;
            const moveEffectPct = children[7].textContent;
            const moveType = (_f = (_e = (_d = moveTypeImg) === null || _d === void 0 ? void 0 : _d.getAttribute("alt")) === null || _e === void 0 ? void 0 : _e.trim()) === null || _f === void 0 ? void 0 : _f.split("-")[1];
            const moveCategory = (_j = (_h = (_g = moveCatImg) === null || _g === void 0 ? void 0 : _g.getAttribute("alt")) === null || _h === void 0 ? void 0 : _h.trim()) === null || _j === void 0 ? void 0 : _j.split(":")[1];
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
        const moveType = (_m = (_l = (_k = moveTypeImg) === null || _k === void 0 ? void 0 : _k.getAttribute("alt")) === null || _l === void 0 ? void 0 : _l.trim()) === null || _m === void 0 ? void 0 : _m.split("-")[1];
        const moveCategory = (_q = (_p = (_o = moveCatImg) === null || _o === void 0 ? void 0 : _o.getAttribute("alt")) === null || _p === void 0 ? void 0 : _p.trim()) === null || _q === void 0 ? void 0 : _q.split(":")[1];
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
function parseStats({ abilitiesSection, eggMoves, generalInfo, imageSection, maxMoves, standardMoves, stats, tmMoves, trMoves, tutorMoves, version }) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    const image = version === "1"
        ? imageSection.children[0].children[1].children[0].children[0].children[0]
            .children[0].children[0].children[0]
        : imageSection.children[0].children[1].children[0].children[0].children[0]
            .children[0].children[0];
    const imageSrc = image.src;
    const { children: { 0: { children: { 1: { children: { 0: { textContent: name }, 2: { children: { 0: { children: { 0: { children: { 0: { children: { 1: { textContent: dexNumber } } } } } } } } }, 4: typeCell } } } } } } = generalInfo;
    const { children: { 0: { children: { 0: { textContent: rawAbilities } } } } } = abilitiesSection;
    const types = Array.from(typeCell.children).map(link => {
        const { children: { 0: img } } = link;
        const { alt } = img;
        return alt;
    });
    const trimmedAbilities = (_a = rawAbilities) === null || _a === void 0 ? void 0 : _a.trim();
    const parsedAbilities = (_b = trimmedAbilities) === null || _b === void 0 ? void 0 : _b.substring(11);
    const abilities = (_c = parsedAbilities) === null || _c === void 0 ? void 0 : _c.split("-");
    const standardMoveList = parseMovesTable(standardMoves);
    const tmMovesList = parseMovesTable(tmMoves);
    const trMovesList = parseMovesTable(trMoves);
    const eggMovesList = parseMovesTable(eggMoves);
    const tutorMovesList = parseMovesTable(tutorMoves);
    const maxMovesList = parseMovesTable(maxMoves);
    const moves = (_h = (_g = (_f = (_e = (_d = standardMoveList) === null || _d === void 0 ? void 0 : _d.concat(tmMovesList ? tmMovesList : [])) === null || _e === void 0 ? void 0 : _e.concat(trMovesList ? trMovesList : [])) === null || _f === void 0 ? void 0 : _f.concat(eggMovesList ? eggMovesList : [])) === null || _g === void 0 ? void 0 : _g.concat(tutorMovesList ? tutorMovesList : [])) === null || _h === void 0 ? void 0 : _h.concat(maxMovesList ? maxMovesList : []);
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
function getStats(document) {
    var _a, _b;
    const main = document.querySelector("main");
    const title = document.title;
    console.info(`Now Scraping: ${title}`);
    if (!main) {
        throw new Error("Page Not Found");
    }
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
    const stats = getTableByHeader({ document, tagName: "h2", query: "Stats" });
    const isVer1 = (_a = children[3].textContent) === null || _a === void 0 ? void 0 : _a.includes("Picture");
    const isVer2 = (_b = children[2].textContent) === null || _b === void 0 ? void 0 : _b.includes("Picture");
    if (!isVer1 && !isVer2) {
        throw new Error("Pokemon Data Not Found!");
    }
    if (isVer1) {
        const { children: { 3: imageSection, 4: generalInfo, 5: abilitiesSection } } = contentArea;
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
        const { children: { 2: imageSection, 3: generalInfo, 4: abilitiesSection } } = contentArea;
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
function getPokemonPageURLS(document) {
    var _a;
    const main = document.querySelector("main");
    const dexDiv = (_a = main) === null || _a === void 0 ? void 0 : _a.children[0];
    if (!dexDiv) {
        throw new Error("Pokedex Div Not Found!");
    }
    const dexTable = dexDiv.children[0];
    const tableBodies = Array.from(dexTable.children);
    let urls = [];
    tableBodies.forEach(tableBody => {
        const tableRows = Array.from(tableBody.children);
        const urlList = tableRows.reduce((output, row) => {
            const cells = Array.from(row.children);
            cells.forEach(cell => {
                const form = cell.children[0];
                const dropdown = form.children[0];
                const options = Array.from(dropdown.children);
                options.forEach(option => {
                    const { value } = option;
                    const isEmpty = value === "#";
                    if (!isEmpty) {
                        output.push(value);
                    }
                });
            });
            return output;
        }, []);
        urls = [...urls, ...urlList];
    });
    return urls;
}
async function App() {
    try {
        const baseURL = "https://www.serebii.net";
        const index = `${baseURL}/pokedex-swsh/eternatus/`;
        const indexPage = await utils_1.getDocument(index);
        const urls = getPokemonPageURLS(indexPage);
        const pokedex = [];
        for (let index = 0; index < urls.length; index++) {
            const url = urls[index];
            const page = await utils_1.getDocument(`${baseURL}${url}`);
            const entry = getStats(page);
            pokedex.push(entry);
        }
        return pokedex;
    }
    catch (error) {
        console.trace(error);
    }
}
exports.App = App;
//# sourceMappingURL=main.js.map