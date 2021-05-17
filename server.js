const express = require("express");
const app= express();
const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",(req,res)=>{
    // res.sendFile("/Users/subashpaul/Downloads/untitled folder/.vscode/calculator/index.html");
    res.sendFile(__dirname+"/index.html");
})
app.post("/",(req,res)=>{
    let n1= Number(req.body.num1);
    let n2= Number(req.body.num2);
    let result = n1+n2;
    res.send(`<h1 style="color:red; text-align:center">The Answer is ${result}</h1>`);
})

app.listen(3000,()=>{
    console.log("hello u are there");
});
