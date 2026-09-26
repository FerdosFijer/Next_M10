// process.arg[0] = node path
// process.arg[1] = file path
// process.arg[2] = first actual argument;

const args = process.argv;

const name = args[2] || "guest"; //args[2] eta diye first argument ta dekasse
 
const time = new Date().getHours() // eta diye live time ta passi

let greeting;

if (time < 12) {
  greeting = "Good Morning";
} else if (time < 18) {
  greeting = "Good Afternoon";
} else {
  greeting = "Good Evening";
}
console.log(time);
console.log(`${greeting} ${name}`);