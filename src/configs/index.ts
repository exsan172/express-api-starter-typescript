/*
    config file, edit this file to write your config
*/
import responseConfig from "./response"
import mongooseConnection from "./mongoose"
import sequelizeConnection from "./sequelize"
import redisConnection from "./redis"

const config = {
    env: process.env,
    response: responseConfig,
    mongoose : mongooseConnection,
    squelize : sequelizeConnection,
    redis : redisConnection
}

export default config
