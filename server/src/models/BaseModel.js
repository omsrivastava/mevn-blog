import mongoose from 'mongoose'

import config from '../config/index.js'


const Model = async (name, schema) => {
    try {
        const conn = await mongoose.createConnection(config.dbURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })

        return conn.model(name, schema)
    } catch (error) {
        console.log(`Error in establishing DB connection: ${error}`);
    }
}

export default Model