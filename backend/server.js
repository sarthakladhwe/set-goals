const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const PORT = process.env.PORT || 5000

connectDB()

const app = express()   //Create instance of the express

app.use(express.json())
app.use(express.urlencoded({
    extended: false
}))

app.use('/api/goals', require('./routes/goalRoutes'))

app.use(errorHandler)

app.listen(PORT, () => console.log(`Server started on ${PORT}`))