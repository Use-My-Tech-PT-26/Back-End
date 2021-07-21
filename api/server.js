const express = require("express")
const helmet = require("helmet")
const cors = require("cors")

//routers


const server = express()

//middleware
server.use(helmet())
server.use(express.json())
server.use(cors())

//endpoints

server.get("*", (req, res) =>{
    res.send(`<h2>"Server running"</h2>`)
})

module.exports = server