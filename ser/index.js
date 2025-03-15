// const http = require("http");
// const fs = require("fs");
// const url = require("url");

// myServer=http.createServer((req,res)=>{
    
//     if(req.url=="/favicon.ico") return res.end();
//     const log = `${Date.now()}:${req.url}:${req.method} Request recieve\n`;
//     const myurl = url.parse(req.url,true);
//     console.log(myurl);
//     fs.appendFile('./log.txt',log,()=>{
       
//         switch(myurl.pathname){
//             case "/":
//                 res.end("Home page");
//                 break;
//             case "/about":
//                 const user = myurl.query.user_name;
//                 res.end(`hello ${user}`);
//                 break;
//             case "/search":
//                     const search = myurl.query.search_query;
//                     res.end(`hello ${search}`);
//                     break;
//             default:
//                 res.end("404");
//                 break;
    
//         }
//     }); 

// //     switch(req.url){
// //         case "/":
// //             fs.appendFile('./log.txt',log,()=>{res.end("Home Page")});
// //             break;
// //         case "/about":
// //             fs.appendFile('./log.txt',log,()=>{res.end("about Page")});
// //             break;
// //         default:
// //             fs.appendFile('./log.txt',log,()=>{res.end("404")});

// //     }

    
    
// })

// myServer.listen(8000,()=>{console.log("server started")});

const express = require('express');
const app = express();


app.get("/",(req,res)=>{
    res.end("Hello Home page")


});

app.get("/search",(req,res)=>{
    res.end(`hello ${req.query.name}`)

})

app.get("/about",(req,res)=>{
    res.end("Hello about page")

});

app.listen(8000,()=>{console.log("server started")})