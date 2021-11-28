const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); 
const path = require('path');
const db = require("./models");
require('dotenv').config();

const app = express();

var corsOptions = {
  origin: 'http://localhost:3000'
}

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

require('./routes/authRoutes')(app);
require('./routes/friendRoutes')(app);
require('./routes/animeRoutes')(app);

app.listen(process.env.PORT, () => {
  console.log('App listening on PORT: ' + process.env.PORT);
});
