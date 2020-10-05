const express = require("express")
const db = require("./resource")

const server = express()

server.get("/", (req,res) => {
    res.json({ message: "Hello, World" })
})

server.get("/users/:id", (req,res) => {

    const id = req.params.id
    const users = db.getUsers(id)

    if (user){ 
        res.json(users)
    } else { 
        res.status(404).json({
            message: " This user doent exist",
        })
    }
})

server.post("/api/users",(req,res) =>{
    res.json()
})

server.listen(8080, () => {
    console.log("server started")
})