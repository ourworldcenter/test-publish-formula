const args = process.argv.slice(2);

if (args.length === 0) {
  console.log("Hello World!");
} else {
  console.log(`Hello ${args[0]}!`);
}
