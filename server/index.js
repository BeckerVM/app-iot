const express = require('express')
const app = express()

const Category = require('./models').Category
const Device = require('./models').Device

app.get('/', async (req, res) => {
  try {
    const categories = await Category.findAll()
    const data = []
    
   for(let i = 0; i < categories.length; i++) {
     data.push({
       category: categories[i],
       subcategories: await categories[i].getSubcategories()
     })
   }

    res.json(data)

  } catch (error) {
    res.status(500).json(error)
  }
})


const PORT = 5000

app.listen(PORT, () => {
  console.log('Server starting in port ' + PORT)
})