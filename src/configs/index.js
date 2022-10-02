/*
    config file, edit this file to write your config
*/

const config = {
    env: process.env,
    response: (res, code, message=null, data = null, otherData=null) => {
        let dataJson = {
            statusCode: code,
        }

        if(message !== null) {
            dataJson["message"] = message
        }

        if (data !== null) {
            dataJson["data"] = data
        }

        if(otherData !== null) {
            for(const i in otherData) {
                dataJson[i] = otherData[i]
            }
        }

        return res.status(code).json(dataJson)
    },
}

export default config
