const express = require("express")
const helmet = require("helmet")
const cors = require("cors")

//routers
const authRouter = require("./auth/auth-router.js")
const usersRouter = require("./users/users-router")
const equipmentRouter = require("./equipment/equipment-router")
const requestsRouter = require("./requests/requests-router")

const server = express()

server.use(express.json())
server.use(helmet())
server.use(cors())

//endpoints
server.use("/api/auth", authRouter)
server.use("/api/users", usersRouter)
server.use("/api/equipment", equipmentRouter)
server.use("/api/requests", requestsRouter)

//catch all
server.use((err, req, res, next) =>{ // eslint-disabled-line
 server.status(err.status || 500).json({
     message: err.message,
     stack: err.stack
 })
})

server.get("*", (req, res) =>{
    res.send(`<h2>"Server running"</h2>`)
})

module.exports = server