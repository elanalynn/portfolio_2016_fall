const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 5000

app.use(express.static(path.join(__dirname, 'build')))

app.listen(port, () => {
  console.log('Listening on port ' + port)
})

module.exports = app
