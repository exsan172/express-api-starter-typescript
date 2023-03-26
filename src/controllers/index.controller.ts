/*
    controller file, edit this file to write your controller
*/
import { Request, Response } from "express"
import config from "../configs/index.config"

export default {
    getHelloWolrd: async (req:Request, res:Response, next) => {
        try {
            config.response(res, 200, true, "hello wolrd routes", [], [])
        } catch (error) {
            config.response(res, 400, error.message)
        }
    },
}
