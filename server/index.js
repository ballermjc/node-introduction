const express           = require('express'),
      bodyParser        = require('body-parser'),
      books_controller  = require('./controllers/books_controller'),
      app               = express();

app.use(bodyParser.json());

app.use(express.static(__dirname + '/../public/build'));

const baseURL = "/api/books";

app.get(baseURL, books_controller.read);

app.post(baseURL, books_controller.create);

app.put(`${baseURL}/:id`, books_controller.update);

app.delete(`${baseURL}/:id`, books_controller.delete);

app.listen(3000, console.log('Go Ninja Go Ninja Go!'));