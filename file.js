const fs = require("fs")

// Sync... Blocking
// fs.writeFileSync("./test.txt","Hey There")

console.log("1")
const result = fs.readFileSync("contacts.txt","utf-8")
console.log(result)
console.log("2")





// Async Non-blocking
// fs.writeFile("./test.txt","Hello World",
   // (err) => {}
// )

// const result = fs.readFileSync("./contacts.txt", "utf-8");
// console.log(result);

// fs.readFile("./contacts.txt", "utf8",
//     (err, result) => {
//         if(err) {
//             console.log("Error", err);
//         }else{
//             console.log(result)
//         }
//     }
// )


// fs.appendFileSync("./test.txt", `${Date.now()} Hey There\n`)

// fs.cpSync("./test.txt", "./copy.txt");

// fs.unlinkSync("./copy.txt")

// console.log(fs.statSync("./test.txt"))

//fs.mkdirSync('my-docs/ ', {})

