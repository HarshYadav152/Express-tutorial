const express = require("express");
const path = require("path");

const app = express();

const port = 80;

// for serving static files jinhe user aasani se dekh sakta hai middleware
app.use('/static',express.static('static'));

// set the template engine as pug
app.set('view engine','pug');

// set the views directory
app.set("views",path.join(__dirname,'views'));

// our pug demo endpoint
app.get("/demo",(req,res)=>{
    res.status(200).render('demo',{ title :'Hey Harsh',message :'hello there how to use pug'});
});

app.get("/",(req,res)=>{
    res.status(200).send("This is our first express app for serving ststic file");
});

app.listen(port,()=>{
    console.log("The server running at port 80");
});

