const express = require('express')
const { getOwnerById } = require('./controller/owners.controller')
const app = express()



app.get('/api/owners/:id', getOwnerById)

app.listen(9090, (err)=>{
    if(err) console.log(err)
    else {console.log('listening on port 9090')}
})