const express = require('express')
const app = express()
const cors = require('cors')

const taskRoute = require('./Routes/routes.js')
//middleware
app.use(cors())
app.use(express.json())
app.use('/api', taskRoute)

//database

app.listen(5001, () => {
  console.log('server started on port 5001')
})
