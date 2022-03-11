const express = require("express")
const app = express()
var port = 8000

app.use(express.json())



app.listen((port),()=>{
    console.log(`server is runing in ${port} `);
})