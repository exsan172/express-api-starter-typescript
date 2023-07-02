import { Dialect, Sequelize } from "sequelize"
import config from ".."

const sequelizeConnection = async () => {
    const sequelize = new Sequelize(config.env.SEQUILIZE_DB, config.env.SEQUILIZE_USERNAME, config.env.SEQUILIZE_PASSWORD, {
        host : config.env.SEQUILIZE_HOST,
        dialect : config.env.SEQUILIZE_DIALECT as Dialect
    })

    try {
        await sequelize.authenticate()
        console.log("Sequilize connection success !");
        
    } catch (error) {
        console.log("Sequilize connection failed ! ", error);
    }
}

export default sequelizeConnection