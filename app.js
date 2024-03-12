const express = require("express");
const app = express();
const ejsMate = require("ejs-mate");
const path = require("path");
const ejs = require("ejs");




app.engine('ejs',ejsMate);
app.set("view engine",'ejs');
app.use(express.static(path.join(__dirname,"/public")));
app.set("views",path.join(__dirname,"views"));


app.listen(3000,()=>{
    console.log("server is started");
})

app.get("/",(req,res)=>{
    res.render("listings/home.ejs");
})

app.get("/whatwedo",(req,res)=>{
    res.render("listings/whatwedo.ejs");
})

app.get("/rangeofservices",(req,res)=>{
    res.render("listings/rangeofservices.ejs")
})
app.get("/esteemed-partners",(req,res)=>{
    res.render("listings/esteemed-partners.ejs")
})