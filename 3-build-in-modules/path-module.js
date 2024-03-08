const path = require("path");
console.log(path.sep);
console.log(path.join("/2-modules", "names"));
console.log(path.basename("/2-modules", "names"));

const absolute = path.resolve(__dirname, "content", "2-modules");
console.log(absolute);
