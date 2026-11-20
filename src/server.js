require("dotenv").config()
const express = require("express")

const conectDatabase = require("./config/database.js")
const logger = require("./middlewares/loggerMiddleware.js")
const errorHandler = require("./middlewares/errorMiddleware.js")
const productRoutes = require("./routes/productRoutes.js")
const userRoutes = require("./routes/userRoutes.js")
const authRoutes = require("./routes/authRoutes.js")
const profileRoutes = require("./routes/profileRoutes.js")
const orderRoutes = require("./routes/orderRoutes");


const app = express()

conectDatabase()

app.use(express.json())
app.use(logger)

app.use(productRoutes)
app.use(userRoutes)
app.use(authRoutes)
app.use(profileRoutes)
app.use(orderRoutes);

app.use((req, res) => {
    res.status(404).json({
        erro: "Rota não encontrada"
    })
})

app.use(errorHandler)

const port = process.env.PORT


app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})