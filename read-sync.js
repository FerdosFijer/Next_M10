const fg = require("fs"); //fs module means file system jeta antesi read or write korar jonno

console.log("Start Reading...");


try{
  const data = fg.readFilesync("./Data/dairy.txt", "utf-8"); //utf-8 encoding add korlam jno read korte pare
  console.log("file content:");
  console.log(data);
}catch(err) {
  console.error(err.message);
}

console.log("Finished");

