import pkg from "../package.json";
const args = process.argv.slice(2);

if (args.length === 0) {
  console.log("Hello World!");
} else if (args[0] === "--version") {
  console.log(pkg.version);
} else {
  console.log(`Hello ${args[0]}!`);
}
