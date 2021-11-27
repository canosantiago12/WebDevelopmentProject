const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); 
const path = require('path');
const db = require("./models");
require('dotenv').config()

const app = express();

var corsOptions = {
  origin: 'http://localhost:3000'
}

const PORT = process.env.PORT || 3001;

app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

db.mongoose
.connect(process.env.MONGO_CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("Successfully connect to MongoDB.");
})
.catch(err => {
  console.error("Connection error", err);
  process.exit();
});

app.get('/', (req, res) => {
  res.json('Hello World');
});

app.listen(PORT, () => {
  console.log('App listening on PORT: ' + PORT);
});
