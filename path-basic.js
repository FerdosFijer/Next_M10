const path = require("path")

console.log("Current file Info: \n");
console.log("filename: ", __filename);
console.log("Directory: ", __dirname);

console.log("\n" + "-".repeat(50) + "\n");

const filePath = "/C:/Fijer/10/nextLevel.pdf"
console.log("analyzing Path :", filePath, "\n");

console.log("Directory: ", path.dirname(filePath));  //Ans: /C:/Fijer/10
console.log("Base name: ", path.basename(filePath)); //Ans: nextLevel.pdf
console.log("File Extension: ", path.extname(filePath)); //Ans: .pdf 
console.log("File Name: ", path.basename(filePath, path.extname(filePath))); //Ans: nextLevel //excluse kortesi path.extname diye

console.log("\n" + "-".repeat(50) + "\n");

const parsed = path.parse(filePath);
console.log("Parsed path object: ", parsed);

console.log("\n" + "-".repeat(50) + "\n");

console.log("formatted path: ", path.format(parsed));