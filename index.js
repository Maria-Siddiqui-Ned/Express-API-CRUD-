const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.SERVER_PORT
// const mongoose = require('mongoose')
const BrandRouter = require('./api/brands/router')
const CategoryRouter = require('./api/category/router')
const ProductRouter = require('./api/products/router')


app.use(express.json())
app.use ('/api' , require('./api/users/router'))
app.use('/api', BrandRouter)
app.use('/api', CategoryRouter)
app.use('/api', ProductRouter)


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

//  mongoose.connect(process.env.MONGO_URL)
//   .then(() => console.log("DB Connected Successfully"))
//   .catch((err) => console.log(err.message))
