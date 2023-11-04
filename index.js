import express from 'express';
import bodyParser from 'body-parser';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

app.get(__dirname + '/', (req,res)=> { 
    res.send("<h1> hello, World </h1>");
});

app.listen(port, () => { 
    console.log("Server started listening");
});