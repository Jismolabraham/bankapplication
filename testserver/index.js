const express=require('express')
const app=express()

app.get('/',(req,res)=>{
    res.send("GET METHOD")
})
app.listen(3000,()=>{
    console.log("server started at 3000");
})
