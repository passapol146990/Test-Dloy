const http = require("http");
const express = require("express");
const fs = require("fs");

const app = express();
const title = fs.readFileSync('req-path/input.txt',"utf-8")

app.get('/',(req,res)=>{
    res.send("hello world!");
})

// const server = http.createServer((req,res)=>{
//     const path = req.url
//     console.log("url = ",path)
//     if (path ==='/' || path ==='home'){
//         const html=`
//         <h1>Home</h1>
//         <h4>${title}</h4>
//         <p>Welcome to  Homepage</p>
//         `
//         res.end(html)
//     }else if (path === '/phol'){
//         res.end('<h1>Passapol Sutatam</h1>')
//     }else{
//         res.writeHead(404)
//         res.end("<h1>Not found</h1>")
//     }
// })
// server.listen(8080,'localhost',()=>{
//     console.log("/////////////////////////////////")
//     console.log("/// start server in port 8080 ///")
//     console.log("/////////////////////////////////")
// })