/*
    main file, edit this file if needed.
*/

import dotenv from "dotenv"
import express from "express"
import loger from "morgan"
import cors from "cors"
import config from "./configs"

// import router
import Router from "./routes/index.route"

dotenv.config()

// call database connection here
// config.mongoose()

const app = express()

app.use(cors({
    origin : [config.env.ALLOW_CORS || "*"]
}))
app.use(loger("common"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// routes
app.use(Router)

// 404 handle
app.use((req, res, next) => {
    config.response(res, 404, false, "path not found!")
})

// error handle
app.use((err, req, res, next) => {
    config.response(res, 500, err)
})

app.listen(config.env.PORT, () => {
    console.log(`Apps runing on port ${config.env.PORT}`)
})
