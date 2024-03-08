const { readFileSync, writeFileSync, readFile, writeFile } = require("fs");

const first = readFileSync(
  "E:\\NodeTutorial\\3-Build-in-modules\\fsExample.txt",
  "utf8"
);
const second = readFileSync(
  "E:\\NodeTutorial\\3-Build-in-modules\\fsExample2.txt",
  "utf8"
);

console.log(first);
console.log(second);

writeFileSync(
  "E:\\NodeTutorial\\3-Build-in-modules\\textNewFile.txt",
  "overwrite message"
);

// this method is async

readFile(
  "E:\\NodeTutorial\\3-Build-in-modules\\fsExample2.txt",
  "utf8",
  (error, result) => {
    if (error) {
      console.log(error);
      return;
    }
    const first = result;
    writeFile(
      "E:\\NodeTutorial\\3-Build-in-modules\\writeSync.txt",
      `result ${first}`,
      (error, result) => {
        if (error) {
          console.log(error);
          return;
        }
        console.log(result);
      }
    );
  }
);
