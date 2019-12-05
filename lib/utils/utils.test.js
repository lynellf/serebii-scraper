"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
it("returns a document", async () => {
    const mewtwoPage = await utils_1.getDocument("https://www.serebii.net/pokedex-swsh/mewtwo/");
    const title = mewtwoPage.title;
    const expectedTitle = "Mewtwo - #150 - Serebii.net Pokédex";
    const hasMatch = title === expectedTitle;
    expect(hasMatch).toBe(true);
});
//# sourceMappingURL=utils.test.js.map