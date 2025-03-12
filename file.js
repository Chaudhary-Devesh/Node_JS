const { isUtf8 } = require('buffer');
const { log } = require('console');
const fs = require('fs');
// fs.writeFileSync('./test.txt',"Hello File in Node js");
// fs.writeFile('./test.txt',"Async function",(err)=>{});

// console.log(fs.readFileSync('./test.txt','utf-8'));

// fs.appendFileSync("./test.txt","Hello\n");

// fs.appendFile("./test.txt",`${Date.now()} hello\n`,()=>{});

// fs.readFile("./test.txt","utf-8",(err,result)=>{
//     if(err){
//         console.log(err);
        
//     }else{
//         console.log(result);
        
//     }

// });


// fs.cpSync("./test.txt","./contact");

// fs.unlinkSync("./contact");

// console.log(fs.statfsSync('./test.txt'));


// fs.mkdirSync("./First/");
fs.mkdirSync("First1/a/b",{recursive:true});

