const dotenv = require("dotenv");
dotenv.config();

const express = require('express')
var cors = require('cors')
const { movieRouter } = require('./movies/routes');
const models = require("./db/models");

const app = express()
const port = 4000

app.use(express.json())
app.use(cors())

app.use('/movies', movieRouter);

models.sequelize.sync({ force: true }).then(result => {
  console.log(result);
  app.listen(process.env.PORT || port, () => {
    console.log(`Listening at ${process.env.PORT || port}`)
  })
}).catch(err => {
  console.log(err);
});
