var express = require('express');
var path = require('path');

var app = express();

var PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  console.log('Hello World');
});

app.listen(PORT, () => {
  console.log('App listening on PORT: ' + PORT);
});
