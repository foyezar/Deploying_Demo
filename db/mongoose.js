const mongoose = require('mongoose')

mongoose.Promise = global.Promise
// mongoose.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true })
// mongodb://<dbuser>:<dbpassword>@ds113134.mlab.com:13134/node-todo-api
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp', { useNewUrlParser: true })

module.exports = { mongoose }