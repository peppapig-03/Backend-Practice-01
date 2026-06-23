import express from "express"
import cont from "../controllers/dashboardController.js"
import authVer from "../../middleware/authVerification.js"
import dashboardController from "../controllers/dashboardController.js"
import parsing from "../../middleware/parsing.js"
const router=express.Router()
router.use(parsing.cookieParser)
router.use(authVer.validSession)
router.get("/", dashboardController.renderDashboard)

export default router