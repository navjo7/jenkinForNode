const express = require('express')

const app = express()

app.get('/',(req,res)=>{
    res.status(200).send({
        name:"navjot"
    })
})

app.listen(3000,()=>{
    console.log("running on port 3000")
})

module.exports = {app}