const fs = require ("fs");
console.log("start readig....");

fs.readFile("./Data/dairy.txt", "utf-8", (error, data) => {
    if(error){
        console.error("error happend : ", error.message);
    }
    console.log("file content :", data);
})
console.log("this runs immediately");

