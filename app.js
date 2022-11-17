const express = require('express')
const logger = require('morgan')
const cors = require('cors')
const PORT = 3001
const searchController = require('./controllers/SearchController.js')
const randomController = require('./controllers/RandomController.js')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(logger('dev'))

app.get('/search', searchController.getSearch)
app.get('/random', randomController.getRandom)

app.get('/', (req,res) => {
    res.send({ msg: 'server running' })
})


app.listen(PORT, ()=>console.log(`working on port ${PORT}`))