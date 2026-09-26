// crypto module for password hashing

//password >> gioawurfdsafoiugr like this

const crypto = require ("crypto");

console.log("\n MD5 Hash: ");

const md5Hash = crypto.createHash("md5").update("password123").digest("hex"); //not recommended for secutiy purpose
const md5Hash2 = crypto.createHash("md5").update("password123").digest("hex"); //not recommended for secutiy purpose
console.log("My input given: password123");
console.log("MD5 Hased Password:", md5Hash);
console.log("MD5 Hased2 Password:", md5Hash2);


const sha256Hash = crypto.createHash("sha256").update("password123").digest("hex"); //not recommended for secutiy purpose
console.log("sha256 Hased Password:", sha256Hash);

const sha512Hash = crypto.createHash("sha512").update("password123").digest("hex"); //not recommended for secutiy purpose
console.log("sha256 Hased Password:", sha512Hash);