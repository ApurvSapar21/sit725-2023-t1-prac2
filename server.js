const express = require('express')
const app = express()

app.use(express.static(__dirname+'/'))

app.get("/",(req,res) => {
    res.render('index.html');
})

app.get("/addTwoNumbers",(req,res) => {
 let num1 = req.query.number1;
 let num2 = req.query.number2;

 let sum = parseInt(num1) +  parseInt(num2);

 let obj = {statusCode:200, message:'success', data:sum}

 res.json(obj);
})

app.post("/addTwoNumbers",(req,res) => {

})


var port = process.env.port || 3000;

app.listen(port,()=>{
    console.log("App running at http://localhost:"+port)
})
