const express = require('express')
const app = express()
const PORT = 8000

const rappers = {
  '21 savage': {
    'birthName':'bla bla',
    'birthLocation': 'London',
    'age': 29,
  },
  'chicken poop': {
    'birthName':'Poop a la Poop',
    'birthLocation': 'Pooooooooland',
    'age': 100,
  },
  'unknown': {
    'birthName':'unknown',
    'birthLocation': 'unknown',
    'age': 0,
  },

}
app.get('/', (req,res)=>{
  res.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (req,res)=>{
  // console.log(req.params.name.toLowerCase())

  const rapperName = req.params.name.toLowerCase()
  if(rappers[rapperName]){
    res.json(rappers[rapperName])
  }else{
    res.json(rappers['unknown'])
  }
})

app.listen(PORT, ()=>{
  console.log(`The server is now running on port ${PORT}: Better go catch it!`)
})