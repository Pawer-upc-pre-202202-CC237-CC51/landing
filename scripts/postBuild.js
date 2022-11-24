const fs = require("fs");

const main = fs.readFileSync(__dirname + "/../build/index.html");
fs.writeFileSync(__dirname + "/../build/404.html", main);
console.log("Post build done.");