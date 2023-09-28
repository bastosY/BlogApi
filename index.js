require('dotenv').config()
const port = process.env.PORT

const express = require('express')
const blogRoutes = require('./src/routes/blogRoutes')
const userRoutes = require('./src/routes/userRoutes')

const app = express()
app.use(blogRoutes)
app.use(userRoutes)
app.use(express.json())

const startServer = async () => {
    app.listen(port, () => {
        console.log("Server started... port: "+port)
    })
}

startServer()