import { readFile } from 'fs/promises';
import {createServer} from 'http'
import crypto from 'crypto'
import path from 'path';
import { writeFile } from 'fs/promises';
const DATA_FILE=path.join('data','links.json');
const loadLinks= async ()=>{
     try {
        const data=await readFile(DATA_FILE,'utf-8');
        return JSON.parse(data);
        
     } catch (error) {
        if(error.code==='ENOENT'){
            await writeFile(DATA_FILE,JSON.stringify({}))
            return {};
        }
        throw error;
        
     }
}
const saveLinks=async (links)=>{
    await writeFile(DATA_FILE,JSON.stringify(links));
}
const PORT=3000;
const serverFile=async (res,filePath,contentType)=>{
    try {
                const data=await readFile(filePath);
                 res.writeHead(200,{'Content-Type':contentType});
                 res.end(data);
        } catch (error) {
                res.writeHead(404,{'Content-Type':contentType});
                res.end('404 Page not found')
            }
}
const server=createServer(async (req,res)=>{
    if(req.method==='GET'){
        if(req.url=='/'){
            return serverFile(res,path.join('public','index.html'),'text/html');
        }
       else if(req.url=='/style.css'){
           return serverFile(res,path.join('public','style.css'),'text/css')
        }
        else if(req.url==='/links'){
            const links=await loadLinks();
            res.writeHead(200,{'Content-Type':'application/json'});
            res.end(JSON.stringify(links));
        }
        else{
            const links=await loadLinks();
            const shortCode=req.url.slice(1);
            if(links[shortCode]){
                res.writeHead(302,{location:links[shortCode]})
                return res.end();
            }
            res.writeHead(404,{'Content-Type':'text/plain'});
            return res.end('Shortened URL is not found');
        }
    }
    if(req.method==="POST" && req.url=="/shorten"){
        const links=await loadLinks();
        let body='';
        req.on('data',(chunk)=> (body+=chunk));
        req.on('end', async ()=>{
            console.log(body);
            const {url,shortCode}=JSON.parse(body);
            if(!url){
                res.writeHead(404,{'Content-Type':'text/plain'});
                return res.end('URL is Required');
            }
            const finalShortCode=shortCode||crypto.randomBytes(4).toString('hex');
            if(links[finalShortCode]){
                 res.writeHead(404,{'Content-Type':'text/plain'});
                return res.end('Short Code Already exist.Please choose another');
            }
            links[finalShortCode]=url;
            await saveLinks(links);
            res.writeHead(200,{'Content-Type':'application/json'});
            res.end(JSON.stringify({success:true,shortCode:finalShortCode}))
        
            

        })
    }

})
server.listen(PORT,()=>{
    console.log(`Server running at http://localhost:${PORT}`)
})