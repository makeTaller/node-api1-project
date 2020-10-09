const express = require("express")
const { endianness } = require("os")
const db = require("./resource")

const server = express()

//this allows us to parse request JSON bodies,
server.use(express.json())

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

// step 1
server.post("/api/users",(req,res) =>{
    const newUser =req.body
    if ( !newUser.name  || !newUser.bio ){
       res.json( { errorMessage: "Please provide name and bio for the user." })
    }else {
        try{
            const newPost = db.createUser({
            name: req.body.name })
            res.status(201)
            res.json(newPost)
        }catch(error){
            console.log(error)
            res.status(500)
        }
    }
})

// step 2
server.get("/api/users/:id", (req, res) => {
    const id = req.params.id
    const user = db.getUserById(id)
    res.json(user)
})

// step 3
server.get("/api/users/:id", (req, res) => {
    res.json({})
})

// step 4 
server.delete("/api/users/:id", (req, res) => {
    //place code here
    const id = req.params.id
    const user = db.getUserById(id)

     if (user){ 
        db.deleteUser(id)
        res.status(204).end()
    } else { 
        res.status(404).json({
            message: " This user doent exist",
        })
    }

})

// step 5 
server.put("/api/users/:id", (req,res) => {
    //place code here
})

server.listen(8080, () => {
    console.log("server started")
})