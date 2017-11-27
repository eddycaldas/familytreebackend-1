const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const routes = {
  family: require('./routes/family')
}

app.use('/family', routes.family)

app.listen(PORT, () => console.log(`listening on port ${PORT}`))