const express = require('express')
const connectDB = require('./db/connectDB')
const cors = require('cors')
require('dotenv').config()
const mainRoute = require('./routes/user')

connectDB().catch(err => console.log('Error', err))

const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended: false}))

app.use('/api', mainRoute)



app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`)
})