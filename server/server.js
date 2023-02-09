const express = require('express')
const app = express()
const port = 8000
var cors = require('cors')

app.use(express.json()); 

app.use(cors({
  methods: ['GET','POST','DELETE','OPTIONS']
}))


var ITEMS = {
  0: {
      "id": 1,
      "user_id": "user1234",
      "keywords": ["hammer", "nails", "tools"],
      "description": "A hammer and nails set",
      "image": "http://placekitten.com/200/100",
      "lat": 51.2798438,
      "lon": 1.0830275,
      "date_from": "2021-11-22T08:22:39.067408",
  },
 /* 1: {
      "id": 2,
      "user_id": "user1546",
      "keywords": ["hammer", "nails", "tools"],
      "description": "A hammer and nails set",
      "image": "http://placekitten.com/200/100",
      "lat": 1,
      "lon": 1,
      "date_from": "2021-11-22T08:22:39.067408",
      
  }
  */
}

// POST
app.post('/item', (req, res) => {
  const itemID = Object.keys(ITEMS).length +1
  const newDate = new Date().toJSON().slice(0,10)  
  if(ITEMS.hasOwnProperty(itemID)){ 
    itemID = itemID + 1
  }
  if (req.body.user_id && req.body.keywords && req.body.description && req.body.lat && req.body.lon !==""){ 
    ITEMS[itemID] = { 
      id: itemID,
      user_id: req.body.user_id,
      keywords: req.body.keywords,
      description: req.body.description,
      lat: req.body.lat,
      lon: req.body.lon,
      date_from: newDate,
      date_to: newDate
    }
    res.status(201).json(ITEMS[itemID]) 
  }
  else {
    res.status(405).json('Field is missing')
  }
})
  
// GET
app.get('/', (req, res) => {
    res.send('<html><body>Your Items</body></html>')
  })

app.get('/item/:id', (req,res) => {
  if(ITEMS[req.params.id] === undefined){ 
    res.status(404).json('This item does not exist')
  } else{
    res.status(200).json(ITEMS[req.params.id])
  }
})

// Filtering username 
app.get('/items', (req,res)=> {
  if (req.query.user_id){
    res.status(200).json(Object.values(ITEMS).filter(o => o.user_id == req.query.user_id)) 
    return;
  }
  res.status(200).json(Object.values(ITEMS))
})
  
app.get('/items', (req, res) => {
    res.send(ITEMS)
})
  
//DELETE
app.delete('/item/:id', (req, res) => {
  let idITEMS = parseInt(req.params.id) 
  if(ITEMS.hasOwnProperty(idITEMS)) 
{
  delete ITEMS[idITEMS]
  res.status(204).send('Deleted')
}  
else {
  res.status(404).send('This item cannot be found')
}
})

//CORS 
app.use(cors({
  origin: "http://localhost:8000/",
  methods: ['POST','GET','OPTIONS','DELETE'],
}));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
  // Exit with CTRL + C
process.on('SIGINT', function() {process.exit()})

