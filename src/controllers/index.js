/*
    controller file, edit this file to write your controller
*/

import config from "../configs/index.js"

export default {
    getHelloWolrd: async (req, res, next) => {
        try {
            config.response(res, 200, "Hello wolrd!", [
                {
                    name : "jhon",
                    address : "jakarta",
                    "code" : "B"
                },
                {
                    name : "doe",
                    address : "Jogja",
                    "code" : "-"
                },
            ], {
                pages : 5,
                nextPages : 2,
                currentPages : 1
            })
        } catch (error) {
            config.response(res, 400, error.message)
        }
    },
}
