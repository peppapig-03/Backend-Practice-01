import express from "express"
import cont from "../controllers/dashboardController.js"
import authVer from "../../middleware/authVerification.js"
import dashboardController from "../controllers/dashboardController.js"
import parsing from "../../middleware/parsing.js"
const router=express.Router()
router.use(parsing.cookieParser)
router.use(authVer.validSession)
router.get("/", dashboardController.renderDashboard)
router.delete("/delete/project/:projectid",authVer.authProject,dashboardController.deleteProject)
router.post("/new/todoitem/:projectid", authVer.authProject,dashboardController.postTodo)
export default router