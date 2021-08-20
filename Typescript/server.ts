import http from 'http'

http
    .createServer((request, response)=>{
        response.end("Hello Typescript!");
    })
    .listen(4000,()=> console.log("server started"));