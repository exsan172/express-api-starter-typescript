/*
    config file, edit this file to write your config
*/

const config = {
    env: process.env,

    response: (res, code, message, data = null) => {
        let dataJson = {
            statusCode: code,
            message: message,
        }

        if (data !== null) {
            dataJson["data"] = data
        }

        return res.status(code).json(dataJson)
    },
}

export default config
