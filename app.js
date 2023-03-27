const http  = require(`http`);
const server = http.createServer((req,res)=>{
if(req.url==='/about'){
    res.end('let me show u something');
    // res.end();
}
else if(req.url==='/'){
    res.end('welcome to our home page');
    // res.end();

}
else{
    res.end(`
    <h1>Oops!</h1>
    <p>wrong page</p>
    <a href="/">back home</a>`);
    // res.end();
}



})
server.listen(80);