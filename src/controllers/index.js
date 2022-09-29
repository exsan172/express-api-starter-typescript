/*
    controller file, edit this file to write your controller
*/

import config from "../configs/index.js"

export default {
    getHelloWolrd: async (req, res, next) => {
        try {
            config.response(res, 200, "Hello wolrd!")
        } catch (error) {
            config.response(res, 400, error.message)
        }
    },
}
