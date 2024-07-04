const http = require('http')
require('dotenv').config()
const app = require('./src/app')
const connectDB = require('./src/db/connectDB')

const PORT = process.env.PORT || 6000

const server = http.createServer(app)

connectDB()

server.listen(PORT, () => console.log("Server up and running!"))