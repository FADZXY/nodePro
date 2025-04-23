const http=require('http');
const server=http.createServer((req,res)=>{
    if(req.url==='/')
    {res.end('Welcome to our home page');return;}
    if(req.url==='/about')
    {res.end('Here is our history');return;}
    res.end(`
        <h1> Oops!</h1>
        <p>We can't seem to find the page you are looking for</p>
        <a href="/">back home</a>
        <a href="/about">back about</a>
        `)
})
server.listen(5000)