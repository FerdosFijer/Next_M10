const path = require("path")

console.log("Current file Info: \n");
console.log("filename: ", __filename);
console.log("Directory: ", __dirname);

console.log("\n" + "-".repeat(50) + "\n"); // Ans : --------------------------------------------------

const filePath = "/C:/Fijer/10/nextLevel.pdf"
console.log("analyzing Path :", filePath, "\n");

console.log("Directory: ", path.dirname(filePath));  //Ans: /C:/Fijer/10
console.log("Base name: ", path.basename(filePath)); //Ans: nextLevel.pdf
console.log("File Extension: ", path.extname(filePath)); //Ans: .pdf 
console.log("File Name: ", path.basename(filePath, path.extname(filePath))); //Ans: nextLevel //excluse kortesi 

console.log("\n" + "-".repeat(50) + "\n");

const parsed = path.parse(filePath);
console.log("Parsed path object: ", parsed);

/* Ans: Parsed path object:  {
  root: '/',
  dir: '/C:/Fijer/10',
  base: 'nextLevel.pdf',
  ext: '.pdf',
  name: 'nextLevel'
} */

console.log("\n" + "-".repeat(50) + "\n");

console.log("formatted path: ", path.format(parsed)); //Ans: formatted path:  /C:/Fijer/10\nextLevel.pdf


//! path means drive er /C:/Fijer/10\nextLevel.pdf amn link ta jeta theke protome vange vange dektesi and jkn object obbostay takbe take ager moto full link akare dekbo