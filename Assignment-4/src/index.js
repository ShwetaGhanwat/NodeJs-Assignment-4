const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000

app.set('views','./views');
app.set('view engine','ejs')
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
// your code goes here
app.get('/',(req,res)=>{
   res.render("home.ejs")
})
app.get('/add',(req,res)=>{
    res.render("add.ejs")
    
 })
 app.get('/sub',(req,res)=>{
    res.render("sub.ejs")
    
 })
 app.get('/multiply',(req,res)=>{
    res.render("multiply.ejs")
    
 })
 app.get('/divide',(req,res)=>{
    res.render("divide.ejs")
    
 })

app.post('/add',(req,res)=>{
 
    let num1=parseInt(req.body.num1);
    let num2=parseInt(req.body.num2);
    if(isNaN(num1) || isNaN(num2) ){
       
        // res.redirect("/")
        res.json({
                "status":"Error",
                "message":"Invalid data types"
            })
        
    }
    else if(num1 <-1e6 || num2 <-1e6 || (num1+num2)<-1e6){
        
        // res.redirect("/")
         res.json({
            "status":"Error",
            "message":"Underflow"
        })

    }
    else if(num1 >1e6 || num2 >1e6 || (num1+num2)>1e6){
        // res.redirect("/")
     
         res.json({
            "status":"Error",
            "message":"Overflow"
        })
        

    }
    else{
    
        res.json({
            "status":"success",
            "message": "the sum of given two numbers", 
            "sum": num1+num2
        })
        

    }
//   
    
    
})
app.post('/sub',(req,res)=>{
    let num1=parseInt(req.body.num1);
    let num2=parseInt(req.body.num2);
   if(isNaN(num1) || isNaN(num2) ){
    // res.send("Invalid data types")
    return res.json({
        "status":"Error",
        "message":"Invalid data types"
    })
    }
    if(num1 <-1e6 || num2 <-1e6 || (num1-num2)<-1e6){
        // res.send("Underflow")
        return res.json({
            "status":"Error",
            "message":"Underflow"
        })
    }
    // if(num1 >1e6 || num2 >1e6 || (num1-num2)>1e6){
    //     return res.json({
    //         "status":"Error",
    //         "message":"Overflow"
    //     })
    // }
    // res.send(`the difference of given two numbers:-${num1-num2}`)
    res.json({
        "status":"success",
        "message": "the difference of given two numbers", 
        "Difference": num1-num2
    })
    // res.send("substraction")
})
app.post('/multiply',(req,res)=>{
 
    let num1=parseInt(req.body.num1);
    let num2=parseInt(req.body.num2);
    if(isNaN(num1) || isNaN(num2) ){
        // res.send("Invalid data types")
        return res.json({
            "status":"Error",
            "message":"Invalid data types"
        })
    }
   
    if(num1 <-1e6 || num2 <-1e6 || (num1*num2)<-1e6){
        // res.send("Underflow")

        return res.json({
            "status":"Error",
            "message":"Underflow"
        })
    }
    // res.send(`The product of given numbers:- ${num1*num2}`)
    res.json({
        "status":"success",
        "message": "The product of given numbers", 
        "result": num1*num2
    })
})

app.post('/divide',(req,res)=>{
 
    let num1=parseInt(req.body.num1);
    let num2=parseInt(req.body.num2);
    if(isNaN(num1) || isNaN(num2) ){
        
         res.json({
            "status":"Error",
            "message":"Invalid data types"
        })
        // res.send("Invalid data types")
    }
   else if(num2===0){
        // res.send("Cannot divide by zero")
        return res.json({
            "status":"Error",
            "message":"Cannot divide by zero"
        })
    }
    else if(num1 <-1e6 || num2 <-1e6 || (num1/num2)<-1e6){
        // res.send("Underflow")
        return res.json({
            "status":"Error",
            "message":"Underflow"
        })
    }
    else if(num1 >1e6 || num2 >1e6 || (num1/num2)>1e6){
        // res.send("Overflow")
        return res.json({
            "status":"Error",
            "message":"Overflow"
        })
    }
    // res.send(`The division of given numbers:- ${num1/num2}`)
    else{
    res.json({
        "status":"success",
        "message": "The division of given numbers", 
        "result": num1/num2
    })
    }
})

app.listen(3000, () => console.log(`App listening on port 3000!`))

module.exports = app;