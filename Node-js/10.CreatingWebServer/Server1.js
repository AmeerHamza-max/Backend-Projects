const http=require('http');
const server=http.createServer((req,res)=>{
    res.setHeader('Content-type','text/html');
    if(req.url=='/'){
        res.write('<h1>Welcome to Home Page</h1>');
    }
  else if
    (req.url='/contact'){
        res.write('<h1>Welcome to the contact after nodemonPage</h1>');
    }
    else
    {
        res.write('<h1>Welcome to About us</h1>');
    }
    res.end()
   
    
});
 server.listen(3000,()=>{
        console.log('You are listening on the port 300');

    })