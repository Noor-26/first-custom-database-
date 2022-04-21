var express = require('express')
var cors = require('cors')
var app = express()

const port = process.env.PORT || 5000
const users = [
  {id:1,name:"Noor",email:"noorkhan@gmail.com",phone:"01804020984"},
  {id:2,name:"Rocky",email:"Rockykhan@gmail.com",phone:"01732020984"},
  {id:3,name:"Allu",email:"Allukhan@gmail.com",phone:"01807430984"},
  {id:4,name:"Joldib",email:"Joldibkhan@gmail.com",phone:"01804026434"},
  {id:5,name:"heroalom",email:"heroalomkhan@gmail.com",phone:"01845020984"}
]

app.use(cors())
app.use(express.json())
app.get('/', (req, res) => {
    res.send('Starting the new server for node jsjj!')
  })
  app.get('/user',(req,res) => {
    if(req.query.name){
          const seached = req.query.name.toLowerCase()
          const match = users.filter(user => user.name.toLowerCase().includes(seached))
          res.send(match)
    }
    else{

      res.send(users)
    }
  })

app.post('/user',(req,res) => {
  console.log("request",req.body)
  const user = req.body
  user.id = users.length + 1
  users.push(user)
  res.send(user)
})

  app.get('/user/:id', (req, res) => {
    const Id = req.params.id 
    const user = users.find(user => user.id == Id)
    res.send(user)
  })

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

  