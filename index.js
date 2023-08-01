const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.SERVER_PORT
// const mongoose = require('mongoose')

app.use(express.json())
app.use ('/api' , require('./api/users/router'))
// app.use ('/api' , require('./api/products/router'))


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

//  mongoose.connect(process.env.MONGO_URL)
//   .then(() => console.log("DB Connected Successfully"))
//   .catch((err) => console.log(err.message))
