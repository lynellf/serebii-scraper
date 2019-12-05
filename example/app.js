const { App } = require("../lib/main");
const { writeFileSync } = require("fs");

async function main() {
  try {
    const pokemon = await App();
    writeFileSync('out/output.json',JSON.stringify(pokemon));
  } catch (error) {
    console.warn(error);
  }
}

main();
