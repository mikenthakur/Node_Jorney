const fs = require("fs")

//Sync...
//fs.writeFileSync("./test.txt","Hey There")


// Async
// fs.writeFile("./test.txt","Hello World",
//     (err) => {}
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


fs.appendFileSync("./test.txt", `${Date.now()} Hey There\n`)
