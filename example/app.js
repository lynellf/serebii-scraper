const { App } = require("../lib/main");
const { writeFileSync } = require("fs");

async function main() {
  try {
    console.time('benchmark')
    const pokemon = await App();
    writeFileSync('out/output.json',JSON.stringify(pokemon));
    console.timeEnd('benchmark')
  } catch (error) {
    console.warn(error);
  }
}

main();
