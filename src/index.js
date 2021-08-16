const express = require('express')
var cors = require('cors')
const { movieRouter } = require('./movies/routes');

const app = express()
const port = 4000

app.use(express.json())
app.use(cors())

app.use('/movies', movieRouter);

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})
