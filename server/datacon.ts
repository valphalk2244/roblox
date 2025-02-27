import mongoose from "mongoose"

const username = process.env.MONGO_USERNAME || 'valphalk22'
const password = process.env.MONGO_PASSWORD || 'vaL7fS1MsuUW7pGr'
const db_name = process.env.MONGGO_DBNAME || 'cat'

const uri = `mongodb+srv://${username}:${password}@cluster0.xfnsh.mongodb.net/?retryWrites=true&w=majority&appName=${db_name}`


export const mongodb = {
    connect: async function () {
        try {
            await mongoose.connect(uri)
            console.log("------------- mongoDB Connected!!!!! -------------")
        } catch (error) {
            console.error("------------- mongoDB connected fail -------------")
            console.error(error)

        }
    }
}