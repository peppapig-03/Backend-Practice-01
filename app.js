import express from "express"
import ejs from "ejs"
import path from "path"
import url from "url"
import loginRouter from "./routers/login.js"
import registerRouter from "./routers/register.js"
const app=express()
app.set("view engine", "ejs")
const filename=url.fileURLToPath(import.meta.url)
const dirname=path.dirname(filename)

app.set("views", path.join(dirname,"views"))
app.use("/css", express.static(path.join(dirname, "public", "css")))
app.use("/javascript", express.static(path.join(dirname, "public", "javascript")))

app.use("/login", loginRouter)
app.use("/register", registerRouter)
app.listen(3000)