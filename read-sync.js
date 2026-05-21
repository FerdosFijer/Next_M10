const fg = require("fs");

console.log("Start Reading...");


try{
  const data = fg.readFileSync("./Data/dairy.txt", "utf-8");
  console.log("file content:");
  console.log(data);
}catch(err) {
  console.error(err.message);
}

console.log("Finished");

