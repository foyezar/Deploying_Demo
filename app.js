const express  = require('express'),
      app      = express(),
      { Todo } = require('./models/todo')

const port = process.env.PORT || 3000

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('home')
})

app.get('/about', (req, res) => {
  res.render('about')
})

app.post('/todos', (req, res) => {
  Todo.create({
    text: req.body.text
  }).then((doc) => {
    res.send(doc)
  }).catch(e => {
    res.status(400).send(e)
  })
})

app.listen(port, () => console.log(`Server started on ${port}`));