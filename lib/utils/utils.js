"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const isomorphic_fetch_1 = __importDefault(require("isomorphic-fetch"));
const jsdom_1 = require("jsdom");
async function getDocument(url) {
    const response = await isomorphic_fetch_1.default(url);
    const { status } = response;
    const isOk = status === 200;
    if (!isOk) {
        throw new Error(`Request Did Not Return 200. Please verify URL and try again. StatusCode: ${status}`);
    }
    const pageText = await response.text();
    const DOM = new jsdom_1.JSDOM(pageText);
    const { window: { document } } = DOM;
    return document;
}
exports.getDocument = getDocument;
async function duffsScraper(arr, cb) {
    let iterations = Math.floor(arr.length / 8);
    let startAt = arr.length % 8;
    let i = 0;
    do {
        switch (startAt) {
            case 0:
                await cb(arr[i++]);
            case 7:
                await cb(arr[i++]);
            case 6:
                await cb(arr[i++]);
            case 5:
                await cb(arr[i++]);
            case 4:
                await cb(arr[i++]);
            case 3:
                await cb(arr[i++]);
            case 2:
                await cb(arr[i++]);
            case 1:
                await cb(arr[i++]);
        }
        startAt = 0;
    } while (--iterations);
}
exports.duffsScraper = duffsScraper;
const first = xs => xs[0];
const rest = xs => xs.slice(1);
function getChildNode(element, path) {
    const children = Array.from(element.children);
    const hasParams = children.length > 0 && path.length > 0;
    const output = hasParams
        ? getChildNode(children[first(path)], rest(path))
        : element;
    return output;
}
exports.getChildNode = getChildNode;
//# sourceMappingURL=utils.js.map