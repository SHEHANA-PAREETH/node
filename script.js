const http= require("http");
const fs= require("fs");
const url= require("url");




http.createServer((req,res)=>{
    const urlp=url.parse(req.url,true).pathname;
   
    if(urlp==="/home")
   
        {
        var readableStream=fs.createReadStream("home.html",{encoding:"utf8"});
        res.writeHead(200,{"content-Type":"text/html"});
        readableStream.pipe(res);
        }
        
   else if(urlp==="/about")
   
    {
    var readableStream=fs.createReadStream("about.html",{encoding:"utf8"});
    res.writeHead(200,{"content-Type":"text/html"});
    readableStream.pipe(res);
    }
    else{
res.end("this is not a valid route");
    }
}).listen(3001,()=>console.log("server running"));
