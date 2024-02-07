const express = require('express')
const { getOwnerById, getOwners } = require('./controller/owners.controller')
const app = express()


// 1 - GETting Owners by Id
app.get('/api/owners/:id', getOwnerById)

// 2 - GETting Owners
app.get('/api/owners', getOwners)



app.listen(9090, (err)=>{
    if(err) console.log(err)
    else {console.log('listening on port 9090')}
})