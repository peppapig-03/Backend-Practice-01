import {Pool} from "pg"
import dotenv from "dotenv"
dotenv.config()
const pool= new Pool({
    host:process.env.dbHost,
    port:process.env.dbPort,
    database:process.env.dbName,
    user:process.env.dbUser,
    password: process.env.dbPassword
})
export default pool