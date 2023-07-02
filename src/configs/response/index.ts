import { Response } from "express"

interface ErrorData {
    field   : string,
    message : string
}

const responseConfig = (res:Response, statusCode:number, success:boolean, message:string="", data:object=[], errors:Array<ErrorData>=[]) => {
    let dataJson = {
        statusCode,
        success,
        message,
        data,
        errors,
    }
    
    return res.status(statusCode).json(dataJson)
}

export default responseConfig