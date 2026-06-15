import express from "express"
import cont from "../controllers/loginController.js"
const router=express.Router()

router.get("/", (req,res)=>cont.renderLogin(req,res))
export default router