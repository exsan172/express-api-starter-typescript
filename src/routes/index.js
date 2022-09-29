/*
    routes file, edit this file to write your routes
*/

import express from "express"
import Controllers from "../controllers/index.js"

const router = express.Router()

router.get("/", Controllers.getHelloWolrd)

export default router
