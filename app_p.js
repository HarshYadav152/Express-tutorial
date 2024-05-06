const fs = require("fs");
const express = require("express");
const path = require("path");

const app = express();

const port = 80;

// EXPRESS SPECIFIC STUFF
app.use('/static',express.static('static')); // for serving static files jinhe user aasani se dekh sakta hai middleware

app.use(express.urlencoded()); // bring data to express

// PUG SPECIFIC STUFF
app.set('view engine','pug'); // set the template engine as pug
app.set("views",path.join(__dirname,'views')); // set the views directory

// ENDPOINTS
app.get('/',(req,res)=>{
    // Handling GET request to the root URL
    const con = "This is the best content i have read";
    const params = {"title":"pug is the popular tmplate engine","content" : con};
    res.status(200).render("index.pug",params);
});

app.post("/",(req,res)=>{
    // Handling POST request to the root URL
    Name = req.body.name;
    age = req.body.age;
    gender = req.body.gender;

    let outputToWrite = ` The name of the client is ${Name}, ${age} year old, ${gender}`;

    fs.writeFileSync('output.txt',outputToWrite);
    const params = {'message':'Your form will be submitted successfully'};
    res.status(200).render('index.pug',params);
});


app.listen(port,()=>{
    console.log("The server running at port 80");
});

