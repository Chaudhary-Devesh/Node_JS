const http = require("http");
const fs = require("fs");

myServer=http.createServer((req,res)=>{
    const log = `${Date.now()}:${req.url} Request recieve\n`;
    fs.appendFile('./log.txt',log,()=>{
        switch(req.url){
            case "/":
                res.end("Home Page");
                break;
            case "/about":
                res.end("about Page");
                break;
            default:
                res.end("404");
                break;
    
        }
    });

    switch(req.url){
        case "/":
            fs.appendFile('./log.txt',log,()=>{res.end("Home Page")});
            break;
        case "/about":
            fs.appendFile('./log.txt',log,()=>{res.end("about Page")});
            break;
        default:
            fs.appendFile('./log.txt',log,()=>{res.end("404")});

    }

    
    
})

myServer.listen(8000,()=>{console.log("server started")});