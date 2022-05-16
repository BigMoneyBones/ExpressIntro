const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Jesse Raines')
})

app.get('search', (req, res) => {
    res.statusMessage(201).send('yes this is a page!')
})

app.get('/about', (req, res) => {
    res.send('This is where you learn about me!')
})

app.get('/contact', (req, res) => {
    res.send('Here you will get my contact info!')
})

app.get('/hobbies', (req, res) => {
    res.send('now you finna see my hobbies/interests')
})

app.get('*', (req, res) => {
    res.status(404).send()
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})