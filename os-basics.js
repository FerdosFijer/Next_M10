//!very useful for server or backend site when making monitoring tools 

const os = require ("os");

console.log("system info \n");
console.log("-".repeat(50) );

console.log("Platform Details:");
console.log("Platform:", os.platform());
console.log("Architecture:", os.arch());
console.log("Os type:", os.type());
console.log("Os release:", os.release());
console.log("Hostname:", os.hostname());

console.log("-".repeat(50) );
// CPU info 
console.log("\n CPU info :");
const cpus = os.cpus();
console.log("CPU Model :", cpus[0].model);
console.log("Num of cores :", cpus.length);
console.log("CPU Speed :", cpus[0].speed);

console.log("-".repeat(50) );
// ram info 
const totalMem = os.totalmem()
console.log("Total Memory", (totalMem/1024/1024/1024).toFixed(2) , "GB");
const FreeMem = os.freemem()
console.log("Free Memory", (FreeMem/1024/1024/1024).toFixed(2) , "GB");

console.log("-".repeat(50) );


// UP time
const uptime = os.uptime();

const days =Math.floor(uptime/86400);
const hours = Math.floor((uptime % 86400) / 3600);
const minutes = Math.floor((uptime % 3600) / 60);
console.log(`${days} days ${hours} hours ${minutes} minutes`);

