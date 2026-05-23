const fs = require("fs");

//! synchronous
fs.writeFileSync("./output/temp.txt", " this is a temp file")
console.log("temp file created");

if (fs.existsSync("./output/temp.txt")) {
    console.log("file exists");

    //     fs.unlinkSync("./output/temp.txt");
    //     console.log("file deleted");

    try {
        fs.unlinkSync("./output/temp.txt");
        console.log("file deleted");
    } catch (error) {
        console.log("ERROR :", error.message);
    }
}

//! Asynchronous

fs.writeFile("./output/temp2.txt", "Another temp file", (err) => {
    if (err) return console.error(err.message);

    console.log("Another temp file created");

    fs.unlink("./output/temp2.txt", (err) => {
        if (err) {
            console.error("Error :", err.message)
        } else {
            console.log("Temp2 deleted");
        }
    })
});