const express = require("express");
const fs = require("fs");

const port = 80;
const app = express();


const home = fs.readFileSync('./index.html');
const about = fs.readFileSync('./about.html');
const contact = fs.readFileSync('./contact.html');
const services = fs.readFileSync('./services.html');

app.get("/",(req,res)=>{
    // res.type(".html");
    res.setHeader("Content-Type","text/html");
    res.type("text/html").status(200).send(home);
});
app.get("/about",(req,res)=>{
    // res.setHeader("content-type","text/html");
    res.type("text/html").send(about);
});
app.get("/contact",(req,res)=>{
    // res.setHeader("content-type","text/html");
    res.type("text/html").send(contact);
});
app.get("/services",(req,res)=>{
    // res.setHeader("content-type","text/html");
    res.type("text/html").send(services);
});
// app.post("/services",(req,res)=>{
//     res.send("This is my first express app services app with POST request");
// });
app.get("/this",(req,res)=>{
    res.status(404).send("<h1>This page is not found</h1>");
});

app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});