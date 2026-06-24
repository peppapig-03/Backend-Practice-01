import express from "express"
import ejs from "ejs"
import path from "path"
import url from "url"
import loginRouter from "./auth/routers/login.js"
import registerRouter from "./auth/routers/register.js"
import dashboardRouter from "./dashboard/routers/dashboard.js"
const app=express()
app.set("view engine", "ejs")
const filename=url.fileURLToPath(import.meta.url)
const dirname=path.dirname(filename)

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.set("views", path.join(dirname,"views"))
app.use("/css", express.static(path.join(dirname, "public", "css")))
app.use("/javascript", express.static(path.join(dirname, "public", "javascript")))


app.use("/login", loginRouter)
app.use("/register", registerRouter)
app.use("/dashboard",dashboardRouter)
app.listen(3000)