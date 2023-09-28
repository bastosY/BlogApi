const express = require("express")
const router = express.Router()

// Endpoint de criação de postagens no blog
router.post("/posts", (req, res) => {

})

// Endpoint de retorno de todas as postagens do blog
router.get("/posts", (req, res) => {
    res.send("Oi")
})

// Endpoint de retorno de uma postagem por ID
router.get("/posts/:id", (req, res) => {

})

// Endpoint de atualização de uma postagem por ID
router.put("/posts/:id", (req, res) => {

})

// Endpoint de delete de uma postagem por ID
router.delete("/posts/:id", (req, res) => {

})

module.exports = router
