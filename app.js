const express = require('express');

const app = experss()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/aobut', (req, res) => {
    res.send('about route')
})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})