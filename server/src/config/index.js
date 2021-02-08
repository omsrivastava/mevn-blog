import { config } from 'dotenv'

config()

export default {
    sitename: process.env.SITENAME || 'MyApp',
    port: process.env.PORT || 3000,
    dbURL: process.env.DB_URL,
}