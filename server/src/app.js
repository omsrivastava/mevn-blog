import express from 'express'

import bodyParser from 'body-parser'
import cors from 'cors'

import config from './config/index.js'
import apiRoutes from './routes/api/index.js'


const app = express()

// Middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

// Routes
app.use('/api/v1', apiRoutes)

// Home URL
app.get('/', (req, res) => {
    res.send(`Welcome to ${config.sitename}`)
})

// Starting Server
app.listen(config.port, () => console.log(`Server running on port: ${config.port}`))
