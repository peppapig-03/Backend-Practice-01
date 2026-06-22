import {Pool} from "pg"
import path from "path"
import url from "url"
process.loadEnvFile(path.join(path.dirname(url.fileURLToPath(import.meta.url)), "..", ".env"))
const pool= new Pool({
    host:process.env.dbHost,
    port:process.env.dbPort,
    database:process.env.dbName,
    user:process.env.dbUser,
    password: process.env.dbPassword
})
export default pool