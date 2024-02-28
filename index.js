require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res)=>{
    res.send('you are log in twitter')
})

app.get('/shoya', (req, res)=>{
    res.send('<h1> shoya uh are doing best ! </h1>')
})

app.get('/mono', (req, res)=>{
    res.send("momo is woorking....")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})