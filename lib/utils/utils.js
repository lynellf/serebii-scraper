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
//# sourceMappingURL=utils.js.map