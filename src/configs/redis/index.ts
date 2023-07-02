import redis from "redis"
import config from ".."

const redisConnection = async () => {
    const client = await redis.createClient({
        url : config.env.REDIS_HOST
    })

    await client.on("connect", () => {
        console.log("Redis connection success !");
    })

    return client
}

export default redisConnection