const express = require('express');
const DB = require('./db/knex')
const cors = require('cors')



const app = express()
app.use(express.json())
app.use(cors())


app.post('/update_owner' , (req,res)=>{
       const body = req.body
       DB.updateOwnerId(body)
       .then(data => console.log('after saving the db', data))
       .catch(err => console.log(err))
})



app.delete('/deleteOwner/:id', (req, res) => {
  const idOwner = req.params.id
  DB.deleteOwner(idOwner)
    .then( res.json({success:true}))
    .catch(err => console.log(err))
})



app.get('/uniqueOwner/:id', (req, res) => {

  return DB.getIdOwner(req.params.id)
    .then(data => res.send(data))
    .catch(err => console.log(err))
})


app.get('/allowners', (req, res) => {
  return DB.getOwners()
    .then(owner => res.send(owner))
    .catch(e => console.log(e))

})



app.post('/setOwners', (req, res) => {
  DB.setOwners(req.body)
    .then(data => res.json(data))
    .catch(err => res.json({ msa: err }))
})



app.listen(8080, () => {
  console.log('listen to port 8080');
})